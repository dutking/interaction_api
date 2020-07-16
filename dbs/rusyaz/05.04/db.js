const db = [
  [{}], // video
  // langExe
  {
    id: '05.04_exe',
    iterables: [
      {
        id: 't1',
        text: 'Ураган оставил после себя выкорчева_(н,нн*)ые деревья. ',
        tip: 'Причастие.',
        fb: {
          correct: 'Это причастие с приставкой. В нём пишется НН.',
          incorrect: 'Это причастие. с приставкой. В нём пишется НН.',
        },
      },
      {
        id: 't2',
        text:
          'Москвичам не рекомендуют в эти праздничные дни направляться в перегруже_(н,нн*)ый центр на личном автотранспорте. ',
        tip: 'Наличие приставки.',
        fb: {
          correct:
            'В прилагательных и причастиях, образованных от глаголов с приставками, пишется НН.',
          incorrect:
            'В прилагательных и причастиях, образованных от глаголов с приставками, пишется НН.',
        },
      },
      {
        id: 't3',
        text:
          'Груже_(н*,нн)ый транспорт, следующий транзитом, находится в зоне досмотра. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't4',
        text:
          'По случаю приезда иностранных партнёров организовали зва_(н*,нн)ый ужин в Гостином дворе. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't5',
        text:
          'Экскурсовод показал туристам самые редкие и нехоже_(н*,нн)ые тропы. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н. Наличие приставки не- на написание не влияет.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н. Наличие приставки не- на написание не влияет.',
        },
      },
      {
        id: 't6',
        text:
          'Общая длина асфальтирова_(н,нн*)ых дорожек парка составляет более пятидесяти километров. ',
        tip: 'Наличие суффикса -ирова-.',
        fb: {
          correct:
            'При наличии в причастии или отглагольном прилагательном суффиксов -ова-, -ева-, -ирова-, изирова- пишется НН.',
          incorrect:
            'При наличии в причастии или отглагольном прилагательном суффиксов -ова-, -ева-, -ирова-, изирова- пишется НН.',
        },
      },
      {
        id: 't7',
        text:
          'Выступая перед будущими студентами, ректор подчеркнул, что взаимопомощь и честность – неписа_(н*,нн)ые правила университета. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна н. Наличие приставки не- на написание не влияет.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н. Наличие приставки не- на написание не влияет.',
        },
      },
      {
        id: 't8',
        text:
          'Особый интерес у гостей Москвы вызвали старинные улочки в центре с мощё_(н*,нн)ыми переулками и столетними домами. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида при помощи суффикса -ен-, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида при помощи суффикса -ен-, поэтому пишется одна Н.',
        },
      },
      {
        id: 't9',
        text:
          'Студент смог представить передела_(н,нн*)ый макет жилого комплекса до окончания сессии, поэтому получил хорошую отметку. ',
        tip: 'Наличие приставки.',
        fb: {
          correct:
            'В прилагательных и причастиях, образованных от глаголов с приставками, пишется НН.',
          incorrect:
            'В прилагательных и причастиях, образованных от глаголов с приставками, пишется НН.',
        },
      },
      {
        id: 't10',
        text:
          'Ежемесячное пособие могут получать семьи, в которых первый или второй ребенок родился или усыновлен в период с 1 января 2018 года до 31 декабря 2022 года, на третьего ребенка или детей, рожде_(н,нн*)ых до 2018 года, пособие не назначается. ',
        tip: 'Слово образовано от глагола совершенного вида.',
        fb: {
          correct:
            'В полных причастиях, образованных от глаголов совершенного вида, пишется НН.',
          incorrect:
            'Полные причастия, образованные от бесприставочных глаголов совершенного вида, пишутся с НН.',
        },
      },
      {
        id: 't11',
        text:
          'Лапти – это низкая плетё_(н*,нн)ая обувь, бывшая в широком употреблении в России до 1930-х годов. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't12',
        text:
          'Особый интерес для исследователей представляют старинные кова_(н*,нн)ые элементы на окнах усадьбы. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't13',
        text:
          'Приглашённый лектор говорил на лома_(н*,нн)ом русском языке, но студенты хорошо его понимали. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't14',
        text:
          'В XI и XII веках в городах Древней Руси получил развитие плете_(н*,нн)ый орнамент, широко распространенный в средневековом искусстве Западной Европы ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't15',
        text:
          'В результате реставрации мост приобрел современный облик, стал более надежным и приспособленным для нужд транспорта, но сохранил исторические черты, например, уникальное кова_(н*,нн)ое ограждение. ',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -н-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't16',
        text:
          'Обратите внимание, что за купле_(н,нн*)ые по этой акции авиабилеты не начисляются бонусные баллы.',
        tip: 'Слово образовано от глагола совершенного вида.',
        fb: {
          correct:
            'В отглагольных прилагательных и полных причастиях, образованных от глаголов совершенного вида, ставится НН.',
          incorrect:
            'Причастия, образованные от бесприставочных глаголов совершенного вида, пишутся с НН.',
        },
      },
      {
        id: 't17',
        text:
          'На градостроительную выставку доставили собра_(н,нн*)ый макет будущего района города. ',
        tip: 'Слово образовано от глагола совершенного вида.',
        fb: {
          correct:
            'В отглагольных прилагательных и полных причастиях, образованных от глаголов совершенного вида, ставится НН.',
          incorrect:
            'Причастия, образованные от бесприставочных глаголов совершенного вида, пишутся с НН.',
        },
      },
      {
        id: 't18',
        text:
          'Утром со склада доставили мороже_(н*,нн)ые продукты и бакалейные товары.',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't19',
        text:
          'Корректор прислал правле_(н*,нн)ый текст, поэтому документ можно оформить и отдать на подписание руководителю.',
        tip: 'Отглагольное прилагательное.',
        fb: {
          correct:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
          incorrect:
            'Это отглагольное прилагательное, образованное от глагола несовершенного вида без приставки при помощи суффикса -ен-. Зависимых слов нет, поэтому пишется одна Н.',
        },
      },
      {
        id: 't20',
        text:
          'Посетители выставки смогут обменять выда_(н,нн*)ые им на входе браслеты на сувениры или развлечения. ',
        tip: 'Наличие зависимого слова.',
        fb: {
          correct: 'Причастия, у которых есть зависимые слова, пишутся с НН.',
          incorrect: 'Причастия, у которых есть зависимые слова, пишутся с НН.',
        },
      },
    ],
  },
  [{}], // longread
]
