const db = [
  {
    id: '12.01_test',
    iterables: [
      {
        id: 'q0',
        type: 'mc',
        text:
          'Выберите из двух вариантов верный и вспомните объяснения, которые вы только что узнали из обучающего материала. При необходимости вернитесь к нему и повторите.',
        qFeedback: '',
        answers: [
          {
            aId: 'q0a1',
            aCorrect: true,
            aText: 'Однако мой коллега был против.',
            aFeedback: '',
          },
          {
            aId: 'q0a2',
            aCorrect: false,
            aText: 'Однако, мой коллега был против.',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q1',
        type: 'mc',
        text: 'Выберите из двух вариантов верный:',
        qFeedback: '',
        answers: [
          {
            aId: 'q1a1',
            aCorrect: false,
            aText: 'Его пригласили на собрание, как опытного специалиста.',
            aFeedback: '',
          },
          {
            aId: 'q1a2',
            aCorrect: true,
            aText: 'Его пригласили на собрание как опытного специалиста.',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q2',
        type: 'mc',
        text: 'Выберите из двух вариантов верный:',
        qFeedback: '',
        answers: [
          {
            aId: 'q2a1',
            aCorrect: true,
            aText: 'К тому же он хорошо управляет дискуссией.',
            aFeedback: '',
          },
          {
            aId: 'q2a2',
            aCorrect: false,
            aText: 'К тому же, он хорошо управляет дискуссией.',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q3',
        type: 'mc',
        text: 'Выберите из двух вариантов верный:',
        qFeedback: '',
        answers: [
          {
            aId: 'q3a1',
            aCorrect: false,
            aText:
              'Нам понадобится, как минимум, два дня на выполнение этой работы.',
            aFeedback: '',
          },
          {
            aId: 'q3a2',
            aCorrect: true,
            aText:
              'Нам понадобится как минимум два дня на выполнение этой работы.',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q4',
        type: 'mc',
        text: 'Выберите из двух вариантов верный:',
        qFeedback: '',
        answers: [
          {
            aId: 'q4a1',
            aCorrect: true,
            aText: 'В крайнем случае я запрошу дополнительную информацию',
            aFeedback: '',
          },
          {
            aId: 'q4a2',
            aCorrect: false,
            aText: 'В крайнем случае, я запрошу дополнительную информацию',
            aFeedback: '',
          },
        ],
      },
    ],
    fb: {
      id: '12.01',
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
