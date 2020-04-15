class Interaction {
  constructor(index, renderHook, parent) {
    this.parent = parent;
    this.index = index;
    this.renderHook = renderHook;
    this.interactionData = renderHook.dataset;
    this.name = this.interactionData.name;
    this.required = this.interactionData.required === "true" ? true : false;
    this.interactionUnits = [];
    Xapi.sendStmt(new Statement(this, "interacted").finalStatement);
  }

  get id() {
    let type = this.interactionData.type;
    let list = App.renderHooks.filter((i) => {
      return i.dataset.type === type;
    });
    let num = list.indexOf(this.renderHook);
    return `${this.parent.id}/${type}_${num}`;
  }

  get completed() {
    let incompleteUnits = this.interactionUnits.filter(function (u) {
      if (u.completed === false) {
        return u;
      }
    });

    return incompleteUnits.length > 0 ? false : true;
  }

  set completed(v) {
    if (this.completed) {
      Xapi.sendStmt(new Statement(this, "completed").finalStatement);
      this.parent.completed = true;
    }
  }

  get result() {
    let result = 0;
    this.interactionUnits.forEach(function (u) {
      if (u.result === true) {
        result++;
      }
    });
    return result === this.interactionUnits.length;
  }
}

class ScorableInteraction extends Interaction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this._score = 0;
    this.minScore = Number(this.interactionData.min_score);
  }

  get score() {
    return this.interactionUnits[0].score;
  }

  get result() {
    return this.score >= this.minScore ? true : false;
  }

  get completed() {
    let incompleteUnits = this.interactionUnits.filter(function (u) {
      if (u.completed === false) {
        return u;
      }
    });

    return incompleteUnits.length > 0 ? false : true;
  }

  set completed(v) {
    if (this.completed) {
      let result = this.result ? "passed" : "failed";
      Xapi.sendStmt(new Statement(this, "completed").finalStatement);
      Xapi.sendStmt(new Statement(this, result).finalStatement);
      this.parent.completed = true;
    }
  }
}

class IterableScorableInteraction extends ScorableInteraction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.shuffle = this.interactionData.shuffle;
    this.amountOfUnits = this.getAmountOfUnits();
    this.unitsToComplete = this.getUnitsToComplete();
    this.unitsList = this.getUnitsList();
  }

  getUnitsToComplete() {
    if (this.interactionData.units_to_complete === "0") {
      return this.amountOfUnits;
    } else {
      return Number(this.interactionData.units_to_complete);
    }
  }

  getAmountOfUnits() {
    if (this.interactionData.amount_of_units === "0" || this.interactionData.amount_of_units > db[this.index].iterables.length) {
      return db[this.index].iterables.length;
    } else {
      return Number(this.interactionData.amount_of_units);
    }
  }

  getUnitsList() {
    let unitsList = Array.from(db[this.index].iterables);
    if (this.shuffle === "true") {
      unitsList = App.shuffle(unitsList);
    }
    let shortList = unitsList.slice(0, this.amountOfUnits);
    return shortList;
  }

  get completed() {
    if (this.interactionUnits.length !== this.unitsToComplete) {
      return false;
    } else if (this.interactionUnits.length === this.unitsToComplete) {
      let incompleteUnits = this.interactionUnits.filter(function (u) {
        if (u.completed === false) {
          return u;
        }
      });
      return incompleteUnits.length > 0 ? false : true;
    }
  }

  set completed(v) {
    if (this.completed) {
      let result = this.result ? "passed" : "failed";
      Xapi.sendStmt(new Statement(this, "completed").finalStatement);
      Xapi.sendStmt(new Statement(this, result).finalStatement);
      this.parent.completed = true;
    }
  }

  get score() {
    let score = 0;
    this.interactionUnits.forEach(function (u) {
      if (u.result === true) {
        score++;
      }
    });
    return score;
  }

  get unitsCompleted() {
    let completed = 0;
    this.interactionUnits.forEach(function (u) {
      if (u.completed === true) {
        completed++;
      }
    });
    return completed;
  }

  get result() {
    return this.score >= this.minScore &&
      this.unitsCompleted >= this.unitsToComplete ?
      true :
      false;
  }
}

class LangExerciseInteraction extends IterableScorableInteraction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.insideBox = this.interactionData.inside_box;
    this.init();
  }

  createUnit(num) {
    if (num < this.unitsList.length) {
      let unit = new LangExerciseUnit(
        num,
        this,
        "langExerciseUnit",
        this.unitsList[num]
      );
      this.interactionUnits.push(unit);
    }
  }

  init() {
    this.createUnit(0);
  }
}

class SurveyInteraction extends Interaction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.interactionUnits = [];
    this.init();
  }

  createUnit(num) {
    let unit
    if (this.interactionData.subtype && this.interactionData.subtype === 'creativity') {
      unit = new CreativitySurvey(
        num,
        this,
        "surveyUnit",
        db[this.index]
      )
    } else {
      unit = new SurveyUnit(
        num,
        this,
        "surveyUnit",
        db[this.index]
      )
    }

    this.interactionUnits.push(unit);
  }

  init() {
    this.createUnit(0);
  }
}

class LongreadInteraction extends Interaction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.interactionUnits = [{
      result: false,
      completed: false,
    }, ];
    this.init();
  }

  init() {
    let that = this;

    let options = {
      rootMargin: "0px 0px 700px 0px",
    };
    this.observer = new IntersectionObserver(function (entries, observer) {
      // let that = this
      entries.forEach(function (entry) {
        if (entry.isIntersecting === true) {
          console.log("Longread completed");
          that.observer.unobserve(entry.target);
          that.interactionUnits[0].result = true;
          that.interactionUnits[0].completed = true;
          that.completed = true;
        }
      });
    }, options);
    this.observer.observe(this.renderHook);
    App.observers.push(this.observer);
  }
}

class CommentInteraction extends Interaction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.init();
  }

  createUnit(num) {
    let unit = new CommentUnit(num, this, "commentUnit", db[this.index][num]);
    this.interactionUnits.push(unit);
  }

  init() {
    this.createUnit(0);
  }
}

class RatingInteraction extends Interaction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.init();
  }

  createUnit(num) {
    let unit = new RatingUnit(num, this, "ratingUnit", db[this.index][num]);
    this.interactionUnits.push(unit);
  }

  init() {
    this.createUnit(0);
  }
}

class DictantInteraction extends ScorableInteraction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.insideBox = this.interactionData.inside_box;
    this.init();
  }

  createUnit(num) {
    let unit = new DictantUnit(num, this, "dictantUnit", db[this.index][num]);
    this.interactionUnits.push(unit);
  }

  init() {
    this.createUnit(0);
  }
}

class LetterBox {
  constructor(parent) {
    this.parent = parent;
    this.ruleName = this.parent.parent.name;
    this.letter = this.parent.parent.insideBox;
    this.render();
  }

  render() {
    this.container = document.createElement("div");
    this.container.className = "leftBorderMarker letterBox";
    this.container.innerHTML = `
        <div class='left'>
        <h2>${
          this.parent instanceof LangExerciseUnit
            ? "Вы прошли успешную тренировку!"
            : "После диктанта."
        }</h2>
        <p>Узнайте еще букв${
          this.letter.lenght === 1 ? "у" : "ы"
        } из загаданного слова.</p>
        <p>Мы вернемся к ${
          this.letter.lenght === 1 ? "ней" : "ним"
        } в конце модуля.</p>
        </div>
        <div class='right'>
        <div class='letter off'>${this.letter}</div>
        <div class='img'><img src='dist/assets/slow_box.gif'/></div>
        </div>`;
    if (
      this.parent instanceof LangExerciseUnit &&
      this.parent.parent.amountOfUnits - this.parent.parent.unitsToComplete > 0
    ) {
      let extraDiv = document.createElement("div");
      extraDiv.className = "extra";
      extraDiv.innerHTML = `<div class='extra'>
            <p>Обязательная часть заданий выполнена. Поздравляем!</p>
            <p>Далее вы можете продолжить тренировку, чтобы запомнить правило еще лучше. Всего заданий в тренажере – ${
              this.parent.parent.amountOfUnits
            }, осталось еще ${
        this.parent.parent.amountOfUnits - this.parent.parent.unitsToComplete
      } до вашей идеальной формы.</p>
            </div>
            `;
      this.container.appendChild(extraDiv);
    }
    this.container
      .querySelector(".img img")
      .addEventListener("click", this.animateBox.bind(this));
    if (this.parent instanceof LangExerciseUnit) {
      this.parent.unitContainer
        .querySelector(".continue")
        .before(this.container);
    } else if (this.parent instanceof DictantUnit) {
      this.parent.unitContainer.appendChild(this.container);
    }
  }

  animateLetters(element) {
    let lettersAnimation = [{
        transformOrigin: "50% 50%",
        transform: "scale(0.9)",
      },
      {
        transformOrigin: "50% 50%",
        transform: "scale(1.4)",
      },
    ];

    let lettersTiming = {
      duration: 2500,
      iterations: 1,
      fill: "forwards",
    };
    element.animate(lettersAnimation, lettersTiming);
  }

