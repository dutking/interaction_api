let mainContainer
let tasksArr
let shuffleDb = false
let exerciseName = 'Правописание приставок ПРЕ- и ПРИ-'
let exerciseId = activityId + '/thisexercise/'
let lastTestStmt

function startInteraction() {
    mainContainer = document.querySelector('#task')

    let stmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/interacted',
            display: {
                'en-US': 'interacted'
            }
        },
        object: {
            objectType: 'Activity',
            id: exerciseId,
            definition: {
                name: {
                    'ru-RU': exerciseName
                },
                description: {
                    'ru-RU': exerciseName
                }
            }
        },
        context: {
            contextActivities: {
                parent: [{
                    objectType: 'Activity',
                    id: activityId
                }]
            }
        }
    }

    sendStmt(stmt)

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
            id: exerciseId,
            definition: {
                name: {
                    'ru-RU': exerciseName
                },
                description: {
                    'ru-RU': exerciseName
                }
            }
        },
        context: {
            contextActivities: {
                parent: [{
                    objectType: 'Activity',
                    id: activityId
                }]
            }
        }
    }

    if (shuffleDb === true) {
        tasksArr = shuffle([...tasksDB]).slice(0, 30)
    } else if (shuffleDb === false) {
        tasksArr = [...tasksDB]
    }

    createTask(0)
}

