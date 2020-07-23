const db = [
  [{}],
  // langExe
  {
    id: '09.04_exe',
    iterables: [
      {
        id: 't1',
        text:
          'Уважаемые пользователи, просим вас обновить приложение, так как старой версией нельзя будет пользоваться_(пусто*,зпт) начиная с 15 марта. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't2',
        text:
          'Новые правила действуют уже год_(пусто,зпт*) начиная с прошлого апреля_(пусто,зпт*) поэтому получить книги по этому абонементу нельзя. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't3',
        text:
          'Вот уже два столетия_(пусто,зпт*) начиная с 1817 г. _(пусто,зпт*)этот комплекс являет собой образец народного зодчества. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't4',
        text:
          'Программа поддержки молодых семей работает_(пусто*,зпт) начиная с прошлого года ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't5',
        text:
          'Бригадир, недовольный сделанной работой, попросил мастера перекрасить ограду_(пусто*,зпт) начиная с середины. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Можно опустить слово «начиная» без ущерба для смысла, запятая не нужна.',
          incorrect:
            'Можно опустить слово «начиная» без ущерба для смысла, запятая не нужна.',
        },
      },
      {
        id: 't6',
        text:
          'Практически весь прошлый год_(пусто,зпт*) начиная с февраля_(пусто,зпт*) сотрудники участвовали в корпоративном благотворительном марафоне. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't7',
        text:
          'Оплатить прокат велосипедов в новом году_(пусто,зпт*) начиная с мая_(пусто,зпт*) можно будет через приложение. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't8',
        text:
          'Стало известно, что в результате инцидента посол утратил привилегии, которые он имел_(пусто*,зпт) начиная с первых дней службы. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't9',
        text:
          'Переводчика попросили перевести текст документа_(пусто*,зпт) начиная с пятой страницы. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Можно опустить слово «начиная» без ущерба для смысла, запятая не нужна.',
          incorrect:
            'Можно опустить слово «начиная» без ущерба для смысла, запятая не нужна.',
        },
      },
      {
        id: 't10',
        text:
          'В этом районе запрещено парковать автомобили_(пусто*,зпт) начиная с восьми часов вечера. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't11',
        text:
          'Участники ассамблеи могут пообедать в ресторане отеля_(пусто*,зпт) начиная с полудня, а зона кофе-брейков открыта в течение всего мероприятия. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't12',
        text:
          'Распечатайте заново договор_(пусто*,зпт) начиная с пятой страницы, так как юрист внёс в него небольшие изменения. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Если слово «начиная» можно опустить без ущерба смыслу и оно не образует деепричастного оборота вместе с относящимися к нему словами, оборот не обособляется.',
          incorrect:
            'Если слово «начиная» можно опустить без ущерба смыслу и оно не образует деепричастного оборота вместе с относящимися к нему словами, оборот не обособляется.',
        },
      },
      {
        id: 't13',
        text:
          'Воспользоваться специальным предложением банка можно_(пусто*,зпт) начиная с 15 ноября. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't14',
        text:
          'Коллега не появлялся на рабочем месте_(пусто*,зпт) начиная со среды. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't15',
        text:
          'Начиная со следующего месяца_(пусто*,зпт) отдел переходит на новый режим работы. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't16',
        text:
          'Уже на прошлой неделе_(пусто,зпт*) начиная со среды_(пусто,зпт*) транспорт на этом участке ходил по новой схеме. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't17',
        text:
          'Программа благоустройства Москвы вот уже несколько лет_(пусто,зпт*) начиная с 2015 года_(пусто,зпт*) меняет город к лучшему год за годом. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't18',
        text:
          'По новой программе школа работает_(пусто*,зпт) начиная с прошлого года ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't19',
        text:
          'Серию онлайн-квестов в городских музеях запустили на портале «Узнай Москву». Пользователи могут решать эти интересные и познавательные исторические головоломки_(пусто*,зпт) начиная с декабря. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't20',
        text:
          'Почти всю неделю_(пусто,зпт*) начиная со вторника_(пусто,зпт*) синоптики обещают проливные дожди. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't21',
        text:
          'Станции «Сокольники» вернули исторический вид, который она имела_(пусто*,зпт) начиная с 1935 года. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't22',
        text:
          'Экскурсовод объявил, что сейчас у туристов начинается свободное время, и он будет ждать всех у автобуса_(пусто*,зпт) начиная с пяти вечера. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't23',
        text:
          'Парковка личного автотранспорта ограничена в этом районе_(пусто*,зпт) начиная с прошлого года. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't24',
        text:
          'Приём гостей конференции ведётся_(пусто*,зпт) начиная с семи вечера. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't25',
        text:
          'Презентацию нужно переписать_(пусто*,зпт) начиная с десятого слайда, так как появилась новая информация от отдела маркетинга. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Если слово «начиная» можно опустить без ущерба смыслу и оно не образует деепричастного оборота вместе с относящимися к нему словами, оборот не обособляется.',
          incorrect:
            'Если слово «начиная» можно опустить без ущерба смыслу и оно не образует деепричастного оборота вместе с относящимися к нему словами, оборот не обособляется.',
        },
      },
      {
        id: 't26',
        text:
          'Дворец спорта открывается после ремонта и ждёт своих посетителей_(пусто*,зпт) начиная с сентября. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't27',
        text:
          'Начиная с 1 июля 2015 года_(пусто*,зпт) несколько тысяч столичных медиков пройдут обучение для работы в Единой медицинской информационно-аналитической системе (ЕМИАС). ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't28',
        text:
          'И.И. Иванов со следующей недели_(пусто,зпт*) начиная со вторника_(пусто,зпт*) приступает к выполнению должностных обязанностей. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't29',
        text:
          'Жильцам дома объявили, что отключение горячей воды ожидается_(пусто*,зпт) начиная с 15 июня. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
          incorrect:
            'Обороты с «начиная с» не обособляются, если предлог буквально указывает на время или дату.',
        },
      },
      {
        id: 't30',
        text:
          'Необходимо произвести уборку придомовой территории_(пусто,зпт*) начиная с вывоза строительного мусора. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't31',
        text: 'Проблемы будут решены_(пусто,зпт*) начиная с самых серьезных. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't32',
        text:
          'Почтальон разносит почту по кварталу_(пусто,зпт*) начиная с нечетных номеров домов. ',
        tip: 'Можно ли опустить слово «начиная» без ущерба для смысла?',
        fb: {
          correct:
            'В этом предложении слово «начиная» вместе с зависимыми словами образует деепричастный оборот, который необходимо обособить.',
          incorrect:
            'В этом предложении слово «начиная» вместе с зависимыми словами образует деепричастный оборот, который необходимо обособить.',
        },
      },
      {
        id: 't33',
        text:
          'Профессионалы спилят дерево по частям_(пусто,зпт*) начиная с верхушки. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't34',
        text:
          'Растительность парка_(пусто,зпт*) начиная с деревьев и заканчивая однолетними цветами_(пусто,зпт*) требует постоянного внимания и ухода. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
      {
        id: 't35',
        text:
          'Профилактика гриппа проводится осенью во всех учреждениях_(пусто,зпт*) начиная с бюджетных организаций и заканчивая школами. ',
        tip: 'Уточнение.',
        fb: {
          correct:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
          incorrect:
            'Обороты с «начиная с» обособляются, если имеют значение уточнения или присоединения.',
        },
      },
    ],
  },
  [{}],
]