  animateBox(e) {
    let disappearAnimation = [{
        opacity: "1",
      },
      {
        opacity: "0",
      },
    ];

    let disapperTiming = {
      duration: 1000,
      fill: "forwards",
      iterations: 1,
    };
    e.currentTarget.animate(disappearAnimation, disapperTiming);
    this.container.querySelector(".letter").classList.remove("off");
    this.animateLetters(this.container.querySelector(".letter"));
    if (this.parent instanceof LangExerciseUnit) {
      if (this.parent.index !== this.parent.parent.amountOfUnits - 1) {
        this.parent.unitContainer
          .querySelector(".continue")
          .classList.remove("off");
      }
    }
    e.currentTarget.classList.add("disabled");
  }
}

class TestInteraction extends IterableScorableInteraction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.fb = db[this.index].fb;
    this.init();
  }

  createUnit(num) {
    if (num < this.unitsList.length) {
      let unit = new TestUnit(num, this, "testUnit", this.unitsList[num]);
      this.interactionUnits.push(unit);
    }
  }

  init() {
    this.createUnit(0);
  }
}

class CaseInteraction extends IterableScorableInteraction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
  }
}

class VideoInteraction extends Interaction {
  constructor(index, renderHook, parent) {
    super(index, renderHook, parent);
    this.vidId = this.interactionData.vid;
    this.init();
  }

  get id() {
    let type = this.interactionData.type;
    let list = App.renderHooks.filter((i) => {
      return i.dataset.type === type;
    });
    let num = list.indexOf(this.renderHook);
    return `${this.parent.id}/${type}_${num}/${this.vidId}`;
  }

  /* get id() {
    return `${this.parent.id}/video_${this.index}/${this.vidId}`;
  } */

  createUnit(num) {
    let unit = new VideoUnit(num, this, "videoUnit", db[this.index][num]);
    this.interactionUnits.push(unit);
  }

  init() {
    this.createUnit(0);
  }
}

class InteractionUnit {
  constructor(index, parent, cssClasses, dbData) {
    this.index = index;
    this.parent = parent;
    this.cssClasses = cssClasses;
    this.dbData = dbData;
    this._completed = false;
    this._score = 0;
  }

  get id() {
    if (this.dbData.hasOwnProperty("id")) {
      return `${this.parent.id}/unit_${this.dbData.id}`;
    } else {
      return `${this.parent.id}/unit_${this.index}`;
    }
  }

  render() {}

  get completed() {
    return this._completed;
  }

  set completed(v) {
    this._completed = v;
  }

  createUnitContainer(cssClasses) {
    const unitContainer = document.createElement("div");
    if (cssClasses) {
      unitContainer.className = cssClasses;
    }
    unitContainer.classList.add("unit");
    this.parent.renderHook.append(unitContainer);
    return unitContainer;
  }

  get score() {
    return this._score;
  }

  set score(v) {
    this._score = v;
  }

  get result() {
    return this.completed;
  }
}

class SurveyUnit extends InteractionUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.header = dbData.header
    this.survey = dbData.survey
    this.render()
  }

  get columns() {
    return this.header.length
  }

  get itemsDone() {
    let itemsDone = this.unitContainer.querySelectorAll('input:checked').length
    return itemsDone
  }

  get itemsLeft() {
    return this.survey.length - this.itemsDone
  }

  get done() {
    return this.survey.length === this.itemsDone
  }

  render() {
    let that = this
    this.unitContainer = this.createUnitContainer(this.cssClasses);
    this.unitContainer.id = `survey_${this.index}`
    this.unitContainer.style.setProperty('--columns', `${this.columns-1}`)
    this.header.forEach(function (h) {
      let p = document.createElement('p')
      p.className = 'header'
      p.innerText = h
      that.unitContainer.appendChild(p)
    })
    this.createItems()

    let submitBtn = document.createElement('button')
    submitBtn.setAttribute('type', 'button')
    submitBtn.className = 'btn disabled'
    submitBtn.innerHTML = `Осталось ответить на ${this.itemsLeft} вопросов.`
    this.unitContainer.appendChild(submitBtn)

    submitBtn.addEventListener('click', this.getResults.bind(this))

    let fbContainer = document.createElement('div')
    fbContainer.className = 'fbContainer'
    this.unitContainer.appendChild(fbContainer)
  }

  getResults() {}

  createItems() {
    let that = this
    let color = false
    this.survey.forEach(function (s, ind) {
      let statement = document.createElement('p')
      statement.innerText = `${ind + 1}. ${s}`
      that.unitContainer.appendChild(statement)
      if (color) {
        statement.classList.add('color')
      }

      for (let i = 0; i < that.columns - 1; i++) {
        let answerBox = document.createElement('div')

        let input = document.createElement('input')
        input.setAttribute('type', 'radio')
        input.id = `${ind}_${i}`
        input.setAttribute('name', `radio_${ind}`)
        answerBox.appendChild(input)

        let label = document.createElement('label')
        label.setAttribute('for', `${ind}_${i}`)

        input.addEventListener('change', function () {
          let btn = that.unitContainer.querySelector('button')
          btn.innerHTML = `Осталось ответить на ${that.itemsLeft} вопросов.`
          if (that.done) {
            btn.classList.remove('disabled')
            btn.innerText = 'Показать результат'
          }
        })

        if (color) {
          label.classList.add('color')
        }

        answerBox.appendChild(label)

        that.unitContainer.appendChild(answerBox)
      }
      color = !color
    })
  }
}

class CreativitySurvey extends SurveyUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.surveyKeys = {
      risk: {
        positive: [1, 21, 25, 35, 36, 43, 44],
        negative: [5, 8, 22, 29, 32, 34],
      },
      curiosity: {
        positive: [2, 3, 11, 12, 19, 27, 33, 37, 38, 47, 49],
        negative: [28],
      },
      complexity: {
        positive: [7, 15, 18, 26, 42, 50],
        negative: [4, 9, 10, 17, 24, 41, 48],
      },
      imagination: {
        positive: [13, 16, 23, 30, 31, 40, 45, 46],
        negative: [14, 20, 39],
      }
    }
  }

  fullNums(group) {
    return [...group.positive, ...group.negative]
  }

  getResults(e) {
    e.currentTarget.classList.add('disabled')
    Array.from(this.unitContainer.querySelectorAll('label')).forEach(function (l) {
      l.classList.add('disabled')
    })
    this.output = {
      risk: 0,
      curiosity: 0,
      complexity: 0,
      imagination: 0
    }
    this.completed = true
    this.parent.completed = true
    let that = this
    // col=0 Positive | col=1 Neutral | col=2 Negative | col=3 None
    let checkedInputs = this.unitContainer.querySelectorAll('input:checked')
    checkedInputs.forEach(function (i, ind) {
      let qNum = ind + 1
      let col = Number(i.id.split('_')[1])
      let group
      if (qNum !== 6) {
        if (that.fullNums(that.surveyKeys.risk).includes(qNum)) {
          group = 'risk'
        } else if (that.fullNums(that.surveyKeys.curiosity).includes(qNum)) {
          group = 'curiosity'
        } else if (that.fullNums(that.surveyKeys.complexity).includes(qNum)) {
          group = 'complexity'
        } else if (that.fullNums(that.surveyKeys.imagination).includes(qNum)) {
          group = 'imagination'
        }
        /* console.log(`Statement ${qNum} belongs to ${group.toUpperCase()} group`) */
        if ((col === 0 && that.surveyKeys[group].positive.includes(qNum)) || (col === 2 && that.surveyKeys[group].negative.includes(qNum))) {
          that.output[group] += 2
        } else if (col === 1) {
          that.output[group] += 1
        } else if (col === 3) {
          that.output[group] -= 1
        }

      }
    })

    console.log(this.output)
    this.showFb()
  }

  showFb() {
    let that = this
    let keys = Object.keys(this.output)
    let fbContainer = this.unitContainer.querySelector('.fbContainer')
    fbContainer.innerHTML = ''
    keys.forEach(function (k) {
      let fbHeader = document.createElement('h3')
      fbHeader.className = 'fbHeader'
      let title = ''
      switch (k) {
        case 'risk':
          title = 'Склонность к риску'
          break;
        case 'curiosity':
          title = 'Любознательность'
          break;
        case 'complexity':
          title = ' Сложность'
          break;
        case 'imagination':
          title = 'Воображение'
          break;
      }
      fbHeader.innerHTML = `${title}: ${that.output[k]}.`
      fbContainer.appendChild(fbHeader)
    })
  }
}

class CmiInteractionUnit extends InteractionUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this._result = 0;
  }

  get result() {
    return this._result;
  }

  set result(v) {
    this._result = v;
  }
}