function createTask(num) {
    let thisTask = tasksArr[num]
    let taskContainer = document.createElement('div')
    taskContainer.classList.add('taskContainer')
    taskContainer.dataset.tasknum = num

    let taskText = document.createElement('p')
    taskText.classList.add('taskP')

    let initialTaskWordsArr = thisTask.task.split(' ')
    let numOfTaskWords = 0
    let taskWords = []
    let task = initialTaskWordsArr
        .map(function (word) {
            if (word.indexOf('_') !== -1) {
                numOfTaskWords += 1
                thisTip = thisTask.tip[numOfTaskWords - 1]
                taskWords.push(word)
                return '<span class="wordContainer"><span class="word">' + word + '</span></span>'
            } else {
                return word
            }
        })
        .join(' ')

    taskText.innerHTML = num + 1 + '. ' + task
    taskContainer.appendChild(taskText)
    let answered = 0
    let tipContainer = document.createElement('div')
    tipContainer.classList.add('tipContainer')
    let tipButton = document.createElement('button')
    tipButton.classList.add('tipButton')
    let tipContent = document.createElement('p')
    tipContent.classList.add('tipContent')
    tipButton.innerText = 'Открыть подсказку'
    tipContainer.innerHTML = thisTask.tip
    tipContainer.appendChild(tipButton)
    tipContainer.appendChild(tipContent)
    taskContainer.appendChild(tipContainer)
    // <- question started statement
    taskWords.forEach(function (word, index) {
        // question started statement ->

        let answersContainer = document.createElement('div')
        answersContainer.classList.add('answersContainer')

        let numberOfSpaces = word.split('').filter(e => e === '_').length
        for (let i = 0; i < numberOfSpaces; i++) {
            let choiceContainer = document.createElement('div')
            answersContainer.appendChild(choiceContainer)
            choiceContainer.classList.add('choiceContainer')
            thisTask.choices[index][i].forEach(function (choice) {
                let btn = document.createElement('button')
                choiceContainer.appendChild(btn)
                btn.classList.add('btn')
                btn.innerHTML = choice
                btn.dataset.value = choice

                btn.addEventListener('click', function (e) {
                    let result = false
                    let response = e.target.dataset.value
                    let task = e.target.parentNode.parentNode.parentNode
                    let wordElement = task.querySelectorAll('.word')[index]
                    wordElement.innerHTML = wordElement.innerHTML.replace('_', e.target.innerHTML)
                    if (numberOfSpaces === 1 || (numberOfSpaces > 1 && i === numberOfSpaces - 1)) {
                        if (index < taskWords.length - 1) {
                            answered += 1
                            btn.parentNode.parentNode.parentNode
                                .querySelectorAll('.answersContainer')[index + 1].classList.remove('off')
                        }
                    } else if (numberOfSpaces > 1 && i < numberOfSpaces - 1) {
                        btn.parentNode.parentNode
                            .querySelectorAll('.choiceContainer')[i + 1].classList.remove('off')
                    }

                    if (e.target.dataset.value === thisTask.correctAns[index][i]) {
                        e.target.classList.add('correct')
                        wordElement.classList.add('correct')
                        let fbText = document.createElement('p')
                        fbContainer.appendChild(fbText)
                        fbText.classList.add('fbText')
                        fbText.classList.add('correct')
                        fbText.innerText = 'Вы ответили верно! ' + thisTask.fbCorrect
                        result = true
                        courseInfo.score += 1
                    } else if (e.target.dataset.value !== thisTask.correctAns[index][i]) {
                        e.target.classList.add('incorrect')
                        wordElement.classList.add('incorrect')
                        let fbText = document.createElement('p')
                        fbContainer.appendChild(fbText)
                        fbText.classList.add('fbText')
                        fbText.classList.add('incorrect')
                        fbText.innerText = 'Вы ответили неверно! ' + thisTask.fbIncorrect
                        result = false
                    }
                    e.target.parentNode.querySelectorAll('button').forEach(btn => {
                        btn.disabled = true
                    })

                    /* task.scrollIntoView({ behavior: 'smooth' }) */
                    task.scrollIntoView()

                    // <- send response statement

                    let stmt = {
                        actor: xapiConfig.actor || '',
                        verb: {
                            id: 'http://adlnet.gov/expapi/verbs/answered',
                            display: {
                                'en-US': 'answered'
                            }
                        },
                        object: {
                            objectType: 'Activity',
                            id: exerciseId + thisTask.taskId + '/word' + index + '/space' + i,
                            definition: {
                                name: {
                                    'ru-RU': word
                                },
                                description: {
                                    'ru-RU': thisTask.task
                                },
                                type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                                interactionType: 'choice',
                                correctResponsesPattern: [thisTask.correctAns[index][i]],
                                choices: stmtChoicesOptions
                            }
                        },
                        result: {
                            success: result,
                            response: response
                        },
                        context: {
                            contextActivities: {
                                parent: [{
                                    objectType: 'Activity',
                                    id: exerciseId,
                                    definition: {
                                        name: {
                                            'ru-RU': exerciseName
                                        }
                                    }
                                }]
                            }
                        }
                    }

                    sendStmt(stmt)
                    // send response statement ->

                    if (num + 1 < tasksArr.length && answered === taskWords.length) {
                        createTask(num + 1)
                    } else if (num + 1 === tasksArr.length && answered === taskWords.length) {
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
                                id: exerciseId,
                                definition: {
                                    name: {
                                        'ru-RU': exerciseName
                                    },
                                    description: {
                                        'ru-RU': exerciseName
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
                                    parent: [{
                                        objectType: 'Activity',
                                        id: activityId
                                    }]
                                }
                            }
                        }

                        sendStmt(stmtPassed)

                        courseInfo.interactionResult = true
                        courseInfo.interactionCompleted = true
                        if (courseInfo.isCompleted === false) {
                            if (courseInfo.isDone() === true) {
                                complete()
                            }
                        }

                        let finalFeedback = document.createElement('p')
                        finalFeedback.classList.add('finalFeedback')
                        finalFeedback.innerText = `Ваш результат: ${courseInfo.score} из ${tasksArr.length}.`
                        mainContainer.appendChild(finalFeedback)
                        if (courseInfo.score >= courseInfo.minScore) {
                            finalFeedback.classList.add('correct')
                        } else {
                            finalFeedback.classList.add('incorrect')
                        }
                    }
                })

                choiceContainer.appendChild(btn)

                // statement
                let stmtChoicesOptions = thisTask.choices[index][i].map(function (option) {
                    return {
                        id: option,
                        description: {
                            'ru-RU': option
                        }
                    }
                })

                let stmt = {
                    actor: xapiConfig.actor || '',
                    verb: {
                        id: 'http://adlnet.gov/expapi/verbs/interacted',
                        display: {
                            'en-US': 'interacted'
                        }
                    },
                    object: {
                        objectType: 'Activity',
                        id: exerciseId + thisTask.taskId + '/word' + index + '/space' + i,
                        definition: {
                            name: {
                                'ru-RU': word
                            },
                            description: {
                                'ru-RU': thisTask.task
                            },
                            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                            interactionType: 'choice',
                            correctResponsesPattern: [thisTask.correctAns[index][i]],
                            choices: stmtChoicesOptions
                        }
                    },
                    context: {
                        contextActivities: {
                            parent: [{
                                objectType: 'Activity',
                                id: exerciseId,
                                definition: {
                                    name: {
                                        'ru-RU': exerciseName
                                    }
                                }
                            }]
                        }
                    }
                }

                sendStmt(stmt)
            })

            if (i > 0) {
                choiceContainer.classList.add('off')
            }

            // statements
        }

        if (index > 0) {
            answersContainer.classList.add('off')
        }

        taskContainer.appendChild(answersContainer)
    })

    let fbContainer = document.createElement('div')
    fbContainer.classList.add('fbContainer')
    taskContainer.appendChild(fbContainer)

    mainContainer.appendChild(taskContainer)
}

function shuffle(array) {
    let newArr = array
    for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    return newArr
}