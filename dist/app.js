class Interaction {
    constructor(index, renderHook, parent) {
        this.parent = parent
        this.index = index
        this.renderHook = renderHook
        this.interactionData = renderHook.dataset
        this.name = this.interactionData.name
        this.required = this.interactionData.required
        this.interactionUnits = []
    }

    get id() {
        let type = this.interactionData.type
        let list = App.course.interactions.filter(i => {
            return i.interactionData.type === type
        })
        let num = list.indexOf(this)
        return `${this.parent.id}/${type}_${num}`
    }

    get completed() {
        let incompleteUnits = this.interactionUnits.filter(function (u) {
            if (u.completed === false) {
                return u
            }
        })

        return incompleteUnits.length > 0 ? false : true
    }

    get result() {
        let result = 0
        this.interactionUnits.forEach(function (u) {
            if (u.result === true) {
                result++
            }
        })
        return result === this.interactionUnits
    }
}

class ScorableInteraction extends Interaction {
    constructor(index, renderHook, parent) {
        super(index, renderHook, parent)
        this.minScore = this.interactionData.min_score
    }

    get score() {
        let score = 0
        this.interactionUnits.forEach(function (u) {
            if (u.result === true) {
                score++
            }
        })
        return score
    }

    get result() {
        return this.score >= this.minScore ? true : false
    }
}

class IterableScorableInteraction extends ScorableInteraction {
    constructor(
        index,
        renderHook, parent
    ) {
        super(index, renderHook, parent)
        this.isShuffle = this.interactionData.is_shuffle
        this.amountOfUnits = this.interactionData.amount_of_units === '0' ? db[this.index].length : Number(this.interactionData.amount_of_units)
        this.unitsToComplete = this.interactionData.units_to_complete === '0' ? this.amount_of_units : Number(this.interactionData.units_to_complete)
        this.unitsList = this.getUnitsList()
    }

    getUnitsList() {
        let unitsList = Array.from(db[this.index])
        if (this.isShuffle === 'true') {
            unitsList = App.shuffle(unitsList)
        }
        unitsList.slice(0, this.amountOfUnits)
        return unitsList
    }

    get score() {
        let score = 0
        this.interactionUnits.forEach(function (u) {
            if (u.result === true) {
                score++
            }
        })
        return score
    }

    get unitsCompleted() {
        let completed = 0
        this.interactionUnits.forEach(function (u) {
            if (u.completed === true) {
                completed++
            }
        })
        return completed
    }

    get result() {
        return ((this.score > this.minScore) && (this.unitsCompleted >= this.unitsToComplete)) ? true : false
    }
}

class LangExerciseInteraction extends IterableScorableInteraction {
    constructor(
        index,
        renderHook, parent
    ) {
        super(index, renderHook, parent)
        this.insideBox = this.interactionData.inside_box
        this.init()
    }

    createUnit(num) {
        if (num < this.unitsList.length) {
            let unit = new LangExerciseUnit(num, this, 'langExerciseUnit', this.unitsList[num])
            this.interactionUnits.push(unit)
        }
    }

    init() {
        this.createUnit(0)
    }
}

class LongreadInteraction extends ScorableInteraction {
    constructor(
        index,
        renderHook, parent
    ) {
        super(index, renderHook, parent)
        console.log('longread interaction activated...')
    }
}

class DictantInteraction extends ScorableInteraction {
    constructor(
        index,
        renderHook, parent
    ) {
        super(index, renderHook, parent)
        this.insideBox = this.interactionData.inside_box
        this.init()
    }

    createUnit(num) {
        let unit = new DictantUnit(num, this, 'dictantUnit', db[this.index][num])
        this.interactionUnits.push(unit)
    }

    init() {
        this.createUnit(0)
    }
}

class LangExeLetter {
    constructor(renderHook, letter, score) {
        this.renderHook = renderHook
        this.letter = letter
        this.score = score
        this.render()
    }