class TestUnit extends CmiInteractionUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.type = this.dbData.type;
    this.question = this.dbData.text;
    this.answers = App.shuffle(this.dbData.answers);
    Xapi.sendStmt(new Statement(this, "interacted").finalStatement);
    this.render();
  }

  get correctResponsesPattern() {
    let correctResponses = this.answers
      .filter(function (a) {
        return a.aCorrect === true;
      })
      .map((a) => a.aId);
    return correctResponses.join("[,]");
  }

  get choices() {
    let idArr = [];
    let descArr = [];
    this.answers.forEach(function (a) {
      idArr.push(a.aId);
      descArr.push(a.aText);
    });
    return [idArr, descArr];
  }

  render() {
    // creating unit container
    this.unitContainer = this.createUnitContainer(this.cssClasses);

    // creating unit header
    let header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = `Вопрос ${this.index + 1} из ${
      this.parent.amountOfUnits
    }`;

    // creating unit tip
    /* let tip = document.createElement("div");
        tip.className = "tip off";
        tip.innerHTML = `<p>${this.tip}</p>`; */

    //creating unit body
    let body = this.createBody();

    // creting unit feedback
    /* let fb = document.createElement("div");
        fb.classList.add("fb"); */

    // creating unit button
    let submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "button");
    submitBtn.className = "btn continue regular disabled";
    submitBtn.innerHTML = "Ответить";

    // appending children to unit container
    this.unitContainer.appendChild(header);
    /* this.unitContainer.appendChild(tip); */
    this.unitContainer.appendChild(body);
    /* this.unitContainer.appendChild(fb); */
    this.unitContainer.appendChild(submitBtn);

    // setting event listeners
    /* this.unitContainer
            .querySelector("a.showTip")
            .addEventListener("click", this.toggleTip.bind(this)); */

    submitBtn.addEventListener("click", this.getResult.bind(this));
  }

  getResult() {
    let that = this;
    let responseCorrectness = [];

    let inputs = Array.from(this.unitContainer.querySelectorAll("input"));

    let checked = [];
    inputs.forEach(function (i) {
      checked.push([i.id, i.checked]);
    });

    this.response = inputs
      .filter(function (i) {
        if (i.checked) {
          return i;
        }
      })
      .map(function (i) {
        return i.id;
      });
    if (this.response.length === 0) {
      /* warning.innerText = 'Необходимо ответить на вопрос!' */
    } else if (this.response.length > 0) {
      checked.forEach(function (i) {
        let answer = that.answers.filter(function (a) {
          if (i[0] === a.aId) {
            return a;
          }
        });

        if (i[1] === answer[0].aCorrect) {
          responseCorrectness.push(true);
          that.unitContainer
            .querySelector(`label[for=${i[0]}]`)
            .classList.add("correct");
        } else {
          responseCorrectness.push(false);
          that.unitContainer
            .querySelector(`label[for=${i[0]}]`)
            .classList.add("incorrect");
        }
      });
      Array.from(that.unitContainer.querySelectorAll("input")).forEach(
        function (i) {
          i.disabled = true;
        }
      );

      this.result = responseCorrectness.includes(false) ? false : true;
      this.score += this.correct ? 1 : 0;
      this._completed = true;

      if (this.result) {
        this.unitContainer.querySelector(".header").classList.add("correct");
      } else {
        this.unitContainer.querySelector(".header").classList.add("incorrect");
      }

      Xapi.sendStmt(new Statement(this, "answered").finalStatement);
      this.unitContainer.querySelector(".continue").classList.add("off");
      this.parent.completed = true;
      this.initNextUnit();
    }
  }

  initNextUnit() {
    if (
      this.index !== this.parent.unitsToComplete - 1 &&
      this.index !== this.parent.amountOfUnits - 1
    ) {
      this.parent.createUnit(this.index + 1);
    }
  }

  createBody() {
    let that = this;
    let body = document.createElement("div");
    body.className = "body";

    let questionContainer = document.createElement("p");
    questionContainer.className = "qText";
    questionContainer.innerText = this.question;
    body.appendChild(questionContainer);

    let qHelp = document.createElement("p");
    qHelp.className = "qHelp";
    body.appendChild(qHelp);

    let answersContainer = document.createElement("div");
    answersContainer.className = "answersContainer";

    this.answers.forEach(function (a, i) {
      // create container for particular answer
      let answerContainer = document.createElement("div");
      answerContainer.classList.add("answerContainer");

      // create answer <input> and <label>
      let input = document.createElement("input");
      input.id = a.aId;
      input.setAttribute("value", a.aId);

      input.addEventListener("change", function (e) {
        let btn = that.unitContainer.querySelector(".continue");
        if (btn.classList.contains("disabled")) {
          btn.classList.remove("disabled");
        }
      });

      let label = document.createElement("label");
      label.setAttribute("for", a.aId);
      if (a.aText[a.aText.length - 1] !== ".") {
        label.innerHTML = a.aText + ".";
      } else {
        label.innerHTML = a.aText;
      }

      if (that.type === "mc") {
        input.setAttribute("type", "radio");
        input.setAttribute("name", `group_${that.index}`);
        qHelp.innerHTML = "Выберите правильный ответ.";
      } else if (that.type === "mr") {
        input.type = "checkbox";
        qHelp.innerHTML = "Выберите все правильные варианты ответов.";
      }

      answerContainer.appendChild(input);
      answerContainer.appendChild(label);

      // create particular feedback
      if (a.aFeedback !== "") {
        let feedback = document.createElement("div");
        feedback.classList.add("feedback");
        feedback.dataset.for = a.aId;
        feedback.innerHTML = a.aText;
        answerContainer.appendChild(feedback);
      }

      answersContainer.appendChild(answerContainer);
    });

    body.appendChild(answersContainer);

    return body;
  }
}

class SubUnit {
  constructor(parent, index) {
    this._parent = parent;
    this.index = index;
    Xapi.sendStmt(new Statement(this, "interacted").finalStatement);
  }

  get parent() {
    return this._parent.parent;
  }

  get id() {
    return this._parent.id + "/" + this.index;
  }

  get correctResponsesPattern() {
    return this._parent.correctResponses[this.index].join(",");
  }

  get choices() {
    let choices = this._parent.optionsToReport[this.index];
    if (choices.length > 1) {
      return [App.multiplyArrays(...choices)];
    } else {
      return [choices[0]];
    }
  }

  get response() {
    return this._parent.userAnswer[this.index].join(",");
  }

  get result() {
    return this._parent._result[this.index];
  }

  get score() {
    if (this.result === true) {
      return 1;
    } else {
      return 0;
    }
  }
}

