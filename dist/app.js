class Interaction {
    constructor(index, renderHook) {
        this.index = index
        this.renderHook = renderHook
        this.interactionData = renderHook.dataset
        this.id = this.interactionData.interaction_id
        this.name = this.interactionData.name
        this.interactionUnits = []
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
    constructor(index, renderHook) {
        super(index, renderHook)
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
        return this.score > this.minScore === true ? true : false
    }
}

class IterableScorableInteraction extends ScorableInteraction {
    constructor(
        index,
        renderHook
    ) {
        super(index, renderHook)
        this.isShuffle = this.interactionData.is_shuffle
        this.amountOfUnits = this.interactionData.amount_of_units === '0' ? db[this.index].length : Number(this.interactionData.amount_of_units)
        this.unitsToComplete = this.interactionData.units_to_complete === '0' ? this.amount_of_units : Number(this.interactionData.units_to_complete)
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
        renderHook
    ) {
        super(index, renderHook)
        this.insideBox = this.interactionData.inside_box
        this.init()
    }

    createUnit(num) {
        if (num < this.amountOfUnits) {
            let unit = new LangExerciseUnit(num, this, 'langExerciseUnit', db[this.index][num])
            this.interactionUnits.push(unit)
        }
    }

    init() {
        this.createUnit(0)
    }
}

class DictantInteraction extends ScorableInteraction {
    constructor(
        index,
        renderHook
    ) {
        super(index, renderHook)
        this.insideBox = this.interactionData.inside_box
        console.log('dictant interaction activated...')
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
        <div class='img'><img src='dist/box_new_2.gif'/></div>
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
        renderHook
    ) {
        super(
            index,
            renderHook
        )
    }
}

class CaseInteraction extends IterableScorableInteraction {
    constructor(
        index,
        renderHook
    ) {
        super(
            index,
            renderHook
        )
    }
}



class VideoInteraction extends Interaction {
    constructor(index, renderHook) {
        super(index, renderHook)
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
        console.log('creating new interaction unit...')
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
        })
    }

    setFb(status, index) {
        let that = this
        let fb = that.unitContainer.querySelector('.fb')
        let currentFb = document.createElement('div')
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
            <p class="fbText">${that.fbs[index]}.</p>`

        fb.appendChild(currentFb)
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
        this.id = dbData.id
        this.tip = dbData.tip
        this.fb = dbData.fb
        this.words = []
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
            this.unitContainer.querySelector('button.continue').classList.remove('off')
        }
        this.setFb(v.status, v.index)
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

class FillInDropDownItem {
    constructor(parent, word, wordIndex) {
        this.parent = parent
        this._word = word // 1Пр_(а*,б)глаша_(в*,г)м
        this.wordIndex = wordIndex
        this.spacesTotal = this._word.match(/_/g).length
        this.choicesToInsert = this.getChoicesToInsert(this._word)
        this.choicesToShow = this.getChoicesToShow(this._word)
        this.correctAnswers = this.getCorrectAnwers(this._word)
        this.userAnswer = []
        this.completed = false
        this.htmlElement
    }

    get word() {
        let w = this._word
        return w.replace(/(\(.+?\))/g, '')
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
            space.addEventListener('click', this.toggleItem.bind(this, 'popupAnsContainer'))
        }
        this.htmlElement = word
        return word
    }

    toggleItem(cssClass, e) {
        let currentItem = e.currentTarget.parentNode.querySelector(
            `.${cssClass}`
        )
        if (currentItem.classList.contains('off')) {
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

class App {
    constructor() {}
    // static configurationData = {}
    static renderHooks = [];
    static interactions = [];
    static score = 0;

    static init() {
        // this.configure()
        App.renderHooks = Array.from(document.querySelectorAll('.interaction'))
        App.interactions = App.renderHooks.map(function (hook, index) {
            console.log('interaction ' + hook.dataset.type)
            switch (hook.dataset.type) {
                case 'test':
                    return new TestInteraction(
                        index,
                        hook
                    )
                case 'case':
                    return new CaseInteraction(
                        index,
                        hook
                    )
                case 'langExercise':
                    return new LangExerciseInteraction(
                        index,
                        hook
                    )
                case 'diсtant':
                    return new DictantInteraction(
                        index,
                        hook
                    )
                case 'video':
                    return new VideoInteraction(
                        index,
                        hook
                    )
            }
        })
    }

    static get result() {
        let overallResult = 0
        App.interactions.forEach(function (i) {
            if (i.result) {
                overallResult++
            }
        })
        return overallResult === App.interactions.length
    }

    static linkDb() {
        let head = document.querySelector('head')
        let script = document.createElement('script')
        script.setAttribute('src', 'dist/db.js')
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