    render() {
        this.container = document.createElement('div')
        this.container.className = 'leftBorderMarker letterBox'
        this.container.innerHTML = `
        <div class='left'>
        <h2>Вы потренировались в правописании. Ваш результат: ${this.score}</h2>
        <p>Вы прошли успешную тренировку и узнаете еще букв${this.letter.length === 1 ? 'у' : 'ы'} из загаданного слова.
        Мы вернемся к ${this.letter.length === 1 ? 'ней' : 'ним'} в конце модуля.</p>
        </div>
        <div class='right'>
        <div class='letter'>${this.letter}</div>
        <div class='img'><img src='dist/assets/box_new_2.gif'/></div>
        </div>
        `
        this.container
            .querySelector('.img img')
            .addEventListener('click', this.animateBox.bind(this))

        this.animateLetters(this.container.querySelector('.letter'))

        this.renderHook.appendChild(this.container)
    }

    animateLetters(element) {
        let lettersAnimation = [{
                transformOrigin: '50% 50%',
                transform: 'scale(0.5) rotate(-20deg)'
            },
            {
                transformOrigin: '50% 50%',
                transform: 'scale(1)  rotate(20deg)'
            },
            {
                transformOrigin: '50% 50%',
                transform: 'scale(1.5) rotate(-20deg)'
            },
            {
                transformOrigin: '50% 50%',
                transform: 'scale(2)  rotate(20deg)'
            }
        ]

        let lettersTiming = {
            duration: 4000,
            direction: 'alternate',
            iterations: Infinity
        }
        element.animate(lettersAnimation, lettersTiming)
    }

    animateBox(e) {
        let disappearAnimation = [{
            opacity: '1'
        }, {
            opacity: '0'
        }]

        let disapperTiming = {
            duration: 1000,
            fill: 'forwards',
            iterations: 1
        }
        e.currentTarget.animate(disappearAnimation, disapperTiming)
    }
}

class TestInteraction extends IterableScorableInteraction {
    constructor(
        index,
        renderHook, parent
    ) {
        super(
            index,
            renderHook, parent
        )
    }
}

class CaseInteraction extends IterableScorableInteraction {
    constructor(
        index,
        renderHook, parent
    ) {
        super(
            index,
            renderHook, parent
        )
    }
}



class VideoInteraction extends Interaction {
    constructor(index, renderHook, parent) {
        super(index, renderHook, parent)
    }
}

class InteractionUnit {
    constructor(index, parent, cssClasses, dbData) {
        this.index = index
        this.parent = parent
        this.cssClasses = cssClasses
        this.dbData = dbData
        this._completed = false
        this._score = 0
    }

    get id() {
        if (this.dbData.hasOwnProperty('id')) {
            return `${this.parent.id}/unit_${this.dbData.id}`
        } else {
            return `${this.parent.id}/unit_${this.index}`
        }
    }

    render() {}

    get completed() {
        return this._completed
    }

    set completed(v) {
        this._completed = v
    }

    createUnitContainer(cssClasses) {
        const unitContainer = document.createElement('div')
        if (cssClasses) {
            unitContainer.className = cssClasses
        }
        unitContainer.classList.add('unit')
        this.parent.renderHook.append(unitContainer)
        return unitContainer
    }

    get result() {
        return this.completed
    }
}

class DictantUnit extends InteractionUnit {
    constructor(index, parent, cssClasses, dbData) {
        super(index, parent, cssClasses, dbData)
        this.text = dbData.text
        this.fbs = dbData.fbs
        this.words = []
        this.mode = 'active' // active, feedback
        this.render()
    }

    get score() {
        let score = 0
        this.words.forEach(function (w) {
            if (w.result) {
                score++
            }
        })
        return score
    }

    get completed() {
        return this._completed
    }

    set completed(v) {
        let numCompleted = 0
        this.words.forEach(function (w) {
            if (w.completed) {
                numCompleted++
            }
        })
        this._completed = numCompleted === this.words.length ? true : false

        if (this.completed === true) {
            this.unitContainer.querySelector('button.check').classList.remove('off')
        }
        // this.setFb(v.status, v.index)
    }

    get totalTasks() {
        return this.words.length
    }