class FillInDropDownUnit extends CmiInteractionUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.parent = parent;
    this.text = dbData.text;
    this.getData();
    this.createHTMLElements();
    this.getSubUnits();
  }

  getSubUnits() {
    let that = this;
    this.subUnits = this.taskWords.map(function (w, i) {
      let su = new SubUnit(that, i);
      return su;
    });
  }

  getData() {
    let that = this;
    let separateWords = that.text.split(" ");
    that.taskWords = separateWords.filter(function (w) {
      return w.includes("_");
    });

    that.amountOfWords = that.taskWords.length;
    that.normalWords = that.taskWords.map(function (w) {
      return w.replace(/(\(.+?\))/g, "");
    });

    let optionsData = that.taskWords.map(function (w) {
      return w.match(/(\(.+?\))/g);
    });

    that.amountOfSpaces = optionsData.map(function (o) {
      return o.length;
    });

    that.correctResponses = [];
    that.optionsToShow = [];
    that.optionsToInsert = [];
    that.optionsToReport = [];

    optionsData.forEach(function (optionData) {
      let correctResponses = [];
      let optionsToShow = [];
      let optionsToInsert = [];
      let optionsToReport = [];
      optionData.forEach(function (optionStr) {
        let currentOptions = {
          toShow: [],
          toInsert: [],
          toReport: [],
        };

        let optionArr = optionStr.replace(/[\(\)]/g, "").split(",");

        optionArr.forEach(function (opt, index) {
          let option = opt.replace("*", "");
          switch (option) {
            case "слитно":
              currentOptions.toShow.push(option);
              currentOptions.toReport.push(option);
              currentOptions.toInsert.push("");
              break;
            case "раздельно":
              currentOptions.toShow.push(option);
              currentOptions.toReport.push(option);
              currentOptions.toInsert.push(" ");
              break;
            case "дефис":
              currentOptions.toShow.push(option);
              currentOptions.toReport.push(option);
              currentOptions.toInsert.push("-");
              break;
            case "зпт":
              currentOptions.toShow.push(",");
              currentOptions.toReport.push("запятая_нужна");
              currentOptions.toInsert.push(",");
              break;
            case "пусто":
              currentOptions.toShow.push(" ");
              currentOptions.toReport.push("запятая_не_нужна");
              currentOptions.toInsert.push(" ");
              break;
            default:
              currentOptions.toShow.push(option);
              currentOptions.toReport.push(option);
              currentOptions.toInsert.push(option);
              break;
          }

          if (opt.includes("*")) {
            correctResponses.push(currentOptions.toReport[index]);
          }
        });
        optionsToShow.push(currentOptions.toShow);
        optionsToInsert.push(currentOptions.toInsert);
        optionsToReport.push(currentOptions.toReport);
      });

      that.correctResponses.push(correctResponses);
      that.optionsToShow.push(optionsToShow);
      that.optionsToInsert.push(optionsToInsert);
      that.optionsToReport.push(optionsToReport);
    });
  }

  createHTMLElements() {
    let that = this;
    this.body = document.createElement("div");
    this.body.className = "body";
    let separateWords = this.text.replace(/(\(.+?\))/g, "").split(" ");
    let wordIndex = 0;
    let modifiedWords = separateWords.map(function (w, index) {
      if (w.includes("_")) {
        let letters = w.split("");
        let spaceIndex = 0;
        let modifiedLetters = letters.map(function (l) {
          if (l === "_") {
            let elements = [];
            for (
              let i = 0; i < that.optionsToInsert[wordIndex][spaceIndex].length; i++
            ) {
              let isLong =
                that.optionsToShow[wordIndex][spaceIndex][i].length > 2;
              let toShow = that.optionsToShow[wordIndex][spaceIndex][i];
              let span = `<span class="answer box ${
                isLong ? "long" : ""
              }" data-id="${[wordIndex]},${spaceIndex},${i}">${toShow}</span>`;
              elements.push(span);
            }

            let newLetter = `<span class="subtask"><span class="space empty box" data-id="${wordIndex},${spaceIndex}" data-user_answer="_">_</span><span class="popupAnsContainer off">${elements.join(
              ""
            )}</span></span>`;
            spaceIndex++;
            return newLetter;
          } else {
            return l;
          }
        });

        let wordString = `<span class="word" data-id="${wordIndex}">${modifiedLetters.join(
          ""
        )}</span>`;
        wordIndex++;
        return wordString;
      } else {
        return w;
      }
    });
    this.body.innerHTML = modifiedWords.join(" ");

    this.HTMLElements = Array.from(this.body.querySelectorAll(".word"));

    let answers = Array.from(this.body.querySelectorAll(".answer"));
    answers.forEach(function (a, i) {
      a.addEventListener("click", that.setAnswer.bind(that));
    });

    let spaces = Array.from(this.body.querySelectorAll(".space"));
    for (let space of spaces) {
      space.addEventListener(
        "click",
        that.toggleItem.bind(that, "popupAnsContainer")
      );
    }
  }

  toggleItem(cssClass, e) {
    let allItems = this.unitContainer.querySelectorAll(`.${cssClass}`);
    let currentItem = e.currentTarget.parentNode.querySelector(`.${cssClass}`);
    if (currentItem.classList.contains("off")) {
      allItems.forEach(function (i) {
        i.classList.add("off");
      });
      currentItem.classList.remove("off");
    } else if (!currentItem.classList.contains("off")) {
      currentItem.classList.add("off");
    }
  }

  set result(v) {
    let that = this;
    this._result = [];
    this.userAnswer.forEach(function (a, i) {
      if (App.isArraysSimilar(a, that.correctResponses[i])) {
        that._result.push(true);
      } else {
        that._result.push(false);
      }
    });
  }

  get result() {
    return this._result.includes(false) ? false : true;
  }

  get score() {
    return this._result.filter(function (r) {
      return r === true;
    }).length;
  }

  get userAnswer() {
    let that = this;
    let answer = that.HTMLElements.map(function (e) {
      return Array.from(e.querySelectorAll(".space")).map(function (s) {
        return s.dataset.user_answer;
      });
    });
    return answer;
  }

  markAnswer(wordElement) {
    let that = this;
    let wordIndex = wordElement.dataset.id;
    if (!this.userAnswer[wordIndex].includes("_")) {
      let spaces = Array.from(wordElement.querySelectorAll(".space"));
      spaces.forEach(function (el, spaceIndex) {
        if (
          el.dataset.user_answer ===
          that.correctResponses[wordIndex][spaceIndex]
        ) {
          el.classList.add("correct");
        } else if (
          el.dataset.user_answer !==
          that.correctResponses[wordIndex][spaceIndex]
        ) {
          el.classList.add("incorrect");
        }
      });
    }
  }

  disableElement(wordElement) {
    let that = this;
    let wordIndex = wordElement.dataset.id;
    if (!this.userAnswer[wordIndex].includes("_")) {
      let spaces = Array.from(wordElement.querySelectorAll(".space"));
      spaces.forEach(function (el, spaceIndex) {
        el.classList.add("disabled");
      });
    }
  }

  showAnswer(wordElement) {
    let that = this;
    let wordIndex = wordElement.dataset.id;
    if (!this.userAnswer[wordIndex].includes("_")) {
      let spaces = Array.from(wordElement.querySelectorAll(".space"));
      spaces.forEach(function (e, spaceIndex) {
        if (
          e.dataset.user_answer !== that.correctResponses[wordIndex][spaceIndex]
        ) {
          let correctOptionToReport =
            that.correctResponses[wordIndex][spaceIndex];
          let correctOptionIndex = that.optionsToReport[wordIndex][
            spaceIndex
          ].indexOf(correctOptionToReport);
          let correctOptionToInsert =
            that.optionsToInsert[wordIndex][spaceIndex][correctOptionIndex];

          e.innerHTML = correctOptionToInsert;
          if (e.innerHTML === "" || e.innerHTML === " ") {
            e.classList.add("helper");
          } else {
            e.classList.remove("helper");
          }
        }
        if (that.optionsToShow[wordIndex][spaceIndex].includes("слитно")) {
          if (e.innerHTML === "") {
            e.parentNode.classList.add("nospace");
          } else {
            e.parentNode.classList.remove("nospace");
          }

          if (e.innerHTML === "-" || e.innerHTML === " ") {
            e.classList.add("box");
            e.classList.remove("tri");
          } else {
            e.classList.remove("box");
            e.classList.add("tri");
          }
        }

        e.classList.remove("correct");
        e.classList.remove("incorrect");
      });
    }
  }

  setAnswer(e) {
    let that = this;
    let ids = e.currentTarget.dataset.id.split(",");
    let optionIndex = ids[2];
    let spaceIndex = ids[1];
    let wordIndex = ids[0];
    let spaceElement = that.HTMLElements[wordIndex].querySelector(
      `.space[data-id="${wordIndex},${spaceIndex}"]`
    );
    let wordElement = that.HTMLElements[wordIndex];
    if (
      that.optionsToInsert[wordIndex][spaceIndex][optionIndex] === "" ||
      that.optionsToInsert[wordIndex][spaceIndex][optionIndex] === " "
    ) {
      spaceElement.classList.add("helper");
    }

    spaceElement.dataset.user_answer =
      that.optionsToReport[wordIndex][spaceIndex][optionIndex];
    spaceElement.innerHTML =
      that.optionsToInsert[wordIndex][spaceIndex][optionIndex];

    spaceElement.classList.remove("empty");
    if (spaceElement.dataset.user_answer === "слитно") {
      e.currentTarget.parentNode.parentNode.classList.add("nospace");
      spaceElement.classList.add("tri");
      spaceElement.classList.remove("box");
    } else {
      e.currentTarget.parentNode.parentNode.classList.remove("nospace");
      spaceElement.classList.remove("tri");
      spaceElement.classList.add("box");
      if (spaceElement.dataset.user_answer === "дефис") {
        spaceElement.classList.remove("helper");
      }
    }

    e.currentTarget.parentNode.classList.add("off");

    that.onSetAnswer(wordElement);
  }
}

