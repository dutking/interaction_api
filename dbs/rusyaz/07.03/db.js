const db = [
  // langExe
  {
    id: '07.03_exe',
    iterables: [
      {
        id: 't1',
        text:
          'Сотрудники_(пусто,зпт*) приглашённые на тренинг_(пусто,зпт*) собрались в переговорной. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't2',
        text:
          'Глава города лично поблагодарил жителей_(пусто,зпт*) принимавших участие в ликвидации последствий стихии. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't3',
        text:
          'Авансовый отчёт_(пусто,зпт*) оформленный с опозданием_(пусто,зпт*) стал причиной спора с бухгалтерией. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't4',
        text:
          'ГИБДД подготовил статистику о дорожных происшествиях_(пусто,зпт*) случившихся в марте. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't5',
        text:
          'Подготовленные к Крещению_(пусто*,зпт) купели и специальные места на водоёмах открыты в Москве и Подмосковье. ',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't6',
        text:
          'Вопросы строительства жилого комплекса_(пусто,зпт*) затронутые в ходе совещания_(пусто,зпт*) будут тщательно проработаны. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't7',
        text:
          'Ставший популярным у москвичей_(пусто,зпт*) каток выбран площадкой для проведения соревнований. ',
        tip:
          'Причастный оборот до определяемого слова с добавочным обстоятельственным значением.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, но имеющий добавочное обстоятельственное значение, обособляется на письме.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, но имеющий добавочное обстоятельственное значение, обособляется на письме.',
        },
      },
      {
        id: 't8',
        text:
          'Ассамблея «Здоровая Москва»_(пусто,зпт*) открывшаяся на ВДНХ_(пусто,зпт*) стала большим событием для медицинских работников. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't9',
        text:
          'Автомобилист_(пусто,зпт*) не удовлетворившийся работой страховщиков_(пусто,зпт*) составил обращение в суд. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't10',
        text:
          'Президент Ассоциации российских банков_(пусто,зпт*) выступивший на форуме_(пусто,зпт*) получил наибольшее количество вопросов от журналистов. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't11',
        text:
          'Получивший повышение в должности_(пусто*,зпт) специалист приступил к выполнению новых обязанностей. ',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't12',
        text:
          'Выступивший перед полным залом_(пусто*,зпт) лектор был тепло принят слушателями. ',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't13',
        text:
          'Всем вкладчикам_(пусто,зпт*) разместившим денежные средства на депозите_(пусто,зпт*) банк начислил проценты по вкладам. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't14',
        text:
          'Расположенные в зоне предполагаемой стихии_(пусто*,зпт) районы эвакуировали. ',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't15',
        text:
          'Директор школы_(пусто,зпт*) проработавший в должности двадцать лет_(пусто,зпт*) представлен к награде. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't16',
        text:
          'Обновлённые к началу учебного года_(пусто*,зпт) школы распахнули двери перед учениками. ',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't17',
        text:
          'Подать заявку на продление действия банковской карты можно в дополнительном офисе_(пусто,зпт*) открытом рядом с метро «Кропоткинская». ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't18',
        text:
          'Студенты_(пусто,зпт*) сдавшие сессию экстерном_(пусто,зпт*) смогут уйти на каникулы на неделю раньше. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't19',
        text:
          'В связи с веломарафоном_(пусто,зпт*) проходящим в центре столицы_(пусто,зпт*) закрыты для проезда некоторые улицы. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't20',
        text:
          'Выигравшие соревнование_(пусто,зпт*) спортсмены получили награды лично от президента Ассоциации. ',
        tip:
          'Причастный оборот до определяемого слова с добавочным обстоятельственным значением.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, но имеющий добавочное обстоятельственное значение, обособляется на письме.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, но имеющий добавочное обстоятельственное значение, обособляется на письме.',
        },
      },
      {
        id: 't21',
        text:
          'Авторы нашумевшего фильма_(пусто,зпт*) получившего международное признание_(пусто,зпт*) выступили на пресс-конференции. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't22',
        text:
          'Владельцам гаражей_(пусто,зпт*) идущих под снос в кварталах реновации_(пусто,зпт*) увеличат компенсации. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't23',
        text:
          'Вызвавшая большой интерес_(пусто,зпт*) театральная постановка стала главной культурной новостью сезона. ',
        tip:
          'Причастный оборот, стоящий до определяемого слова, с добавочным обстоятельственным оттенком.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, но имеющий добавочное обстоятельственное значение, обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, но имеющий добавочное обстоятельственное значение, обособляется.',
        },
      },
      {
        id: 't24',
        text:
          'Аквакомплекс в Лужниках_(пусто,зпт*)открытый в 2019 году_(пусто,зпт*) является одним из самых больших крытых аквапарков в России. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't25',
        text:
          'Сервис по подбору персонала «Работа.ру»_(пусто,зпт*) проводивший исследование о рынке труда_(пусто,зпт*) опубликовал список самых востребованных профессий. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't26',
        text:
          'Более сотни дополнительных поездов_(пусто,зпт*) запущенных специально в новогодние праздники_(пусто,зпт*) будет курсировать между Москвой и крупными городами. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't27',
        text:
          'Украшенные к празднику_(пусто,зпт*) центральные улицы удивили гостей столицы. ',
        tip:
          'Причастный оборот, стоящий до определяемого слова, с добавочным обстоятельственным оттенком.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, но имеющий добавочное обстоятельственное значение, обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, но имеющий добавочное обстоятельственное значение, обособляется.',
        },
      },
      {
        id: 't28',
        text:
          'Вышедшую из строя_(пусто*,зпт) офисную технику необходимо передать в хозяйственный отдел. ',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't29',
        text:
          'На территории парка заработали аттракционы_(пусто,зпт*)остановленные ранее на ремонт. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't30',
        text:
          'Независимый экономический эксперт_(пусто,зпт*) приглашённый в качестве консультанта_(пусто,зпт*) дал своё заключение. ',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't31',
        text:
          'Территория парка_(пусто,зпт*) огороженная специальными знаками_(пусто,зпт*) находится на реконструкции.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't32',
        text:
          'Выйти на сцену попросили сотрудников_(пусто,зпт*) принимавших активное участие в подготовке к празднованию Дня города.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't33',
        text:
          'Текст_(пусто,зпт*) написанный в спешке_(пусто,зпт*) потребует исправлений.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't34',
        text:
          'Пресс-служба Московского метрополитена сообщила о более чем полумиллионе поездок_(пусто,зпт*) совершённых пассажирами МЦД в первый день после завершения бесплатного периода.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't35',
        text:
          'Сделанный по индивидуальному заказу автомобиль_(пусто*,зпт) представлен на ретро-выставке в Парке Горького.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't36',
        text:
          'Вопросы строительства и развития МЦК и МЦД_(пусто,зпт*) освещённые в ходе пресс-конференции_(пусто,зпт*) являются ключевыми на сегодняшний день в развитии транспортной системы Москвы.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't37',
        text:
          'Самая читаемая москвичами газета_(пусто*,зпт) определена голосованием на сайте.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't38',
        text:
          'Храм Святителя Николая_(пусто,зпт*) построенный в ХIХ веке_(пусто,зпт*) практически сохранил исторический облик, изменились лишь некоторые детали.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't39',
        text:
          'Исследования показали: люди_(пусто,зпт*) читающие хотя бы одну деловую книгу в месяц_(пусто,зпт*) быстрее продвигаются по службе.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't40',
        text:
          'Итальянский архитектор_(пусто,зпт*) построивший старое здание Московского университета_(пусто,зпт*) работал в России в 1810-1832 гг. Его звали Доменико Жилярди.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't41',
        text:
          'Перешедшие на усиленный режим работы коммунальные службы_(пусто*,зпт) отчитались о дежурстве оперативного и ремонтного персонала.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't42',
        text:
          'Проводящие поверку счетчиков воды организации_(пусто*,зпт) должны быть аккредитованы.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't43',
        text:
          'Участников спартакиады_(пусто,зпт*) прилетевших утренним рейсом_(пусто,зпт*) разместили в отеле.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't44',
        text:
          'Построенная полностью на российских технологиях_(пусто*,зпт) подстанция обеспечит электроэнергией весь район.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't45',
        text:
          'В рамках программы капремонта_(пусто,зпт*) действующей с 2015 года_(пусто,зпт*) специалисты обновляют кабины, двери шахт на этажах, ограничители скорости и другое лифтовое оборудование.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't46',
        text:
          'Оборудованные для раздельного сбора мусора контейнеры_(пусто*,зпт) будут укомплектованы к концу декабря, а полностью на раздельный сбор отходов Москва переходит с 1 января 2020 года.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't47',
        text:
          'На портале мэра и правительства Москвы жители смогут отслеживать историю потребления воды и электричества через виджет_(пусто,зпт*) обновлённый в 2019 году.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't48',
        text:
          'Жители_(пусто,зпт*) погасившие в ноябре и декабре долги за электроэнергию_(пусто,зпт*) смогут избежать пени. Об этой акции объявил «Мосэнергосбыт».',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't49',
        text:
          'Стартовала программа реконструкции советских кинотеатров, и первый из них_(пусто,зпт*) обновленный в ноябре_(пусто,зпт*) уже работает. Ещё шесть обещают открыть в первом квартале 2020 года.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't50',
        text:
          '«Заработавший в прошлом году сервис_(пусто*,зпт) обеспечит единую заявку на подключение к инженерным сетям. Запрос от застройщиков и получение документов от органов власти проходит без участия заявителя», – сказано в сообщении мэра Москвы.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't51',
        text:
          'Авторы концепции_(пусто,зпт*) опиравшиеся на реальные прогнозы специалистов по урбанистике_(пусто,зпт*) представили зрителям выставки виртуальные города с принципиально новыми видами транспорта.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't52',
        text:
          'Для гостей_(пусто*,зпт) пришедших в Пушкинский музей с детьми_(пусто*,зпт) организованы специальные мероприятия и зоны для отдыха.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't53',
        text:
          'Пользующаяся огромной популярностью у москвичей Новогодняя программа на Тверской_(пусто*,зпт) будет продлена до шести дней.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't54',
        text:
          'Каменный храм в стиле московского барокко_(пусто,зпт*) возведенный в 1708 году родственником Петра Первого Кириллом Нарышкиным_(пусто,зпт*) был почти уничтожен в советское время, но сейчас реконструирован.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't55',
        text:
          'Атриум_(пусто,зпт*) открытый в пассажирском терминале Домодедово_(пусто,зпт*) посвящён присвоению аэропорту имени российского ученого Михаила Ломоносов.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't56',
        text:
          'Шоу-программа_(пусто,зпт*) включающая в себя разнообразные версии танго_(пусто,зпт*) пройдёт в Театральном зале Дома музыки.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't57',
        text:
          'Ставшие на десять дней пешеходными_(пусто*,зпт) центральные улицы Москвы закрыты для транспорта с 28 декабря до 6 января в связи с проведением фестиваля «Путешествие в Рождество».',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't58',
        text:
          'Продлённую по просьбам зрителей экспозицию «Память поколений»_(пусто*,зпт) можно будет посетить вплоть до конца года.',
        tip: 'Причастный оборот до определяемого слова.',
        fb: {
          correct:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
          incorrect:
            'Причастный оборот, стоящий перед определяемым словом, обычно не обособляется.',
        },
      },
      {
        id: 't59',
        text:
          'Гостей «Дальневосточной ярмарки» удивили блюдами_(пусто,зпт*) приготовленными из редких сортов рыбы.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't60',
        text:
          'Лауреаты_(пусто,зпт*) победившие в конкурсе_(пусто,зпт*) получили признание за реставрацию таких знаковых для Москвы объектов, как Дом Тургенева на Остоженке, фонтаны «Дружба народов» и «Каменный цветок» на ВДНХ, бывший кинотеатр «Колизей» и ряда других.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't61',
        text:
          'Определён круг действий юридических лиц_(пусто,зпт*) входящих в структуру Правительства Москвы.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't62',
        text:
          'В соответствии с п. 1 ст. 4 АПК РФ заинтересованное лицо вправе обратиться в Арбитражный суд города Москвы за защитой своих нарушенных или оспариваемых прав и законных интересов в порядке_(пусто,зпт*) установленном законодательством.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't63',
        text:
          'По вопросу плановой проверки соблюдения сотрудниками режима рабочего времени_(пусто,зпт*) выявившей моё опоздание в указанные дни_(пусто,зпт*) сообщаю следующее.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't64',
        text:
          'Утверждены документы_(пусто,зпт*) регламентирующие работу организации.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't65',
        text:
          'Подготовлен план проверок_(пусто,зпт*) формируемый для Генеральной прокуратуры РФ.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't66',
        text:
          'Департамент рассмотрел обращение по вопросу улучшения жилищных условий и получения земельного участка для индивидуального строительства заявителя И. И. Ивановой_(пусто,зпт*) проживающей по адресу: Свободный переулок, д. 37/18, кв. 105.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't67',
        text:
          'Число государственных услуг_(пусто,зпт*) получаемых в электронном виде постоянно растет.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't68',
        text:
          'Работы по благоустройству Ботанического сада_(пусто,зпт*) начатые в прошлом году_(пусто,зпт*) будут продолжены.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't69',
        text:
          'Президиум Правительства Москвы обсудил важную меру_(пусто,зпт*) принимаемую в рамках антикризисного плана столицы.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
      {
        id: 't70',
        text: 'Факты_(пусто,зпт*) изложенные в письме_(пусто,зпт*) проверены.',
        tip: 'Причастный оборот после определяемого слова.',
        fb: {
          correct:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
          incorrect:
            'Если причастный оборот следует после определяемого слова, он выделяется запятыми.',
        },
      },
    ],
  },
  [{}],
]