    get result() {
        return this.score === this.totalTasks ? true : false
    }

    get tasksCompleted() {
        let numCompleted = 0
        this.words.forEach(function (w) {
            if (w.completed) {
                numCompleted++
            }
        })
        return numCompleted
    }

    render() {
        // creating unit container
        this.unitContainer = this.createUnitContainer(this.cssClasses)

        // creating unit header
        let header = document.createElement('div')
        header.classList.add('header')
        header.innerHTML = `Диктант`


        //creating unit body
        let body = this.createBody()

        // creting unit feedback
        let fb = document.createElement('div')
        fb.classList.add('fb')

        // creating unit check button
        let checkBtn = document.createElement('button')
        checkBtn.setAttribute('type', 'button')
        checkBtn.className = 'btn check regular off'
        checkBtn.innerHTML = 'Проверить'

        // creating unit show answers button
        let showAnswersBtn = document.createElement('button')
        showAnswersBtn.setAttribute('type', 'button')
        showAnswersBtn.className = 'btn showAnswers regular off'
        showAnswersBtn.innerHTML = 'Показать правильные ответы'

        // appending children to unit container
        this.unitContainer.appendChild(header)
        this.unitContainer.appendChild(body)
        this.unitContainer.appendChild(fb)
        this.unitContainer.appendChild(checkBtn)
        this.unitContainer.appendChild(showAnswersBtn)


        // setting event listeners

        checkBtn.addEventListener('click', this.checkAnswers.bind(this))

        showAnswersBtn.addEventListener('click', this.showAnswers.bind(this))
    }

    checkAnswers(e) {
        this.words.forEach(function (w) {
            w.markAnswers()
        })
        e.currentTarget.classList.add('off')
        this.unitContainer.querySelector('button.showAnswers').classList.remove('off')
    }

    showAnswers(e) {
        this.words.forEach(function (w) {
            w.showAnswers()
            w.addFbIcon()
        })
        e.currentTarget.classList.add('off')
        this.setFb('o')
        this.mode = 'feedback'
    }

    setFb(wordObj, e) {
        let that = this
        let fb = that.unitContainer.querySelector('.fb')
        fb.innerHTML = ''
        if (this.mode === 'active') {
            fb.innerHTML = `<div class="fbUnit leftBorderMarker"><p class="fbUnitHeader">Обратная связь</p><p class="fbText">Нажимайте на иконку <i class="fas fa-hand-point-up"></i>, чтобы увидеть обратную связь.</p></div>`
        } else if (this.mode === 'feedback') {
            fb.innerHTML = `<div class="fbUnit leftBorderMarker selected"><p class="fbUnitHeader">${wordObj.correctWord}</p><p class="fbText">${that.fbs[wordObj.wordIndex]}</p></div>`
        }
    }

    createBody() {
        let that = this
        let body = document.createElement('div')
        body.className = 'body'
        let separateWords = this.text.split(' ')
        let wordIndex = 0
        let modifiedWords = separateWords.map(function (word) {
            if (word.includes('_')) {
                let FIDDItem = new FillInDropDownItem(that, word, wordIndex)
                that.words.push(FIDDItem)
                wordIndex++
                return `<span class="replace">${word}</span>`
            } else {
                return word
            }
        })
        body.innerHTML = modifiedWords.join(' ')
        let replaceElements = Array.from(body.querySelectorAll('.replace'))
        replaceElements.forEach(function (el, i) {
            body.replaceChild(that.words[i].init(), el)
        })
        return body
    }


}

class LangExerciseUnit extends InteractionUnit {
    constructor(index, parent, cssClasses, dbData) {
        super(index, parent, cssClasses, dbData)
        this.text = dbData.text
        // this.id = dbData.id
        this.tip = dbData.tip
        this.fb = dbData.fb
        this.subUnits = []
        this.render()
    }

    get score() {
        let score = 0
        this.subUnits.forEach(function (w) {
            if (w.result) {
                score++
            }
        })
        return score
    }

    get completed() {
        return this._completed
    }

