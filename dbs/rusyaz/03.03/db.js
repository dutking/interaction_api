const db = [
  // langExe
  {
    id: '03.03_exe',
    iterables: [
      {
        id: 't1',
        text:
          'Книга поступила в продажу. Её электронную версию то_(слитно*,раздельно)же можно будет приобрести на сайте издательства. ',
        tip: 'Синонимично союзу «и», союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't2',
        text:
          'Началось благоустройство Центрального музея древнерусской культуры и искусства имени Андрея Рублева. Спасский собор, в котором сохранились работы иконописца, так_(слитно*,раздельно)же будет полностью отреставрирован. ',
        tip: 'Синонимично союзу «тоже»',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't3',
        text:
          'Московский планетарий подготовил для своих гостей несколько интересных мероприятий, что_(слитно*,раздельно)бы отпраздновать юбилей. ',
        tip: 'Подчинительный союз',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect: 'Это союз, а не местоимение с частицей.',
        },
      },
      {
        id: 't4',
        text:
          'Преподаватель дал студентам то_(слитно,раздельно*)же задание, что и предыдущему потоку. ',
        tip: 'Подумайте, можно ли добавить слово «самое»?',
        fb: {
          correct:
            'Это указательное местоимение и частица, поэтому они пишутся раздельно.',
          incorrect:
            'Эта конструкция не синонимична союзу «и». Она не является союзом.',
        },
      },
      {
        id: 't5',
        text:
          'Этот автомобиль расходует так_(слитно,раздельно*)же много бензина, как и предыдущая модель. ',
        tip: 'Отвечает на вопрос «как».',
        fb: {
          correct:
            'Это наречие и частица, поэтому они пишутся раздельно. В предложении конструкция сопровождается сравнением с союзом «как».',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't6',
        text:
          'Гости Москвариума могут посетить проходящий там ежегодный фестиваль «Байкал: магия воды», а так_(слитно*,раздельно)же принять участие в мастер-классах. ',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't7',
        text:
          'Картины менее знаменитых современников этого художника то_(слитно*,раздельно)же будут выставлены в музее. ',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't8',
        text:
          'Глава района так_(слитно*,раздельно)же отметил, что количество парковочных мест увеличилось по сравнению с прошлым годом. ',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't9',
        text:
          'Что_(слитно*,раздельно)бы завершить проект в срок, необходимо приложить много усилий. ',
        tip: 'Подчинительный союз.',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't10',
        text:
          'Рекомендуется ежедневно выполнять физические упражнения, но если такой возможности нет, то прогулки на свежем воздухе то_(слитно*,раздельно)же полезны. ',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't11',
        text:
          'Аэропорты Домодево и Внуково то_(слитно*,раздельно)же усилили санитарный контроль из-за угрозы распространения инфекции. ',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't12',
        text:
          'Невнимательность на дороге могла так_(слитно*,раздельно)же стать причиной ДТП. ',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't13',
        text:
          'Что_(слитно*,раздельно)бы выполнить работу в срок, необходимо будет прийти в офис в выходной день. ',
        tip: 'Подчинительный союз.',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't14',
        text:
          'Очевидцы рассказали полицейскому то_(слитно,раздельно*)же самое, что и пострадавший. ',
        tip: 'Обратите внимание на слово «самое».',
        fb: {
          correct:
            'Это указательное местоимение и частица, поэтому они пишутся раздельно.',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't15',
        text:
          'Эта местность снова оказалась в зоне сильного паводка, так_(слитно,раздельно*)же как и годом ранее. ',
        tip: 'Отвечает на вопрос «как».',
        fb: {
          correct:
            'Это наречие и частица, поэтому они пишутся раздельно. В предложении конструкция сопровождается сравнением с союзом «как».',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't16',
        text:
          'Этот вопрос необходимо проработать до понедельника, что_(слитно,раздельно*)бы вы себе ни планировали ранее. ',
        tip: 'Подумайте, можно ли переставить частицу «бы» в другое место?',
        fb: {
          correct: 'Это относительное местоимение с частицей «бы».',
          incorrect:
            'Это не союз. Задать вопросы «почему» или «зачем» в данном случае нельзя.',
        },
      },
      {
        id: 't17',
        text:
          'В «Зарядье» то_(слитно*,раздельно)же проводятся фестивали и выставки. ',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't18',
        text:
          'Вопросы охраны здоровья так_(слитно*,раздельно)же обсуждались в ходе встречи глав регионов. ',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't19',
        text:
          'Прилегающую к новому зданию территорию огородили, что_(слитно*,раздельно)бы начать подготовку к обустройству парковочных мест. ',
        tip: 'Подчинительный союз.',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't20',
        text:
          'Документы можно оформить непосредственно в МФЦ, так_(слитно*,раздельно)же есть возможность сделать это через электронный портал Госуслуг. ',
        tip: 'Синонимично союзу «и».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't21',
        text:
          'В некоторых подмосковных роддомах работают удаленные окна ЗАГС, там то_(слитно*,раздельно)же можно получить свидетельство о рождении ребёнка еще до выписки домой. ',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't22',
        text:
          'Вице-президент Гильдии рестораторов и отельеров подчеркнул, что в России так_(слитно*,раздельно)же необходимо создать специальный департамент, который будет регулировать работу гостиниц и хостелов. ',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't23',
        text:
          'Необязательно лично приходить в налоговую инспекцию, что_(слитно*,раздельно)бы получить имущественный вычет, есть возможность сделать это через электронный портал. ',
        tip: 'Подчинительный союз.',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't24',
        text:
          'Для поддержания лояльности клиентов персонал должен обеспечивать то_(слитно,раздельно*)же качество обслуживания, что и всегда, даже если услуги предоставляются со скидкой. ',
        tip: 'Подумайте, можно ли добавить слово «самое»?',
        fb: {
          correct:
            'Это указательное местоимение и частица, поэтому они пишутся раздельно.',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't25',
        text:
          'После обновления пользоваться порталом Госуслуг так_(слитно,раздельно*)же удобно, как и всегда, и ещё появилась возможность оплачивать услуги ЖКХ непосредственно из приложения. ',
        tip: 'Отвечает на вопрос «как».',
        fb: {
          correct:
            'Это наречие и частица, поэтому они пишутся раздельно. В предложении конструкция сопровождается сравнением с союзом «как».',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't26',
        text:
          'ЦОДД призвал водителей быть осторожными, соблюдать дистанцию и скоростной режим, что_(слитно*,раздельно)бы избежать аварий в этот сильный снегопад. ',
        tip: 'Подчинительный союз.',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't27',
        text:
          'Столичные городские службы то_(слитно*,раздельно)же переведены на усиленный режим работы из-за мокрого снега и гололёда. ',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't28',
        text:
          'Врачи считают теплую зиму опасной для иммунитета из-за повышенной влажности воздуха, а так_(слитно*,раздельно)же потому, что в таких условиях дольше задерживаются вредные выбросы в атмосферу. ',
        tip: 'Синонимично союзу «и».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't29',
        text:
          'Этот законопроект разработали, что_(слитно*,раздельно)бы обеспечить господдержкой многодетные семьи. ',
        tip: 'Подчинительный союз.',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't30',
        text:
          'С 1 марта 2020 года многие интернет-сервисы станут для россиян бесплатными, в их число войдут ресурсы, предоставляющие государственные услуги, а так_(слитно*,раздельно)же сайты Федеральной налоговой службы, медицинских учреждений и экстренных служб. ',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't31',
        text:
          'Привязать карту к номеру телефона то_(слитно*,раздельно)же можно через терминал или в отделении банка.',
        tip: 'Синонимично союзу «и».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't32',
        text:
          'Глава ведомства так_(слитно*,раздельно)же пообещал проработать вопрос об обязательной установке дорожных знаков перед камерами контроля скорости на дорогах.',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't33',
        text:
          'Работы организуют таким образом, что_(слитно*,раздельно)бы учесть новые стандарты планировки и функционирования медицинских учреждений.',
        tip: 'Отвечает на вопрос «зачем».',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect: 'Это союз, а не местоимение с частицей.',
        },
      },
      {
        id: 't34',
        text:
          'По словам главы центра занятости населения, одни люди трудятся сверхинтенсивно, а другие в то_(слитно,раздельно*)же время долго не могут найти работу.',
        tip: 'Подумайте, можно ли добавить слово «самое»?',
        fb: {
          correct: 'Это местоимение и частица, поэтому они пишутся раздельно.',
          incorrect: 'Эта конструкция не синонимична союзу и».',
        },
      },
      {
        id: 't35',
        text:
          'Цены на популярные у москвичей безлимитные билеты не изменятся и будут стоить так_(слитно,раздельно*)же, как и прошлом году.',
        tip: 'Отвечает на вопрос «как».',
        fb: {
          correct:
            'Это местоимение и частица, поэтому они пишутся раздельно. В предложении конструкция сопровождается сравнением с союзом «как».',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't36',
        text:
          'Глава министерства так_(слитно*,раздельно)же напомнил, что к врачам узких специальностей в столице можно записаться в течение нескольких дней, тогда как в некоторых странах ждать приема у таких специалистов можно несколько месяцев.',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't37',
        text:
          'В 1934-м при Московском планетарии открылся первый астрономический кружок, то_(слитно*,раздельно)же уникальный: таких кружков на тот момент в других странах просто не было.',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't38',
        text:
          'Глава ГИБДД так_(слитно*,раздельно)же считает необходимым наклеивать на машины специальные знаки, оповещающие о том, что внутри находится ребенок.',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't39',
        text:
          'По мнению экспертов, экономике уже не требуется столько труда, сколько было необходимо 40 лет назад, что_(слитно*,раздельно)бы достигать плановых показателей.',
        tip: 'Отвечает на вопрос «зачем».',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't40',
        text:
          'В Парке Горького то_(слитно*,раздельно)же готовят катки, ориентировочно на лед можно будет выйти в середине ноября.',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't41',
        text:
          'На чемпионат мира мы сами выбирали форму, сейчас то_(слитно*,раздельно)же. Сыграем в новой форме с Бельгией, – сообщил главный тренер сборной России.',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't42',
        text:
          'Долгожданная реконструкция, которая должна обеспечить дополнительный комфорт всем участникам движения, может так_(слитно*,раздельно)же стать сюрпризом для автомобилистов.',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't43',
        text:
          'Что_(слитно*,раздельно)бы улучшить доступность станций для пассажиров, построено 2 путепровода и 16 пешеходных тоннелей.',
        tip: 'Отвечает на вопрос «почему».',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't44',
        text:
          'На студенческом фестивале известные артисты показали то_(слитно,раздельно*)же самое представление, что уже сорвало овации годом ранее.',
        tip: 'Обратите внимание на слово «самое».',
        fb: {
          correct: 'Это местоимение и частица, поэтому они пишутся раздельно.',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't45',
        text:
          'Координировать проведение мероприятий будет руководитель администрации, так_(слитно,раздельно*)же как и в прошлом году.',
        tip: 'Отвечает на вопрос «как».',
        fb: {
          correct:
            'Это местоимение и частица, поэтому они пишутся раздельно. В предложении конструкция сопровождается сравнением с союзом «как».',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't46',
        text:
          'Что_(слитно,раздельно*)бы кто ни говорил, жители города не побоялись непогоды и вышли на субботник.',
        tip: 'Подумайте, можно ли переставить частицу «бы» в другое место?',
        fb: {
          correct: 'Это местоимение с частицей «бы».',
          incorrect:
            'Это не союз. Задать вопросы «почему» или «зачем» в данном случае нельзя.',
        },
      },
      {
        id: 't47',
        text:
          'Перевозить вторсырье будут на специальных машинах – они то_(слитно*,раздельно)же оформлены синим цветом.',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't48',
        text:
          'На Манежной площади уже установили новогодние ели, а так_(слитно*,раздельно)же украсили территорию сотнями светодиодных фонарей.',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't49',
        text:
          'Территория сквера на время реконструкции закрыта, что_(слитно*,раздельно)бы предотвратить случайные травмы.',
        tip: 'Отвечает на вопрос «зачем».',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't50',
        text:
          'Карту «Тройка» можно активировать заранее в информационных терминалах, а так_(слитно*,раздельно)же в мобильном приложении «Метро Москвы».',
        tip: 'Синонимично союзу «и».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't51',
        text:
          'Открытие Московских центральных диаметров позволит горожанам сократить время в пути, и по деньгам то_(слитно*,раздельно)же выходит выгодно – экономия до 50 процентов затрат на проезд.',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't52',
        text:
          'Так_(слитно*,раздельно)же у станций Московских центральных диаметров появилось восемь перехватывающих парковок для полутора тысяч автомобилей.',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't53',
        text:
          'По причине гололедицы МЧС просит автомобилистов снижать скорость и увеличивать расстояние от впереди идущего транспорта, что_(слитно*,раздельно)бы избежать аварий.',
        tip: 'Отвечает на вопрос «зачем».',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't54',
        text:
          'Более сотни туристов отказались от экскурсии на море из-за стихии, то_(слитно,раздельно*)же количество путешественников вернуло путёвки в горы.',
        tip: 'Подумайте, можно ли добавить слово «самое»?',
        fb: {
          correct: 'Это местоимение и частица, поэтому они пишутся раздельно.',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't55',
        text:
          'Повышенное атмосферное давление так_(слитно,раздельно*)же опасно для метеозависимых людей, как и отсутствие физических нагрузок вкупе с неправильным питанием.',
        tip: 'Отвечает на вопрос «как».',
        fb: {
          correct:
            'Это местоимение и частица, поэтому они пишутся раздельно. В предложении конструкция сопровождается сравнением с союзом «как».',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't56',
        text:
          'Для организации предстоящего чемпионата приглашают волонтёров со знанием иностранных языков, что_(слитно*,раздельно)бы обеспечить комфортный приём иностранных болельщиков.',
        tip: 'Отвечает на вопрос «зачем».',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't57',
        text:
          'Зависимость от смартфонов есть не только у подростков, но и у взрослых то_(слитно*,раздельно)же – посмотрите на людей, которые идут, уткнувшись в телефон.',
        tip: 'Синонимично союзу «также».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «также».',
        },
      },
      {
        id: 't58',
        text:
          'Проведение Года памяти и славы организовано ради сохранения исторической памяти, а так_(слитно*,раздельно)же ознаменования 75-летия Победы 1941-1945 годов.',
        tip: 'Синонимично союзу «и».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't59',
        text:
          'Для Московских центральных диаметров выпускаются новейшие поезда «Иволга», что_(слитно*,раздельно)бы обеспечить максимальную скорость и комфорт.',
        tip: 'Отвечает на вопрос «почему».',
        fb: {
          correct: 'Союз «чтобы» пишется слитно.',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't60',
        text:
          'Так_(слитно*,раздельно)же префект предложил провести тематические конкурсы в социальных сетях, которые позволят приобщить молодых людей к истории.',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't61',
        text:
          'Так_(слитно*,раздельно)же в работе форума принял участие заместитель мэра по экономическим вопросам.',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't62',
        text:
          'Он так_(слитно,раздельно*)же, как и другие, был возмущён таким поступком.',
        tip: 'Отвечает на вопрос «как».',
        fb: {
          correct:
            'Это местоимение и частица, поэтому они пишутся раздельно. В предложении конструкция сопровождается сравнением с союзом «как».',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't63',
        text: 'Это то_(слитно*,раздельно)же сложный вопрос.',
        tip: 'Синонимично союзу «и».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't64',
        text: 'В то_(слитно,раздельно*)же время это сложный вопрос.',
        tip: 'Подумайте, можно ли добавить слово «самое»?',
        fb: {
          correct: 'Это местоимение и частица, поэтому они пишутся раздельно.',
          incorrect: 'Эта конструкция не синонимична союзу «и».',
        },
      },
      {
        id: 't65',
        text:
          'Участковые медицинские сестры, а так_(слитно*,раздельно)же студенты пройдут обучение для работы в Единой медицинской информационно-аналитической системе (ЕМИАС).',
        tip: 'Синонимично союзу «тоже».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «тоже».',
        },
      },
      {
        id: 't66',
        text:
          'Правительству то_(слитно*,раздельно)же приходится считаться с условиями рынка.',
        tip: 'Синонимично союзу «и».',
        fb: {
          correct: 'Союз «тоже» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't67',
        text:
          'На совещании были высказаны так_(слитно*,раздельно)же и противоположные мнения.',
        tip: 'Синонимично союзу «и».',
        fb: {
          correct: 'Союз «также» пишется слитно.',
          incorrect:
            'Это слово пишется слитно, если оно синонимично союзу «и».',
        },
      },
      {
        id: 't68',
        text:
          'Что_(слитно*,раздельно)бы стать участником программы стажировок, необходимо подать заявку на Карьерный портал.',
        tip: 'Отвечает на вопрос «зачем».',
        fb: {
          correct:
            'Союз «чтобы» пишется слитно. Его можно заменить союзом «для того чтобы».',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't69',
        text:
          'Что_(слитно*,раздельно)бы участвовать в конкурсе, необходимо отправить заявку на предлагаемую вакансию.',
        tip: 'Отвечает на вопрос «зачем».',
        fb: {
          correct:
            'Союз «чтобы» пишется слитно. Его можно заменить союзом «для того чтобы».',
          incorrect:
            'В данном случае частицу «бы» без потери смысла опустить нельзя.',
        },
      },
      {
        id: 't70',
        text:
          'Что_(слитно,раздельно*)бы вы посоветовали, что_(слитно*,раздельно)бы решить проблему?',
        tip: 'Подумайте, можно ли переставить частицу «бы» в другое место?',
        fb: {
          correct:
            'Союз «чтобы» пишется слитно. Местоимение «что» с частицей «бы» пишутся раздельно.',
          incorrect:
            'В первом случае используется не союз. Задать вопросы «почему» или «зачем» к нему нельзя. Во втором случае слово отвечает на вопрос «зачем».',
        },
      },
    ],
  },
  [{}],
]
