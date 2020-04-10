let output = document.querySelector('#output')

function handleFiles(files) {
    if (window.FileReader) {
        getAsText(files[0])
    } else {
        alert('FileReader are not supported in this browser.')
    }
}

function getAsText(fileToRead) {
    var reader = new FileReader()
    reader.readAsText(fileToRead)
    reader.onload = loadHandler
    reader.onerror = errorHandler
}

function loadHandler(event) {
    var csv = event.target.result
    processData(csv)
}

function processData(csv) {
    var csvLines = csv
        .split(/\r\n|\n/)
        .filter(function(l, ind) {
            return ind > 0
        })
        .filter(function(l) {
            return l.length > 0
        })
    console.log('csvLines', csvLines)

    var rawTasksData = csvLines.map(function(line) {
        return line.split('|')
    })

    console.log('rawTasksData', rawTasksData)

    let tasksArr = rawTasksData.map(function(task, index) {
        return {
            taskId: `t${index}`,
            task: getTaskText(task[0]),
            tip: getTaskTipOrFb(task[1]),
            fbIncorrect: getTaskTipOrFb(task[2]),
            fbCorrect: getTaskTipOrFb(task[3]),
            choices: getChoices(task[0]),
            correctAns: getCorrectChoices(task[0])
        }
    })
    console.log(JSON.stringify(tasksArr))

    output.innerHTML = JSON.stringify(tasksArr)

    return JSON.stringify(tasksArr)
}

function errorHandler(evt) {
    if (evt.target.error.name === 'NotReadableError') {
        alert('Cannot read file!')
    }
}

function getTaskText(str) {
    return str.replace(/(\(.+?\))/g, '').replace('&nbsp;', ' ')
}

function getTaskTipOrFb(str) {
    return str.split('/')
}

function getTaskWords(str) {
    return str.split(' ').filter(function(w) {
        return w.includes('_')
    })
}

function getChoices(str) {
    // let choicesRegex = /(\(.+?\))/g
    let words = getTaskWords(str)
    return words
        .map(function(w) {
            return w.match(/(\(.+?\))/g)
        })
        .map(function(c) {
            return c.map(function(i) {
                return i
                    .replace(/[\(\*\)]/g, '')
                    .split(',')
                    .map(function(i) {
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
            })
        })
}

function getCorrectChoices(str) {
    // let correctAnsRegex = /[^\(\,]*\*/g
    let words = getTaskWords(str)
    return words.map(function(w) {
        return w
            .match(/[^\(\,]*\*/g)
            .map(function(c) {
                return c.replace(/[\(\*\)]/g, '')
            })
            .map(function(i) {
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
    })
}
