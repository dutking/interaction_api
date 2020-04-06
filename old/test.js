let testName = activityId + 'test/'
let testId = activityId + 'test/'
courseInfo.minScore = Math.ceil(testDB.length * 0.8)
let lastTestStmt

function startInteraction() {
    let testStartedStmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/interacted',
            display: {
                'en-US': 'interacted'
            }
        },
        object: {
            objectType: 'Activity',
            id: testId,
            definition: {
                name: {
                    'ru-RU': testName
                },
                description: {
                    'ru-RU': testName
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
    sendStmt(testStartedStmt)

    lastTestStmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/interacted',
            display: {
                'en-US': 'interacted'
            }
        },
        object: {
            objectType: 'Activity',
            id: testId,
            definition: {
                name: {
                    'ru-RU': testName
                },
                description: {
                    'ru-RU': testName
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

    setQuestion(0)
}

function setQuestion(num) {
    let mainContainer = document.querySelector('#test')
    let currentQ = testDB[num]

    // create container for question
    let questionContainer = document.createElement('div')
    questionContainer.classList.add('questionContainer')
    questionContainer.dataset.name = currentQ.qId
    mainContainer.appendChild(questionContainer)
    // create question header
    let qHeader = document.createElement('p')
    qHeader.classList.add('header')
    qHeader.innerText = `Вопрос ${num + 1} из ${testDB.length}.`
    questionContainer.appendChild(qHeader)

    // create question div
    let qText = document.createElement('div')
    qText.classList.add('qText')
    qText.innerHTML = currentQ.qText
    questionContainer.appendChild(qText)

    // create question help div
    let qHelp = document.createElement('p')
    qHelp.classList.add('qHelp')
    questionContainer.appendChild(qHelp)

    // create answers' container
    let answersContainer = document.createElement('div')
    answersContainer.classList.add('answersContainer')

    // create particular answers

    let answers = currentQ.answers // shuffle(currentQ.answers)
    answers.forEach(function(a, i) {
        // create container for particular answer
        let answerContainer = document.createElement('div')
        answerContainer.classList.add('answerContainer')

        // create answer <input> and <label>
        let input = document.createElement('input')
        input.id = a.aId
        input.setAttribute('value', a.aId)

        let label = document.createElement('label')
        label.setAttribute('for', a.aId)
        if (a.aText[a.aText.length - 1] !== '.') {
            label.innerHTML = a.aText + '.'
        } else {
            label.innerHTML = a.aText
        }

        if (currentQ.qType === 'mc') {
            input.setAttribute('type', 'radio')
            input.setAttribute('name', `group_${num}`)
            qHelp.innerHTML = 'Выберите правильный ответ.'
        } else if (currentQ.qType === 'mr') {
            input.type = 'checkbox'
            qHelp.innerHTML = 'Выберите все правильные варианты ответов.'
        }

        answerContainer.appendChild(input)
        answerContainer.appendChild(label)

        // create particular feedback
        if (a.aFeedback !== '') {
            let feedback = document.createElement('div')
            feedback.classList.add('feedback')
            feedback.dataset.for = a.aId
            feedback.innerHTML = a.aText
            answerContainer.appendChild(feedback)
        }

        answersContainer.appendChild(answerContainer)
    })

    questionContainer.appendChild(answersContainer)
    // create warning div
    let warning = document.createElement('div')
    warning.classList.add('warning')
    questionContainer.appendChild(warning)

    // create common feedback div
    let qFeedback = document.createElement('div')
    if (currentQ.qFeedback !== '') {
        qFeedback.classList.add('qFeedback')
        questionContainer.appendChild(qFeedback)
    }

    // create submit button
    let button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.innerText = 'Ответить'

    questionContainer.appendChild(button)

    button.addEventListener('click', function(e) {
        let responseCorrectness = []
        let result = false

        let inputs = Array.from(answersContainer.querySelectorAll('input'))

        let checked = []
        inputs.forEach(function(i) {
            checked.push([i.id, i.checked])
        })

        let response = inputs
            .filter(function(i) {
                if (i.checked) {
                    return i
                }
            })
            .map(function(i) {
                return i.id
            })

        if (response.length === 0) {
            warning.innerText = 'Необходимо ответить на вопрос!'
        } else if (response.length > 0) {
            warning.innerText = ''
            if (currentQ.qFeedback !== '') {
                qFeedback.innerHTML = currentQ.qFeedback
            }

            checked.forEach(function(i) {
                let answer = currentQ.answers.filter(function(a) {
                    if (i[0] === a.aId) {
                        return a
                    }
                })

                if (i[1] === answer[0].aCorrect) {
                    responseCorrectness.push(true)
                    e.currentTarget.parentNode
                        .querySelector(`label[for=${i[0]}]`)
                        .classList.add('correct')
                } else {
                    responseCorrectness.push(false)
                    e.currentTarget.parentNode
                        .querySelector(`label[for=${i[0]}]`)
                        .classList.add('incorrect')
                }
            })
            Array.from(e.currentTarget.parentNode.querySelectorAll('input')).forEach(function(i) {
                i.disabled = true
            })
            result = responseCorrectness.includes(false) ? false : true

            if (result) {
                courseInfo.score += 1
                qHeader.classList.add('correct')
            } else {
                qHeader.classList.add('incorrect')
            }

            let userAnsweredStmt = {
                actor: xapiConfig.actor || '',
                verb: {
                    id: 'http://adlnet.gov/expapi/verbs/answered',
                    display: {
                        'en-US': 'answered'
                    }
                },
                object: {
                    objectType: 'Activity',
                    id: testId + currentQ.qId,
                    definition: {
                        name: {
                            'ru-RU': currentQ.qText
                        },
                        description: {
                            'ru-RU': currentQ.qText
                        },
                        type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                        interactionType: 'choice',
                        correctResponsesPattern: [correctRespPattern],
                        choices: choicesOptions
                    }
                },
                result: {
                    success: result,
                    response: response.join('[,]')
                },
                context: {
                    contextActivities: {
                        parent: [
                            {
                                objectType: 'Activity',
                                id: testId,
                                definition: {
                                    name: {
                                        'ru-RU': testName
                                    }
                                }
                            }
                        ]
                    }
                }
            }

            sendStmt(userAnsweredStmt)
            e.currentTarget.style.display = 'none'

            if (num + 1 < testDB.length) {
                setQuestion(num + 1)
            } else {
                let finalFeedback = document.createElement('p')
                finalFeedback.classList.add('finalFeedback')
                finalFeedback.innerHTML = `<p>Ваш результат: ${courseInfo.score}. Проходной балл: ${courseInfo.minScore}<p>`
                mainContainer.appendChild(finalFeedback)

                if (courseInfo.score >= courseInfo.minScore) {
                    finalFeedback.classList.add('correct')
                    courseInfo.interactionResult = true
                    let testResultStmt = {
                        actor: xapiConfig.actor || '',
                        verb: {
                            id: 'http://adlnet.gov/expapi/verbs/passed',
                            display: {
                                'en-US': 'passed'
                            }
                        },
                        object: {
                            objectType: 'Activity',
                            id: testId,
                            definition: {
                                name: {
                                    'ru-RU': testName
                                },
                                description: {
                                    'ru-RU': testName
                                }
                            }
                        },
                        result: {
                            score: {
                                raw: courseInfo.score
                            },
                            success: true
                        }
                    }
                    sendStmt(testResultStmt)
                } else if (courseInfo.score <= courseInfo.minScore) {
                    finalFeedback.classList.add('incorrect')
                    courseInfo.interactionResult = false
                    let testResultStmt = {
                        actor: xapiConfig.actor || '',
                        verb: {
                            id: 'http://adlnet.gov/expapi/verbs/failed',
                            display: {
                                'en-US': 'failed'
                            }
                        },
                        object: {
                            objectType: 'Activity',
                            id: testId,
                            definition: {
                                name: {
                                    'ru-RU': testName
                                },
                                description: {
                                    'ru-RU': testName
                                }
                            }
                        },
                        result: {
                            score: {
                                raw: courseInfo.score
                            },
                            success: false
                        }
                    }
                    sendStmt(testResultStmt)
                }

                courseInfo.interactionCompleted = true
                if (courseInfo.isCompleted === false) {
                    if (courseInfo.isDone() === true) {
                        complete()
                    }
                }
            }
        }
    })

    let choicesOptions = currentQ.answers.map(function(ans) {
        return {
            id: ans.aId,
            description: {
                'ru-RU': ans.aText
            }
        }
    })

    let correctRespPattern = currentQ.answers
        .filter(function(ans) {
            if (ans.aCorrect === true) {
                return ans
            }
        })
        .map(function(a) {
            return a.aId
        })
        .join('[,]')

    let qStartedStmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/interacted',
            display: {
                'en-US': 'interacted'
            }
        },
        object: {
            objectType: 'Activity',
            id: testId + currentQ.qId,
            definition: {
                name: {
                    'ru-RU': currentQ.qText
                },
                description: {
                    'ru-RU': currentQ.qText
                },
                type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                interactionType: 'choice',
                correctResponsesPattern: [correctRespPattern],
                choices: choicesOptions
            }
        },
        context: {
            contextActivities: {
                parent: [
                    {
                        objectType: 'Activity',
                        id: testId,
                        definition: {
                            name: {
                                'ru-RU': testName
                            }
                        }
                    }
                ]
            }
        }
    }

    sendStmt(qStartedStmt)
}

function shuffle(array) {
    let newArr = array
    for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    return newArr
}
