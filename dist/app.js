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
        let list = App.renderHooks.filter(i => {
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
        this.minScore = this.interactionData.min_score;
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
        this.amountOfUnits =
            this.interactionData.amount_of_units === "0" ?
            db[this.index].length :
            Number(this.interactionData.amount_of_units);
        this.unitsToComplete =
            this.interactionData.units_to_complete === "0" ?
            this.amount_of_units :
            Number(this.interactionData.units_to_complete);
        this.unitsList = this.getUnitsList();
    }

    getUnitsList() {
        let unitsList = Array.from(db[this.index]);
        if (this.shuffle === "true") {
            unitsList = App.shuffle(unitsList);
        }
        unitsList.slice(0, this.amountOfUnits);
        return unitsList;
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
        return this.score > this.minScore &&
            this.unitsCompleted >= this.unitsToComplete ?
            true :
            false;
    }
}

class LangExerciseInteraction extends IterableScorableInteraction {
    constructor(index, renderHook, parent) {
        super(index, renderHook, parent);
        this.insideBox = this.interactionData.inside_box;
        this.ruleName = this.interactionData.name;
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

class LongreadInteraction extends Interaction {
    constructor(index, renderHook, parent) {
        super(index, renderHook, parent);
        this.interactionUnits = [{
            result: false,
            completed: false
        }];
        this.init();
    }

    init() {
        let that = this;
        this.observer = new IntersectionObserver(function (entries, observer) {
            // let that = this
            entries.forEach(function (entry) {
                if (entry.isIntersecting === true) {
                    console.log("intersecting");
                    that.observer.unobserve(entry.target);
                    that.interactionUnits[0].result = true;
                    that.interactionUnits[0].completed = true;
                    that.completed = true;
                }
            });
        });
        this.observer.observe(this.renderHook);
        App.observers.push(this.observer);
    }
}

class DictantInteraction extends ScorableInteraction {
    constructor(index, renderHook, parent) {
        super(index, renderHook, parent);
        this.insideBox = this.interactionData.inside_box;
        this.ruleName = this.interactionData.name;
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
        this.ruleName = this.parent.parent.ruleName;
        this.letter = this.parent.parent.insideBox;
        this.render();
    }

    render() {
        this.container = document.createElement("div");
        this.container.className = "leftBorderMarker letterBox";
        this.container.innerHTML = `
        <div class='left'>
        <h2>Вы прошли успешную тренировку!</h2>
        <p>Узнайте еще букв${this.letter.lenght === 1 ? 'у' : 'ы'} из загаданного слова.</p>
        <p>Мы вернемся к ${this.letter.lenght === 1 ? 'ней' : 'ним'} в конце модуля.</p>
        </div>
        <div class='right'>
        <div class='letter off'>${this.letter}</div>
        <div class='img'><img src='dist/assets/slow_box.gif'/></div>
        </div>
        `;
        this.container
            .querySelector(".img img")
            .addEventListener("click", this.animateBox.bind(this));
        if (this.parent instanceof LangExerciseUnit) {
            this.parent.unitContainer.querySelector('.continue').before(this.container)
        } else if (this.parent instanceof DictantUnit) {
            this.renderHook.appendChild(this.container);
        }
    }

    animateLetters(element) {
        let lettersAnimation = [{
                transformOrigin: "50% 50%",
                transform: "scale(0.9)"
            },
            {
                transformOrigin: "50% 50%",
                transform: "scale(1.4)"
            }
        ];

        let lettersTiming = {
            duration: 2500,
            iterations: 1,
            fill: "forwards"
        };
        element.animate(lettersAnimation, lettersTiming);
    }

    animateBox(e) {
        let disappearAnimation = [{
                opacity: "1"
            },
            {
                opacity: "0"
            }
        ];

        let disapperTiming = {
            duration: 1000,
            fill: "forwards",
            iterations: 1
        };
        e.currentTarget.animate(disappearAnimation, disapperTiming);
        this.container.querySelector('.letter').classList.remove('off')
        this.animateLetters(this.container.querySelector(".letter"));
    }
}

class TestInteraction extends IterableScorableInteraction {
    constructor(index, renderHook, parent) {
        super(index, renderHook, parent);
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
        Xapi.sendStmt(new Statement(this, "interacted").finalStatement);
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

    get result() {
        return this.completed;
    }
}

class VideoUnit extends InteractionUnit {
    constructor(index, parent, cssClasses, dbData) {
        super(index, parent, cssClasses, dbData);
        this.vid = this.dbData.vid;
        this.init();
    }

    init() {
        this.unitContainer = this.createUnitContainer("vid");
        this.unitContainer.id = `player${this.parent.index}${this.index}`;
        this.unitContainer.dataset.vid = this.parent.renderHook.dataset.vid;
    }
}

class DictantUnit extends InteractionUnit {
    constructor(index, parent, cssClasses, dbData) {
        super(index, parent, cssClasses, dbData);
        this.text = dbData.text;
        this.fbs = dbData.fbs;
        this.subUnits = [];
        this.mode = "active"; // active, feedback
        this.render();
    }

    get score() {
        let score = 0;
        this.subUnits.forEach(function (w) {
            if (w.result) {
                score++;
            }
        });
        return score;
    }

    get completed() {
        return this._completed;
    }

    set completed(v) {
        let numCompleted = 0;
        this.subUnits.forEach(function (w) {
            if (w.completed) {
                numCompleted++;
            }
        });
        this._completed = numCompleted === this.subUnits.length ? true : false;

        if (this.completed === true) {
            this.unitContainer.querySelector("button.check").classList.remove("off");
        }
        // this.setFb(v.status, v.index)
        this.parent.completed = true;
    }

    get totalTasks() {
        return this.subUnits.length;
    }

    get result() {
        return this.score === this.totalTasks ? true : false;
    }

    get tasksCompleted() {
        let numCompleted = 0;
        this.subUnits.forEach(function (w) {
            if (w.completed) {
                numCompleted++;
            }
        });
        return numCompleted;
    }

    render() {
        // creating unit container
        this.unitContainer = this.createUnitContainer(this.cssClasses);

        // creating unit header
        let header = document.createElement("div");
        header.classList.add("header");
        header.innerHTML = `Диктант`;

        //creating unit body
        let body = this.createBody();

        // creting unit feedback
        let fb = document.createElement("div");
        fb.classList.add("fb");

        // creating unit check button
        let checkBtn = document.createElement("button");
        checkBtn.setAttribute("type", "button");
        checkBtn.className = "btn check regular off";
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
        this.subUnits.forEach(function (w) {
            w.markAnswers();
        });
        e.currentTarget.classList.add("off");
        this.unitContainer
            .querySelector("button.showAnswers")
            .classList.remove("off");
    }

    showAnswers(e) {
        this.subUnits.forEach(function (w) {
            w.showAnswers();
            w.addFbIcon();
        });
        e.currentTarget.classList.add("off");
        this.setFb("o");
        this.mode = "feedback";
        new LetterBox(this.unitContainer, this.parent.ruleName, this.parent.insideBox);
    }

    setFb(wordObj, e) {
        let that = this;
        let fb = that.unitContainer.querySelector(".fb");
        fb.innerHTML = "";
        if (this.mode === "active") {
            fb.innerHTML = `<div class="fbUnit leftBorderMarker"><p class="fbUnitHeader">Обратная связь</p><p class="fbText">Нажимайте на иконку <i class="fas fa-hand-point-up"></i>, чтобы увидеть обратную связь.</p></div>`;
        } else if (this.mode === "feedback") {
            fb.innerHTML = `<div class="fbUnit leftBorderMarker selected"><p class="fbUnitHeader">${
        wordObj.correctOption
      }</p><p class="fbText">${that.fbs[wordObj.wordIndex]}</p></div>`;
        }
    }

    createBody() {
        let that = this;
        let body = document.createElement("div");
        body.className = "body";
        let separateWords = this.text.split(" ");
        let wordIndex = 0;
        let modifiedWords = separateWords.map(function (word) {
            if (word.includes("_")) {
                let FIDDItem = new FillInDropDownItem(that, word, wordIndex);
                that.subUnits.push(FIDDItem);
                wordIndex++;
                return `<span class="replace">${word}</span>`;
            } else {
                return word;
            }
        });
        body.innerHTML = modifiedWords.join(" ");
        let replaceElements = Array.from(body.querySelectorAll(".replace"));
        replaceElements.forEach(function (el, i) {
            body.replaceChild(that.subUnits[i].init(), el);
        });
        return body;
    }
}

class LangExerciseUnit extends InteractionUnit {
    constructor(index, parent, cssClasses, dbData) {
        super(index, parent, cssClasses, dbData);
        this.text = dbData.text;
        // this.id = dbData.id
        this.tip = dbData.tip;
        this.fb = dbData.fb;
        this.subUnits = [];
        this.render();
    }

    get score() {
        let score = 0;
        this.subUnits.forEach(function (w) {
            if (w.result) {
                score++;
            }
        });
        return score;
    }

    get completed() {
        return this._completed;
    }

    set completed(v) {
        let numCompleted = 0;
        this.subUnits.forEach(function (w) {
            if (w.completed) {
                numCompleted++;
            }
        });
        this._completed = numCompleted === this.subUnits.length ? true : false;

        if (this.completed === true && (this.index !== this.parent.unitsList.length - 1)) {
            if (this.index === this.parent.unitsToComplete - 1) {
                new LetterBox(this);
            }
            this.unitContainer
                .querySelector("button.continue")
                .classList.remove("off");
        }
        this.setFb(v.status, v.index);
        this.parent.completed = true;
    }

    get totalTasks() {
        return this.subUnits.length;
    }

    get result() {
        return this.score === this.totalTasks ? true : false;
    }

    get tasksCompleted() {
        let numCompleted = 0;
        this.subUnits.forEach(function (w) {
            if (w.completed) {
                numCompleted++;
            }
        });
        return numCompleted;
    }

    render() {
        // creating unit container
        this.unitContainer = this.createUnitContainer(this.cssClasses);

        // creating unit header
        let header = document.createElement("div");
        header.classList.add("header");
        header.innerHTML = `Задание ${this.index + 1} из ${
      this.parent.amountOfUnits
    }<a class='showTip'>Показать подсказку <i class="fas fa-hand-point-up"></i></a>`;

        // creating unit tip
        let tip = document.createElement("div");
        tip.className = "tip off";
        tip.innerHTML = `<p>${this.tip}</p>`;

        //creating unit body
        let body = this.createBody();

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
        /* if (this.index === this.parent.unitsToComplete - 1) {
            new LetterBox(this);
        } */
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
                'Скрыть подсказку <i class="fas fa-hand-point-up"></i>';
        } else if (!tip.classList.contains("off")) {
            tip.classList.add("off");
            e.currentTarget.innerHTML =
                'Показать подсказку <i class="fas fa-hand-point-up"></i>';
        }
    }

    createBody() {
        let that = this;
        let body = document.createElement("div");
        body.className = "body";
        let separateWords = this.text.split(" ");
        let wordIndex = 0;
        let modifiedWords = separateWords.map(function (word) {
            if (word.includes("_")) {
                let FIDDItem = new FillInDropDownItem(that, word, wordIndex);
                that.subUnits.push(FIDDItem);
                wordIndex++;
                return `<span class="replace">${word}</span>`;
            } else {
                return word;
            }
        });
        body.innerHTML = modifiedWords.join(" ");
        let replaceElements = Array.from(body.querySelectorAll(".replace"));
        replaceElements.forEach(function (el, i) {
            body.replaceChild(that.subUnits[i].init(), el);
        });
        return body;
    }
}

class BasicTaskItem {
    constructor(parent) {
        this.parent = parent;
        this.type = "cmi.interaction";
    }
}

class FillInDropDownItem extends BasicTaskItem {
    constructor(parent, word, wordIndex) {
        super(parent);
        // this.parent = parent
        this.wordIndex = wordIndex;
        this._word = word; // 1Пр_(а*,б)глаша_(в*,г)м
        this.word = this.getWord(this._word);
        this.spacesTotal = this._word.match(/_/g).length;
        this.choicesToInsert = this.getChoicesToInsert(this._word);
        this.choicesToShow = this.getChoicesToShow(this._word);
        this.correctAnswers = this.getCorrectAnwers(this._word);
        this.userAnswer = new Array(this.spacesTotal);
        this._completed = false;
        this.result = false;
        this.htmlElement;
        Xapi.sendStmt(new Statement(this, "interacted").finalStatement);
    }

    get completed() {
        return this._completed;
    }

    set completed(v) {
        this._completed = true;
        this.parent.completed = {
            index: this.wordIndex,
            status: this.result
        };
    }

    get stmtChoicesOptions() {
        return Xapi.getStmtChoicesOptions(
            Xapi.getPossibleOptions(this.word, this.choicesToInsert)
        );
    }

    get stmtResponse() {
        let that = this;
        let counter = 0;
        let letters = this.word.split("");
        let newWord = letters
            .map(function (a) {
                if (a === "_") {
                    let l = that.userAnswer[counter];
                    counter++;
                    return l;
                } else {
                    return a;
                }
            })
            .join("");
        return newWord;
    }

    get id() {
        return `${this.parent.id}/subunit_${this.wordIndex}`;
    }

    getWord(item) {
        return item.replace(/(\(.+?\))/g, "");
    }

    get correctOption() {
        let that = this;
        let counter = 0;
        let letters = this.word.split("");
        let correctWord = letters
            .map(function (a, index) {
                if (a === "_") {
                    let l = that.correctAnswers[counter];
                    counter++;
                    return l;
                } else {
                    return a;
                }
            })
            .join("");
        return correctWord;
    }

    getChoicesToInsert(item) {
        let arr1 = item.match(/(\(.+?\))/g);
        let arr2 = arr1.map(function (w) {
            let w1 = w.replace(/[\(\*\)]/g, "");
            let arr3 = w1.split(",");
            let arr4 = arr3.map(function (i) {
                switch (i) {
                    case "слитно":
                        return "";
                    case "раздельно":
                        return " ";
                    case "дефис":
                        return "-";
                    case "пусто":
                        return "";
                    case "зпт":
                        return ",";
                    default:
                        return i;
                }
            });
            return arr4;
        });
        return arr2;
    }

    getChoicesToShow(item) {
        let arr1 = item.match(/(\(.+?\))/g);
        let arr2 = arr1.map(function (w) {
            let w1 = w.replace(/[\(\*\)]/g, "");
            let arr3 = w1.split(",");
            let arr4 = arr3.map(function (i) {
                switch (i) {
                    case "пусто":
                        return "";
                    case "зпт":
                        return ",";
                    default:
                        return i;
                }
            });
            return arr4;
        });
        return arr2;
    }

    getCorrectAnwers(item) {
        return item.match(/[^\(\,]*\*/g).map(function (i) {
            let x = i.replace("*", "");
            switch (x) {
                case "слитно":
                    return "";
                case "раздельно":
                    return " ";
                case "дефис":
                    return "-";
                case "пусто":
                    return "";
                case "зпт":
                    return ",";
                default:
                    return x;
            }
        });
    }

    init() {
        let word = document.createElement("span");
        word.classList.add("word");
        word.dataset.word_index = this.wordIndex;
        let that = this;
        let spaceNum = 0;
        let letters = this.word.split("");
        let modifiedText = letters
            .map(function (l) {
                if (l === "_") {
                    let choicesSpans = that.choicesToInsert[spaceNum]
                        .map(function (c, index) {
                            return `<span class="answer box ${that.choicesToShow[spaceNum][index].length > 2 ? 'long' : ''}" data-correct="${
                c === that.correctAnswers[spaceNum] ? true : false
              }" data-choice_to_insert="${that.choicesToInsert[spaceNum][index]}">${that.choicesToShow[spaceNum][index]}</span>`;
                        })
                        .join("");
                    let newLetter = `<span class="subtask"><span class="space empty box" data-space_num=${spaceNum}>_</span><span class="popupAnsContainer off">${choicesSpans}</span></span>`;
                    spaceNum++;
                    return newLetter;
                } else {
                    return l;
                }
            })
            .join("");

        word.innerHTML = modifiedText;

        let answers = Array.from(word.querySelectorAll(".answer"));
        answers.forEach(function (a, i) {
            a.addEventListener("click", that.setAnswer.bind(that));
        });

        let spaces = Array.from(word.querySelectorAll(".space"));
        for (let space of spaces) {
            space.addEventListener(
                "click",
                that.toggleItem.bind(that, "popupAnsContainer")
            );
        }
        this.htmlElement = word;
        return word;
    }

    toggleItem(cssClass, e) {
        let allItems = this.parent.unitContainer.querySelectorAll(`.${cssClass}`);
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

    markAnswers() {
        let that = this;
        let spaces = Array.from(this.htmlElement.querySelectorAll(".space"));
        spaces.forEach(function (s, i) {
            if (s.innerHTML === that.correctAnswers[i]) {
                s.classList.add("correct");
            } else if (s.innerHTML !== that.correctAnswers[i]) {
                s.classList.add("incorrect");
            }
            s.classList.add("disabled");
        });
    }

    showAnswers() {
        let that = this;
        let spaces = Array.from(this.htmlElement.querySelectorAll(".space"));
        spaces.forEach(function (s, i) {

            if (s.innerHTML !== that.correctAnswers[i]) {
                s.innerHTML = that.correctAnswers[i];
                if (s.innerHTML === '' || s.innerHTML === ' ') {
                    s.classList.add('helper')
                } else {
                    console.log('removing helper')
                    s.classList.remove('helper')
                }
            }
            if (that.choicesToShow[i].includes('слитно')) {
                if (s.innerHTML === '') {
                    s.parentNode.classList.add('nospace')
                } else {
                    s.parentNode.classList.remove('nospace')
                }

                if (s.innerHTML === '-' || s.innerHTML === ' ') {
                    s.classList.add('box')
                    s.classList.remove('tri')
                } else {
                    s.classList.remove('box')
                    s.classList.add('tri')
                }
            }


            s.classList.remove("correct");
            s.classList.remove("incorrect");
        });
    }

    addFbIcon() {
        let that = this;
        let icon = document.createElement("span");
        icon.className = "box icon empty";
        icon.innerHTML = `<i class="fas fa-hand-point-up"></i>`;
        this.htmlElement.appendChild(icon);
        icon.addEventListener("click", this.parent.setFb.bind(this.parent, this));
        icon.addEventListener("click", function (e) {
            let icons = Array.from(
                that.parent.unitContainer.querySelectorAll(".icon")
            );
            icons.forEach(function (i) {
                i.classList.remove("selected");
            });
            e.currentTarget.classList.add("selected");
        });
    }

    setAnswer(e) {
        let that = this;
        let answer = e.currentTarget;
        let space = e.currentTarget.parentNode.parentNode.querySelector(".space");
        let word = space.parentNode.parentNode;
        if (answer.dataset.choice_to_insert === '' || answer.dataset.choice_to_insert === ' ') {
            space.classList.add('helper')
        }
        space.innerHTML = answer.dataset.choice_to_insert;

        that.userAnswer = [];

        for (let i = 0; i < that.spacesTotal; i++) {
            that.userAnswer.push(
                word.querySelector(`.space[data-space_num='${i}']`).innerHTML
            );
        }

        space.classList.remove("empty");
        if (answer.innerText === 'слитно') {
            e.currentTarget.parentNode.parentNode.classList.add('nospace')
            space.classList.add('tri')
            space.classList.remove('box')
        } else {
            e.currentTarget.parentNode.parentNode.classList.remove('nospace')
            space.classList.remove('tri')
            space.classList.add('box')
            if (answer.innerText === 'дефис') {
                space.classList.remove('helper')
            }
        }

        if (!that.userAnswer.includes("_")) {
            Xapi.sendStmt(new Statement(that, "answered").finalStatement);
            if (App.isArraysSimilar(that.userAnswer, that.correctAnswers)) {
                that.result = true;
            } else if (!App.isArraysSimilar(that.userAnswer, that.correctAnswers)) {
                that.result = false;
            }
            if (that.parent instanceof LangExerciseUnit) {
                that.markAnswers();
                setTimeout(function () {
                    that.showAnswers();
                }, 2000);
            }
            that.completed = true;
        }
        e.currentTarget.parentNode.classList.add("off");
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
        actor: "user"
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
                    grouping: Xapi.activityId
                }
            }
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
            context: Xapi.data.context
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

    static getStmtChoicesOptions(arr) {
        let newArr = arr.map(function (option) {
            return {
                id: option,
                description: {
                    "ru-RU": option
                }
            };
        });
        return newArr;
    }

    static getStmtCorrectPattern(item) {
        return [String(item)];
    }

    static getPossibleOptions(words, choices, num = 0) {
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
    }

    static getCorrectOption(word, correctArr) {
        let thisWord = word;
        correctArr.forEach(function (letter) {
            thisWord = thisWord.replace("_", letter);
        });
        return thisWord;
    }
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
                        "en-US": this.obj.name ? this.obj.name : this.obj.id
                    },
                    description: {
                        "en-US": this.obj.description ?
                            this.obj.description : this.obj.name ?
                            this.obj.name : this.obj.id
                    }
                }
            }
        };
        if (this.obj.type === "cmi.interaction") {
            let extraDefinitionProperties = {
                type: "http://adlnet.gov/expapi/activities/cmi.interaction",
                interactionType: "choice",
                correctResponsesPattern: [this.obj.correctOption],
                choices: this.obj.stmtChoicesOptions
            };
            Object.assign(simpleObject.object.definition, extraDefinitionProperties);
        }
        return simpleObject;
    }

    get actorObj() {
        return {
            actor: Xapi.data.actor ? Xapi.data.actor : "User"
        };
    }

    get verbObj() {
        return {
            verb: verbs[this.verb]
        };
    }

    get resultObj() {
        let resultObj = {};
        if (this.verb === "completed") {
            resultObj["result"] = {
                completion: this.obj.completed
            };
        } else if (this.verb === "answered") {
            if (this.verb === "answered") {
                resultObj["result"] = {
                    success: this.obj.stmtResponse === this.obj.correctOption,
                    response: this.obj.stmtResponse
                };
            }
        } else if (this.verb === "passed" || this.verb === "failed") {
            resultObj["result"] = {
                score: {
                    raw: this.obj.score
                },
                success: this.obj.result
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
                        objectType: "Activity"
                    }]
                }
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
                return i.completed
            }
        });
        return !completionStatus.includes(false)
    }

    set completed(v) {
        if (this.completed) {
            console.log('Course completed')
            Xapi.sendStmt(new Statement(this, "completed").finalStatement);
            if (this.result === true) {
                console.log('Course passed')
                Xapi.sendStmt(new Statement(this, "passed").finalStatement);
            } else if (this.result === false) {
                console.log('Course failed')
                Xapi.sendStmt(new Statement(this, "failed").finalStatement);
            }
        }
    }
}

