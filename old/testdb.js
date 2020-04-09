const testDB = {
    questions: [{
            type: 'mc',
            id: 'q1',
            text: 'Ударение в русском языке:',
            answers: [{
                    aId: 'q1a1',
                    aText: 'свободное',
                    aCorrect: true,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q1a2',
                    aText: 'фиксированное',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q1a3',
                    aText: 'переменчивое',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                }
            ],
            qFeedback: ''
        },
        {
            type: 'mc',
            id: 'q2',
            text: 'Ударение в русском языке может стоять на любом слоге, но языковеды отмечают, что оно:',
            answers: [{
                    aId: 'q2a1',
                    aText: 'тяготеет к середине слова, не допуская слишком большого количества слогов перед ударным и после ударного, и в то же время предпочитает размещаться на второй половине слова',
                    aCorrect: true,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q2a2',
                    aText: 'тяготеет к началу слова',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q2a3',
                    aText: 'тяготеет к концу слова',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                }
            ],
            qFeedback: ''
        },
        {
            type: 'mc',
            id: 'q3',
            text: 'Если в русский язык попадает слово из другого языка, сохранит ли оно свое ударение?',
            answers: [{
                    aId: 'q3a1',
                    aText: 'может сохранить, а может изменить',
                    aCorrect: true,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q3a2',
                    aText: 'да, обязательно сохранит',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q3a3',
                    aText: 'обязательно изменит',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                }
            ],
            qFeedback: ''
        },
        {
            type: 'mc',
            id: 'q4',
            text: 'Слова, пришедшие из каких языков, чаще всего сохраняют исходное ударение?',
            answers: [{
                    aId: 'q4a1',
                    aText: 'из французского и польского',
                    aCorrect: true,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q4a2',
                    aText: 'из китайского',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q4a3',
                    aText: 'из английского и немецкого',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                }
            ],
            qFeedback: ''
        },
        {
            type: 'mc',
            id: 'q5',
            text: 'Почему слова, заимствованные из французского языка, чаще сохраняют исходное ударение?',
            answers: [{
                    aId: 'q5a1',
                    aText: 'во всех французских словах ударение стоит на последнем слоге, а это соответствует тенденциям русского языка',
                    aCorrect: true,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q5a2',
                    aText: 'русские люди всегда были склонны восхищаться всем французским, поэтому стремились сохранить исходное ударение',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                },
                {
                    aId: 'q5a3',
                    aText: 'во всех французских словах ударение стоит на последнем слоге, и это кажется очень романтичным',
                    aCorrect: false,
                    aFeedback: '',
                    aOptions: ''
                }
            ],
            qFeedback: ''
        }
    ],
    fb: 'Тест пройден. Надеемся, прочитанная статья и этот несложный тест помогут вам хорошо запомнить, как не ошибаться в ударениях. Находите свои пути повышения грамотности. И пусть они будут легкими и приятными!'
}