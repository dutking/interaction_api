const db = [
  {
    id: '02.01_test',
    iterables: [
      {
        id: 'q0',
        type: 'mc',
        text:
          'Русские фамилии, оканчивающиеся на -ых, -их (типа Черных, Долгих):',
        qFeedback: '',
        answers: [
          {
            aId: 'q0a1',
            aCorrect: true,
            aText: 'Не склоняются',
            aFeedback: '',
          },
          {
            aId: 'q0a2',
            aCorrect: false,
            aText: 'Склоняются',
            aFeedback: '',
          },
          {
            aId: 'q0a3',
            aCorrect: false,
            aText: 'Мужские склоняются, женские – нет',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q1',
        type: 'mc',
        text:
          'Фамилии, оканчивающиеся на согласную букву, кроме фамилий на -ых, -их (типа Бон, Акопян, Шепелевич):',
        qFeedback: '',
        answers: [
          {
            aId: 'q1a1',
            aCorrect: true,
            aText: 'Мужские склоняются, женские – нет',
            aFeedback: '',
          },
          {
            aId: 'q1a2',
            aCorrect: false,
            aText: 'Не склоняются',
            aFeedback: '',
          },
          {
            aId: 'q1a3',
            aCorrect: false,
            aText: 'Склоняются',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q2',
        type: 'mc',
        text:
          'Фамилии, совпадающие с именами нарицательными (типа Заяц, Гроза):',
        qFeedback: '',
        answers: [
          {
            aId: 'q2a1',
            aCorrect: true,
            aText: 'Склоняются',
            aFeedback: '',
          },
          {
            aId: 'q2a2',
            aCorrect: false,
            aText: 'Не склоняются',
            aFeedback: '',
          },
          {
            aId: 'q2a3',
            aCorrect: false,
            aText: 'Мужские склоняются, женские – нет',
            aFeedback: '',
          },
        ],
      },
    ],
    fb: {
      id: '02.01',
      scoreDependent: [
        {
          interval: ['0', '1'],
          text: 'Пожалуй, стоит пройти материал еще раз.',
        },
        {
          interval: ['2', '2'],
          text: 'Почти всё верно. Хорошо!',
        },
        {
          interval: ['3', '3'],
          text: 'Вы отлично усвоили материал!',
        },
      ],
      passed: '',
      failed: '',
    },
  },
  [{}], // longread
]
