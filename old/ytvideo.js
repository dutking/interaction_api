let tag = document.createElement('script')
let vidData = {}
let ranges = {}
let times = {} // for setInterval
let timeout // for setTimeout
let vidDivs
let result = {}
let players = []

setTimeout(function () {
    tag.src = 'https://www.youtube.com/iframe_api'
    let firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}, 1)



function onYouTubeIframeAPIReady() {
    vidData.viewId = ADL.ruuid()
    vidDivs = document.querySelectorAll('div[id^="player"]')
    vidDivs.forEach(function (div, index) {
        div.parentNode.classList.add('center')
        ranges[div.dataset.vid] = []
        let player = new YT.Player(`player${index}`, {
            height: '480',
            width: '854',
            videoId: div.dataset.vid,
            playerVars: {
                autoplay: '0'
                // origin: 'https://cloud.scorm.com'
            },
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
            }
        })
        result[div.dataset.vid] = false
        players.push(player)
    })
    document.addEventListener(
        'visibilitychange',
        function () {
            if (players.length > 0) {
                players.forEach(function (p) {
                    p.pauseVideo()
                })
            }
        },
        false
    )
}

function onPlayerReady(event) {
    // event.target.playVideo()

    getVidData(event.target)
}

function onPlayerStateChange(event) {
    if (event.data === 1) {
        clearTimeout(timeout)
        players.forEach(function (p) {
            if (
                event.target.getVideoData().video_id !==
                p.getVideoData().video_id
            ) {
                p.pauseVideo()
            }
        })
        console.log('played')
        let position = ranges[event.target.getVideoData().video_id].length
        ranges[event.target.getVideoData().video_id][position] = []
        ranges[event.target.getVideoData().video_id][position][0] = Math.floor(
            event.target.getCurrentTime()
        )
        ranges[event.target.getVideoData().video_id][position][1] = Math.floor(
            event.target.getCurrentTime()
        )

        if (checkSeeked(ranges[event.target.getVideoData().video_id])) {
            console.log('seeked')
            sendStmt(getVidData(event.target).stmtSeeked)
        }

        sendStmt(getVidData(event.target).stmtPlay)

        times[event.target.getVideoData().video_id] = setInterval(function () {
            ranges[event.target.getVideoData().video_id][
                position
            ][1] = Math.floor(event.target.getCurrentTime())
        }, 1000)
    } else if (event.data === 2) {
        clearInterval(times[event.target.getVideoData().video_id])
        timeout = setTimeout(function () {
            console.log('paused')
            sendStmt(getVidData(event.target).stmtPaused)
        }, 1000)
    } else if (event.data === 0) {
        clearInterval(times[event.target.getVideoData().video_id])
        clearTimeout(timeout)
        result[event.target.getVideoData().video_id] = true
        console.log('finished')
        sendStmt(getVidData(event.target).stmtCompleted)
        sendStmt(getVidData(event.target).stmtPassed)
        sendStmt(getVidData(event.target).stmtExited)
        checkResult()
    }
}

function checkResult() {
    if (!Object.values(result).includes(false)) {
        console.log('All videos have been viewed.')
    } else {
        console.log('Not all videos have been viewed.')
    }
}