class LangExerciseUnit extends FillInDropDownUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.tip = dbData.tip;
    this.fb = dbData.fb;
    this.render();
  }

  get completed() {
    let that = this;
    let answers = [];
    this._completed;
    this.userAnswer.forEach(function (a) {
      a.forEach(function (i) {
        answers.push(i);
      });
    });
    return !answers.includes("_");
  }

  set completed(wordIndex) {
    let that = this;
    this.result = true;
    this.onCompletedFired(wordIndex);
    if (this.completed) {
      this.parent.completed = true;
    }
  }

  onSetAnswer(wordElement) {
    let that = this;
    that.disableElement(wordElement);
    that.markAnswer(wordElement);
    that.completed = wordElement.dataset.id;
    setTimeout(function () {
      that.showAnswer(wordElement);
    }, 2000);
  }

  onCompletedFired(wordIndex) {
    if (!this.userAnswer[wordIndex].includes("_")) {
      this.setFb(this._result[wordIndex], wordIndex);
      Xapi.sendStmt(
        new Statement(this.subUnits[wordIndex], "answered").finalStatement
      );
    }

    if (this.completed) {
      if (this.index === this.parent.unitsToComplete - 1) {
        new LetterBox(this);
      } else if (
        this.index !== this.parent.unitsToComplete - 1 &&
        this.index !== this.parent.amountOfUnits - 1
      ) {
        this.unitContainer
          .querySelector("button.continue")
          .classList.remove("off");
      }
    }
  }

  render() {
    // creating unit container
    this.unitContainer = this.createUnitContainer(this.cssClasses);

    // creating unit header
    let header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = `<p>Задание ${this.index + 1} из ${
      this.parent.amountOfUnits
    }<a class='showTip'>Показать подсказку <span class="icon"><i> </i><span></a></p>`; // <i class="fas fa-hand-point-up"></i>

    // creating unit tip
    let tip = document.createElement("div");
    tip.className = "tip off";
    tip.innerHTML = `<p>${this.tip}</p>`;

    //creating unit body
    let body = this.body;

    // creting unit feedback
    let fb = document.createElement("div");
    fb.classList.add("fb");

    // creating unit button
    let btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.className = "btn continue regular off";
    btn.innerHTML = "Продолжить";

    // appending children to unit container
    this.unitContainer.appendChild(header);
    this.unitContainer.appendChild(tip);
    this.unitContainer.appendChild(body);
    this.unitContainer.appendChild(fb);
    this.unitContainer.appendChild(btn);

    // setting event listeners
    this.unitContainer
      .querySelector("a.showTip")
      .addEventListener("click", this.toggleTip.bind(this));

    let continueBtn = this.unitContainer.querySelector("button.continue");
    continueBtn.addEventListener("click", this.initNextUnit.bind(this));
  }

  initNextUnit(e) {
    this.parent.createUnit(this.index + 1);
    e.currentTarget.classList.add("off");
  }

  setFb(status, position) {
    let that = this;
    let fb = that.unitContainer.querySelector(".fb");
    let currentFb = document.createElement("div");
    currentFb.dataset.position = position;
    currentFb.className = "fbUnit leftBorderMarker";
    currentFb.classList.add(`${status === true ? "correct" : "incorrect"}`);
    currentFb.innerHTML = `
            <p class="fbUnitHeader ${
              status === true ? "correct" : "incorrect"
            }">${
      status === true ? "Вы ответили верно!" : "Вы ответили неверно!"
    }</p>
            <p class="fbText">${
              status === true
                ? that.fb.correct
                : `${that.fb.incorrect} Посмотрите верное написание.`
            }</p>`;
    let fbUnits = fb.querySelectorAll("div");

    if (fbUnits.length === 0) {
      fb.appendChild(currentFb);
    } else if (fbUnits.length > 0) {
      fbUnits.forEach(function (u) {
        if (Number(position) === Number(u.dataset.position) - 1) {
          u.before(currentFb);
        } else if (Number(position) === Number(u.dataset.position) + 1) {
          u.after(currentFb);
        }
      });
    }
  }

  toggleTip(e) {
    let tip = this.unitContainer.querySelector(".tip");
    if (tip.classList.contains("off")) {
      tip.classList.remove("off");
      e.currentTarget.innerHTML =
        'Скрыть подсказку <span class="icon"><i> </i><span>';
    } else if (!tip.classList.contains("off")) {
      tip.classList.add("off");
      e.currentTarget.innerHTML =
        'Показать подсказку <span class="icon"><i> </i><span>';
    }
  }
}

class CommentUnit extends InteractionUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.title = "";
    this.text = "";
    this.tag = "";
    this.init();
  }

  init() {
    let that = this;
    this.unitContainer = this.createUnitContainer(this.cssClasses);
    this.unitContainer.innerHTML = `
    <textarea rows="10" placeholder='Пожалуйста, введите Ваш отзыв.'></textarea>
    <button type="button" class="btn disabled">Отправить</button>`;

    this.unitContainer
      .querySelector("textarea")
      .addEventListener("input", function (e) {
        that.unitContainer.querySelector(".btn").classList.remove("disabled");
      });

    this.unitContainer
      .querySelector(".btn")
      .addEventListener("click", this.proceedComment.bind(this));
  }

  proceedComment(e) {
    this.title = "Отзыв о курсе";
    this.text = this.unitContainer.querySelector("textarea").value;
    Xapi.sendStmt(new Statement(this, "commented").finalStatement);
    this.unitContainer.querySelector("textarea").value = "";
    this.unitContainer
      .querySelector("textarea")
      .setAttribute("placeholder", "Благодарим за Ваш отзыв!");

    this.completed = true;
  }
}

class RatingUnit extends InteractionUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.rating = 0;
    this.init();
  }

  init() {
    this.unitContainer = this.createUnitContainer(this.cssClasses);
    let starsContainer = document.createElement("div");
    starsContainer.className = "starsContainer";
    for (let i = 0; i < 5; i++) {
      let star = document.createElement("img");
      star.setAttribute("src", "./dist/assets/starEmpty.svg");
      star.className = "ratingStar";
      star.dataset.value = i + 1;
      star.addEventListener("click", this.setRating.bind(this));
      starsContainer.appendChild(star);
    }
    this.unitContainer.appendChild(starsContainer);

    let rateBtn = document.createElement("button");
    rateBtn.setAttribute("type", "button");
    rateBtn.className = "btn";
    rateBtn.innerHTML = "Оценить";
    rateBtn.addEventListener("click", this.proceedRating.bind(this));

    this.unitContainer.appendChild(rateBtn);
  }

  setRating(e) {
    let that = this;
    let stars = this.unitContainer.querySelectorAll(".ratingStar");
    this.rating = Number(e.currentTarget.dataset.value);
    stars.forEach(function (s) {
      let val = Number(s.dataset.value);
      if (val <= that.rating) {
        s.setAttribute("src", "./dist/assets/starFull.svg");
      } else {
        s.setAttribute("src", "./dist/assets/starEmpty.svg");
      }
    });
  }

  proceedRating(e) {
    let btn = e.currentTarget;
    this.completed = true;
    btn.innerHTML = "Спасибо за оценку";
    setTimeout(function () {
      btn.innerHTML = "Оценить";
    }, 2000);
    Xapi.sendStmt(new Statement(this, "rated").finalStatement);
  }
}

class VideoUnit extends InteractionUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.vid = this.dbData.vid;
    Xapi.sendStmt(new Statement(this, "interacted").finalStatement);
    this.init();
  }

  init() {
    this.unitContainer = this.createUnitContainer("vid");
    this.unitContainer.id = `player${this.parent.index}${this.index}`;
    this.unitContainer.dataset.vid = this.parent.renderHook.dataset.vid;
    this.unitContainer.dataset.id = this.parent.id;
  }
}

class DictantUnit extends FillInDropDownUnit {
  constructor(index, parent, cssClasses, dbData) {
    super(index, parent, cssClasses, dbData);
    this.fbs = dbData.fbs;
    this.render();
  }

  get completed() {
    return this._completed;
  }

  set completed(v) {
    console.log("dictant set completed");
    this._completed = v;
    this.result = true;
    if (this.completed) {
      this.parent.completed = true;
    }
  }

  onSetAnswer(e) {
    let notAnswered = 0;
    this.userAnswer.forEach(function (a) {
      a.forEach(function (i) {
        if (i === "_") {
          notAnswered++;
        }
      });
    });
    if (notAnswered === 0) {
      this.unitContainer
        .querySelector("button.check")
        .classList.remove("disabled");
    }
  }

  render() {
    // creating unit container
    this.unitContainer = this.createUnitContainer(this.cssClasses);

    // creating unit header
    let header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = `Диктант`;

    //creating unit body
    let body = this.body;

    // creting unit feedback
    let fb = document.createElement("div");
    fb.classList.add("fb");

    // creating unit check button
    let checkBtn = document.createElement("button");
    checkBtn.setAttribute("type", "button");
    checkBtn.className = "btn check regular disabled";
    checkBtn.innerHTML = "Проверить";

    // creating unit show answers button
    let showAnswersBtn = document.createElement("button");
    showAnswersBtn.setAttribute("type", "button");
    showAnswersBtn.className = "btn showAnswers regular off";
    showAnswersBtn.innerHTML = "Показать правильные ответы";

    // appending children to unit container
    this.unitContainer.appendChild(header);
    this.unitContainer.appendChild(body);
    this.unitContainer.appendChild(fb);
    this.unitContainer.appendChild(checkBtn);
    this.unitContainer.appendChild(showAnswersBtn);

    // setting event listeners

    checkBtn.addEventListener("click", this.checkAnswers.bind(this));

    showAnswersBtn.addEventListener("click", this.showAnswers.bind(this));
  }

  checkAnswers(e) {
    let that = this;
    this.HTMLElements.forEach(function (e) {
      that.disableElement(e);
      that.markAnswer(e);
    });
    e.currentTarget.classList.add("off");
    this.unitContainer
      .querySelector("button.showAnswers")
      .classList.remove("off");
    this.subUnits.forEach(function (u) {
      Xapi.sendStmt(new Statement(u, "answered").finalStatement);
    });
    this.completed = true;
  }

  showAnswers(e) {
    let that = this;
    this.HTMLElements.forEach(function (el) {
      that.showAnswer(el);
      that.addFbIcon(el);
    });
    e.currentTarget.classList.add("off");
    this.setFb();
    new LetterBox(this);
  }

