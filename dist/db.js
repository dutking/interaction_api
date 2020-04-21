const db = [{
        name: 'Стратегии преодоления стрессовых ситуаций',
        columnsNames: ['Нет, это совсем не так', 'Скорее нет, чем да', 'Затрудняюсь ответить', 'Скорее да, чем нет', 'Да, совершенно верно'],
        columnsValues: [1, 2, 3, 4, 5],
        surveyMetrics: [{
                id: 'assertiveActions',
                nameRus: 'Ассертивные действия',
                correspondingQuestions: {
                    normalScale: [1, 10, 19, 37],
                    reverseScale: [28, 46]
                },
                ranges: {
                    low: [6, 17],
                    medium: [18, 22],
                    high: [23, 30]
                }
            },
            {
                id: 'socialContact',
                nameRus: 'Вступление в социальный контакт',
                correspondingQuestions: {
                    normalScale: [2, 11, 20, 29, 38, 47],
                    reverseScale: []
                },
                ranges: {
                    low: [6, 21],
                    medium: [22, 25],
                    high: [26, 30]
                }
            },
            {
                id: 'socialsupport',
                nameRus: 'Поиск социальной поддержки',
                correspondingQuestions: {
                    normalScale: [3, 12, 21, 30, 39, 48],
                    reverseScale: []
                },
                ranges: {
                    low: [6, 20],
                    medium: [21, 24],
                    high: [25, 30]
                }
            },
            {
                id: 'cautiousActions',
                nameRus: 'Осторожные действия',
                correspondingQuestions: {
                    normalScale: [4, 13, 22, 31, 40, 49],
                    reverseScale: []
                },
                ranges: {
                    low: [6, 17],
                    medium: [18, 23],
                    high: [24, 30]
                }
            },
            {
                id: 'impulsiveActions',
                nameRus: 'Импульсивные действия',
                correspondingQuestions: {
                    normalScale: [5, 14, 23, 32, 41],
                    reverseScale: [50]
                },
                ranges: {
                    low: [6, 15],
                    medium: [16, 19],
                    high: [20, 30]
                }
            },
            {
                id: 'avoidance',
                nameRus: 'Избегание',
                correspondingQuestions: {
                    normalScale: [6, 15, 24, 33, 42, 51],
                    reverseScale: []
                },
                ranges: {
                    low: [6, 13],
                    medium: [14, 17],
                    high: [18, 30]
                }
            },
            {
                id: 'indirectActions',
                nameRus: 'Непрямые действия',
                correspondingQuestions: {
                    normalScale: [7, 16, 25, 34, 43, 52],
                    reverseScale: []
                },
                ranges: {
                    low: [6, 17],
                    medium: [18, 23],
                    high: [24, 30]
                }
            },
            {
                id: 'asocialActions',
                nameRus: 'Асоциальные действия',
                correspondingQuestions: {
                    normalScale: [8, 17, 26, 35, 44, 53],
                    reverseScale: []
                },
                ranges: {
                    low: [6, 14],
                    medium: [15, 19],
                    high: [20, 30]
                }
            },
            {
                id: 'agressiveActions',
                nameRus: 'Агрессивные действия',
                correspondingQuestions: {
                    normalScale: [9, 18, 27, 36, 45, 54],
                    reverseScale: []
                },
                ranges: {
                    low: [6, 13],
                    medium: [14, 18],
                    high: [19, 30]
                }
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
    /* {
        metrics: [{
            id: 'conservative',
            nameRus: 'Консервативный стиль',
            correspondingStatements: [3, 7, 11, 16, 20, 21, 23, 25, 27, 29, 31, 34, 40]
        }, {
            id: 'innovative',
            nameRus: 'Инновационный стиль',
            correspondingStatements: [4, 8, 12, 15, 19, 22, 24, 26, 28, 30, 32, 33, 39]
        }, {
            id: 'reactive',
            nameRus: 'Реактивный стиль',
            correspondingStatements: [2, 5, 9, 14, 17, 35, 38, 41, 44, 46, 47, 50, 52]
        }, {
            id: 'realising',
            nameRus: 'Реализующий стиль',
            correspondingStatements: [1, 6, 10, 13, 18, 36, 37, 42, 43, 45, 48, 49, 51]
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
            ['Предпочитаю решать проблемы, имеющие только однозначный вариант решения', 'Мне нравится решать сложные проблемы, которые допускают неоднозначное толкование'],
            ['Мне не надоедает выполнять длительные, требующие внимания к деталям, дела', 'Мне быстро надоедает выполнять длительные, требующие внимания к деталям, дела'],
            ['Человек, который ведет ровную размеренную жизнь без неожиданностей, на самом деле должен быть благодарен судьбе', 'Предпочитаю, когда жизнь полна неожиданностей'],
            ['Я люблю делать все привычным образом', 'Люблю находить новые подходы к решению задач'],
            ['Прежде чем действовать, как правило, все тщательно обдумываю', 'Бывает, что я сначала действую и лишь затем анализирую ситуацию'],
            ['Я люблю делать что-то новое, и обычно у меня это получается', 'Предпочитаю делать все проверенным способом'],
            ['Мне необходимо тратить много энергии и сил на усвоение инноваций и изменений', 'При внедрении нового, я практически не сопротивляюсь переменам, начинаю думать и действовать по-новому'],
            ['В большинстве случаев, если изменения инициированы другими, я поддерживаю новые идеи и вижу их объективную необходимость', 'Если изменения инициированы другими, мне необходимо время, чтобы принять их'],
            ['Я предпочитаю нововведения стабильности', 'Я предпочитаю стабильность нововведениям'],
            ['Я стараюсь избегать изменений, которые я не принимаю, поскольку это приносит мне дискомфорт', 'Изменения обычно не вызывают во мне дискомфорта, даже если я не вижу их объективной необходимости'],
            ['В стрессовой ситуации я всегда сосредотачиваюсь на проблеме и думаю, как ее можно решить', 'В стрессовой ситуации я обычно раздражен и эмоционален'],
            ['Для меня хорошим стимулом являются новые идеи и «вызовы» для решения трудных задач', 'Я осторожно отношусь к любым изменениям, усматривая в них потенциальную опасность «изменений только ради изменений»'],
            ['Мне нравится развивать уже имеющиеся навыки и накапливать опыт', 'Мне нравится получать новые знания и навыки'],
            ['Я с удовольствием принимаю новые идеи и возможности, которые они мне могут дать', 'Я являюсь сдерживающей силой для энтузиазма других и часто вижу последствия, о которых другие не говорят'],
            ['В ситуации неприятных для меня изменений, я нахожу личную выгоду и принимаю их', 'В ситуации неприятных для меня изменений вначале я внутренне сопротивляюсь и стараюсь находить возможности действовать по-старому']
        ]
    }, */
    // empty for longread, rating and comment
    [{}],
    [{}],
    [{}]
]