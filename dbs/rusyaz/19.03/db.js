const db = [
  {
    id: '19.03_exe',
    iterables: [
      {
        id: 't1',
        text:
          'В марафоне приняли участие не то сто_(зпт*,пусто) не то двести человек.',
        tip: 'Между ОЧ стоят повторяющиеся союзы.',
        fb: {
          correct:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.',
          incorrect:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО. Пример: Снаружи раздался шум не то дождя, не то шагов.',
        },
      },
      {
        id: 't2',
        text:
          'На линейке были пятый_(зпт*,пусто) шестой_(зпт*,пусто) седьмой классы.',
        tip: 'Два и более ОЧ без союзов.',
        fb: {
          correct: 'Запятая ставится между двумя и более ОЧ без союзов.',
          incorrect:
            'Запятая ставится между двумя и более ОЧ без союзов. Пример: на улице было холодно, сыро, скользко.',
        },
      },
      {
        id: 't3',
        text:
          'Этот билет дорогой_(зпт*,пусто) хотя удобный для нас по времени.',
        tip: 'ОЧ связаны союзами А, НО, ХОТЯ или ДА (в значении НО).',
        fb: {
          correct:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО).',
          incorrect:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО). Пример: Мал золотник, да дорог.',
        },
      },
      {
        id: 't4',
        text:
          'На важном объекте строители трудились и день_(зпт,пусто*) и ночь.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't5',
        text: 'Школа_(зпт,пусто*) и детский сад закрыты на карантин.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
      {
        id: 't6',
        text:
          'Парки_(зпт,пусто*) и скверы, улицы_(зпт,пусто*) и проспекты – все сияет чистотой.',
        tip: 'Группа ОЧ, которые разбиты на пары.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится внутри группы ОЧ, разбитых на пары, в которых эти члены соединены между собой союзом И.',
          incorrect:
            'Запятая между ОЧ не ставится внутри группы ОЧ, разбитых на пары, в которых эти члены соединены между собой союзом И: Трава и деревья, птицы и звери – все радовалось приходу лета.',
        },
      },
      {
        id: 't7',
        text:
          'Бухгалтер, экономист, юрист_(зпт,тире*,двоеточие) все собрались для обсуждения условий договора.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: Молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't8',
        text:
          'Везде: в Америке, в Европе, в Азии_(зпт,тире*,двоеточие,пусто) есть наши представительства.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: Везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't9',
        text:
          'На дежурстве никого_(зпт,тире,двоеточие*) ни старосты, ни вожатого, ни руководителя группы.',
        tip: 'ОЧ стоят после обобщающего слова.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ стоят после обобщающего слова.',
          incorrect:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ стоят после обобщающего слова. Пример: Для оформления на работу необходимо предоставить следующие документы: паспорт РФ, трудовую книжку, документ об образовании.',
        },
      },
      {
        id: 't10',
        text:
          'Картину нельзя ни реставрировать_(зпт*,пусто) ни транспортировать.',
        tip: 'Между ОЧ стоят повторяющиеся союзы.',
        fb: {
          correct:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.',
          incorrect:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО. Пример: Снаружи раздался шум не то дождя, не то шагов.',
        },
      },
      {
        id: 't11',
        text:
          'Гостям фестиваля предложили танцы_(зпт*,пусто) соревнования_(зпт*,пусто) мастер-классы.',
        tip: 'Два и более ОЧ без союзов.',
        fb: {
          correct: 'Запятая ставится между двумя и более ОЧ без союзов.',
          incorrect:
            'Запятая ставится между двумя и более ОЧ без союзов. Пример: На улице было холодно, сыро, скользко.',
        },
      },
      {
        id: 't12',
        text:
          'Этот сотрудник недавно поступил на работу_(зпт*,пусто) но уже разобрался в специфике отрасли.',
        tip: 'ОЧ связаны союзами А, НО, ХОТЯ или ДА (в значении НО).',
        fb: {
          correct:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО).',
          incorrect:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО). Пример: Мал золотник, да дорог.',
        },
      },
      {
        id: 't13',
        text:
          'Из-за снегопада дворники приступили к уборке дворов ни свет_(зпт,пусто*) ни заря.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't14',
        text:
          'Открытые уроки по плаванию могут посещать взрослые_(зпт,пусто*) и дети.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
      {
        id: 't15',
        text:
          'Индивидуальные занятия_(зпт,пусто*) и групповые программы, лечебная физкультура_(зпт,пусто*) и уроки плавания – всё это предлагает новый спортивный комплекс.',
        tip: 'Группа ОЧ, которые разбиты на пары.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится внутри группы ОЧ, разбитых на пары, в которых эти члены соединены между собой союзом И.',
          incorrect:
            'Запятая между ОЧ не ставится внутри группы ОЧ, разбитых на пары, в которых эти члены соединены между собой союзом И: Трава и деревья, птицы и звери – все радовалось приходу лета.',
        },
      },
      {
        id: 't16',
        text:
          'Русский, английский, немецкий, французский, китайский_(зпт,тире*,двоеточие,пусто) наша справочная служба поддерживает все эти языки.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't17',
        text:
          'Каждый из сотрудников: специалист, советник, начальник_(зпт,тире*,двоеточие,пусто) приглашены прослушать этот учебный курс по лидерству.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: Везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't18',
        text:
          'На педсовет пригласили всех_(зпт,тире,двоеточие*) учителей, завучей, директора.',
        tip: 'ОЧ стоят после обобщающего слова.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ стоят после обобщающего слова.',
          incorrect:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ стоят после обобщающего слова. Пример: Для оформления на работу необходимо предоставить следующие документы: паспорт РФ, трудовую книжку, документ об образовании.',
        },
      },
      {
        id: 't19',
        text:
          'В это время года погода изменчива: то холодно_(зпт*,пусто) то жарко.',
        tip: 'Между ОЧ стоят повторяющиеся союзы.',
        fb: {
          correct:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.',
          incorrect:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО. Пример: Снаружи раздался шум не то дождя, не то шагов.',
        },
      },
      {
        id: 't20',
        text:
          'На московской выставке кошек представлены сибирская_(зпт*,пусто) бирманская_(зпт*,пусто) британская_(зпт*,пусто) абиссинская и другие породы.',
        tip: 'Два и более ОЧ без союзов.',
        fb: {
          correct: 'Запятая ставится между двумя и более ОЧ без союзов.',
          incorrect:
            'Запятая ставится между двумя и более ОЧ без союзов. Пример: На улице было холодно, сыро, скользко.',
        },
      },
      {
        id: 't21',
        text: 'Данный вирус не опасен_(зпт*,пусто) хотя живуч.',
        tip: 'ОЧ связаны союзами А, НО, ХОТЯ или ДА (в значении НО).',
        fb: {
          correct:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО).',
          incorrect:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО). Пример: Мал золотник, да дорог.',
        },
      },
      {
        id: 't22',
        text:
          'К счастью, в ДТП никто не пострадал, хотя виновник аварии был ни жив_(зпт,пусто*) ни мёртв от испуга.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't23',
        text:
          'Краски_(зпт,пусто*) и холст будут предоставлены организатором мастер-класса.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
      {
        id: 't24',
        text:
          'Акварель, гуашь, масло, пастель_(зпт,тире*,двоеточие) в нашей школе обучают всем техникам рисования.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: Молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't25',
        text:
          'Одиннадцатиклассников, сдающих ЕГЭ, предупредили, что им выдадут все необходимое: блокнот, ручки, питьевую воду_(зпт,тире*,двоеточие,пусто) на входе в экзаменационную аудиторию.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't26',
        text:
          'Все мероприятия_(зпт,тире,двоеточие*) лекции, тренинги, совещания – переведены в онлайн-формат.',
        tip: 'ОЧ стоят после обобщающего слова.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ стоят после обобщающего слова.',
          incorrect:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ стоят после обобщающего слова. Пример: Для оформления на работу необходимо предоставить следующие документы: паспорт РФ, трудовую книжку, документ об образовании.',
        },
      },
      {
        id: 't27',
        text:
          'Для корректной работы сайта попробуйте открыть его либо в GoogleChrome_(зпт*,пусто) либо в InternetExplorer.',
        tip: 'Между ОЧ стоят повторяющиеся союзы.',
        fb: {
          correct:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.',
          incorrect:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.Пример: Снаружи раздался шум не то дождя, не то шагов.',
        },
      },
      {
        id: 't28',
        text:
          'В программу реставрации вошли усадьбы_(зпт*,пусто) памятники_(зпт*,пусто) объекты садово-паркового искусства.',
        tip: 'Два и более ОЧ без союзов.',
        fb: {
          correct: 'Запятая ставится между двумя и более ОЧ без союзов.',
          incorrect:
            'Запятая ставится между двумя и более ОЧ без союзов. Пример: На улице было холодно, сыро, скользко.',
        },
      },
      {
        id: 't29',
        text: 'День сегодня тёплый_(зпт*,пусто) хотя дождливый.',
        tip: 'ОЧ связаны союзами А, НО, ХОТЯ или ДА (в значении НО).',
        fb: {
          correct:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО).',
          incorrect:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО). Пример: Мал золотник, да дорог.',
        },
      },
      {
        id: 't30',
        text:
          'Ни то_(зпт,пусто*) ни другое не отражает в полной мере сути распоряжения.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't31',
        text: 'Для посещения открыты кафе_(зпт,пусто*) и рестораны в парке.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
      {
        id: 't32',
        text:
          'Учитель, кондитер, билетер, кондуктор, футболист_(зпт,тире*,двоеточие) все они приняли участие в документальном фильме о профессиях.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: Молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't33',
        text:
          'Повсюду: на столе, стульях, на полу_(зпт,тире*,двоеточие) стояли цветы.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: Везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't34',
        text:
          'В конкурсе участвовали все_(зпт,тире,двоеточие*) и родители, и дети, и бабушки с дедушками.',
        tip: 'ОЧ стоят после обобщающего слова.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ стоят после обобщающего слова.',
          incorrect:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ стоят после обобщающего слова. Пример: Для оформления на работу необходимо предоставить следующие документы: паспорт РФ, трудовую книжку, документ об образовании.',
        },
      },
      {
        id: 't35',
        text:
          'Контрагент отклонил и первый_(зпт*,пусто) и второй вариант проекта договора.',
        tip: 'Между ОЧ стоят повторяющиеся союзы.',
        fb: {
          correct:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.',
          incorrect:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.Пример: Снаружи раздался шум не то дождя, не то шагов.',
        },
      },
      {
        id: 't36',
        text:
          'В этом районе движение затруднено утром_(зпт*,пусто) днём_(зпт*,пусто) вечером.',
        tip: 'Два и более ОЧ без союзов.',
        fb: {
          correct: 'Запятая ставится между двумя и более ОЧ без союзов.',
          incorrect:
            'Запятая ставится между двумя и более ОЧ без союзов. Пример: На улице было холодно, сыро, скользко.',
        },
      },
      {
        id: 't37',
        text:
          'Фрески на стенах отлично сохранились_(зпт*,пусто) хотя датируются XVI веком.',
        tip: 'ОЧ связаны союзами А, НО, ХОТЯ или ДА (в значении НО).',
        fb: {
          correct:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО).',
          incorrect:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО). Пример: Мал золотник, да дорог.',
        },
      },
      {
        id: 't38',
        text:
          'Попасть и туда_(зпт,пусто*) и сюда в один день не получится, планируйте осмотр этих достопримечательностей на все выходные.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't39',
        text:
          'В Московском зоопарке готовы к летнему сезону медведи, грозные львы_(зпт,пусто*) и тигры, пума, изящные леопарды_(зпт,пусто*) и быстроногий гепард.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
      {
        id: 't40',
        text:
          'Книги, газеты, журналы_(зпт,тире*,двоеточие) всё это вы можете приобрести в киоске перед отправлением поезда.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: Молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't41',
        text:
          'Повсюду: в парках, на улицах, в зданиях_(зпт,тире*,двоеточие) провели тщательную уборку.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: Везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't42',
        text:
          'Билеты полностью распроданы. Нигде нет свободных мест_(зпт,тире,двоеточие*) ни в партере, ни в бельэтаже, ни на балконе.',
        tip: 'Перечисление ОЧ начинается после обобщающего слова.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится двоеточие в том случае, если перечисление ОЧ начинается после обобщающего слова.',
          incorrect:
            'В предложениях с ОЧ ставится двоеточие в том случае, если перечисление ОЧ начинается после обобщающего слова. Пример: Для оформления на работу необходимо предоставить следующие документы: паспорт РФ, трудовую книжку, документ об образовании.',
        },
      },
      {
        id: 't43',
        text:
          'В нашем кафе вы можете заказать либо торт_(зпт*,пусто) либо набор пирожных.',
        tip: 'Между ОЧ стоят повторяющиеся союзы.',
        fb: {
          correct:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.',
          incorrect:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО. Пример: Снаружи раздался шум не то дождя, не то шагов.',
        },
      },
      {
        id: 't44',
        text:
          'Новый капитан команды профессионален_(зпт*,пусто) смел_(зпт*,пусто) удачлив.',
        tip: 'Два и более ОЧ без союзов.',
        fb: {
          correct: 'Запятая ставится между двумя и более ОЧ без союзов.',
          incorrect:
            'Запятая ставится между двумя и более ОЧ без союзов. Пример: На улице было холодно, сыро, скользко.',
        },
      },
      {
        id: 't45',
        text:
          'Об этом руководителе говорят: «Он строг_(зпт*,пусто) но справедлив».',
        tip: 'ОЧ связаны союзами А, НО, ХОТЯ или ДА (в значении НО).',
        fb: {
          correct:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО).',
          incorrect:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО). Пример: Мал золотник, да дорог.',
        },
      },
      {
        id: 't46',
        text:
          'Мастера работают и день_(зпт,пусто*) и ночь, чтобы выполнить заказ в срок.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't47',
        text:
          'Окна_(зпт,пусто*) и двери распахнуты настежь, идёт уборка и проветривание помещения.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
      {
        id: 't48',
        text:
          'Автобус, трамвай, троллейбус, маршрутное такси_(зпт,тире*,двоеточие) на любом из этих видов транспорта можно добраться в пансионат.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: Молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't49',
        text:
          'Каждому из них: школьнику, выпускнику, студенту_(зпт,тире*,двоеточие) прочтение этой книги поможет в профессиональном самоопределении.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: Везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't50',
        text:
          'На улице никого_(зпт,тире,двоеточие*) ни прохожих, ни детей, ни гуляющих с собаками.',
        tip: 'Перечисление ОЧ начинается после обобщающего слова.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится двоеточие в том случае, если перечисление ОЧ начинается после обобщающего слова.',
          incorrect:
            'В предложениях с ОЧ ставится двоеточие в том случае, если перечисление ОЧ начинается после обобщающего слова. Пример: Для оформления на работу необходимо предоставить следующие документы: паспорт РФ, трудовую книжку, документ об образовании.',
        },
      },
      {
        id: 't51',
        text:
          'И кафе_(зпт*,пусто) и столовая закрыты на санитарный день в последний понедельник каждого месяца.',
        tip: 'Между ОЧ стоят повторяющиеся союзы.',
        fb: {
          correct:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.',
          incorrect:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО. Пример: Снаружи раздался шум не то дождя, не то шагов.',
        },
      },
      {
        id: 't52',
        text:
          'Лекция была полезной_(зпт*,пусто) ёмкой_(зпт*,пусто) запоминающейся.',
        tip: 'Два и более ОЧ без союзов.',
        fb: {
          correct: 'Запятая ставится между двумя и более ОЧ без союзов.',
          incorrect:
            'Запятая ставится между двумя и более ОЧ без союзов. Пример: На улице было холодно, сыро, скользко.',
        },
      },
      {
        id: 't53',
        text: 'Некоторые овощи невкусные_(зпт*,пусто) но полезные.',
        tip: 'ОЧ связаны союзами А, НО, ХОТЯ или ДА (в значении НО).',
        fb: {
          correct:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО).',
          incorrect:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО). Пример: Мал золотник, да дорог.',
        },
      },
      {
        id: 't54',
        text: 'Опыт подсказывает: можно сделать и так_(зпт,пусто*) и сяк.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't55',
        text:
          'Воробьи_(зпт,пусто*) и голуби часто становятся настоящей проблемой для городских служб.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
      {
        id: 't56',
        text:
          'Голуби, воробьи, вороны_(зпт,тире*,двоеточие) эти птицы зимуют в городе.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: Молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't57',
        text:
          'Все эти меры: замечание, выговор, увольнение_(зпт,тире*,двоеточие,пусто) являются дисциплинарными взысканиями.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: Везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't58',
        text:
          'Если нет мотивации, отвлекает и мешает всё_(зпт,тире,двоеточие*) усталость, недомогание, тревожность.',
        tip: 'ОЧ стоят после обобщающего слова.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ начинаются после обобщающего слова.',
          incorrect:
            'В предложениях с ОЧ ставится двоеточие в том случае, если ОЧ начинаются после обобщающего слова. Пример: Для оформления на работу необходимо предоставить следующие документы: паспорт РФ, трудовую книжку, документ об образовании.',
        },
      },
      {
        id: 't59',
        text:
          'Можно выбрать или первый_(зпт*,пусто) или третий ряд, остальные места уже забронированы.',
        tip: 'Между ОЧ стоят повторяющиеся союзы.',
        fb: {
          correct:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО.',
          incorrect:
            'Запятая ставится между ОЧ с повторяющимися союзами И, НИ, ДА, ЛИБО, ИЛИ, ТО, НЕ ТО. Пример: Снаружи раздался шум не то дождя, не то шагов.',
        },
      },
      {
        id: 't60',
        text:
          'Посетители ярмарки были радостны_(зпт*,пусто) приветливы_(зпт*,пусто) воодушевлены.',
        tip: 'Два и более ОЧ без союзов.',
        fb: {
          correct: 'Запятая ставится между двумя и более ОЧ без союзов.',
          incorrect:
            'Запятая ставится между двумя и более ОЧ без союзов. Пример: на улице было холодно, сыро, скользко.',
        },
      },
      {
        id: 't61',
        text:
          'Продлившееся два часа совещание было утомительно_(зпт*,пусто) хотя продуктивно.',
        tip: 'ОЧ связаны союзами А, НО, ХОТЯ или ДА (в значении НО).',
        fb: {
          correct:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО).',
          incorrect:
            'Запятая ставится между ОЧ, связанными союзами А, НО, ХОТЯ, ДА (в значении НО). Пример: Мал золотник, да дорог.',
        },
      },
      {
        id: 't62',
        text:
          'Время — деньги, нельзя тратить ни то_(зпт,пусто*) ни другое попусту.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't63',
        text:
          'Руководитель_(зпт,пусто*) и подчинённые должны быть ознакомлены с положением о работе департамента.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
      {
        id: 't64',
        text:
          'Тверская, Знаменка, Новый Арбат, Лубянка, Солянка_(зпт,тире*,двоеточие,пусто) все эти улицы являются наиболее популярными у туристов.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't65',
        text:
          'Все эти объекты: памятник, усадьба, фонтан _(зпт,тире*,двоеточие,пусто) в следующем году попадут в программу реконструкции.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: Везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't66',
        text:
          'Пользователям новой модели телефона понравились все ее функциональные характеристики_(зпт,тире,двоеточие*) высокая мощность процессора, большой объем памяти, прочность корпуса.',
        tip: 'Перечисление ОЧ начинается после обобщающего слова.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится двоеточие в том случае, если перечисление ОЧ начинается после обобщающего слова.',
          incorrect:
            'В предложениях с ОЧ ставится двоеточие в том случае, если перечисление ОЧ начинается после обобщающего слова. Пример: Для оформления на работу необходимо предоставить следующие документы: паспорт РФ, трудовую книжку, документ об образовании.',
        },
      },
      {
        id: 't67',
        text:
          'Все эти категории: пенсионеры, временно неработающие, имеющие инвалидность_(зпт,тире*,двоеточие,пусто) имеют право на получение субсидии.',
        tip:
          'Обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит перед ОЧ, но предложение не окончено и продолжается после ОЧ. Пример: Везде: на шкафах, полках, полу – лежал слой пыли.',
        },
      },
      {
        id: 't68',
        text:
          'В погоне за властью и деньгами можно не получить ни того_(зпт,пусто*) ни другого, а друзей растерять.',
        tip: 'ОЧ в устойчивом выражении.',
        fb: {
          correct:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
          incorrect:
            'Запятая между ОЧ не ставится в устойчивых и цельных выражениях, фразеологизмах: ни то ни сё, ни рыба ни мясо и др.',
        },
      },
      {
        id: 't69',
        text:
          'Балалайка, гусли, баян, гармонь_(зпт,тире*,двоеточие,пусто) все эти инструменты стали символами русской музыкальной культуры.',
        tip: 'Обобщающее слово стоит после ОЧ.',
        fb: {
          correct:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ.',
          incorrect:
            'В предложениях с ОЧ ставится тире, если обобщающее слово стоит после ОЧ. Пример: Молоток, гвозди, отвёртки – в работе всё пригодится.',
        },
      },
      {
        id: 't70',
        text:
          'Школьники_(зпт,пусто*) и студенты приглашены посетить открытую лекцию по профориентации.',
        tip: 'Два ОЧ с одиночным сочинительным союзом.',
        fb: {
          correct:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз.',
          incorrect:
            'Запятая не ставится между двумя ОЧ, при которых имеется одиночный соединительный союз: Море и небо были одного цвета.',
        },
      },
    ],
  },
  // empty for video
  [{}],
  // empty for longread, rating and comment
  [{}],
  [{}],
  [{}],
]