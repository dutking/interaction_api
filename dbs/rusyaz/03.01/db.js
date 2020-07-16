const db = [
  {
    id: '03.01_test',
    iterables: [
      {
        id: 'q0',
        type: 'mc',
        text: 'Какое сооружение в столице москвичи в шутку называют «Мозги»?',
        qFeedback: '',
        answers: [
          {
            aId: 'q0a1',
            aCorrect: true,
            aText: 'Здание Российской академии наук',
            aFeedback: '',
          },
          {
            aId: 'q0a2',
            aCorrect: false,
            aText: 'Останкинскую телебашню',
            aFeedback: '',
          },
          {
            aId: 'q0a3',
            aCorrect: false,
            aText: 'Здание Государственной думы',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q1',
        type: 'mc',
        text: 'Как получил свое название район Москвы Теплый Стан?',
        qFeedback: '',
        answers: [
          {
            aId: 'q1a1',
            aCorrect: true,
            aText:
              'Давным-давно в районе Теплого Стана располагались дома, в которых можно было остановиться и обогреться путешественникам, направляющимся в Москву',
            aFeedback: '',
          },
          {
            aId: 'q1a2',
            aCorrect: false,
            aText:
              'Так называется крупная ТЭЦ, расположенная в районе, - отсюда и название',
            aFeedback: '',
          },
          {
            aId: 'q1a3',
            aCorrect: false,
            aText:
              'В этом районе раньше находились фабрики по производству шерстяных тканей',
            aFeedback: '',
          },
        ],
      },
      {
        id: 'q2',
        type: 'mc',
        text: 'Это самая короткая улица Москвы',
        qFeedback: '',
        answers: [
          {
            aId: 'q2a1',
            aCorrect: true,
            aText: 'Все дома на ней одноэтажные',
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
            aText: 'На ней установлен памятник экзотическим животным',
            aFeedback: '',
          },
        ],
      },
    ],
    fb: {
      id: '03.01',
      scoreDependent: [
        {
          interval: ['0', '1'],
          text: 'Пожалуй, стоит пройти материал еще раз.',
        },
        { interval: ['2', '2'], text: 'Почти всё верно. Хорошо!' },
        { interval: ['3', '3'], text: 'Вы отлично усвоили материал!' },
      ],
      passed: '',
      failed: '',
    },
  },
  [{}], // longread
]
