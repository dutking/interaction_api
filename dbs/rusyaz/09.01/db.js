const db = [
  {
    id: '09.01_test',
    iterables: [
      {
        id: 'q0',
        type: 'mc',
        text: 'Ударение в русском языке:',
        qFeedback: '',
        answers: [
          { aId: 'q0a1', aCorrect: true, aText: 'свободное', aFeedback: '' },
          {
            aId: 'q0a2',
            aCorrect: false,
            aText: 'фиксированное',
            aFeedback: '',
          },
          {
            aId: 'q0a3',
            aCorrect: false,
            aText: 'переменчивое',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q1',
        type: 'mc',
        text:
          'Ударение в русском языке может стоять на любом слоге, но языковеды отмечают, что оно:',
        qFeedback: '',
        answers: [
          {
            aId: 'q1a1',
            aCorrect: true,
            aText:
              'тяготеет к середине слова, не допуская слишком большого количества слогов перед ударным и после ударного, и в то же время предпочитает размещаться на второй половине слова',
            aFeedback: '',
          },
          {
            aId: 'q1a2',
            aCorrect: false,
            aText: 'тяготеет к началу слова',
            aFeedback: '',
          },
          {
            aId: 'q1a3',
            aCorrect: false,
            aText: 'тяготеет к концу слова',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q2',
        type: 'mc',
        text:
          'Если в русский язык попадает слово из другого языка, сохранит ли оно свое ударение?',
        qFeedback: '',
        answers: [
          {
            aId: 'q2a1',
            aCorrect: true,
            aText: 'может сохранить, а может изменить',
            aFeedback: '',
          },
          {
            aId: 'q2a2',
            aCorrect: false,
            aText: 'да, обязательно сохранит',
            aFeedback: '',
          },
          {
            aId: 'q2a3',
            aCorrect: false,
            aText: 'обязательно изменит',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q3',
        type: 'mc',
        text:
          'Слова, пришедшие из каких языков, чаще всего сохраняют исходное ударение?',
        qFeedback: '',
        answers: [
          {
            aId: 'q3a1',
            aCorrect: true,
            aText: 'из французского и польского',
            aFeedback: '',
          },
          {
            aId: 'q3a2',
            aCorrect: false,
            aText: 'из китайского',
            aFeedback: '',
          },
          {
            aId: 'q3a3',
            aCorrect: false,
            aText: 'из английского и немецкого',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q4',
        type: 'mc',
        text:
          'Почему слова, заимствованные из французского языка, чаще сохраняют исходное ударение?',
        qFeedback: '',
        answers: [
          {
            aId: 'q4a1',
            aCorrect: true,
            aText:
              'во всех французских словах ударение стоит на последнем слоге, а это соответствует тенденциям русского языка',
            aFeedback: '',
          },
          {
            aId: 'q4a2',
            aCorrect: false,
            aText:
              'русские люди всегда были склонны восхищаться всем французским, поэтому стремились сохранить исходное ударение',
            aFeedback: '',
          },
          {
            aId: 'q4a3',
            aCorrect: false,
            aText:
              'во всех французских словах ударение стоит на последнем слоге, и это кажется очень романтичным',
            aFeedback: '',
          },
        ],
      },
    ],
    fb: {
      id: '09.01',
      scoreDependent: [
        {
          interval: ['0', '1'],
          text: 'Пожалуй, стоит пройти материал еще раз.',
        },
        { interval: ['2', '3'], text: 'Почти всё верно. Хорошо!' },
        { interval: ['4', '5'], text: 'Вы отлично усвоили материал!' },
      ],
      passed: '',
      failed: '',
    },
  },
  [{}], // longread
]
