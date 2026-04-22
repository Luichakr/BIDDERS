export type Locale = 'uk' | 'en' | 'pl'

export type MessageKey =
  | 'navHome'
  | 'navCatalog'
  | 'navTransit'
  | 'navCalculator'
  | 'navLot'
  | 'headerContact'
  | 'homeLoading'
  | 'homeLaunchTitle'
  | 'heroKicker'
  | 'heroTitle'
  | 'heroTitlePartOne'
  | 'heroTitlePartTwo'
  | 'heroTitleAccent'
  | 'heroLead'
  | 'heroPrimary'
  | 'heroSecondary'
  | 'heroScenarioOneTitle'
  | 'heroScenarioOneDesc'
  | 'heroScenarioTwoTitle'
  | 'heroScenarioTwoDesc'
  | 'heroScenarioThreeTitle'
  | 'heroScenarioThreeDesc'
  | 'metricReadiness'
  | 'metricDecisionTime'
  | 'metricRiskEvents'
  | 'highlightOneTitle'
  | 'highlightOneDescription'
  | 'highlightTwoTitle'
  | 'highlightTwoDescription'
  | 'highlightThreeTitle'
  | 'highlightThreeDescription'
  | 'launchStepOneTitle'
  | 'launchStepOneDescription'
  | 'launchStepTwoTitle'
  | 'launchStepTwoDescription'
  | 'launchStepThreeTitle'
  | 'launchStepThreeDescription'
  | 'launchStepFourTitle'
  | 'launchStepFourDescription'
  | 'launchStepFiveTitle'
  | 'launchStepFiveDescription'
  | 'finalCtaTitle'
  | 'finalCtaDescription'
  | 'finalCtaButton'
  | 'trustOneTitle'
  | 'trustOneDesc'
  | 'trustTwoTitle'
  | 'trustTwoDesc'
  | 'trustThreeTitle'
  | 'trustThreeDesc'
  | 'trustFourTitle'
  | 'trustFourDesc'
  | 'partnersTitle'
  | 'homeTransitTitle'
  | 'homeTransitDesc'
  | 'homeTransitCta'
  | 'catalogTitle'
  | 'transitTitle'
  | 'resultsSuffix'
  | 'filterAuction'
  | 'filterDamage'
  | 'filterFuel'
  | 'filterYear'
  | 'filters'
  | 'reset'
  | 'sortLabel'
  | 'bidNow'
  | 'buyNow'
  | 'currentBid'
  | 'estValue'
  | 'sourceLot'
  | 'noResults'
  | 'footerTagline'
  | 'footerTaglineLong'
  | 'footerNavigation'
  | 'footerContact'
  | 'footerLocation'
  | 'footerLegal'
  | 'footerTelegram'
  | 'footerYoutube'
  | 'footerInstagram'
  | 'footerFacebook'
  | 'footerBlog'
  | 'footerDirections'
  | 'footerDirectionUsa'
  | 'footerDirectionChina'
  | 'footerDirectionEurope'
  | 'footerDirectionMoto'
  | 'footerAddress'
  | 'footerCopyright'
  | 'footerPrivacy'
  | 'footerTerms'
  | 'lotTitle'
  | 'lotDescription'
  | 'lotCurrentLot'
  | 'budgetKicker'
  | 'budgetTitle'
  | 'budgetRangeOne'
  | 'budgetRangeTwo'
  | 'budgetRangeThree'
  | 'budgetOneItemOne'
  | 'budgetOneItemTwo'
  | 'budgetOneItemThree'
  | 'budgetTwoItemOne'
  | 'budgetTwoItemTwo'
  | 'budgetTwoItemThree'
  | 'budgetThreeItemOne'
  | 'budgetThreeItemTwo'
  | 'budgetThreeItemThree'
  | 'budgetCta'
  | 'whyKicker'
  | 'whyTitle'
  | 'whyLead'
  | 'whyPointOne'
  | 'whyPointTwo'
  | 'whyPointThree'
  | 'whyPointFour'
  | 'whyPointFive'
  | 'whyPointSix'
  | 'whyStatOneValue'
  | 'whyStatOneLabel'
  | 'whyStatTwoValue'
  | 'whyStatTwoLabel'
  | 'whyStatThreeValue'
  | 'whyStatThreeLabel'
  | 'whyStatFourValue'
  | 'whyStatFourLabel'
  | 'navInStock'
  | 'navBlog'
  | 'navCases'
  | 'navContacts'
  | 'headerPrimaryNavAria'
  | 'headerSocialAria'
  | 'headerLanguageSwitcherAria'
  | 'headerToggleMenu'
  | 'headerMobileNavAria'
  | 'headerMenuLabel'
  | 'headerMenuClose'
  | 'cookieAriaLabel'
  | 'cookieTitle'
  | 'cookieText'
  | 'cookieNecessary'
  | 'cookieAccept'
  | 'cookieDetails'
  | 'seoHomeTitle'
  | 'seoHomeDescription'
  | 'routeInStockAlt'
  | 'routeTransitAlt'
  | 'routeAuctionAlt'
  | 'routeCatalogAlt'
  | 'transitCtaAlt'
  | 'stockCtaAlt'
  | 'homeB2cNameError'
  | 'homePhoneRequiredError'
  | 'homeB2cSuccess'
  | 'homeB2bFormatError'
  | 'homeB2bSuccess'
  | 'homeHeroEyebrow'
  | 'homeHeroTitleLineOne'
  | 'homeHeroTitleLineTwo'
  | 'homeHeroTitleAccent'
  | 'homeHeroDominant'
  | 'homeHeroLead'
  | 'homeHeroPrimaryCta'
  | 'homeHeroSecondaryCta'
  | 'homeHeroMicro'
  | 'homeHeroStatSavings'
  | 'homeHeroStatDeliveryDays'
  | 'homeHeroStatYears'
  | 'homeTrustAria'
  | 'homeTrustOneTitle'
  | 'homeTrustOneDesc'
  | 'homeTrustTwoTitle'
  | 'homeTrustTwoDesc'
  | 'homeTrustThreeTitle'
  | 'homeTrustThreeDesc'
  | 'homeTrustFourTitle'
  | 'homeTrustFourDesc'
  | 'homeRouteKicker'
  | 'homeRouteTitle'
  | 'homeRouteLead'
  | 'homeRoutePillStock'
  | 'homeRouteStockTitle'
  | 'homeRouteStockDesc'
  | 'homeRoutePillTransit'
  | 'homeRouteTransitTitle'
  | 'homeRouteTransitDesc'
  | 'homeRoutePillOrder'
  | 'homeRouteOrderTitle'
  | 'homeRouteOrderDesc'
  | 'homeRoutePillCatalog'
  | 'homeRouteCatalogTitle'
  | 'homeRouteCatalogDesc'
  | 'homeRouteViewCarsCta'
  | 'homeRouteGetEstimateCta'
  | 'homeScenarioHero'
  | 'homeScenarioOrder'
  | 'homeScenarioFinalCta'
  | 'homeScenarioSticky'
  | 'homeFinalTag'
  | 'homeFinalTitle'
  | 'homeFinalTitleAccent'
  | 'homeFinalLead'
  | 'homeFinalPrimaryCta'
  | 'homeFinalMicro'
  | 'homeStickyCta'
  | 'homeModalB2cAria'
  | 'homeModalB2cTitle'
  | 'homeModalNameLabel'
  | 'homeModalPhoneLabel'
  | 'homeModalBudgetLabel'
  | 'homeModalBudgetPlaceholder'
  | 'homeModalScenarioLabel'
  | 'homeModalCommentLabel'
  | 'homeModalAutoClose'
  | 'homeModalSending'
  | 'homeModalSubmit'
  | 'homeModalB2bAria'
  | 'homeModalB2bTitle'
  | 'homeModalCompanyLabel'
  | 'homeModalFormatLabel'
  | 'homeTransitKicker'
  | 'homeTransitHeading'
  | 'homeTransitLead'
  | 'homeTransitEta'
  | 'homeTransitCtaAll'
  | 'homeTransitBadge'
  | 'homeTransitCardViewAll'
  | 'homeTransitCardMore'
  | 'homeTransitCtaViewAll'
  | 'homeStockKicker'
  | 'homeStockHeading'
  | 'homeStockLead'
  | 'homeStockLocation'
  | 'homeStockCtaAll'
  | 'homeStockBadge'
  | 'homeStockCardViewAll'
  | 'homeStockCardViewAllDesc'
  | 'homeStockCardViewAllCta'
  | 'homeStockLiveQuestion'
  | 'homeStockLiveSchedule'
  | 'homeCatalogKicker'
  | 'homeCatalogHeading'
  | 'homeCatalogLead'
  | 'homeCatalogCta'
  | 'homeCatalogVideo'
  | 'homeCatalogVideoTime'
  | 'homeCatalogStat1Value'
  | 'homeCatalogStat1Label'
  | 'homeCatalogStat2Value'
  | 'homeCatalogStat2Label'
  | 'homeCatalogStat3Value'
  | 'homeCatalogStat3Label'
  | 'homeCatalogFeat1Title'
  | 'homeCatalogFeat1Desc'
  | 'homeCatalogFeat2Title'
  | 'homeCatalogFeat2Desc'
  | 'homeCatalogFeat3Title'
  | 'homeCatalogFeat3Desc'
  | 'homeCatalogFeat4Title'
  | 'homeCatalogFeat4Desc'
  | 'homeWhyKicker'
  | 'homeWhyHeading'
  | 'homeWhyLead'
  | 'homeProblem1Title'
  | 'homeProblem1Pain'
  | 'homeProblem1Fix'
  | 'homeProblem2Title'
  | 'homeProblem2Pain'
  | 'homeProblem2Fix'
  | 'homeProblem3Title'
  | 'homeProblem3Pain'
  | 'homeProblem3Fix'
  | 'homeProblem4Title'
  | 'homeProblem4Pain'
  | 'homeProblem4Fix'
  | 'homeProblem5Title'
  | 'homeProblem5Pain'
  | 'homeProblem5Fix'
  | 'homeHowKicker'
  | 'homeHowHeading'
  | 'homeHowLead'
  | 'homeStep1Title'
  | 'homeStep1Desc'
  | 'homeStep2Title'
  | 'homeStep2Desc'
  | 'homeStep3Title'
  | 'homeStep3Desc'
  | 'homeStep4Title'
  | 'homeStep4Desc'
  | 'homeStep5Title'
  | 'homeStep5Desc'
  | 'homeHowCta'
  | 'homeHowCtaButton'
  | 'homeAppKicker'
  | 'homeAppHeading'
  | 'homeAppLead'
  | 'homeAppFeature1'
  | 'homeAppFeature2'
  | 'homeAppFeature3'
  | 'homeAppFeature4'
  | 'homeAppCta'
  | 'homeAppLive'
  | 'homeAppRow1Label'
  | 'homeAppRow2Label'
  | 'homeAppRow3Label'
  | 'homeAppRow4Label'
  | 'homeAppRow5Label'
  | 'homeCasesKicker'
  | 'homeCasesHeading'
  | 'homeCasesLead'
  | 'homeCasesNavLabel'
  | 'homeCasesNavPrev'
  | 'homeCasesNavNext'
  | 'homeCasesRowLabel1'
  | 'homeCasesRowLabel2'
  | 'homeCasesRowLabel3'
  | 'homeCasesCardMore'
  | 'homeCasesViewportLabel'
  | 'homeCasesHint'
  | 'homeCasesFooter'
  | 'homeSocialKicker'
  | 'homeSocialHeading'
  | 'homeSocialLead'
  | 'homeLocKicker'
  | 'homeLocHeading'
  | 'homeLocLead'
  | 'homeLocMapClick'
  | 'homeLocRoute'
  | 'homeLocShowroom'
  | 'homeB2bKicker'
  | 'homeB2bHeading'
  | 'homeB2bLead'
  | 'homeB2bCard1Num'
  | 'homeB2bCard1Title'
  | 'homeB2bCard1Desc'
  | 'homeB2bCard1Item1'
  | 'homeB2bCard1Item2'
  | 'homeB2bCard1Item3'
  | 'homeB2bCard2Num'
  | 'homeB2bCard2Title'
  | 'homeB2bCard2Desc'
  | 'homeB2bCard2Item1'
  | 'homeB2bCard2Item2'
  | 'homeB2bCard2Item3'
  | 'homeB2bCta'
  | 'homeFaqKicker'
  | 'homeFaqHeading'
  | 'homeFaq1Q'
  | 'homeFaq1A'
  | 'homeFaq2Q'
  | 'homeFaq2A'
  | 'homeFaq3Q'
  | 'homeFaq3A'
  | 'homeFaq4Q'
  | 'homeFaq4A'
  | 'homeFaq5Q'
  | 'homeFaq5A'
  | 'homeFaqCtaButton'

