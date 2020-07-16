const db = [
  {
    id: '20.01_test',
    iterables: [
      {
        id: 'q0',
        type: 'mc',
        text:
          'А теперь для закрепления материала пройдите короткий тест. При необходимости вернитесь к обучающему материалу и повторите. Определите, является ли верной фраза: последний раз',
        qFeedback: '',
        answers: [
          { aId: 'q0a1', aCorrect: true, aText: 'Верно', aFeedback: '' },
          { aId: 'q0a2', aCorrect: false, aText: 'Неверно', aFeedback: '' },
        ],
      },
      {
        id: 'q1',
        type: 'mc',
        text: 'Определите, является ли верной фраза: садитесь',
        qFeedback: '',
        answers: [
          { aId: 'q1a1', aCorrect: true, aText: 'Верно', aFeedback: '' },
          { aId: 'q1a2', aCorrect: false, aText: 'Неверно', aFeedback: '' },
        ],
      },
      {
        id: 'q2',
        type: 'mc',
        text: 'Определите, является ли верной фраза: давай решим',
        qFeedback: '',
        answers: [
          { aId: 'q2a1', aCorrect: true, aText: 'Верно', aFeedback: '' },
          { aId: 'q2a2', aCorrect: false, aText: 'Неверно', aFeedback: '' },
        ],
      },
      {
        id: 'q3',
        type: 'mc',
        text: 'Определите, является ли верной фраза: оплатить проезд',
        qFeedback: '',
        answers: [
          { aId: 'q3a1', aCorrect: true, aText: 'Верно', aFeedback: '' },
          { aId: 'q3a2', aCorrect: false, aText: 'Неверно', aFeedback: '' },
        ],
      },
      {
        id: 'q4',
        type: 'mc',
        text:
          'Определите, является ли верной фраза: я скучаю по тебе (я скучаю по вам)',
        qFeedback: '',
        answers: [
          { aId: 'q4a1', aCorrect: true, aText: 'Верно', aFeedback: '' },
          { aId: 'q4a2', aCorrect: false, aText: 'Неверно', aFeedback: '' },
        ],
      },
    ],
    fb: {
      id: '20.01',
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
  // empty for video
  [{}],
  // empty for longread, rating and comment
  [{}],
  [{}],
  [{}],
]
