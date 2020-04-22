let excName = activityId + 'case/'
let excId = activityId + 'case/'
let lastTestStmt

function startInteraction() {
    let caseStartedStmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/interacted',
            display: {
                'en-US': 'interacted'
            }
        },
        object: {
            objectType: 'Activity',
            id: excId,
            definition: {
                name: {
                    'ru-RU': excName
                },
                description: {
                    'ru-RU': excName
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

    let lastTestStmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/exited',
            display: {
                'en-US': 'exited'
            }
        },
        object: {
            objectType: 'Activity',
            id: excId,
            definition: {
                name: {
                    'ru-RU': excName
                },
                description: {
                    'ru-RU': excName
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

    sendStmt(caseStartedStmt)

    setCase(0)
}

function setCase(num) {
    let mainContainer = document.querySelector('#case')
    let currentCase = caseDB[num]
    // container to preload images
    let preload = document.createElement('div')
    preload.id = 'preload'
    mainContainer.appendChild(preload)

    // create container for case
    let caseContainer = document.createElement('div')
    caseContainer.classList.add('caseContainer')
    caseContainer.dataset.name = currentCase.cId
    mainContainer.appendChild(caseContainer)

    // create case header
    let cHeader = document.createElement('p')
    cHeader.classList.add('header')
    cHeader.innerText = `КЕЙС ${num + 1} ИЗ ${caseDB.length}`
    caseContainer.appendChild(cHeader)

    // create case body (initially hidden)
    let cBody = document.createElement('div')
    cBody.classList.add('cBody')
    caseContainer.appendChild(cBody)

    // create case text div
    let cText = document.createElement('div')
    cText.classList.add('cText')
    cText.innerHTML = currentCase.cText
    cBody.appendChild(cText)

    // create case question div
    let cQuestion = document.createElement('div')
    cQuestion.classList.add('cQuestion')
    cQuestion.innerHTML = currentCase.cQuestion
    cBody.appendChild(cQuestion)

    // create answers' container
    let answersContainer = document.createElement('div')
    answersContainer.classList.add('answersContainer')

    // create particular answers
    let attempt = 0
    let answers = shuffle(currentCase.answers)
    answers.forEach(function(a, i) {
        // create container for particular answer
        let answerContainer = document.createElement('div')
        answerContainer.classList.add('answerContainer')

        // create answer <input> and <label>
        let button = document.createElement('button')
        button.classList.add('answerText')
        button.id = a.aId
        button.setAttribute('type', 'button')
        button.innerText = a.aText
        answerContainer.appendChild(button)

        // create answer feedback
        let feedback = document.createElement('div')
        feedback.classList.add('feedback')
        feedback.classList.add('off')
        feedback.dataset.for = a.aId
        feedback.innerHTML = a.aFeedback
        answerContainer.appendChild(feedback)

        answersContainer.appendChild(answerContainer)

        button.addEventListener('click', function(e) {
            feedback.classList.remove('off')
            if (a.aCorrect === true) {
                e.currentTarget.classList.add('correct')
                feedback.classList.add('correct')

                courseInfo.score += 1
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
                        id: excId + currentCase.cId,
                        definition: {
                            name: {
                                'ru-RU': currentCase.cQuestion
                            },
                            description: {
                                'ru-RU': currentCase.cText
                            },
                            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                            interactionType: 'choice',
                            correctResponsesPattern: [correctRespPattern],
                            choices: choicesOptions
                        }
                    },
                    result: {
                        success: true,
                        response: a.aId
                    },
                    context: {
                        contextActivities: {
                            parent: [
                                {
                                    objectType: 'Activity',
                                    id: excId,
                                    definition: {
                                        name: {
                                            'ru-RU': excName
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }

                sendStmt(userAnsweredStmt)

                if (num + 1 < caseDB.length) {
                    setCase(num + 1)
                } else {
                    /* if (score >= caseDB.length * 0.8) { */

                    let caseResultStmt = {
                        actor: xapiConfig.actor || '',
                        verb: {
                            id: 'http://adlnet.gov/expapi/verbs/passed',
                            display: {
                                'en-US': 'passed'
                            }
                        },
                        object: {
                            objectType: 'Activity',
                            id: excId,
                            definition: {
                                name: {
                                    'ru-RU': excName
                                },
                                description: {
                                    'ru-RU': excName
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
                    sendStmt(caseResultStmt)
                    /* else if (score <= caseDB.length * 0.8) {
                        let caseResultStmt = {
                            actor: xapiConfig.actor || '',
                            verb: {
                                id: 'http://adlnet.gov/expapi/verbs/failed',
                                display: {
                                    'en-US': 'failed'
                                }
                            },
                            object: {
                                objectType: 'Activity',
                                id: excId,
                                definition: {
                                    name: {
                                        'ru-RU': excName
                                    },
                                    description: {
                                        'ru-RU': excName
                                    }
                                }
                            },
                            result: {
                                score: {
                                    raw: score
                                },
                                success: false
                            }
                        }
                        sendStmt(caseResultStmt)
                    } */
                    courseInfo.interactionResult = true
                    courseInfo.interactionCompleted = true
                    if (courseInfo.isCompleted === false) {
                        if (courseInfo.isDone() === true) {
                            complete()
                        }
                    }
                }
            } else if (a.aCorrect === false) {
                feedback.classList.add('incorrect')
                e.currentTarget.classList.add('incorrect')
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
                        id: excId + currentCase.cId,
                        definition: {
                            name: {
                                'ru-RU': currentCase.cQuestion
                            },
                            description: {
                                'ru-RU': currentCase.cText
                            },
                            type: 'http://adlnet.gov/expapi/activities/cmi.interaction',
                            interactionType: 'choice',
                            correctResponsesPattern: [correctRespPattern],
                            choices: choicesOptions
                        }
                    },
                    result: {
                        success: false,
                        response: a.aId
                    },
                    context: {
                        contextActivities: {
                            parent: [
                                {
                                    objectType: 'Activity',
                                    id: excId,
                                    definition: {
                                        name: {
                                            'ru-RU': excName
                                        }
                                    }
                                }
                            ]
                        }
                    }
                }

                sendStmt(userAnsweredStmt)
            }

            e.currentTarget.disabled = true
        })
    })

    cBody.appendChild(answersContainer)

    let choicesOptions = currentCase.answers.map(function(ans) {
        return {
            id: ans.aId,
            description: {
                'ru-RU': ans.aText
            }
        }
    })

    let correctRespPattern = currentCase.answers
        .filter(function(ans) {
            if (ans.aCorrect === true) {
                return ans
            }
        })
        .map(function(a) {
            return a.aId
        })
        .join('[,]')

    let сStartedStmt = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/interacted',
            display: {
                'en-US': 'interacted'
            }
        },
        object: {
            objectType: 'Activity',
            id: excId + currentCase.cId,
            definition: {
                name: {
                    'ru-RU': currentCase.cQuestion
                },
                description: {
                    'ru-RU': currentCase.cText
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
                        id: excId,
                        definition: {
                            name: {
                                'ru-RU': excName
                            }
                        }
                    }
                ]
            }
        }
    }

    sendStmt(сStartedStmt)
}

function shuffle(array) {
    let newArr = array
    for (let i = newArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }
    return newArr
}