  addFbIcon(wordElement) {
    let that = this;
    let index = wordElement.dataset.id;
    let icon = document.createElement("span");
    icon.className = "box icon empty";
    icon.innerHTML = `<span class='icon'><i> </i><span>`;
    wordElement.appendChild(icon);
    icon.addEventListener("click", that.showFb.bind(that));

    let fbElement = document.createElement("span");
    fbElement.className = "fbPopup off";
    let fbText = document.createElement("span");
    fbText.innerText = this.fbs[index];

    fbElement.appendChild(fbText);
    wordElement.appendChild(fbElement);

    fbElement.addEventListener("click", function (e) {
      e.currentTarget.classList.add("off");
      wordElement.querySelector(".icon").classList.remove("selected");
    });
  }

  showFb(e) {
    let fbs = Array.from(this.unitContainer.querySelectorAll(".fbPopup"));
    let icons = Array.from(this.unitContainer.querySelectorAll(".icon"));
    icons.forEach(function (i) {
      i.classList.remove("selected");
    });
    fbs.forEach(function (i) {
      i.classList.add("off");
    });

    e.currentTarget.classList.add("selected");
    e.currentTarget.parentNode
      .querySelector(".fbPopup")
      .classList.remove("off");
  }

  setFb() {
    let fb = this.unitContainer.querySelector(".fb");
    fb.innerHTML = "";
    fb.innerHTML = `<div class="fbUnit leftBorderMarker"><p class="fbUnitHeader">Обратная связь.</p>
    <p class="fbText">Нажимайте на иконку <span class='icon'><i> </i><span>, чтобы увидеть обратную связь.</span></div>`;
  }
}

class Xapi {
  // start of old code

  static parseQuery(queryString) {
    let query = {};
    let pairs = (queryString[0] === "?" ?
      queryString.substr(1) :
      queryString
    ).split("&");
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i].split("=");
      query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }
    return query;
  }

  static activityId = "empty";
  static data = {
    actor: "user",
  };

  static getXapiData() {
    let queryParams = Xapi.parseQuery(window.location.search);
    Xapi.activityId = queryParams.activity_id;

    Xapi.data = {
      endpoint: queryParams.endpoint,
      auth: queryParams.auth,
      actor: JSON.parse(queryParams.actor),
      grouping: Xapi.activityId,
      registration: queryParams.registration,
      context: {
        registration: queryParams.registration,
        contextActivities: {
          grouping: Xapi.activityId,
        },
      },
    };

    // SCORM Cloud patch
    if (Array.isArray(Xapi.data.actor.account)) {
      Xapi.data.actor.account = Xapi.data.actor.account[0];
    }
    if (Array.isArray(Xapi.data.actor.name)) {
      Xapi.data.actor.name = Xapi.data.actor.name[0];
    }
    if (
      Xapi.data.actor.account &&
      Xapi.data.actor.account.accountServiceHomePage
    ) {
      Xapi.data.actor.account.homePage =
        Xapi.data.actor.account.accountServiceHomePage;
      Xapi.data.actor.account.name = Xapi.data.actor.account.accountName;
      delete Xapi.data.actor.account.accountServiceHomePage;
      delete Xapi.data.actor.account.accountName;
    }

    // End SCORM Cloud patch

    return {
      endpoint: Xapi.data.endpoint,
      auth: Xapi.data.auth,
      actor: Xapi.data.actor,
      grouping: Xapi.data.grouping,
      registration: Xapi.data.registration,
      context: Xapi.data.context,
    };
  }

  // end of old code

  static sendStmt(stmt) {
    App.statements.push(stmt);
    if (App.testMode === false) {
      console.log(stmt);
      ADL.XAPIWrapper.sendStatement(stmt, function (resp, obj) {
        console.log(resp.status + resp.statusText);
      });
    } else if (App.testMode === true) {
      console.log(stmt);
    }
  }

  static getChoices(arr) {
    let newArr = [];
    if (arr.length === 1) {
      newArr = arr[0].map(function (option) {
        return {
          id: option,
          description: {
            "ru-RU": option,
          },
        };
      });
    } else if (arr.length === 2) {
      newArr = arr[0].map(function (option, ind) {
        return {
          id: option,
          description: {
            "ru-RU": arr[1][ind],
          },
        };
      });
    }
    return newArr;
  }

  static getCorrectResponsesPattern(str) {
    return [str];
  }

  static getResponse(item) {
    if (Array.isArray(item)) {
      return item.join();
    } else {
      return item;
    }
  }

  /* static getPossibleOptions(words, choices, num = 0) {
        if (!Array.isArray(words)) {
            words = [words];
        }

        if (!Array.isArray(choices[0])) {
            choices = [choices];
        }

        let newWords = [];

        if (words[words.length - 1].indexOf("_") === -1) {
            return words;
        }

        words.forEach(function (str) {
            choices[num].forEach(function (c) {
                newWords.push(str.replace("_", c));
            });
        });

        return Xapi.getPossibleOptions(newWords, choices, num + 1);
    } */

  /* static getCorrectOption(word, correctArr) {
        let thisWord = word;
        correctArr.forEach(function (letter) {
            thisWord = thisWord.replace("_", letter);
        });
        return thisWord;
    } */
}

class Statement {
  constructor(obj, verb = "experienced") {
    this.obj = obj;
    this.verb = verb;
  }

  get objectObj() {
    let simpleObject = {
      object: {
        id: this.obj.id,
        definition: {
          name: {
            "en-US": this.obj.name ? this.obj.name : this.obj.id,
          },
          description: {
            "en-US": this.obj.description ?
              this.obj.description : this.obj.name ?
              this.obj.name : this.obj.id,
          },
        },
      },
    };
    if (this.obj instanceof SubUnit || this.obj instanceof TestUnit) {
      let extraDefinitionProperties = {
        type: "http://adlnet.gov/expapi/activities/cmi.interaction",
        // interactionType: "choice",
        correctResponsesPattern: Xapi.getCorrectResponsesPattern(
          this.obj.correctResponsesPattern
        ),
        choices: Xapi.getChoices(this.obj.choices),
      };

      if (
        this.obj._parent instanceof LangExerciseUnit ||
        this.obj._parent instanceof DictantUnit ||
        this.obj instanceof TestUnit
      ) {
        Object.assign(extraDefinitionProperties, {
          interactionType: "choice",
        });
      }

      Object.assign(simpleObject.object.definition, extraDefinitionProperties);
    }
    return simpleObject;
  }

  get actorObj() {
    return {
      actor: Xapi.data.actor ? Xapi.data.actor : "User",
    };
  }

  get verbObj() {
    return {
      verb: verbs[this.verb],
    };
  }

  get resultObj() {
    let resultObj = {};
    if (this.verb === "completed") {
      resultObj["result"] = {
        completion: this.obj.completed,
      };
    } else if (this.verb === "answered") {
      resultObj["result"] = {
        success: this.obj.result,
        response: Xapi.getResponse(this.obj.response),
      };
    } else if (this.verb === "passed" || this.verb === "failed") {
      resultObj["result"] = {
        score: {
          raw: this.obj.score,
        },
        success: this.obj.result,
      };
    } else if (this.verb === "commented") {
      resultObj["result"] = {
        response: '{' + `"title":"${this.obj.title}","text":"${this.obj.text}","tag":"${this.obj.tag}"` + '}'
      };
    } else if (this.verb === "rated") {
      resultObj["result"] = {
        score: {
          raw: this.obj.rating,
        },
      };
    }
    return resultObj;
  }

  get contextObj() {
    let contextObj = {};
    if (this.obj.parent) {
      contextObj["context"] = {
        contextActivities: {
          parent: [{
            id: this.obj.parent.id,
            objectType: "Activity",
          }, ],
        },
      };
      return contextObj;
    }
  }

  get finalStatement() {
    let stmt = Object.assign({},
      this.actorObj,
      this.verbObj,
      this.objectObj,
      this.contextObj,
      this.resultObj
    );
    return stmt;
  }
}

class Course {
  constructor(id, renderHooks) {
    this.id = id;
    this.name = "course";
    this.renderHooks = renderHooks;
    Xapi.sendStmt(new Statement(this, "launched").finalStatement);
    this.interactions = [];
    this.getInteractions();
  }

  getInteractions() {
    let that = this;
    this.renderHooks.forEach(function (hook, index) {
      if (hook.dataset.type === "langExercise") {
        let i = new LangExerciseInteraction(index, hook, that);
        that.interactions.push(i);
      } else if (hook.dataset.type === "diсtant") {
        let i = new DictantInteraction(index, hook, that);
        that.interactions.push(i);
      } else if (hook.dataset.type === "longread") {
        let i = new LongreadInteraction(index, hook, that);
        that.interactions.push(i);
      } else if (hook.dataset.type === "video") {
        let i = new VideoInteraction(index, hook, that);
        that.interactions.push(i);
      } else if (hook.dataset.type === "test") {
        let i = new TestInteraction(index, hook, that);
        that.interactions.push(i);
      } else if (hook.dataset.type === "case") {
        let i = new CaseInteraction(index, hook, that);
        that.interactions.push(i);
      } else if (hook.dataset.type === "comment") {
        let i = new CommentInteraction(index, hook, that);
        that.interactions.push(i);
      } else if (hook.dataset.type === "rating") {
        let i = new RatingInteraction(index, hook, that);
        that.interactions.push(i);
      } else if (hook.dataset.type === "survey") {
        let i = new SurveyInteraction(index, hook, that);
        that.interactions.push(i);
      }
    });
  }

