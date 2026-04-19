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
  },
}