function getVidData(vid) {
    vidData.vidId = vid.getVideoData().video_id
    vidData.vidName = vid.getVideoData().title
    vidData.duration = moment
        .duration(vid.getDuration(), 'seconds')
        .toISOString()
    vidData.currentTime = formatNum(vid.getCurrentTime())
    vidData.screenSize = `${vid.getIframe().width}x${vid.getIframe().height}`
    vidData.quality = vid.getVideoData().video_quality
    vidData.volume = vid.getVolume()
    vidData.width = vid.getIframe().width
    vidData.height = vid.getIframe().height
    vidData.speed = vid.getPlaybackRate()
    vidData.focus = true // чекать положение в окне
    vidData.fullscreen =
        document.fullscreenElement !== null &&
        document.fullscreenElement.tagName === 'IFRAME' ?
        true :
        false
    vidData.ranges = formatRanges(ranges[vidData.vidId])
    vidData.isSeeked = checkSeeked(ranges[vidData.vidId])
    if (vidData.isSeeked === true) {
        vidData.seekedData = getSeekedData(ranges[vidData.vidId])
    } else {
        vidData.seekedData = getSeekedData([
            [0, 0],
            [0, 0]
        ])
    }

    return {
        stmtPlay: {
            actor: xapiConfig.actor,
            verb: {
                id: 'https://w3id.org/xapi/video/verbs/played',
                display: {
                    'en-US': 'played'
                }
            },
            object: {
                id: activityId + '/' + vidData.vidId,
                definition: {
                    name: {
                        'en-US': vidData.vidName
                    },
                    description: {
                        'en-US': vidData.vidName
                    }
                },
                objectType: 'Activity'
            },
            context: {
                contextActivities: {
                    category: [{
                        id: 'https://w3id.org/xapi/video'
                    }]
                },
                extensions: {
                    'contextExt:viewId': vidData.viewId,
                    'contextExt:videoDuration': vidData.duration,
                    'contextExt:speed': vidData.speed,
                    'contextExt:volume': vidData.volume,
                    'contextExt:fullScreen': vidData.fullscreen,
                    'contextExt:quality': vidData.quality,
                    'contextExt:screenSize': vidData.screenSize,
                    'contextExt:focus': vidData.focus
                }
            },
            result: {
                extensions: {
                    'resultExt:viewedRanges': vidData.ranges
                }
            }
        },
        stmtPaused: {
            actor: xapiConfig.actor,
            verb: {
                id: 'https://w3id.org/xapi/video/verbs/paused',
                display: {
                    'en-US': 'paused'
                }
            },
            object: {
                id: activityId + '/' + vidData.vidId,
                definition: {
                    name: {
                        'en-US': vidData.vidName
                    },
                    description: {
                        'en-US': vidData.vidName
                    }
                },
                objectType: 'Activity'
            },
            context: {
                contextActivities: {
                    category: [{
                        id: 'https://w3id.org/xapi/video'
                    }]
                },
                extensions: {
                    'contextExt:viewId': vidData.viewId,
                    'contextExt:videoDuration': vidData.duration
                }
            },
            result: {
                extensions: {
                    'resultExt:paused': vidData.currentTime,
                    'resultExt:viewedRanges': vidData.ranges
                }
            }
        },
        stmtSeeked: {
            actor: xapiConfig.actor,
            verb: {
                id: 'https://w3id.org/xapi/video/verbs/seeked',
                display: {
                    'en-US': 'seeked'
                }
            },
            object: {
                id: activityId + '/' + vidData.vidId,
                definition: {
                    name: {
                        'en-US': vidData.vidName
                    },
                    description: {
                        'en-US': vidData.vidName
                    }
                },
                objectType: 'Activity'
            },
            context: {
                contextActivities: {
                    category: [{
                        id: 'https://w3id.org/xapi/video'
                    }]
                },
                extensions: {
                    'contextExt:viewId': vidData.viewId,
                    'contextExt:videoDuration': vidData.duration
                }
            },
            result: {
                extensions: {
                    'resultExt:from': vidData.seekedData[0],
                    'resultExt:to': vidData.seekedData[1],
                    'resultExt:viewedRanges': vidData.ranges
                }
            }
        },
        stmtCompleted: {
            actor: xapiConfig.actor,
            verb: {
                id: 'https://w3id.org/xapi/video/verbs/completed',
                display: {
                    'en-US': 'completed'
                }
            },
            object: {
                id: activityId + '/' + vidData.vidId,
                definition: {
                    name: {
                        'en-US': vidData.vidName
                    },
                    description: {
                        'en-US': vidData.vidName
                    }
                },
                objectType: 'Activity'
            },
            context: {
                contextActivities: {
                    category: [{
                        id: 'https://w3id.org/xapi/video'
                    }]
                },
                extensions: {
                    'contextExt:viewId': vidData.viewId,
                    'contextExt:videoDuration': vidData.duration
                }
            },
            result: {
                extensions: {
                    'resultExt:viewedRanges': vidData.ranges
                }
            }
        },
        stmtPassed: {
            actor: xapiConfig.actor,
            verb: {
                id: 'https://w3id.org/xapi/video/verbs/passed',
                display: {
                    'en-US': 'passed'
                }
            },
            object: {
                id: activityId + '/' + vidData.vidId,
                definition: {
                    name: {
                        'en-US': vidData.vidName
                    },
                    description: {
                        'en-US': vidData.vidName
                    }
                },
                objectType: 'Activity'
            },
            context: {
                contextActivities: {
                    category: [{
                        id: 'https://w3id.org/xapi/video'
                    }]
                },
                extensions: {
                    'contextExt:viewId': vidData.viewId,
                    'contextExt:videoDuration': vidData.duration
                }
            },
            result: {
                score: {
                    raw: 100
                },
                success: true,
                extensions: {
                    'resultExt:viewedRanges': vidData.ranges
                }
            }
        },
        stmtExited: {
            actor: xapiConfig.actor,
            verb: {
                id: 'https://w3id.org/xapi/video/verbs/exited',
                display: {
                    'en-US': 'exited'
                }
            },
            object: {
                id: activityId + '/' + vidData.vidId,
                definition: {
                    name: {
                        'en-US': vidData.vidName
                    },
                    description: {
                        'en-US': vidData.vidName
                    }
                },
                objectType: 'Activity'
            },
            context: {
                contextActivities: {
                    category: [{
                        id: 'https://w3id.org/xapi/video'
                    }]
                },
                extensions: {
                    'contextExt:viewId': vidData.viewId,
                    'contextExt:videoDuration': vidData.duration
                }
            },
            result: {
                extensions: {
                    'resultExt:viewedRanges': vidData.ranges
                }
            }
        }
    }
}

function formatNum(num) {
    return moment.duration(Math.floor(num), 'seconds').toISOString()
}

function formatRanges(arr) {
    if (arr.length > 0) {
        return arr.map(function (item) {
            return item.map(function (num) {
                return formatNum(num)
            })
        })
    } else {
        return arr
    }
}

function checkSeeked(arr) {
    if (arr.length > 1) {
        let difference = Math.abs(
            arr[arr.length - 1][0] - arr[arr.length - 2][1]
        )
        if (difference > 1) {
            return true
        } else if (difference <= 1) {
            return false
        }
    } else {
        return false
    }
}

function getSeekedData(arr) {
    return [
        formatNum(arr[arr.length - 2][1]),
        formatNum(arr[arr.length - 1][0])
    ]
}