  get result() {
    let overallResult = 0;
    let requiredResult = 0;
    this.interactions.forEach(function (i) {
      if (i.required === "true") {
        requiredResult++;
        if (i.result) {
          overallResult++;
        }
      }
    });
    return overallResult === requiredResult;
  }

  get score() {
    let overallResult = 0;
    this.interactions.forEach(function (i) {
      if (i.result) {
        overallResult++;
      }
    });
    return overallResult;
  }

  get completed() {
    let completionStatus = this.interactions.map(function (i) {
      if (i.required === true) {
        return i.completed;
      }
    });
    return !completionStatus.includes(false);
  }

  set completed(v) {
    if (this.completed) {
      console.log("Course completed");
      Xapi.sendStmt(new Statement(this, "completed").finalStatement);
      if (this.result === true) {
        console.log("Course passed");
        Xapi.sendStmt(new Statement(this, "passed").finalStatement);
      } else if (this.result === false) {
        console.log("Course failed");
        Xapi.sendStmt(new Statement(this, "failed").finalStatement);
      }
    }
  }
}

class App {
  constructor() {}
  static renderHooks = [];
  static testMode = false;
  static id = "";
  static course;
  static loaded = false;
  static statements = [];
  static isVideo = false;

  static isTestMode() {
    App.testMode =
      document
      .querySelector('meta[content^="testmode"]')
      .getAttribute("content")
      .split("testmode:")[1] === "true" ?
      true :
      false;
  }

  static getId() {
    let prefix = document
      .querySelector('meta[content^="prefix"]')
      .getAttribute("content")
      .split("prefix:")[1];
    let course = document
      .querySelector('meta[content^="course"]')
      .getAttribute("content")
      .split("course:")[1];
    App.id = prefix + course;
  }

  static getRenderHooks() {
    App.renderHooks = Array.from(document.querySelectorAll(".interaction"));
  }

  static isVideo() {
    App.renderHooks.forEach(function (h) {
      if (h.dataset.type === "video") {
        App.isVideo = true;
      }
    });
  }

  static init() {
    App.addFooter();
    App.addLongread();
    App.addComment();
    App.addRating();
    App.getId();
    App.getRenderHooks();
    App.isTestMode();
    if (App.testMode === false) {
      ADL.XAPIWrapper.changeConfig(Xapi.getXapiData());
    }
    App.course = new Course(App.id, App.renderHooks);
  }

  static observers = [];

  static addRating() {
    if (document.querySelector('meta[content^="rating"]') &&
      document
      .querySelector('meta[content^="rating"]')
      .getAttribute("content")
      .split("rating:")[1] === "true"
    ) {
      let element = document.querySelector("#finalLongread");

      let rating = document.createElement("div");
      rating.id = "rating";
      rating.className = "interaction";
      rating.dataset.type = "rating";
      rating.dataset.name = "Оценка курса";
      rating.dataset.required = "false";

      element.after(rating);
    }
  }

  static addComment() {
    if (document
      .querySelector('meta[content^="comment"]') && document
      .querySelector('meta[content^="comment"]')
      .getAttribute("content")
      .split("comment:")[1] === "true"
    ) {
      let element = document.querySelector("#finalLongread");

      let comment = document.createElement("div");
      comment.id = "comment";
      comment.className = "interaction";
      comment.dataset.type = "comment";
      comment.dataset.name = "Комментарий";
      comment.dataset.required = "false";

      element.after(comment);
    }
  }

  static addLongread() {
    let nextBtn = document.querySelector("#nextBtn");
    let longread = document.createElement("div");
    longread.id = "finalLongread";
    longread.className = "interaction";
    longread.dataset.type = "longread";
    longread.dataset.name = "Лонгрид";
    longread.dataset.required = "true";

    nextBtn.before(longread);
  }

  static addFooter() {
    let body = document.querySelector("body");

    let footer = document.createElement("footer");
    footer.id = "pagefooter";

    let nextBtn = document.createElement("button");
    nextBtn.id = "nextBtn";
    nextBtn.className = "btn";
    nextBtn.innerHTML = "Далее";
    nextBtn.setAttribute("type", "button");
    nextBtn.addEventListener("click", App.backToTrack);

    footer.appendChild(nextBtn);
    body.appendChild(footer);
  }

  static backToTrack() {
    console.log("Finishing course ...");
    App.course.interactions.forEach(function (i) {
      Xapi.sendStmt(new Statement(i, "exited").finalStatement);
    });
    Xapi.sendStmt(new Statement(App.course, "exited").finalStatement);
    console.log("Redirecting back to track ...");
    (function () {
      if (window.top) {
        return window.top;
      }
      return window.parent;
    })().location = "/back/";
    return false;
  }

  static linkDb() {
    let head = document.querySelector("head");
    let script = document.createElement("script");
    script.setAttribute("src", "dist/db.js");
    head.appendChild(script);
  }

  static linkVerbs() {
    let head = document.querySelector("head");
    let script = document.createElement("script");
    script.setAttribute("src", "dist/verbs.js");
    head.appendChild(script);
  }

