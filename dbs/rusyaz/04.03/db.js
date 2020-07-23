const db = [
  // langExe
  {
    id: '04.03_exe',
    iterables: [
      {
        id: 't1',
        text:
          'Не_(слитно,раздельно*)возвращенная вовремя книга стала причиной спора между коллегами. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't2',
        text:
          'Никем не_(слитно,раздельно*)замеченный в студенческие годы художник стал знаменитым через несколько лет. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't3',
        text:
          'Экскурсовод показал туристам не_(слитно,раздельно*)тронутые реставрацией старинные стены подмосковного храма. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't4',
        text:
          'Не_(слитно,раздельно*)решённая, а списанная у коллеги задача привела к переаттестации и повлияла на результат годовой оценки. ',
        tip: 'Имеется противопоставление.',
        fb: {
          correct:
            'Если в предложении имеется или подразумевается противопоставление, причастие пишется с «не» раздельно.',
          incorrect:
            'Если в предложении имеется противопоставление, причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't5',
        text:
          'Книга ещё не_(слитно,раздельно*)издана, но уже вызвала широкий резонанс. ',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't6',
        text:
          'Не_(слитно,раздельно*)искушенные в борьбе за победу, первокурсники волновались перед межвузовской олимпиадой. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't7',
        text:
          'Преподаватель попросил студентов не помещать в курсовую работу не_(слитно*,раздельно)проверенные цитаты. ',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов, противопоставлений, это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't8',
        text:
          'Не_(слитно,раздельно*)успевший к началу лекции, слушатель пропустил важную информацию. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't9',
        text:
          'Статья ещё не_(слитно,раздельно*)написана, а гонорар за неё уже перечислен автору. ',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't10',
        text:
          'Нет, это не_(слитно,раздельно*)выдуманная история: автор выставки в Манеже рассказал посетителям о том, чему сам был свидетелем. ',
        tip: 'Имеется отрицание.',
        fb: {
          correct:
            'Если в предложении имеется или подразумевается противопоставление или отрицание, причастие пишется с «не» раздельно.',
          incorrect:
            'Если в предложении имеется противопоставление или явное отрицание, причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't11',
        text:
          'Не_(слитно,раздельно*)подготовленный к тестированию, сотрудник волновался по поводу результатов годовой оценки. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't12',
        text:
          'Бригадир строительной организации известен был как скрупулёзный, не_(слитно,раздельно*)верящий на слово руководитель, поэтому под его началом работы выполнялись очень качественно и в срок. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't13',
        text:
          'Не_(слитно*,раздельно)доумевающие пассажиры задавали друг другу вопросы о причинах остановки поезда в туннеле. ',
        tip: 'Употребляется ли причастие без «не»?',
        fb: {
          correct:
            'Причастия, которые не употребляются без «не», пишутся слитно.',
          incorrect:
            'Причастия, которые не употребляются без «не», пишутся слитно.',
        },
      },
      {
        id: 't14',
        text:
          'Опасность на дорогах может быть не_(слитно*,раздельно)видима, поэтому в тёмное время суток следует быть особенно осторожными за рулём. ',
        tip: 'Употребляется ли причастие без «не»?',
        fb: {
          correct:
            'Причастия, которые не употребляются без «не», пишутся с «не» слитно.',
          incorrect:
            'Причастия, которые не употребляются без «не», пишутся с «не» слитно.',
        },
      },
      {
        id: 't15',
        text:
          'Ничем не_(слитно,раздельно*)оправданное опоздание привело к тому, что сотрудник получил строгое замечание. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Если у причастия имеется зависимое слово, то оно пишется с «не» раздельно.',
          incorrect:
            'Если у причастия есть зависимое слово, то оно пишется с «не» раздельно.',
        },
      },
      {
        id: 't16',
        text:
          'Не_(слитно,раздельно*)сделанная после ремонта уборка стала причиной споров между строителями и заказчиками. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't17',
        text:
          'Даже в сильную метель дороги утром не_(слитно,раздельно*)засыпаны снегом, благодаря слаженной работе коммунальных служб. ',
        tip: 'Краткое причастие.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect: 'Краткое причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't18',
        text:
          'Реализация не_(слитно,раздельно*)требующего одобрения совета директоров проекта была начата без промедления. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't19',
        text:
          'Знак предупреждает водителей о том, что они выезжают на не_(слитно*,раздельно)освещённый участок просёлочной дороги. ',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов и это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't20',
        text:
          'Обучающее видео подготовлено к запуску, но пока не_(слитно,раздельно*)просмотрено методическим советом. ',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткое причастие пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если это краткая форма.',
        },
      },
      {
        id: 't21',
        text:
          'Эта технология предполагает укладку не_(слитно,раздельно*)остывшего до конца асфальта. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't22',
        text: 'Не_(слитно*,раздельно)выученный урок привёл к плохой оценке. ',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У полного причастия нет зависимых слов, противопоставлений, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't23',
        text:
          'На картине мы можем видеть старинные здания и улицы, которые залиты утренним солнцем и ещё не_(слитно,раздельно*)умыты дождём. ',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't24',
        text:
          'Автомобиль не_(слитно,раздельно*)покрыт чехлом, а оставлен в тени. ',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткое причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't25',
        text:
          'Жителей эвакуированного посёлка попросили не возвращаться к месту жительства, пока не_(слитно,раздельно*)ликвидированы последствия наводнения. ',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't26',
        text:
          'Москвичей попросили во время снегопада соблюдать осторожность на улице и по возможности избегать не_(слитно*,раздельно)расчищенных тротуаров. ',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов, противопоставлений, это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов и противопоставлений, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't27',
        text:
          'Никому пока не_(слитно,раздельно*)доставшийся приз ждёт своего победителя. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't28',
        text:
          'Студент, не_(слитно,раздельно*)прикоснувшийся за весь семестр к курсовой работе, оказался в затруднительном положении. ',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется раздельно с «не».',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't29',
        text:
          'Не_(слитно*,раздельно)выполненные обязательства стали причиной разбирательства спора в суде. ',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов, противопоставлений, это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't30',
        text:
          'Материал так и не_(слитно,раздельно*)выучен до конца, поэтому есть большая вероятность получить плохую оценку. ',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't31',
        text:
          'Не_(слитно,раздельно*)принимавшая ранее участия в соревнованиях команда выступит в следующем году.',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется раздельно с «не».',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't32',
        text:
          'Для удобства работы строителей участок остался не_(слитно,раздельно*)загороженный, а обозначенный столбиками с сигнальными огнями.',
        tip: 'Имеется противопоставление.',
        fb: {
          correct:
            'Если в предложении имеется или подразумевается противопоставление, причастие пишется с «не» раздельно.',
          incorrect:
            'Если в предложении имеется противопоставление, причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't33',
        text:
          'Специалист технического отдела заверил, что сбой в работе компьютера исправлен и текст документа не_(слитно,раздельно*)потерян.',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't34',
        text:
          'Клиент, не_(слитно*,раздельно)годующий по поводу скорости интернета, составил жалобу в адрес провайдера.',
        tip: 'Посмотрите на глагол, от которого образовано причастие.',
        fb: {
          correct:
            'Глагол «негодовать» без «не» не употребляется, а значит и причастие пишется слитно.',
          incorrect:
            'Причастия, образованные от глаголов, которые не употребляются без «не», пишутся слитно.',
        },
      },
      {
        id: 't35',
        text:
          'Не_(слитно*,раздельно)выполненная работа может стать источником беспокойства и даже стресса.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов и это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't36',
        text:
          'В новом районе города много не_(слитно*,раздельно)заселённых домов, жильцы ожидают окончания отделочных работ.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов и это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't37',
        text:
          'Не стоило показывать на общем собрании не_(слитно,раздельно*)дописанную до конца презентацию.',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't38',
        text:
          'На этом участке движение транспорта не_(слитно,раздельно*)закрыто, а ограничено.',
        tip: 'Имеется противопоставление.',
        fb: {
          correct:
            'Если в предложении имеется или подразумевается противопоставление, причастие пишется с «не» раздельно.',
          incorrect:
            'Если в предложении имеется противопоставление, причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't39',
        text:
          'Миф по поводу этого исторического события до сих пор не_(слитно,раздельно*)развеян.',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't40',
        text:
          'Не_(слитно,раздельно*)победивший, но попавший в пятёрку лидеров участник корпоративных соревнований получил грамоту.',
        tip: 'Имеется противопоставление.',
        fb: {
          correct:
            'Если в предложении имеется или подразумевается противопоставление, причастие пишется с «не» раздельно.',
          incorrect:
            'Если в предложении имеется противопоставление, причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't41',
        text:
          'Преподаватель, не_(слитно*,раздельно)досчитавшийся одного из учеников, выглядел расстроенным.',
        tip: 'Посмотрите, от какого глагола образовано причастие.',
        fb: {
          correct:
            'Если причастие образовано от глагола с приставкой недо-, причастие пишется слитно.',
          incorrect:
            'Если причастие образовано от глагола с приставкой недо-, причастие пишется слитно.',
        },
      },
      {
        id: 't42',
        text:
          'Не_(слитно*,раздельно)собранный чемодан находится в отеле, а посадку на рейс уже объявили.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов и это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't43',
        text:
          'Не_(слитно*,раздельно)исправленная ошибка привела к тому, что студенту пришлось провести расчёты заново и скорректировать выводы.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов и это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't44',
        text:
          'Этот публицист известен как искренний, прямолинейный, не_(слитно*,раздельно)навидящий ложь человек.',
        tip: 'Посмотрите на глагол, от которого образовано причастие.',
        fb: {
          correct:
            'Глагол «ненавидеть» без «не» не употребляется, а значит и причастие пишется слитно.',
          incorrect:
            'Причастия, образованные от глаголов, которые не употребляются без «не», пишутся слитно.',
        },
      },
      {
        id: 't45',
        text:
          'Не_(слитно*,раздельно)вычитанный проект должностной инструкции отдали на подпись руководителю.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов и это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't46',
        text:
          'Не_(слитно*,раздельно)досмотренный обучающий ролик решено отложить до следующей лекции.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Если у полного причастия нет зависимых слов и противопоставления, оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов и противопоставления, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't47',
        text:
          'Студент отправил преподавателю не_(слитно*,раздельно)дописанную статью.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Если у полного причастия нет зависимых слов и противопоставления, оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов и противопоставления, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't48',
        text:
          'Для обеспечения быстрой работы курьерская служба получит не_(слитно,раздельно*)отремонтированные, а новые автомобили.',
        tip: 'Имеется противопоставление.',
        fb: {
          correct:
            'Если в предложении имеется или подразумевается противопоставление, причастие пишется с «не» раздельно.',
          incorrect:
            'Если в предложении имеется противопоставление, причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't49',
        text:
          'Сотрудник волнуется перед тестированием, так как материал не_(слитно,раздельно*)выучен.',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't50',
        text:
          'Не_(слитно*,раздельно)навидимый горожанами многолетний недострой на этом участке наконец привели в порядок.',
        tip: 'Посмотрите на глагол, от которого образовано причастие.',
        fb: {
          correct:
            'Глагол «ненавидеть» без «не» не употребляется, а значит и причастие пишется слитно.',
          incorrect:
            'Причастия, образованные от глаголов, которые не употребляются без «не», пишутся слитно.',
        },
      },
      {
        id: 't51',
        text:
          'Через две недели наступит сентябрь, поэтому директор школы обеспокоен не_(слитно,раздельно*)сделанным до конца ремонтом.',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
        },
      },
      {
        id: 't52',
        text:
          'В старину эти московские улицы были не_(слитно,раздельно*)мощённые булыжниками, а грунтовые.',
        tip: 'Имеется противопоставление.',
        fb: {
          correct:
            'Если в предложении имеется или подразумевается противопоставление, причастие пишется с «не» раздельно.',
          incorrect:
            'Если в предложении имеется противопоставление, причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't53',
        text:
          'В квартире-музее этого писателя очень точно воссоздан быт и атмосфера – на столике даже лежит открытая и будто не_(слитно*,раздельно)дочитанная книга.',
        tip: 'Посмотрите на глагол, от которого образовано причастие.',
        fb: {
          correct:
            'Если причастие образовано от глагола с приставкой недо-, причастие пишется слитно.',
          incorrect:
            'Если причастие образовано от глагола с приставкой недо-, причастие пишется слитно.',
        },
      },
      {
        id: 't54',
        text:
          'Руководитель убедил не_(слитно*,раздельно)домогающего сотрудника отправиться домой, а отчёт доделать позже.',
        tip: 'Посмотрите на глагол, от которого образовано причастие',
        fb: {
          correct:
            'Причастия, образованные от глаголов, которые не употребляются без «не», пишутся слитно.',
          incorrect:
            'Причастия, образованные от глаголов, которые не употребляются без «не», пишутся слитно.',
        },
      },
      {
        id: 't55',
        text:
          'Не_(слитно*,раздельно)тающие льдины стали препятствием для открытия в срок судоходного маршрута.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'У причастия нет зависимых слов и это не краткая форма, поэтому оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't56',
        text:
          'Работы не_(слитно*,раздельно)дооцененного в своё время художника сегодня выставляются в лучших музеях мира.',
        tip: 'Посмотрите на слово, от которого образовано причастие.',
        fb: {
          correct:
            'Если причастие образовано от глагола с приставкой недо-, причастие пишется слитно.',
          incorrect:
            'Если причастие образовано от глагола с приставкой недо-, причастие пишется слитно.',
        },
      },
      {
        id: 't57',
        text:
          'Из-за чудовищных погодных условий работа не_(слитно,раздельно*)сдана в срок.',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't58',
        text:
          'Экскурсовод рассказал интересную версию о том, почему у изображённого на картине купца не_(слитно*,раздельно)застёгнутый ворот.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't59',
        text:
          'На мультимедийной выставке, посвящённой искусству инсталляции, наибольший интерес вызвали металлические не_(слитно*,раздельно)двигающиеся объекты.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't60',
        text:
          'Уже к середине прошлого столетия в Москве не осталось не_(слитно*,раздельно)освещенных улиц.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't61',
        text:
          'Не_(слитно,раздельно*)утвержденный, а принятый к рассмотрению проект благоустройства территории.',
        tip: 'Имеется противопоставление.',
        fb: {
          correct:
            'Если в предложении имеется или подразумевается противопоставление, причастие пишется с «не» раздельно.',
          incorrect:
            'Если в предложении имеется противопоставление, причастие пишется с «не» раздельно.',
        },
      },
      {
        id: 't62',
        text:
          'Не_(слитно,раздельно*)отправленное вовремя письмо находится на контроле.',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Полное причастие, имеющее зависимые слова, пишется с «не» раздельно.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't63',
        text: 'Письмо не_(слитно,раздельно*)отправлено вовремя.',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't64',
        text:
          'Не_(слитно*,раздельно)подтвержденный аккредитив – это аккредитив, не получивший дополнительную гарантию платежа со стороны другого банка.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't65',
        text:
          'Не_(слитно,раздельно*)подтвержденная фактами версия не рассматривается.',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't66',
        text:
          'Проблемы и не_(слитно*,раздельно)решенные вопросы, безусловно, есть.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't67',
        text:
          'Необходимо рассмотреть не_(слитно,раздельно*)решенные медицинским сообществом проблемы.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
      {
        id: 't68',
        text:
          'Вопросы, которые не_(слитно,раздельно*)решены, требуют рассмотрения.',
        tip: 'Краткое причастие.',
        fb: {
          correct: 'Краткие причастия пишутся с «не» раздельно.',
          incorrect: 'Краткие причастия пишутся с «не» раздельно.',
        },
      },
      {
        id: 't69',
        text:
          'Не_(слитно*,раздельно)работающие пенсионеры требуют внимания со стороны органов социальной защиты населения.',
        tip: 'Посмотрите, есть ли у этого причастия зависимые слова?',
        fb: {
          correct:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
          incorrect:
            'Если у полного причастия нет зависимых слов, оно пишется с «не» слитно.',
        },
      },
      {
        id: 't70',
        text:
          'Не_(слитно,раздельно*)законченный в срок проект ставит под угрозу выполнение обязательств.',
        tip: 'Имеется зависимое слово.',
        fb: {
          correct:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
          incorrect:
            'Причастие пишется с «не» раздельно, если имеются зависимые слова.',
        },
      },
    ],
  },
  [{}],
]