    set completed(v) {
        let numCompleted = 0
        this.subUnits.forEach(function (w) {
            if (w.completed) {
                numCompleted++
            }
        })
        this._completed = numCompleted === this.subUnits.length ? true : false

        if (this.completed === true) {
            this.unitContainer.querySelector('button.continue').classList.remove('off')
        }
        this.setFb(v.status, v.index)
    }

    get totalTasks() {
        return this.subUnits.length
    }

    get result() {
        return this.score === this.totalTasks ? true : false
    }

    get tasksCompleted() {
        let numCompleted = 0
        this.subUnits.forEach(function (w) {
            if (w.completed) {
                numCompleted++
            }
        })
        return numCompleted
    }

    render() {
        // creating unit container
        this.unitContainer = this.createUnitContainer(this.cssClasses)

        // creating unit header
        let header = document.createElement('div')
        header.classList.add('header')
        header.innerHTML = `Задание ${this.index + 1} из ${this.parent.amountOfUnits}<a class='showTip'>Показать подсказку <i class="fas fa-hand-point-up"></i></a>`

        // creating unit tip
        let tip = document.createElement('div')
        tip.className = 'tip off'
        tip.innerHTML = `<p>${this.tip}</p>`

        //creating unit body
        let body = this.createBody()

        // creting unit feedback
        let fb = document.createElement('div')
        fb.classList.add('fb')

        // creating unit button
        let btn = document.createElement('button')
        btn.setAttribute('type', 'button')
        btn.className = 'btn continue regular off'
        btn.innerHTML = 'Продолжить'

        // appending children to unit container
        this.unitContainer.appendChild(header)
        this.unitContainer.appendChild(tip)
        this.unitContainer.appendChild(body)
        this.unitContainer.appendChild(fb)
        this.unitContainer.appendChild(btn)


        // setting event listeners
        this.unitContainer
            .querySelector('a.showTip')
            .addEventListener('click', this.toggleTip.bind(this))

        let continueBtn = this.unitContainer.querySelector('button.continue')
        continueBtn.addEventListener('click', this.initNextUnit.bind(this))
    }

    initNextUnit(e) {
        if (this.index === this.parent.unitsToComplete - 1) {
            new LangExeLetter(this.unitContainer, this.parent.insideBox, this.parent.score)
        }
        this.parent.createUnit(this.index + 1)
        e.currentTarget.classList.add('off')
    }

    setFb(status, position) {
        let that = this
        let fb = that.unitContainer.querySelector('.fb')
        let currentFb = document.createElement('div')
        currentFb.dataset.position = position
        currentFb.className = 'fbUnit leftBorderMarker'
        currentFb.classList.add(
            `${status === 'correct' ? 'correct' : 'incorrect'}`
        )
        currentFb.innerHTML = `
            <p class="fbUnitHeader ${
                status === 'correct' ? 'correct' : 'incorrect'
            }">${
            status === 'correct' ? 'Вы ответили верно!' : 'Вы ответили неверно!'
        }</p>
            <p class="fbText">${
                status === 'correct'
                    ? that.fb.correct
                    : `${that.fb.incorrect}. Посмотрите верное написание.`
            }</p>`
        let fbUnits = fb.querySelectorAll('div')

        if (fbUnits.length === 0) {
            fb.appendChild(currentFb)
        } else if (fbUnits.length > 0) {
            fbUnits.forEach(function (u) {
                if (Number(position) === Number(u.dataset.position) - 1) {
                    u.before(currentFb)
                } else if (
                    Number(position) ===
                    Number(u.dataset.position) + 1
                ) {
                    u.after(currentFb)
                }
            })
        }
    }

    toggleTip(e) {
        let tip = this.unitContainer.querySelector('.tip')
        if (tip.classList.contains('off')) {
            tip.classList.remove('off')
            e.currentTarget.innerHTML =
                'Скрыть подсказку <i class="fas fa-hand-point-up"></i>'
        } else if (!tip.classList.contains('off')) {
            tip.classList.add('off')
            e.currentTarget.innerHTML =
                'Показать подсказку <i class="fas fa-hand-point-up"></i>'
        }
    }