class App {
    constructor() {}
    static renderHooks = [];
    static testMode = true;
    static id = "";
    static course;
    static loaded = false;
    static statements = [];
    static isVideo = false;

    static isTestMode() {
        App.testMode = Boolean(
            document
            .querySelector('meta[content^="testmode"]')
            .getAttribute("content")
            .split("testmode:")[1]
        );
    }

    static getId() {
        let prefix = document
            .querySelector('meta[content^="prefix"]')
            .getAttribute("content")
            .split("prefix:")[1]
        let course = document
            .querySelector('meta[content^="course"]')
            .getAttribute("content")
            .split("course:")[1]
        App.id = prefix + course
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
        /* App.linkVerbs()
            App.linkDb() */
        App.addFooter();
        App.getId();
        App.getRenderHooks();
        // App.isTestMode()
        if (App.testMode === false) {
            ADL.XAPIWrapper.changeConfig(Xapi.getXapiData());
        }
        App.course = new Course(App.id, App.renderHooks);
    }

    static observers = [];

    static addFooter() {
        let body = document.querySelector("body");

        let footer = document.createElement("footer");
        footer.id = "pagefooter";
        footer.className = "interaction";
        footer.dataset.type = "longread";
        footer.dataset.name = "longread";
        footer.dataset.required = "true";

        let btn = document.createElement("button");
        btn.innerHTML = "Далее";
        btn.setAttribute("type", "button");
        btn.addEventListener("click", App.backToTrack);

        footer.appendChild(btn);
        body.appendChild(footer);
    }

