const db = [
  {
    id: '10.01_test',
    iterables: [
      {
        id: 'q0',
        type: 'mc',
        text: 'Слов какого рода в русском языке больше всего?',
        qFeedback: '',
        answers: [
          {
            aId: 'q0a1',
            aCorrect: true,
            aText: 'Женского рода',
            aFeedback: '',
          },
          {
            aId: 'q0a2',
            aCorrect: false,
            aText: 'Мужского рода',
            aFeedback: '',
          },
          {
            aId: 'q0a3',
            aCorrect: false,
            aText: 'Среднего рода',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q1',
        type: 'mc',
        text: 'Что раньше называли словом «сарделька»?',
        qFeedback: '',
        answers: [
          { aId: 'q1a1', aCorrect: true, aText: 'Сорт рыбы', aFeedback: '' },
          {
            aId: 'q1a2',
            aCorrect: false,
            aText: 'То же, что и теперь, – короткие толстые сосиски',
            aFeedback: '',
          },
          {
            aId: 'q1a3',
            aCorrect: false,
            aText: 'Столярный инструмент',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q2',
        type: 'mc',
        text:
          'Микробы – одушевленные или неодушевленные? Как правильно: «средство убивает все микробы» или «убивает всех микробов»?',
        qFeedback: '',
        answers: [
          {
            aId: 'q2a1',
            aCorrect: true,
            aText: 'Правильно и так, и так',
            aFeedback: '',
          },
          {
            aId: 'q2a2',
            aCorrect: false,
            aText: 'Неодушевленные, поэтому правильно – убивает все микробы',
            aFeedback: '',
          },
          {
            aId: 'q2a3',
            aCorrect: false,
            aText: 'Одушевленные, поэтому правильно – убивает всех микробов',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q3',
        type: 'mc',
        text: 'Какое время года раньше называли «бархатным сезоном»?',
        qFeedback: '',
        answers: [
          { aId: 'q3a1', aCorrect: true, aText: 'Весну', aFeedback: '' },
          { aId: 'q3a2', aCorrect: false, aText: 'Зиму', aFeedback: '' },
          { aId: 'q3a3', aCorrect: false, aText: 'Осень', aFeedback: '' },
        ],
      },
      {
        id: 'q4',
        type: 'mc',
        text: 'Касатка – что это за животное?',
        qFeedback: '',
        answers: [
          { aId: 'q4a1', aCorrect: true, aText: 'Ласточка', aFeedback: '' },
          { aId: 'q4a2', aCorrect: false, aText: 'Кит', aFeedback: '' },
          {
            aId: 'q4a3',
            aCorrect: false,
            aText: 'Дальний родственник утконоса',
            aFeedback: '',
          },
        ],
      },
    ],
    fb: {
      id: '10.01',
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