    createBody() {
        let that = this
        let body = document.createElement('div')
        body.className = 'body'
        let separateWords = this.text.split(' ')
        let wordIndex = 0
        let modifiedWords = separateWords.map(function (word) {
            if (word.includes('_')) {
                let FIDDItem = new FillInDropDownItem(that, word, wordIndex)
                that.subUnits.push(FIDDItem)
                wordIndex++
                return `<span class="replace">${word}</span>`
            } else {
                return word
            }
        })
        body.innerHTML = modifiedWords.join(' ')
        let replaceElements = Array.from(body.querySelectorAll('.replace'))
        replaceElements.forEach(function (el, i) {
            body.replaceChild(that.subUnits[i].init(), el)
        })
        return body
    }
}

class BasicTaskItem {
    constructor() {
        this.type = 'cmi.interaction'
    }
}

class FillInDropDownItem extends BasicTaskItem {
    constructor(parent, word, wordIndex) {
        super()
        this.parent = parent
        this.wordIndex = wordIndex
        this._word = word // 1Пр_(а*,б)глаша_(в*,г)м
        this.word = this.getWord(this._word)
        this.spacesTotal = this._word.match(/_/g).length
        this.choicesToInsert = this.getChoicesToInsert(this._word)
        this.choicesToShow = this.getChoicesToShow(this._word)
        this.correctAnswers = this.getCorrectAnwers(this._word)
        this.userAnswer = new Array(this.spacesTotal)
        this.completed = false
        this.htmlElement
        // Xapi.sendStmt(new Statement(this, 'interacted').finalStatement)
    }

    get stmtChoicesOptions() {
        return Xapi.getStmtChoicesOptions(Xapi.getPossibleOptions(this.word, this.choicesToInsert))
    }

    get stmtResponse() {
        let that = this
        let counter = 0
        let letters = this.word.split('')
        let newWord = letters.map(function (a) {
            if (a === '_') {
                let l = that.userAnswer[counter]
                counter++
                return l
            } else {
                return a
            }
        }).join('')
        return newWord
    }

    get id() {
        return `${this.parent.id}/subunit_${this.wordIndex}`
    }

    getWord(item) {
        return item.replace(/(\(.+?\))/g, '')
    }

    get correctOption() {
        let that = this
        let counter = 0
        let letters = this.word.split('')
        let correctWord = letters.map(function (a, index) {
            if (a === '_') {
                let l = that.correctAnswers[counter]
                counter++
                return l
            } else {
                return a
            }
        }).join('')
        return correctWord
    }

    getChoicesToInsert(item) {
        let arr1 = item.match(/(\(.+?\))/g)
        let arr2 = arr1.map(function (w) {
            let w1 = w.replace(/[\(\*\)]/g, '')
            let arr3 = w1.split(',')
            let arr4 = arr3.map(function (i) {
                switch (i) {
                    case 'слитно':
                        return ''
                    case 'раздельно':
                        return ' '
                    case 'пусто':
                        return ''
                    case 'зпт':
                        return ','
                    default:
                        return i
                }
            })
            return arr4
        })
        return arr2
    }

    getChoicesToShow(item) {
        let arr1 = item.match(/(\(.+?\))/g)
        let arr2 = arr1.map(function (w) {
            let w1 = w.replace(/[\(\*\)]/g, '')
            let arr3 = w1.split(',')
            let arr4 = arr3.map(function (i) {
                switch (i) {
                    case 'пусто':
                        return ''
                    case 'зпт':
                        return ','
                    default:
                        return i
                }
            })
            return arr4
        })
        return arr2
    }

