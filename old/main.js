// << xAPI configuration

let xapiData = {}
let xapiConfig = {}
let activityId = ''
let testMode = false

function sendStmt(stmt) {
    if (testMode === false) {
        ADL.XAPIWrapper.sendStatement(stmt, function (resp, obj) {
            // console.log('callback function executing...')
            console.log(resp.status + resp.statusText)
        })
    } else if (testMode === true) {
        console.log(stmt)
    }
}

function parseQuery(queryString) {
    let query = {}
    let pairs = (queryString[0] === '?' ?
        queryString.substr(1) :
        queryString
    ).split('&')
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i].split('=')
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '')
    }
    return query
}

function getXapiData() {
    let queryParams = parseQuery(window.location.search)
    activityId = queryParams.activity_id

    xapiData = {
        endpoint: queryParams.endpoint,
        auth: queryParams.auth,
        actor: JSON.parse(queryParams.actor),
        grouping: activityId,
        registration: queryParams.registration,
        context: {
            registration: queryParams.registration,
            contextActivities: {
                grouping: activityId
            }
        }
    }

    // SCORM Cloud patch
    if (Array.isArray(xapiData.actor.account)) {
        xapiData.actor.account = xapiData.actor.account[0]
    }
    if (Array.isArray(xapiData.actor.name)) {
        xapiData.actor.name = xapiData.actor.name[0]
    }
    if (
        xapiData.actor.account &&
        xapiData.actor.account.accountServiceHomePage
    ) {
        xapiData.actor.account.homePage =
            xapiData.actor.account.accountServiceHomePage
        xapiData.actor.account.name = xapiData.actor.account.accountName
        delete xapiData.actor.account.accountServiceHomePage
        delete xapiData.actor.account.accountName
    }

    // End SCORM Cloud patch

    return {
        endpoint: xapiData.endpoint,
        auth: xapiData.auth,
        actor: xapiData.actor,
        grouping: xapiData.grouping,
        registration: xapiData.registration,
        context: xapiData.context
    }
}

if (testMode === false) {
    xapiConfig = getXapiData()
    ADL.XAPIWrapper.changeConfig(xapiConfig)
}

// xAPI configuration >>

let completionTrigger
let courseInfo = {
    isLongread: false,
    isLocked: false,
    isInteractive: false,
    interactionTypes: [],
    interactionCompleted: false, // set TRUE in current interaction script if interaction completed
    interactionResult: false,
    score: 0,
    minScore: 0,
    completionTriggerReached: false,
    isDone: checkRequirements,
    isCompleted: false
}

function checkInteractive() {
    let items = Array.from(document.querySelectorAll('.interaction')).filter(function (i) {
        if (i.dataset.type !== 'video') return i
    })
    console.log('Number of interaction to complete is ' + items.length)
    if (items.length > 0 /* || testMode === true */ ) {
        return true
    } else if (items.length === 0) {
        return false
    }
}

function getInteractionTypes() {
    let items = document.querySelectorAll('.interaction')
    if (items.length > 0) {
        let types = Array.from(items).map(function (i) {
            return i.dataset.type
        })
        return types
    }
}

function checkRequirements() {
    if (courseInfo.isInteractive === true) {
        if (
            courseInfo.interactionCompleted === true &&
            courseInfo.completionTriggerReached === true
        ) {
            return true
        } else {
            return false
        }
    } else if (courseInfo.isInteractive === false) {
        if (courseInfo.completionTriggerReached === true) {
            return true
        } else {
            return false
        }
    }
}

function checkLocked() {
    let locker = document.querySelector('div[data-lock]')
    if (locker !== null) {
        if (locker.dataset.lock === 'true') {
            return true
        } else if (locker.dataset.lock === 'false') {
            return false
        }
    } else {
        return false
    }
}

function checkType() {
    let winHeight = window.innerHeight
    let position = completionTrigger.getBoundingClientRect().top
    if (position <= winHeight) {
        return false
    } else if (position > winHeight) {
        return true
    }
}

function start() {
    launched()
    completionTrigger = document.querySelector('#completionTrigger')

    courseInfo.isInteractive = checkInteractive()
    courseInfo.isLocked = checkLocked()
    courseInfo.isLongread = checkType()
    courseInfo.interactionTypes = getInteractionTypes()

    if (courseInfo.isLongread === false) {
        courseInfo.completionTriggerReached = true
    }

    if (courseInfo.isLocked === false && courseInfo.isInteractive === true) {
        courseInfo.interactionCompleted = true
    }

    /* let prevBtn = document.createElement('button')
    prevBtn.id = 'prevCourse'
    prevBtn.innerText = 'Предыдущий курс'
    prevBtn.className = 'nav-btn' */

    /* let nextBtn = document.createElement('button')
    nextBtn.id = 'nextCourse'
    nextBtn.innerText = 'Следующий курс'
    nextBtn.className = 'nav-btn'
    if (courseInfo.isLocked === true) {
        nextBtn.disabled = true
    } else if (courseInfo.isLocked === false) {
        nextBtn.disabled = false
    } */

    let backBtn = document.createElement('button')
    backBtn.id = 'backToTrack'
    backBtn.innerText = 'Далее'
    backBtn.className = 'nav-btn'

    /* let closeBtn = document.createElement('button')
    closeBtn.id = 'closeBtn'
    closeBtn.innerText = 'Закрыть окно'
    closeBtn.className = 'nav-btn' */

    /* completionTrigger.appendChild(prevBtn) */
    /* completionTrigger.appendChild(nextBtn) */
    completionTrigger.appendChild(backBtn)
    /* completionTrigger.appendChild(closeBtn) */

    /* nextBtn.addEventListener('click', nextCourse) */
    backBtn.addEventListener('click', backToTrack)
    /* prevBtn.addEventListener('click', prevCourse) */

    if (document.body.offsetHeight > window.innerHeight) {
        courseInfo.completionTriggerReached === false
        window.addEventListener('scroll', intersectionCounter)
    } else if (document.body.offsetHeight <= window.innerHeight) {
        courseInfo.completionTriggerReached = true
        console.log('completionTrigger reached')
    }

    if (courseInfo.isDone() === true) {
        complete()
    }
    if (
        courseInfo.isInteractive &&
        !courseInfo.interactionTypes.includes('video')
    ) {
        startInteraction()
    }
}