type Messages = Record<MessageKey, string>

export const messages: Record<Locale, Messages> = {
  uk: {
    navHome: 'Головна',
    navCatalog: 'Каталог авто',
    navTransit: 'Авто в дорозі',
    navCalculator: 'Калькулятор',
    navLot: 'Лот',
    headerContact: 'Зв\'язатися',
    homeLoading: 'Завантаження...',
    homeLaunchTitle: 'Імпорт авто у 5 простих кроків',
    heroKicker: 'Аукціонна аналітична платформа',
    heroTitle: 'BIDBIDERS — ваш надійний партнер імпорту авто з США та Канади',
    heroTitlePartOne: 'Ваш надійний партнер',
    heroTitlePartTwo: 'по імпорту авто з',
    heroTitleAccent: 'США, Канади та Кореї',
    heroLead: 'Повний цикл: пошук лота, ставка, логістика та доставка під ключ із прозорою економікою покупки.',
    heroPrimary: 'Ознайомитись з пропозиціями',
    heroSecondary: 'Дивитися live workflow',
    heroScenarioOneTitle: 'В наявності',
    heroScenarioOneDesc: 'Можна подивитися сьогодні',
    heroScenarioTwoTitle: 'В дорозі',
    heroScenarioTwoDesc: 'Відстеження онлайн',
    heroScenarioThreeTitle: 'Під замовлення',
    heroScenarioThreeDesc: 'Підбір на аукціоні',
    metricReadiness: 'Готовність до ставки',
    metricDecisionTime: 'Середній час рішення',
    metricRiskEvents: 'Виявлено ризиків',
    highlightOneTitle: 'Всі аукціони в одному місці',
    highlightOneDescription: 'Copart, IAAI, Manheim та інші майданчики у єдиному інтерфейсі для швидкого підбору.',
    highlightTwoTitle: 'Повна перевірка VIN і ризиків',
    highlightTwoDescription: 'Історія, статус Title, дані продавця та оцінка пошкоджень перед ставкою.',
    highlightThreeTitle: 'Tracking доставки в реальному часі',
    highlightThreeDescription: 'Відстежуйте шлях авто від аукціону до вашого міста з актуальними статусами.',
    launchStepOneTitle: 'Оберіть авто та зробіть ставку',
    launchStepOneDescription: 'Підбираємо лоти за бюджетом і цілями, погоджуємо стратегію торгів.',
    launchStepTwoTitle: 'Оплата і викуп',
    launchStepTwoDescription: 'Проводимо оплату в США та закріплюємо лот без зайвих ризиків.',
    launchStepThreeTitle: 'Склад і фотоінспекція',
    launchStepThreeDescription: 'Авто приймається на складі, робимо детальний фотозвіт і перевірку стану.',
    launchStepFourTitle: 'Логістика та відправка',
    launchStepFourDescription: 'Організовуємо контейнер, документи та морське перевезення до Європи.',
    launchStepFiveTitle: 'Отримання авто',
    launchStepFiveDescription: 'Супроводжуємо митне оформлення та передачу авто у вашому місті.',
    finalCtaTitle: 'Готові підібрати авто під ваш бюджет',
    finalCtaDescription: 'Отримайте персональну добірку лотів, розрахунок під ключ і супровід до отримання авто.',
    finalCtaButton: 'Отримати консультацію',
    trustOneTitle: '100% прозорість',
    trustOneDesc: 'Усі платежі та документи зафіксовані на кожному етапі.',
    trustTwoTitle: 'Склади та логістика в США',
    trustTwoDesc: 'Працюємо через перевірені маршрути та порти відправлення.',
    trustThreeTitle: 'Трекинг у реальному часі',
    trustThreeDesc: 'Ви бачите стан контейнера від аукціону до Європи.',
    trustFourTitle: 'Підтримка 24/7',
    trustFourDesc: 'Команда на зв\'язку у месенджерах та по телефону.',
    partnersTitle: 'Офіційний доступ до провідних аукціонів',
    homeTransitTitle: 'Авто в дорозі',
    homeTransitDesc: 'Реальні автомобілі, які вже придбані та прямують до клієнтів.',
    homeTransitCta: 'Переглянути всі авто в дорозі',
    catalogTitle: 'Каталог авто з IAAI та COPART',
    transitTitle: 'Авто в дорозі',
    resultsSuffix: 'знайдено',
    filterAuction: 'Аукціон',
    filterDamage: 'Пошкодження',
    filterFuel: 'Паливо',
    filterYear: 'Рік',
    filters: 'Фільтри',
    reset: 'Скинути',
    sortLabel: 'Сортування',
    bidNow: 'Зробити ставку',
    buyNow: 'Купити зараз',
    currentBid: 'Поточна ставка',
    estValue: 'Оціночна вартість',
    sourceLot: 'Джерело лота',
    noResults: 'За поточними фільтрами лоти не знайдено.',
    footerTagline: 'Професійний імпорт авто з США та Канади: від ставки на аукціоні до доставки під ключ.',
    footerTaglineLong: 'Ваш надійний партнер в імпорті авто з аукціонів США, Китаю та Європи з 2013 року.',
    footerNavigation: 'Навігація',
    footerContact: 'Контакти',
    footerLocation: 'Варшава, Польща',
    footerLegal: 'Політика конфіденційності · Умови сервісу',
    footerTelegram: 'Telegram',
    footerYoutube: 'YouTube',
    footerInstagram: 'Instagram',
    footerFacebook: 'Facebook',
    footerBlog: 'Блог',
    footerDirections: 'Напрямки',
    footerDirectionUsa: 'Авто з США',
    footerDirectionChina: 'Авто з Китаю',
    footerDirectionEurope: 'Авто з Європи',
    footerDirectionMoto: 'Мото та RORO',
    footerAddress: 'Jawczyce, ul. Poznanska, 56, 05-850, Polska',
    footerCopyright: '© 2026 BIDDERS. Всі права захищено.',
    footerPrivacy: 'Політика конфіденційності',
    footerTerms: 'Умови використання',
    lotTitle: 'Маршрут лота готовий для Sprint 0',
    lotDescription: 'Ця сторінка є базою для модуля деталей лота.',
    lotCurrentLot: 'Поточний лот',
    budgetKicker: 'Підбір за бюджетом',
    budgetTitle: 'Що можна купити за вашим бюджетом?',
    budgetRangeOne: 'до $15 000',
    budgetRangeTwo: 'до $25 000',
    budgetRangeThree: 'від $25 000',
    budgetOneItemOne: 'Chevrolet Bolt EUV 2023',
    budgetOneItemTwo: 'Ford Escape Hybrid 2020',
    budgetOneItemThree: 'VW Passat 2021',
    budgetTwoItemOne: 'Jeep Grand Cherokee 2023',
    budgetTwoItemTwo: 'Ford Escape Hybrid 2026',
    budgetTwoItemThree: 'VW ID.4 2023',
    budgetThreeItemOne: 'Hummer EV SUV 2024',
    budgetThreeItemTwo: 'Jeep Grand Cherokee 4xe',
    budgetThreeItemThree: 'Tesla Model Y Long Range',
    budgetCta: 'Переглянути авто',
    whyKicker: 'Чому ми',
    whyTitle: 'Гарантована і безпечна доставка авто із США',
    whyLead: 'Працюємо з імпортом з 2013 року, маємо доступ до ключових аукціонів і повністю супроводжуємо процес.',
    whyPointOne: 'Понад 5 000 автомобілів доставлено клієнтам',
    whyPointTwo: 'Повна прозорість платежів і документів',
    whyPointThree: 'Доступ до Copart, IAAI, Manheim та інших аукціонів',
    whyPointFour: 'Власні склади у Нью-Йорку, Флориді та Техасі',
    whyPointFive: 'Юридичний супровід і підготовка до розмитнення',
    whyPointSix: 'Підтримка 24/7 у месенджерах і телефоном',
    whyStatOneValue: '13',
    whyStatOneLabel: 'Років на ринку',
    whyStatTwoValue: '40%',
    whyStatTwoLabel: 'Економія vs ЄС',
    whyStatThreeValue: '6',
    whyStatThreeLabel: 'Складів у США',
    whyStatFourValue: '45',
    whyStatFourLabel: 'Днів доставки',
    navInStock: 'Авто в наявності',
    navBlog: 'Блог',
    navCases: 'Кейси',
    navContacts: 'Контакти',
    headerPrimaryNavAria: 'Основна навігація',
    headerSocialAria: 'Соціальні мережі',
    headerLanguageSwitcherAria: 'Перемикач мови',
    headerToggleMenu: 'Відкрити меню',
    headerMobileNavAria: 'Мобільне меню',
    headerMenuLabel: 'Меню · BIDDERS',
    headerMenuClose: 'Закрити меню',
    cookieAriaLabel: 'Налаштування cookie',
    cookieTitle: 'Ми використовуємо файли cookie',
    cookieText: 'Щоб сайт працював стабільно та швидко, ми використовуємо необхідні cookie. Аналітичні cookie допомагають покращувати сервіс. Ви можете обрати формат згоди.',
    cookieNecessary: 'Лише необхідні',
    cookieAccept: 'Прийняти всі',
    cookieDetails: 'Детальніше',
    seoHomeTitle: 'Ваш надійний партнер по імпорту авто з США, Канади та Кореї | BIDDERS',
    seoHomeDescription: 'Авто під ключ від €8,000. Економія до €7,000. Доставка 45-60 днів. Каталог, авто в дорозі, авто в наявності, огляд на майданчику, застосунок для купівлі на аукціоні.',
    routeInStockAlt: 'Авто в наявності в Польщі — BIDDERS',
    routeTransitAlt: 'Авто в дорозі',
    routeAuctionAlt: 'Під замовлення з аукціону',
    routeCatalogAlt: 'Каталог авто',
    transitCtaAlt: 'Авто в дорозі до Польщі — понад 1800 варіантів',
    stockCtaAlt: 'Авто в наявності на майданчику BIDDERS',
    homeB2cNameError: 'Імʼя має містити мінімум 2 символи.',
    homePhoneRequiredError: 'Телефон є обовʼязковим.',
    homeB2cSuccess: 'Дякуємо! Ми отримали заявку і звʼяжемося з вами протягом 15 хвилин у робочий час.',
    homeB2bFormatError: 'Вкажіть формат співпраці.',
    homeB2bSuccess: 'Дякуємо! Заявку прийнято, спеціаліст B2B напряму звʼяжеться з вами для узгодження умов.',
    homeHeroEyebrow: 'BIDDERS · 13 років довіри',
    homeHeroTitleLineOne: 'Ваш надійний партнер',
    homeHeroTitleLineTwo: 'по імпорту авто з',
    homeHeroTitleAccent: 'США, Канади та Кореї',
    homeHeroDominant: 'Економте до €7,000 на купівлі авто зі США',
    homeHeroLead: 'Від €8,000 під ключ. Середній термін доставки 45–60 днів. Ви заздалегідь знаєте фінальну вартість і отримуєте повний пакет документів.',
    homeHeroPrimaryCta: 'Отримати розрахунок під ключ',
    homeHeroSecondaryCta: 'Дивитися авто',
    homeHeroMicro: 'Відповімо протягом 15 хвилин у робочий час',
    homeHeroStatSavings: 'Середня економія',
    homeHeroStatDeliveryDays: 'Днів доставки',
    homeHeroStatYears: 'Років на ринку',
    homeTrustAria: 'Чому нам довіряють',
    homeTrustOneTitle: '13 років на ринку',
    homeTrustOneDesc: 'США та Європа',
    homeTrustTwoTitle: 'Реальна вартість',
    homeTrustTwoDesc: 'Фіксуємо ціну ДО купівлі',
    homeTrustThreeTitle: 'Трекінг у реальному часі',
    homeTrustThreeDesc: 'Від порту до дому',
    homeTrustFourTitle: 'Підтримка 24/7',
    homeTrustFourDesc: 'Telegram · WhatsApp · телефон',
    homeRouteKicker: 'Маршрутизація · Choose your path',
    homeRouteTitle: 'Як ви хочете купити авто?',
    homeRouteLead: 'Оберіть сценарій — і ми покажемо наступний крок за кілька секунд.',
    homeRoutePillStock: 'В наявності',
    homeRouteStockTitle: 'Авто в наявності',
    homeRouteStockDesc: 'Можна подивитися наживо вже сьогодні на нашому майданчику.',
    homeRoutePillTransit: 'В дорозі',
    homeRouteTransitTitle: 'Авто в дорозі',
    homeRouteTransitDesc: 'Вже викуплено та рухається до Польщі. Слідкуйте за ETA.',
    homeRoutePillOrder: 'Під замовлення',
    homeRouteOrderTitle: 'Під замовлення з аукціону',
    homeRouteOrderDesc: 'Підбір, перевірка та торги під ваш бюджет — від US/EU/CN.',
    homeRoutePillCatalog: 'Каталог',
    homeRouteCatalogTitle: 'Каталог авто',
    homeRouteCatalogDesc: 'Масштабний вибір у реальному часі — 200K+ лотів на день.',
    homeRouteViewCarsCta: 'Дивитися авто',
    homeRouteGetEstimateCta: 'Отримати розрахунок',
    homeScenarioHero: 'Hero',
    homeScenarioOrder: 'Під замовлення',
    homeScenarioFinalCta: 'Фінальний CTA',
    homeScenarioSticky: 'Sticky CTA',
    homeFinalTag: 'Без зобов\'язань · Final step',
    homeFinalTitle: 'Отримайте варіанти',
    homeFinalTitleAccent: 'вже сьогодні',
    homeFinalLead: 'Залиште заявку і отримайте персональний розрахунок під ключ з прогнозом строків та економії.',
    homeFinalPrimaryCta: 'Отримати розрахунок під ключ',
    homeFinalMicro: 'Відповімо протягом 15 хвилин у робочий час',
    homeStickyCta: 'Отримати розрахунок під ключ',
    homeModalB2cAria: 'Основна форма B2C',
    homeModalB2cTitle: 'Отримати розрахунок під ключ',
    homeModalNameLabel: 'Ім\'я',
    homeModalPhoneLabel: 'Телефон',
    homeModalBudgetLabel: 'Бюджет',
    homeModalBudgetPlaceholder: 'Опціонально',
    homeModalScenarioLabel: 'Сценарій покупки',
    homeModalCommentLabel: 'Коментар',
    homeModalAutoClose: 'Вікно закриється через',
    homeModalSending: 'Відправляємо...',
    homeModalSubmit: 'Надіслати заявку',
    homeModalB2bAria: 'B2B форма',
    homeModalB2bTitle: 'Партнерство / Продаж авто',
    homeModalCompanyLabel: 'Ім\'я / Компанія',
    homeModalFormatLabel: 'Формат співпраці',
    homeTransitKicker: 'Авто в дорозі · Live tracking',
    homeTransitHeading: 'Вже у дорозі до Польщі',
    homeTransitLead: 'Викуплені лоти з трекінгом VIN, логістики та ETA прибуття.',
    homeTransitEta: 'ETA · 45–60 днів',
    homeTransitCtaAll: 'Усі авто',
    homeTransitBadge: 'В дорозі',
    homeTransitCardViewAll: 'Переглянути всі варіанти',
    homeTransitCardMore: 'Більше 1800 автомобілів в дорозі. Відкрийте повний список і оберіть найкращий варіант.',
    homeTransitCtaViewAll: 'Усі авто в дорозі',
    homeStockKicker: 'В наявності · Walk-in ready',
    homeStockHeading: 'На майданчику — сьогодні',
    homeStockLead: 'Приїжджайте, порівняйте варіанти наживо, отримайте консультацію щодо документів і фінальної вартості володіння.',
    homeStockLocation: 'Jawczyce · 05-850',
    homeStockCtaAll: 'Усі авто',
    homeStockBadge: 'В наявності',
    homeStockCardViewAll: 'Дивитися всі авто в наявності',
    homeStockCardViewAllDesc: 'Перейдіть у повний каталог авто на майданчику та оберіть варіант для огляду вже сьогодні.',
    homeStockCardViewAllCta: 'Каталог в наявності',
    homeStockLiveQuestion: 'Хочете подивитися наживо?',
    homeStockLiveSchedule: 'Записатися на огляд',
    homeCatalogKicker: 'Каталог · Copart · IAAI · Manheim',
    homeCatalogHeading: '200,000+ лотів щодня',
    homeCatalogLead: 'Найбільший вибір авто на аукціонах США та Європи. Фільтри за бюджетом, роком, пробігом, типом пошкоджень і статусом документів.',
    homeCatalogCta: 'Відкрити каталог',
    homeCatalogVideo: 'Як це працює?',
    homeCatalogVideoTime: '1 хв перегляду',
    homeCatalogStat1Value: '200K+',
    homeCatalogStat1Label: 'лотів щодня оновлення в реальному часі',
    homeCatalogStat2Value: '3+',
    homeCatalogStat2Label: 'аукціонних майданчики Copart · IAAI · Manheim',
    homeCatalogStat3Value: '24/7',
    homeCatalogStat3Label: 'моніторинг лотів під ваш запит',
    homeCatalogFeat1Title: 'Розширені фільтри',
    homeCatalogFeat1Desc: 'швидкий пошук авто під ваш бюджет',
    homeCatalogFeat2Title: 'Повна інформація',
    homeCatalogFeat2Desc: 'фото, пошкодження, статус документів',
    homeCatalogFeat3Title: 'Миттєві сповіщення',
    homeCatalogFeat3Desc: 'про нові лоти, що відповідають вашим критеріям',
    homeCatalogFeat4Title: 'Прозорі дані',
    homeCatalogFeat4Desc: 'чиста історія та реальний стан авто',
    homeWhyKicker: 'Чому ми · The Hidden Tax',
    homeWhyHeading: 'Ринок забирає гроші. Ми це закриваємо.',
    homeWhyLead: 'П\'ять болючих точок імпорту авто — і що ми робимо з кожною.',
    homeProblem1Title: 'Приховані платежі',
    homeProblem1Pain: 'Сюрпризи у кошторисі після торгів',
    homeProblem1Fix: 'Фіксований кошторис до ставки',
    homeProblem2Title: 'Проблемний лот',
    homeProblem2Pain: 'Ставка наосліп, сюрпризи після викупу',
    homeProblem2Fix: 'VIN, історія та експертиза до ставки',
    homeProblem3Title: 'Різні підрядники',
    homeProblem3Pain: 'Брокер, логіст, митник, юрист — окремо',
    homeProblem3Fix: 'Один договір. Єдина відповідальність',
    homeProblem4Title: 'Непрозорі строки',
    homeProblem4Pain: '«Скоро буде» без конкретних дат',
    homeProblem4Fix: 'Трекінг етапів у кабінеті 24/7',
    homeProblem5Title: 'Помилки в документах',
    homeProblem5Pain: 'Відмови на митниці та переробки',
    homeProblem5Fix: 'Повний супровід оформлення',
    homeHowKicker: 'Як це працює · The Process',
    homeHowHeading: 'П\'ять актів від аукціону до ключів',
    homeHowLead: 'Від підбору лота в США, Канаді, Європі чи Китаї — до передачі авто у вашому місті.',
    homeStep1Title: 'Бриф і бюджет',
    homeStep1Desc: 'Фіксуємо задачу, строки та цільовий бюджет',
    homeStep2Title: 'Підбір і перевірка',
    homeStep2Desc: 'VIN, історія та фото — до ставки',
    homeStep3Title: 'Торги та викуп',
    homeStep3Desc: 'Безпечна ставка та офіційний викуп лота',
    homeStep4Title: 'Доставка та митниця',
    homeStep4Desc: 'Контейнер, логістика та оформлення',
    homeStep5Title: 'Видача ключів',
    homeStep5Desc: 'Авто з повним пакетом документів',
    homeHowCta: 'Готові розрахувати ваш автомобіль під ключ?',
    homeHowCtaButton: 'Отримати розрахунок',
    homeAppKicker: 'Застосунок · Ваш кабінет',
    homeAppHeading: 'Керуйте угодою в один клік',
    homeAppLead: 'Лоти, ставки, AI-аналіз, трекінг доставки, документи та історія платежів — в одному місці.',
    homeAppFeature1: 'Видимість ставок у реальному часі',
    homeAppFeature2: 'Контроль етапів угоди та ETA',
    homeAppFeature3: 'Документи та платежі — прозоро',
    homeAppFeature4: 'Push-сповіщення про ключові події',
    homeAppCta: 'Отримати доступ',
    homeAppLive: 'Live · Синхронізовано',
    homeAppRow1Label: 'Lot #44821 · BMW X5',
    homeAppRow2Label: 'ETA · Контейнер MSCU',
    homeAppRow3Label: 'Митниця · Gdańsk',
    homeAppRow4Label: 'Документи',
    homeAppRow5Label: 'Платежі',
    homeCasesKicker: 'Кейси · Receipts, not promises',
    homeCasesHeading: 'Реальні кейси клієнтів',
    homeCasesLead: 'Модель, ціна під ключ, ціна на ринку, підсумкова економія.',
    homeCasesNavLabel: 'Навігація по кейсах',
    homeCasesNavPrev: 'Попередні',
    homeCasesNavNext: 'Наступні',
    homeCasesRowLabel1: 'Під ключ',
    homeCasesRowLabel2: 'Ринок Польщі',
    homeCasesRowLabel3: 'Економія',
    homeCasesCardMore: 'Дізнатися більше',
    homeCasesViewportLabel: 'Кейси клієнтів — прокрутка горизонтально',
    homeCasesHint: 'Прокрутіть, щоб побачити більше',
    homeCasesFooter: 'Всі кейси',
    homeSocialKicker: 'Стежте за нами · Live feed',
    homeSocialHeading: 'Підписуйтесь на наші соціальні мережі',
    homeSocialLead: 'Показуємо реальні авто в дорозі, огляди на майданчику та видачі клієнтам. Підписуйтесь — побачите процес зсередини.',
    homeLocKicker: 'Майданчик · Польща',
    homeLocHeading: 'Дивіться авто наживо',
    homeLocLead: 'Покажемо автомобілі, порівняємо варіанти під бюджет, пояснимо все щодо документів і строків.',
    homeLocMapClick: 'Відкрити на карті',
    homeLocRoute: 'Побудувати маршрут',
    homeLocShowroom: 'BIDDERS · SHOWROOM',
    homeB2bKicker: 'Партнерство · B2B',
    homeB2bHeading: 'Партнерьтеся або продайте авто',
    homeB2bLead: 'Для дилерів, СТО, логістів і приватних продавців.',
    homeB2bCard1Num: '01 · Партнерство',
    homeB2bCard1Title: 'Для дилерів і СТО',
    homeB2bCard1Desc: 'Спільні угоди, потік лідів, довгострокова співпраця.',
    homeB2bCard1Item1: 'Фіксована маржа на угоду',
    homeB2bCard1Item2: 'Маркетинг-підтримка та ліди',
    homeB2bCard1Item3: 'Логістичний партнер на весь ланцюг',
    homeB2bCard2Num: '02 · Продаж авто',
    homeB2bCard2Title: 'Продати своє авто',
    homeB2bCard2Desc: 'Розміщення, супровід і безпечна угода під ключ.',
    homeB2bCard2Item1: 'Оцінка за 24 години',
    homeB2bCard2Item2: 'Розміщення на наших каналах',
    homeB2bCard2Item3: 'Документальний супровід',
    homeB2bCta: 'Стати партнером / Продати авто',
    homeFaqKicker: 'FAQ · Straight answers',
    homeFaqHeading: 'Часті запитання',
    homeFaq1Q: 'Терміни доставки',
    homeFaq1A: 'Середній термін доставки 45–60 днів залежно від порту та завантаженості логістики.',
    homeFaq2Q: 'Що входить у «під ключ»',
    homeFaq2A: 'Лот, комісії, логістика, митниця, документи та видача авто у вашому місті.',
    homeFaq3Q: 'Які гарантії',
    homeFaq3A: 'Один договір на весь шлях, прозорий кошторис і перевірка VIN до ставки.',
    homeFaq4Q: 'Як працює застосунок',
    homeFaq4A: 'У кабінеті видно лоти, статуси, документи, етапи доставки та історія платежів.',
    homeFaq5Q: 'Чи можна подивитися авто наживо',
    homeFaq5A: 'Так, доступний огляд на майданчику в Jawczyce за попереднім записом.',
    homeFaqCtaButton: 'Не знайшли відповідь? Запитайте',
  },
  en: {
    navHome: 'Home',
    navCatalog: 'Catalog',
    navTransit: 'Cars in transit',
    navCalculator: 'Calculator',
    navLot: 'Lot',
    headerContact: 'Contact us',
    homeLoading: 'Loading...',
    homeLaunchTitle: 'Vehicle import in 5 simple steps',
    heroKicker: 'Auction intelligence platform',
    heroTitle: 'BIDBIDERS is your trusted partner for importing cars from the US and Canada',
    heroTitlePartOne: 'Your reliable partner',
    heroTitlePartTwo: 'for importing vehicles from',
    heroTitleAccent: 'the USA, Canada, and Korea',
    heroLead: 'End-to-end flow: lot discovery, bidding, logistics, and turnkey delivery with transparent cost control.',
    heroPrimary: 'Explore inventory',
    heroSecondary: 'See live workflow',
    heroScenarioOneTitle: 'Available now',
    heroScenarioOneDesc: 'Can be viewed today',
    heroScenarioTwoTitle: 'In transit',
    heroScenarioTwoDesc: 'Online tracking',
    heroScenarioThreeTitle: 'Custom order',
    heroScenarioThreeDesc: 'Auction-based sourcing',
    metricReadiness: 'Offer readiness',
    metricDecisionTime: 'Average decision time',
    metricRiskEvents: 'Risk events detected',
    highlightOneTitle: 'All auctions in one place',
    highlightOneDescription: 'Copart, IAAI, Manheim, and more in one interface for faster selection.',
    highlightTwoTitle: 'Full VIN and risk verification',
    highlightTwoDescription: 'History, title status, seller profile, and damage review before bidding.',
    highlightThreeTitle: 'Real-time delivery tracking',
    highlightThreeDescription: 'Track every stage from auction purchase to delivery in your city.',
    launchStepOneTitle: 'Choose a lot and place a bid',
    launchStepOneDescription: 'We shortlist vehicles by your budget and goals, then align bidding strategy.',
    launchStepTwoTitle: 'Payment and purchase',
    launchStepTwoDescription: 'We process payment in the US and secure the lot with controlled risk.',
    launchStepThreeTitle: 'Warehouse and photo inspection',
    launchStepThreeDescription: 'Vehicle arrives at the warehouse, we run checks and provide a detailed photo report.',
    launchStepFourTitle: 'Logistics and shipping',
    launchStepFourDescription: 'We arrange container loading, paperwork, and ocean transport to Europe.',
    launchStepFiveTitle: 'Vehicle handover',
    launchStepFiveDescription: 'We support customs clearance and final delivery in your city.',
    finalCtaTitle: 'Ready to source a car within your budget',
    finalCtaDescription: 'Get a tailored shortlist, turnkey cost estimate, and support until handover.',
    finalCtaButton: 'Get consultation',
    trustOneTitle: '100% transparency',
    trustOneDesc: 'Every payment and document is tracked at each step.',
    trustTwoTitle: 'US storage and logistics',
    trustTwoDesc: 'We operate through verified routes and shipping ports.',
    trustThreeTitle: 'Real-time tracking',
    trustThreeDesc: 'You can track each container from auction to Europe.',
    trustFourTitle: '24/7 support',
    trustFourDesc: 'Our team is always available via messengers and phone.',
    partnersTitle: 'Official access to leading auction platforms',
    homeTransitTitle: 'Cars in transit',
    homeTransitDesc: 'Real vehicles already purchased and heading to clients.',
    homeTransitCta: 'View all cars in transit',
    catalogTitle: 'Catalog from IAAI and COPART',
    transitTitle: 'Cars in transit',
    resultsSuffix: 'results found',
    filterAuction: 'Auction',
    filterDamage: 'Damage',
    filterFuel: 'Fuel',
    filterYear: 'Year',
    filters: 'Filters',
    reset: 'Reset',
    sortLabel: 'Sort',
    bidNow: 'Place bid',
    buyNow: 'Buy now',
    currentBid: 'Current bid',
    estValue: 'Estimated value',
    sourceLot: 'Lot source',
    noResults: 'No lots match current filters.',
    footerTagline: 'Professional vehicle import from the US and Canada: from bidding to turnkey delivery.',
    footerTaglineLong: 'Your trusted partner for importing vehicles from US, China, and Europe auctions since 2013.',
    footerNavigation: 'Navigation',
    footerContact: 'Contact',
    footerLocation: 'Warsaw, Poland',
    footerLegal: 'Privacy policy · Terms of service',
    footerTelegram: 'Telegram',
    footerYoutube: 'YouTube',
    footerInstagram: 'Instagram',
    footerFacebook: 'Facebook',
    footerBlog: 'Blog',
    footerDirections: 'Directions',
    footerDirectionUsa: 'Cars from USA',
    footerDirectionChina: 'Cars from China',
    footerDirectionEurope: 'Cars from Europe',
    footerDirectionMoto: 'Moto and RORO',
    footerAddress: 'Jawczyce, ul. Poznanska, 56, 05-850, Poland',
    footerCopyright: '© 2026 BIDDERS. All rights reserved.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    lotTitle: 'Lot route is ready for Sprint 0',
    lotDescription: 'This page is the baseline for the lot details module.',
    lotCurrentLot: 'Current lot',
    budgetKicker: 'Budget selection',
    budgetTitle: 'What can you buy for your budget?',
    budgetRangeOne: 'up to $15,000',
    budgetRangeTwo: 'up to $25,000',
    budgetRangeThree: 'from $25,000',
    budgetOneItemOne: 'Chevrolet Bolt EUV 2023',
    budgetOneItemTwo: 'Ford Escape Hybrid 2020',
    budgetOneItemThree: 'VW Passat 2021',
    budgetTwoItemOne: 'Jeep Grand Cherokee 2023',
    budgetTwoItemTwo: 'Ford Escape Hybrid 2026',
    budgetTwoItemThree: 'VW ID.4 2023',
    budgetThreeItemOne: 'Hummer EV SUV 2024',
    budgetThreeItemTwo: 'Jeep Grand Cherokee 4xe',
    budgetThreeItemThree: 'Tesla Model Y Long Range',
    budgetCta: 'View cars',
    whyKicker: 'Why us',
    whyTitle: 'Safe and guaranteed vehicle delivery from the US',
    whyLead: 'We have been importing vehicles since 2013, with direct auction access and full process support.',
    whyPointOne: 'Over 5,000 vehicles delivered to clients',
    whyPointTwo: 'Full transparency of payments and documents',
    whyPointThree: 'Access to Copart, IAAI, Manheim, and other auctions',
    whyPointFour: 'Own warehouses in New York, Florida, and Texas',
    whyPointFive: 'Legal support and customs preparation',
    whyPointSix: '24/7 support via messengers and phone',
    whyStatOneValue: '13',
    whyStatOneLabel: 'years on market',
    whyStatTwoValue: '40%',
    whyStatTwoLabel: 'saving vs EU',
    whyStatThreeValue: '6',
    whyStatThreeLabel: 'US warehouses',
    whyStatFourValue: '45',
    whyStatFourLabel: 'delivery days',
    navInStock: 'Cars in stock',
    navBlog: 'Blog',
    navCases: 'Cases',
    navContacts: 'Contacts',
    headerPrimaryNavAria: 'Primary navigation',
    headerSocialAria: 'Social links',
    headerLanguageSwitcherAria: 'Language switcher',
    headerToggleMenu: 'Open menu',
    headerMobileNavAria: 'Mobile menu',
    headerMenuLabel: 'Menu · BIDDERS',
    headerMenuClose: 'Close menu',
    cookieAriaLabel: 'Cookie preferences',
    cookieTitle: 'We use cookies',
    cookieText: 'We use required cookies to keep the site fast and stable. Analytics cookies help us improve the service. You can choose your consent option.',
    cookieNecessary: 'Required only',
    cookieAccept: 'Accept all',
    cookieDetails: 'Learn more',
    seoHomeTitle: 'Your trusted partner for importing cars from the USA, Canada, and Korea | BIDDERS',
    seoHomeDescription: 'Turnkey car import from €8,000. Save up to €7,000. Delivery in 45-60 days. Catalog, cars in transit, in-stock offers, yard inspection, and an auction purchase app.',
    routeInStockAlt: 'Cars in stock in Poland — BIDDERS',
    routeTransitAlt: 'Cars in transit',
    routeAuctionAlt: 'Custom order from auction',
    routeCatalogAlt: 'Vehicle catalog',
    transitCtaAlt: 'Cars in transit to Poland — over 1800 options',
    stockCtaAlt: 'Cars in stock at the BIDDERS lot',
    homeB2cNameError: 'Please enter at least 2 characters for your name.',
    homePhoneRequiredError: 'Phone number is required.',
    homeB2cSuccess: 'Thank you! We received your request and will contact you within 15 minutes during business hours.',
    homeB2bFormatError: 'Please specify your cooperation format.',
    homeB2bSuccess: 'Thank you! Your request is accepted. A B2B specialist will contact you directly to align terms.',
    homeHeroEyebrow: 'BIDDERS · 13 years of trust',
    homeHeroTitleLineOne: 'Your trusted partner',
    homeHeroTitleLineTwo: 'for importing cars from',
    homeHeroTitleAccent: 'the USA, Canada, and Korea',
    homeHeroDominant: 'Save up to €7,000 when buying a car from the USA',
    homeHeroLead: 'From €8,000 turnkey. Average delivery time is 45-60 days. You know the final cost in advance and get the full document package.',
    homeHeroPrimaryCta: 'Get a turnkey estimate',
    homeHeroSecondaryCta: 'View cars',
    homeHeroMicro: 'We reply within 15 minutes during business hours',
    homeHeroStatSavings: 'Average savings',
    homeHeroStatDeliveryDays: 'Delivery days',
    homeHeroStatYears: 'Years on market',
    homeTrustAria: 'Why clients trust us',
    homeTrustOneTitle: '13 years on the market',
    homeTrustOneDesc: 'USA and Europe',
    homeTrustTwoTitle: 'Real final cost',
    homeTrustTwoDesc: 'We lock the price before purchase',
    homeTrustThreeTitle: 'Real-time tracking',
    homeTrustThreeDesc: 'From port to your driveway',
    homeTrustFourTitle: '24/7 support',
    homeTrustFourDesc: 'Telegram · WhatsApp · phone',
    homeRouteKicker: 'Scenario router · Choose your path',
    homeRouteTitle: 'How do you want to buy your car?',
    homeRouteLead: 'Pick your scenario and we will show the next step in seconds.',
    homeRoutePillStock: 'In stock',
    homeRouteStockTitle: 'Cars in stock',
    homeRouteStockDesc: 'You can inspect these cars live today at our lot.',
    homeRoutePillTransit: 'In transit',
    homeRouteTransitTitle: 'Cars in transit',
    homeRouteTransitDesc: 'Already purchased and moving to Poland. Track ETA online.',
    homeRoutePillOrder: 'Custom order',
    homeRouteOrderTitle: 'Custom order from auction',
    homeRouteOrderDesc: 'Sourcing, checks, and bidding within your budget across US/EU/CN auctions.',
    homeRoutePillCatalog: 'Catalog',
    homeRouteCatalogTitle: 'Vehicle catalog',
    homeRouteCatalogDesc: 'Large-scale real-time inventory with 200K+ lots daily.',
    homeRouteViewCarsCta: 'View cars',
    homeRouteGetEstimateCta: 'Get estimate',
    homeScenarioHero: 'Hero',
    homeScenarioOrder: 'Custom order',
    homeScenarioFinalCta: 'Final CTA',
    homeScenarioSticky: 'Sticky CTA',
    homeFinalTag: 'No commitment · Final step',
    homeFinalTitle: 'Get matching options',
    homeFinalTitleAccent: 'today',
    homeFinalLead: 'Leave a request and get a personal turnkey estimate with delivery timeline and savings forecast.',
    homeFinalPrimaryCta: 'Get a turnkey estimate',
    homeFinalMicro: 'We reply within 15 minutes during business hours',
    homeStickyCta: 'Get a turnkey estimate',
    homeModalB2cAria: 'Main B2C form',
    homeModalB2cTitle: 'Get a turnkey estimate',
    homeModalNameLabel: 'Name',
    homeModalPhoneLabel: 'Phone',
    homeModalBudgetLabel: 'Budget',
    homeModalBudgetPlaceholder: 'Optional',
    homeModalScenarioLabel: 'Purchase scenario',
    homeModalCommentLabel: 'Comment',
    homeModalAutoClose: 'This window closes in',
    homeModalSending: 'Sending...',
    homeModalSubmit: 'Send request',
    homeModalB2bAria: 'B2B form',
    homeModalB2bTitle: 'Partnership / Sell your car',
    homeModalCompanyLabel: 'Name / Company',
    homeModalFormatLabel: 'Partnership format',
    homeTransitKicker: 'Cars in transit · Live tracking',
    homeTransitHeading: 'Already on the way to Poland',
    homeTransitLead: 'Purchased lots with VIN tracking, logistics status, and ETA updates.',
    homeTransitEta: 'ETA · 45–60 days',
    homeTransitCtaAll: 'View all',
    homeTransitBadge: 'In transit',
    homeTransitCardViewAll: 'View all options',
    homeTransitCardMore: 'Over 1,800 vehicles in transit. Open the full list and find your best match.',
    homeTransitCtaViewAll: 'All cars in transit',
    homeStockKicker: 'In stock · Walk-in ready',
    homeStockHeading: 'At the lot — today',
    homeStockLead: 'Come inspect the vehicles, compare options based on your budget, and learn about paperwork and final costs.',
    homeStockLocation: 'Jawczyce · 05-850',
    homeStockCtaAll: 'View all',
    homeStockBadge: 'In stock',
    homeStockCardViewAll: 'View all cars in stock',
    homeStockCardViewAllDesc: 'Browse the full lot catalog and schedule your inspection today.',
    homeStockCardViewAllCta: 'In-stock catalog',
    homeStockLiveQuestion: 'Want to see them live?',
    homeStockLiveSchedule: 'Schedule an inspection',
    homeCatalogKicker: 'Catalog · Copart · IAAI · Manheim',
    homeCatalogHeading: '200,000+ lots daily',
    homeCatalogLead: 'Largest selection from US and European auctions. Filter by budget, year, mileage, damage type, and document status.',
    homeCatalogCta: 'Open catalog',
    homeCatalogVideo: 'How it works?',
    homeCatalogVideoTime: '1 min watch',
    homeCatalogStat1Value: '200K+',
    homeCatalogStat1Label: 'lots daily real-time updates',
    homeCatalogStat2Value: '3+',
    homeCatalogStat2Label: 'auction platforms Copart · IAAI · Manheim',
    homeCatalogStat3Value: '24/7',
    homeCatalogStat3Label: 'lot monitoring per your request',
    homeCatalogFeat1Title: 'Advanced filters',
    homeCatalogFeat1Desc: 'quick search for cars within your budget',
    homeCatalogFeat2Title: 'Complete information',
    homeCatalogFeat2Desc: 'photos, damage details, document status',
    homeCatalogFeat3Title: 'Instant notifications',
    homeCatalogFeat3Desc: 'for new lots matching your criteria',
    homeCatalogFeat4Title: 'Transparent data',
    homeCatalogFeat4Desc: 'clean history and real condition reports',
    homeWhyKicker: 'Why us · The Hidden Tax',
    homeWhyHeading: 'The market takes money. We close that gap.',
    homeWhyLead: 'Five pain points in car import — and what we do about each.',
    homeProblem1Title: 'Hidden fees',
    homeProblem1Pain: 'Surprises in the estimate after bidding',
    homeProblem1Fix: 'Fixed quote before the bid',
    homeProblem2Title: 'Risky lots',
    homeProblem2Pain: 'Blind bidding, surprises after purchase',
    homeProblem2Fix: 'VIN, history, and inspection before bid',
    homeProblem3Title: 'Multiple contractors',
    homeProblem3Pain: 'Broker, logistics, customs, legal — separate',
    homeProblem3Fix: 'One contract. Single accountability',
    homeProblem4Title: 'Unclear timelines',
    homeProblem4Pain: '"Soon" with no specific dates',
    homeProblem4Fix: 'Stage tracking in cabinet 24/7',
    homeProblem5Title: 'Document errors',
    homeProblem5Pain: 'Customs rejections and rework',
    homeProblem5Fix: 'Full documentation support',
    homeHowKicker: 'How it works · The Process',
    homeHowHeading: 'Five acts from auction to keys',
    homeHowLead: 'From lot sourcing in the US, Canada, Europe or China — to handover in your city.',
    homeStep1Title: 'Brief and budget',
    homeStep1Desc: 'We lock down the task, timeline, and target budget',
    homeStep2Title: 'Sourcing and checks',
    homeStep2Desc: 'VIN, history, and photos before the bid',
    homeStep3Title: 'Bidding and purchase',
    homeStep3Desc: 'Safe bidding and official lot purchase',
    homeStep4Title: 'Delivery and customs',
    homeStep4Desc: 'Container, logistics, and clearance',
    homeStep5Title: 'Key handover',
    homeStep5Desc: 'Vehicle with full document package',
    homeHowCta: 'Ready to estimate your turnkey car?',
    homeHowCtaButton: 'Get estimate',
    homeAppKicker: 'App · Your cabinet',
    homeAppHeading: 'Manage your deal in one click',
    homeAppLead: 'Lots, bids, AI analysis, delivery tracking, documents, and payment history — all in one place.',
    homeAppFeature1: 'Real-time bid visibility',
    homeAppFeature2: 'Deal stage and ETA control',
    homeAppFeature3: 'Documents and payments — transparent',
    homeAppFeature4: 'Push notifications for key events',
    homeAppCta: 'Get access',
    homeAppLive: 'Live · Synced',
    homeAppRow1Label: 'Lot #44821 · BMW X5',
    homeAppRow2Label: 'ETA · Container MSCU',
    homeAppRow3Label: 'Customs · Gdańsk',
    homeAppRow4Label: 'Documents',
    homeAppRow5Label: 'Payments',
    homeCasesKicker: 'Cases · Receipts, not promises',
    homeCasesHeading: 'Real client cases',
    homeCasesLead: 'Model, turnkey cost, market price in Poland, total savings.',
    homeCasesNavLabel: 'Cases navigation',
    homeCasesNavPrev: 'Previous',
    homeCasesNavNext: 'Next',
    homeCasesRowLabel1: 'Turnkey',
    homeCasesRowLabel2: 'Poland market',
    homeCasesRowLabel3: 'Savings',
    homeCasesCardMore: 'Learn more',
    homeCasesViewportLabel: 'Client cases — horizontal scroll',
    homeCasesHint: 'Scroll to see more',
    homeCasesFooter: 'All cases',
    homeSocialKicker: 'Follow us · Live feed',
    homeSocialHeading: 'Subscribe to our social channels',
    homeSocialLead: 'We showcase real vehicles in transit, lot inspections, and client handovers. Subscribe to see the process from inside.',
    homeLocKicker: 'Lot · Poland',
    homeLocHeading: 'See cars live',
    homeLocLead: 'We will show you the vehicles, compare options within your budget, and explain all details about paperwork and timeline.',
    homeLocMapClick: 'Open on map',
    homeLocRoute: 'Build route',
    homeLocShowroom: 'BIDDERS · SHOWROOM',
    homeB2bKicker: 'Partnership · B2B',
    homeB2bHeading: 'Partner with us or sell your car',
    homeB2bLead: 'For dealers, repair shops, logistics, and private sellers.',
    homeB2bCard1Num: '01 · Partnership',
    homeB2bCard1Title: 'For dealers and shops',
    homeB2bCard1Desc: 'Joint deals, lead flow, and long-term partnership.',
    homeB2bCard1Item1: 'Fixed margin per deal',
    homeB2bCard1Item2: 'Marketing support and leads',
    homeB2bCard1Item3: 'Logistics partner across the chain',
    homeB2bCard2Num: '02 · Sell your car',
    homeB2bCard2Title: 'Sell your vehicle',
    homeB2bCard2Desc: 'Listing, support, and secure turnkey transaction.',
    homeB2bCard2Item1: '24-hour valuation',
    homeB2bCard2Item2: 'Placement on our channels',
    homeB2bCard2Item3: 'Documentation support',
    homeB2bCta: 'Become a partner / Sell your car',
    homeFaqKicker: 'FAQ · Straight answers',
    homeFaqHeading: 'Frequently asked questions',
    homeFaq1Q: 'Delivery timeline',
    homeFaq1A: 'Average delivery is 45–60 days depending on the port and logistics load.',
    homeFaq2Q: 'What is included in turnkey',
    homeFaq2A: 'Lot purchase, fees, logistics, customs, documents, and handover in your city.',
    homeFaq3Q: 'What guarantees',
    homeFaq3A: 'One contract for the entire journey, clear quote, and VIN check before bidding.',
    homeFaq4Q: 'How does the app work',
    homeFaq4A: 'Your cabinet shows lots, statuses, documents, delivery stages, and payment history.',
    homeFaq5Q: 'Can I inspect a car live',
    homeFaq5A: 'Yes, inspections are available at the lot in Jawczyce by prior appointment.',
    homeFaqCtaButton: 'Didn\'t find your answer? Ask',
  },
  pl: {
    navHome: 'Start',
    navCatalog: 'Katalog aut',
    navTransit: 'Auta w drodze',
    navCalculator: 'Kalkulator',
    navLot: 'Lot',
    headerContact: 'Kontakt',
    homeLoading: 'Ładowanie...',
    homeLaunchTitle: 'Import auta w 5 prostych krokach',
    heroKicker: 'Platforma analityczna aukcji',
    heroTitle: 'BIDBIDERS to zaufany partner importu aut z USA i Kanady',
    heroTitlePartOne: 'Twój zaufany partner',
    heroTitlePartTwo: 'w imporcie aut z',
    heroTitleAccent: 'USA, Kanady i Korei',
    heroLead: 'Pełny proces: wyszukanie lotu, licytacja, logistyka i dostawa pod klucz z pełną transparentnością kosztów.',
    heroPrimary: 'Zobacz oferty',
    heroSecondary: 'Zobacz live workflow',
    heroScenarioOneTitle: 'Dostępne od ręki',
    heroScenarioOneDesc: 'Możesz obejrzeć jeszcze dziś',
    heroScenarioTwoTitle: 'W drodze',
    heroScenarioTwoDesc: 'Śledzenie online',
    heroScenarioThreeTitle: 'Na zamówienie',
    heroScenarioThreeDesc: 'Dobór na aukcji',
    metricReadiness: 'Gotowość do oferty',
    metricDecisionTime: 'Średni czas decyzji',
    metricRiskEvents: 'Wykryte ryzyka',
    highlightOneTitle: 'Wszystkie aukcje w jednym miejscu',
    highlightOneDescription: 'Copart, IAAI, Manheim i inne platformy w jednym interfejsie.',
    highlightTwoTitle: 'Pełna weryfikacja VIN i ryzyka',
    highlightTwoDescription: 'Historia, status Title, sprzedawca i ocena uszkodzeń przed licytacją.',
    highlightThreeTitle: 'Tracking dostawy w czasie rzeczywistym',
    highlightThreeDescription: 'Śledź auto od zakupu na aukcji aż do odbioru w Twoim mieście.',
    launchStepOneTitle: 'Wybór auta i licytacja',
    launchStepOneDescription: 'Dobieramy loty pod budżet i cel zakupu, ustalamy strategię ofert.',
    launchStepTwoTitle: 'Płatność i zakup',
    launchStepTwoDescription: 'Realizujemy płatność w USA i bezpiecznie finalizujemy lot.',
    launchStepThreeTitle: 'Magazyn i inspekcja foto',
    launchStepThreeDescription: 'Auto trafia do magazynu, wykonujemy kontrolę i raport zdjęciowy.',
    launchStepFourTitle: 'Logistyka i wysyłka',
    launchStepFourDescription: 'Organizujemy kontener, dokumenty i transport morski do Europy.',
    launchStepFiveTitle: 'Odbiór auta',
    launchStepFiveDescription: 'Wspieramy odprawę celną i przekazanie auta w Twoim mieście.',
    finalCtaTitle: 'Gotowi dobrać auto do Twojego budżetu',
    finalCtaDescription: 'Otrzymasz shortlistę lotów, kosztorys pod klucz i wsparcie do odbioru auta.',
    finalCtaButton: 'Skonsultuj zakup',
    trustOneTitle: '100% transparentności',
    trustOneDesc: 'Każda płatność i dokument są kontrolowane na każdym etapie.',
    trustTwoTitle: 'Magazyny i logistyka w USA',
    trustTwoDesc: 'Działamy przez sprawdzone trasy i porty wysyłkowe.',
    trustThreeTitle: 'Śledzenie w czasie rzeczywistym',
    trustThreeDesc: 'Widzisz status kontenera od aukcji do Europy.',
    trustFourTitle: 'Wsparcie 24/7',
    trustFourDesc: 'Zespół jest dostępny przez komunikatory i telefon.',
    partnersTitle: 'Oficjalny dostęp do czołowych aukcji',
    homeTransitTitle: 'Auta w drodze',
    homeTransitDesc: 'Prawdziwe samochody już kupione i jadące do klientów.',
    homeTransitCta: 'Zobacz wszystkie auta w drodze',
    catalogTitle: 'Katalog aut z IAAI i COPART',
    transitTitle: 'Auta w drodze',
    resultsSuffix: 'wyników',
    filterAuction: 'Aukcja',
    filterDamage: 'Uszkodzenia',
    filterFuel: 'Paliwo',
    filterYear: 'Rok',
    filters: 'Filtry',
    reset: 'Resetuj',
    sortLabel: 'Sortowanie',
    bidNow: 'Złóż ofertę',
    buyNow: 'Kup teraz',
    currentBid: 'Aktualna oferta',
    estValue: 'Szacowana wartość',
    sourceLot: 'Źródło lotu',
    noResults: 'Brak ofert dla wybranych filtrów.',
    footerTagline: 'Profesjonalny import aut z USA i Kanady: od licytacji po dostawę pod klucz.',
    footerTaglineLong: 'Twój zaufany partner w imporcie aut z aukcji USA, Chin i Europy od 2013 roku.',
    footerNavigation: 'Nawigacja',
    footerContact: 'Kontakt',
    footerLocation: 'Warszawa, Polska',
    footerLegal: 'Polityka prywatności · Regulamin',
    footerTelegram: 'Telegram',
    footerYoutube: 'YouTube',
    footerInstagram: 'Instagram',
    footerFacebook: 'Facebook',
    footerBlog: 'Blog',
    footerDirections: 'Kierunki',
    footerDirectionUsa: 'Auta z USA',
    footerDirectionChina: 'Auta z Chin',
    footerDirectionEurope: 'Auta z Europy',
    footerDirectionMoto: 'Moto i RORO',
    footerAddress: 'Jawczyce, ul. Poznanska, 56, 05-850, Polska',
    footerCopyright: '© 2026 BIDDERS. Wszelkie prawa zastrzeżone.',
    footerPrivacy: 'Polityka prywatności',
    footerTerms: 'Warunki użytkowania',
    lotTitle: 'Trasa lotu jest gotowa na Sprint 0',
    lotDescription: 'Ta strona to baza dla modułu szczegółów lotu.',
    lotCurrentLot: 'Bieżący lot',
    budgetKicker: 'Dobór według budżetu',
    budgetTitle: 'Co możesz kupić w swoim budżecie?',
    budgetRangeOne: 'do $15 000',
    budgetRangeTwo: 'do $25 000',
    budgetRangeThree: 'od $25 000',
    budgetOneItemOne: 'Chevrolet Bolt EUV 2023',
    budgetOneItemTwo: 'Ford Escape Hybrid 2020',
    budgetOneItemThree: 'VW Passat 2021',
    budgetTwoItemOne: 'Jeep Grand Cherokee 2023',
    budgetTwoItemTwo: 'Ford Escape Hybrid 2026',
    budgetTwoItemThree: 'VW ID.4 2023',
    budgetThreeItemOne: 'Hummer EV SUV 2024',
    budgetThreeItemTwo: 'Jeep Grand Cherokee 4xe',
    budgetThreeItemThree: 'Tesla Model Y Long Range',
    budgetCta: 'Zobacz auta',
    whyKicker: 'Dlaczego my',
    whyTitle: 'Bezpieczna i gwarantowana dostawa aut z USA',
    whyLead: 'Importujemy auta od 2013 roku, mamy dostęp do kluczowych aukcji i pełną obsługę procesu.',
    whyPointOne: 'Ponad 5 000 dostarczonych samochodów',
    whyPointTwo: 'Pełna transparentność płatności i dokumentów',
    whyPointThree: 'Dostęp do Copart, IAAI, Manheim i innych aukcji',
    whyPointFour: 'Własne magazyny w Nowym Jorku, Florydzie i Teksasie',
    whyPointFive: 'Wsparcie prawne i przygotowanie do odprawy',
    whyPointSix: 'Wsparcie 24/7 przez komunikatory i telefon',
    whyStatOneValue: '13',
    whyStatOneLabel: 'lat na rynku',
    whyStatTwoValue: '40%',
    whyStatTwoLabel: 'taniej vs UE',
    whyStatThreeValue: '6',
    whyStatThreeLabel: 'magazynów w USA',
    whyStatFourValue: '45',
    whyStatFourLabel: 'dni dostawy',
    navInStock: 'Auta dostępne',
    navBlog: 'Blog',
    navCases: 'Case studies',
    navContacts: 'Kontakt',
    headerPrimaryNavAria: 'Nawigacja główna',
    headerSocialAria: 'Profile społecznościowe',
    headerLanguageSwitcherAria: 'Przełącznik języka',
    headerToggleMenu: 'Otwórz menu',
    headerMobileNavAria: 'Menu mobilne',
    headerMenuLabel: 'Menu · BIDDERS',
    headerMenuClose: 'Zamknij menu',
    cookieAriaLabel: 'Ustawienia cookie',
    cookieTitle: 'Używamy plików cookie',
    cookieText: 'Aby serwis działał stabilnie i szybko, używamy niezbędnych cookie. Analityczne cookie pomagają nam ulepszać usługę. Możesz wybrać rodzaj zgody.',
    cookieNecessary: 'Tylko niezbędne',
    cookieAccept: 'Akceptuj wszystkie',
    cookieDetails: 'Dowiedz się więcej',
    seoHomeTitle: 'Zaufany partner importu aut z USA, Kanady i Korei | BIDDERS',
    seoHomeDescription: 'Import auta pod klucz od 8 000 EUR. Oszczędność do 7 000 EUR. Dostawa w 45-60 dni. Katalog, auta w drodze, auta dostępne od ręki, oględziny i aplikacja do zakupu na aukcji.',
    routeInStockAlt: 'Auta dostępne w Polsce — BIDDERS',
    routeTransitAlt: 'Auta w drodze',
    routeAuctionAlt: 'Na zamówienie z aukcji',
    routeCatalogAlt: 'Katalog aut',
    transitCtaAlt: 'Auta w drodze do Polski — ponad 1800 opcji',
    stockCtaAlt: 'Auta dostępne na placu BIDDERS',
    homeB2cNameError: 'Imię powinno mieć co najmniej 2 znaki.',
    homePhoneRequiredError: 'Numer telefonu jest wymagany.',
    homeB2cSuccess: 'Dziękujemy! Otrzymaliśmy zgłoszenie i skontaktujemy się w ciągu 15 minut w godzinach pracy.',
    homeB2bFormatError: 'Podaj format współpracy.',
    homeB2bSuccess: 'Dziękujemy! Zgłoszenie zostało przyjęte, specjalista B2B skontaktuje się z Tobą bezpośrednio, aby ustalić warunki.',
    homeHeroEyebrow: 'BIDDERS · 13 lat zaufania',
    homeHeroTitleLineOne: 'Twój zaufany partner',
    homeHeroTitleLineTwo: 'w imporcie aut z',
    homeHeroTitleAccent: 'USA, Kanady i Korei',
    homeHeroDominant: 'Oszczędzaj do 7 000 EUR przy zakupie auta z USA',
    homeHeroLead: 'Od 8 000 EUR pod klucz. Średni czas dostawy to 45-60 dni. Z góry znasz koszt końcowy i otrzymujesz pełen pakiet dokumentów.',
    homeHeroPrimaryCta: 'Uzyskaj wycenę pod klucz',
    homeHeroSecondaryCta: 'Zobacz auta',
    homeHeroMicro: 'Odpowiadamy w ciągu 15 minut w godzinach pracy',
    homeHeroStatSavings: 'Średnia oszczędność',
    homeHeroStatDeliveryDays: 'Dni dostawy',
    homeHeroStatYears: 'Lat na rynku',
    homeTrustAria: 'Dlaczego klienci nam ufają',
    homeTrustOneTitle: '13 lat na rynku',
    homeTrustOneDesc: 'USA i Europa',
    homeTrustTwoTitle: 'Realny koszt końcowy',
    homeTrustTwoDesc: 'Ustalamy cenę przed zakupem',
    homeTrustThreeTitle: 'Śledzenie w czasie rzeczywistym',
    homeTrustThreeDesc: 'Od portu do Twojego domu',
    homeTrustFourTitle: 'Wsparcie 24/7',
    homeTrustFourDesc: 'Telegram · WhatsApp · telefon',
    homeRouteKicker: 'Scenariusze zakupu · Choose your path',
    homeRouteTitle: 'Jak chcesz kupić auto?',
    homeRouteLead: 'Wybierz scenariusz, a pokażemy kolejny krok w kilka sekund.',
    homeRoutePillStock: 'Dostępne',
    homeRouteStockTitle: 'Auta dostępne od ręki',
    homeRouteStockDesc: 'Możesz obejrzeć te auta na żywo jeszcze dziś na naszym placu.',
    homeRoutePillTransit: 'W drodze',
    homeRouteTransitTitle: 'Auta w drodze',
    homeRouteTransitDesc: 'Już kupione i w drodze do Polski. Śledź ETA online.',
    homeRoutePillOrder: 'Na zamówienie',
    homeRouteOrderTitle: 'Na zamówienie z aukcji',
    homeRouteOrderDesc: 'Dobór, weryfikacja i licytacja w Twoim budżecie na aukcjach US/EU/CN.',
    homeRoutePillCatalog: 'Katalog',
    homeRouteCatalogTitle: 'Katalog aut',
    homeRouteCatalogDesc: 'Szeroka oferta w czasie rzeczywistym — ponad 200 tys. lotów dziennie.',
    homeRouteViewCarsCta: 'Zobacz auta',
    homeRouteGetEstimateCta: 'Uzyskaj wycenę',
    homeScenarioHero: 'Hero',
    homeScenarioOrder: 'Na zamówienie',
    homeScenarioFinalCta: 'Final CTA',
    homeScenarioSticky: 'Sticky CTA',
    homeFinalTag: 'Bez zobowiązań · Final step',
    homeFinalTitle: 'Otrzymaj dopasowane opcje',
    homeFinalTitleAccent: 'jeszcze dziś',
    homeFinalLead: 'Zostaw zgłoszenie i odbierz personalną wycenę pod klucz z prognozą terminu i oszczędności.',
    homeFinalPrimaryCta: 'Uzyskaj wycenę pod klucz',
    homeFinalMicro: 'Odpowiadamy w ciągu 15 minut w godzinach pracy',
    homeStickyCta: 'Uzyskaj wycenę pod klucz',
    homeModalB2cAria: 'Główny formularz B2C',
    homeModalB2cTitle: 'Uzyskaj wycenę pod klucz',
    homeModalNameLabel: 'Imię',
    homeModalPhoneLabel: 'Telefon',
    homeModalBudgetLabel: 'Budżet',
    homeModalBudgetPlaceholder: 'Opcjonalnie',
    homeModalScenarioLabel: 'Scenariusz zakupu',
    homeModalCommentLabel: 'Komentarz',
    homeModalAutoClose: 'To okno zamknie się za',
    homeModalSending: 'Wysyłanie...',
    homeModalSubmit: 'Wyślij zgłoszenie',
    homeModalB2bAria: 'Formularz B2B',
    homeModalB2bTitle: 'Partnerstwo / Sprzedaż auta',
    homeModalCompanyLabel: 'Imię / Firma',
    homeModalFormatLabel: 'Format współpracy',
    homeTransitKicker: 'Auta w drodze · Live tracking',
    homeTransitHeading: 'Już w drodze do Polski',
    homeTransitLead: 'Zakupione loty ze śledzeniem VIN, statusem logistyki i ETA.',
    homeTransitEta: 'ETA · 45–60 dni',
    homeTransitCtaAll: 'Wszystkie auta',
    homeTransitBadge: 'W drodze',
    homeTransitCardViewAll: 'Zobacz wszystkie opcje',
    homeTransitCardMore: 'Ponad 1800 samochodów w drodze. Otwórz pełną listę i znajdź najlepszą dla siebie.',
    homeTransitCtaViewAll: 'Wszystkie auta w drodze',
    homeStockKicker: 'Dostępne · Walk-in ready',
    homeStockHeading: 'Na placu — dzisiaj',
    homeStockLead: 'Przyjdź, obejrzyj samochody live, porównaj opcje w ramach budżetu, poznaj szczegóły dokumentów i kosztów.',
    homeStockLocation: 'Jawczyce · 05-850',
    homeStockCtaAll: 'Wszystkie auta',
    homeStockBadge: 'Dostępne',
    homeStockCardViewAll: 'Wszystkie dostępne auta',
    homeStockCardViewAllDesc: 'Przeglądaj pełny katalog dostępnych aut i zarezerwuj swoją inspekcję dzisiaj.',
    homeStockCardViewAllCta: 'Katalog dostępnych',
    homeStockLiveQuestion: 'Chcesz zobaczyć je osobiście?',
    homeStockLiveSchedule: 'Zarezerwuj inspekcję',
    homeCatalogKicker: 'Katalog · Copart · IAAI · Manheim',
    homeCatalogHeading: '200 000+ lotów dziennie',
    homeCatalogLead: 'Największy wybór z aukcji USA i Europy. Filtry: budżet, rok, przebieg, typ uszkodzenia, status dokumentów.',
    homeCatalogCta: 'Otwórz katalog',
    homeCatalogVideo: 'Jak to działa?',
    homeCatalogVideoTime: '1 min oglądania',
    homeCatalogStat1Value: '200K+',
    homeCatalogStat1Label: 'lotów dziennie aktualizacje w czasie rzeczywistym',
    homeCatalogStat2Value: '3+',
    homeCatalogStat2Label: 'platform aukcji Copart · IAAI · Manheim',
    homeCatalogStat3Value: '24/7',
    homeCatalogStat3Label: 'monitoring lotów na Twoją prośbę',
    homeCatalogFeat1Title: 'Zaawansowane filtry',
    homeCatalogFeat1Desc: 'szybkie wyszukanie auta w Twoim budżecie',
    homeCatalogFeat2Title: 'Kompletne informacje',
    homeCatalogFeat2Desc: 'zdjęcia, uszkodzenia, status dokumentów',
    homeCatalogFeat3Title: 'Natychmiastowe powiadomienia',
    homeCatalogFeat3Desc: 'o nowych lotach pasujących do Twoich kryteriów',
    homeCatalogFeat4Title: 'Przejrzyste dane',
    homeCatalogFeat4Desc: 'czysta historia i raporty rzeczywistego stanu',
    homeWhyKicker: 'Dlaczego my · The Hidden Tax',
    homeWhyHeading: 'Rynek bierze pieniądze. My to zamykamy.',
    homeWhyLead: 'Pięć bolączek importu auta — i co my z tym robimy.',
    homeProblem1Title: 'Ukryte opłaty',
    homeProblem1Pain: 'Niespodzianka w wycenie po licytacji',
    homeProblem1Fix: 'Stała wycena przed ofertą',
    homeProblem2Title: 'Ryzykowne loty',
    homeProblem2Pain: 'Ślepa licytacja, niespodzianki po zakupie',
    homeProblem2Fix: 'VIN, historia i kontrola przed ofertą',
    homeProblem3Title: 'Różni podwykonawcy',
    homeProblem3Pain: 'Broker, logistyka, cła, prawo — osobno',
    homeProblem3Fix: 'Jedna umowa. Jedyna odpowiedzialność',
    homeProblem4Title: 'Niejasne terminy',
    homeProblem4Pain: '"Niedługo" bez konkretnych dat',
    homeProblem4Fix: 'Śledzenie etapów w panelu 24/7',
    homeProblem5Title: 'Błędy w dokumentach',
    homeProblem5Pain: 'Odrzucenia na granicy i przeróbki',
    homeProblem5Fix: 'Pełna obsługa dokumentacji',
    homeHowKicker: 'Jak to działa · The Process',
    homeHowHeading: 'Pięć aktów od aukcji do kluczy',
    homeHowLead: 'Od doboru lotu w USA, Kanadzie, Europie czy Chinach — do wydania auta w Twoim mieście.',
    homeStep1Title: 'Brief i budżet',
    homeStep1Desc: 'Ustalamy zadanie, termin i docelowy budżet',
    homeStep2Title: 'Dobór i weryfikacja',
    homeStep2Desc: 'VIN, historia i zdjęcia przed ofertą',
    homeStep3Title: 'Licytacja i zakup',
    homeStep3Desc: 'Bezpieczna oferta i oficjalny zakup lotu',
    homeStep4Title: 'Dostawa i cła',
    homeStep4Desc: 'Kontener, logistyka i odprawy',
    homeStep5Title: 'Wydanie kluczy',
    homeStep5Desc: 'Auto z pełnym pakietem dokumentów',
    homeHowCta: 'Gotów obliczyć auto pod klucz?',
    homeHowCtaButton: 'Uzyskaj wycenę',
    homeAppKicker: 'Aplikacja · Twój panel',
    homeAppHeading: 'Zarządzaj umową jednym klikiem',
    homeAppLead: 'Loty, oferty, analiza AI, śledzenie dostawy, dokumenty i historia płatności — w jednym miejscu.',
    homeAppFeature1: 'Widoczność ofert w czasie rzeczywistym',
    homeAppFeature2: 'Kontrola etapów i ETA',
    homeAppFeature3: 'Dokumenty i płatności — przejrzyście',
    homeAppFeature4: 'Push notyfikacje o kluczowych zdarzeniach',
    homeAppCta: 'Uzyskaj dostęp',
    homeAppLive: 'Live · Zsynchronizowana',
    homeAppRow1Label: 'Lot #44821 · BMW X5',
    homeAppRow2Label: 'ETA · Kontener MSCU',
    homeAppRow3Label: 'Cła · Gdańsk',
    homeAppRow4Label: 'Dokumenty',
    homeAppRow5Label: 'Płatności',
    homeCasesKicker: 'Kейси · Receipts, not promises',
    homeCasesHeading: 'Prawdziwe case studies klientów',
    homeCasesLead: 'Model, cena pod klucz, cena rynku Polski, całkowita oszczędność.',
    homeCasesNavLabel: 'Nawigacja po case studiach',
    homeCasesNavPrev: 'Poprzednie',
    homeCasesNavNext: 'Następne',
    homeCasesRowLabel1: 'Pod klucz',
    homeCasesRowLabel2: 'Rynek Polski',
    homeCasesRowLabel3: 'Oszczędność',
    homeCasesCardMore: 'Dowiedz się więcej',
    homeCasesViewportLabel: 'Case studies — przewijanie poziome',
    homeCasesHint: 'Przewiń, aby zobaczyć więcej',
    homeCasesFooter: 'Wszystkie case studies',
    homeSocialKicker: 'Śledź nas · Live feed',
    homeSocialHeading: 'Subskrybuj nasze media społecznościowe',
    homeSocialLead: 'Pokazujemy prawdziwe auta w drodze, inspekcje na placu i wydania klientom. Subskrybuj — zobaczysz proces z wewnątrz.',
    homeLocKicker: 'Plac · Polska',
    homeLocHeading: 'Zobacz auta osobiście',
    homeLocLead: 'Pokażemy Ci samochody, porównamy opcje w Twoim budżecie, wyjaśnimy wszystko o dokumentach i terminach.',
    homeLocMapClick: 'Otwórz na mapie',
    homeLocRoute: 'Wyznacz trasę',
    homeLocShowroom: 'BIDDERS · SHOWROOM',
    homeB2bKicker: 'Partnerstwo · B2B',
    homeB2bHeading: 'Partneruj z nami lub sprzedaj auto',
    homeB2bLead: 'Dla dealerów, serwisów, logistyki i prywatnych sprzedawców.',
    homeB2bCard1Num: '01 · Partnerstwo',
    homeB2bCard1Title: 'Dla dealerów i serwisów',
    homeB2bCard1Desc: 'Wspólne umowy, przepływ leadów, długoterminowa współpraca.',
    homeB2bCard1Item1: 'Stała marża na umowę',
    homeB2bCard1Item2: 'Wsparcie marketingowe i leady',
    homeB2bCard1Item3: 'Partner logistyki na cały łańcuch',
    homeB2bCard2Num: '02 · Sprzedaj auto',
    homeB2bCard2Title: 'Sprzedaj swoje auto',
    homeB2bCard2Desc: 'Wystawienie, wsparcie i bezpieczna transakcja pod klucz.',
    homeB2bCard2Item1: 'Wycena w 24 godziny',
    homeB2bCard2Item2: 'Umieszczenie na naszych kanałach',
    homeB2bCard2Item3: 'Wsparcie dokumentacji',
    homeB2bCta: 'Zostań partnerem / Sprzedaj auto',
    homeFaqKicker: 'FAQ · Straight answers',
    homeFaqHeading: 'Często zadawane pytania',
    homeFaq1Q: 'Termin dostawy',
    homeFaq1A: 'Średni termin dostawy to 45–60 dni, zależy od portu i obciążenia logistyki.',
    homeFaq2Q: 'Co wchodzi w "pod klucz"',
    homeFaq2A: 'Lot, prowizje, logistyka, cła, dokumenty i wydanie auta w Twoim mieście.',
    homeFaq3Q: 'Jakie gwarancje',
    homeFaq3A: 'Jedna umowa na cały proces, przejrzysta wycena i weryfikacja VIN przed licytacją.',
    homeFaq4Q: 'Jak działa aplikacja',
    homeFaq4A: 'W panelu widzisz loty, statusy, dokumenty, etapy dostawy i historię płatności.',
    homeFaq5Q: 'Czy mogę zobaczyć auto osobiście',
    homeFaq5A: 'Tak, inspekcje są dostępne na placu w Jawczyce po wcześniejszym umówieniu.',
    homeFaqCtaButton: 'Nie znalazłeś odpowiedzi? Zapytaj',
  },
}
