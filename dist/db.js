const db = [
    // CURRENT 
    /* {
        name: 'Персональная компетентность во времени',
        columnsNames: ['Да', 'Иногда', 'Нет'],
        columnsValues: [2, 1, 0],
        surveyMetricsRanges: ['Результат указывает на недостаточную компетентность в управлении собственным временем. Скорее всего, вы непродуктивно теряете драгоценные минуты и часы своей жизни, или их «разворовывают» окружающие.', 'Результат указывает на низкую компетентность в управлении временем.', 'Результат указывает на средний уровень компетентности в управлении временем.', 'Результат указывает на высокую личностную компетентность в управлении временем.'],
        surveyMetrics: [{
            id: 'timeManagement',
            nameRus: 'Персональная компетентность во времени',
            correspondingQuestions: {
                normalScale: [],
                reverseScale: []
            },
            ranges: [
                [0, 17],
                [18, 28],
                [29, 39],
                [40, 50]
            ]
        }],
        survey: [
            'В любой работе я стараюсь иметь запас (резерв) времени, выделяю своего рода «неприкосновенное время» на всякий случай',
            'Я четко знаю свои долгосрочные цели, постоянно держу их в уме и периодически обдумываю способы их достижения',
            'Я регулярно использую делегирование, поручая другим людям выполнение важных для меня задач',
            'Я подробно планирую шаги, этапы достижения своих целей',
            'Я понимаю, что общение с друзьями в рабочее время - помеха, и стараюсь избегать таких ситуаций',
            'Я уважаю и ценю собственное время и стараюсь добиться уважения к своему времени и от других людей',
            'Для планирования своего времени я использую записи',
            'Каждый рабочий день я начинаю с определения того, что нужно сделать в первую очередь',
            'В своих делах я строго придерживаюсь установленных мною же сроков',
            'Я хорошо знаю собственные биоритмы и планирую свои дела с учетом своих «внутренних часов»',
            'Я умею и стараюсь коротко говорить по телефону',
            'Я довольно настойчивый человек и обычно, несмотря на помехи и отвлечения, продолжаю работать по плану',
            'Перед началом любой работы я тщательно обдумываю ее, планирую, что мне может понадобиться, сроки и этапы работы и т. п.',
            'Я умею говорить «нет» неожиданным делам и людям',
            'В конце рабочего дня я анализирую все, что произошло, обдумываю, что мне мешало, а что помогало вовремя выполнить работу',
            'Рутинные дела я стараюсь делать крупными блоками, быстро, словно «потоком»',
            'Я регулярно работаю с органайзером, записной книжкой и другими средствами, помогающими мне лучше управлять своим временем',
            'Я умею браться за любую работу быстро и решительно, без лишней «раскачки»',
            'Даже случайные потери времени (вроде стояния в очереди) я стараюсь использовать с пользой',
            'Я считаю, что отдых — это смена деятельности, его также надо планировать и продумывать',
            'Мне легко попросить помощи у других людей, в особенности, если это поможет мне лучше распределить и спланировать мое время',
            'Обычно я легко понимаю, какие из моих дел являются наиболее важными, и их нужно выполнить в первую очередь',
            'Я имею четкое представление о своей будущей карьере',
            'Я ранее уже интересовался различными системами и методами управления временем',
            'У меня есть собственная система управления личным временем'
        ],
        fbs: {}
    }, */
    // TEST multiple choice question
    {
        iterables: [{
                type: 'mc',
                id: 'q1',
                text: 'К признакам коррупции относится наличие у государственного гражданского служащего:',
                answers: [{
                        aId: 'q1a1',
                        aText: 'корыстной или иной личной заинтересованности.',
                        aCorrect: true,
                        aFeedback: '',
                        aOptions: ''
                    },
                    {
                        aId: 'q1a2',
                        aText: 'заинтересованности в достижении общеполезного результата.',
                        aCorrect: false,
                        aFeedback: '',
                        aOptions: ''
                    },
                    {
                        aId: 'q1a3',
                        aText: 'исключительно корыстного интереса.',
                        aCorrect: false,
                        aFeedback: '',
                        aOptions: ''
                    }
                ],
                qFeedback: ''
            },
            // TEST multiple response question
            {
                type: 'mr',
                id: 'q2',
                text: '<p>С учетом новых знаний помогите Сергею Ивановичу спланировать отпуск в следующем году:</p><ol><li>Сергей Иванович работает на младшей должности;</li><li>К началу отпуска Сергей Иванович будет иметь стаж 1 год и 2 месяца;</li><li>Он планирует уехать в отпуск на 17 дней.</li></ol><p>Выберите все параметры, которые соответствуют данным Сергея Ивановича.</p>',
                answers: [{
                        aId: 'q2a1',
                        aText: 'Сергей Иванович получит 2 оклада к отпуску.',
                        aCorrect: true,
                        aFeedback: '',
                        aOptions: ''
                    },
                    {
                        aId: 'q2a2',
                        aText: 'Сергей Иванович может взять только 30 дней основного отпуска.',
                        aCorrect: false,
                        aFeedback: '',
                        aOptions: ''
                    },
                    {
                        aId: 'q2a3',
                        aText: 'Сергей Иванович не может делить отпуск на части.',
                        aCorrect: false,
                        aFeedback: '',
                        aOptions: ''
                    },
                    {
                        aId: 'q2a4',
                        aText: 'Сергей Иванович может взять 31 день отпуска.',
                        aCorrect: false,
                        aFeedback: '',
                        aOptions: ''
                    },
                    {
                        aId: 'q2a5',
                        aText: 'Сергей Иванович получит 1 оклад к отпуску.',
                        aCorrect: false,
                        aFeedback: '',
                        aOptions: ''
                    },
                    {
                        aId: 'q2a6',
                        aText: 'Сергей Иванович может уйти в отпуск на 17 дней.',
                        aCorrect: true,
                        aFeedback: '',
                        aOptions: ''
                    }
                ],
                qFeedback: ''
            }
        ],
        fb: ''
    },
    // CASE
    {
        iterables: [{
            type: 'mc',
            id: 'c1',
            text: 'Сотрудник Департамента образования города Москвы Колокольчиков С.С. в установленный законодательством срок – до 30 апреля не представил сведения о своих доходах, расходах, об имуществе и обязательствах имущественного характера, а также такого рода сведения в отношении своей супруги и несовершеннолетних детей. Между тем, занимаемая Колокольчиковым С.С. должность входит в Перечень должностей, при замещении которых гражданские служащие обязаны представлять такого рода сведения. Сам он мотивировал позже такое свое бездействие фактом нахождения в отпуске с 17 марта по 30 апреля, а указанные сведения клятвенно обещал представить позже.',
            question: 'Совершил ли Колокольчиков С.С. правонарушение?',
            answers: [{
                    aId: 'c1a1',
                    aText: 'Да.',
                    aCorrect: true,
                    aFeedback: 'Колокольчиков С.С. действительно совершил правонарушение.'
                },
                {
                    aId: 'c1a2',
                    aText: 'Нет, поскольку находился в отпуске.',
                    aCorrect: false,
                    aFeedback: 'Проанализируйте ст. 16 Закона города Москвы от 26.01.2005 №3 и Указ Мэра Москвы от 07.09.2009 № 65-УМ оцените, в какой период (начало и конец) представляются сведения о доходах, расходах, об имуществе и обязательствах имущественного характера.'
                },
                {
                    aId: 'c1a3',
                    aText: 'Бездействие Колокольчикова можно признать правонарушением только в том случае, если будет доказано, что в период нахождения в отпуске он имел реальную возможность представить сведения, но не воспользовался ею.',
                    aCorrect: false,
                    aFeedback: 'Вы уверены, что нахождение в отпуске оправдывает Колокольчикова С.С.?'
                }
            ]
        }]
    },
    // SURVEY
    {
        name: 'Стратегии преодоления стрессовых ситуаций',
        columnsNames: ['Нет, это совсем не так', 'Скорее нет, чем да', 'Затрудняюсь ответить', 'Скорее да, чем нет', 'Да, совершенно верно'],
        columnsValues: [1, 2, 3, 4, 5],
        surveyMetricsRanges: ['низкая выраженность', 'средняя выраженность', 'высокая выраженность'],
        surveyMetrics: [{
                id: 'assertiveActions',
                nameRus: 'Ассертивные действия',
                correspondingQuestions: {
                    normalScale: [1, 10, 19, 37],
                    reverseScale: [28, 46]
                },
                ranges: [
                    [6, 17],
                    [18, 22],
                    [23, 30]
                ]
            },
            {
                id: 'socialContact',
                nameRus: 'Вступление в социальный контакт',
                correspondingQuestions: {
                    normalScale: [2, 11, 20, 29, 38, 47],
                    reverseScale: []
                },
                ranges: [
                    [6, 21],
                    [22, 25],
                    [26, 30]
                ]
            },
            {
                id: 'socialsupport',
                nameRus: 'Поиск социальной поддержки',
                correspondingQuestions: {
                    normalScale: [3, 12, 21, 30, 39, 48],
                    reverseScale: []
                },
                ranges: [
                    [6, 20],
                    [21, 24],
                    [25, 30]
                ]
            },
            {
                id: 'cautiousActions',
                nameRus: 'Осторожные действия',
                correspondingQuestions: {
                    normalScale: [4, 13, 22, 31, 40, 49],
                    reverseScale: []
                },
                ranges: [
                    [6, 17],
                    [18, 23],
                    [24, 30]
                ]
            },
            {
                id: 'impulsiveActions',
                nameRus: 'Импульсивные действия',
                correspondingQuestions: {
                    normalScale: [5, 14, 23, 32, 41],
                    reverseScale: [50]
                },
                ranges: [
                    [6, 15],
                    [16, 19],
                    [20, 30]
                ]
            },
            {
                id: 'avoidance',
                nameRus: 'Избегание',
                correspondingQuestions: {
                    normalScale: [6, 15, 24, 33, 42, 51],
                    reverseScale: []
                },
                ranges: [
                    [6, 13],
                    [14, 17],
                    [18, 30]
                ]
            },
            {
                id: 'indirectActions',
                nameRus: 'Непрямые действия',
                correspondingQuestions: {
                    normalScale: [7, 16, 25, 34, 43, 52],
                    reverseScale: []
                },
                ranges: [
                    [6, 17],
                    [18, 23],
                    [24, 30]
                ]
            },
            {
                id: 'asocialActions',
                nameRus: 'Асоциальные действия',
                correspondingQuestions: {
                    normalScale: [8, 17, 26, 35, 44, 53],
                    reverseScale: []
                },
                ranges: [
                    [6, 14],
                    [15, 19],
                    [20, 30]
                ]
            },
            {
                id: 'agressiveActions',
                nameRus: 'Агрессивные действия',
                correspondingQuestions: {
                    normalScale: [9, 18, 27, 36, 45, 54],
                    reverseScale: []
                },
                ranges: [
                    [6, 13],
                    [14, 18],
                    [19, 30]
                ]
            }
        ],
        survey: [
            'В любых сложных ситуациях вы не сдаетесь',
            'Объединяетесь с другими людьми, чтобы вместе разрешить ситуацию',
            'Советуетесь с друзьями или близкими о том, что бы они сделали, оказавшись в вашем положении',
            'Вы всегда очень тщательно взвешиваете возможные варианты решений (лучше быть осторожным, чем подвергать себя риску)',
            'Вы полагаетесь на свою интуицию',
            'Как правило, вы откладываете решение возникшей проблемы в надежде, что она разрешится сама',
            'Стараетесь держать все под контролем, хотя и не показываете этого другим',
            'Вы полагаете, что иногда необходимо действовать столь быстро и решительно, чтобы застать других врасплох',
            'Решая неприятные проблемы, выходите из себя и можете «наломать немало дров»',
            'Когда кто-либо из близких поступает с вами несправедливо, вы пытаетесь вести себя так, чтобы они не почувствовали, что вы расстроены или обижены',
            'Стараетесь помочь другим при решении ваших общих проблем',
            'Не стесняетесь при необходимости обращаться к другим людям за помощью или поддержкой',
            'Без необходимости не «выкладываетесь» полностью, предпочитая экономить свои силы',
            'Вы часто удивляетесь, что наиболее правильным является то решение, которое первым пришло в голову',
            'Иногда предпочитаете заняться чем угодно, лишь бы забыть о неприятном деле, которое нужно делать',
            'Для достижения своих целей вам часто приходится «подыгрывать» другим или подстраиваться под других людей (несколько «кривить душой»)',
            'В определенных ситуациях вы ставите свои личные интересы превыше всего, даже если это пойдет во вред другим',
            'Как правило, препятствия для решения ваших проблем или достижения желаемого сильно выводят вас из себя, можно сказать, что они просто бесят вас',
            'Вы считаете, что в сложной ситуации лучше действовать самому, чем ждать, когда ее будут решать другие',
            'Находясь в трудной ситуации, вы раздумываете о том, как поступили бы в этом случае другие люди',
            'В трудные минуты для вас очень важна эмоциональная поддержка близких людей',
            'Считаете, что во всех случаях лучше «семь и более раз отмерить, прежде чем отрезать»',
            'Вы часто проигрываете из-за того, что не полагаетесь на свои предчувствия',
            'Вы не тратите свою энергию на разрешение того, что, возможно, само по себе рассеется',
            'Позволяете другим людям думать, что они могут повлиять на вас, но на самом деле вы - крепкий орешек и никому не позволяете манипулировать собой',
            'Считаете, что полезно демонстрировать свою власть и превосходство для укрепления собственного авторитета',
            'Вас можно назвать вспыльчивым человеком',
            'Вам бывает достаточно трудно ответить отказом на чьи-либо требования или просьбы',
            'Вы полагаете, что в критических ситуациях лучше действовать сообща с другими',
            'Вы считаете, что на душе может стать легче, если поделиться с другими своими переживаниями',
            'Ничего не принимаете на веру, так как полагаете, что в любой ситуации могут быть «подводные камни»',
            'Ваша интуиция вас никогда не подводит',
            'В конфликтной ситуации убеждаете себя и других, что проблема «не стоит и выеденного яйца»',
            'Иногда вам приходится немного манипулировать людьми (решать свои проблемы, невзирая на интересы других)',
            'Бывает очень выгодно поставить другого человека в неловкое и зависимое положение',
            'Вы считаете, что лучше решительно и быстро дать отпор тем, кто не согласен с вашим мнением, чем «тянуть кота за хвост»',
            'Вы легко и спокойно можете защитить себя от несправедливых действий со стороны других, в случае необходимости сказать «нет» в ситуации эмоционального давления',
            'Вы считаете, что общение с другими людьми обогатит ваш жизненный опыт',
            'Вы полагаете, что поддержка других людей очень помогает Вам в трудных ситуациях',
            'В трудных ситуациях вы долго готовитесь и предпочитаете сначала успокоиться, а потом уже действовать',
            'В сложных ситуациях лучше следовать первому импульсу, чем долго взвешивать возможные варианты',
            'По возможности избегаете решительных действий, требующих большой напряженности и ответственности за последствия',
            'Для достижения своих заветных целей не грех и немного полукавить',
            'Ищете слабости других людей и используете их со своей выгодой',
            'Грубость и глупость других людей часто приводят вас в ярость (выводят вас из себя)',
            'Вы испытываете неловкость, когда вас хвалят или говорят комплименты',
            'Считаете, что совместные усилия с другими принесут больше пользы в любых ситуациях (при решении любых задач)',
            'Вы уверены, что в трудных ситуациях вы всегда найдете понимание и сочувствие со стороны близких людей',
            'Вы полагаете, что во всех случаях нужно следовать принципу «тише едешь, дальше будешь»',
            'Действие под влиянием первого порыва всегда хуже, чем трезвый расчет',
            'В конфликтных ситуациях предпочитаете найти какие-либо важные и неотложные дела, позволяя другим заняться решением проблемы или надеясь, что время все расставит на свои места',
            'Вы полагаете, что хитростью можно добиться порою больше, чем действуя напрямую',
            'Цель оправдывает средство',
            'В значимых и конфликтных ситуациях вы бываете агрессивным'
        ],
        fbs: {}
    },
    // PointDistribution
    {
        metrics: [{
            id: 'conservative',
            nameRus: 'Консервативный стиль',
            correspondingStatements: [1, 3, 5, 7, 9]
        }, {
            id: 'innovative',
            nameRus: 'Инновационный стиль',
            correspondingStatements: [2, 4, 6]
        }, {
            id: 'reactive',
            nameRus: 'Реактивный стиль',
            correspondingStatements: [8, 10]
        }, {
            id: 'realising',
            nameRus: 'Реализующий стиль',
            correspondingStatements: [11, 12]
        }],
        groups: [
            ['Стрессовую ситуацию я использую как возможность доказать, что я могу справиться с ней', 'В стрессовой ситуации я бываю раздражен и эмоционален'],
            ['Я предпочитаю применять стандартные и проверенные временем способы к решению задач', 'Я предпочитаю искать новые способы к решению задач'],
            ['Я бываю встревожен, обеспокоен и напряжен, когда узнаю какую-либо неожиданную новость', 'Я воспринимаю новости как возможность изменить ситуацию к лучшему'],
            ['Обращаясь к другим, я склонен соблюдать формальности, этикет', 'Обращаясь к другим, я склонен общаться неформально'],
            ['Резкие изменения могут выбивать меня из колеи: мне сложно организовать себя, начать действовать', 'В ситуации неопределенности и резких изменений обычно я сразу принимаю решение и начинаю действовать'],
            ['Стабильность, устойчивость в жизни лучше, чем резкие изменения', 'Изменения в жизни всегда к лучшему'],
            ['Мне нравится реализовывать проекты как в начале, когда много неопределенности, так и в конце, когда все предельно ясно', 'Предпочитаю приступать к проектам, когда уже ясно как его выполнять, накоплен опыт по проекту'],
            ['Я люблю задачи, в которых есть доля неопределенности требуемого результата', 'Я предпочитаю задачи, в которых четко понятен требуемый результат'],
            ['Я считаю, что принятой практики необходимо придерживаться', 'Я считаю, что принятую практику необходимо менять'],
            ['Я люблю формулировать и определять контуры новых проектов', 'Я предпочитаю доводить существующие проекты «до ума» и поддерживать существующие проекты'],
            ['Предпочитаю, чтобы все мероприятия проводились в соответствии с намеченным планом', 'Предпочитаю, чтобы план был представлен в общей формулировке и корректировался по ходу мероприятия'],
            ['Предпочитаю решать проблемы, имеющие только однозначный вариант решения', 'Мне нравится решать сложные проблемы, которые допускают неоднозначное толкование']
        ]
    },
    // Dictant slitno/razdelno
    [{
        text: 'Жизнь современных людей, не_(слитно*,раздельно)зависимо от их возраста, пола, места жительства и профессии, с каждым годом становится всё более динамичной. В_(слитно,раздельно*)связи с развитием цифровых технологий на_(слитно*,раздельно)лицо общая тенденция: мы все ежедневно потребляем огромное количество информации. Мнения учёных на_(слитно*,раздельно)счёт влияния разнообразных гаджетов на здоровье разнятся, но совершенно очевидно, что человечество движется на_(слитно*,раздельно)встречу новой эпохе, в следствие чего невозможно будет отказаться от удобных технологий. Мобильный телефон для большинства из нас на_(слитно*,раздельно)подоби_(и,е*) личного многофункционального центра: оплачиваем покупки, коммунальные платежи и налоги, совершаем любые операции со счетами в личных кабинетах, записываемся к врачу и проверяем школьные дневники. Раньше в_(слитно*,раздельно)место нескольких минут нужно было часами стоять в очередях для получения услуги или её оплаты. Сейчас даже кошелёк носить с собой не нужно в_(слитно*,раздельно)виду того, что все карточки теперь виртуальные и находятся прямо в телефоне. А москвичи получили возможность больше не терять время в очередях к кассам метро, а пополнять проездные билеты онлайн. Многие российские города совсем скоро в_(слитно*,раздельно)след за столицей введут подобные технологии. Очевидно, что в_(слитно*,раздельно)следстви_(и,е*) информатизации у нас освободилось много времени, которое можно потратить на самообразование и развитие. В этих вопросах цифровые технологии также наши первые помощники, ведь значительная часть обучения и образования сейчас реализуется в режиме онлайн. Даже не_(слитно*,раздельно)смотря на занятость, можно найти полчаса в день на дистанционный курс или аудиокнигу. А учиться человек должен в_(слитно,раздельно*)течени_(и,е*) всей жизни. Это является залогом счастливого долголетия, независимо от эпохи.',
        fbs: ["Независимо от – в данном предложении это производный предлог. Запомните его написание.", "В связи с – в данном предложении это производный предлог. Запомните его написание.", "Налицо – в данном предложении это наречие. Запомните его написание.", "Насчет – в данном предложении это производный предлог. Запомните его написание.", "Навстречу – в данном предложении это производный предлог. Запомните его написание.", "Наподобие – в данном предложении это производный предлог. Запомните его написание.", "Вместо – в данном предложении это производный предлог. Запомните его написание.", "Ввиду – в данном предложении это производный предлог. Запомните его написание.", "Вслед за – в данном предложении это производный предлог. Запомните его написание.", "Вследствие – в данном предложении это производный предлог. Запомните его написание.", "Несмотря на – в данном предложении это производный предлог. Запомните его написание.", "В течение – в данном предложении это производный предлог. Запомните его написание."]
    }],
    // LangExercise
    {
        "iterables": [{
            "id": "t0",
            "text": "Мэр города лично поздравил юных победителей городской олимпиады, отметив, что гордится смышле_(н*,нн)ыми ребятами.",
            "tip": "Это слово необходимо запомнить.",
            "fb": {
                "correct": "Слово пишется с одной буквой Н. Его необходимо запомнить.",
                "incorrect": "Это слово является исключением и всегда пишется с одной буковй Н."
            }
        }, {
            "id": "t1",
            "text": "В новогодние праздники по России выгоднее всего полететь из Сочи в Ростов_(дефис*,раздельно)на_(дефис*,раздельно)Дону.",
            "tip": "Написание географических названий следует запомнить.",
            "fb": {
                "correct": "Существительные, обозначающие некоторые географические названия, пишутся через дефис.",
                "incorrect": "Существительные, обозначающие некоторые географические названия, пишутся через дефис, например: Санкт-Петербург."
            }
        }, {
            "id": "t2",
            "text": "Москва обеспечивает электроэнергией более 15 миллионов своих жителей. Столица имеет показатель на уровне 959 киловатт_(слитно,дефис*,раздельно)часов на человека в год.",
            "tip": "Это существительное, обозначающее единицу измерения.",
            "fb": {
                "correct": "Существительные, обозначающие стороны света, партии, единицы измерения, пишутся через дефис.",
                "incorrect": "Существительные, обозначающие стороны света, партии, единицы измерения, пишутся через дефис, например: северо-восток, либерал-демократ."
            }
        }, {
            "id": "3",
            "text": "В_(слитно,дефис,раздельно*)течени_(и,е*) недели необходимо отчитаться по работе департаментов за третий квартал.",
            "tip": "Производный предлог.",
            "fb": {
                "correct": "«В течение» – производный предлог, за ним следует слово со значением времени.",
                "incorrect": "Это не существительное с предлогом."
            }
        }, {
            "id": "t4",
            "text": "В_(слитно,дефис,раздельно*)течени_(и,е*) недели необходимо отчитаться по работе д_(и,е*)партаментов за третий квартал.",
            "tip": "Производный предлог.",
            "fb": {
                "correct": "«В течение» – производный предлог, за ним следует слово со значением времени.",
                "incorrect": "Это не существительное с предлогом."
            }
        }]
    },
    // empty for video
    [{}],
    // empty for longread, rating and comment
    [{}],
    [{}],
    [{}]
]