class Interaction {
    constructor(index, renderHook) {
        this.index = index
        this.renderHook = renderHook
        this.interactionData = renderHook.dataset
        this.id = this.interactionData.interaction_id
        this.name = this.interactionData.name
        this.init()
    }

    init() {

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
        this._score = 0
    }

    get score() {
        /* let score = 0
        this.interactionUnits.forEach(function (u) {
            if (u.result === true) {
                score++
            }
        }) */
        return this._score
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
        this.interactionUnits = []
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
        console.log('creating unit')
        if (num < this.amountOfUnits) {
            let unit = new LangExerciseUnit(num, this, 'langExerciseUnit', db[this.index][num])
            this.interactionUnits.push(unit)
        }
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

class DictantInteraction extends ScorableInteraction {
    constructor(index, renderHook) {
        super(index, renderHook)
        this.insideBox = this.interactionData.inside_box
        this.dbData = db[index]
        this.text = this.dbData.text
        this.id = this.dbData.id
        this.tips = this.dbData.tip
        this.fbs = this.dbData.fb
        this.tasksWords = []
        this.tasksCompleted = 0
        this.render()
    }

    get totalTasks() {
        return this.tasksWords.length
    }

    get result() {
        return this.score === this.totalTasks ? true : false
    }

    render() {
        console.log('Rendering task unit...')
        this.unitContainer = this.createUnitContainer(this.cssClasses)
        this.unitContainer.innerHTML = `
        <div class="header">Задание ${this.index + 1} из ${this.parent.amountOfUnits}<a class='showTip'>Показать подсказку <i class="fas fa-hand-point-up"></i></a></div>
        <div class='tip off'><p>${this.tip}</p></div>
        <div class='body'>${this.createTaskBody()}</div>        
        <div class='fb'></div>
        <button type='button' class='btn continue regular off'>Продолжить</button>
        `
        this.unitContainer
            .querySelector('a.showTip')
            .addEventListener('click', this.toggleTip.bind(this))

        let spaces = Array.from(this.unitContainer.querySelectorAll('.space'))
        for (let space of spaces) {
            space.addEventListener('click', this.toggleItem.bind(this, 'popupAnsContainer'))
        }

        let answers = Array.from(this.unitContainer.querySelectorAll('.answer'))
        for (let answer of answers) {
            answer.addEventListener('click', this.setAnswer.bind(this))
        }

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

    setAnswer(e) {
        let that = this
        let answer = e.currentTarget
        let space = e.currentTarget.parentNode.parentNode.querySelector('.space')
        let word = space.parentNode.parentNode
        let wordNum = word.dataset.word_num
        let currentWord = that.tasksWords[wordNum]
        let totalSpacesInWord = currentWord.spaces
        space.innerText = answer.dataset.choice_to_insert

        let userAnswer = []

        for (let i = 0; i < totalSpacesInWord; i++) {
            userAnswer.push(word.querySelector(`.space[data-space_num='${i}']`).innerText)
        }

        if (!userAnswer.includes('_')) {
            that.tasksCompleted++
            if (App.isArraysSimilar(userAnswer, currentWord.correctAnswers)) {
                word.querySelectorAll('.space').forEach(function (s) {
                    s.classList.add('correct')
                    s.classList.add('disabled')
                    setTimeout(function () {
                        s.classList.remove('correct')
                    }, 2000)
                })
                that.score++
                that.setFb('correct', wordNum)
            } else if (
                !App.isArraysSimilar(userAnswer, currentWord.correctAnswers)
            ) {
                word.querySelectorAll('.space').forEach(function (s, i) {
                    if (s.innerText === currentWord.correctAnswers[i]) {
                        s.classList.add('correct')
                    } else if (s.innerText !== currentWord.correctAnswers[i]) {
                        s.classList.add('incorrect')
                        setTimeout(function () {
                            s.innerText = currentWord.correctAnswers[i]
                            s.classList.remove('incorrect')
                        }, 2000)
                    }
                    setTimeout(function () {
                        s.classList.remove('correct')
                        s.classList.remove('incorrect')
                    }, 2000)
                    s.classList.add('disabled')
                })
                that.setFb('incorrect', wordNum)
            }
        }

        if (that.totalTasks === that.tasksCompleted) {
            that.completed = true
            setTimeout(function () {
                that.unitContainer
                    .querySelector('button.continue')
                    .classList.remove('off')
            }, 0)
        }

        e.currentTarget.parentNode.classList.add('off')
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

    createTaskBody() {
        let that = this
        let splitByWords = this.text.split(' ')
        let wordNum = 0
        let modifiedWords = splitByWords.map(function (word) {
            if (word.includes('_')) {
                let newWord = new FillInDropDownItem(that, word, wordNum)
                that.tasksWords.push(newWord)
                wordNum++
                return newWord.init()
            } else {
                return word
            }
        })
        return modifiedWords.join(' ')
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
        this.completed = false
        this.score = 0
    }

    render() {}

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

/* class FillInDropDownUnit extends InteractionUnit {
    constructor(index, parent, cssClasses, data) {
        super(index, parent, cssClasses, data)
        this.text = data.text
        this.tasksCompleted = 0
        this.totalTasks = this.text.split(' ').filter(w => w.includes('_')).length
        this.tasksWords = []
    }

    get result() {
        return this.score === this.totalTasks ? true : false
    }

    render() {
        this.unitContainer = this.createUnitContainer(this.cssClasses)
        this.unitContainer.appendChild(this.createBody)
        let submitBtn
        this.unitContainer.innerHTML = `
        <div class='body'>${this.createTaskBody()}</div>        
        <button type='button' class='btn continue regular off'>Продолжить</button>
        `

        let spaces = Array.from(this.unitContainer.querySelectorAll('.space'))
        for (let space of spaces) {
            space.addEventListener('click', this.toggleItem.bind(this, 'popupAnsContainer'))
        }

        let answers = Array.from(this.unitContainer.querySelectorAll('.answer'))
        for (let answer of answers) {
            answer.addEventListener('click', this.setAnswer.bind(this))
        }

        let continueBtn = this.unitContainer.querySelector('button.continue')
        // continueBtn.addEventListener('click', this.initNextUnit.bind(this))
    }

    setAnswer(e) {
        let that = this
        let answer = e.currentTarget
        let space = e.currentTarget.parentNode.parentNode.querySelector('.space')
        let word = space.parentNode.parentNode
        let wordNum = word.dataset.word_num
        let currentWord = that.tasksWords[wordNum]
        let totalSpacesInWord = currentWord.spaces
        space.innerText = answer.dataset.choice_to_insert

        let userAnswer = []

        for (let i = 0; i < totalSpacesInWord; i++) {
            userAnswer.push(word.querySelector(`.space[data-space_num='${i}']`).innerText)
        }

        if (!userAnswer.includes('_')) {
            that.tasksCompleted++
            if (App.isArraysSimilar(userAnswer, currentWord.correctAnswers)) {
                word.querySelectorAll('.space').forEach(function (s) {
                    s.classList.add('correct')
                    s.classList.add('disabled')
                    setTimeout(function () {
                        s.classList.remove('correct')
                    }, 2000)
                })
                that.score++
                that.setFb('correct', wordNum)
            } else if (
                !App.isArraysSimilar(userAnswer, currentWord.correctAnswers)
            ) {
                word.querySelectorAll('.space').forEach(function (s, i) {
                    if (s.innerText === currentWord.correctAnswers[i]) {
                        s.classList.add('correct')
                    } else if (s.innerText !== currentWord.correctAnswers[i]) {
                        s.classList.add('incorrect')
                        setTimeout(function () {
                            s.innerText = currentWord.correctAnswers[i]
                            s.classList.remove('incorrect')
                        }, 2000)
                    }
                    setTimeout(function () {
                        s.classList.remove('correct')
                        s.classList.remove('incorrect')
                    }, 2000)
                    s.classList.add('disabled')
                })
                that.setFb('incorrect', wordNum)
            }
        }

        if (that.totalTasks === that.tasksCompleted) {
            that.completed = true
            setTimeout(function () {
                that.unitContainer
                    .querySelector('button.continue')
                    .classList.remove('off')
            }, 0)
        }

        e.currentTarget.parentNode.classList.add('off')
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

    createBody() {
        let that = this
        let splitByWords = this.text.split(' ')
        let wordNum = 0
        let body = document.createElement('div')
        body.classList.add('body')
        body.innerHTML = splitByWords.map(function (word) {
            if (word.includes('_')) {
                let newWord = new FillInDropDownItem(that, word, wordNum)
                that.tasksWords.push(newWord)
                wordNum++
                return newWord.init()
            } else {
                return word
            }
        }).join(' ')
        return body
    }
} */

class LangExerciseUnit extends InteractionUnit {
    constructor(index, parent, cssClasses, dbData) {
        super(index, parent, cssClasses, dbData)
        this.text = dbData.text
        this.id = dbData.id
        this.tip = dbData.tip
        this.fb = dbData.fb
        this.tasksWords = []
        this.tasksCompleted = 0
        this.render()
    }

    get totalTasks() {
        return this.tasksWords.length
    }

    get result() {
        return this.score === this.totalTasks ? true : false
    }

    render() {
        console.log('Rendering task unit...')
        this.unitContainer = this.createUnitContainer(this.cssClasses)
        this.unitContainer.innerHTML = `
        <div class="header">Задание ${this.index + 1} из ${this.parent.amountOfUnits}<a class='showTip'>Показать подсказку <i class="fas fa-hand-point-up"></i></a></div>
        <div class='tip off'><p>${this.tip}</p></div>
        <div class='body'>${this.createTaskBody()}</div>        
        <div class='fb'></div>
        <button type='button' class='btn continue regular off'>Продолжить</button>
        `
        this.unitContainer
            .querySelector('a.showTip')
            .addEventListener('click', this.toggleTip.bind(this))

        let spaces = Array.from(this.unitContainer.querySelectorAll('.space'))
        for (let space of spaces) {
            space.addEventListener('click', this.toggleItem.bind(this, 'popupAnsContainer'))
        }

        let answers = Array.from(this.unitContainer.querySelectorAll('.answer'))
        for (let answer of answers) {
            answer.addEventListener('click', this.setAnswer.bind(this))
        }

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

    setAnswer(e) {
        let that = this
        let answer = e.currentTarget
        let space = e.currentTarget.parentNode.parentNode.querySelector('.space')
        let word = space.parentNode.parentNode
        let wordNum = word.dataset.word_num
        let currentWord = that.tasksWords[wordNum]
        let totalSpacesInWord = currentWord.spaces
        space.innerText = answer.dataset.choice_to_insert

        let userAnswer = []

        for (let i = 0; i < totalSpacesInWord; i++) {
            userAnswer.push(word.querySelector(`.space[data-space_num='${i}']`).innerText)
        }

        if (!userAnswer.includes('_')) {
            that.tasksCompleted++
            if (App.isArraysSimilar(userAnswer, currentWord.correctAnswers)) {
                word.querySelectorAll('.space').forEach(function (s) {
                    s.classList.add('correct')
                    s.classList.add('disabled')
                    setTimeout(function () {
                        s.classList.remove('correct')
                    }, 2000)
                })
                that.score++
                that.setFb('correct', wordNum)
            } else if (
                !App.isArraysSimilar(userAnswer, currentWord.correctAnswers)
            ) {
                word.querySelectorAll('.space').forEach(function (s, i) {
                    if (s.innerText === currentWord.correctAnswers[i]) {
                        s.classList.add('correct')
                    } else if (s.innerText !== currentWord.correctAnswers[i]) {
                        s.classList.add('incorrect')
                        setTimeout(function () {
                            s.innerText = currentWord.correctAnswers[i]
                            s.classList.remove('incorrect')
                        }, 2000)
                    }
                    setTimeout(function () {
                        s.classList.remove('correct')
                        s.classList.remove('incorrect')
                    }, 2000)
                    s.classList.add('disabled')
                })
                that.setFb('incorrect', wordNum)
            }
        }

        if (that.totalTasks === that.tasksCompleted) {
            that.completed = true
            setTimeout(function () {
                that.unitContainer
                    .querySelector('button.continue')
                    .classList.remove('off')
            }, 0)
        }

        e.currentTarget.parentNode.classList.add('off')
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

    createTaskBody() {
        let that = this
        let splitByWords = this.text.split(' ')
        let wordNum = 0
        let modifiedWords = splitByWords.map(function (word) {
            if (word.includes('_')) {
                let newWord = new FillInDropDownItem(that, word, wordNum)
                that.tasksWords.push(newWord)
                wordNum++
                return newWord.init()
            } else {
                return word
            }
        })
        return modifiedWords.join(' ')
    }
}

class FillInDropDownItem {
    constructor(parent, word, wordNum) {
        this.parent = parent
        this._word = word // 1Пр_(а*,б)глаша_(в*,г)м
        this.wordNum = wordNum
        this.spaces = this._word.match(/_/g).length
        this.choicesToInsert = this.getChoicesToInsert(this._word)
        this.choicesToShow = this.getChoicesToShow(this._word)
        this.correctAnswers = this.getCorrectAnwers(this._word)
        console.log(this.choicesToInsert, this.choicesToShow, this.correctAnswers)
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
        console.log('Building a word...')
        let that = this
        let spaceNum = 0
        let letters = this.word.split('')
        let modifiedLetters = letters.map(function (l) {
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
        })

        let newWord = `<span class='word' data-word_num=${this.wordNum}>${modifiedLetters.join('')}</span>`

        return newWord
    }
}

class App {
    static testMode = true
    static configurationData = {}
    static renderHooks = []
    static interactions = []
    static score = 0

    static init() {
        // this.configure()
        this.renderHooks = Array.from(document.querySelectorAll('.interaction'))
        this.renderHooks.forEach(function (hook, index) {
            switch (hook.dataset.type) {
                case 'test':
                    this.interactions.push(
                        new TestInteraction(
                            index,
                            hook
                        )
                    )
                    break
                case 'case':
                    this.interactions.push(
                        new CaseInteraction(
                            index,
                            hook
                        )
                    )
                    break
                case 'langExercise':
                    App.interactions.push(
                        new LangExerciseInteraction(
                            index,
                            hook
                        )
                    )
                    break
                case 'dictant':
                    this.interactions.push(
                        new DictantInteraction(
                            index,
                            hook
                        )
                    )
                    break
                case 'video':
                    this.interactions.push(
                        new VideoInteraction(
                            index,
                            hook
                        )
                    )
                    break
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

setTimeout(App.init, 1)