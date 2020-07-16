const db = [
  [{}],
  // langExe
  {
    id: '09.03_exe',
    iterables: [
      {
        id: 't1',
        text:
          'Исходя из дорожной ситуации_(пусто,зпт*) принято решение воспользоваться общественным транспортом. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't2',
        text:
          'Исходя из услышанного от свидетелей аварии_(пусто,зпт*) сотрудник ГИБДД составил протокол о ДТП. ',
        tip: 'Деепричастный оборот.',
        fb: {
          correct: 'Деепричастный оборот выделяется запятыми.',
          incorrect:
            'В этом предложении оборот с «исходя из» является деепричастным, поэтому выделяется запятыми.',
        },
      },
      {
        id: 't3',
        text:
          'Сотрудников направляют на обучение не спонтанно, а_(пусто*,зпт) исходя из потребностей бизнеса в развитии тех или иных компетенций. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't4',
        text:
          'Исходя из предупреждения Гидрометцентра России_(пусто,зпт*) столичные власти отменили велопарад. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't5',
        text:
          'Кадровая служба рекомендует сотруднику пройти обучение не по утверждённому графику, а_(пусто*,зпт) исходя из его изменившегося плана командировок в этом полугодии. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't6',
        text:
          'Исходя из появившейся вчера информации_(пусто,зпт*) мы вынуждены изменить детали вашего бронирования. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't7',
        text:
          'Исходя из состояния пациента_(пусто,зпт*) доктор продлил на три дня больничный лист. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't8',
        text:
          'Аттестационная комиссия примет решение, основываясь не на словах руководителей департаментов, а_(пусто*,зпт) исходя из фактических результатов годовой оценки. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't9',
        text:
          'Исходя из данных Росстата_(пусто,зпт*) дефляция наблюдается благодаря плодоовощной продукции, подешевевшей в среднем на 3%. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't10',
        text:
          'Тренер рассчитал суточный рацион, основываясь не на весе игрока, а_(пусто*,зпт) исходя из его физической активности. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't11',
        text:
          'Исходя из сообщения ТАСС_(пусто,зпт*) применение патентной системы налогообложения принято в третьем чтении. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't12',
        text:
          'На открытие торжественного мероприятия этих студентов пригласили не случайно, а_(пусто*,зпт) исходя из их заслуг в общественной деятельности. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't13',
        text:
          'Исходя из новых утверждённых норм_(пусто,зпт*) регионы смогут укрепить свою доходную базу. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't14',
        text:
          'Данная льгота предоставляется не в порядке очереди, а_(пусто*,зпт) исходя из потребностей конкретной семьи. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't15',
        text:
          'Исходя из услышанной на общем собрании информации_(пусто,зпт*) сотрудники внесли изменения в планы на полугодие. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't16',
        text:
          'Исходя из среднерыночных цен на услуги внешних провайдеров_(пусто,зпт*) можно составить бюджет мероприятия. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't17',
        text:
          'Исходя из сложившейся дорожной ситуации в этом районе_(пусто,зпт*) ЦОДД принял решение ограничить парковку. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't18',
        text:
          'График дежурства устанавливается не по желанию работников, а_(пусто*,зпт) исходя из внутреннего регламента работы отдела. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't19',
        text:
          'Исходя из ежегодной статистики_(пусто,зпт*) ЦОДД предупредил москвичей о самых загруженных днях в декабре и январе. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't20',
        text:
          'Эти ремонтные работы произведены не в плановом режиме, а_(пусто*,зпт) исходя из возможного выхода из строя оборудования. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't21',
        text:
          'Исходя из этого_(пусто,зпт*) москвичам посоветовали воспользоваться общественным транспортом. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't22',
        text:
          'Исходя из полученных цифр_(пусто,зпт*) маркетологи сообщили о возможном росте. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't23',
        text:
          'Исходя из многочисленных просьб жителей дома №5_(пусто,зпт*) решено установить детскую площадку и ограничить парковку автомобилей во дворе. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't24',
        text:
          'Премии были выданы не спонтанно, а_(пусто*,зпт) исходя из вклада каждого работника в достижение общей цели. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't25',
        text:
          'Исходя из анализа статистических данных_(пусто,зпт*) самыми дорогими обычно бывают авиабилеты с вылетом в субботу, тогда как вылет в пятницу или воскресенье может сэкономить до трети стоимости поездки. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't26',
        text:
          'Премия начислена не в процентном соотношении к окладу, а_(пусто*,зпт) исходя из персонального вклада каждого работника в данный проект. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't27',
        text:
          'Исходя из этого_(пусто,зпт*) планируем пересмотреть проект и принять соответствующие меры. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't28',
        text:
          'Этот человек поступил так не случайно, а_(пусто*,зпт) исходя из своих принципов и убеждений. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't29',
        text:
          'Исходя из полученных на тренинге знаний_(пусто,зпт*) сотрудники скорректировали свои планы на третий квартал. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't30',
        text:
          'Учебные группы были сформированы_(пусто*,зпт) исходя из набранных студентами тестовых баллов. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Запятая не нужна, поскольку в сообщении нет связи с действующим лицом, но есть связь со сказуемым.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't31',
        text:
          'Цены на продукцию складываются не стихийно, а_(пусто*,зпт) исходя из конъюнктуры рынка и покупательского спроса. ',
        tip: 'Можно ли опустить «исходя из» без ущерба для смысла?',
        fb: {
          correct:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
          incorrect:
            'Обороты с «исходя из» не обособляются от предшествующего союза а, если оборот нельзя убрать или переместить без потери смысла.',
        },
      },
      {
        id: 't32',
        text:
          'Исходя из полученных сегодня знаний_(пусто,зпт*) мы можем найти оптимальное решение задачи. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't33',
        text:
          'Исходя из полученных данных_(пусто,зпт*) можно примерно рассчитать стоимость ремонта. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
      {
        id: 't34',
        text:
          'Исходя из целей среднесрочной программы приватизации государственного имущества города Москвы, а также признавая невозможным дальнейший перенос сроков приватизации государственных унитарных предприятий_(пусто,зпт*)Правительство Москвы постановляет следующее. ',
        tip: 'Деепричастный оборот.',
        fb: {
          correct: 'Деепричастный оборот выделяется запятыми.',
          incorrect:
            'В этом предложении оборот с «исходя из» является деепричастным, поэтому выделяется запятыми.',
        },
      },
      {
        id: 't35',
        text:
          'Оборудование для детской площадки было выбрано_(пусто*,зпт) исходя из сметы проекта. ',
        tip: 'Посмотрите, тесно ли связан оборот со сказуемым.',
        fb: {
          correct:
            'Запятая не нужна, поскольку в сообщении нет связи с действующим лицом, но есть связь со сказуемым.',
          incorrect:
            'Обороты с «исходя из» обычно обособляются. Исключением являются случаи, когда оборот входит в состав сказуемого или тесно связан с ним по смыслу.',
        },
      },
    ],
  },
  [{}],
]