function launched() {
    let stmtLaunched = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/launched',
            display: {
                'en-US': 'launched'
            }
        },
        object: {
            id: activityId || ''
        }
    }
    sendStmt(stmtLaunched)
    console.log('Launched')
}

function intersectionCounter() {
    let winHeight = window.innerHeight
    let position = completionTrigger.getBoundingClientRect().top
    if (position <= winHeight) {
        console.log('completionTrigger reached')
        courseInfo.completionTriggerReached = true

        if (courseInfo.isCompleted === false) {
            if (courseInfo.isDone() === true) {
                complete()
            }
        }
    }
}

function complete() {
    courseInfo.isCompleted = true
    window.removeEventListener('scroll', intersectionCounter)
    // document.querySelector('#nextCourse').disabled = false

    let stmtCompleted = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/completed',
            display: {
                'en-US': 'completed'
            }
        },
        object: {
            id: activityId || '',
            objectType: 'Activity'
        },
        result: {
            completion: true
        }
    }
    sendStmt(stmtCompleted)
    console.log('Completed')

    if (courseInfo.isInteractive === true) {
        if (courseInfo.interactionResult === true) {
            let stmtPassed = {
                actor: xapiConfig.actor || '',
                verb: {
                    id: 'http://adlnet.gov/expapi/verbs/passed',
                    display: {
                        'en-US': 'passed'
                    }
                },
                object: {
                    id: activityId || '',
                    objectType: 'Activity'
                },
                result: {
                    score: {
                        raw: courseInfo.score
                    },
                    success: true
                }
            }
            sendStmt(stmtPassed)
            console.log(`Course passed with score ${courseInfo.score}`)
        } else if (courseInfo.interactionResult === false) {
            let stmtFailed = {
                actor: xapiConfig.actor || '',
                verb: {
                    id: 'http://adlnet.gov/expapi/verbs/failed',
                    display: {
                        'en-US': 'failed'
                    }
                },
                object: {
                    id: activityId || '',
                    objectType: 'Activity'
                },
                result: {
                    score: {
                        raw: courseInfo.score
                    },
                    success: false
                }
            }
            sendStmt(stmtFailed)
            console.log(`Course failed with score ${courseInfo.score}`)
        }
    } else {
        let stmtPassed = {
            actor: xapiConfig.actor || '',
            verb: {
                id: 'http://adlnet.gov/expapi/verbs/passed',
                display: {
                    'en-US': 'passed'
                }
            },
            object: {
                id: activityId || '',
                objectType: 'Activity'
            },
            result: {
                score: {
                    raw: courseInfo.score
                },
                success: true
            }
        }
        sendStmt(stmtPassed)
        console.log(`Course passed with score ${courseInfo.score}. No score.`)
    }
}

function exit() {
    console.log('Course exit start')
    if (courseInfo.isCompleted === false) {
        if (courseInfo.isDone() === true) {
            complete()
        }
    }

    let stmtExited = {
        actor: xapiConfig.actor || '',
        verb: {
            id: 'http://adlnet.gov/expapi/verbs/exited',
            display: {
                'en-US': 'exited'
            }
        },
        object: {
            id: activityId || '',
            objectType: 'Activity'
        }
    }

    sendStmt(stmtExited)

    console.log('Course exit end')

    /*     window.close() */
    /* sendStmt(stmtExited) */
}

/* function nextCourse() {
    exit()
    console.log('User clicked NEXT button');
    (function () {
        if (window.top) {
            return window.top
        }
        return window.parent
    })().location = '/back/gotonext'
    return false
} */

/* function prevCourse() {
    exit()
    console.log('to the prev course');
    (function () {
        if (window.top) {
            return window.top
        }
        return window.parent
    })().location = '/back/gotoprev'
    return false
} */

function backToTrack() {
    exit()
    console.log('back to track');
    (function () {
        if (window.top) {
            return window.top
        }
        return window.parent
    })().location = '/back/'
    return false
}

window.addEventListener('load', start)
/* window.addEventListener('beforeunload', function(e) {
    e.preventDefault()
    e.returnValue = ''
}) */

// add to task js to complete task
/* courseInfo.interactionCompleted = true
            if (courseInfo.isCompleted === false) {
                if (courseInfo.isDone() === true) {
                    complete()
                }
            } */