  static shuffle(array) {
    let newArr = array;
    for (let i = newArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  }

  static isArraysSimilar(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  static multiplyArrays(...values) {
    let result = values[0]
      .map(function (v) {
        let vals = values[1].map(function (i) {
          return `${v},${i}`;
        });
        return vals;
      })
      .flat();

    let newValues = values;
    newValues.shift();
    newValues.shift();

    if (newValues.length !== 0) {
      return multiplyArrays(result, ...newValues);
    }

    return result;
  }

  static getStructure() {
    let items = App.course.interactions.map(function (i, index) {
      let data = {
        id: i.id,
        parent: i.parent.id,
        name: i.name,
        type: i.interactionData.type,
        weight: i.required ? 1 : 0,
        is_leaf: false, // Флаг о том, что у этого элемента нет дочерних сущностей
        type_name: App.getRusName(i),
        order: index,
      };
      return data;
    });

    let structure = {
      id: App.course.id,
      type: "course",
      version: 1,
      component: "course",
      name: App.course.name,
      items: items,
    };

    let container = document.createElement("div");
    document.body.appendChild(container);
    container.innerText = JSON.stringify(structure);

    return JSON.stringify(structure);
  }

  static getRusName(i) {
    if (i instanceof TestInteraction) {
      return "Тест";
    } else if (i instanceof DictantInteraction) {
      return "Диктант";
    } else if (i instanceof LangExerciseInteraction) {
      return "Упражнение";
    } else if (i instanceof VideoInteraction) {
      return "Видео";
    } else if (i instanceof LongreadInteraction) {
      return "Лонгрид";
    } else if (i instanceof CommentInteraction) {
      return "Комментарий";
    } else if (i instanceof RatingInteraction) {
      return "Рейтинг";
    } else if (i instanceof SurveyInteraction) {
      return "Опросник";
    }
  }
}

// YT iFrame API

let tag = document.createElement("script");
let vidData = {};
let ranges = {};
let times = {}; // for setInterval
let timeout; // for setTimeout
let vidDivs;
let result = {};
let players = [];
let idToReport = {};

setTimeout(function () {
  console.log("YT iFrame API timeout finished");
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}, 1000);

function onYouTubeIframeAPIReady() {
  console.log("YT iFrame API ready");
  vidData.viewId = ADL.ruuid();
  vidDivs = document.querySelectorAll('div[id^="player"]');
  vidDivs.forEach(function (div, index) {
    //div.parentNode.classList.add('center')
    ranges[div.dataset.vid] = [];
    idToReport[div.dataset.vid] = div.dataset.id;

    let player = new YT.Player(`${div.id}`, {
      height: "480",
      width: "854",
      videoId: div.dataset.vid,
      playerVars: {
        autoplay: "0",
        // origin: 'https://cloud.scorm.com'
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
    result[div.dataset.vid] = false;
    players.push(player);
  });
  document.addEventListener(
    "visibilitychange",
    function () {
      if (players.length > 0) {
        players.forEach(function (p) {
          p.pauseVideo();
        });
      }
    },
    false
  );
}

function onPlayerReady(event) {
  // event.target.playVideo()

  getVidData(event.target);
}

function onPlayerStateChange(event) {
  if (event.data === 1) {
    clearTimeout(timeout);
    players.forEach(function (p) {
      if (event.target.getVideoData().video_id !== p.getVideoData().video_id) {
        p.pauseVideo();
      }
    });
    console.log("played");
    let position = ranges[event.target.getVideoData().video_id].length;
    ranges[event.target.getVideoData().video_id][position] = [];
    ranges[event.target.getVideoData().video_id][position][0] = Math.floor(
      event.target.getCurrentTime()
    );
    ranges[event.target.getVideoData().video_id][position][1] = Math.floor(
      event.target.getCurrentTime()
    );

    if (checkSeeked(ranges[event.target.getVideoData().video_id])) {
      console.log("seeked");
      Xapi.sendStmt(getVidData(event.target).stmtSeeked);
    }

    Xapi.sendStmt(getVidData(event.target).stmtPlay);

    times[event.target.getVideoData().video_id] = setInterval(function () {
      ranges[event.target.getVideoData().video_id][position][1] = Math.floor(
        event.target.getCurrentTime()
      );
    }, 1000);
  } else if (event.data === 2) {
    clearInterval(times[event.target.getVideoData().video_id]);
    timeout = setTimeout(function () {
      console.log("paused");
      Xapi.sendStmt(getVidData(event.target).stmtPaused);
    }, 1000);
  } else if (event.data === 0) {
    clearInterval(times[event.target.getVideoData().video_id]);
    clearTimeout(timeout);
    result[event.target.getVideoData().video_id] = true;
    console.log("finished");
    Xapi.sendStmt(getVidData(event.target).stmtCompleted);
    Xapi.sendStmt(getVidData(event.target).stmtPassed);
    Xapi.sendStmt(getVidData(event.target).stmtExited);
    checkResult();
  }
}

function checkResult() {
  if (!Object.values(result).includes(false)) {
    console.log("All videos have been viewed.");
  } else {
    console.log("Not all videos have been viewed.");
  }
}

function getVidData(vid) {
  vidData.vidId = vid.getVideoData().video_id;
  vidData.reportId = idToReport[vidData.vidId];
  vidData.vidName = vid.getVideoData().title;
  vidData.duration = moment
    .duration(vid.getDuration(), "seconds")
    .toISOString();
  vidData.currentTime = formatNum(vid.getCurrentTime());
  vidData.screenSize = `${vid.getIframe().width}x${vid.getIframe().height}`;
  vidData.quality = vid.getVideoData().video_quality;
  vidData.volume = vid.getVolume();
  vidData.width = vid.getIframe().width;
  vidData.height = vid.getIframe().height;
  vidData.speed = vid.getPlaybackRate();
  vidData.focus = true; // чекать положение в окне
  vidData.fullscreen =
    document.fullscreenElement !== null &&
    document.fullscreenElement.tagName === "IFRAME" ?
    true :
    false;
  vidData.ranges = formatRanges(ranges[vidData.vidId]);
  vidData.isSeeked = checkSeeked(ranges[vidData.vidId]);
  if (vidData.isSeeked === true) {
    vidData.seekedData = getSeekedData(ranges[vidData.vidId]);
  } else {
    vidData.seekedData = getSeekedData([
      [0, 0],
      [0, 0],
    ]);
  }

  return {
    stmtPlay: {
      actor: Xapi.data.actor,
      verb: {
        id: "https://w3id.org/xapi/video/verbs/played",
        display: {
          "en-US": "played",
        },
      },
      object: {
        id: vidData.reportId,
        definition: {
          name: {
            "en-US": vidData.vidName,
          },
          description: {
            "en-US": vidData.vidName,
          },
        },
        objectType: "Activity",
      },
      context: {
        contextActivities: {
          category: [{
            id: "https://w3id.org/xapi/video",
          }, ],
        },
        extensions: {
          "contextExt:viewId": vidData.viewId,
          "contextExt:videoDuration": vidData.duration,
          "contextExt:speed": vidData.speed,
          "contextExt:volume": vidData.volume,
          "contextExt:fullScreen": vidData.fullscreen,
          "contextExt:quality": vidData.quality,
          "contextExt:screenSize": vidData.screenSize,
          "contextExt:focus": vidData.focus,
        },
      },
      result: {
        extensions: {
          "resultExt:viewedRanges": vidData.ranges,
        },
      },
    },
    stmtPaused: {
      actor: Xapi.data.actor,
      verb: {
        id: "https://w3id.org/xapi/video/verbs/paused",
        display: {
          "en-US": "paused",
        },
      },
      object: {
        id: vidData.reportId,
        definition: {
          name: {
            "en-US": vidData.vidName,
          },
          description: {
            "en-US": vidData.vidName,
          },
        },
        objectType: "Activity",
      },
      context: {
        contextActivities: {
          category: [{
            id: "https://w3id.org/xapi/video",
          }, ],
        },
        extensions: {
          "contextExt:viewId": vidData.viewId,
          "contextExt:videoDuration": vidData.duration,
        },
      },
      result: {
        extensions: {
          "resultExt:paused": vidData.currentTime,
          "resultExt:viewedRanges": vidData.ranges,
        },
      },
    },
    stmtSeeked: {
      actor: Xapi.data.actor,
      verb: {
        id: "https://w3id.org/xapi/video/verbs/seeked",
        display: {
          "en-US": "seeked",
        },
      },
      object: {
        id: vidData.reportId,
        definition: {
          name: {
            "en-US": vidData.vidName,
          },
          description: {
            "en-US": vidData.vidName,
          },
        },
        objectType: "Activity",
      },
      context: {
        contextActivities: {
          category: [{
            id: "https://w3id.org/xapi/video",
          }, ],
        },
        extensions: {
          "contextExt:viewId": vidData.viewId,
          "contextExt:videoDuration": vidData.duration,
        },
      },
      result: {
        extensions: {
          "resultExt:from": vidData.seekedData[0],
          "resultExt:to": vidData.seekedData[1],
          "resultExt:viewedRanges": vidData.ranges,
        },
      },
    },
    stmtCompleted: {
      actor: Xapi.data.actor,
      verb: {
        id: "https://w3id.org/xapi/video/verbs/completed",
        display: {
          "en-US": "completed",
        },
      },
      object: {
        id: vidData.reportId,
        definition: {
          name: {
            "en-US": vidData.vidName,
          },
          description: {
            "en-US": vidData.vidName,
          },
        },
        objectType: "Activity",
      },
      context: {
        contextActivities: {
          category: [{
            id: "https://w3id.org/xapi/video",
          }, ],
        },
        extensions: {
          "contextExt:viewId": vidData.viewId,
          "contextExt:videoDuration": vidData.duration,
        },
      },
      result: {
        extensions: {
          "resultExt:viewedRanges": vidData.ranges,
        },
      },
    },
    stmtPassed: {
      actor: Xapi.data.actor,
      verb: {
        id: "https://w3id.org/xapi/video/verbs/passed",
        display: {
          "en-US": "passed",
        },
      },
      object: {
        id: vidData.reportId,
        definition: {
          name: {
            "en-US": vidData.vidName,
          },
          description: {
            "en-US": vidData.vidName,
          },
        },
        objectType: "Activity",
      },
      context: {
        contextActivities: {
          category: [{
            id: "https://w3id.org/xapi/video",
          }, ],
        },
        extensions: {
          "contextExt:viewId": vidData.viewId,
          "contextExt:videoDuration": vidData.duration,
        },
      },
      result: {
        score: {
          raw: 100,
        },
        success: true,
        extensions: {
          "resultExt:viewedRanges": vidData.ranges,
        },
      },
    },
    stmtExited: {
      actor: Xapi.data.actor,
      verb: {
        id: "https://w3id.org/xapi/video/verbs/exited",
        display: {
          "en-US": "exited",
        },
      },
      object: {
        id: vidData.reportId,
        definition: {
          name: {
            "en-US": vidData.vidName,
          },
          description: {
            "en-US": vidData.vidName,
          },
        },
        objectType: "Activity",
      },
      context: {
        contextActivities: {
          category: [{
            id: "https://w3id.org/xapi/video",
          }, ],
        },
        extensions: {
          "contextExt:viewId": vidData.viewId,
          "contextExt:videoDuration": vidData.duration,
        },
      },
      result: {
        extensions: {
          "resultExt:viewedRanges": vidData.ranges,
        },
      },
    },
  };
}

function formatNum(num) {
  return moment.duration(Math.floor(num), "seconds").toISOString();
}

function formatRanges(arr) {
  if (arr.length > 0) {
    return arr.map(function (item) {
      return item.map(function (num) {
        return formatNum(num);
      });
    });
  } else {
    return arr;
  }
}

function checkSeeked(arr) {
  if (arr.length > 1) {
    let difference = Math.abs(arr[arr.length - 1][0] - arr[arr.length - 2][1]);
    if (difference > 1) {
      return true;
    } else if (difference <= 1) {
      return false;
    }
  } else {
    return false;
  }
}

function getSeekedData(arr) {
  return [formatNum(arr[arr.length - 2][1]), formatNum(arr[arr.length - 1][0])];
}

window.addEventListener("DOMContentLoaded", App.init);