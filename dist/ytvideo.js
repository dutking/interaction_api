let tag = document.createElement('script')
let vidData = {}
let ranges = []
let t // for setInterval
let timeout // for setTimeout

tag.src = 'https://www.youtube.com/iframe_api'
let firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

let player
let player2

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'ghi4v_19lzk', //'BxlEwOkpLIs',
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })

    player2 = new YT.Player('player2', {
        height: '360',
        width: '640',
        videoId: 'nlnIGdtry2I', //'BxlEwOkpLIs',
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    })
}

function onPlayerReady(event) {
    event.target.playVideo()
    vidData.viewId = ADL.ruuid() // set it to be an Array of IDs for every player
    getVidData(event.target)
}

function onPlayerStateChange(event) {
    if (event.data === 1) {
        clearTimeout(timeout)
        console.log('played')
        let position = ranges.length
        ranges[position] = []
        ranges[position][0] = Math.floor(event.target.getCurrentTime())
        ranges[position][1] = Math.floor(event.target.getCurrentTime())

        if (checkSeeked(ranges)) {
            console.log('seeked')
            sendStmt(getVidData(event.target).stmtSeeked)
        }

        sendStmt(getVidData(event.target).stmtPlay)

        t = setInterval(function() {
            ranges[position][1] = Math.floor(event.target.getCurrentTime())
        }, 1000)
    } else if (event.data === 2) {
        clearInterval(t)
        timeout = setTimeout(function() {
            console.log('paused')
            sendStmt(getVidData(event.target).stmtPaused)
        }, 1000)
    } else if (event.data === 0) {
        clearInterval(t)
        clearTimeout(timeout)
        console.log('finished')
        sendStmt(getVidData(event.target).stmtCompleted)
        sendStmt(getVidData(event.target).stmtPassed)
        sendStmt(getVidData(event.target).stmtExited)
        courseInfo.interactionResult = true
        courseInfo.score = 100
        courseInfo.interactionCompleted = true
        if (courseInfo.isCompleted === false) {
            if (courseInfo.isDone() === true) {
                complete()
            }
        }
    }
}

function getVidData(vid) {
    vidData.vidId = vid.getVideoData().video_id
    vidData.vidName = vid.getVideoData().title
    vidData.duration = moment.duration(vid.getDuration(), 'seconds').toISOString()
    vidData.currentTime = vid.getCurrentTime()
    vidData.screenSize = `${vid.getIframe().width}x${vid.getIframe().height}`
    vidData.quality = vid.getVideoData().video_quality
    vidData.volume = vid.getVolume()
    vidData.width = vid.getIframe().width
    vidData.height = vid.getIframe().height
    vidData.speed = vid.getPlaybackRate()
    vidData.focus = true // чекать положение в окне
    vidData.fullscreen =
        document.fullscreenElement !== null && document.fullscreenElement.tagName === 'IFRAME'
            ? true
            : false
    vidData.ranges = formatRanges(ranges)
    vidData.isSeeked = checkSeeked(ranges)
    if (vidData.isSeeked === true) {
        vidData.seekedData = getSeekedData(ranges)
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
                    category: [
                        {
                            id: 'https://w3id.org/xapi/video'
                        }
                    ]
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
                    category: [
                        {
                            id: 'https://w3id.org/xapi/video'
                        }
                    ]
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
                    category: [
                        {
                            id: 'https://w3id.org/xapi/video'
                        }
                    ]
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
                    category: [
                        {
                            id: 'https://w3id.org/xapi/video'
                        }
                    ]
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
                    category: [
                        {
                            id: 'https://w3id.org/xapi/video'
                        }
                    ]
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
                    category: [
                        {
                            id: 'https://w3id.org/xapi/video'
                        }
                    ]
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
    return moment.duration(num, 'seconds').toISOString()
}

function formatRanges(arr) {
    if (arr.length > 0) {
        return arr.map(function(item) {
            return item.map(function(num) {
                return formatNum(num)
            })
        })
    } else {
        return arr
    }
}

function checkSeeked(arr) {
    if (arr.length > 1) {
        let difference = Math.abs(arr[arr.length - 1][0] - arr[arr.length - 2][1])
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
    return [formatNum(arr[arr.length - 2][1]), formatNum(arr[arr.length - 1][0])]
}

document.addEventListener(
    'visibilitychange',
    function() {
        player.pauseVideo()
        player2.pauseVideo()
    },
    false
)
