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
                        aText: 'корыстной или иной личной заинтересованности. корыстной или иной личной заинтересованности. корыстной или иной личной заинтересованности. корыстной или иной личной заинтересованности. корыстной или иной личной заинтересованности. корыстной или иной личной заинтересованности.корыстной или иной личной заинтересованности',
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
        fb: {
            passed: 'Надеемся, что вы уже разобрались, что и резюме, и тест нужны были вовсе не для контроля того, сколько знаний было вами усвоено, а как раз для лучшего усвоения. Ведь с древних времен известно: если хочешь, чтобы люди запомнили твою мысль – повтори им ее трижды! Ну а в нашем случае, еще и в виде информации о книге, в которой уместилось все содержательное резюме трека «Ориентация на результат».',
            failed: 'Надеемся, что вы уже разобрались, что и резюме, и тест нужны были вовсе не для контроля того, сколько знаний было вами усвоено, а как раз для лучшего усвоения. Ведь с древних времен известно: если хочешь, чтобы люди запомнили твою мысль – повтори им ее трижды! Ну а в нашем случае, еще и в виде информации о книге, в которой уместилось все содержательное резюме трека «Ориентация на результат».'
        }
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
        name: 'Стрессоустойчивость',
        columnsNames: ['Никогда', 'Редко', 'Часто', 'Всегда'],
        columnsValues: [1, 2, 3, 4],
        surveyMetricsRanges: ['Низкий', 'Средний', 'Высокий', 'Очень высокий'],
        surveyMetrics: [{
            id: 'stressTolerance',
            nameRus: 'Уровень стресса',
            correspondingQuestions: {
                normalScale: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
                reverseScale: []
            },
            ranges: [
                [0, 30],
                [31, 45],
                [46, 60],
                [60, 80]
            ]
        }],
        survey: [
            'Легко ли вы раздражаетесь из-за мелочей?',
            'Нервничаете ли вы, если приходится чего-либо ждать?',
            'Краснеете ли вы, когда испытываете неловкость?',
            'Можете ли вы в раздражении обидеть кого-нибудь?',
            'Критика выводит вас из себя?',
            'Если вас толкнут в общественном транспорте, постараетесь ли вы ответить обидчику?',
            'Вы постоянно чем-то занимаетесь, всё ваше время занято деятельностью?',
            'Часто ли вы нарушаете правила пунктуальности, например, опаздываете или приходите раньше времени?',
            'Часто ли вы перебиваете других, дополняете высказывания?',
            'Страдаете ли вы отсутствием аппетита?',
            'Часто ли вы испытываете беспричинное беспокойство?',
            'Кружится ли у вас голова по утрам?',
            'Испытываете ли вы постоянную усталость?',
            'Даже после продолжительного сна вы чувствуете себя разбитым?',
            'У вас возникают проблемы с сердечной деятельностью?',
            'Страдаете ли вы от болей в области спины и шеи?',
            'Часто ли вы барабаните пальцами по столу и покачиваете ногой в положении сидя?',
            'Мечтаете ли вы о признании, хотите ли вы, чтобы вас хвалили за то, что вы делаете?',
            'Считаете ли вы, что вы лучше других, но этого, как правило, никто не замечает?',
            'Вы не можете сконцентрироваться на необходимом деле?'
        ],
        fbs: [{
            type: 'metricsResultsDescription',
            content: {
                stressTolerance: [
                    'Вы живете спокойно и разумно, справляетесь с проблемами, которые преподносит жизнь. Вы не страдаете ни ложной скромностью, ни излишним честолюбием. Однако советуем вам проверить свои ответы вместе с хорошо знающим вас человеком: люди, имеющие такую сумму баллов, часто видят себя в розовом свете.',
                    'Для вашей жизни характерны активная деятельность и напряжение. Вы подвержены стрессу как в положительном смысле слова (стремитесь добиться чего-либо), так и в отрицательном (хватает проблем и забот). По всей видимости, вы и впредь будете жить так же, постарайтесь только выделить немного времени для себя.',
                    'Ваша жизнь – непрекращающаяся борьба. Вы честолюбивы и мечтаете о карьере. Вы довольно зависимы от чужих оценок, что постоянно держит вас в состоянии стресса. Подобный образ жизни, может быть, приведет вас к успеху на личном фронте или в профессиональном отношении, но вряд ли это оставит вам радость. Все утечет, как вода сквозь пальцы. Избегайте ненужных споров, подавляйте гнев, вызванный мелочами, не пытайтесь всегда добиться максимума, время от времени отказывайтесь от того или иного плана.',
                    'Вы живете, как шофер, который жмет одновременно и на газ, и на тормоз. Поменяйте жизненный уклад. Испытываемый вами стресс угрожает и вашему здоровью, и вашему будущему. Если перемена образа жизни представляется вам невозможной, постарайтесь хотя бы отреагировать на рекомендацию.'
                ]
            }
        }]
    },
    // PointDistribution
    {
        metrics: [{
            id: 'spontaneous',
            nameRus: 'Стихийный тип планирования',
            description: `
            <h3>Сильные стороны</h3>
            <ul>
            <li>Видит задачу целиком</li>
            <li>Стратегически мыслит</li>
            <li>Способен убедить окружающих в важности задачи</li>
            <li>Способен повлиять на решение</li>
            <li>Быстро приступает к достижению цели</li>
            <li>Является драйвером любого процесса</li>
            <li>Умеет быстро разобраться в сути</li>
            <li>Готов работать на высоких скоростях</li>
            <li>Хорошо адаптируется к многозадачности</li>
            <li>Является инициатором изменений</li>
            </ul>
            <h3>Рекомендации</h3>
            <ul>
            <li>Прежде чем с энтузиазмом приступать к задаче, необходимо все взвесить или попросить коллег детализировать суть задачи, даже если она вдохновляет с первого взгляда.</li>
            <li>При оценке проектов уделяйте больше внимания не только яркой и убедительной форме подачи, но и сути проекта, чтобы не упустить важные идеи, хорошие предложения, скрытые за неубедительной коммуникацией, а также не упустить возможные риски.</li>
            <li>Выделяйте время на важные дела, на время подумать о долгосрочных задачах, когда тебя никто не отвлекает.</li>
            <li>Постарайтесь снизить объем ежедневных коммуникаций и увеличить объем для самостоятельной работы, анализа.</li>
            <li>При обозначении сроков достижении цели, сначала определите ключевые шаги и сколько времени потребуется на их осуществление, чтобы сроки глобальной цели были более корректными.</li>
            <li>Помните, что при выполнении вспомогательной, а не ключевой роли в любой задаче вы развиваете иные компетенции, которые пригодятся вам в будущем.</li>
            <li>При презентации проекта или постановке задачи старайтесь запрашивать обратную связь от коллег, чтобы учесть нюансы, которые можно увидеть только благодаря их экспертизе.</li>
            <li>При планировании используйте инструменты каскадирования целей от глобальных к ежедневному планированию, это позволит в процессе планирования увидеть детали, риски, оценить собственную мотивацию.</li>
            <li>При расстановке приоритетов старайтесь фокусировать на цифрах, сроках, учитывайте ресурсы, которыми располагаете.</li>
            <li>Неудачи и ошибки не воспринимайте эмоционально и на свой счет, просто спокойно проанализируйте полученный опыт, сформируйте свое личное правило, чтобы избегать ошибок в будущем.</li>
            </ul>
            `,
            correspondingStatements: [1, 5, 9, 13, 17, 21, 25, 29, 33, 37]
        }, {
            id: 'creative',
            nameRus: 'Творческий тип планирования',
            description: `
            <h3>Сильные стороны</h3>
            <ul>
            <li>Обладает мотивацией работы в команде</li>
            <li>Выбирает нестандартные методы в достижении целей</li>
            <li>Интересуется мнением окружающих по тому или иному вопросу</li>
            <li>Умеет интегрировать всех заинтересованных в решение задачи</li>
            <li>В задаче сначала видит возможности, а не ограничения</li>
            <li>Самую рутинную задачу может превратить в интересный проект</li>
            <li>Знает мотивы других и понимает, как можно направить их для достижения цели</li>
            <li>Умеет найти выход из, казалось бы, безвыходной ситуации</li>
            <li>Быстро адаптируется к режиму многозадачности</li>
            <li>Увлекается процессом и выполняет задачи с вдохновением</li>
            </ul>
            <h3>Рекомендации</h3>
            <ul>
            <li>Старайтесь четко формулировать цели и определять критерии их достижения, чтобы не увлечься процессом.</li>
            <li>При выполнении задач старайтесь сначала выполнить свои задачи, а затем помогать другим в выполнении их задач.</li>
            <li>Научитесь грамотным техникам отказа в переговорах, чтобы сохранить отношения с окружающими, но в то же время беречь свой временной ресурс.</li>
            <li>При выборе новых методов достижения цели, сначала оцените насколько они ресурсозатратны и примите решение насколько они актуальны в текущей ситуации.</li>
            <li>При расстановке приоритетов, старайтесь чтобы большая часть задач у вас была в статусе «важно», а не «срочно».</li>
            <li>Выделяйте время на самостоятельную работу: анализ, планирование, оценку рисков.</li>
            <li>Прежде чем обсуждать задачи с коллегами - выработайте собственное видение и мнение в отношении задачи и способах ее решения.</li>
            <li>Проанализируйте свои мотивы и определите как достижение рабочей цели позволит удовлетворить ваши личные цели.</li>
            <li>Старайтесь оценивать риски для каждой задачи, это позволит грамотно распределить время и ресурсы в случае наступления рисков.</li>
            <li>Прежде чем вовлекать коллегу в обсуждение или выполнение задачи, сначала оцените его роль, насколько эта роль важна, не дублируется ли она, ведь большое количество исполнителей не всегда коррелирует с эффективностью.</li>
            </ul>
            `,
            correspondingStatements: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38]
        }, {
            id: 'thorough',
            nameRus: 'Детальный тип планирования',
            description: `
            <h3>Сильные стороны</h3>
            <ul>
            <li>Скурпулезен</li>
            <li>Все детально планирует</li>
            <li>Придерживается правил и регламентов</li>
            <li>Не «бросает слов на ветер»</li>
            <li>Не любит рисковать</li>
            <li>Выполняет обещания</li>
            <li>Надёжен в исполнении</li>
            <li>Умеет слушать и слышать задачу</li>
            <li>Хорошо работает с цифрами</li>
            <li>Успешно работает с задачами, требующими усидчивости и сосредоточенности</li>
            </ul>
            <h3>Рекомендации</h3>
            <ul>
            <li>Старайтесь начинать планировать с больших дел и понимания куда хотите прийти, чтобы лишние детали на первом же этапе не увели вас в сторону.</li>
            <li>Прежде чем опираться на регламент в планировании, уточняйте, не потерял ли он свою актуальность, чтобы не тратить время понапрасну.</li>
            <li>При создании плана будьте готовы, что цели могут поменяться из -за внешних обстоятельств и это нормальная, часто встречающаяся ситуация.</li>
            <li>Прежде чем уходить в детализацию уточните у заказчика возможны ли изменения, корректировки в процессе реализации плана.</li>
            <li>Посещайте публичные мероприятия и расширенные совещания, они позволят вам понять расстановку сил и верно расставить приоритеты в делах.</li>
            <li>Старайтесь реагировать спокойно на изменения планов и новые задачи, сегодняшний век — это век постоянных изменений, выживает тот, кто может быстро адаптироваться.</li>
            <li>Составьте список инициатив, которые вы могли бы предложить по своему рабочему процессу, как бы эти инициативы повлияли на повышение эффективности?</li>
            <li>Меньше уделяйте времени на обдумывание того, что вас что-то не устраивает в текущей ситуации, переключайте себя на вопрос, а что я могу предпринять, в связи с этим?</li>
            <li>Прежде чем выполнять задачу, спросите у заказчика, сможете ли вы обдумать и задать уточняющие вопросы позднее, получите его одобрение.</li>
            <li>Оставляйте 40% времени в плане на непредвиденные ситуации, это позволит переключаться на форс-мажоры без лишних временных и эмоциональных потерь.</li>
            </ul>
            `,
            correspondingStatements: [3, 7, 11, 15, 19, 23, 27, 31, 35, 39]
        }, {
            id: 'balanced',
            nameRus: 'Взвешенный тип планирования',
            description: `
            <h3>Сильные стороны</h3>
            <ul>
            <li>Ориентирован на результат</li>
            <li>Глубоко погружается в суть задачи</li>
            <li>Расчётлив в ресурсах</li>
            <li>Великолепно расставляет приоритеты в делах</li>
            <li>Перфекционист</li>
            <li>Знает как именно лучше достичь цели</li>
            <li>Хорошо оценивает риски</li>
            <li>Работает на высоких скоростях</li>
            <li>Берётся за те задачи, в которых уверен</li>
            <li>Прогнозирует и видит наперед</li>
            </ul>
            <h3>Рекомендации</h3>
            <ul>
            <li>Старайтесь сменить фокус с требований к коллегам, на раскрытие их потенциала, на который вы можете рассчитывать в текущей ситуации, что позволит уйти от разочарований и сохранить контакты.</li>
            <li>При расстановке приоритетов старайтесь в раздел «важно» помещать и отношения с коллегами, так как в будущем они могут сыграть ключевую роль в достижении каких-то целей.</li>
            <li>Сформулируйте свои личные цели, попробуйте найти баланс между работой и личной жизнью, найдите удовлетворение в текущей ситуации, а не только в будущем.</li>
            <li>Оценка рисков при планировании крайне важна, но иногда мешает воплотить в жизнь хорошие идеи, старайтесь начинать оценивать задачу с возможностей, а не препятствий.</li>
            <li>Находите в своей деятельности время 1 – минутные простые дела: разговор о личных планах, чашка чая, взгляд в окно.</li>
            <li>Определите перечень задач, которые вы можете делегировать коллегам, используйте правило 75%, которое гласит: если коллега способен выполнить задачу на 75% эффективности по сравнению с вами, задачу уже стоит передавать, остальному коллега научится посредством практики.</li>
            <li>Регулярно проводите индивидуальные беседы с коллегами узнавайте, в каких проектах они могут быть наиболее эффективны.</li>
            <li>Станьте наставником для кого-то из коллег, передайте свой опыт и сделайте так, чтобы он стал лучше вас в каком-то вопросе, а затем подключите к общей задаче.</li>
            <li>Попробуйте пожить сегодняшним днем и не думать о рисках в будущем, риски будущего могут не наступить, а сегодняшний день вы уже точно не сможете вернуть.</li>
            <li>Старайтесь терпеливо относиться к ошибкам в планировании, к задержке сроков исполнения, перераспределяйте энергию в конструктивное русло, думайте не о том, почему кто-то виноват, а что человек может сделать чтобы улучшить уже сложившуюся ситуацию.</li>
            </ul>
            `,
            correspondingStatements: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
        }],
        groups: [{
                name: 'РЕЗУЛЬТАТ',
                content: ['Я чаще представляю себе конечный результат цели и не очень люблю думать о детальных шагах ее достижения.', 'При обсуждении цели или задачи я вовлекаю коллег, чтобы посоветоваться, как лучше поступить.', 'Если меня спросят, что лучше: поменять, упразднить процесс или оставить прежним, я скорее склонюсь к его сохранению и уже проверенному алгоритму действий.', 'При планировании, цифры и конкретный результат для меня самый важный критерий.']
            },
            {
                name: 'ВЗАИМОДЕЙСТВИЕ С КОЛЛЕГАМИ',
                content: ['Мне нравится ярко подать событие или рассказать о проекте, чтобы произвести впечатление на окружающих, даже если я не обладаю детальной информацией.', 'Мне важно, как воспримут цель или события окружающие, соблюдены ли их интересы.', 'Я скорее реагирую на цели и задачи других нежели являюсь инициатором новых целей и задач.', 'Мне свойственно быть требовательным к другим, так как дело важнее любых личных интересов и способностей.']
            },
            {
                name: 'ПОСТРОЕНИЕ ОТНОШЕНИЙ',
                content: ['Я считаю, что вести диалог нужно с коллегами своего уровня, а специалистам уровнем ниже ставить задачи и требовать результат.', 'При выполнении задач я часто опираюсь на поддержку коллег, ведь в команде важна поддержка друг друга.', 'Я не люблю делиться личной информацией с коллегами и при планировании предпочитаю обсуждать только рабочие вопросы.', 'Мне свойственно оценивать коллег по уровню их компетентности или их профессиональным способностям.']
            },
            {
                name: 'ПРИОРИТЕТЫ',
                content: ['Я быстро загораюсь какой-то идеей, но столкнувшись со сложностями часто теряю к ней интерес.', 'При планировании дел я чаще думаю о том, кто будет их выполнять, и, как их личные качества или интересы скажутся на выполнении.', 'Я предпочитаю заниматься запланированными задачами своевременно и не довожу их до аврала.', 'Прежде чем обсуждать с кем-то задачи, я предпочитаю самостоятельно в них разобраться.']
            },
            {
                name: 'ОРИЕНТАЦИЯ НА РЕЗУЛЬТАТ',
                content: ['Мне свойственно браться за разные проекты с энтузиазмом, но доводить их все до конца не всегда получается.', 'Мне свойственно иногда нарушать сроки из-за того, что другие (коллеги) не могут выполнить свою часть работы вовремя.', 'Мне требуется время, чтобы начать участие в новом проекте или выполнять новую задачу, которую я никогда не делал.', 'На длинных совещаниях мне часто хочется задавать конкретные или критичные вопросы, чтобы быстрее продвигать встречу к нужному результату.']
            },
            {
                name: 'ПОГЛОТИТЕЛИ И ОТВЛЕКАЮЩИЕ ФАКТОРЫ',
                content: ['Я готов с головой уйти в дело, которое меня увлекает, могу импульсивно включиться в проект или мероприятие, иногда это происходит в ущерб другим запланированным задачам.', 'Меня часто отвлекают от дел личными просьбами мои коллеги или руководитель, а мне хочется их поддержать.', 'Я не люблю работать в режиме многозадачности и постоянного стресса, предпочитаю выстраивать детальный план и опираться на него в работе.', 'Я не люблю тратить время в пустую, для меня важно, чтобы все качественно выполняли работу и были полностью сосредоточены на задачах.']
            },
            {
                name: 'ОЦЕНКА РИСКОВ',
                content: ['Влияние и политика, на мой взгляд, в выполнении и реализации планов при достижении целей играет важную роль.', 'Я оптимистично смотрю в будущее и верю, что человеку доступно многое, стоит только захотеть.', 'Я часто думаю о безопасности и правильности процессов и стараюсь тщательно синхронизировать свои шаги с регламентами и законами.', 'Мне свойственно оценивать риски и не доверять обещаниям.']
            },
            {
                name: 'СВОЙСТВА ЛИЧНОСТИ',
                content: ['Я работаю эффективнее в случае, если мне отведена ключевая, а не вспомогательная роль.', 'Мне важно, чтобы планы и задачи были интересными, поэтому при выборе методов я предпочитаю проявлять творческий подход.', 'Обычно, я долго вынашиваю решение, сомневаюсь и собираю всю детальную информацию, прежде чем начать действовать.', 'Мои ожидания результата чаще бывают выше, чем возможности других людей.']
            },
            {
                name: 'ФОКУС ВНИМАНИЯ',
                content: ['При планировании и управлении временем, скорее, больше внимания я уделю вопросу «Когда нужно сделать?».', 'При планировании и управлении временем, скорее, больше внимания я уделю вопросу «Кому конкретно это нужно сделать?».', 'При планировании и управлении временем, скорее, больше внимания я уделю вопросу «Как нужно сделать?».', 'При планировании и управлении временем, скорее, больше внимания я уделю вопросу «Что конкретно нужно сделать?».']
            },
            {
                name: 'ПРЕДПОЧТЕНИЯ В ПЛАНИРОВАНИИ',
                content: ['У меня хорошо получается делегировать задача другим людям, так как мне интереснее работать на глобальном уровне, а не заниматься рутинными деталями.', 'Мне удается выстроить доверительный контакт с коллегами, поэтому нам проще обсуждать планы и задачи.', 'Я не люблю публичные встречи и совещания, которые отнимают время и, по возможности, стараюсь их избегать, занимаясь своей привычной работой.', 'Обычно я великолепно разбираюсь в вопросе и требую этого от остальных, так как для планирования любых шагов нужна глубочайшая экспертиза.']
            }
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