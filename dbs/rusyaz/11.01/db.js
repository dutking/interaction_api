const db = [
  {
    id: '11.01_test',
    iterables: [
      {
        id: 'q0',
        type: 'mr',
        text:
          'Какие варианты написания являются допустимыми? Можно отметить несколько вариантов.',
        qFeedback: '',
        answers: [
          {
            aId: 'q0a1',
            aCorrect: true,
            aText: 'Я живу в районе Митино.',
            aFeedback: '',
          },
          {
            aId: 'q0a2',
            aCorrect: false,
            aText: 'Я живу в районе Митина.',
            aFeedback: '',
          },
          {
            aId: 'q0a3',
            aCorrect: true,
            aText: 'Я живу в Митино.',
            aFeedback: '',
          },
          {
            aId: 'q0a4',
            aCorrect: true,
            aText: 'Я живу в Митине.',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q1',
        type: 'mr',
        text:
          'Какие варианты написания являются допустимыми? Можно отметить несколько вариантов',
        qFeedback: '',
        answers: [
          {
            aId: 'q1a1',
            aCorrect: true,
            aText: 'Он работает в Кунцево.',
            aFeedback: '',
          },
          {
            aId: 'q1a2',
            aCorrect: true,
            aText: 'Он работает в районе Кунцево.',
            aFeedback: '',
          },
          {
            aId: 'q1a3',
            aCorrect: true,
            aText: 'Он работает в Кунцеве.',
            aFeedback: '',
          },
          {
            aId: 'q1a4',
            aCorrect: false,
            aText: 'Он работает в районе Кунцеве.',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q2',
        type: 'mc',
        text:
          '«Они гуляют в Строгине» - этот вариант написания названия района:',
        qFeedback: '',
        answers: [
          { aId: 'q2a1', aCorrect: false, aText: 'Ошибочный', aFeedback: '' },
          { aId: 'q2a2', aCorrect: false, aText: 'Допустимый', aFeedback: '' },
          {
            aId: 'q2a3',
            aCorrect: true,
            aText: 'Соответствует строгой литературной норме',
            aFeedback: '',
          },
        ],
      },
    ],
    fb: {
      id: '11.01',
      scoreDependent: [
        { interval: [3, 3], text: 'А вы отлично усвоили материал!' },
        { interval: [2, 2], text: 'Может, вы поторопились?' },
        { interval: [0, 1], text: 'Пожалуй, стоит пройти материал еще раз.' },
      ],
    },
    passed: '',
    failed: '',
  },
  // empty for longread, rating and comment
  [{}],
  [{}],
  [{}],
]