    static backToTrack() {
        console.log("Finishing course ...");
        App.course.interactions.forEach(function (i) {
            Xapi.sendStmt(new Statement(i, "exited").finalStatement);
        })
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
        let player = new YT.Player(`${div.id}`, {
            height: "480",
            width: "854",
            videoId: div.dataset.vid,
            playerVars: {
                autoplay: "0"
                // origin: 'https://cloud.scorm.com'
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
            }
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
            [0, 0]
        ]);
    }

    return {
        stmtPlay: {
            actor: Xapi.data.actor,
            verb: {
                id: "https://w3id.org/xapi/video/verbs/played",
                display: {
                    "en-US": "played"
                }
            },
            object: {
                id: Xapi.activityId + "/" + vidData.vidId,
                definition: {
                    name: {
                        "en-US": vidData.vidName
                    },
                    description: {
                        "en-US": vidData.vidName
                    }
                },
                objectType: "Activity"
            },
            context: {
                contextActivities: {
                    category: [{
                        id: "https://w3id.org/xapi/video"
                    }]
                },
                extensions: {
                    "contextExt:viewId": vidData.viewId,
                    "contextExt:videoDuration": vidData.duration,
                    "contextExt:speed": vidData.speed,
                    "contextExt:volume": vidData.volume,
                    "contextExt:fullScreen": vidData.fullscreen,
                    "contextExt:quality": vidData.quality,
                    "contextExt:screenSize": vidData.screenSize,
                    "contextExt:focus": vidData.focus
                }
            },
            result: {
                extensions: {
                    "resultExt:viewedRanges": vidData.ranges
                }
            }
        },
        stmtPaused: {
            actor: Xapi.data.actor,
            verb: {
                id: "https://w3id.org/xapi/video/verbs/paused",
                display: {
                    "en-US": "paused"
                }
            },
            object: {
                id: Xapi.activityId + "/" + vidData.vidId,
                definition: {
                    name: {
                        "en-US": vidData.vidName
                    },
                    description: {
                        "en-US": vidData.vidName
                    }
                },
                objectType: "Activity"
            },
            context: {
                contextActivities: {
                    category: [{
                        id: "https://w3id.org/xapi/video"
                    }]
                },
                extensions: {
                    "contextExt:viewId": vidData.viewId,
                    "contextExt:videoDuration": vidData.duration
                }
            },
            result: {
                extensions: {
                    "resultExt:paused": vidData.currentTime,
                    "resultExt:viewedRanges": vidData.ranges
                }
            }
        },
        stmtSeeked: {
            actor: Xapi.data.actor,
            verb: {
                id: "https://w3id.org/xapi/video/verbs/seeked",
                display: {
                    "en-US": "seeked"
                }
            },
            object: {
                id: Xapi.activityId + "/" + vidData.vidId,
                definition: {
                    name: {
                        "en-US": vidData.vidName
                    },
                    description: {
                        "en-US": vidData.vidName
                    }
                },
                objectType: "Activity"
            },
            context: {
                contextActivities: {
                    category: [{
                        id: "https://w3id.org/xapi/video"
                    }]
                },
                extensions: {
                    "contextExt:viewId": vidData.viewId,
                    "contextExt:videoDuration": vidData.duration
                }
            },
            result: {
                extensions: {
                    "resultExt:from": vidData.seekedData[0],
                    "resultExt:to": vidData.seekedData[1],
                    "resultExt:viewedRanges": vidData.ranges
                }
            }
        },
        stmtCompleted: {
            actor: Xapi.data.actor,
            verb: {
                id: "https://w3id.org/xapi/video/verbs/completed",
                display: {
                    "en-US": "completed"
                }
            },
            object: {
                id: Xapi.activityId + "/" + vidData.vidId,
                definition: {
                    name: {
                        "en-US": vidData.vidName
                    },
                    description: {
                        "en-US": vidData.vidName
                    }
                },
                objectType: "Activity"
            },
            context: {
                contextActivities: {
                    category: [{
                        id: "https://w3id.org/xapi/video"
                    }]
                },
                extensions: {
                    "contextExt:viewId": vidData.viewId,
                    "contextExt:videoDuration": vidData.duration
                }
            },
            result: {
                extensions: {
                    "resultExt:viewedRanges": vidData.ranges
                }
            }
        },
        stmtPassed: {
            actor: Xapi.data.actor,
            verb: {
                id: "https://w3id.org/xapi/video/verbs/passed",
                display: {
                    "en-US": "passed"
                }
            },
            object: {
                id: Xapi.activityId + "/" + vidData.vidId,
                definition: {
                    name: {
                        "en-US": vidData.vidName
                    },
                    description: {
                        "en-US": vidData.vidName
                    }
                },
                objectType: "Activity"
            },
            context: {
                contextActivities: {
                    category: [{
                        id: "https://w3id.org/xapi/video"
                    }]
                },
                extensions: {
                    "contextExt:viewId": vidData.viewId,
                    "contextExt:videoDuration": vidData.duration
                }
            },
            result: {
                score: {
                    raw: 100
                },
                success: true,
                extensions: {
                    "resultExt:viewedRanges": vidData.ranges
                }
            }
        },
        stmtExited: {
            actor: Xapi.data.actor,
            verb: {
                id: "https://w3id.org/xapi/video/verbs/exited",
                display: {
                    "en-US": "exited"
                }
            },
            object: {
                id: Xapi.activityId + "/" + vidData.vidId,
                definition: {
                    name: {
                        "en-US": vidData.vidName
                    },
                    description: {
                        "en-US": vidData.vidName
                    }
                },
                objectType: "Activity"
            },
            context: {
                contextActivities: {
                    category: [{
                        id: "https://w3id.org/xapi/video"
                    }]
                },
                extensions: {
                    "contextExt:viewId": vidData.viewId,
                    "contextExt:videoDuration": vidData.duration
                }
            },
            result: {
                extensions: {
                    "resultExt:viewedRanges": vidData.ranges
                }
            }
        }
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