    getCorrectAnwers(item) {
        return item.match(/[^\(\,]*\*/g).map(function (i) {
            let x = i.replace('*', '')
            switch (x) {
                case 'слитно':
                    return ''
                case 'раздельно':
                    return ' '
                case 'пусто':
                    return ''
                case 'зпт':
                    return ','
                default:
                    return x
            }
        })
    }

    init() {
        let word = document.createElement('span')
        word.classList.add('word')
        word.dataset.word_index = this.wordIndex
        let that = this
        let spaceNum = 0
        let letters = this.word.split('')
        let modifiedText = letters.map(function (l) {
            if (l === '_') {
                let choicesSpans = that.choicesToShow[spaceNum].map(function (c, index) {
                    return `<span class="answer box" data-correct="${c === that.correctAnswers[spaceNum] ? true : false}" data-choice_to_insert="${that.choicesToInsert[spaceNum][index]}">${that.choicesToShow[spaceNum][index]}</span>`
                }).join('')
                let newLetter = `<span class="subtask"><span class="space box empty" data-space_num=${spaceNum}>_</span><span class="popupAnsContainer off">${choicesSpans}</span></span>`
                spaceNum++
                return newLetter
            } else {
                return l
            }
        }).join('')

        word.innerHTML = modifiedText

        let answers = Array.from(word.querySelectorAll('.answer'))
        answers.forEach(function (a, i) {
            a.addEventListener('click', that.setAnswer.bind(that))
        })

        let spaces = Array.from(word.querySelectorAll('.space'))
        for (let space of spaces) {
            space.addEventListener('click', that.toggleItem.bind(that, 'popupAnsContainer'))
        }
        this.htmlElement = word
        return word
    }

    toggleItem(cssClass, e) {
        let allItems = this.parent.unitContainer.querySelectorAll(`.${cssClass}`)
        let currentItem = e.currentTarget.parentNode.querySelector(`.${cssClass}`)
        if (currentItem.classList.contains('off')) {
            allItems.forEach(function (i) {
                i.classList.add('off')
            })
            currentItem.classList.remove('off')
        } else if (!currentItem.classList.contains('off')) {
            currentItem.classList.add('off')
        }
    }

    markAnswers() {
        let that = this
        let spaces = Array.from(this.htmlElement.querySelectorAll('.space'))
        spaces.forEach(function (s, i) {
            if (s.innerText === that.correctAnswers[i]) {
                s.classList.add('correct')
            } else if (s.innerText !== that.correctAnswers[i]) {
                s.classList.add('incorrect')
            }
            s.classList.add('disabled')
        })
    }

    showAnswers() {
        let that = this
        let spaces = Array.from(this.htmlElement.querySelectorAll('.space'))
        spaces.forEach(function (s, i) {
            if (s.innerText === that.correctAnswers[i]) {
                console.log('nothing to change')
            } else if (s.innerText !== that.correctAnswers[i]) {
                s.innerText = that.correctAnswers[i]
            }
            s.classList.remove('correct')
            s.classList.remove('incorrect')
        })
    }

    addFbIcon() {
        let that = this
        let icon = document.createElement('span')
        icon.className = 'box icon empty'
        icon.innerHTML = `<i class="fas fa-hand-point-up"></i>`
        this.htmlElement.appendChild(icon)
        icon.addEventListener('click', this.parent.setFb.bind(this.parent, this))
        icon.addEventListener('click', function (e) {
            let icons = Array.from(that.parent.unitContainer.querySelectorAll('.icon'))
            icons.forEach(function (i) {
                i.classList.remove('selected')
            })
            e.currentTarget.classList.add('selected')
        })
    }

    setAnswer(e) {
        let that = this
        let answer = e.currentTarget
        let space = e.currentTarget.parentNode.parentNode.querySelector('.space')
        let word = space.parentNode.parentNode
        space.innerText = answer.dataset.choice_to_insert

        that.userAnswer = []

        for (let i = 0; i < that.spacesTotal; i++) {
            that.userAnswer.push(word.querySelector(`.space[data-space_num='${i}']`).innerText)
        }

        space.classList.remove('empty')

        if (!that.userAnswer.includes('_')) {
            that.completed = true
            if (App.isArraysSimilar(that.userAnswer, that.correctAnswers)) {
                console.log('word is correct')
                that.parent.completed = {
                    status: 'correct',
                    index: that.wordIndex
                }
                that.result = true
            } else if (
                !App.isArraysSimilar(that.userAnswer, that.correctAnswers)
            ) {
                console.log('word is incorrect')
                that.parent.completed = {
                    status: 'incorrect',
                    index: that.wordIndex
                }
                that.result = false
            }
            if (that.parent instanceof LangExerciseUnit) {
                that.markAnswers()
                setTimeout(function () {
                    that.showAnswers()
                }, 2000)
            }
        }
        e.currentTarget.parentNode.classList.add('off')
    }
}

class Xapi {
    static data = {}

