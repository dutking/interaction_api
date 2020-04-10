let dikName = 'Диктант Пре- При-'
let dikMode = 'dik'
let dikData
let dikId = activityId + '/diktant/'
let mainContainer
let lastTestStmt
let firstTestStmt

function startInteraction() {
    mainContainer = document.querySelector('#diktant')
    composeDik(diktantString)
}

function composeDik(dik) {
    firstTestStmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/interacted',
            display: {
                'en-US': 'interacted'
            }
        },
        object: {
            objectType: 'Activity',
            id: dikId,
            definition: {
                name: {
                    'ru-RU': dikName
                },
                description: {
                    'ru-RU': dikName
                }
            }
        },
        context: {
            contextActivities: {
                parent: [
                    {
                        objectType: 'Activity',
                        id: activityId
                    }
                ]
            }
        }
    }

    lastTestStmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/exited',
            display: {
                'en-US': 'exited'
            }
        },
        object: {
            objectType: 'Activity',
            id: dikId,
            definition: {
                name: {
                    'ru-RU': dikName
                },
                description: {
                    'ru-RU': dikName
                }
            }
        },
        context: {
            contextActivities: {
                parent: [
                    {
                        objectType: 'Activity',
                        id: activityId
                    }
                ]
            }
        }
    }
    sendStmt(firstTestStmt)
    console.log('Diktant launched')
    mainContainer.innerHTML = ''
    // <-- create DOM
    let dikDiv = document.createElement('div')
    dikDiv.id = 'dikDiv'

    let submitBtn = document.createElement('button')
    submitBtn.setAttribute('type', 'button')
    submitBtn.id = 'submitBtn'
    submitBtn.classList.add('btn')
    submitBtn.disabled = true
    submitBtn.innerText = 'Проверить'
    submitBtn.addEventListener('click', checkAnswers)

    let fbDiv = document.createElement('div')
    fbDiv.id = 'fbDiv'
    fbDiv.classList.add('off')

    let fbResult = document.createElement('p')
    fbResult.id = 'fbResult'
    let fbText = document.createElement('p')
    fbText.id = 'fbText'
    let resetBtn = document.createElement('button')
    resetBtn.id = 'resetBtn'
    resetBtn.classList.add('btn')
    resetBtn.setAttribute('type', 'button')
    resetBtn.innerText = 'Попробовать еще раз'
    resetBtn.addEventListener('click', resetDiktant)

    fbDiv.appendChild(fbResult)
    fbDiv.appendChild(fbText)
    fbDiv.appendChild(resetBtn)

    mainContainer.appendChild(dikDiv)
    mainContainer.appendChild(submitBtn)
    mainContainer.appendChild(fbDiv)

    // create DOM -->

    dikData = {
        dikHtml: dik
            .split(' ')
            .map(function(w) {
                if (w.includes('_')) {
                    return '<span class="word"><span class="task">' + w + '</span></span>'
                } else {
                    return w
                }
            })
            .join(' '),
        wordsData: diktantString
            .split('.')
            .map(function(s, i) {
                return {
                    text: s + '.',
                    id: 's_' + i
                }
            })
            .map(function(obj, i) {
                let arr = obj.text
                    .split(' ')
                    .filter(function(word, i) {
                        if (word.includes('_')) {
                            return word
                        }
                    })
                    .map(function(w, j) {
                        return {
                            taskWord: w,
                            sentenceId: obj.id,
                            sentenceText: obj.text
                        }
                    })
                return arr
            })
            .flat()
            .map(function(obj, i) {
                let wordData = obj
                wordData.wordId = `word_${i}`
                wordData.userAns = ''
                wordData.choiceOptions = getOptions(
                    [wordData.taskWord],
                    solutionsDB[i].choices[0],
                    0
                )
                wordData.correctOption = getCorrectOption(
                    wordData.taskWord,
                    solutionsDB[i].correctAns[0]
                )
                return wordData
            }),
        checkDone: function() {
            for (let i of this.wordsData) {
                if (i.userAns === '') {
                    return false
                }
            }
            return true
        }
    }

    dikDiv.innerHTML = dikData.dikHtml

    wordSpans = document.querySelectorAll('.word')
    wordSpans.forEach(function(word, index) {
        let task = word.querySelector('.task')
        let currentData = dikData.wordsData[index]
        let choiceBlock = document.createElement('div')
        choiceBlock.classList.add('choices')
        choiceBlock.classList.add('off')
        dikData.wordsData[index].choiceOptions.forEach(c => {
            let choiceP = document.createElement('p')
            choiceP.classList.add('choice')
            choiceP.innerText = c
            choiceBlock.appendChild(choiceP)
            choiceP.addEventListener('click', function(e) {
                word.querySelector('.task').innerText = e.target.innerText
                word.classList.add('selected')
                dikData.wordsData[index].userAns = e.target.innerText
                setTimeout(function() {
                    e.target.parentNode.classList.add('off')
                }, 0)
                if (dikData.checkDone() === true) {
                    submitBtn.disabled = false
                }
            })
        })
        word.appendChild(choiceBlock)

        let tipContainer = document.createElement('span')
        tipContainer.classList.add('tipContainer')
        tipContainer.classList.add('off')

        let tipTxt = document.createElement('span')
        tipTxt.classList.add('tipTxt')
        tipTxt.innerText = solutionsDB[index].feedback

        tipTxt.addEventListener('click', function(e) {
            e.currentTarget.parentNode.classList.add('off')
        })

        tipContainer.appendChild(tipTxt)

        word.appendChild(tipContainer)

        task.addEventListener('click', function(e) {
            if (dikMode === 'dik') {
                document.querySelectorAll('.choices').forEach(function(c, i) {
                    if (i === index) {
                        c.classList.remove('off')
                    } else if (i !== index) {
                        c.classList.add('off')
                    }
                })

                let stmtInteracted = {
                    actor: xapiConfig.actor || '',
                    verb: {
                        id: 'http://adlnet.gov/expapi/verbs/interacted',
                        display: {
                            'en-US': 'interacted'
                        }
                    },
                    object: {
                        objectType: 'Activity',
                        id: dikId + currentData.wordId,
                        definition: {
                            name: {
                                'ru-RU': currentData.taskWord
                            },
                            description: {
                                'ru-RU': currentData.sentenceText
                            },
                            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                            interactionType: 'choice',
                            correctResponsesPattern: [currentData.correctOption],
                            choices: getChoicesObject(currentData.choiceOptions)
                        }
                    },
                    context: {
                        contextActivities: {
                            parent: [
                                {
                                    objectType: 'Activity',
                                    id: dikId,
                                    definition: {
                                        name: {
                                            'ru-RU': dikName
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }
                sendStmt(stmtInteracted)
            } else if (dikMode === 'fb') {
                document.querySelectorAll('.tipContainer').forEach(function(f, i) {
                    if (i === index) {
                        let experiencedStmt = {
                            actor: xapiConfig.actor || '',
                            verb: {
                                id: 'http://adlnet.gov/expapi/verbs/experienced',
                                display: {
                                    'en-US': 'experienced'
                                }
                            },
                            object: {
                                objectType: 'Activity',
                                id: dikId + 'tip_for_word_' + i,
                                definition: {
                                    name: {
                                        'ru-RU': dikData.wordsData[i].taskWord
                                    },
                                    description: {
                                        'ru-RU': solutionsDB[i].feedback
                                    }
                                }
                            },
                            context: {
                                contextActivities: {
                                    parent: [
                                        {
                                            objectType: 'Activity',
                                            id: dikId,
                                            definition: {
                                                name: {
                                                    'ru-RU': dikName
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                        sendStmt(experiencedStmt)
                        console.log('Feedback read')

                        f.classList.remove('off')
                        setTimeout(function() {
                            setTipWidth(f)
                        }, 1)
                    } else if (i !== index) {
                        f.classList.add('off')
                    }
                })
            }
        })
    })
}

function checkAnswers(event) {
    let result = {
        correct: 0,
        incorrect: 0
    }

    let totalWords = dikData.wordsData.length

    let fbDiv = document.querySelector('#fbDiv')
    let fbResult = document.querySelector('#fbResult')
    let fbText = document.querySelector('#fbText')

    fbDiv.classList.remove('off')

    let stmtArr = dikData.wordsData.map(function(w, i) {
        let stmtInteracted = {
            actor: xapiConfig.actor || '',
            verb: {
                id: 'http://adlnet.gov/expapi/verbs/answered',
                display: {
                    'en-US': 'answered'
                }
            },
            object: {
                objectType: 'Activity',
                id: dikId + w.wordId,
                definition: {
                    name: {
                        'ru-RU': w.taskWord
                    },
                    description: {
                        'ru-RU': w.sentenceText
                    },
                    type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                    interactionType: 'choice',
                    correctResponsesPattern: [w.correctOption],
                    choices: getChoicesObject(w.choiceOptions)
                }
            },
            result: {
                success: w.userAns === w.correctOption ? true : false,
                response: w.userAns
            },
            context: {
                contextActivities: {
                    parent: [
                        {
                            objectType: 'Activity',
                            id: dikId,
                            definition: {
                                name: {
                                    'ru-RU': dikName
                                }
                            }
                        }
                    ]
                }
            }
        }
        return stmtInteracted
    })

    stmtArr.forEach(function(i) {
        sendStmt(i)
    })

    document.querySelectorAll('.word').forEach(function(w, i) {
        if (w.innerText === dikData.wordsData[i].correctOption) {
            w.classList.add('correct')
            w.classList.remove('incorrect')
            result.correct += 1
            courseInfo.score += 1
        } else if (w.innerText !== dikData.wordsData[i].correctOption) {
            w.classList.add('incorrect')
            w.classList.remove('correct')
            result.incorrect += 1
        }
    })

    let stmtPassed = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/passed',
            display: {
                'en-US': 'passed'
            }
        },
        object: {
            objectType: 'Activity',
            id: dikId,
            definition: {
                name: {
                    'ru-RU': dikName
                },
                description: {
                    'ru-RU': dikName
                }
            }
        },
        result: {
            score: {
                raw: courseInfo.score
            },
            success: true
        },
        context: {
            contextActivities: {
                parent: [
                    {
                        objectType: 'Activity',
                        id: activityId,
                        definition: {
                            name: {
                                'ru-RU': activityId
                            }
                        }
                    }
                ]
            }
        }
    }
    sendStmt(stmtPassed)

    fbResult.innerText = `Количетво правильных ответов: ${result.correct} из ${totalWords}.`
    fbText.innerText = 'Нажимайте на слова, чтобы увидеть комментарии.'
    event.target.classList.add('off')

    courseInfo.interactionCompleted = true
    courseInfo.interactionResult = true
    courseInfo.score = result.correct
    if (courseInfo.isCompleted === false) {
        if (courseInfo.isDone() === true) {
            complete()
        }
    }

    dikMode = 'fb'
}

function resetDiktant(event) {
    courseInfo.interactionCompleted = false
    courseInfo.interactionResult = false
    courseInfo.isCompleted = false

    dikMode = 'dik'
    sendStmt(lastTestStmt)
    console.log('Diktant reseted')
    courseInfo.score = 0
    composeDik(diktantString)
}

function getOptions(words, choices, num) {
    let newWords = []

    if (words[words.length - 1].indexOf('_') === -1) {
        return words
    }

    words.forEach(function(str) {
        choices[num].forEach(function(c) {
            newWords.push(str.replace('_', c))
        })
    })

    return getOptions(newWords, choices, num + 1)
}

function getChoicesObject(arr) {
    let newArr = arr.map(function(option) {
        return {
            id: option,
            description: {
                'ru-RU': option
            }
        }
    })
    return newArr
}

function getCorrectOption(word, correctArr) {
    let thisWord = word
    correctArr.forEach(function(letter) {
        thisWord = thisWord.replace('_', letter)
    })
    return thisWord
}

function setTipWidth(tipCont) {
    let task = tipCont.parentNode.parentNode
    let taskWidth = task.clientWidth
    let taskLeft = task.getBoundingClientRect().left
    let word = tipCont.parentNode
    let tip = tipCont.querySelector('.tipTxt')

    // < to reset position and whiteSpace
    tipCont.style.left = '-5px'
    tip.style.whiteSpace = 'nowrap'
    tipCont.style.width = 'initial'
    tip.style.width = 'initial'
    // to reset position and whiteSpace >
    let tipWidth = tipCont.getBoundingClientRect().width
    let leftPadding = Number(getComputedStyle(task).paddingLeft.split('px')[0])

    let wordLeft = word.getBoundingClientRect().left - taskLeft
    /* console.log('wordLeft ' + wordLeft) */
    let spaceForTip = taskWidth - wordLeft
    /* console.log('spaceForTip ' + spaceForTip) */
    let outerTip = tipWidth - spaceForTip
    /* console.log('outerTip ' + outerTip) */
    if (spaceForTip < tipWidth) {
        if (spaceForTip > 300) {
            tipCont.style.width = spaceForTip + 'px'
            tip.style.width = spaceForTip + 'px'
        } else if (spaceForTip <= 300) {
            if (tipWidth > wordLeft) {
                tipCont.style.left = -1 * wordLeft + leftPadding + 'px'
                tipCont.style.width = taskWidth + 'px'
                tip.style.width = taskWidth + 'px'
            } else {
                tipCont.style.left = spaceForTip - tipWidth + 'px'
                tipCont.style.width = tipWidth + 'px'
                tip.style.width = tipWidth + 'px'
            }
        }
        tip.style.whiteSpace = 'normal'
    }
}