    static config() {

    }

    static sendStmt(stmt) {
        App.statements.push(stmt)
        if (App.testMode === false) {
            ADL.XAPIWrapper.sendStatement(stmt, function (resp, obj) {
                console.log(resp.status + resp.statusText)
            })
        } else if (App.testMode === true) {
            console.log(stmt)
        }
    }

    static getStmtChoicesOptions(arr) {
        let newArr = arr.map(function (option) {
            return {
                id: option,
                description: {
                    'ru-RU': option
                }
            }
        })
        return newArr
    }

    static getStmtCorrectPattern(item) {
        return [String(item)]
    }

    static getPossibleOptions(words, choices, num = 0) {

        if (!Array.isArray(words)) {
            words = [words]
        }

        if (!Array.isArray(choices[0])) {
            choices = [choices]
        }

        let newWords = []

        if (words[words.length - 1].indexOf('_') === -1) {
            return words
        }

        words.forEach(function (str) {
            choices[num].forEach(function (c) {
                newWords.push(str.replace('_', c))
            })
        })

        return Xapi.getPossibleOptions(newWords, choices, num + 1)
    }

    static getCorrectOption(word, correctArr) {
        let thisWord = word
        correctArr.forEach(function (letter) {
            thisWord = thisWord.replace('_', letter)
        })
        return thisWord
    }
}

class Statement {
    constructor(obj, verb = 'experienced') {
        this.obj = obj
        this.verb = verb
    }

    get objectObj() {
        let simpleObject = {
            object: {
                id: this.obj.id,
                definition: {
                    name: this.obj.name ? this.obj.name : this.obj.id,
                    description: this.obj.description ? this.obj.description : (this.obj.name ? this.obj.name : this.obj.id)
                }
            }
        }
        if (this.obj.type === 'cmi.interaction') {
            let extraDefinitionProperties = {
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                interactionType: 'choice',
                correctResponsesPattern: [this.obj.correctOption],
                choices: this.obj.stmtChoicesOptions
            }
            Object.assign(simpleObject.object.definition, extraDefinitionProperties)
        }
        return simpleObject
    }

    get actorObj() {
        return {
            actor: Xapi.data.actor ? Xapi.data.actor : 'User'
        }
    }

    get verbObj() {
        return {
            verb: verbs[this.verb]
        }
    }

    get resultObj() {
        let resultObj = {}
        if (this.verb === 'completed') {
            resultObj['result'] = {
                completion: this.obj.completed
            }
        } else if (this.verb === 'answered') {
            if (this.verb === 'answered') {
                resultObj['result'] = {
                    success: this.obj.stmtResponse === this.obj.correctOption,
                    response: this.obj.stmtResponse
                }
            }
        } else if (this.verb === 'passed' || this.verb === 'failed') {
            resultObj['result'] = {
                score: {
                    raw: this.obj.score
                },
                success: this.obj.result
            }
        }
        return resultObj
    }

    get contextObj() {
        let contextObj = {}
        if (this.obj.parent) {
            contextObj['context'] = {
                contextActivities: {
                    parent: [{
                        "id": this.obj.parent.id,
                        "objectType": "Activity"
                    }]
                }
            }
            return contextObj
        }
    }

    get finalStatement() {
        let stmt = Object.assign({}, this.actorObj, this.verbObj, this.objectObj, this.contextObj, this.resultObj)
        return stmt
    }
}

class Course {
    constructor(id, renderHooks) {
        this.id = id
        this.renderHooks = renderHooks
        Xapi.sendStmt(new Statement(this, 'launched').finalStatement)
        this.interactions = []
        this.getInteractions()
    }

    getInteractions() {
        let that = this
        this.renderHooks.forEach(function (hook, index) {
            if (hook.dataset.type === 'langExercise') {
                let i = new LangExerciseInteraction(index, hook, that)
                that.interactions.push(i)
            } else if (hook.dataset.type === 'diсtant') {
                let i = new DictantInteraction(index, hook, that)
                that.interactions.push(i)
            } else if (hook.dataset.type === 'longread') {
                let i = new LongreadInteraction(index, hook, that)
                that.interactions.push(i)
            } else if (hook.dataset.type === 'video') {
                let i = new VideoInteraction(index, hook, that)
                that.interactions.push(i)
            } else if (hook.dataset.type === 'test') {
                let i = new TestInteraction(index, hook, that)
                that.interactions.push(i)
            } else if (hook.dataset.type === 'case') {
                let i = new CaseInteraction(index, hook, that)
                that.interactions.push(i)
            }
        })
    }

    sendInteractionsStatements() {
        this.interactions.forEach(function (i, index) {
            console.log(index)
            Xapi.sendStmt(new Statement(i, 'interacted').finalStatement)
        })
    }

    get result() {
        let overallResult = 0
        let requiredResult = 0
        this.interactions.forEach(function (i) {
            if (i.required === 'true') {
                requiredResult++
                if (i.result) {
                    overallResult++
                }
            }
        })
        return overallResult === requiredResult
    }

    get score() {
        let overallResult = 0
        this.interactions.forEach(function (i) {
            if (i.result) {
                overallResult++
            }
        })
        return overallResult
    }

    get completed() {
        let incompleteInteractions = this.interactions.filter(function (i) {
            if (i.required === 'true') {
                if (i.completed === false) {
                    return i
                }
            }
        })

        return incompleteInteractions.length > 0 ? false : true
    }
}

class App {
    constructor() {}
    static renderHooks = [];
    static testMode = true
    static id = ''
    static course
    static loaded = false
    static statements = []

    static isTestMode() {
        App.testMode = Boolean(document.querySelector('#settings').dataset.test_mode)
    }

    static getId() {
        let prefix = document.querySelector('meta[content^="prefix"]').getAttribute('content').split('prefix:')[1]
        let course = document.querySelector('meta[content^="course"]').getAttribute('content').split('course:')[1]
        App.id = prefix + course
    }

    static getRenderHooks() {
        App.renderHooks = Array.from(document.querySelectorAll('.interaction'))
    }

    static init() {
        /* App.linkVerbs()
        App.linkDb() */
        App.addFooter()
        App.getId()
        App.getRenderHooks()
        App.isTestMode()
        App.course = new Course(App.id, App.renderHooks)
        App.course.sendInteractionsStatements()
    }



    static addFooter() {
        let body = document.querySelector('body')

        let footer = document.createElement('footer')
        footer.id = 'pagefooter'
        footer.className = 'interaction'
        footer.dataset.type = 'longread'
        footer.dataset.required = 'true'

        let btn = document.createElement('button')
        btn.innerHTML = 'Далее'
        btn.setAttribute('type', 'button')
        btn.addEventListener('click', App.backToTrack)

        footer.appendChild(btn)
        body.appendChild(footer)
    }

    static backToTrack() {
        // exit()
        console.log('Redirecting back to track ...');
        (function () {
            if (window.top) {
                return window.top
            }
            return window.parent
        })().location = '/back/'
        return false
    }

    static linkDb() {
        let head = document.querySelector('head')
        let script = document.createElement('script')
        script.setAttribute('src', 'dist/db.js')
        head.appendChild(script)
    }

    static linkVerbs() {
        let head = document.querySelector('head')
        let script = document.createElement('script')
        script.setAttribute('src', 'dist/verbs.js')
        head.appendChild(script)
    }

    static shuffle(array) {
        let newArr = array
        for (let i = newArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
        }
        return newArr
    }

    static isArraysSimilar(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false
            }
        }
        return true
    }
}

window.addEventListener('DOMContentLoaded', App.init)