export type Locale = 'uk' | 'en' | 'pl'

export type MessageKey =
  | 'navHome'
  | 'navCatalog'
  | 'navCatalogUsa'
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
  | 'footerFaq'
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
  | 'thankYouTitle'
  | 'thankYouText'
  | 'thankYouBtn'
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
  | 'seoCatalogTitle'
  | 'seoCatalogDescription'
  | 'seoInStockTitle'
  | 'seoInStockDescription'
  | 'seoTransitTitle'
  | 'seoTransitDescription'
  | 'seoCalculatorTitle'
  | 'seoCalculatorDescription'
  | 'seoBlogTitle'
  | 'seoBlogDescription'
  | 'seoCasesTitle'
  | 'seoCasesDescription'
  | 'seoFaqTitle'
  | 'seoFaqDescription'
  | 'seoContactsTitle'
  | 'seoContactsDescription'
  | 'seoPrivacyTitle'
  | 'seoPrivacyDescription'
  | 'seoTermsTitle'
  | 'seoTermsDescription'
  | 'seoLotTitle'
  | 'seoLotDescription'
  | 'navChinaCars'
  | 'footerLotSources'
  | 'catalogSortAuctionTime'
  | 'catalogSortPriceDesc'
  | 'catalogSortPriceAsc'
  | 'catalogSortYearDesc'
  | 'catalogSortYearAsc'
  | 'catalogSortMileageAsc'
  | 'catalogSortMileageDesc'
  | 'catalogBadgeInTransit'
  | 'catalogBadgeInStock'
  | 'catalogBadgeNew'
  | 'catalogAuctionBadgeAvailable'
  | 'catalogAuctionBadgeReady'
  | 'catalogSellerLocal'
  | 'catalogStatusInTransit'
  | 'catalogStatusInStock'
  | 'catalogStatusAtAuction'
  | 'catalogPriceLabel'
  | 'catalogCurrentBidLabel'
  | 'catalogPriceNoteSeller'
  | 'catalogPriceNoteLease'
  | 'catalogPriceNoteEstimate'
  | 'catalogDetailMileage'
  | 'catalogDetailLocation'
  | 'catalogDetailDamage'
  | 'catalogDetailStatus'
  | 'catalogCardDetails'
  | 'catalogFilterBtn'
  | 'catalogFilterTitle'
  | 'catalogFilterResetAll'
  | 'catalogToggleWholesale'
  | 'catalogToggleRecent'
  | 'catalogToggleExcludeActive'
  | 'catalogFilterDocType'
  | 'catalogFilterYear'
  | 'catalogFilterBrand'
  | 'catalogFilterModel'
  | 'catalogFilterMileage'
  | 'catalogFilterFuel'
  | 'catalogFilterTrans'
  | 'catalogFilterDrive'
  | 'catalogFilterPostal'
  | 'catalogFilterReset'
  | 'catalogRangeFrom'
  | 'catalogRangeTo'
  | 'catalogCountSuffix'
  | 'catalogSearchPlaceholder'
  | 'catalogYearFrom'
  | 'catalogYearTo'
  | 'catalogPostalPlaceholder'
  | 'catalogPostalSearch'
  | 'catalogTabAll'
  | 'catalogTabOpenAuctions'
  | 'catalogTabInProgress'
  | 'catalogTabClosedToday'
  | 'catalogTabBuyNow'
  | 'catalogTabArchive'
  | 'catalogTabInStock'
  | 'catalogTabReadyToTransfer'
  | 'catalogTabOnOrder'
  | 'catalogTabInTransit'
  | 'catalogResultsCount'
  | 'catalogLayoutList'
  | 'catalogLayoutGrid'
  | 'catalogLoadMore'
  | 'homeEconKicker'
  | 'homeEconTitle'
  | 'homeEconLead'
  | 'homeEconCase'
  | 'homeEconMarket'
  | 'homeEconTurnkey'
  | 'homeEconSave'
  | 'homeEconAvgSave'
  | 'homeEconDesc'
  | 'homeEconBtn'
  | 'homeCalcKicker'
  | 'homeCalcTitle'
  | 'homeCalcLead'
  | 'homeCalcCheck1'
  | 'homeCalcCheck2'
  | 'homeCalcCheck3'
  | 'homeCalcCheck4'
  | 'homeCalcBadge'
  | 'homeCalcBadgeSave'
  | 'homeCalcBtn'
  | 'homeCalcBtnOpen'
  | 'homeCalcCardTag'
  | 'homeCalcCardTitle'
  | 'homeCalcDestLabel'
  | 'homeCalcBidLabel'
  | 'homeCalcBidHint'
  | 'homeCalcBidAria'
  | 'homeCalcLine1'
  | 'homeCalcLine2'
  | 'homeCalcLine3'
  | 'homeCalcLine4'
  | 'homeCalcTotal'
  | 'homeCalcNote'
  | 'homeCalcStep1'
  | 'homeCalcStep1Desc'
  | 'homeCalcStep2'
  | 'homeCalcStep2Desc'
  | 'homeCalcStep3'
  | 'homeCalcStep3Desc'
  | 'homeCalcStep4'
  | 'homeCalcStep4Desc'
  | 'homeCalcTrust1'
  | 'homeCalcTrust1Desc'
  | 'homeCalcTrust2'
  | 'homeCalcTrust2Desc'
  | 'homeCalcTrust3'
  | 'homeCalcTrust3Desc'
  | 'homeStockLoc'
  | 'homeStockLocCity'
  | 'homeHowAct'
  | 'homeHowCtaLead'
  | 'homeHowCtaBtn'
  | 'lotLoading'
  | 'lotLoadingDesc'
  | 'lotNotFound'
  | 'lotNotFoundDesc'
  | 'lotNotFoundBtn'
  | 'lotModeTransit'
  | 'lotModeInStock'
  | 'lotModeCatalog'
  | 'lotStatusTransit'
  | 'lotStatusInStock'
  | 'lotStatusAtAuction'
  | 'lotLabelLocation'
  | 'lotLabelDispatchPort'
  | 'lotLabelPickupPoint'
  | 'lotLabelStatus'
  | 'lotLabelAuctionDate'
  | 'lotLabelEstDelivery'
  | 'lotDeliveryTbd'
  | 'lotWatching'
  | 'lotWatch'
  | 'lotCarfaxBtn'
  | 'lotGalleryPrev'
  | 'lotGalleryNext'
  | 'lotLiveBadgeAuction'
  | 'lotLiveBadgeTransit'
  | 'lotLiveBadgeReady'
  | 'lotSpecsMainTitle'
  | 'lotLabelSeller'
  | 'lotLabelDocuments'
  | 'lotLabelPrimaryDamage'
  | 'lotLabelSecondaryDamage'
  | 'lotLabelMileage'
  | 'lotLabelKeys'
  | 'lotCopyVin'
  | 'lotSpecsTechTitle'
  | 'lotLabelBodyType'
  | 'lotLabelColor'
  | 'lotLabelEngine'
  | 'lotLabelTransmission'
  | 'lotLabelFuel'
  | 'lotLabelDrive'
  | 'lotLabelStartCode'
  | 'lotLabelStartCodeValue'
  | 'lotLabelAcvRetail'
  | 'lotLabelBodyExtended'
  | 'lotLabelSaleStatus'
  | 'lotShowMore'
  | 'lotShowLess'
  | 'lotSourceLink'
  | 'lotServicesTitle'
  | 'lotService11'
  | 'lotService12'
  | 'lotService13'
  | 'lotService14'
  | 'lotServicesNote'
  | 'lotBuyNowDesc'
  | 'lotBuyNowBtn'
  | 'lotSbCurrentBid'
  | 'lotSbEstimate'
  | 'lotSbMaxBid'
  | 'lotSbDecrease'
  | 'lotSbIncrease'
  | 'lotSbBidNow'
  | 'lotSbHowToBid'
  | 'timerUnitD'
  | 'timerUnitH'
  | 'timerUnitM'
  | 'timerUnitS'
  | 'lotSbTimeLeft'
  | 'lotSbAuctionEnded'
  | 'lotSbTimerUntil'
  | 'lotSbCalcTitle'
  | 'lotCalcBid'
  | 'lotCalcAuctionFee'
  | 'lotCalcTransport'
  | 'lotCalcShipping'
  | 'lotCalcDocs'
  | 'lotCalcSubtotal'
  | 'lotCalcNote'
  | 'lotCustomsCalcTitle'
  | 'lotCustomsDuty'
  | 'lotCustomsVat'
  | 'lotCustomsBroker'
  | 'lotCustomsTotal'
  | 'lotCustomsFinal'
  | 'lotCustomsNote'
  | 'lotSbFinalPrice'
  | 'lotSbTurnkeyFixed'
  | 'lotSbFactDelivery'
  | 'lotSbFactDeliveryValue'
  | 'lotSbContact'
  | 'lotSbWhatsIncluded'
  | 'lotSbIncluded1'
  | 'lotSbIncluded2'
  | 'lotSbIncluded3'
  | 'lotSbIncluded4'
  | 'lotSbIncluded5'
  | 'lotSbPriceKicker'
  | 'lotSbReadyLviv'
  | 'lotSbFactCert'
  | 'lotSbFactCertValue'
  | 'lotSbBuyNow'
  | 'lotSbScheduleView'
  | 'lotSbLeaseCalc'
  | 'lotSbMonthlyPayment'
  | 'lotSbPerMonth'
  | 'lotSbDownPayment'
  | 'lotSbLeaseTerm'
  | 'lotSbLeaseMonths'
  | 'lotSbLeaseNote'
  | 'lotDescTitle'
  | 'lotDescSubtitle'
  | 'lotLabelMake'
  | 'lotLabelModel'
  | 'lotLabelYear'
  | 'lotLabelPrice'
  | 'lotKnowTitle'
  | 'lotKnowSubtitle'
  | 'lotKnowOverviewTitle'
  | 'lotKnowOverviewStatus'
  | 'lotKnowOverviewLoc'
  | 'lotKnowOverviewSpecs'
  | 'lotKnowOverviewMileage'
  | 'lotKnowPriceFrom'
  | 'lotKnowPriceEnd'
  | 'lotKnowCheckTitle'
  | 'lotKnowCheckDamage'
  | 'lotKnowCheckDocs'
  | 'lotKnowCheckBudget'
  | 'lotKnowCheckBudgetSuffix'
  | 'lotKnowCheckAgreement'
  | 'lotKnowChip1'
  | 'lotKnowChip2'
  | 'lotKnowChip3'
  | 'lotSimilarTitle'
  | 'lotSimilarTitleTransit'
  | 'lotSimilarTitleInStock'
  | 'lotSimilarTitleCatalog'
  | 'lotSimilarSubtitle'
  | 'lotSimilarPriceLabel'
  | 'lotSimilarMileageLabel'
  | 'lotSimilarStatusLabel'
  | 'lotSimilarAllTransit'
  | 'lotSimilarAllInStock'
  | 'lotSimilarAllCatalog'
  | 'lotSimilarLinkCatalog'
  | 'lotSimilarLinkCar'
  | 'lotSimilarLinkLogistics'
  | 'lotSimilarLinkBlog'
  | 'lotFaqTitle'
  | 'lotFaqSubtitle'
  | 'lotFaq1Q'
  | 'lotFaq1A'
  | 'lotFaq2Q'
  | 'lotFaq2A'
  | 'lotFaq3Q'
  | 'lotFaq3A'
  | 'lotFaq4Q'
  | 'lotFaq4A'
  | 'lotStepsTitle'
  | 'lotStepsSubtitle'
  | 'lotStep1Title'
  | 'lotStep1Text'
  | 'lotStep2Title'
  | 'lotStep2Text'
  | 'lotStep3Title'
  | 'lotStep3Text'
  | 'lotStep4Title'
  | 'lotStep4Text'
  | 'lotSummaryTitle'
  | 'lotSummarySubtitle'
  | 'lotSummaryStatusTitle'
  | 'lotSummaryStatusP1'
  | 'lotSummaryStatusP2'
  | 'lotSummaryStatusFacts'
  | 'lotSummaryStatusFactsDmg'
  | 'lotSummaryStatusFactsLoc'
  | 'lotSummaryStatusP3'
  | 'lotSummaryBudgetTitle'
  | 'lotSummaryBudgetLead'
  | 'lotBudgetCurrentPrice'
  | 'lotBudgetPrep'
  | 'lotBudgetPrepValue'
  | 'lotBudgetCert'
  | 'lotBudgetCertValue'
  | 'lotBudgetService'
  | 'lotSummaryCtaCar'
  | 'lotSummaryCtaLogistics'
  | 'lotTimerDays'
  | 'lotTimerHours'
  | 'lotTimerMinutes'
  | 'lotTimerSeconds'
  | 'lotPickupCity'
  | 'lotDispatchCountry'
  | 'calcPill'
  | 'calcHeroTitle'
  | 'calcHeroDesc'
  | 'calcHeroNoteTitle'
  | 'calcHeroNoteDesc'
  | 'calcFormKicker'
  | 'calcFormTitle'
  | 'calcFormDesc'
  | 'calcLabelRoute'
  | 'calcRouteKlaipeda'
  | 'calcRouteOdesa'
  | 'calcLabelCarType'
  | 'calcCarTypeAuto'
  | 'calcCarTypeCrossover'
  | 'calcCarTypeSuv'
  | 'calcCarTypeMoto'
  | 'calcCarTypePickup'
  | 'calcLabelFuel'
  | 'calcLabelAuction'
  | 'calcLabelDocType'
  | 'calcLabelCity'
  | 'calcLabelYear'
  | 'calcLabelBattery'
  | 'calcLabelEngine'
  | 'calcLabelPrice'
  | 'calcPricePlaceholder'
  | 'calcLabelInsurance'
  | 'calcLabelTransfer'
  | 'calcBtnRecalc'
  | 'calcBtnReset'
  | 'calcResultKicker'
  | 'calcGroupLogistics'
  | 'calcRowBid'
  | 'calcRowAuctionFee'
  | 'calcRowUsDelivery'
  | 'calcRowDocs'
  | 'calcRowOcean'
  | 'calcRowPortUnload'
  | 'calcRowEuDelivery'
  | 'calcRowCustomsDelivery'
  | 'calcRowBorderHandling'
  | 'calcGroupCustoms'
  | 'calcCustomsPending'
  | 'calcCaptionIdle'
  | 'calcCaptionLoading'
  | 'calcCaptionLive'
  | 'calcCaptionLiveEu'
  | 'calcCaptionFallback'
  | 'calcCaptionErr401'
  | 'calcCaptionErr403'
  | 'calcCaptionErr400Prefix'
  | 'calcCaptionErrJson'
  | 'calcRowCarPrice'
  | 'calcRowOceanFromPrefix'
  | 'calcRowPortUnloadOdesa'
  | 'calcRowPortUnloadKlaipeda'
  | 'calcRowEuDeliveryPortPrefix'
  | 'calcCityWarsaw'
  | 'calcRowExportDocs'
  | 'calcRowExcise'
  | 'calcRowImportDuty'
  | 'calcRowVat'
  | 'calcRowNonVatFee'
  | 'calcRowBroker'
  | 'calcRowBiddersFee'
  | 'calcRowInsuranceFee'
  | 'calcRowMoneyTransfer'
  | 'calcLabelEuPort'
  | 'calcLabelImportTax'
  | 'calcLabelVatProfile'
  | 'calcRowCustomsAgency'
  | 'calcRouteUnavailable'
  | 'calcRowCustomsBase'
  | 'calcRowTotal'
  | 'calcBranchPlaceholder'
  | 'calcBranchNotFound'
  | 'calcAuctionUrlLabel'
  | 'calcAuctionUrlPlaceholder'
  | 'calcAuctionUrlButton'
  | 'calcAuctionUrlLoading'
  | 'calcAuctionUrlSuccess'
  | 'calcAuctionUrlBranchMissing'
  | 'calcAuctionUrlError'
  | 'calcAuctionUrlUnsupported'
  | 'calcAuctionUrlIaaiPartial'
  | 'calcAuctionUrlIaaiUnavailable'
  | 'calcAuctionUrlPartial'
  | 'calcFormTitle2'
  | 'calcFormDesc2'
  | 'calcResultKicker2'
  | 'calcCaptionIdle2'
  | 'calcRouteUnavailable2'
  | 'calcCaptionResult'
  | 'calcRowCarPrice2'
  | 'calcRowUsDelivery2'
  | 'calcRowOceanDelivery'
  | 'calcRowBiddersFee2'
  | 'calcTaxAuto'
  | 'calcTaxTruck'
  | 'calcTaxMoto'
  | 'calcTaxClassic0'
  | 'calcVatClassic9'
  | 'blogHeroKicker'
  | 'blogHeroTitle'
  | 'blogHeroSub'
  | 'blogHeroMetaMaterials'
  | 'blogHeroMetaReaders'
  | 'blogHeroMetaCategories'
  | 'blogHeroMetaPerWeek'
  | 'blogCatAll'
  | 'blogCatGuides'
  | 'blogCatCustoms'
  | 'blogCatLogistics'
  | 'blogCatCases'
  | 'blogCatAuctions'
  | 'blogCatTips'
  | 'blogFeaturedTitle'
  | 'blogFeaturedSub'
  | 'blogFeaturedCta'
  | 'blogReadingTime'
  | 'blogAuthorPrefix'
  | 'blogLatestTitle'
  | 'blogLatestCountLabel'
  | 'blogReadMore'
  | 'blogNewsletterTitle'
  | 'blogNewsletterSub'
  | 'blogNewsletterBtn'
  | 'blogTagsTitle'
  | 'blogTagsSub'
  | 'blogFaqLink'
  | 'casesKicker'
  | 'casesPageTitle'
  | 'casesPageSub'
  | 'casesLabelTurnkey'
  | 'casesLabelMarket'
  | 'casesLabelUsaPrice'
  | 'casesLabelSavings'
  | 'casesCtaBlog'
  | 'casesCtaHome'
  | 'casesCtaCalc'
  | 'casesCtaTransit'
  | 'casesSeoP1'
  | 'faqKicker'
  | 'faqPageTitle'
  | 'faqPageSub'
  | 'faqDeliveryTimeQuestion'
  | 'faqDeliveryTimeAnswer'
  | 'faqTurnkeyQuestion'
  | 'faqTurnkeyAnswer'
  | 'faqTransparencyQuestion'
  | 'faqTransparencyAnswer'
  | 'faqInspectionQuestion'
  | 'faqInspectionAnswer'
  | 'faqCtaHome'
  | 'faqCtaContacts'
  | 'legalKicker'
  | 'termsTitle'
  | 'termsSub'
  | 'termsS1Title'
  | 'termsS1Text'
  | 'termsS2Title'
  | 'termsS2Text'
  | 'termsS3Title'
  | 'termsS3Text'
  | 'termsS4Title'
  | 'termsS4Text'
  | 'termsS5Title'
  | 'termsS5Text'
  | 'termsCtaPrivacy'
  | 'termsCtaHome'
  | 'privacyTitle'
  | 'privacySub'
  | 'privacyCtaTerms'
  | 'privacyCtaHome'
  | 'ctHeroKicker'
  | 'ctHeroTitle'
  | 'ctHeroSub'
  | 'ctHeroFactOffices'
  | 'ctHeroFactDelivery'
  | 'ctHeroFactChat'
  | 'ctHeroFactHours'
  | 'ctQuickTitle'
  | 'ctQuickSub'
  | 'ctQuickCta'
  | 'ctChannelPhoneLabel'
  | 'ctChannelPhoneHintMain'
  | 'ctChannelPhoneHintSales'
  | 'ctChannelEmailHint'
  | 'ctChannelTelegramHint'
  | 'ctOfficeSectionTitle'
  | 'ctOfficeSectionSub'
  | 'ctMapAriaLabel'
  | 'ctMapBadge'
  | 'ctAddressLabel'
  | 'ctAddressCoords'
  | 'ctAddressNearest'
  | 'ctAddressFromWarsaw'
  | 'ctAddressFromWarsawValue'
  | 'ctDirectionsLabel'
  | 'ctWazeLabel'
  | 'ctChannelsSectionTitle'
  | 'ctChannelsSectionSub'
  | 'ctEuropeBadge'
  | 'ctEuropeTitle'
  | 'ctEuropeLead'
  | 'ctEuropeMapAriaLabel'
  | 'ctMapControlsAriaLabel'
  | 'ctRepHqTag'
  | 'ctRepCountryPoland'
  | 'ctRepCountryLithuania'
  | 'ctRepCountryCzechia'
  | 'ctRepCountryUK'
  | 'ctRepCountryRomania'
  | 'ctCityLondon'
  | 'ctCityKlaipeda'
  | 'ctCityPrague'
  | 'ctCityConstanta'
  | 'ctHoursSectionTitle'
  | 'ctHoursSectionSub'
  | 'ctHoursOfficeTitle'
  | 'ctHoursOnlineTitle'
  | 'ctHoursDeliveryTitle'
  | 'ctHoursMonFri'
  | 'ctHoursEveryDay'
  | 'ctHoursSaturday'
  | 'ctHoursSunday'
  | 'ctHoursSatSun'
  | 'ctHoursTelegramChat'
  | 'ctHoursOnAppointment'
  | 'ctHoursDayOff'
  | 'ctHoursDuration'
  | 'ctHoursDurationValue'
  | 'ctNavFaqLabel'
  | 'ctNavFaqHint'
  | 'ctNavCalcLabel'
  | 'ctNavCalcHint'
  | 'ctNavHomeLabel'
  | 'ctNavHomeHint'
  | 'ctJsonLdDesc'
  | 'ctAddressMapQuery'
  | 'ctAddressLine1'
  | 'ctAddressLine2'
  | 'dcCalcKicker'
  | 'dcCalcTitle'
  | 'dcCalcSub'
  | 'dcCalcLeftTitle'
  | 'dcCalcLeft1'
  | 'dcCalcLeft2'
  | 'dcCalcLeft3'
  | 'dcCalcLeft4'
  | 'dcCalcLeft5'
  | 'dcCalcLeft6'
  | 'dcCalcRightTitle'
  | 'dcCalcRight1'
  | 'dcCalcRight2'
  | 'dcCalcRight3'
  | 'dcCalcRight4'
  | 'dcCalcRight5'
  | 'dcCalcRight6'
  | 'dcCalcStepsTitle'
  | 'dcCalcStep1'
  | 'dcCalcStep2'
  | 'dcCalcStep3'
  | 'dcCalcStep4'
  | 'dcCalcCtaCatalog'
  | 'dcCalcCtaPhoneLabel'
  | 'dcVideoKicker'
  | 'dcVideoTitle'
  | 'dcVideoSub'
  | 'dcVideoImgAlt'
  | 'dcAppKicker'
  | 'dcAppTitle'
  | 'dcAppLead'
  | 'dcAppFeature1'
  | 'dcAppFeature2'
  | 'dcAppFeature3'
  | 'dcAppFeature4'
  | 'dcAppStatus'
  | 'dcAppEta'
  | 'dcDesktopKicker'
  | 'dcDesktopTitle'
  | 'dcDesktopSub'
  | 'dcFeedbackKicker'
  | 'dcFeedbackTitle'
  | 'dcReview1'
  | 'dcReview1Author'
  | 'dcReview2'
  | 'dcReview2Author'
  | 'dcReview3'
  | 'dcReview3Author'
  | 'dcFaqKicker'
  | 'dcFaqTitle'
  | 'dcFaq1Q'
  | 'dcFaq1A'
  | 'dcFaq2Q'
  | 'dcFaq2A'
  | 'dcFaq3Q'
  | 'dcFaq3A'
  | 'dcFaq4Q'
  | 'dcFaq4A'
  | 'dcBlogKicker'
  | 'dcBlogTitle'
  | 'dcBlogPost1Title'
  | 'dcBlogPost2Title'
  | 'dcBlogPost3Title'
  | 'dcBlogReadLink'
  | 'homeBudgetTitle'
  | 'homeBudgetSubtitle'
  | 'homeBudgetBodyTypeLabel'
  | 'homeBudgetYearLabel'
  | 'homeBudgetYearRangeLabel'
  | 'homeBudgetBudgetLabel'
  | 'homeBudgetHint'
  | 'homeBudgetContactsLabel'
  | 'homeBudgetSubmit'
  | 'homeBudgetConsent'
  | 'homeBodySedan'
  | 'homeBodyCrossover'
  | 'homeBodyCoupe'
  | 'homeBodyHatchback'
  | 'homeBodyCabriolet'
  | 'homeBodyMinivan'
  | 'homeBodyMicrobus'
  | 'homeBodyPickup'
  | 'homeTransitArrival'
  | 'homeTransitInTransitBadge'
  | 'homeLocAddressStreet'
  | 'homeBudgetExtrasTitle'
  | 'homeBudgetMake'
  | 'homeBudgetModel'
  | 'homeBudgetGeneration'
  | 'homeBudgetDrive'
  | 'homeBudgetFuel'
  | 'homeBudgetGearbox'
  | 'homeBudgetColor'
  | 'homeBudgetDamageType'
  | 'homeBudgetSteering'
  | 'homeBudgetPower'
  | 'homeBudgetEngineVol'
  | 'homeBudgetAny'
  | 'statusDamageUnknown'
  | 'statusDamageCheck'
  | 'statusDamageOk'
  | 'statusKeysYes'
  | 'statusKeysNo'
  | 'statusKeysUnknown'
  | 'statusSold'
  | 'statusReady'
  | 'statusInTransit'
  | 'statusDocsCustom'
  | 'statusDocsUnclear'
  | 'transitSeoP1'
  | 'transitSeoP2'
  | 'transitSeoH2'
  | 'transitSeoP3'
  | 'transitSeoCtaCalc'
  | 'transitSeoCtaContacts'
  | 'carPageH1Suffix'
  | 'carPageSeoText'
  | 'carPageNotFound'
  | 'carPageCtaTransit'
  | 'carPageCtaCalc'
  | 'carPageCtaContacts'
  | 'carPageLabelVin'
  | 'carPageLabelYear'
  | 'carPageLabelMake'
  | 'carPageLabelModel'
  | 'carPageLabelLocation'
  | 'carPageLabelMileage'
  | 'calcSeoTitle'
  | 'calcSeoP1'
  | 'calcSeoP2'
  | 'calcFaqTitle'
  | 'calcFaqQ1'
  | 'calcFaqA1'
  | 'calcFaqQ2'
  | 'calcFaqA2'
  | 'calcFaqQ3'
  | 'calcFaqA3'
  | 'calcFaqQ4'
  | 'calcFaqA4'
  | 'calcFaqQ5'
  | 'calcFaqA5'
  | 'calcFaqQ6'
  | 'calcFaqA6'
  | 'footerCalculator'
  | 'footerCabinet'
  | 'cabinetIntro'
  | 'footerContacts'
  | 'authLoginTitle'
  | 'authLoginLead'
  | 'authRegisterTitle'
  | 'authRegisterLead'
  | 'authNameLabel'
  | 'authEmailLabel'
  | 'authPasswordLabel'
  | 'authLoginSubmit'
  | 'authRegisterSubmit'
  | 'authGoogleButton'
  | 'authNoAccount'
  | 'authHaveAccount'
  | 'authGoRegister'
  | 'authGoLogin'
  | 'authLogout'
  | 'authModeMock'
  | 'authErrorGeneric'
  | 'authSessionLoadingTitle'
  | 'authSessionLoadingLead'
  | 'authCallbackLoadingTitle'
  | 'authCallbackLoadingLead'
  | 'authCallbackErrorTitle'
  | 'authCallbackErrorLead'
  | 'cabinetNeedAuthTitle'
  | 'cabinetNeedAuthLead'
  | 'cabinetOpenLogin'
  | 'cabinetOpenRegister'
  | 'cabinetWelcome'
  | 'faqFullKicker'
  | 'faqFullTitle'
  | 'faqFullSub'
  | 'seoFaqFullTitle'
  | 'seoFaqFullDescription'
  | 'faqFullQ1'
  | 'faqFullA1'
  | 'faqFullQ2'
  | 'faqFullA2'
  | 'faqFullQ3'
  | 'faqFullA3'
  | 'faqFullQ4'
  | 'faqFullA4'
  | 'faqFullQ5'
  | 'faqFullA5'
  | 'faqFullQ6'
  | 'faqFullA6'
  | 'faqFullQ7'
  | 'faqFullA7'
  | 'faqFullQ8'
  | 'faqFullA8'
  | 'faqFullQ9'
  | 'faqFullA9'
  | 'faqFullQ10'
  | 'faqFullA10'
  | 'faqFullQ11'
  | 'faqFullA11'
  | 'faqFullQ12'
  | 'faqFullA12'
  | 'faqFullQ13'
  | 'faqFullA13'
  | 'faqFullQ14'
  | 'faqFullA14'
  | 'faqFullQ15'
  | 'faqFullA15'
  | 'faqFullQ16'
  | 'faqFullA16'
  | 'faqFullQ17'
  | 'faqFullA17'
  | 'faqFullQ18'
  | 'faqFullA18'
  | 'faqFullCtaCalc'
  | 'faqFullCtaContacts'
  | 'faqFullCtaTransit'

type Messages = Record<string, string>

export const messages: Record<Locale, Messages> = {
  uk: {
    navHome: 'Головна',
    navCatalog: 'Каталог авто',
    navCatalogUsa: 'Каталог авто в США',
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
    footerTelegram: 'Messenger',
    footerYoutube: 'YouTube',
    footerInstagram: 'Instagram',
    footerFacebook: 'Facebook',
    footerBlog: 'Блог',
    footerFaq: 'FAQ',
    footerDirections: 'Напрямки',
    footerDirectionUsa: 'Авто з США',
    footerDirectionChina: 'Авто з Китаю',
    footerDirectionEurope: 'Авто з Європи',
    footerDirectionMoto: 'Мото та RORO',
    footerAddress: 'Jawczyce, ul. Poznanska, 56, 05-850, Polska',
    footerCopyright: '© 2026 BID BIDDERS. Всі права захищено.',
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
    headerMenuLabel: 'Меню · BID BIDDERS',
    headerMenuClose: 'Закрити меню',
    cookieAriaLabel: 'Налаштування cookie',
    cookieTitle: 'Ми використовуємо файли cookie',
    cookieText: 'Щоб сайт працював стабільно та швидко, ми використовуємо необхідні cookie. Аналітичні cookie допомагають покращувати сервіс. Ви можете обрати формат згоди.',
    cookieNecessary: 'Лише необхідні',
    cookieAccept: 'Прийняти всі',
    cookieDetails: 'Детальніше',
    seoHomeTitle: 'Ваш надійний партнер по імпорту авто з США, Канади та Кореї | BID BIDDERS',
    seoHomeDescription: 'Авто під ключ від €8,000. Економія до €7,000. Доставка 45-60 днів. Каталог, авто в дорозі, авто в наявності, огляд на майданчику, застосунок для купівлі на аукціоні.',
    seoCatalogTitle: 'Каталог авто з аукціонів США | BID BIDDERS',
    seoCatalogDescription: 'Перегляньте каталог автомобілів з аукціонів Copart, IAAI та Manheim. Фільтрація за маркою, роком, бюджетом і станом. Повний розрахунок під ключ.',
    seoInStockTitle: 'Авто в наявності — готові до відправки | BID BIDDERS',
    seoInStockDescription: 'Автомобілі, що вже знаходяться в Польщі або готові до відправки. Огляд на майданчику, документи готові. Швидка передача.',
    seoTransitTitle: 'Авто в дорозі — відстежуйте онлайн | BID BIDDERS',
    seoTransitDescription: 'Понад 1800 автомобілів на шляху до Польщі. Відстежуйте статус доставки в реальному часі та отримуйте актуальні оновлення.',
    seoCalculatorTitle: 'Калькулятор вартості імпорту авто | BID BIDDERS',
    seoCalculatorDescription: 'Розрахуйте повну вартість авто під ключ: аукціон, доставка, мито, ПДВ. Точний розрахунок без прихованих платежів.',
    seoBlogTitle: 'Блог про імпорт авто зі США | BID BIDDERS',
    seoBlogDescription: 'Статті, кейси та поради щодо купівлі авто на американських аукціонах, логістики та митного оформлення в Польщі.',
    seoCasesTitle: 'Кейси клієнтів — реальні угоди та економія | BID BIDDERS',
    seoCasesDescription: 'Реальні приклади купівлі авто через BID BIDDERS: ціна, економія, терміни та відгуки клієнтів.',
    seoFaqTitle: 'Часті запитання про імпорт авто | BID BIDDERS',
    seoFaqDescription: 'Відповіді на питання про терміни доставки, вартість під ключ, гарантії, VIN-перевірку та огляд авто на майданчику.',
    seoContactsTitle: 'Контакти — звʼяжіться з BID BIDDERS',
    seoContactsDescription: 'Телефон, email, адреса офісу та посилання на соціальні мережі команди BID BIDDERS. Консультація безкоштовна.',
    seoPrivacyTitle: 'Політика конфіденційності | BID BIDDERS',
    seoPrivacyDescription: 'Умови обробки персональних даних, використання файлів cookie та захист інформації користувачів BID BIDDERS.',
    seoTermsTitle: 'Умови використання | BID BIDDERS',
    seoTermsDescription: 'Правила користування сайтом та послугами BID BIDDERS, обмеження відповідальності та умови надання сервісу.',
    seoLotTitle: 'Деталі лота | BID BIDDERS',
    seoLotDescription: 'Детальна інформація про лот: фото, характеристики, VIN, стан та поточна ставка на аукціоні.',
    routeInStockAlt: 'Авто в наявності в Польщі — BID BIDDERS',
    routeTransitAlt: 'Авто в дорозі',
    routeAuctionAlt: 'Під замовлення з аукціону',
    routeCatalogAlt: 'Каталог авто',
    transitCtaAlt: 'Авто в дорозі до Польщі — понад 1800 варіантів',
    stockCtaAlt: 'Авто в наявності на майданчику BID BIDDERS',
    homeB2cNameError: 'Імʼя має містити мінімум 2 символи.',
    homePhoneRequiredError: 'Телефон є обовʼязковим.',
    homeB2cSuccess: 'Дякуємо! Ми отримали заявку і звʼяжемося з вами протягом 15 хвилин у робочий час.',
    homeB2bFormatError: 'Вкажіть формат співпраці.',
    homeB2bSuccess: 'Дякуємо! Заявку прийнято, спеціаліст B2B напряму звʼяжеться з вами для узгодження умов.',
    homeHeroEyebrow: 'BID BIDDERS · 13 років довіри',
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
    homeTrustFourDesc: 'Телефон · WhatsApp · Messenger',
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
    homeEconKicker: 'Економіка · Real numbers',
    homeEconTitle: 'Чому це вигідніше, ніж ринок Польщі',
    homeEconLead: 'Реальна економіка на прикладах клієнтів — без округлень і маркетингу.',
    homeEconCase: 'Кейс ·',
    homeEconMarket: 'Ринок Польщі',
    homeEconTurnkey: 'BID BIDDERS під ключ',
    homeEconSave: 'Економія',
    homeEconAvgSave: 'Середня економія',
    homeEconDesc: 'Приклади базуються на реальних кейсах. Фінальна вартість залежить від моделі, стану авто та логістики.',
    homeEconBtn: 'Порахувати мою економію',
    homeCalcKicker: 'Калькулятор під ключ',
    homeCalcTitle: 'Прорахунок до ставки',
    homeCalcLead: 'Порахуйте фінальну вартість авто до покупки: ставка, комісії, логістика, податки та доставка.',
    homeCalcCheck1: 'Лот + аукціонні збори',
    homeCalcCheck2: 'Логістика до порту та морем',
    homeCalcCheck3: 'Митниця, податки, сертифікація',
    homeCalcCheck4: 'Доставка у ваше місто',
    homeCalcBadge: 'Реальний кейс прорахунку',
    homeCalcBadgeSave: 'Економія {amount} завдяки точному розрахунку до ставки',
    homeCalcBtn: 'Отримати розрахунок',
    homeCalcBtnOpen: 'Відкрити калькулятор',
    homeCalcCardTag: 'Приклад розрахунку',
    homeCalcCardTitle: 'Ваш лот · Авто з аукціону',
    homeCalcDestLabel: 'Порт призначення (EU)',
    homeCalcBidLabel: 'Ставка на аукціоні',
    homeCalcBidHint: 'введіть суму',
    homeCalcBidAria: 'Сума ставки у євро',
    homeCalcLine1: 'Комісія (аукціон + сервіс)',
    homeCalcLine2: 'Логістика до ЄС',
    homeCalcLine3: 'Податки (ПДВ {vat}%)',
    homeCalcLine4: 'Доставка у ваше місто',
    homeCalcTotal: 'Підсумок під ключ ({port})',
    homeCalcNote: 'Орієнтовний розрахунок. Фінальна вартість залежить від моделі, стану авто, тарифу логістики та місця покупки.',
    homeCalcStep1: 'Оберіть авто',
    homeCalcStep1Desc: 'Знайдіть лот на аукціоні',
    homeCalcStep2: 'Вкажіть ставку',
    homeCalcStep2Desc: 'Задайте суму для торгів',
    homeCalcStep3: 'Обчисліть',
    homeCalcStep3Desc: 'Отримайте повний кошторис під ключ',
    homeCalcStep4: 'Заявка',
    homeCalcStep4Desc: 'Надішліть форму для точного прорахунку',
    homeCalcTrust1: 'Прозорий кошторис',
    homeCalcTrust1Desc: 'Без прихованих платежів після покупки',
    homeCalcTrust2: 'Реальні тарифи',
    homeCalcTrust2Desc: 'Оновлюємо логістику та платежі регулярно',
    homeCalcTrust3: 'Підтримка менеджера',
    homeCalcTrust3Desc: 'Перевіримо кейс і уточнимо фінальну цифру',
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
    thankYouTitle: 'Дякуємо! Заявку отримано.',
    thankYouText: 'Наша команда зв\'яжеться з вами в робочий час з 10:00 до 20:00.',
    thankYouBtn: 'Зрозуміло, дякую',
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
    homeStockLoc: 'Локація',
    homeStockLocCity: 'Jawczyce, ul. Poznanska 56',
    homeStockCtaAll: 'Усі авто',
    homeStockBadge: 'В наявності',
    homeStockCardViewAll: 'Дивитися всі авто в наявності',
    homeStockCardViewAllDesc: 'Перейдіть у повний каталог авто на майданчику та оберіть варіант для огляду вже сьогодні.',
    homeStockCardViewAllCta: 'Каталог в наявності',
    homeStockLiveQuestion: 'Хочете подивитися наживо?',
    homeStockLiveSchedule: 'Записатися на огляд',
    homeCatalogKicker: 'Каталог · Copart · IAAI · Manheim',
    homeCatalogHeading: '200 000+ аукціонів щодня',
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
    homeHowAct: 'Акт',
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
    homeHowCtaLead: 'Готові розрахувати ваш автомобіль під ключ?',
    homeHowCtaBtn: 'Отримати розрахунок',
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
    homeLocShowroom: 'BID BIDDERS · SHOWROOM',
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
    navChinaCars: 'Авто з Китаю',
    footerLotSources: 'Офіційні джерела лотів',
    lotLoading: 'Завантажуємо авто',
    lotLoadingDesc: 'Отримуємо актуальні дані з API.',
    lotNotFound: 'Авто не знайдено',
    lotNotFoundDesc: 'Перевірте правильність посилання або поверніться у каталог.',
    lotNotFoundBtn: 'Перейти до каталогу',
    lotModeTransit: 'Авто в дорозі',
    lotModeInStock: 'Авто в наявності',
    lotModeCatalog: 'Каталог',
    lotStatusTransit: 'В дорозі',
    lotStatusInStock: 'В наявності',
    lotStatusAtAuction: 'На аукціоні',
    lotLabelLocation: 'Локація офісу',
    lotLabelDispatchPort: 'Порт відправлення',
    lotLabelPickupPoint: 'Місце видачі',
    lotLabelStatus: 'Статус',
    lotLabelAuctionDate: 'Дата аукціону',
    lotLabelEstDelivery: 'Орієнт. доставка',
    lotDeliveryTbd: 'Уточнюється',
    lotWatching: 'У спостереженні',
    lotWatch: 'Слідкувати',
    lotCarfaxBtn: 'Купити звіт CARFAX',
    lotGalleryPrev: 'Попереднє фото',
    lotGalleryNext: 'Наступне фото',
    lotLiveBadgeAuction: 'Прямий аукціон',
    lotLiveBadgeTransit: 'Авто в дорозі',
    lotLiveBadgeReady: 'Готове до видачі',
    lotSpecsMainTitle: 'Основні характеристики',
    lotLabelSeller: 'Продавець',
    lotLabelDocuments: 'Документи',
    lotLabelPrimaryDamage: 'Первинне пошкодження',
    lotLabelSecondaryDamage: 'Вторинне пошкодження',
    lotLabelMileage: 'Пробіг',
    lotLabelKeys: 'Ключ',
    lotCopyVin: 'Копіювати',
    lotSpecsTechTitle: 'Технічні характеристики',
    lotLabelBodyType: 'Тип кузова',
    lotLabelColor: 'Колір',
    lotLabelEngine: 'Двигун',
    lotLabelTransmission: 'Трансмісія',
    lotLabelFuel: 'Паливо',
    lotLabelDrive: 'Привід',
    lotLabelStartCode: 'Початковий код',
    lotLabelStartCodeValue: 'На ходу',
    lotLabelAcvRetail: 'ACV / Ретейл',
    lotLabelBodyExtended: 'Розширений тип кузова',
    lotLabelSaleStatus: 'Статус продажу',
    lotShowMore: 'Показати більше (4)',
    lotShowLess: 'Показати менше',
    lotSourceLink: 'Відкрити оригінальний лот на',
    lotServicesTitle: 'Додаткові послуги',
    lotService11: 'Автомобіль з обмеженням на покупку',
    lotService12: 'Небезпечний вантаж',
    lotService13: 'Великогабаритний',
    lotService14: 'Великогабаритний+',
    lotServicesNote: 'Встановлення галочки додасть суму до орієнтовної підсумкової ціни.',
    lotBuyNowDesc: 'Миттєва купівля без торгів',
    lotBuyNowBtn: 'Купити зараз',
    lotSbCurrentBid: 'Поточна ставка',
    lotSbEstimate: 'Оцінка:',
    lotSbMaxBid: 'Ваша максимальна ставка',
    lotSbDecrease: 'Зменшити',
    lotSbIncrease: 'Збільшити',
    lotSbBidNow: 'Зробити ставку зараз',
    lotSbHowToBid: 'Як зробити ставку? →',
    timerUnitD: 'д',
    timerUnitH: 'г',
    timerUnitM: 'хв',
    timerUnitS: 'с',
    lotSbTimeLeft: 'Час, що залишився',
    lotSbAuctionEnded: 'Аукціон завершено',
    lotSbTimerUntil: 'до',
    lotSbCalcTitle: 'Калькулятор підсумкової ціни',
    lotCalcBid: 'Ставка (поточна)',
    lotCalcAuctionFee: 'Аукціонний збір',
    lotCalcTransport: 'Транспорт до порту',
    lotCalcShipping: 'Морська доставка',
    lotCalcDocs: 'Документи + сервіс BID BIDDERS',
    lotCalcSubtotal: 'Разом (до митниці)',
    lotCalcNote: 'Орієнтовна ціна без митних платежів. Курс USD/EUR = 0.91',
    lotCustomsCalcTitle: 'Калькулятор митних платежів',
    lotCustomsDuty: 'Мито 10%',
    lotCustomsVat: 'ПДВ 21%',
    lotCustomsBroker: 'Брокер та супровід',
    lotCustomsTotal: 'Митні платежі',
    lotCustomsFinal: 'Фінальна вартість',
    lotCustomsNote: 'Розрахунок орієнтовний. Остаточна вартість може відрізнятись залежно від типу документа та країни.',
    lotSbFinalPrice: 'Фінальна ціна',
    lotSbTurnkeyFixed: 'Фіксована вартість під ключ',
    lotSbFactDelivery: 'Орієнт. доставка',
    lotSbFactDeliveryValue: 'В дорозі',
    lotSbContact: "Зв'язатися щодо авто",
    lotSbWhatsIncluded: 'Що входить у ціну',
    lotSbIncluded1: 'Викуп на аукціоні',
    lotSbIncluded2: 'Транспорт США → порт',
    lotSbIncluded3: 'Океанська доставка',
    lotSbIncluded4: 'Розмитнення в Європі',
    lotSbIncluded5: 'Сервіс та супровід BID BIDDERS',
    lotSbPriceKicker: 'Ціна',
    lotSbReadyLviv: 'Готове до видачі у Львові',
    lotSbFactCert: 'Сертифікація',
    lotSbFactCertValue: 'Пройдено',
    lotSbBuyNow: 'Купити зараз',
    lotSbScheduleView: 'Записатися на огляд',
    lotSbLeaseCalc: 'Калькулятор лізингу',
    lotSbMonthlyPayment: 'Щомісячний платіж',
    lotSbPerMonth: '/міс',
    lotSbDownPayment: 'Перший внесок',
    lotSbLeaseTerm: 'Термін',
    lotSbLeaseMonths: 'міс',
    lotSbLeaseNote: 'Розрахунок попередній. Точні умови формуємо після погодження з лізинговою компанією.',
    lotDescTitle: 'Опис автомобіля',
    lotDescSubtitle: 'Повна технічна інформація по цій карті.',
    lotLabelMake: 'Марка',
    lotLabelModel: 'Модель',
    lotLabelYear: 'Рік',
    lotLabelPrice: 'Ціна',
    lotKnowTitle: 'Що важливо знати про',
    lotKnowSubtitle: 'Статус, доставка, комплектація та кроки для покупки готового авто.',
    lotKnowOverviewTitle: 'Короткий огляд',
    lotKnowOverviewStatus: 'авто зі статусом',
    lotKnowOverviewLoc: 'Локація:',
    lotKnowOverviewSpecs: 'За характеристиками:',
    lotKnowOverviewMileage: 'Пробіг:',
    lotKnowPriceFrom: 'Поточна вартість — від',
    lotKnowPriceEnd: 'Далі зніметься реєстрація, підготовка, сертифікація та передача в Польщі / Європі.',
    lotKnowCheckTitle: 'Що перевірити перед рішенням',
    lotKnowCheckDamage: 'Список пошкоджень:',
    lotKnowCheckDocs: 'Перевірка документів:',
    lotKnowCheckBudget: 'Орієнтовний бюджет: від',
    lotKnowCheckBudgetSuffix: 'з урахуванням логістики',
    lotKnowCheckAgreement: 'Узгодьте бюджет видачі авто / доставки в Польщу / Європу',
    lotKnowChip1: 'Імпорт під ключ',
    lotKnowChip2: 'Доставка і розмитнення',
    lotKnowChip3: 'Консультація',
    lotSimilarTitle: 'Схожі',
    lotSimilarTitleTransit: 'авто в дорозі',
    lotSimilarTitleInStock: 'авто в наявності',
    lotSimilarTitleCatalog: 'авто на аукціоні',
    lotSimilarSubtitle: 'Ще кілька релевантних варіантів для швидкого переходу між картками.',
    lotSimilarPriceLabel: 'Ціна:',
    lotSimilarMileageLabel: 'Пробіг:',
    lotSimilarStatusLabel: 'Статус:',
    lotSimilarAllTransit: 'Усі авто в дорозі',
    lotSimilarAllInStock: 'Усі авто в наявності',
    lotSimilarAllCatalog: 'Усі лоти',
    lotSimilarLinkCatalog: 'Каталог аукціонів',
    lotSimilarLinkCar: 'Підбір авто',
    lotSimilarLinkLogistics: 'Логістика і митниця',
    lotSimilarLinkBlog: 'Поради у блозі',
    lotFaqTitle: 'Поширені запитання про',
    lotFaqSubtitle: 'Відповіді про стан, ціну, переваги та логістику цього авто.',
    lotFaq1Q: 'Що це за авто і в якому воно статусі?',
    lotFaq1A: 'Це реальний лот з нашого inventory. Статус відображається у блоці «Статус та готовність авто» та оновлюється по мірі проходження логістики.',
    lotFaq2Q: 'Які характеристики тут найважливіші?',
    lotFaq2A: 'Дивіться спочатку на VIN, рік, пробіг, тип пошкоджень та наявність ключа. Решта полів (кузов, двигун, колір) впливають радше на експлуатацію, а не на юридичну чистоту.',
    lotFaq3Q: 'Який орієнтовний бюджет під ключ?',
    lotFaq3A: 'Блок «Бюджет по готовому авто» показує поточну ціну + сервіс BID BIDDERS. Для точного розрахунку з логістикою і митницею запустіть калькулятор у сайдбарі або на сторінці /calculator.',
    lotFaq4Q: 'На що звернути увагу перед рішенням?',
    lotFaq4A: 'Перевірте первинне і вторинне пошкодження, тип документа (Title), наявність ключа, а також реальні фотографії в галереї. Ми радимо також запросити додаткові знімки у нашого менеджера.',
    lotStepsTitle: 'Як проходить покупка готового авто',
    lotStepsSubtitle: 'Чотири кроки від перевірки машини до передачі ключів.',
    lotStep1Title: 'Перевіряємо авто',
    lotStep1Text: 'Уточнюємо стан, пробіг, документи та готовність авто до видачі або подальшої доставки.',
    lotStep2Title: 'Рахуємо бюджет',
    lotStep2Text: 'Формуємо прозорий прорахунок з урахуванням ціни авто, підготовки, сертифікації та супроводу.',
    lotStep3Title: 'Оформлюємо документи',
    lotStep3Text: 'Готуємо оферту, договір і всі супровідні папери для безпечного передавання клієнту.',
    lotStep4Title: 'Передаємо в Польщі / Європі',
    lotStep4Text: 'Авто проходить фінальні етапи і передається разом із підтримкою команди BID BIDDERS.',
    lotSummaryTitle: 'Що важливо знати перед рішенням по',
    lotSummarySubtitle: 'Стан, поточний статус і орієнтир по фінальному бюджету.',
    lotSummaryStatusTitle: 'Статус та готовність авто',
    lotSummaryStatusP1: 'зараз знаходиться у статусі',
    lotSummaryStatusP2: 'Перед покупкою ми уточнюємо місцезнаходження, наявність документів і сценарій передачі в Польщі / Європі.',
    lotSummaryStatusFacts: 'За наявними даними: документи —',
    lotSummaryStatusFactsDmg: 'пошкодження —',
    lotSummaryStatusFactsLoc: 'локація —',
    lotSummaryStatusP3: 'Якщо потрібен детальний прорахунок, команда BID BIDDERS допоможе з логістикою і розмитненням у реальний бюджет без прихованих сюрпризів.',
    lotSummaryBudgetTitle: 'Бюджет по готовому авто',
    lotSummaryBudgetLead: 'Для готового авто ми орієнтуємося на поточну ціну, підготовку, сертифікацію та супровід передачі.',
    lotBudgetCurrentPrice: 'Поточна ціна авто',
    lotBudgetPrep: 'Підготовка та сервіс',
    lotBudgetPrepValue: 'за запитом',
    lotBudgetCert: 'Сертифікація / реєстрація',
    lotBudgetCertValue: 'індивідуально',
    lotBudgetService: 'Послуга BID BIDDERS',
    lotSummaryCtaCar: 'Підібрати авто',
    lotSummaryCtaLogistics: 'Дізнатися про логістику',
    lotTimerDays: 'д',
    lotTimerHours: 'г',
    lotTimerMinutes: 'хв',
    lotTimerSeconds: 'с',
    lotPickupCity: 'Львів',
    lotDispatchCountry: 'США',
    calcPill: 'Калькулятор імпорту',
    calcHeroTitle: 'Розрахуйте реальну вартість авто під ключ ще до ставки на аукціоні',
    calcHeroDesc: 'Від ставки до фінальної вартості з митницею та сервісом BID BIDDERS.',
    calcHeroNoteTitle: 'Що враховується',
    calcHeroNoteDesc: 'Ставка, аукціонний збір, доставка, документи, брокер, комісія, страхування та податки.',
    calcFormKicker: 'Параметри авто',
    calcFormTitle: 'Введіть вихідні дані',
    calcFormDesc: 'Швидкий локальний підрахунок + точний API з fallback-поведінкою.',
    calcLabelRoute: 'Маршрут / порт',
    calcRouteKlaipeda: 'Клайпеда',
    calcRouteOdesa: 'Одеса',
    calcLabelCarType: 'Тип авто',
    calcCarTypeAuto: 'Легковий',
    calcCarTypeCrossover: 'Кросовер',
    calcCarTypeSuv: 'Позашляховик',
    calcCarTypeMoto: 'Мотоцикл',
    calcCarTypePickup: 'Бус / Пікап',
    calcLabelFuel: 'Тип двигуна',
    calcLabelAuction: 'Аукціон',
    calcLabelDocType: 'Тип документів',
    calcLabelCity: 'Місто відправки',
    calcLabelYear: 'Рік випуску',
    calcLabelBattery: 'Ємність батареї',
    calcLabelEngine: "Об'єм двигуна",
    calcLabelPrice: 'Ціна авто / ставка',
    calcPricePlaceholder: 'Вкажіть вартість авто',
    calcLabelInsurance: 'Страхування',
    calcLabelTransfer: 'Переказ коштів',
    calcBtnRecalc: 'Перерахувати',
    calcBtnReset: 'Скинути',
    calcResultKicker: 'Підсумок',
    calcGroupLogistics: 'Аукціон та логістика',
    calcRowBid: 'Ставка',
    calcRowAuctionFee: 'Аукціонний збір',
    calcRowUsDelivery: 'Доставка по США',
    calcRowDocs: 'Документи',
    calcRowOcean: 'Морська доставка',
    calcRowPortUnload: 'Вигрузка з порту',
    calcRowEuDelivery: 'Доставка порт - ЄС',
    calcRowCustomsDelivery: 'Доставка на митницю',
    calcRowBorderHandling: 'Проходження кордону та залучення спец. транспорту',
    calcGroupCustoms: 'Митниця та сервіс',
    calcCustomsPending: "Деталі митниці та сервісу з'являться після LIVE-розрахунку",
    calcCaptionIdle: 'Введіть дані для розрахунку. Жодних сум до введення параметрів.',
    calcCaptionLoading: 'Підсумок оновлюється після відповіді API.',
    calcCaptionLive: 'Підсумкова сума вже враховує логістику, митницю та сервісні витрати.',
    calcCaptionLiveEu: 'Підсумкова сума враховує логістику в ЄС, вибраний податок, профіль ПДВ та сервісні витрати.',
    calcCaptionFallback: 'Точний підсумок зараз не отримано. Для ручного прорахунку перейдіть у контакти.',
    calcCaptionErr401: 'API калькулятора потребує авторизації. Додайте токен у localStorage (ключ bidbiddersPartnerToken).',
    calcCaptionErr403: 'API калькулятора відхилив запит (403). Перевірте дозволений IP або домен.',
    calcCaptionErr400Prefix: 'API калькулятора повернув 400 (валідація). Деталі:',
    calcCaptionErrJson: 'API калькулятора повернув не JSON. Перевірте gateway/WAF у Network.',
    calcRowCarPrice: 'Вартість авто / ставка',
    calcRowOceanFromPrefix: 'Доставка з США -',
    calcRowPortUnloadOdesa: 'Вигрузка з порту Одеса + брокер',
    calcRowPortUnloadKlaipeda: 'Вигрузка з порту Клайпеда',
    calcRowEuDeliveryPortPrefix: 'Доставка',
    calcCityWarsaw: 'Варшава',
    calcRowExportDocs: 'Документи на експорт авто',
    calcRowExcise: 'Акциз',
    calcRowImportDuty: 'Ввізне мито',
    calcRowVat: 'ПДВ',
    calcRowNonVatFee: 'Фінансовий збір за несплату ПДВ',
    calcRowBroker: 'Брокерські послуги',
    calcRowBiddersFee: 'Комісія BID BIDDERS',
    calcRowInsuranceFee: 'Страхування',
    calcRowMoneyTransfer: 'Комісія за переказ коштів в США',
    calcLabelEuPort: 'Порт призначення (ЄС)',
    calcLabelImportTax: 'Податок на імпорт',
    calcLabelVatProfile: 'ПДВ (профіль)',
    calcRowCustomsAgency: 'Митне агентство',
    calcRouteUnavailable: 'Маршрут тимчасово недоступний',
    calcRowCustomsBase: 'Митна база',
    calcRowTotal: 'РАЗОМ',
    calcBranchPlaceholder: 'Пошук міста...',
    calcBranchNotFound: 'Локацію не знайдено',
    calcAuctionUrlLabel: 'Посилання на лот Copart / IAAI',
    calcAuctionUrlPlaceholder: 'https://www.copart.com/lot/... або https://www.iaai.com/...',
    calcAuctionUrlButton: 'Завантажити дані',
    calcAuctionUrlLoading: 'Завантаження даних лота...',
    calcAuctionUrlSuccess: 'Лот знайдено: {title}',
    calcAuctionUrlBranchMissing: 'Лот знайдено, але місто не розпізнано — виберіть вручну',
    calcAuctionUrlError: 'Помилка завантаження. Введіть параметри вручну',
    calcAuctionUrlUnsupported: 'Непідтримуване посилання. Вставте URL з copart.com або iaai.com',
    calcAuctionUrlIaaiPartial: 'IAAI лот розпізнано. Введіть ціну і місто вручну',
    calcAuctionUrlIaaiUnavailable: 'IAAI тимчасово недоступний. Заповніть ціну та місто вручну',
    calcAuctionUrlPartial: 'Лот розпізнано частково. Перевірте ціну й місто вручну',
    calcFormTitle2: 'Введіть дані',
    calcFormDesc2: 'Вкажіть параметри авто, щоб розрахувати орієнтовну вартість імпорту.',
    calcResultKicker2: 'Орієнтовна вартість',
    calcCaptionIdle2: 'Введіть дані авто, щоб побачити калькуляцію.',
    calcRouteUnavailable2: 'Цей напрямок тимчасово недоступний. Оберіть інший порт або місто аукціону.',
    calcCaptionResult: 'Калькуляція включає аукціон, транспорт, мито, ПДВ та обслуговування BID BIDDERS.',
    calcRowCarPrice2: 'Ціна авто',
    calcRowUsDelivery2: 'Транспорт у США',
    calcRowOceanDelivery: 'Морський транспорт',
    calcRowBiddersFee2: 'Обслуговування BID BIDDERS',
    calcTaxAuto: '10% (Автомобіль)',
    calcTaxTruck: '22% (Вантажний)',
    calcTaxMoto: '6% (Мотоцикл)',
    calcTaxClassic0: '0% (Класика)',
    calcVatClassic9: '9% (Класика)',
    blogHeroKicker: 'Блог BID BIDDERS',
    blogHeroTitle: 'Матеріали про імпорт авто з США та Європи',
    blogHeroSub: 'Покрокові гіди, розбір логістики, митниці та вибору лотів на Copart, IAAI, Manheim. Без води — тільки робочі інсайти від команди BID BIDDERS.',
    blogHeroMetaMaterials: 'Матеріалів у базі',
    blogHeroMetaReaders: 'Читачів на місяць',
    blogHeroMetaCategories: 'Рубрик експертизи',
    blogHeroMetaPerWeek: 'Нових статтей на тиждень',
    blogCatAll: 'Усі',
    blogCatGuides: 'Гіди',
    blogCatCustoms: 'Митниця',
    blogCatLogistics: 'Логістика',
    blogCatCases: 'Кейси',
    blogCatAuctions: 'Аукціони',
    blogCatTips: 'Поради',
    blogFeaturedTitle: 'Рекомендовані матеріали',
    blogFeaturedSub: 'Найцікавіше, що почитати у першу чергу.',
    blogFeaturedCta: 'Всі кейси →',
    blogReadingTime: 'читання',
    blogAuthorPrefix: 'Автор:',
    blogLatestTitle: 'Останні матеріали',
    blogLatestCountLabel: 'Усього статей у рубриці',
    blogReadMore: 'Читати →',
    blogNewsletterTitle: 'Розсилка без спаму',
    blogNewsletterSub: 'Раз на тиждень — головне про авторинок, найкращі лоти та свіжі гіди. Без води, без реклами інших майданчиків.',
    blogNewsletterBtn: 'Підписатись',
    blogTagsTitle: 'Популярні теги',
    blogTagsSub: 'Швидкий пошук матеріалів за ключовим словом.',
    blogFaqLink: 'Відповіді в FAQ →',
    casesKicker: 'Кейси',
    casesPageTitle: 'Реальні кейси клієнтів BID BIDDERS',
    casesPageSub: 'Єдина методика порівняння: ціна під ключ, ціна ринку Польщі, фінальна економія.',
    casesLabelTurnkey: 'Під ключ',
    casesLabelUsaPrice: 'Ціна в США',
    casesLabelMarket: 'Ринок Польщі',
    casesLabelSavings: 'Економія',
    casesCtaBlog: 'Читати блог',
    casesCtaHome: 'На головну',
    casesCtaCalc: 'Розрахувати вартість',
    casesCtaTransit: 'Авто в дорозі',
    casesSeoP1: 'Реальні кейси підтверджують: купити авто зі США через BID BIDDERS вигідніше за ринок Польщі на 5 000–15 000 EUR. Ми спеціалізуємось на імпорті з Copart, IAAI та Manheim.',
    faqKicker: 'FAQ',
    faqPageTitle: 'Часті запитання про імпорт авто',
    faqPageSub: 'Відповіді про терміни, під ключ, гарантії, застосунок і живий огляд на майданчику.',
    faqDeliveryTimeQuestion: 'Скільки триває доставка?',
    faqDeliveryTimeAnswer: 'У середньому 45-60 днів залежно від маршруту, порту та митного завантаження.',
    faqTurnkeyQuestion: 'Що входить у формат під ключ?',
    faqTurnkeyAnswer: 'Підбір лота, торги, викуп, логістика, митниця, документи та видача авто.',
    faqTransparencyQuestion: 'Які гарантії прозорості?',
    faqTransparencyAnswer: 'Один контракт, фіксація смети до торгів, VIN-перевірка і прозорі етапи угоди.',
    faqInspectionQuestion: 'Чи можна приїхати на огляд?',
    faqInspectionAnswer: 'Так, доступний огляд на майданчику за попереднім записом.',
    faqCtaHome: 'Блок FAQ на головній',
    faqCtaContacts: 'Перейти до контактів',
    catalogSortAuctionTime: 'Найближчий аукціон',
    catalogSortPriceDesc: 'Спочатку дорожчі',
    catalogSortPriceAsc: 'Спочатку дешевші',
    catalogSortYearDesc: 'Новіші за роком',
    catalogSortYearAsc: 'Старіші за роком',
    catalogSortMileageAsc: 'Менший пробіг',
    catalogSortMileageDesc: 'Більший пробіг',
    catalogBadgeInTransit: 'В ДОРОЗІ',
    catalogBadgeInStock: 'В НАЯВНОСТІ',
    catalogBadgeNew: 'NEW',
    catalogAuctionBadgeAvailable: 'В НАЯВН.',
    catalogAuctionBadgeReady: 'ГОТОВЕ',
    catalogSellerLocal: 'Локальний',
    catalogStatusInTransit: 'В дорозі',
    catalogStatusInStock: 'В наявності',
    catalogStatusAtAuction: 'На аукціоні',
    catalogPriceLabel: 'Ціна',
    catalogCurrentBidLabel: 'Поточна ставка',
    catalogPriceNoteSeller: 'Продавець: BID BIDDERS',
    catalogPriceNoteLease: 'Доступне до лізингу',
    catalogPriceNoteEstimate: 'Оцінка:',
    catalogDetailMileage: 'Кілометраж',
    catalogDetailLocation: 'Місце',
    catalogDetailDamage: 'Пошкодження',
    catalogDetailStatus: 'Статус',
    catalogCardDetails: 'Детальніше',
    catalogFilterBtn: 'Фільтри',
    catalogFilterTitle: 'Фільтри пошуку',
    catalogFilterResetAll: 'Скинути все',
    catalogToggleWholesale: 'Wholesale — Тільки автомобілі',
    catalogToggleRecent: 'Нещодавно додані — 24 год',
    catalogToggleExcludeActive: 'Виключити авто на аукціоні',
    catalogFilterDocType: 'Тип документа',
    catalogFilterYear: 'Рік',
    catalogFilterBrand: 'Марка',
    catalogFilterModel: 'Модель',
    catalogFilterMileage: 'Одометр',
    catalogFilterFuel: 'Тип двигуна',
    catalogFilterTrans: 'Трансмісія',
    catalogFilterDrive: 'Привід',
    catalogFilterPostal: 'Пошук за індексом',
    catalogFilterReset: 'Скинути',
    catalogRangeFrom: 'від',
    catalogRangeTo: 'до',
    catalogCountSuffix: 'шт',
    catalogSearchPlaceholder: 'Шукати...',
    catalogYearFrom: 'Від',
    catalogYearTo: 'До',
    catalogPostalPlaceholder: 'Поштовий індекс',
    catalogPostalSearch: 'Шукати',
    catalogTabAll: 'Всі',
    catalogTabOpenAuctions: 'Відкриті аукціони',
    catalogTabInProgress: 'В процесі',
    catalogTabClosedToday: 'Завершені сьогодні',
    catalogTabBuyNow: 'Швидка покупка',
    catalogTabArchive: 'Архів аукціонів',
    catalogTabInStock: 'В наявності',
    catalogTabReadyToTransfer: 'Готові до передачі',
    catalogTabOnOrder: 'Під замовлення',
    catalogTabInTransit: 'Авто в дорозі',
    catalogResultsCount: 'автомобілів знайдено',
    catalogLayoutList: 'Список',
    catalogLayoutGrid: 'Сітка',
    catalogLoadMore: 'Завантажити ще',
    legalKicker: 'Юридична інформація',
    termsTitle: 'Умови використання',
    termsSub: 'Користуючись сайтом BID BIDDERS, ви погоджуєтесь із цими умовами.',
    termsS1Title: '1. Загальні положення',
    termsS1Text: 'Сайт має інформаційний характер і не є публічною офертою. Фінальні умови співпраці визначаються індивідуальним договором.',
    termsS2Title: '2. Контент і авторські права',
    termsS2Text: 'Тексти, дизайн, графіка та інші матеріали сайту належать BID BIDDERS або використовуються на законних підставах.',
    termsS3Title: '3. Обмеження відповідальності',
    termsS3Text: 'Ми докладаємо максимум зусиль для точності інформації, однак не гарантуємо повну відсутність технічних помилок чи затримок оновлення даних.',
    termsS4Title: '4. Заявки та комунікація',
    termsS4Text: 'Надсилаючи заявку, ви підтверджуєте достовірність наданих даних і погоджуєтесь на зворотний зв\'язок для обробки запиту.',
    termsS5Title: '5. Застосовне право',
    termsS5Text: 'До правовідносин застосовується законодавство Польщі, якщо інше не передбачено договором.',
    termsCtaPrivacy: 'Політика конфіденційності',
    termsCtaHome: 'На головну',
    privacyTitle: 'Політика конфіденційності та файлів cookie',
    privacySub: 'Умови збору та обробки персональних даних. Юридичний текст підлягає фінальній перевірці юридичним відділом.',
    privacyCtaTerms: 'Умови використання',
    privacyCtaHome: 'На головну',
    ctHeroKicker: 'Контакти BID BIDDERS',
    ctHeroTitle: 'Контакти та майданчик BID BIDDERS у Польщі',
    ctHeroSub: 'Приїжджайте на огляд, отримайте консультацію по документах та фінальній вартості володіння. Команда представників по всій Європі — від Лондона до Клайпеди.',
    ctHeroFactOffices: 'Представництва у ЄС',
    ctHeroFactDelivery: 'Доставлених авто щомісяця',
    ctHeroFactChat: 'Чат у Messenger',
    ctHeroFactHours: 'Робочі години, пн–пт',
    ctQuickTitle: 'Зв\'язатися швидко',
    ctQuickSub: 'Менеджер відповідає у робочі години. Чат — цілодобово.',
    ctQuickCta: 'Замовити прорахунок →',
    ctChannelPhoneLabel: 'Телефон (PL)',
    ctChannelPhoneHintMain: 'Головний номер, Polska',
    ctChannelPhoneHintSales: 'Менеджер з продажу',
    ctChannelEmailHint: 'Загальні питання',
    ctChannelTelegramHint: 'Швидкі відповіді у чаті',
    ctOfficeSectionTitle: 'Головний офіс та шоурум',
    ctOfficeSectionSub: 'Сюди приїжджайте на особисту консультацію, огляд авто та оформлення угоди. Паркування є, вхід вільний за попереднім записом.',
    ctMapAriaLabel: 'Карта BID BIDDERS, Польща',
    ctMapBadge: 'Головний офіс',
    ctAddressLabel: 'Адреса',
    ctAddressCoords: 'Координати:',
    ctAddressNearest: 'Ближче за все:',
    ctAddressFromWarsaw: 'Доїхати з Варшави:',
    ctAddressFromWarsawValue: '~25 хв на авто',
    ctDirectionsLabel: 'Прокласти маршрут',
    ctWazeLabel: 'Навігатор',
    ctChannelsSectionTitle: 'Усі канали зв\'язку',
    ctChannelsSectionSub: 'Телефон — для швидких дзвінків. Email — для офіційних документів та комерційних пропозицій. Messenger — для швидких питань у будь-який час.',
    ctEuropeBadge: 'Представники у ЄС',
    ctEuropeTitle: 'Карта представників у Європі',
    ctEuropeLead: 'Наші офіси та партнери в ключових країнах імпорту та логістики.',
    ctEuropeMapAriaLabel: 'Карта представників у Європі',
    ctMapControlsAriaLabel: 'Керування позицією карти',
    ctRepHqTag: 'Головний офіс',
    ctRepCountryPoland: 'Польща',
    ctRepCountryLithuania: 'Литва',
    ctRepCountryCzechia: 'Чехія',
    ctRepCountryUK: 'Великобританія',
    ctRepCountryRomania: 'Румунія',
    ctCityLondon: 'Лондон',
    ctCityKlaipeda: 'Клайпеда',
    ctCityPrague: 'Прага',
    ctCityConstanta: 'Констанца',
    ctHoursSectionTitle: 'Робочі години та візити',
    ctHoursSectionSub: 'Офіс працює у будні. На суботу приймаємо за попереднім записом. Візити бажано узгоджувати хоча б за день.',
    ctHoursOfficeTitle: 'Офіс / шоурум',
    ctHoursOnlineTitle: 'Онлайн-консультації',
    ctHoursDeliveryTitle: 'Видача авто',
    ctHoursMonFri: 'Пн – Пт',
    ctHoursEveryDay: 'Щодня',
    ctHoursSaturday: 'Субота',
    ctHoursSunday: 'Неділя',
    ctHoursSatSun: 'Сб – Нд',
    ctHoursTelegramChat: 'Messenger-чат',
    ctHoursOnAppointment: 'за записом',
    ctHoursDayOff: 'вихідний',
    ctHoursDuration: 'Тривалість',
    ctHoursDurationValue: '~45 хв',
    ctNavFaqLabel: 'Питання',
    ctNavFaqHint: 'Поширені запитання та короткі відповіді.',
    ctNavCalcLabel: 'Прорахунок',
    ctNavCalcHint: 'Орієнтовна вартість авто під ключ.',
    ctNavHomeLabel: 'Повернутись',
    ctNavHomeHint: 'Наші послуги та переваги.',
    ctJsonLdDesc: 'Імпорт авто з аукціонів США та Європи під ключ.',
    ctAddressMapQuery: 'Jawczyce ul. Poznańska 56 05-850 Polska',
    ctAddressLine1: 'ul. Poznańska, 56',
    ctAddressLine2: '05-850 Jawczyce, Polska',
    dcCalcKicker: 'Калькулятор',
    dcCalcTitle: 'Розрахуйте точну вартість імпорту за лічені секунди',
    dcCalcSub: 'Заздалегідь знайте, до якої суми торгуватися на аукціоні. У розрахунку враховані всі ключові витрати.',
    dcCalcLeftTitle: 'Комплексна оцінка включає',
    dcCalcLeft1: 'Ціна на аукціоні + комісія майданчика',
    dcCalcLeft2: 'Транспорт з місця аукціону до складу в США',
    dcCalcLeft3: 'Обробка та зберігання авто на складі',
    dcCalcLeft4: 'Морський фрахт до порту призначення',
    dcCalcLeft5: 'Митне оформлення (єдиний платіж або повна ставка)',
    dcCalcLeft6: 'Доставка з порту до вашого міста',
    dcCalcRightTitle: 'Персоналізація розрахунку',
    dcCalcRight1: 'Тип авто: Sedan, SUV, Truck, Minivan',
    dcCalcRight2: 'Рік випуску та обʼєм двигуна',
    dcCalcRight3: 'Порт відправки: NJ, FL, CA, TX, Корея',
    dcCalcRight4: 'Пункт призначення в Польщі',
    dcCalcRight5: 'Тип оформлення та супровід документів',
    dcCalcRight6: 'Ваш бюджет і бажані марки',
    dcCalcStepsTitle: 'Як отримати доступ до калькулятора',
    dcCalcStep1: 'Звʼяжіться з менеджером BIDBIDERS',
    dcCalcStep2: 'Отримайте доступ до кабінету',
    dcCalcStep3: 'Заповніть параметри авто і маршрут',
    dcCalcStep4: 'Отримайте повний кошторис імпорту',
    dcCalcCtaCatalog: 'Відкрити каталог',
    dcCalcCtaPhoneLabel: 'Зателефонувати: +48 784 890 644',
    dcVideoKicker: 'Як це працює',
    dcVideoTitle: 'Подивіться, як працює наш застосунок',
    dcVideoSub: 'Коротка демонстрація шляху: від вибору лота до передачі авто клієнту.',
    dcVideoImgAlt: 'Демонстрація BIDBIDERS',
    dcAppKicker: 'Мобільний застосунок',
    dcAppTitle: 'Всі імпортні дані під контролем на вашому телефоні',
    dcAppLead: 'Відстежуйте ставки, логістику та статуси доставки у будь-який момент.',
    dcAppFeature1: 'Всі аукціони в одному місці: Copart, IAAI, Manheim, Канада, Корея, Китай',
    dcAppFeature2: 'AI-аналіз ушкоджень, оцінка ремонту та рекомендація по максимальній ставці',
    dcAppFeature3: 'Перевірка історії через Carfax, статусу Title та даних продавця',
    dcAppFeature4: 'Tracking контейнера в реальному часі з прогнозом прибуття',
    dcAppStatus: 'Статус: в морі',
    dcAppEta: 'Прогноз прибуття: 14 квітня',
    dcDesktopKicker: 'Вебплатформа',
    dcDesktopTitle: 'Всі дані під контролем на вашому компʼютері',
    dcDesktopSub: 'Працює у браузері без встановлення: Chrome, Safari, Firefox, Edge.',
    dcFeedbackKicker: 'Відгуки',
    dcFeedbackTitle: 'Що кажуть наші клієнти',
    dcReview1: 'Пригнали Jeep Grand Cherokee за 52 дні. Все прозоро, менеджер постійно на звʼязку.',
    dcReview1Author: 'Олексій, Варшава',
    dcReview2: 'Ford Escape Hybrid обійшовся суттєво дешевше аналогів у Польщі. Сервіс на рівні.',
    dcReview2Author: 'Марина, Львів',
    dcReview3: 'Третє авто через BIDBIDERS: стабільний результат, зрозумілий процес, хороша підтримка.',
    dcReview3Author: 'Дмитро, Краків',
    dcFaqKicker: 'FAQ',
    dcFaqTitle: 'Найчастіші запитання',
    dcFaq1Q: 'Скільки часу займає весь процес імпорту?',
    dcFaq1A: 'В середньому 45-60 днів: залежно від порту, митниці та фінальної доставки у ваше місто.',
    dcFaq2Q: 'Чи можна оглянути авто перед купівлею?',
    dcFaq2A: 'Так, надаємо детальний фотоогляд і попередню оцінку. Для авто в дорозі доступне бронювання.',
    dcFaq3Q: 'Чи страхується авто під час перевезення?',
    dcFaq3A: 'Так, автомобілі страхуються на етапі морської логістики згідно обраного маршруту.',
    dcFaq4Q: 'Що таке «Авто в дорозі»?',
    dcFaq4A: 'Це авто, які вже викуплені та прямують до Європи. Ви отримуєте швидшу доставку з фіксованою ціною.',
    dcBlogKicker: 'Блог',
    dcBlogTitle: 'Корисні матеріали',
    dcBlogPost1Title: 'Як купити авто з Copart: покроково',
    dcBlogPost2Title: 'Розмитнення авто: нові ставки та правила',
    dcBlogPost3Title: 'ТОП авто до $20 000 на аукціонах США',
    dcBlogReadLink: 'Читати',
    homeBudgetTitle: 'Підберемо авто під ваш бюджет',
    homeBudgetSubtitle: 'Вкажіть тип кузова, рік і бюджет. Менеджер надішле 2–3 реальних варіанти з аукціону та повний розрахунок вартості.',
    homeBudgetBodyTypeLabel: 'Який тип кузова вам підходить?',
    homeBudgetYearLabel: 'Рік випуску',
    homeBudgetYearRangeLabel: 'Діапазон',
    homeBudgetBudgetLabel: 'Ваш бюджет',
    homeBudgetHint: 'Орієнтир',
    homeBudgetContactsLabel: 'Контактні дані',
    homeBudgetSubmit: 'Підібрати авто',
    homeBudgetConsent: 'Натискаючи кнопку, ви погоджуєтесь на обробку персональних даних для підбору автомобіля.',
    homeBodySedan: 'Седан',
    homeBodyCrossover: 'Кросовер',
    homeBodyCoupe: 'Купе',
    homeBodyHatchback: 'Хетчбек',
    homeBodyCabriolet: 'Кабріолет',
    homeBodyMinivan: 'Мінівен',
    homeBodyMicrobus: 'Мікроавтобус',
    homeBodyPickup: 'Pick up',
    homeTransitArrival: 'Прибуття',
    homeTransitInTransitBadge: '1800+ в дорозі',
    homeLocAddressStreet: 'ul. Poznańska, 56, 05-850',
    homeBudgetExtrasTitle: 'Деталі авто',
    homeBudgetMake: 'Марка',
    homeBudgetModel: 'Модель',
    homeBudgetGeneration: 'Покоління',
    homeBudgetDrive: 'Привід',
    homeBudgetFuel: 'Пальне',
    homeBudgetGearbox: 'Коробка передач',
    homeBudgetColor: 'Колір',
    homeBudgetDamageType: 'Тип пошкоджень',
    homeBudgetSteering: 'Кермо',
    homeBudgetPower: 'Потужність (к.с.)',
    homeBudgetEngineVol: "Об'єм двигуна (Л)",
    homeBudgetAny: 'Будь-який',
    statusDamageUnknown: 'Стан уточнюється',
    statusDamageCheck: 'Потребує перевірки',
    statusDamageOk: 'Без явних пошкоджень',
    statusKeysYes: 'Є',
    statusKeysNo: 'Немає',
    statusKeysUnknown: 'Уточнюється',
    statusSold: 'Продано',
    statusReady: 'Готове до видачі',
    statusInTransit: 'В дорозі',
    statusDocsCustom: 'Розмитнення включено',
    statusDocsUnclear: 'Документи уточнюються',
    transitSeoH2: 'Автомобілі зі США та Канади в дорозі до Польщі',
    transitSeoP1: 'Відстежуйте ваше авто з США в режимі реального часу — від аукціону до порту і далі.',
    transitSeoP2: 'Ми контролюємо кожен етап логістики: завантаження, транспортування та митне оформлення.',
    transitSeoP3: 'Хочете дізнатися повну вартість доставки ще до покупки?',
    transitSeoCtaCalc: 'Відкрити калькулятор',
    transitSeoCtaContacts: 'Зв\'язатися з нами',
    carPageH1Suffix: 'зі США',
    carPageSeoText: 'Купуйте авто зі США під ключ — від аукціону Copart або IAAI до вашого порогу. Розрахуйте повну вартість або перегляньте авто, які вже прямують до Польщі.',
    carPageNotFound: 'Автомобіль не знайдено',
    carPageCtaTransit: 'Авто в дорозі',
    carPageCtaCalc: 'Розрахувати вартість',
    carPageCtaContacts: 'Зв\'язатися',
    carPageLabelVin: 'VIN',
    carPageLabelYear: 'Рік',
    carPageLabelMake: 'Марка',
    carPageLabelModel: 'Модель',
    carPageLabelLocation: 'Локація',
    carPageLabelMileage: 'Пробіг',
    calcSeoTitle: 'Як розраховується вартість імпорту авто?',
    calcSeoP1: 'Наш калькулятор враховує вартість авто на аукціоні, збір аукціону, доставку до порту, морське перевезення, митні збори та ПДВ.',
    calcSeoP2: 'Введіть параметри автомобіля і отримайте орієнтовну вартість "під ключ" ще до першої ставки.',
    calcFaqTitle: 'Часті запитання',
    calcFaqQ1: 'Що входить у вартість імпорту авто з США?',
    calcFaqA1: 'Аукціонний збір, доставка до порту, морське перевезення, митний збір, акциз, ПДВ і послуги агента.',
    calcFaqQ2: 'Як довго йде авто з США?',
    calcFaqA2: 'Від 30 до 60 днів: 5–10 днів на порт, 20–30 днів морем, 7–14 днів розмитнення.',
    calcFaqQ3: 'Чи включає калькулятор мито?',
    calcFaqA3: 'Так, калькулятор враховує акциз і ПДВ відповідно до типу та об\'єму двигуна.',
    calcFaqQ4: 'Чи можна купити битий авто з США?',
    calcFaqA4: 'Так, ми працюємо з лотами з пошкодженнями. Калькулятор розраховує вартість для будь-якого стану.',
    calcFaqQ5: 'Коли потрібно платити за авто?',
    calcFaqA5: 'Оплата проходить після виграшу аукціону, до відправлення з США.',
    calcFaqQ6: 'Чи є прихована комісія?',
    calcFaqA6: 'Ні. Усі витрати прозорі і відображаються в калькуляторі до підтвердження угоди.',
    footerCalculator: 'Калькулятор',
    footerCabinet: 'Особистий кабінет',
    cabinetIntro: 'Це перша версія кабінету. Наступний крок — авторизація та приватні дані користувача.',
    footerContacts: 'Контакти',
    authLoginTitle: 'Вхід',
    authLoginLead: 'Увійдіть, щоб керувати своїми авто у кабінеті.',
    authRegisterTitle: 'Реєстрація',
    authRegisterLead: 'Створіть акаунт та почніть додавати власні авто.',
    authNameLabel: 'Ім\'я',
    authEmailLabel: 'Email',
    authPasswordLabel: 'Пароль',
    authLoginSubmit: 'Увійти',
    authRegisterSubmit: 'Зареєструватися',
    authGoogleButton: 'Увійти через Google',
    authNoAccount: 'Ще немає акаунта?',
    authHaveAccount: 'Вже маєте акаунт?',
    authGoRegister: 'Створити акаунт',
    authGoLogin: 'Увійти',
    authLogout: 'Вийти',
    authModeMock: 'Демо-режим: поки немає ключів Supabase, вхід працює локально.',
    authErrorGeneric: 'Сталася помилка авторизації. Спробуйте ще раз.',
    authSessionLoadingTitle: 'Перевіряємо сесію',
    authSessionLoadingLead: 'Зачекайте кілька секунд, ми перевіряємо ваш вхід.',
    authCallbackLoadingTitle: 'Завершуємо вхід через Google',
    authCallbackLoadingLead: 'Повертаємо вас у кабінет і підтягуємо профіль.',
    authCallbackErrorTitle: 'Не вдалося завершити вхід',
    authCallbackErrorLead: 'Спробуйте ще раз на сторінці входу.',
    cabinetNeedAuthTitle: 'Потрібна авторизація',
    cabinetNeedAuthLead: 'Щоб користуватися кабінетом і додавати авто, увійдіть або зареєструйтесь.',
    cabinetOpenLogin: 'До входу',
    cabinetOpenRegister: 'До реєстрації',
    cabinetWelcome: 'Ласкаво просимо до вашого кабінету',
    faqFullKicker: 'FAQ',
    faqFullTitle: 'Часті запитання про імпорт авто з США',
    faqFullSub: 'Відповіді на найпоширеніші питання про спроведення авто зі Штатів, вартість, терміни та митницю.',
    seoFaqFullTitle: 'FAQ — Часті запитання про імпорт авто з США | BID BIDDERS',
    seoFaqFullDescription: 'Відповіді на питання про вартість, терміни, мито, VAT та процес спроведення авто з США і Штатів під ключ.',
    faqFullQ1: 'Скільки коштує спроведення авто зі США?',
    faqFullA1: 'Вартість залежить від ціни авто на аукціоні, комісій Copart або IAAI, доставки до порту, фрахту та митних зборів. Середня вартість під ключ — від €8 000 до €25 000. Порахуйте точну суму в калькуляторі.',
    faqFullQ2: 'Що входить у вартість під ключ?',
    faqFullA2: 'Аукціонний збір, доставка до порту в США, морський фрахт, розмитнення, акциз, ПДВ і послуги агента. Жодних прихованих платежів.',
    faqFullQ3: 'Як розрахувати вартість авто зі Штатів?',
    faqFullA3: 'Скористайтесь нашим калькулятором — введіть ціну авто, тип, об\'єм двигуна та маршрут. Отримаєте повний розрахунок ще до першої ставки.',
    faqFullQ4: 'Скільки часу йде авто зі США до Польщі?',
    faqFullA4: 'Середній термін — 30–60 днів: 5–10 днів до порту, 20–30 днів морем, 7–14 днів митниця.',
    faqFullQ5: 'Яке мито за авто зі США?',
    faqFullA5: 'Мито (6,5% або нуль для деяких моделей) + акциз (залежить від об\'єму двигуна) + ПДВ 23%. Точні цифри показує калькулятор.',
    faqFullQ6: 'Чи потрібно платити акциз за авто зі США?',
    faqFullA6: 'Так, для більшості автомобілів зі США акциз розраховується за об\'ємом двигуна. Для електромобілів — окремі ставки.',
    faqFullQ7: 'Чи можна купити авто з Copart або IAAI?',
    faqFullA7: 'Так, ми ліцензований партнер Copart і IAAI. Купуємо лоти на аукціонах у США від вашого імені.',
    faqFullQ8: 'Як перевірити VIN авто зі США перед покупкою?',
    faqFullA8: 'Ми перевіряємо VIN через CarFax та NMVTIS до ставки. Отримуєте повну історію: ДТП, пробіг, кількість власників.',
    faqFullQ9: 'Чи варто купувати пошкоджене авто зі США?',
    faqFullA9: 'Залежить від ступеня пошкоджень та вашого бюджету. Ми оцінюємо фото та звіти і допомагаємо прийняти зважене рішення.',
    faqFullQ10: 'Що таке salvage title в автомобілі зі США?',
    faqFullA10: 'Salvage title означає, що страхова компанія визнала авто тотальним збитком. Такі авто можна ввезти і відновити, але реєстрація в ЄС потребує додаткових перевірок.',
    faqFullQ11: 'Які документи потрібні для реєстрації авто зі США?',
    faqFullA11: 'Title (документ власності), Bill of Lading, митна декларація та сертифікат відповідності. Ми готуємо повний пакет.',
    faqFullQ12: 'Чи допомагає BID BIDDERS з розмитненням?',
    faqFullA12: 'Так, повне митне оформлення входить у сервіс під ключ. Ви нічого не робите самостійно.',
    faqFullQ13: 'Чи можна відстежити авто, поки воно в дорозі?',
    faqFullA13: 'Так. Ви бачите статус у реальному часі: порт відправлення, судно, дата прибуття та митниця.',
    faqFullQ14: 'BID BIDDERS допомагає з транспортуванням, ремонтом і реєстрацією?',
    faqFullA14: 'Так. Ми організовуємо доставку до вашого міста, можемо порекомендувати сервіс і консультуємо щодо реєстрації.',
    faqFullQ15: 'Які аукціони в США ви використовуєте?',
    faqFullA15: 'Copart, IAAI, Manheim, ADESA та кілька регіональних майданчиків. Вибираємо найкращий варіант під ваш запит.',
    faqFullQ16: 'Чи можна спровести авто з Канади або Кореї?',
    faqFullA16: 'Так, ми працюємо з Copart Canada та корейськими майданчиками. Умови схожі, терміни можуть відрізнятись.',
    faqFullQ17: 'Як виглядає процес спроведення авто зі США крок за кроком?',
    faqFullA17: 'Бриф → підбір лота → перевірка VIN → ставка → викуп → доставка до порту → фрахт → митниця → видача авто.',
    faqFullQ18: 'Як зв\'язатися з BID BIDDERS для консультації?',
    faqFullA18: 'Зателефонуйте, напишіть на email або заповніть форму на сторінці Контакти. Відповідаємо протягом 15 хвилин у робочий час.',
    faqFullCtaCalc: 'Порахувати вартість',
    faqFullCtaContacts: 'Звʼязатися',
    faqFullCtaTransit: 'Авто в дорозі',
  },
  en: {
    navHome: 'Home',
    navCatalog: 'Catalog',
    navCatalogUsa: 'US Auto Catalog',
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
    transitTitle: 'Cars from the USA in Transit',
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
    footerTaglineLong: 'Your trusted USA car import partner — Copart, IAAI, Manheim auctions, ocean shipping, EU customs since 2013.',
    footerNavigation: 'Navigation',
    footerContact: 'Contact',
    footerLocation: 'Warsaw, Poland',
    footerLegal: 'Privacy policy · Terms of service',
    footerTelegram: 'Messenger',
    footerYoutube: 'YouTube',
    footerInstagram: 'Instagram',
    footerFacebook: 'Facebook',
    footerBlog: 'Blog',
    footerFaq: 'FAQ',
    footerDirections: 'Directions',
    footerDirectionUsa: 'Cars from USA',
    footerDirectionChina: 'Cars from China',
    footerDirectionEurope: 'Cars from Europe',
    footerDirectionMoto: 'Moto and RORO',
    footerAddress: 'Jawczyce, ul. Poznanska, 56, 05-850, Poland',
    footerCopyright: '© 2026 BID BIDDERS. All rights reserved.',
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
    headerMenuLabel: 'Menu · BID BIDDERS',
    headerMenuClose: 'Close menu',
    cookieAriaLabel: 'Cookie preferences',
    cookieTitle: 'We use cookies',
    cookieText: 'We use required cookies to keep the site fast and stable. Analytics cookies help us improve the service. You can choose your consent option.',
    cookieNecessary: 'Required only',
    cookieAccept: 'Accept all',
    cookieDetails: 'Learn more',
    seoHomeTitle: 'USA Car Import — Auctions, Delivery, Customs | BID BIDDERS',
    seoHomeDescription: 'Turnkey car import from €8,000. Save up to €7,000. Delivery in 45-60 days. Catalog, cars in transit, in-stock offers, yard inspection, and an auction purchase app.',
    seoCatalogTitle: 'Car Catalog from US Auctions | BID BIDDERS',
    seoCatalogDescription: 'Browse vehicles from Copart, IAAI, and Manheim auctions. Filter by make, year, budget, and condition. Full turnkey cost estimate included.',
    seoInStockTitle: 'Cars in Stock — Ready to Ship | BID BIDDERS',
    seoInStockDescription: 'Vehicles available in Poland or ready for dispatch. On-site inspection available, documents ready. Fast handover.',
    seoTransitTitle: 'Cars from USA in Transit — Track Online | BID BIDDERS',
    seoTransitDescription: 'Over 1800 vehicles on their way to Poland. Track delivery status in real time and get up-to-date updates.',
    seoCalculatorTitle: 'Car Import Cost Calculator | BID BIDDERS',
    seoCalculatorDescription: 'Calculate the full turnkey cost: auction price, shipping, customs, and VAT. Accurate estimate with no hidden fees.',
    seoBlogTitle: 'Blog on Car Import from the USA | BID BIDDERS',
    seoBlogDescription: 'Articles, cases, and tips on buying cars at US auctions, logistics, and customs clearance in Poland.',
    seoCasesTitle: 'Client Cases — Real Deals & Savings | BID BIDDERS',
    seoCasesDescription: 'Real examples of car purchases through BID BIDDERS: price, savings, timelines, and client reviews.',
    seoFaqTitle: 'FAQ About Car Import | BID BIDDERS',
    seoFaqDescription: 'Answers to questions about delivery times, turnkey cost, warranties, VIN checks, and on-site vehicle inspection.',
    seoContactsTitle: 'Contacts — Get in Touch with BID BIDDERS',
    seoContactsDescription: 'Phone, email, office address, and social media links for the BID BIDDERS team. Consultation is free of charge.',
    seoPrivacyTitle: 'Privacy Policy | BID BIDDERS',
    seoPrivacyDescription: 'Terms for processing personal data, cookie usage, and protection of user information at BID BIDDERS.',
    seoTermsTitle: 'Terms of Use | BID BIDDERS',
    seoTermsDescription: 'Rules for using the BID BIDDERS website and services, liability limitations, and service provision terms.',
    seoLotTitle: 'Lot Details | BID BIDDERS',
    seoLotDescription: 'Detailed lot information: photos, specifications, VIN, condition, and current auction bid.',
    routeInStockAlt: 'Cars in stock in Poland — BID BIDDERS',
    routeTransitAlt: 'Cars in transit',
    routeAuctionAlt: 'Custom order from auction',
    routeCatalogAlt: 'Vehicle catalog',
    transitCtaAlt: 'Cars in transit to Poland — over 1800 options',
    stockCtaAlt: 'Cars in stock at the BID BIDDERS lot',
    homeB2cNameError: 'Please enter at least 2 characters for your name.',
    homePhoneRequiredError: 'Phone number is required.',
    homeB2cSuccess: 'Thank you! We received your request and will contact you within 15 minutes during business hours.',
    homeB2bFormatError: 'Please specify your cooperation format.',
    homeB2bSuccess: 'Thank you! Your request is accepted. A B2B specialist will contact you directly to align terms.',
    homeHeroEyebrow: 'BID BIDDERS · 13 years of trust',
    homeHeroTitleLineOne: 'Your trusted partner',
    homeHeroTitleLineTwo: 'for importing cars from',
    homeHeroTitleAccent: 'the USA, Canada, and Korea',
    homeHeroDominant: 'Import cars from USA auctions — Copart, IAAI, Manheim — starting from €8,000 turnkey',
    homeHeroLead: 'We handle the full USA car import process: auction bidding, ocean shipping, EU customs clearance, and delivery to your door. Average delivery time 45–60 days.',
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
    homeTrustFourDesc: 'Phone · WhatsApp · Messenger',
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
    homeEconKicker: 'Economy · Real numbers',
    homeEconTitle: 'Why this is more profitable than the Polish market',
    homeEconLead: 'Real savings based on client cases — no rounding, no marketing fluff.',
    homeEconCase: 'Case ·',
    homeEconMarket: 'Poland market',
    homeEconTurnkey: 'BID BIDDERS turnkey',
    homeEconSave: 'Savings',
    homeEconAvgSave: 'Average savings',
    homeEconDesc: 'Examples are based on real cases. Final cost depends on model, vehicle condition, and logistics.',
    homeEconBtn: 'Calculate my savings',
    homeCalcKicker: 'Turnkey calculator',
    homeCalcTitle: 'Estimate before you bid',
    homeCalcLead: 'Calculate the final cost before purchase: bid, fees, logistics, taxes, and delivery.',
    homeCalcCheck1: 'Lot + auction fees',
    homeCalcCheck2: 'Transport to port and ocean',
    homeCalcCheck3: 'Customs, taxes, certification',
    homeCalcCheck4: 'Delivery to your city',
    homeCalcBadge: 'Real calculation case',
    homeCalcBadgeSave: 'Savings {amount} thanks to accurate pre-bid calculation',
    homeCalcBtn: 'Get estimate',
    homeCalcBtnOpen: 'Open calculator',
    homeCalcCardTag: 'Calculation example',
    homeCalcCardTitle: 'Your lot · Auction car',
    homeCalcDestLabel: 'Destination port (EU)',
    homeCalcBidLabel: 'Bid at auction',
    homeCalcBidHint: 'enter amount',
    homeCalcBidAria: 'Bid amount in euro',
    homeCalcLine1: 'Commission (auction + service)',
    homeCalcLine2: 'Logistics to EU',
    homeCalcLine3: 'Taxes ({vat}% VAT)',
    homeCalcLine4: 'Delivery to your city',
    homeCalcTotal: 'Turnkey total ({port})',
    homeCalcNote: 'Indicative estimate. Final cost depends on model, condition, logistics rates, and purchase location.',
    homeCalcStep1: 'Choose a car',
    homeCalcStep1Desc: 'Find a lot at auction',
    homeCalcStep2: 'Set your bid',
    homeCalcStep2Desc: 'Enter your bidding amount',
    homeCalcStep3: 'Calculate',
    homeCalcStep3Desc: 'Get the full turnkey estimate',
    homeCalcStep4: 'Submit request',
    homeCalcStep4Desc: 'Send form for a precise quote',
    homeCalcTrust1: 'Transparent estimate',
    homeCalcTrust1Desc: 'No hidden payments after purchase',
    homeCalcTrust2: 'Real rates',
    homeCalcTrust2Desc: 'Logistics and fees are updated regularly',
    homeCalcTrust3: 'Manager support',
    homeCalcTrust3Desc: 'We verify your case and final number',
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
    thankYouTitle: 'Thank you! Request received.',
    thankYouText: 'Our team will get in touch with you during working hours, 10:00–20:00.',
    thankYouBtn: 'Got it, thanks!',
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
    homeStockLoc: 'Location',
    homeStockLocCity: 'Jawczyce, ul. Poznanska 56',
    homeStockCtaAll: 'View all',
    homeStockBadge: 'In stock',
    homeStockCardViewAll: 'View all cars in stock',
    homeStockCardViewAllDesc: 'Browse the full lot catalog and schedule your inspection today.',
    homeStockCardViewAllCta: 'In-stock catalog',
    homeStockLiveQuestion: 'Want to see them live?',
    homeStockLiveSchedule: 'Schedule an inspection',
    homeCatalogKicker: 'Catalog · Copart · IAAI · Manheim',
    homeCatalogHeading: '200 000+ auctions daily',
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
    homeHowLead: 'From winning a car at Copart, IAAI, or Manheim in the USA — to customs clearance and delivery to your city in Europe.',
    homeHowAct: 'Act',
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
    homeHowCtaLead: 'Ready to estimate your turnkey car?',
    homeHowCtaBtn: 'Get estimate',
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
    homeLocShowroom: 'BID BIDDERS · SHOWROOM',
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
    navChinaCars: 'Cars from China',
    footerLotSources: 'Official lot sources',
    catalogSortAuctionTime: 'Auction: soonest first',
    catalogSortPriceDesc: 'Price: high to low',
    catalogSortPriceAsc: 'Price: low to high',
    catalogSortYearDesc: 'Year: newest first',
    catalogSortYearAsc: 'Year: oldest first',
    catalogSortMileageAsc: 'Mileage: low to high',
    catalogSortMileageDesc: 'Mileage: high to low',
    catalogBadgeInTransit: 'IN TRANSIT',
    catalogBadgeInStock: 'IN STOCK',
    catalogBadgeNew: 'NEW',
    catalogAuctionBadgeAvailable: 'AVAILABLE',
    catalogAuctionBadgeReady: 'READY',
    catalogSellerLocal: 'Local',
    catalogStatusInTransit: 'In transit',
    catalogStatusInStock: 'In stock',
    catalogStatusAtAuction: 'At auction',
    catalogPriceLabel: 'Price',
    catalogCurrentBidLabel: 'Current bid',
    catalogPriceNoteSeller: 'Seller: BID BIDDERS',
    catalogPriceNoteLease: 'Available for lease',
    catalogPriceNoteEstimate: 'Estimate:',
    catalogDetailMileage: 'Mileage',
    catalogDetailLocation: 'Location',
    catalogDetailDamage: 'Damage',
    catalogDetailStatus: 'Status',
    catalogCardDetails: 'Details',
    catalogFilterBtn: 'Filters',
    catalogFilterTitle: 'Search filters',
    catalogFilterResetAll: 'Reset all',
    catalogToggleWholesale: 'Wholesale — Cars only',
    catalogToggleRecent: 'Recently added — 24 hrs',
    catalogToggleExcludeActive: 'Exclude active auctions',
    catalogFilterDocType: 'Document type',
    catalogFilterYear: 'Year',
    catalogFilterBrand: 'Brand',
    catalogFilterModel: 'Model',
    catalogFilterMileage: 'Mileage',
    catalogFilterFuel: 'Fuel type',
    catalogFilterTrans: 'Transmission',
    catalogFilterDrive: 'Drive type',
    catalogFilterPostal: 'Search by ZIP',
    catalogFilterReset: 'Reset',
    catalogRangeFrom: 'from',
    catalogRangeTo: 'to',
    catalogCountSuffix: 'units',
    catalogSearchPlaceholder: 'Search...',
    catalogYearFrom: 'From',
    catalogYearTo: 'To',
    catalogPostalPlaceholder: 'ZIP code',
    catalogPostalSearch: 'Search',
    catalogTabAll: 'All',
    catalogTabOpenAuctions: 'Open auctions',
    catalogTabInProgress: 'In progress',
    catalogTabClosedToday: 'Closed today',
    catalogTabBuyNow: 'Buy now',
    catalogTabArchive: 'Auction archive',
    catalogTabInStock: 'In stock',
    catalogTabReadyToTransfer: 'Ready to transfer',
    catalogTabOnOrder: 'On order',
    catalogTabInTransit: 'Cars in transit',
    catalogResultsCount: 'cars found',
    catalogLayoutList: 'List',
    catalogLayoutGrid: 'Grid',
    catalogLoadMore: 'Load more',
    lotLoading: 'Loading car',
    lotLoadingDesc: 'Fetching live data from API.',
    lotNotFound: 'Car not found',
    lotNotFoundDesc: 'Check the link or go back to the catalog.',
    lotNotFoundBtn: 'Go to catalog',
    lotModeTransit: 'Cars in transit',
    lotModeInStock: 'In stock',
    lotModeCatalog: 'Catalog',
    lotStatusTransit: 'In transit',
    lotStatusInStock: 'In stock',
    lotStatusAtAuction: 'At auction',
    lotLabelLocation: 'Office location',
    lotLabelDispatchPort: 'Dispatch port',
    lotLabelPickupPoint: 'Pickup point',
    lotLabelStatus: 'Status',
    lotLabelAuctionDate: 'Auction date',
    lotLabelEstDelivery: 'Est. delivery',
    lotDeliveryTbd: 'TBD',
    lotWatching: 'Watching',
    lotWatch: 'Watch',
    lotCarfaxBtn: 'Buy CARFAX Report',
    lotGalleryPrev: 'Previous photo',
    lotGalleryNext: 'Next photo',
    lotLiveBadgeAuction: 'Live auction',
    lotLiveBadgeTransit: 'In transit',
    lotLiveBadgeReady: 'Ready for pickup',
    lotSpecsMainTitle: 'Main specifications',
    lotLabelSeller: 'Seller',
    lotLabelDocuments: 'Documents',
    lotLabelPrimaryDamage: 'Primary damage',
    lotLabelSecondaryDamage: 'Secondary damage',
    lotLabelMileage: 'Mileage',
    lotLabelKeys: 'Keys',
    lotCopyVin: 'Copy',
    lotSpecsTechTitle: 'Technical specifications',
    lotLabelBodyType: 'Body type',
    lotLabelColor: 'Color',
    lotLabelEngine: 'Engine',
    lotLabelTransmission: 'Transmission',
    lotLabelFuel: 'Fuel type',
    lotLabelDrive: 'Drive type',
    lotLabelStartCode: 'Start code',
    lotLabelStartCodeValue: 'Runs',
    lotLabelAcvRetail: 'ACV / Retail',
    lotLabelBodyExtended: 'Extended body type',
    lotLabelSaleStatus: 'Sale status',
    lotShowMore: 'Show more (4)',
    lotShowLess: 'Show less',
    lotSourceLink: 'Open original lot on',
    lotServicesTitle: 'Additional services',
    lotService11: 'Vehicle with purchase restriction',
    lotService12: 'Hazardous cargo',
    lotService13: 'Oversized',
    lotService14: 'Oversized+',
    lotServicesNote: 'Checking an option will add the amount to the estimated total price.',
    lotBuyNowDesc: 'Instant purchase, no bidding',
    lotBuyNowBtn: 'Buy now',
    lotSbCurrentBid: 'Current bid',
    lotSbEstimate: 'Estimate:',
    lotSbMaxBid: 'Your maximum bid',
    lotSbDecrease: 'Decrease',
    lotSbIncrease: 'Increase',
    lotSbBidNow: 'Place bid now',
    lotSbHowToBid: 'How to bid? →',
    timerUnitD: 'd',
    timerUnitH: 'h',
    timerUnitM: 'm',
    timerUnitS: 's',
    lotSbTimeLeft: 'Time remaining',
    lotSbAuctionEnded: 'Auction ended',
    lotSbTimerUntil: 'until',
    lotSbCalcTitle: 'Total price calculator',
    lotCalcBid: 'Bid (current)',
    lotCalcAuctionFee: 'Auction fee',
    lotCalcTransport: 'Transport to port',
    lotCalcShipping: 'Ocean shipping',
    lotCalcDocs: 'Documents + BID BIDDERS service',
    lotCalcSubtotal: 'Subtotal (before customs)',
    lotCalcNote: 'Estimated price excluding customs. Rate USD/EUR = 0.91',
    lotCustomsCalcTitle: 'Customs duties calculator',
    lotCustomsDuty: 'Duty 10%',
    lotCustomsVat: 'VAT 21%',
    lotCustomsBroker: 'Broker & handling',
    lotCustomsTotal: 'Customs duties',
    lotCustomsFinal: 'Final cost',
    lotCustomsNote: 'Estimate only. Final cost may vary depending on document type and country.',
    lotSbFinalPrice: 'Final price',
    lotSbTurnkeyFixed: 'Fixed turnkey price',
    lotSbFactDelivery: 'Est. delivery',
    lotSbFactDeliveryValue: 'In transit',
    lotSbContact: 'Contact about this car',
    lotSbWhatsIncluded: "What's included",
    lotSbIncluded1: 'Auction purchase',
    lotSbIncluded2: 'Transport USA → port',
    lotSbIncluded3: 'Ocean shipping',
    lotSbIncluded4: 'Customs clearance in Europe',
    lotSbIncluded5: 'BID BIDDERS service & support',
    lotSbPriceKicker: 'Price',
    lotSbReadyLviv: 'Ready for pickup in Lviv',
    lotSbFactCert: 'Certification',
    lotSbFactCertValue: 'Completed',
    lotSbBuyNow: 'Buy now',
    lotSbScheduleView: 'Schedule a viewing',
    lotSbLeaseCalc: 'Lease calculator',
    lotSbMonthlyPayment: 'Monthly payment',
    lotSbPerMonth: '/mo',
    lotSbDownPayment: 'Down payment',
    lotSbLeaseTerm: 'Term',
    lotSbLeaseMonths: 'mo',
    lotSbLeaseNote: 'Preliminary estimate. Exact terms are set after agreement with the leasing company.',
    lotDescTitle: 'Car description',
    lotDescSubtitle: 'Full technical information for this listing.',
    lotLabelMake: 'Make',
    lotLabelModel: 'Model',
    lotLabelYear: 'Year',
    lotLabelPrice: 'Price',
    lotKnowTitle: 'What to know about',
    lotKnowSubtitle: 'Status, delivery, specs, and steps to buy a ready car.',
    lotKnowOverviewTitle: 'Quick overview',
    lotKnowOverviewStatus: 'car with status',
    lotKnowOverviewLoc: 'Location:',
    lotKnowOverviewSpecs: 'Specs:',
    lotKnowOverviewMileage: 'Mileage:',
    lotKnowPriceFrom: 'Current price — from',
    lotKnowPriceEnd: 'Next steps include de-registration, preparation, certification and handover in Poland / Europe.',
    lotKnowCheckTitle: 'What to check before deciding',
    lotKnowCheckDamage: 'Damage list:',
    lotKnowCheckDocs: 'Document check:',
    lotKnowCheckBudget: 'Estimated budget: from',
    lotKnowCheckBudgetSuffix: 'including logistics',
    lotKnowCheckAgreement: 'Agree on the handover / delivery budget in Poland / Europe',
    lotKnowChip1: 'Turnkey import',
    lotKnowChip2: 'Delivery & customs',
    lotKnowChip3: 'Consultation',
    lotSimilarTitle: 'Similar',
    lotSimilarTitleTransit: 'cars in transit',
    lotSimilarTitleInStock: 'cars in stock',
    lotSimilarTitleCatalog: 'cars at auction',
    lotSimilarSubtitle: 'A few more relevant options for quick browsing.',
    lotSimilarPriceLabel: 'Price:',
    lotSimilarMileageLabel: 'Mileage:',
    lotSimilarStatusLabel: 'Status:',
    lotSimilarAllTransit: 'All cars in transit',
    lotSimilarAllInStock: 'All cars in stock',
    lotSimilarAllCatalog: 'All lots',
    lotSimilarLinkCatalog: 'Auction catalog',
    lotSimilarLinkCar: 'Find a car',
    lotSimilarLinkLogistics: 'Logistics & customs',
    lotSimilarLinkBlog: 'Blog tips',
    lotFaqTitle: 'FAQ about',
    lotFaqSubtitle: 'Answers about condition, price, benefits, and logistics of this car.',
    lotFaq1Q: 'What is this car and what is its status?',
    lotFaq1A: 'This is a real lot from our inventory. The status is shown in the "Status & readiness" block and is updated as logistics progresses.',
    lotFaq2Q: 'Which specs matter most here?',
    lotFaq2A: 'Focus first on VIN, year, mileage, damage type, and key availability. Other fields (body, engine, color) affect operation rather than legal clarity.',
    lotFaq3Q: 'What is the approximate turnkey budget?',
    lotFaq3A: 'The "Ready car budget" block shows the current price + BID BIDDERS service. For a precise calculation including logistics and customs, run the calculator in the sidebar or on the /calculator page.',
    lotFaq4Q: 'What should I pay attention to before deciding?',
    lotFaq4A: 'Check primary and secondary damage, document type (Title), key availability, and actual photos in the gallery. We also recommend requesting additional photos from our manager.',
    lotStepsTitle: 'How the purchase process works',
    lotStepsSubtitle: 'Four steps from vehicle inspection to key handover.',
    lotStep1Title: 'We inspect the car',
    lotStep1Text: 'We clarify condition, mileage, documents, and readiness for pickup or further delivery.',
    lotStep2Title: 'We calculate the budget',
    lotStep2Text: 'We prepare a transparent breakdown including the car price, preparation, certification, and support.',
    lotStep3Title: 'We prepare the documents',
    lotStep3Text: 'We prepare the offer, contract, and all supporting papers for safe handover to the client.',
    lotStep4Title: 'We hand over in Poland / Europe',
    lotStep4Text: 'The car goes through final stages and is handed over with BID BIDDERS team support.',
    lotSummaryTitle: 'What to know before deciding on',
    lotSummarySubtitle: 'Condition, current status, and estimated final budget.',
    lotSummaryStatusTitle: 'Car status & readiness',
    lotSummaryStatusP1: 'is currently in status',
    lotSummaryStatusP2: 'Before purchase we clarify location, document availability, and handover scenario in Poland / Europe.',
    lotSummaryStatusFacts: 'Available data: documents —',
    lotSummaryStatusFactsDmg: 'damage —',
    lotSummaryStatusFactsLoc: 'location —',
    lotSummaryStatusP3: 'If you need a detailed quote, the BID BIDDERS team will help with logistics and customs clearance within a real budget — no hidden surprises.',
    lotSummaryBudgetTitle: 'Ready car budget',
    lotSummaryBudgetLead: 'For a ready car we factor in the current price, preparation, certification, and handover support.',
    lotBudgetCurrentPrice: 'Current car price',
    lotBudgetPrep: 'Preparation & service',
    lotBudgetPrepValue: 'on request',
    lotBudgetCert: 'Certification / registration',
    lotBudgetCertValue: 'individual',
    lotBudgetService: 'BID BIDDERS service',
    lotSummaryCtaCar: 'Find a car',
    lotSummaryCtaLogistics: 'Learn about logistics',
    lotTimerDays: 'd',
    lotTimerHours: 'h',
    lotTimerMinutes: 'min',
    lotTimerSeconds: 's',
    lotPickupCity: 'Lviv',
    lotDispatchCountry: 'USA',
    calcPill: 'Import calculator',
    calcHeroTitle: 'Calculate the real turnkey cost before bidding at auction',
    calcHeroDesc: 'From bid to final cost including customs and BID BIDDERS service.',
    calcHeroNoteTitle: 'What is included',
    calcHeroNoteDesc: 'Bid, auction fee, delivery, documents, broker, commission, insurance, and taxes.',
    calcFormKicker: 'Car parameters',
    calcFormTitle: 'Enter input data',
    calcFormDesc: 'Fast local estimate + precise API with fallback behavior.',
    calcLabelRoute: 'Route / port',
    calcRouteKlaipeda: 'Klaipeda',
    calcRouteOdesa: 'Odesa',
    calcLabelCarType: 'Car type',
    calcCarTypeAuto: 'Sedan / Hatchback',
    calcCarTypeCrossover: 'Crossover',
    calcCarTypeSuv: 'SUV',
    calcCarTypeMoto: 'Motorcycle',
    calcCarTypePickup: 'Van / Pickup',
    calcLabelFuel: 'Engine type',
    calcLabelAuction: 'Auction',
    calcLabelDocType: 'Document type',
    calcLabelCity: 'Dispatch city',
    calcLabelYear: 'Model year',
    calcLabelBattery: 'Battery capacity',
    calcLabelEngine: 'Engine volume',
    calcLabelPrice: 'Car price / bid',
    calcPricePlaceholder: 'Enter car price',
    calcLabelInsurance: 'Insurance',
    calcLabelTransfer: 'Wire transfer',
    calcBtnRecalc: 'Recalculate',
    calcBtnReset: 'Reset',
    calcResultKicker: 'Total',
    calcGroupLogistics: 'Auction & logistics',
    calcRowBid: 'Bid',
    calcRowAuctionFee: 'Auction fee',
    calcRowUsDelivery: 'US delivery',
    calcRowDocs: 'Documents',
    calcRowOcean: 'Ocean shipping',
    calcRowPortUnload: 'Port unloading',
    calcRowEuDelivery: 'Port – EU delivery',
    calcRowCustomsDelivery: 'Delivery to customs',
    calcRowBorderHandling: 'Border crossing & special transport',
    calcGroupCustoms: 'Customs & service',
    calcCustomsPending: 'Customs and service details appear after LIVE calculation',
    calcCaptionIdle: 'Enter data to calculate. No amounts until parameters are filled.',
    calcCaptionLoading: 'Total is updating after API response.',
    calcCaptionLive: 'Total already includes logistics, customs, and service costs.',
    calcCaptionLiveEu: 'Total includes EU logistics, selected tax, VAT profile, and service costs.',
    calcCaptionFallback: 'Exact total not available now. Go to contacts for a manual estimate.',
    calcCaptionErr401: 'Calculator API requires authorization. Add token to localStorage (key bidbiddersPartnerToken).',
    calcCaptionErr403: 'Calculator API rejected the request (403). Check allowed IP or API domain.',
    calcCaptionErr400Prefix: 'Calculator API returned 400 (validation). Details:',
    calcCaptionErrJson: 'Calculator API returned non-JSON. Check gateway/WAF response in Network.',
    calcRowCarPrice: 'Car price / bid',
    calcRowOceanFromPrefix: 'Shipping from USA –',
    calcRowPortUnloadOdesa: 'Odesa port unloading + broker',
    calcRowPortUnloadKlaipeda: 'Klaipeda port unloading',
    calcRowEuDeliveryPortPrefix: 'Delivery',
    calcCityWarsaw: 'Warsaw',
    calcRowExportDocs: 'Export documents',
    calcRowExcise: 'Excise tax',
    calcRowImportDuty: 'Import duty',
    calcRowVat: 'VAT',
    calcRowNonVatFee: 'Non-VAT financial fee',
    calcRowBroker: 'Broker services',
    calcRowBiddersFee: 'BID BIDDERS commission',
    calcRowInsuranceFee: 'Insurance',
    calcRowMoneyTransfer: 'Wire transfer fee (USA)',
    calcLabelEuPort: 'EU destination port',
    calcLabelImportTax: 'Import tax',
    calcLabelVatProfile: 'VAT (profile)',
    calcRowCustomsAgency: 'Customs agency',
    calcRouteUnavailable: 'Route temporarily unavailable',
    calcRowCustomsBase: 'Customs base',
    calcRowTotal: 'TOTAL',
    calcBranchPlaceholder: 'Search city...',
    calcBranchNotFound: 'Location not found',
    calcAuctionUrlLabel: 'Copart / IAAI lot link',
    calcAuctionUrlPlaceholder: 'https://www.copart.com/lot/... or https://www.iaai.com/...',
    calcAuctionUrlButton: 'Load data',
    calcAuctionUrlLoading: 'Loading lot data...',
    calcAuctionUrlSuccess: 'Lot found: {title}',
    calcAuctionUrlBranchMissing: 'Lot found, but city not recognized — please select manually',
    calcAuctionUrlError: 'Failed to load. Enter parameters manually',
    calcAuctionUrlUnsupported: 'Unsupported link. Paste a URL from copart.com or iaai.com',
    calcAuctionUrlIaaiPartial: 'IAAI lot recognized. Enter price and city manually',
    calcAuctionUrlIaaiUnavailable: 'IAAI is temporarily unavailable. Please fill in price and city manually',
    calcAuctionUrlPartial: 'Lot recognized partially. Check price and city manually',
    calcFormTitle2: 'Enter details',
    calcFormDesc2: 'Provide vehicle parameters to calculate the estimated import cost.',
    calcResultKicker2: 'Estimated cost',
    calcCaptionIdle2: 'Enter vehicle data to see the calculation.',
    calcRouteUnavailable2: 'This route is temporarily unavailable. Please select a different port or auction city.',
    calcCaptionResult: 'Calculation includes auction, transport, customs duty, VAT and BID BIDDERS service fee.',
    calcRowCarPrice2: 'Car price',
    calcRowUsDelivery2: 'US transport',
    calcRowOceanDelivery: 'Ocean transport',
    calcRowBiddersFee2: 'BID BIDDERS service',
    calcTaxAuto: '10% (Car)',
    calcTaxTruck: '22% (Truck)',
    calcTaxMoto: '6% (Motorcycle)',
    calcTaxClassic0: '0% (Classic)',
    calcVatClassic9: '9% (Classic)',
    blogHeroKicker: 'BID BIDDERS Blog',
    blogHeroTitle: 'Guides on importing cars from the USA and Europe',
    blogHeroSub: 'Step-by-step guides, logistics breakdowns, customs and lot selection on Copart, IAAI, Manheim. No fluff — only actionable insights from the BID BIDDERS team.',
    blogHeroMetaMaterials: 'Articles in the base',
    blogHeroMetaReaders: 'Readers per month',
    blogHeroMetaCategories: 'Expert categories',
    blogHeroMetaPerWeek: 'New articles per week',
    blogCatAll: 'All',
    blogCatGuides: 'Guides',
    blogCatCustoms: 'Customs',
    blogCatLogistics: 'Logistics',
    blogCatCases: 'Cases',
    blogCatAuctions: 'Auctions',
    blogCatTips: 'Tips',
    blogFeaturedTitle: 'Recommended articles',
    blogFeaturedSub: 'The best content to read first.',
    blogFeaturedCta: 'All cases →',
    blogReadingTime: 'read',
    blogAuthorPrefix: 'Author:',
    blogLatestTitle: 'Latest articles',
    blogLatestCountLabel: 'Total in category',
    blogReadMore: 'Read more →',
    blogNewsletterTitle: 'Spam-free newsletter',
    blogNewsletterSub: 'Once a week — top car market news, best lots, and fresh guides. No filler, no ads for other platforms.',
    blogNewsletterBtn: 'Subscribe',
    blogTagsTitle: 'Popular tags',
    blogTagsSub: 'Quick search by keyword.',
    blogFaqLink: 'FAQ answers →',
    casesKicker: 'Cases',
    casesPageTitle: 'Real client cases from BID BIDDERS',
    casesPageSub: 'One consistent methodology: turnkey price, Polish market price, final savings.',
    casesLabelTurnkey: 'Turnkey',
    casesLabelUsaPrice: 'USA price',
    casesLabelMarket: 'Polish market',
    casesLabelSavings: 'Savings',
    casesCtaBlog: 'Read the blog',
    casesCtaHome: 'Back to home',
    casesCtaCalc: 'Calculate cost',
    casesCtaTransit: 'Cars in transit',
    casesSeoP1: 'Real cases prove it: importing a car from the USA through BID BIDDERS saves EUR 5,000–15,000 compared to the Polish market. We specialize in cars from Copart, IAAI, and Manheim.',
    faqKicker: 'FAQ',
    faqPageTitle: 'Frequently asked questions about car import',
    faqPageSub: 'Answers about timelines, turnkey service, guarantees, the app, and in-person vehicle inspection.',
    faqDeliveryTimeQuestion: 'How long does delivery take?',
    faqDeliveryTimeAnswer: 'On average 45-60 days depending on the route, port, and customs load.',
    faqTurnkeyQuestion: 'What is included in the turnkey format?',
    faqTurnkeyAnswer: 'Lot selection, bidding, purchase, logistics, customs, documents, and vehicle handover.',
    faqTransparencyQuestion: 'What transparency guarantees are there?',
    faqTransparencyAnswer: 'One contract, cost fixed before bidding, VIN verification, and transparent deal stages.',
    faqInspectionQuestion: 'Can I visit for an in-person inspection?',
    faqInspectionAnswer: 'Yes, inspection at our lot is available by prior appointment.',
    faqCtaHome: 'FAQ block on homepage',
    faqCtaContacts: 'Go to contacts',
    legalKicker: 'Legal information',
    termsTitle: 'Terms of use',
    termsSub: 'By using the BID BIDDERS website, you agree to these terms.',
    termsS1Title: '1. General provisions',
    termsS1Text: 'The website is for informational purposes only and does not constitute a public offer. Final terms of cooperation are determined by an individual contract.',
    termsS2Title: '2. Content and copyright',
    termsS2Text: 'Texts, design, graphics, and other site materials belong to BID BIDDERS or are used on lawful grounds.',
    termsS3Title: '3. Limitation of liability',
    termsS3Text: 'We make every effort to ensure the accuracy of information, but do not guarantee the complete absence of technical errors or data update delays.',
    termsS4Title: '4. Applications and communication',
    termsS4Text: 'By submitting an application, you confirm the accuracy of the provided data and agree to be contacted for request processing.',
    termsS5Title: '5. Applicable law',
    termsS5Text: 'Polish law applies to legal relations, unless otherwise provided by the contract.',
    termsCtaPrivacy: 'Privacy policy',
    termsCtaHome: 'Back to home',
    privacyTitle: 'Privacy policy and cookies',
    privacySub: 'Terms for collecting and processing personal data. The legal text is subject to final review by the legal department.',
    privacyCtaTerms: 'Terms of use',
    privacyCtaHome: 'Back to home',
    ctHeroKicker: 'BID BIDDERS Contacts',
    ctHeroTitle: 'BID BIDDERS contacts and showroom in Poland',
    ctHeroSub: 'Visit us for an inspection, get consultation on documents and total ownership cost. Representatives across Europe — from London to Klaipeda.',
    ctHeroFactOffices: 'EU offices',
    ctHeroFactDelivery: 'Cars delivered monthly',
    ctHeroFactChat: 'Messenger chat',
    ctHeroFactHours: 'Business hours, Mon–Fri',
    ctQuickTitle: 'Get in touch quickly',
    ctQuickSub: 'Manager replies during business hours. Chat — around the clock.',
    ctQuickCta: 'Request a quote →',
    ctChannelPhoneLabel: 'Phone (PL)',
    ctChannelPhoneHintMain: 'Main number, Poland',
    ctChannelPhoneHintSales: 'Sales manager',
    ctChannelEmailHint: 'General inquiries',
    ctChannelTelegramHint: 'Quick replies in chat',
    ctOfficeSectionTitle: 'Head office & showroom',
    ctOfficeSectionSub: 'Come here for a personal consultation, vehicle inspection, and deal signing. Parking available, entry free by prior appointment.',
    ctMapAriaLabel: 'BID BIDDERS map, Poland',
    ctMapBadge: 'Head office',
    ctAddressLabel: 'Address',
    ctAddressCoords: 'Coordinates:',
    ctAddressNearest: 'Closest town:',
    ctAddressFromWarsaw: 'From Warsaw:',
    ctAddressFromWarsawValue: '~25 min by car',
    ctDirectionsLabel: 'Get directions',
    ctWazeLabel: 'Navigate',
    ctChannelsSectionTitle: 'All contact channels',
    ctChannelsSectionSub: 'Phone — for quick calls. Email — for official documents and business inquiries. Messenger — for fast questions at any time.',
    ctEuropeBadge: 'EU representatives',
    ctEuropeTitle: 'European representatives map',
    ctEuropeLead: 'Our offices and partners in key import and logistics countries.',
    ctEuropeMapAriaLabel: 'Map of EU representatives',
    ctMapControlsAriaLabel: 'Map position controls',
    ctRepHqTag: 'Head office',
    ctRepCountryPoland: 'Poland',
    ctRepCountryLithuania: 'Lithuania',
    ctRepCountryCzechia: 'Czech Republic',
    ctRepCountryUK: 'United Kingdom',
    ctRepCountryRomania: 'Romania',
    ctCityLondon: 'London',
    ctCityKlaipeda: 'Klaipeda',
    ctCityPrague: 'Prague',
    ctCityConstanta: 'Constanta',
    ctHoursSectionTitle: 'Business hours & visits',
    ctHoursSectionSub: 'Office open on weekdays. Saturdays by appointment. Please arrange visits at least a day in advance.',
    ctHoursOfficeTitle: 'Office / showroom',
    ctHoursOnlineTitle: 'Online consultations',
    ctHoursDeliveryTitle: 'Vehicle handover',
    ctHoursMonFri: 'Mon – Fri',
    ctHoursEveryDay: 'Every day',
    ctHoursSaturday: 'Saturday',
    ctHoursSunday: 'Sunday',
    ctHoursSatSun: 'Sat – Sun',
    ctHoursTelegramChat: 'Messenger chat',
    ctHoursOnAppointment: 'by appointment',
    ctHoursDayOff: 'closed',
    ctHoursDuration: 'Duration',
    ctHoursDurationValue: '~45 min',
    ctNavFaqLabel: 'Questions',
    ctNavFaqHint: 'Common questions and quick answers.',
    ctNavCalcLabel: 'Calculate',
    ctNavCalcHint: 'Estimated turnkey cost.',
    ctNavHomeLabel: 'Go back',
    ctNavHomeHint: 'Our services and advantages.',
    ctJsonLdDesc: 'Turnkey import of cars from US and European auctions.',
    ctAddressMapQuery: 'Jawczyce ul. Poznańska 56 05-850 Polska',
    ctAddressLine1: 'ul. Poznańska, 56',
    ctAddressLine2: '05-850 Jawczyce, Polska',
    dcCalcKicker: 'Calculator',
    dcCalcTitle: 'Calculate the exact import cost in seconds',
    dcCalcSub: 'Know in advance the maximum bid at auction. All key costs are included in the estimate.',
    dcCalcLeftTitle: 'Comprehensive estimate includes',
    dcCalcLeft1: 'Auction price + platform commission',
    dcCalcLeft2: 'Transport from auction to US warehouse',
    dcCalcLeft3: 'Vehicle handling and storage at warehouse',
    dcCalcLeft4: 'Ocean freight to destination port',
    dcCalcLeft5: 'Customs clearance (flat fee or full rate)',
    dcCalcLeft6: 'Delivery from port to your city',
    dcCalcRightTitle: 'Personalised calculation',
    dcCalcRight1: 'Vehicle type: Sedan, SUV, Truck, Minivan',
    dcCalcRight2: 'Year and engine displacement',
    dcCalcRight3: 'Departure port: NJ, FL, CA, TX, Korea',
    dcCalcRight4: 'Destination in Poland',
    dcCalcRight5: 'Customs format and document support',
    dcCalcRight6: 'Your budget and preferred makes',
    dcCalcStepsTitle: 'How to access the calculator',
    dcCalcStep1: 'Contact a BIDBIDERS manager',
    dcCalcStep2: 'Get access to the dashboard',
    dcCalcStep3: 'Enter vehicle parameters and route',
    dcCalcStep4: 'Receive a full import cost estimate',
    dcCalcCtaCatalog: 'Open catalog',
    dcCalcCtaPhoneLabel: 'Call: +48 784 890 644',
    dcVideoKicker: 'How it works',
    dcVideoTitle: 'See how our app works',
    dcVideoSub: 'A brief demo of the journey: from lot selection to vehicle handover.',
    dcVideoImgAlt: 'BIDBIDERS demo',
    dcAppKicker: 'Mobile app',
    dcAppTitle: 'All import data under control on your phone',
    dcAppLead: 'Track bids, logistics, and delivery statuses at any time.',
    dcAppFeature1: 'All auctions in one place: Copart, IAAI, Manheim, Canada, Korea, China',
    dcAppFeature2: 'AI damage analysis, repair estimate, and maximum bid recommendation',
    dcAppFeature3: 'History check via Carfax, title status, and seller data verification',
    dcAppFeature4: 'Real-time container tracking with arrival forecast',
    dcAppStatus: 'Status: at sea',
    dcAppEta: 'Arrival forecast: April 14',
    dcDesktopKicker: 'Web platform',
    dcDesktopTitle: 'All data under control on your computer',
    dcDesktopSub: 'Works in browser with no installation: Chrome, Safari, Firefox, Edge.',
    dcFeedbackKicker: 'Reviews',
    dcFeedbackTitle: 'What our clients say',
    dcReview1: 'Brought a Jeep Grand Cherokee in 52 days. Everything transparent, manager always in touch.',
    dcReview1Author: 'Oleksiy, Warsaw',
    dcReview2: 'Ford Escape Hybrid came out significantly cheaper than similar cars in Poland. Top-level service.',
    dcReview2Author: 'Maryna, Lviv',
    dcReview3: 'Third car through BIDBIDERS: consistent result, clear process, great support.',
    dcReview3Author: 'Dmytro, Kraków',
    dcFaqKicker: 'FAQ',
    dcFaqTitle: 'Frequently asked questions',
    dcFaq1Q: 'How long does the entire import process take?',
    dcFaq1A: 'On average 45-60 days: depending on the port, customs, and final delivery to your city.',
    dcFaq2Q: 'Can I inspect the car before purchase?',
    dcFaq2A: 'Yes, we provide a detailed photo inspection and preliminary estimate. Cars in transit can be reserved.',
    dcFaq3Q: 'Is the car insured during transport?',
    dcFaq3A: 'Yes, vehicles are insured during ocean logistics according to the selected route.',
    dcFaq4Q: 'What is "Car in transit"?',
    dcFaq4A: 'These are cars already purchased and heading to Europe. You get faster delivery at a fixed price.',
    dcBlogKicker: 'Blog',
    dcBlogTitle: 'Useful materials',
    dcBlogPost1Title: 'How to buy a car from Copart: step by step',
    dcBlogPost2Title: 'Car customs clearance: new rates and rules',
    dcBlogPost3Title: 'TOP cars under $20,000 at US auctions',
    dcBlogReadLink: 'Read',
    homeBudgetTitle: 'We will pick a car for your budget',
    homeBudgetSubtitle: 'Specify body type, year, and budget. Our manager will send 2–3 real auction options with a full cost estimate.',
    homeBudgetBodyTypeLabel: 'Which body type fits you?',
    homeBudgetYearLabel: 'Year',
    homeBudgetYearRangeLabel: 'Range',
    homeBudgetBudgetLabel: 'Your budget',
    homeBudgetHint: 'Estimate',
    homeBudgetContactsLabel: 'Contact details',
    homeBudgetSubmit: 'Pick a car',
    homeBudgetConsent: 'By clicking the button, you agree to personal data processing for vehicle selection.',
    homeBodySedan: 'Sedan',
    homeBodyCrossover: 'Crossover',
    homeBodyCoupe: 'Coupe',
    homeBodyHatchback: 'Hatchback',
    homeBodyCabriolet: 'Cabriolet',
    homeBodyMinivan: 'Minivan',
    homeBodyMicrobus: 'Microbus',
    homeBodyPickup: 'Pick up',
    homeTransitArrival: 'Arrival',
    homeTransitInTransitBadge: '1800+ in transit',
    homeLocAddressStreet: 'ul. Poznańska, 56, 05-850',
    homeBudgetExtrasTitle: 'Car details',
    homeBudgetMake: 'Make',
    homeBudgetModel: 'Model',
    homeBudgetGeneration: 'Generation',
    homeBudgetDrive: 'Drive',
    homeBudgetFuel: 'Fuel',
    homeBudgetGearbox: 'Transmission',
    homeBudgetColor: 'Color',
    homeBudgetDamageType: 'Damage type',
    homeBudgetSteering: 'Steering wheel',
    homeBudgetPower: 'Power (HP)',
    homeBudgetEngineVol: 'Engine capacity (L)',
    homeBudgetAny: 'Any',
    statusDamageUnknown: 'Condition unclear',
    statusDamageCheck: 'Requires inspection',
    statusDamageOk: 'No visible damage',
    statusKeysYes: 'Yes',
    statusKeysNo: 'No',
    statusKeysUnknown: 'To be confirmed',
    statusSold: 'Sold',
    statusReady: 'Ready for pickup',
    statusInTransit: 'In transit',
    statusDocsCustom: 'Customs included',
    statusDocsUnclear: 'Documents pending',
    transitSeoH2: 'Cars from USA and Canada in transit to Poland',
    transitSeoP1: 'Track your car from the USA in real time — from auction win to port arrival and beyond. We handle cars from Copart, IAAI, and Manheim shipped to Europe.',
    transitSeoP2: 'We manage every step of the import logistics: loading at the US port, ocean shipping, customs clearance, and delivery to Poland.',
    transitSeoP3: 'Want to know the full import cost before you bid on a car from the USA?',
    transitSeoCtaCalc: 'Open calculator',
    transitSeoCtaContacts: 'Contact us',
    carPageH1Suffix: 'from USA',
    carPageSeoText: 'Buy a car from the USA turnkey — from Copart or IAAI auction to your door. Calculate the full cost or browse cars already in transit to Poland.',
    carPageNotFound: 'Car not found',
    carPageCtaTransit: 'Cars in transit',
    carPageCtaCalc: 'Calculate cost',
    carPageCtaContacts: 'Contact us',
    carPageLabelVin: 'VIN',
    carPageLabelYear: 'Year',
    carPageLabelMake: 'Make',
    carPageLabelModel: 'Model',
    carPageLabelLocation: 'Location',
    carPageLabelMileage: 'Mileage',
    calcSeoTitle: 'How is the car import cost calculated?',
    calcSeoP1: 'Our USA car import cost calculator factors in the auction price, buyer\'s fee, inland transport, ocean freight, customs duty, and VAT — covering cars from Copart, IAAI, and Manheim.',
    calcSeoP2: 'Enter your car\'s details and get a full turnkey cost estimate before placing your first bid at a US auction.',
    calcFaqTitle: 'Frequently asked questions',
    calcFaqQ1: 'What is included in the USA car import cost?',
    calcFaqA1: 'Auction fee, inland delivery to the US port, ocean freight, customs duty, excise tax, VAT, and agent fees. The calculator covers all costs for importing cars from the USA to Europe.',
    calcFaqQ2: 'How long does shipping a car from the USA to Europe take?',
    calcFaqA2: 'Typically 30–60 days: 5–10 days inland to the port, 20–30 days ocean shipping, 7–14 days customs clearance in Europe.',
    calcFaqQ3: 'Does the calculator include customs duty and VAT?',
    calcFaqA3: 'Yes. The car import cost calculator includes excise duty and VAT based on engine type and displacement, aligned with EU import rules.',
    calcFaqQ4: 'Can I import a salvage or damaged car from the USA?',
    calcFaqA4: 'Yes, we work with salvage-title lots from Copart and IAAI. The calculator handles any condition and title type.',
    calcFaqQ5: 'When do I pay for the car?',
    calcFaqA5: 'Payment is due after you win the auction at a US auto auction, before the car is shipped from the USA.',
    calcFaqQ6: 'Are there any hidden fees?',
    calcFaqA6: 'No. All import costs — from auction fee to VAT — are transparent and shown in the calculator before you commit.',
    footerCalculator: 'Calculator',
    footerCabinet: 'Personal cabinet',
    cabinetIntro: 'This is the first cabinet placeholder. Next step is authentication and private user data.',
    footerContacts: 'Contacts',
    authLoginTitle: 'Sign in',
    authLoginLead: 'Log in to manage your own cars in the cabinet.',
    authRegisterTitle: 'Sign up',
    authRegisterLead: 'Create an account and start uploading your own cars.',
    authNameLabel: 'Name',
    authEmailLabel: 'Email',
    authPasswordLabel: 'Password',
    authLoginSubmit: 'Sign in',
    authRegisterSubmit: 'Create account',
    authGoogleButton: 'Continue with Google',
    authNoAccount: 'No account yet?',
    authHaveAccount: 'Already have an account?',
    authGoRegister: 'Create account',
    authGoLogin: 'Sign in',
    authLogout: 'Log out',
    authModeMock: 'Demo mode: until Supabase keys are configured, auth works locally.',
    authErrorGeneric: 'Authentication error. Please try again.',
    authSessionLoadingTitle: 'Checking session',
    authSessionLoadingLead: 'Please wait a moment while we verify your sign-in.',
    authCallbackLoadingTitle: 'Finishing Google sign-in',
    authCallbackLoadingLead: 'Redirecting you to the cabinet and loading your profile.',
    authCallbackErrorTitle: 'Could not finish sign-in',
    authCallbackErrorLead: 'Please try again from the login page.',
    cabinetNeedAuthTitle: 'Authorization required',
    cabinetNeedAuthLead: 'To use your cabinet and upload cars, please sign in or register.',
    cabinetOpenLogin: 'Open sign in',
    cabinetOpenRegister: 'Open sign up',
    cabinetWelcome: 'Welcome to your cabinet',
    faqFullKicker: 'FAQ',
    faqFullTitle: 'Frequently asked questions about importing cars from the USA',
    faqFullSub: 'Everything you need to know about USA car import — costs, timelines, customs, and the full process.',
    seoFaqFullTitle: 'FAQ — USA Car Import Questions Answered | BID BIDDERS',
    seoFaqFullDescription: 'Answers to the most common questions about importing cars from the USA — costs, customs duty, VAT, timelines, Copart, IAAI, and salvage titles.',
    faqFullQ1: 'How much does it cost to import a car from the USA?',
    faqFullA1: 'The total cost depends on the auction price, buyer\'s fee, inland transport to the port, ocean freight, EU customs duty, excise tax, and VAT. Typical turnkey costs range from €8,000 to €25,000+. Use our calculator for a precise estimate.',
    faqFullQ2: 'How does the USA car import calculator work?',
    faqFullA2: 'Enter the car\'s auction price, type, engine size, and destination port. The calculator instantly shows the full cost breakdown — auction fee, freight, customs, excise, and VAT — before you bid.',
    faqFullQ3: 'Does the calculator include customs duty, VAT, and other fees?',
    faqFullA3: 'Yes. The calculator covers all costs: buyer\'s fee, inland transport, ocean freight, EU customs duty (typically 6.5%), excise tax, and VAT (23% in Poland). No hidden fees.',
    faqFullQ4: 'How long does shipping a car from the USA to Europe take?',
    faqFullA4: 'On average 30–60 days: 5–10 days from auction to the US port, 20–30 days ocean transit, 7–14 days EU customs clearance.',
    faqFullQ5: 'Can I buy a car from Copart or IAAI?',
    faqFullA5: 'Yes. BID BIDDERS is a licensed buyer at Copart, IAAI, Manheim, and ADESA. We bid on your behalf and handle the entire purchase process.',
    faqFullQ6: 'What documents do I need to import a car from the USA?',
    faqFullA6: 'The key documents are: Certificate of Title, Bill of Lading, commercial invoice, customs declaration, and certificate of conformity for EU registration. We prepare everything.',
    faqFullQ7: 'Can I track my car while it is in transit from the USA?',
    faqFullA7: 'Yes. You can see real-time status — loading, departure port, vessel name, estimated arrival, and customs clearance stage — through your BID BIDDERS client dashboard.',
    faqFullQ8: 'Is it safe to buy a damaged or salvage car from the USA?',
    faqFullA8: 'It can be an excellent value if assessed correctly. We review the damage report and photos before bidding and advise whether the repair cost makes the purchase worthwhile.',
    faqFullQ9: 'What is a salvage title?',
    faqFullA9: 'A salvage title means an insurance company declared the vehicle a total loss. Salvage-title cars can still be imported to Europe, but EU registration requires an additional technical inspection.',
    faqFullQ10: 'Can BID BIDDERS handle the full import process end-to-end?',
    faqFullA10: 'Yes. We cover everything: auction sourcing, bidding, purchase, transport to port, ocean shipping, EU customs clearance, and delivery to your address.',
    faqFullQ11: 'What costs are included in door-to-door import from the USA?',
    faqFullA11: 'Auction fee, inland delivery to US port, ocean freight, EU port handling, customs duty, excise tax, VAT, and agent fees. Everything is included in our turnkey quote.',
    faqFullQ12: 'Can I import a car to Poland through BID BIDDERS?',
    faqFullA12: 'Yes. Poland is our primary delivery market. We handle customs clearance at the Polish border and can deliver to any address in Poland.',
    faqFullQ13: 'Can I calculate my import costs before bidding at auction?',
    faqFullA13: 'Yes — that is exactly what our calculator is for. Enter the expected auction price and get the full turnkey cost before you place a single bid.',
    faqFullQ14: 'What happens after winning an auction?',
    faqFullA14: 'We handle payment to the auction, arrange inland transport to the US port, book ocean freight, manage EU customs clearance, and deliver the car to you.',
    faqFullQ15: 'How do I contact BID BIDDERS for a quote?',
    faqFullA15: 'Call us, email sales@bidbidders.com, or fill out the contact form. We reply within 15 minutes during business hours.',
    faqFullQ16: 'What is the difference between Copart and IAAI?',
    faqFullA16: 'Both are major US salvage auctions. Copart tends to have a larger inventory and more condition grades. IAAI often has a wider range of specialty and fleet vehicles. We buy from both.',
    faqFullQ17: 'Can BID BIDDERS help with customs clearance for cars from the USA?',
    faqFullA17: 'Yes. EU customs clearance is included in the full-service package. We handle all documentation, declarations, and duty payments on your behalf.',
    faqFullQ18: 'Can I import a car from Canada or Korea as well?',
    faqFullA18: 'Yes. We work with Copart Canada and select Korean auction platforms. The process is similar; timelines may vary by shipping route.',
    faqFullCtaCalc: 'Calculate import cost',
    faqFullCtaContacts: 'Contact us',
    faqFullCtaTransit: 'Cars in transit',
  },
  pl: {
    navHome: 'Główna',
    navCatalog: 'Katalog aut',
    navCatalogUsa: 'Katalog aut z USA',
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
    heroLead: 'Pełny proces: wyszukanie lotu, licytacja, logistyka i dostawa pod dom z pełną transparentnością kosztów.',
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
    finalCtaDescription: 'Otrzymasz shortlistę lotów, kosztorys pod dom i wsparcie do odbioru auta.',
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
    transitTitle: 'Auta z USA w drodze',
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
    footerTagline: 'Profesjonalny import aut z USA i Kanady: od licytacji po dostawę pod dom.',
    footerTaglineLong: 'Zaufany partner w imporcie aut z USA od 2013 roku. Kompleksowo obsługujemy aukcje, transport i odprawę celną.',
    footerNavigation: 'Nawigacja',
    footerContact: 'Kontakt',
    footerLocation: 'Warszawa, Polska',
    footerLegal: 'Polityka prywatności · Regulamin',
    footerTelegram: 'Messenger',
    footerYoutube: 'YouTube',
    footerInstagram: 'Instagram',
    footerFacebook: 'Facebook',
    footerBlog: 'Blog',
    footerFaq: 'FAQ',
    footerDirections: 'Kierunki',
    footerDirectionUsa: 'Auta z USA',
    footerDirectionChina: 'Auta z Chin',
    footerDirectionEurope: 'Auta z Europy',
    footerDirectionMoto: 'Moto i RORO',
    footerAddress: 'Jawczyce, ul. Poznanska, 56, 05-850, Polska',
    footerCopyright: '© 2026 BID BIDDERS. Wszelkie prawa zastrzeżone.',
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
    whyStatOneLabel: 'LAT Doświadczenia',
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
    headerMenuLabel: 'Menu · BID BIDDERS',
    headerMenuClose: 'Zamknij menu',
    cookieAriaLabel: 'Ustawienia cookie',
    cookieTitle: 'Używamy plików cookie',
    cookieText: 'Aby serwis działał stabilnie i szybko, używamy niezbędnych cookie. Analityczne cookie pomagają nam ulepszać usługę. Możesz wybrać rodzaj zgody.',
    cookieNecessary: 'Tylko niezbędne',
    cookieAccept: 'Akceptuj wszystkie',
    cookieDetails: 'Dowiedz się więcej',
    seoHomeTitle: 'Zaufany partner importu aut z USA, Kanady i Korei | BID BIDDERS',
    seoHomeDescription: 'Import auta pod dom od 8 000 EUR. Oszczędność do 7 000 EUR. Dostawa w 45-60 dni. Katalog, auta w drodze, auta dostępne od ręki, oględziny i aplikacja do zakupu na aukcji.',
    seoCatalogTitle: 'Katalog samochodów z aukcji USA | BID BIDDERS',
    seoCatalogDescription: 'Przeglądaj auta z aukcji Copart, IAAI i Manheim. Filtruj po marce, roku, budżecie i stanie. Pełna wycena pod dom w zestawie.',
    seoInStockTitle: 'Auta dostępne — gotowe do wysyłki | BID BIDDERS',
    seoInStockDescription: 'Pojazdy dostępne w Polsce lub gotowe do wysyłki. Możliwość oględzin na miejscu, dokumenty gotowe. Szybkie przekazanie.',
    seoTransitTitle: 'Auta z USA w drodze — śledź online | BID BIDDERS',
    seoTransitDescription: 'Ponad 1800 pojazdów w drodze do Polski. Śledź status dostawy w czasie rzeczywistym i otrzymuj aktualne informacje.',
    seoCalculatorTitle: 'Kalkulator sprowadzenia auta z USA | BID BIDDERS',
    seoCalculatorDescription: 'Oblicz pełny koszt pod dom: aukcja, transport, cło, VAT. Dokładna wycena bez ukrytych opłat.',
    seoBlogTitle: 'Blog o imporcie aut z USA | BID BIDDERS',
    seoBlogDescription: 'Artykuły, przypadki i porady dotyczące zakupu aut na aukcjach w USA, logistyki i odprawy celnej w Polsce.',
    seoCasesTitle: 'Przypadki klientów — realne transakcje i oszczędności | BID BIDDERS',
    seoCasesDescription: 'Prawdziwe przykłady zakupu aut przez BID BIDDERS: cena, oszczędności, terminy i opinie klientów.',
    seoFaqTitle: 'FAQ dotyczące importu aut | BID BIDDERS',
    seoFaqDescription: 'Odpowiedzi na pytania o czas dostawy, koszt pod dom, gwarancje, sprawdzenie VIN i oględziny auta na placu.',
    seoContactsTitle: 'Kontakty — skontaktuj się z BID BIDDERS',
    seoContactsDescription: 'Telefon, e-mail, adres biura i linki do mediów społecznościowych zespołu BID BIDDERS. Konsultacja bezpłatna.',
    seoPrivacyTitle: 'Polityka prywatności | BID BIDDERS',
    seoPrivacyDescription: 'Warunki przetwarzania danych osobowych, korzystania z plików cookie i ochrony informacji użytkowników BID BIDDERS.',
    seoTermsTitle: 'Warunki użytkowania | BID BIDDERS',
    seoTermsDescription: 'Zasady korzystania ze strony i usług BID BIDDERS, ograniczenia odpowiedzialności i warunki świadczenia usług.',
    seoLotTitle: 'Szczegóły lotu | BID BIDDERS',
    seoLotDescription: 'Szczegółowe informacje o locie: zdjęcia, dane techniczne, VIN, stan i aktualna oferta aukcyjna.',
    routeInStockAlt: 'Auta dostępne w Polsce — BID BIDDERS',
    routeTransitAlt: 'Auta w drodze',
    routeAuctionAlt: 'Na zamówienie z aukcji',
    routeCatalogAlt: 'Katalog aut',
    transitCtaAlt: 'Auta w drodze do Polski — ponad 1800 opcji',
    stockCtaAlt: 'Auta dostępne na placu BID BIDDERS',
    homeB2cNameError: 'Imię powinno mieć co najmniej 2 znaki.',
    homePhoneRequiredError: 'Numer telefonu jest wymagany.',
    homeB2cSuccess: 'Dziękujemy! Otrzymaliśmy zgłoszenie i skontaktujemy się w ciągu 15 minut w godzinach pracy.',
    homeB2bFormatError: 'Podaj format współpracy.',
    homeB2bSuccess: 'Dziękujemy! Zgłoszenie zostało przyjęte, specjalista B2B skontaktuje się z Tobą bezpośrednio, aby ustalić warunki.',
    homeHeroEyebrow: 'BID BIDDERS · 13 LAT Doświadczenia',
    homeHeroTitleLineOne: 'Twój zaufany partner',
    homeHeroTitleLineTwo: 'w imporcie aut z',
    homeHeroTitleAccent: 'USA, Kanady i Korei',
    homeHeroDominant: 'Oszczędzaj do 7 000 EUR przy zakupie auta z USA i samochodów ze Stanów',
    homeHeroLead: 'Sprowadzamy auta z USA i samochody ze Stanów od 8 000 EUR pod dom. Średni czas dostawy 45-60 dni. Z góry znasz koszt końcowy i otrzymujesz pełen pakiet dokumentów.',
    homeHeroPrimaryCta: 'Uzyskaj wycenę pod dom',
    homeHeroSecondaryCta: 'Zobacz auta',
    homeHeroMicro: 'Odpowiadamy w ciągu 15 minut w godzinach pracy',
    homeHeroStatSavings: 'Średnia oszczędność',
    homeHeroStatDeliveryDays: 'Dni dostawy',
    homeHeroStatYears: 'LAT Doświadczenia',
    homeTrustAria: 'Dlaczego klienci nam ufają',
    homeTrustOneTitle: '13 LAT Doświadczenia',
    homeTrustOneDesc: 'USA, Kanada i Korea',
    homeTrustTwoTitle: 'Realny koszt końcowy',
    homeTrustTwoDesc: 'Ustalamy cenę przed zakupem',
    homeTrustThreeTitle: 'Śledzenie w czasie rzeczywistym',
    homeTrustThreeDesc: 'Od portu do Twojego domu',
    homeTrustFourTitle: 'Wsparcie 24/7',
    homeTrustFourDesc: 'Telefon · WhatsApp · Messenger',
    homeRouteKicker: 'Scenariusze zakupu · Choose your path',
    homeRouteTitle: 'Jak chcesz kupić auto?',
    homeRouteLead: 'Wybierz rodzaj zakupu, a pokażemy kolejny krok w kilka sekund.',
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
    homeEconKicker: 'Ekonomia',
    homeEconTitle: 'Dlaczego to bardziej opłacalne niż rynek w Polsce',
    homeEconLead: 'Realna oszczędność na przykładach klientów — bez zaokrągleń i marketingu.',
    homeEconCase: 'Case ·',
    homeEconMarket: 'Rynek Polski',
    homeEconTurnkey: 'BID BIDDERS pod dom',
    homeEconSave: 'Oszczędność',
    homeEconAvgSave: 'Średnia oszczędność',
    homeEconDesc: 'Przykłady bazują na realnych przypadkach. Finalny koszt zależy od modelu, stanu auta i logistyki.',
    homeEconBtn: 'Oblicz moją oszczędność',
    homeCalcKicker: 'Kalkulator pod dom',
    homeCalcTitle: 'Kalkulacja przed licytacją',
    homeCalcLead: 'Oblicz koszt końcowy przed zakupem: oferta, opłaty, logistyka, podatki i dostawa.',
    homeCalcCheck1: 'Lot + opłaty aukcyjne',
    homeCalcCheck2: 'Transport do portu UE',
    homeCalcCheck3: 'Cło, podatki, certyfikacja',
    homeCalcCheck4: 'Dostawa do Twojego miasta',
    homeCalcBadge: 'Realny case kalkulacji',
    homeCalcBadgeSave: 'Oszczędność {amount} dzięki dokładnej kalkulacji przed licytacją',
    homeCalcBtn: 'Uzyskaj kalkulację',
    homeCalcBtnOpen: 'Otwórz kalkulator',
    homeCalcCardTag: 'Przykład kalkulacji',
    homeCalcCardTitle: 'Twój lot · Auto z aukcji',
    homeCalcDestLabel: 'Port docelowy (EU)',
    homeCalcBidLabel: 'Oferta na aukcji',
    homeCalcBidHint: 'wpisz kwotę',
    homeCalcBidAria: 'Kwota oferty w euro',
    homeCalcLine1: 'Prowizja (aukcja + serwis)',
    homeCalcLine2: 'Logistyka do UE',
    homeCalcLine3: 'Podatki ({vat}% VAT)',
    homeCalcLine4: 'Dostawa do Twojego miasta',
    homeCalcTotal: 'Suma pod dom ({port})',
    homeCalcNote: 'Kalkulacja orientacyjna. Finalny koszt zależy od modelu, stanu auta, stawek logistyki i miejsca zakupu.',
    homeCalcStep1: 'Wybierz auto',
    homeCalcStep1Desc: 'Znajdź lot na aukcji',
    homeCalcStep2: 'Budżet',
    homeCalcStep2Desc: 'Podaj kwotę licytacji',
    homeCalcStep3: 'Oblicz',
    homeCalcStep3Desc: 'Otrzymaj pełny kosztorys pod dom',
    homeCalcStep4: 'Wyślij zapytanie',
    homeCalcStep4Desc: 'Prześlij formularz po dokładną wycenę',
    homeCalcTrust1: 'Przejrzysty kosztorys',
    homeCalcTrust1Desc: 'Bez ukrytych opłat po zakupie',
    homeCalcTrust2: 'Realne stawki',
    homeCalcTrust2Desc: 'Logistyka i opłaty są aktualizowane regularnie',
    homeCalcTrust3: 'Wsparcie menedżera',
    homeCalcTrust3Desc: 'Weryfikujemy case i końcową kwotę',
    homeScenarioHero: 'Hero',
    homeScenarioOrder: 'Na zamówienie',
    homeScenarioFinalCta: 'Final CTA',
    homeScenarioSticky: 'Sticky CTA',
    homeFinalTag: 'Bez zobowiązań · Final step',
    homeFinalTitle: 'Otrzymaj dopasowane opcje',
    homeFinalTitleAccent: 'jeszcze dziś',
    homeFinalLead: 'Zostaw zgłoszenie i odbierz personalną wycenę pod dom z prognozą terminu i oszczędności.',
    homeFinalPrimaryCta: 'Uzyskaj wycenę pod dom',
    homeFinalMicro: 'Odpowiadamy w ciągu 15 minut w godzinach pracy',
    homeStickyCta: 'Uzyskaj wycenę pod dom',
    homeModalB2cAria: 'Główny formularz B2C',
    homeModalB2cTitle: 'Uzyskaj wycenę pod dom',
    homeModalNameLabel: 'Imię',
    homeModalPhoneLabel: 'Telefon',
    homeModalBudgetLabel: 'Budżet',
    homeModalBudgetPlaceholder: 'Opcjonalnie',
    homeModalScenarioLabel: 'Wybierz scenariusz',
    homeModalCommentLabel: 'Komentarz',
    homeModalAutoClose: 'To okno zamknie się za',
    homeModalSending: 'Wysyłanie...',
    homeModalSubmit: 'Wyślij zgłoszenie',
    thankYouTitle: 'Dziękujemy! Zgłoszenie przyjęte.',
    thankYouText: 'Nasz zespół skontaktuje się z Tobą w godzinach pracy: 10:00–20:00.',
    thankYouBtn: 'Rozumiem, dziękuję',
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
    homeStockLead: 'Dostępne od ręki. Przyjdź, obejrzyj samochody na żywo, porównaj opcje, poznaj szczegóły.',
    homeStockLocation: 'Jawczyce · 05-850',
    homeStockLoc: 'Lokalizacja',
    homeStockLocCity: 'Jawczyce, ul. Poznanska 56',
    homeStockCtaAll: 'Wszystkie auta',
    homeStockBadge: 'Dostępne',
    homeStockCardViewAll: 'Wszystkie dostępne auta',
    homeStockCardViewAllDesc: 'Przeglądaj pełny katalog dostępnych aut i zarezerwuj swoją inspekcję dzisiaj.',
    homeStockCardViewAllCta: 'Katalog dostępnych',
    homeStockLiveQuestion: 'Chcesz zobaczyć je osobiście?',
    homeStockLiveSchedule: 'Umów wizytę',
    homeCatalogKicker: 'Katalog · Copart · IAAI · Manheim',
    homeCatalogHeading: '200 000+ aukcji dziennie',
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
    homeHowHeading: 'Pięć etapów od aukcji do wydania',
    homeHowLead: 'Od doboru auta z USA i samochodów ze Stanów, przez aukcje Copart i IAAI, aż do wydania pojazdu w Twoim mieście.',
    homeHowAct: 'Etap',
    homeStep1Title: 'Brief i budżet',
    homeStep1Desc: 'Ustalamy zadanie, termin i docelowy budżet',
    homeStep2Title: 'Dobór i weryfikacja',
    homeStep2Desc: 'VIN, historia i zdjęcia przed ofertą',
    homeStep3Title: 'Licytacja i zakup',
    homeStep3Desc: 'Bezpieczna oferta i oficjalny zakup pojazdu',
    homeStep4Title: 'Dostawa i opłaty',
    homeStep4Desc: 'Kontener, logistyka i odprawy',
    homeStep5Title: 'Wydanie kluczy',
    homeStep5Desc: 'Auto z pełnym pakietem dokumentów',
    homeHowCta: 'Gotów obliczyć auto pod dom?',
    homeHowCtaButton: 'Uzyskaj wycenę',
    homeHowCtaLead: 'Gotów obliczyć auto pod dom?',
    homeHowCtaBtn: 'Uzyskaj wycenę',
    homeAppKicker: 'Aplikacja · Twój panel',
    homeAppHeading: 'Zarządzaj umową jednym kliknięciem',
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
    homeCasesHeading: 'Nasze realizacje',
    homeCasesLead: 'Model, cena pod dom, cena rynku Polski, całkowita oszczędność.',
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
    homeSocialHeading: 'Obserwuj nasze media społecznościowe',
    homeSocialLead: 'Pokazujemy prawdziwe auta w drodze, inspekcje na placu i wydania klientom. Subskrybuj — zobaczysz proces z wewnątrz.',
    homeLocKicker: 'Plac · Polska',
    homeLocHeading: 'Zobacz auta osobiście',
    homeLocLead: 'Pokażemy Ci samochody, porównamy opcje w Twoim budżecie, wyjaśnimy wszystko o dokumentach i terminach.',
    homeLocMapClick: 'Otwórz na mapie',
    homeLocRoute: 'Wyznacz trasę',
    homeLocShowroom: 'BID BIDDERS · SHOWROOM',
    homeB2bKicker: 'Partnerstwo · B2B',
    homeB2bHeading: 'Zostań naszym partnerem lub sprzedaj z nami swój samochód',
    homeB2bLead: 'Dla dealerów, serwisów, logistyki i prywatnych sprzedawców.',
    homeB2bCard1Num: '01 · Partnerstwo',
    homeB2bCard1Title: 'Dla dealerów i serwisów',
    homeB2bCard1Desc: 'Wspólne umowy, przepływ leadów, długoterminowa współpraca.',
    homeB2bCard1Item1: 'Stała marża na umowę',
    homeB2bCard1Item2: 'Wsparcie marketingowe i leady',
    homeB2bCard1Item3: 'Partner logistyki na cały łańcuch',
    homeB2bCard2Num: '02 · Sprzedaj auto',
    homeB2bCard2Title: 'Sprzedaj swoje auto',
    homeB2bCard2Desc: 'Wystawienie, wsparcie i bezpieczna transakcja pod dom.',
    homeB2bCard2Item1: 'Wycena w 24 godziny',
    homeB2bCard2Item2: 'Umieszczenie na naszych kanałach',
    homeB2bCard2Item3: 'Wsparcie dokumentacji',
    homeB2bCta: 'Zostań partnerem / Sprzedaj auto',
    homeFaqKicker: 'FAQ · Straight answers',
    homeFaqHeading: 'Często zadawane pytania',
    homeFaq1Q: 'Termin dostawy',
    homeFaq1A: 'Średni termin dostawy to 45–60 dni, zależy od portu i obciążenia logistyki.',
    homeFaq2Q: 'Co wchodzi w "pod dom"',
    homeFaq2A: 'Lot, prowizje, logistyka, cła, dokumenty i wydanie auta w Twoim mieście.',
    homeFaq3Q: 'Jakie gwarancje',
    homeFaq3A: 'Jedna umowa na cały proces, przejrzysta wycena i weryfikacja VIN przed licytacją.',
    homeFaq4Q: 'Jak działa aplikacja',
    homeFaq4A: 'W panelu widzisz loty, statusy, dokumenty, etapy dostawy i historię płatności.',
    homeFaq5Q: 'Czy mogę zobaczyć auto osobiście',
    homeFaq5A: 'Tak, inspekcje są dostępne na placu w Jawczyce po wcześniejszym umówieniu.',
    homeFaqCtaButton: 'Nie znalazłeś odpowiedzi? Zapytaj',
    navChinaCars: 'Auta z Chin',
    footerLotSources: 'Oficjalne źródła lotów',
    catalogSortAuctionTime: 'Aukcja: najwcześniej',
    catalogSortPriceDesc: 'Cena: od najwyższej',
    catalogSortPriceAsc: 'Cena: od najniższej',
    catalogSortYearDesc: 'Rok: najnowsze',
    catalogSortYearAsc: 'Rok: najstarsze',
    catalogSortMileageAsc: 'Przebieg: rosnąco',
    catalogSortMileageDesc: 'Przebieg: malejąco',
    catalogBadgeInTransit: 'W DRODZE',
    catalogBadgeInStock: 'W MAGAZYNIE',
    catalogBadgeNew: 'NEW',
    catalogAuctionBadgeAvailable: 'DOSTĘPNE',
    catalogAuctionBadgeReady: 'GOTOWE',
    catalogSellerLocal: 'Lokalny',
    catalogStatusInTransit: 'W drodze',
    catalogStatusInStock: 'W magazynie',
    catalogStatusAtAuction: 'Na aukcji',
    catalogPriceLabel: 'Cena',
    catalogCurrentBidLabel: 'Aktualna oferta',
    catalogPriceNoteSeller: 'Sprzedawca: BID BIDDERS',
    catalogPriceNoteLease: 'Dostępne w leasingu',
    catalogPriceNoteEstimate: 'Wycena rynkowa:',
    catalogDetailMileage: 'Przebieg',
    catalogDetailLocation: 'Lokalizacja',
    catalogDetailDamage: 'Uszkodzenia',
    catalogDetailStatus: 'Status',
    catalogCardDetails: 'Szczegóły',
    catalogFilterBtn: 'Filtry',
    catalogFilterTitle: 'Filtry wyszukiwania',
    catalogFilterResetAll: 'Resetuj wszystkie',
    catalogToggleWholesale: 'Wholesale — Tylko samochody',
    catalogToggleRecent: 'Niedawno dodane — 24 godz',
    catalogToggleExcludeActive: 'Wyklucz auta na aukcji',
    catalogFilterDocType: 'Typ dokumentu',
    catalogFilterYear: 'Rok',
    catalogFilterBrand: 'Marka',
    catalogFilterModel: 'Model',
    catalogFilterMileage: 'Przebieg',
    catalogFilterFuel: 'Typ silnika',
    catalogFilterTrans: 'Skrzynia biegów',
    catalogFilterDrive: 'Napęd',
    catalogFilterPostal: 'Szukaj po kodzie',
    catalogFilterReset: 'Resetuj',
    catalogRangeFrom: 'od',
    catalogRangeTo: 'do',
    catalogCountSuffix: 'szt',
    catalogSearchPlaceholder: 'Szukaj...',
    catalogYearFrom: 'Od',
    catalogYearTo: 'Do',
    catalogPostalPlaceholder: 'Kod pocztowy',
    catalogPostalSearch: 'Szukaj',
    catalogTabAll: 'Wszystkie',
    catalogTabOpenAuctions: 'Otwarte aukcje',
    catalogTabInProgress: 'W toku',
    catalogTabClosedToday: 'Zamknięte dziś',
    catalogTabBuyNow: 'Kup teraz',
    catalogTabArchive: 'Archiwum aukcji',
    catalogTabInStock: 'W magazynie',
    catalogTabReadyToTransfer: 'Gotowe do odbioru',
    catalogTabOnOrder: 'Na zamówienie',
    catalogTabInTransit: 'Auta w drodze',
    catalogResultsCount: 'samochodów znaleziono',
    catalogLayoutList: 'Lista',
    catalogLayoutGrid: 'Siatka',
    catalogLoadMore: 'Załaduj więcej',
    lotLoading: 'Ładowanie auta',
    lotLoadingDesc: 'Pobieramy aktualne dane z API.',
    lotNotFound: 'Nie znaleziono auta',
    lotNotFoundDesc: 'Sprawdź poprawność linku lub wróć do katalogu.',
    lotNotFoundBtn: 'Przejdź do katalogu',
    lotModeTransit: 'Auta w drodze',
    lotModeInStock: 'W magazynie',
    lotModeCatalog: 'Katalog',
    lotStatusTransit: 'W drodze',
    lotStatusInStock: 'W magazynie',
    lotStatusAtAuction: 'Na aukcji',
    lotLabelLocation: 'Lokalizacja biura',
    lotLabelDispatchPort: 'Port wysyłki',
    lotLabelPickupPoint: 'Miejsce odbioru',
    lotLabelStatus: 'Status',
    lotLabelAuctionDate: 'Data aukcji',
    lotLabelEstDelivery: 'Szac. dostawa',
    lotDeliveryTbd: 'Do ustalenia',
    lotWatching: 'Obserwowane',
    lotWatch: 'Obserwuj',
    lotCarfaxBtn: 'Kup raport CARFAX',
    lotGalleryPrev: 'Poprzednie zdjęcie',
    lotGalleryNext: 'Następne zdjęcie',
    lotLiveBadgeAuction: 'Aukcja na żywo',
    lotLiveBadgeTransit: 'W drodze',
    lotLiveBadgeReady: 'Gotowe do odbioru',
    lotSpecsMainTitle: 'Główne parametry',
    lotLabelSeller: 'Sprzedawca',
    lotLabelDocuments: 'Dokumenty',
    lotLabelPrimaryDamage: 'Uszkodzenie główne',
    lotLabelSecondaryDamage: 'Uszkodzenie wtórne',
    lotLabelMileage: 'Przebieg',
    lotLabelKeys: 'Klucz',
    lotCopyVin: 'Kopiuj',
    lotSpecsTechTitle: 'Parametry techniczne',
    lotLabelBodyType: 'Typ nadwozia',
    lotLabelColor: 'Kolor',
    lotLabelEngine: 'Silnik',
    lotLabelTransmission: 'Skrzynia biegów',
    lotLabelFuel: 'Rodzaj paliwa',
    lotLabelDrive: 'Napęd',
    lotLabelStartCode: 'Kod startowy',
    lotLabelStartCodeValue: 'Sprawny',
    lotLabelAcvRetail: 'ACV / Retail',
    lotLabelBodyExtended: 'Rozszerzony typ nadwozia',
    lotLabelSaleStatus: 'Status sprzedaży',
    lotShowMore: 'Pokaż więcej (4)',
    lotShowLess: 'Pokaż mniej',
    lotSourceLink: 'Otwórz oryginalny lot na',
    lotServicesTitle: 'Usługi dodatkowe',
    lotService11: 'Pojazd z ograniczeniem zakupu',
    lotService12: 'Ładunek niebezpieczny',
    lotService13: 'Ponadgabarytowy',
    lotService14: 'Ponadgabarytowy+',
    lotServicesNote: 'Zaznaczenie opcji doda kwotę do szacowanej ceny końcowej.',
    lotBuyNowDesc: 'Natychmiastowy zakup bez licytacji',
    lotBuyNowBtn: 'Kup teraz',
    lotSbCurrentBid: 'Aktualna oferta',
    lotSbEstimate: 'Wycena:',
    lotSbMaxBid: 'Twoja maksymalna oferta',
    lotSbDecrease: 'Zmniejsz',
    lotSbIncrease: 'Zwiększ',
    lotSbBidNow: 'Złóż ofertę teraz',
    lotSbHowToBid: 'Jak złożyć ofertę? →',
    timerUnitD: 'd',
    timerUnitH: 'g',
    timerUnitM: 'min',
    timerUnitS: 's',
    lotSbTimeLeft: 'Pozostały czas',
    lotSbAuctionEnded: 'Aukcja zakończona',
    lotSbTimerUntil: 'do',
    lotSbCalcTitle: 'Kalkulator ceny końcowej',
    lotCalcBid: 'Oferta (aktualna)',
    lotCalcAuctionFee: 'Opłata aukcyjna',
    lotCalcTransport: 'Transport do portu',
    lotCalcShipping: 'Dostawa morska',
    lotCalcDocs: 'Dokumenty + serwis BID BIDDERS',
    lotCalcSubtotal: 'Razem (przed cłem)',
    lotCalcNote: 'Szacunkowa cena bez opłat celnych. Kurs USD/EUR = 0.91',
    lotCustomsCalcTitle: 'Kalkulator opłat celnych',
    lotCustomsDuty: 'Cło 10%',
    lotCustomsVat: 'VAT 21%',
    lotCustomsBroker: 'Broker i obsługa',
    lotCustomsTotal: 'Opłaty celne',
    lotCustomsFinal: 'Koszt końcowy',
    lotCustomsNote: 'Szacunek orientacyjny. Ostateczna kwota może się różnić w zależności od typu dokumentu i kraju.',
    lotSbFinalPrice: 'Cena końcowa',
    lotSbTurnkeyFixed: 'Stała cena pod dom',
    lotSbFactDelivery: 'Szac. dostawa',
    lotSbFactDeliveryValue: 'W drodze',
    lotSbContact: 'Skontaktuj się w sprawie auta',
    lotSbWhatsIncluded: 'Co jest w cenie',
    lotSbIncluded1: 'Zakup na aukcji',
    lotSbIncluded2: 'Transport USA → port',
    lotSbIncluded3: 'Dostawa morska',
    lotSbIncluded4: 'Odprawa celna w Europie',
    lotSbIncluded5: 'Serwis i wsparcie BID BIDDERS',
    lotSbPriceKicker: 'Cena',
    lotSbReadyLviv: 'Gotowe do odbioru we Lwowie',
    lotSbFactCert: 'Certyfikacja',
    lotSbFactCertValue: 'Ukończona',
    lotSbBuyNow: 'Kup teraz',
    lotSbScheduleView: 'Umów oględziny',
    lotSbLeaseCalc: 'Kalkulator leasingu',
    lotSbMonthlyPayment: 'Miesięczna rata',
    lotSbPerMonth: '/mies',
    lotSbDownPayment: 'Wpłata własna',
    lotSbLeaseTerm: 'Okres',
    lotSbLeaseMonths: 'mies',
    lotSbLeaseNote: 'Obliczenia wstępne. Dokładne warunki ustalamy po uzgodnieniu z firmą leasingową.',
    lotDescTitle: 'Opis auta',
    lotDescSubtitle: 'Pełne informacje techniczne dla tej karty.',
    lotLabelMake: 'Marka',
    lotLabelModel: 'Model',
    lotLabelYear: 'Rok',
    lotLabelPrice: 'Cena',
    lotKnowTitle: 'Co warto wiedzieć o',
    lotKnowSubtitle: 'Status, dostawa, wyposażenie i kroki zakupu gotowego auta.',
    lotKnowOverviewTitle: 'Krótki przegląd',
    lotKnowOverviewStatus: 'auto ze statusem',
    lotKnowOverviewLoc: 'Lokalizacja:',
    lotKnowOverviewSpecs: 'Dane techniczne:',
    lotKnowOverviewMileage: 'Przebieg:',
    lotKnowPriceFrom: 'Aktualna cena — od',
    lotKnowPriceEnd: 'Następnie wyrejestrowanie, przygotowanie, certyfikacja i przekazanie w Polsce / Europie.',
    lotKnowCheckTitle: 'Co sprawdzić przed decyzją',
    lotKnowCheckDamage: 'Lista uszkodzeń:',
    lotKnowCheckDocs: 'Weryfikacja dokumentów:',
    lotKnowCheckBudget: 'Szacowany budżet: od',
    lotKnowCheckBudgetSuffix: 'z uwzględnieniem logistyki',
    lotKnowCheckAgreement: 'Uzgodnij budżet wydania auta / dostawy w Polsce / Europie',
    lotKnowChip1: 'Import pod dom',
    lotKnowChip2: 'Dostawa i odprawa celna',
    lotKnowChip3: 'Konsultacja',
    lotSimilarTitle: 'Podobne',
    lotSimilarTitleTransit: 'auta w drodze',
    lotSimilarTitleInStock: 'auta w magazynie',
    lotSimilarTitleCatalog: 'auta na aukcji',
    lotSimilarSubtitle: 'Kilka dodatkowych trafnych opcji do szybkiego przeglądania.',
    lotSimilarPriceLabel: 'Cena:',
    lotSimilarMileageLabel: 'Przebieg:',
    lotSimilarStatusLabel: 'Status:',
    lotSimilarAllTransit: 'Wszystkie auta w drodze',
    lotSimilarAllInStock: 'Wszystkie auta w magazynie',
    lotSimilarAllCatalog: 'Wszystkie loty',
    lotSimilarLinkCatalog: 'Katalog aukcji',
    lotSimilarLinkCar: 'Znajdź auto',
    lotSimilarLinkLogistics: 'Logistyka i cło',
    lotSimilarLinkBlog: 'Porady na blogu',
    lotFaqTitle: 'Najczęstsze pytania o',
    lotFaqSubtitle: 'Odpowiedzi na pytania o stan, cenę, zalety i logistykę tego auta.',
    lotFaq1Q: 'Czym jest to auto i jaki ma status?',
    lotFaq1A: 'To realny lot z naszego inventory. Status wyświetlany jest w bloku „Status i gotowość auta" i aktualizuje się w miarę postępów logistyki.',
    lotFaq2Q: 'Które parametry są tu najważniejsze?',
    lotFaq2A: 'Zwróć uwagę przede wszystkim na VIN, rok, przebieg, rodzaj uszkodzeń i dostępność kluczy. Pozostałe pola (nadwozie, silnik, kolor) wpływają raczej na eksploatację niż czystość prawną.',
    lotFaq3Q: 'Jaki jest orientacyjny budżet pod dom?',
    lotFaq3A: 'Blok „Budżet gotowego auta" pokazuje aktualną cenę + serwis BID BIDDERS. Dla dokładnego wyliczenia z logistyką i cłem użyj kalkulatora w sidebarze lub na stronie /calculator.',
    lotFaq4Q: 'Na co zwrócić uwagę przed decyzją?',
    lotFaq4A: 'Sprawdź uszkodzenia główne i wtórne, typ dokumentu (Title), dostępność kluczy oraz rzeczywiste zdjęcia w galerii. Zalecamy również poproszenie o dodatkowe zdjęcia od naszego menedżera.',
    lotStepsTitle: 'Jak przebiega zakup gotowego auta',
    lotStepsSubtitle: 'Cztery kroki od inspekcji do przekazania kluczy.',
    lotStep1Title: 'Sprawdzamy auto',
    lotStep1Text: 'Ustalamy stan, przebieg, dokumenty i gotowość auta do odbioru lub dalszej dostawy.',
    lotStep2Title: 'Liczymy budżet',
    lotStep2Text: 'Przygotowujemy przejrzysty kosztorys uwzględniający cenę auta, przygotowanie, certyfikację i wsparcie.',
    lotStep3Title: 'Kompletujemy dokumenty',
    lotStep3Text: 'Przygotowujemy ofertę, umowę i wszystkie dokumenty do bezpiecznego przekazania klientowi.',
    lotStep4Title: 'Przekazujemy w Polsce / Europie',
    lotStep4Text: 'Auto przechodzi przez ostatnie etapy i jest przekazywane z pełnym wsparciem zespołu BID BIDDERS.',
    lotSummaryTitle: 'Co warto wiedzieć przed decyzją o',
    lotSummarySubtitle: 'Stan, aktualny status i orientacyjny budżet końcowy.',
    lotSummaryStatusTitle: 'Status i gotowość auta',
    lotSummaryStatusP1: 'jest aktualnie w statusie',
    lotSummaryStatusP2: 'Przed zakupem ustalamy lokalizację, dostępność dokumentów i scenariusz przekazania w Polsce / Europie.',
    lotSummaryStatusFacts: 'Dostępne dane: dokumenty —',
    lotSummaryStatusFactsDmg: 'uszkodzenia —',
    lotSummaryStatusFactsLoc: 'lokalizacja —',
    lotSummaryStatusP3: 'Jeśli potrzebujesz szczegółowej wyceny, zespół BID BIDDERS pomoże z logistyką i odprawą celną w realnym budżecie — bez ukrytych niespodzianek.',
    lotSummaryBudgetTitle: 'Budżet gotowego auta',
    lotSummaryBudgetLead: 'Dla gotowego auta opieramy się na aktualnej cenie, przygotowaniu, certyfikacji i wsparciu przy przekazaniu.',
    lotBudgetCurrentPrice: 'Aktualna cena auta',
    lotBudgetPrep: 'Przygotowanie i serwis',
    lotBudgetPrepValue: 'na życzenie',
    lotBudgetCert: 'Certyfikacja / rejestracja',
    lotBudgetCertValue: 'indywidualnie',
    lotBudgetService: 'Serwis BID BIDDERS',
    lotSummaryCtaCar: 'Znajdź auto',
    lotSummaryCtaLogistics: 'Dowiedz się o logistyce',
    lotTimerDays: 'd',
    lotTimerHours: 'g',
    lotTimerMinutes: 'min',
    lotTimerSeconds: 's',
    lotPickupCity: 'Lwów',
    lotDispatchCountry: 'USA',
    calcPill: 'Kalkulator importu',
    calcHeroTitle: 'Oblicz realny koszt auta pod dom jeszcze przed licytacją',
    calcHeroDesc: 'Od oferty do kosztu końcowego z cłem i serwisem BID BIDDERS.',
    calcHeroNoteTitle: 'Co jest uwzględniane',
    calcHeroNoteDesc: 'Oferta, opłata aukcyjna, dostawa, dokumenty, broker, prowizja, ubezpieczenie i podatki.',
    calcFormKicker: 'Parametry auta',
    calcFormTitle: 'Wprowadź dane',
    calcFormDesc: 'Szybki lokalny podliczenie + dokładne API z zachowaniem fallback.',
    calcLabelRoute: 'Trasa / port',
    calcRouteKlaipeda: 'Kłajpeda',
    calcRouteOdesa: 'Odessa',
    calcLabelCarType: 'Typ auta',
    calcCarTypeAuto: 'Sedan / Hatchback',
    calcCarTypeCrossover: 'Crossover',
    calcCarTypeSuv: 'SUV',
    calcCarTypeMoto: 'Motocykl',
    calcCarTypePickup: 'Bus / Pickup',
    calcLabelFuel: 'Typ silnika',
    calcLabelAuction: 'Aukcja',
    calcLabelDocType: 'Typ dokumentów',
    calcLabelCity: 'Wysyłka z',
    calcLabelYear: 'Rok produkcji',
    calcLabelBattery: 'Pojemność baterii',
    calcLabelEngine: 'Pojemność silnika',
    calcLabelPrice: 'Cena auta / oferta',
    calcPricePlaceholder: 'Wskaż wartość auta',
    calcLabelInsurance: 'Ubezpieczenie',
    calcLabelTransfer: 'Przelew środków',
    calcBtnRecalc: 'Przelicz',
    calcBtnReset: 'Resetuj',
    calcResultKicker: 'Podsumowanie',
    calcGroupLogistics: 'Aukcja i logistyka',
    calcRowBid: 'Oferta',
    calcRowAuctionFee: 'Opłata aukcyjna',
    calcRowUsDelivery: 'Dostawa w USA',
    calcRowDocs: 'Dokumenty',
    calcRowOcean: 'Dostawa morska',
    calcRowPortUnload: 'Rozładunek w porcie',
    calcRowEuDelivery: 'Dostawa port – UE',
    calcRowCustomsDelivery: 'Dostawa do granicy',
    calcRowBorderHandling: 'Przekroczenie granicy i transport specjalny',
    calcGroupCustoms: 'Cło i serwis',
    calcCustomsPending: 'Szczegóły cła i serwisu pojawią się po kalkulacji LIVE',
    calcCaptionIdle: 'Wprowadź dane do kalkulacji. Żadnych kwot przed podaniem parametrów.',
    calcCaptionLoading: 'Podsumowanie aktualizuje się po odpowiedzi API.',
    calcCaptionLive: 'Kwota końcowa uwzględnia już logistykę, cło i koszty serwisu.',
    calcCaptionLiveEu: 'Kwota końcowa uwzględnia logistykę do UE, wybrany podatek, profil VAT i koszty serwisu.',
    calcCaptionFallback: 'Dokładna kwota niedostępna. Przejdź do kontaktów po ręczną wycenę.',
    calcCaptionErr401: 'API kalkulatora wymaga autoryzacji. Dodaj token do localStorage (klucz bidbiddersPartnerToken).',
    calcCaptionErr403: 'API kalkulatora odrzuciło żądanie (403). Sprawdź dozwolone IP lub domenę API.',
    calcCaptionErr400Prefix: 'API kalkulatora zwróciło 400 (walidacja). Szczegóły:',
    calcCaptionErrJson: 'API kalkulatora zwróciło nie-JSON. Sprawdź odpowiedź gateway/WAF w Network.',
    calcRowCarPrice: 'Cena auta / oferta',
    calcRowOceanFromPrefix: 'Wysyłka z USA –',
    calcRowPortUnloadOdesa: 'Rozładunek port Odessa + broker',
    calcRowPortUnloadKlaipeda: 'Rozładunek port Kłajpeda',
    calcRowEuDeliveryPortPrefix: 'Dostawa',
    calcCityWarsaw: 'Warszawa',
    calcRowExportDocs: 'Dokumenty eksportowe',
    calcRowExcise: 'Akcyza',
    calcRowImportDuty: 'Cło importowe',
    calcRowVat: 'VAT',
    calcRowNonVatFee: 'Opłata finansowa za brak VAT',
    calcRowBroker: 'Usługi brokerskie',
    calcRowBiddersFee: 'Prowizja BID BIDDERS',
    calcRowInsuranceFee: 'Ubezpieczenie',
    calcRowMoneyTransfer: 'Opłata za przelew w USA',
    calcLabelEuPort: 'Port docelowy (UE)',
    calcLabelImportTax: 'Cło',
    calcLabelVatProfile: 'VAT (profil)',
    calcRowCustomsAgency: 'Agencja celna',
    calcRouteUnavailable: 'Trasa tymczasowo niedostępna',
    calcRowCustomsBase: 'Podstawa celna',
    calcRowTotal: 'RAZEM',
    calcBranchPlaceholder: 'Szukaj miasta...',
    calcBranchNotFound: 'Nie znaleziono lokalizacji',
    calcAuctionUrlLabel: 'Link do lotu Copart / IAAI',
    calcAuctionUrlPlaceholder: 'https://www.copart.com/lot/... lub https://www.iaai.com/...',
    calcAuctionUrlButton: 'Załaduj dane',
    calcAuctionUrlLoading: 'Ładowanie danych lotu...',
    calcAuctionUrlSuccess: 'Lot znaleziony: {title}',
    calcAuctionUrlBranchMissing: 'Lot znaleziony, ale miasto nierozpoznane — wybierz ręcznie',
    calcAuctionUrlError: 'Błąd ładowania. Wprowadź parametry ręcznie',
    calcAuctionUrlUnsupported: 'Nieobsługiwany link. Wklej URL z copart.com lub iaai.com',
    calcAuctionUrlIaaiPartial: 'Lot IAAI rozpoznany. Wprowadź cenę i miasto ręcznie',
    calcAuctionUrlIaaiUnavailable: 'IAAI jest tymczasowo niedostępne. Uzupełnij cenę i miasto ręcznie',
    calcAuctionUrlPartial: 'Lot rozpoznany częściowo. Sprawdź cenę i miasto ręcznie',
    calcFormTitle2: 'Wprowadź dane',
    calcFormDesc2: 'Podaj parametry auta, aby obliczyć szacunkowy koszt importu.',
    calcResultKicker2: 'Szacunkowy koszt',
    calcCaptionIdle2: 'Wprowadź dane auta, aby zobaczyć kalkulację.',
    calcRouteUnavailable2: 'Ten kierunek jest tymczasowo niedostępny. Wybierz inny port lub miasto aukcji.',
    calcCaptionResult: 'Kalkulacja obejmuje aukcję, transport, cło, VAT i obsługę BID BIDDERS.',
    calcRowCarPrice2: 'Cena auta',
    calcRowUsDelivery2: 'Transport w USA',
    calcRowOceanDelivery: 'Transport morski',
    calcRowBiddersFee2: 'Obsługa BID BIDDERS',
    calcTaxAuto: '10% (Samochód)',
    calcTaxTruck: '22% (Ciężarówka)',
    calcTaxMoto: '6% (Motocykl)',
    calcTaxClassic0: '0% (Klasyk)',
    calcVatClassic9: '9% (Klasyk)',
    blogHeroKicker: 'Blog BID BIDDERS',
    blogHeroTitle: 'Materiały o imporcie aut z USA i Europy',
    blogHeroSub: 'Przewodniki krok po kroku, logistyka, cło i dobór lotów na Copart, IAAI, Manheim. Bez wody — tylko konkretna wiedza od zespołu BID BIDDERS.',
    blogHeroMetaMaterials: 'Artykułów w bazie',
    blogHeroMetaReaders: 'Czytelników miesięcznie',
    blogHeroMetaCategories: 'Kategorii eksperckich',
    blogHeroMetaPerWeek: 'Nowych artykułów tygodniowo',
    blogCatAll: 'Wszystkie',
    blogCatGuides: 'Poradniki',
    blogCatCustoms: 'Cło',
    blogCatLogistics: 'Logistyka',
    blogCatCases: 'Case studies',
    blogCatAuctions: 'Aukcje',
    blogCatTips: 'Porady',
    blogFeaturedTitle: 'Polecane materiały',
    blogFeaturedSub: 'Najlepsze artykuły do przeczytania w pierwszej kolejności.',
    blogFeaturedCta: 'Wszystkie case studies →',
    blogReadingTime: 'czytania',
    blogAuthorPrefix: 'Autor:',
    blogLatestTitle: 'Najnowsze artykuły',
    blogLatestCountLabel: 'Razem w kategorii',
    blogReadMore: 'Czytaj →',
    blogNewsletterTitle: 'Newsletter bez spamu',
    blogNewsletterSub: 'Raz w tygodniu — najważniejsze informacje o rynku aut, najlepsze loty i świeże poradniki. Bez wody, bez reklam innych platform.',
    blogNewsletterBtn: 'Zapisz się',
    blogTagsTitle: 'Popularne tagi',
    blogTagsSub: 'Szybkie wyszukiwanie po słowie kluczowym.',
    blogFaqLink: 'Odpowiedzi w FAQ →',
    casesKicker: 'Case studies',
    casesPageTitle: 'Realne przypadki klientów BID BIDDERS',
    casesPageSub: 'Jedna metodologia porównania: cena pod dom, cena rynku polskiego, końcowa oszczędność.',
    casesLabelTurnkey: 'Pod klucz',
    casesLabelUsaPrice: 'Cena w USA',
    casesLabelMarket: 'Rynek polski',
    casesLabelSavings: 'Oszczędność',
    casesCtaBlog: 'Czytaj blog',
    casesCtaHome: 'Na stronę główną',
    casesCtaCalc: 'Oblicz koszt',
    casesCtaTransit: 'Auta w drodze',
    casesSeoP1: 'Realne przypadki potwierdzają: sprowadzenie auta z USA przez BID BIDDERS to oszczędność 5 000–15 000 EUR w porównaniu z rynkiem polskim. Specjalizujemy się w autach z Copart, IAAI i Manheim.',
    faqKicker: 'FAQ',
    faqPageTitle: 'Często zadawane pytania o import aut',
    faqPageSub: 'Odpowiedzi na pytania o terminy, usługę pod dom, gwarancje, aplikację i oględziny na placu.',
    faqDeliveryTimeQuestion: 'Ile trwa dostawa?',
    faqDeliveryTimeAnswer: 'Średnio 45-60 dni w zależności od trasy, portu i obciążenia celnego.',
    faqTurnkeyQuestion: 'Co obejmuje format pod dom?',
    faqTurnkeyAnswer: 'Dobór lotu, licytacja, zakup, logistyka, cło, dokumenty i przekazanie auta.',
    faqTransparencyQuestion: 'Jakie gwarancje przejrzystości?',
    faqTransparencyAnswer: 'Jedna umowa, kosztorys ustalony przed licytacją, weryfikacja VIN i przejrzyste etapy transakcji.',
    faqInspectionQuestion: 'Czy można przyjechać na oględziny?',
    faqInspectionAnswer: 'Tak, oględziny na placu są dostępne po wcześniejszym umówieniu.',
    faqCtaHome: 'Blok FAQ na stronie głównej',
    faqCtaContacts: 'Przejdź do kontaktów',
    legalKicker: 'Informacje prawne',
    termsTitle: 'Warunki użytkowania',
    termsSub: 'Korzystając ze strony BID BIDDERS, zgadzasz się z tymi warunkami.',
    termsS1Title: '1. Postanowienia ogólne',
    termsS1Text: 'Serwis ma charakter informacyjny i nie stanowi oferty publicznej. Ostateczne warunki współpracy określa indywidualna umowa.',
    termsS2Title: '2. Treści i prawa autorskie',
    termsS2Text: 'Teksty, projekt, grafika i inne materiały serwisu należą do BID BIDDERS lub są używane na podstawie prawnej.',
    termsS3Title: '3. Ograniczenie odpowiedzialności',
    termsS3Text: 'Dokładamy wszelkich starań, aby informacje były dokładne, jednak nie gwarantujemy braku błędów technicznych ani opóźnień w aktualizacji danych.',
    termsS4Title: '4. Zgłoszenia i komunikacja',
    termsS4Text: 'Wysyłając zgłoszenie, potwierdzasz prawdziwość podanych danych i wyrażasz zgodę na kontakt zwrotny w celu realizacji zapytania.',
    termsS5Title: '5. Prawo właściwe',
    termsS5Text: 'Do stosunków prawnych stosuje się prawo polskie, o ile umowa nie stanowi inaczej.',
    termsCtaPrivacy: 'Polityka prywatności',
    termsCtaHome: 'Na stronę główną',
    privacyTitle: 'Polityka prywatności i plików cookie',
    privacySub: 'Warunki gromadzenia i przetwarzania danych osobowych. Tekst prawny wymaga finalnej weryfikacji przez dział prawny.',
    privacyCtaTerms: 'Warunki użytkowania',
    privacyCtaHome: 'Na stronę główną',
    ctHeroKicker: 'Kontakty BID BIDDERS',
    ctHeroTitle: 'Kontakty i plac BID BIDDERS w Polsce',
    ctHeroSub: 'Przyjedź na oględziny, uzyskaj konsultację dotyczącą dokumentów i całkowitego kosztu posiadania. Przedstawiciele w całej Europie — od Londynu do Kłajpedy.',
    ctHeroFactOffices: 'Biura w UE',
    ctHeroFactDelivery: 'Dostarczonych aut miesięcznie',
    ctHeroFactChat: 'Chat na Messenger',
    ctHeroFactHours: 'Godziny pracy, pn–pt',
    ctQuickTitle: 'Skontaktuj się szybko',
    ctQuickSub: 'Menedżer odpowiada w godzinach pracy. Chat — całą dobę.',
    ctQuickCta: 'Zamów wycenę →',
    ctChannelPhoneLabel: 'Telefon (PL)',
    ctChannelPhoneHintMain: 'Główny numer, Polska',
    ctChannelPhoneHintSales: 'Menedżer sprzedaży',
    ctChannelEmailHint: 'Pytania ogólne',
    ctChannelTelegramHint: 'Szybkie odpowiedzi na czacie',
    ctOfficeSectionTitle: 'Główne biuro i showroom',
    ctOfficeSectionSub: 'Przyjedź tu na konsultację osobistą, oględziny auta i podpisanie umowy. Parking dostępny, wejście wolne po wcześniejszym umówieniu.',
    ctMapAriaLabel: 'Mapa BID BIDDERS, Polska',
    ctMapBadge: 'Główne biuro',
    ctAddressLabel: 'Adres',
    ctAddressCoords: 'Współrzędne:',
    ctAddressNearest: 'Najbliższe miasto:',
    ctAddressFromWarsaw: 'Z Warszawy:',
    ctAddressFromWarsawValue: '~25 min samochodem',
    ctDirectionsLabel: 'Wyznacz trasę',
    ctWazeLabel: 'Nawiguj',
    ctChannelsSectionTitle: 'Wszystkie kanały kontaktu',
    ctChannelsSectionSub: 'Telefon — do szybkich rozmów. Email — do oficjalnych dokumentów i zapytań biznesowych. Messenger — do szybkich pytań o każdej porze.',
    ctEuropeBadge: 'Przedstawiciele w UE',
    ctEuropeTitle: 'Mapa przedstawicieli w Europie',
    ctEuropeLead: 'Nasze biura i partnerzy w kluczowych krajach importu i logistyki.',
    ctEuropeMapAriaLabel: 'Mapa przedstawicieli w Europie',
    ctMapControlsAriaLabel: 'Kontrolki pozycji mapy',
    ctRepHqTag: 'Główne biuro',
    ctRepCountryPoland: 'Polska',
    ctRepCountryLithuania: 'Litwa',
    ctRepCountryCzechia: 'Czechy',
    ctRepCountryUK: 'Wielka Brytania',
    ctRepCountryRomania: 'Rumunia',
    ctCityLondon: 'Londyn',
    ctCityKlaipeda: 'Kłajpeda',
    ctCityPrague: 'Praga',
    ctCityConstanta: 'Konstanca',
    ctHoursSectionTitle: 'Godziny pracy i wizyty',
    ctHoursSectionSub: 'Biuro czynne w dni robocze. W soboty przyjmujemy po wcześniejszym umówieniu. Wizyty najlepiej uzgadniać co najmniej dzień wcześniej.',
    ctHoursOfficeTitle: 'Biuro / showroom',
    ctHoursOnlineTitle: 'Konsultacje online',
    ctHoursDeliveryTitle: 'Wydanie auta',
    ctHoursMonFri: 'Pn – Pt',
    ctHoursEveryDay: 'Każdy dzień',
    ctHoursSaturday: 'Sobota',
    ctHoursSunday: 'Niedziela',
    ctHoursSatSun: 'Sob – Ndz',
    ctHoursTelegramChat: 'Chat Messenger',
    ctHoursOnAppointment: 'po umówieniu',
    ctHoursDayOff: 'nieczynne',
    ctHoursDuration: 'Czas trwania',
    ctHoursDurationValue: '~45 min',
    ctNavFaqLabel: 'Pytania',
    ctNavFaqHint: 'Najczęstsze pytania i krótkie odpowiedzi.',
    ctNavCalcLabel: 'Wycena',
    ctNavCalcHint: 'Orientacyjny koszt pod dom.',
    ctNavHomeLabel: 'Wróć',
    ctNavHomeHint: 'Nasze usługi i zalety.',
    ctJsonLdDesc: 'Import aut z aukcji USA i Europy pod dom.',
    ctAddressMapQuery: 'Jawczyce ul. Poznańska 56 05-850 Polska',
    ctAddressLine1: 'ul. Poznańska, 56',
    ctAddressLine2: '05-850 Jawczyce, Polska',
    dcCalcKicker: 'Kalkulator',
    dcCalcTitle: 'Oblicz dokładny koszt importu w kilka sekund',
    dcCalcSub: 'Zawczasu wiedz, do jakiej kwoty licytować na aukcji. Kalkulacja uwzględnia wszystkie kluczowe koszty.',
    dcCalcLeftTitle: 'Kompleksowa wycena obejmuje',
    dcCalcLeft1: 'Cena na aukcji + prowizja platformy',
    dcCalcLeft2: 'Transport z miejsca aukcji do magazynu w USA',
    dcCalcLeft3: 'Obsługa i przechowywanie auta w magazynie',
    dcCalcLeft4: 'Fracht morski do portu docelowego',
    dcCalcLeft5: 'Odprawa celna (jednorazowa opłata lub pełna stawka)',
    dcCalcLeft6: 'Dostawa z portu do Twojego miasta',
    dcCalcRightTitle: 'Personalizacja kalkulacji',
    dcCalcRight1: 'Typ auta: Sedan, SUV, Truck, Minivan',
    dcCalcRight2: 'Rok produkcji i pojemność silnika',
    dcCalcRight3: 'Port wysyłki: NJ, FL, CA, TX, Korea',
    dcCalcRight4: 'Miejsce docelowe w Polsce',
    dcCalcRight5: 'Typ odprawy i obsługa dokumentów',
    dcCalcRight6: 'Twój budżet i preferowane marki',
    dcCalcStepsTitle: 'Jak uzyskać dostęp do kalkulatora',
    dcCalcStep1: 'Skontaktuj się z menedżerem BIDBIDERS',
    dcCalcStep2: 'Uzyskaj dostęp do panelu',
    dcCalcStep3: 'Wypełnij parametry auta i trasę',
    dcCalcStep4: 'Otrzymaj pełny kosztorys importu',
    dcCalcCtaCatalog: 'Otwórz katalog',
    dcCalcCtaPhoneLabel: 'Zadzwoń: +48 784 890 644',
    dcVideoKicker: 'Jak to działa',
    dcVideoTitle: 'Zobacz, jak działa nasza aplikacja',
    dcVideoSub: 'Krótka demonstracja ścieżki: od wyboru lotu do przekazania auta klientowi.',
    dcVideoImgAlt: 'Demonstracja BIDBIDERS',
    dcAppKicker: 'Aplikacja mobilna',
    dcAppTitle: 'Wszystkie dane importowe pod kontrolą na Twoim telefonie',
    dcAppLead: 'Śledź stawki, logistykę i statusy dostaw w dowolnym momencie.',
    dcAppFeature1: 'Wszystkie aukcje w jednym miejscu: Copart, IAAI, Manheim, Kanada, Korea, Chiny',
    dcAppFeature2: 'Analiza szkód przez AI, wycena naprawy i rekomendacja maksymalnej stawki',
    dcAppFeature3: 'Sprawdzenie historii przez Carfax, statusu tytułu i danych sprzedawcy',
    dcAppFeature4: 'Śledzenie kontenera w czasie rzeczywistym z prognozą przyjazdu',
    dcAppStatus: 'Status: na morzu',
    dcAppEta: 'Prognoza przyjazdu: 14 kwietnia',
    dcDesktopKicker: 'Platforma webowa',
    dcDesktopTitle: 'Wszystkie dane pod kontrolą na Twoim komputerze',
    dcDesktopSub: 'Działa w przeglądarce bez instalacji: Chrome, Safari, Firefox, Edge.',
    dcFeedbackKicker: 'Opinie',
    dcFeedbackTitle: 'Co mówią nasi klienci',
    dcReview1: 'Przywieźliśmy Jeep Grand Cherokee w 52 dni. Wszystko przejrzyste, menedżer stale w kontakcie.',
    dcReview1Author: 'Oleksij, Warszawa',
    dcReview2: 'Ford Escape Hybrid wyszedł znacznie taniej niż podobne auta w Polsce. Serwis na poziomie.',
    dcReview2Author: 'Maryna, Lwów',
    dcReview3: 'Trzecie auto przez BIDBIDERS: stabilny wynik, zrozumiały proces, dobra obsługa.',
    dcReview3Author: 'Dmytro, Kraków',
    dcFaqKicker: 'FAQ',
    dcFaqTitle: 'Najczęściej zadawane pytania',
    dcFaq1Q: 'Ile trwa cały proces importu?',
    dcFaq1A: 'Średnio 45-60 dni: w zależności od portu, odprawy celnej i dostawy do Twojego miasta.',
    dcFaq2Q: 'Czy można obejrzeć auto przed zakupem?',
    dcFaq2A: 'Tak, zapewniamy szczegółowy przegląd fotograficzny i wstępną wycenę. Dla aut w drodze dostępna rezerwacja.',
    dcFaq3Q: 'Czy auto jest ubezpieczone podczas transportu?',
    dcFaq3A: 'Tak, samochody są ubezpieczone na etapie logistyki morskiej zgodnie z wybraną trasą.',
    dcFaq4Q: 'Co to jest „Auto w drodze"?',
    dcFaq4A: 'To auta już zakupione i zmierzające do Europy. Otrzymujesz szybszą dostawę ze stałą ceną.',
    dcBlogKicker: 'Blog',
    dcBlogTitle: 'Przydatne materiały',
    dcBlogPost1Title: 'Jak kupić auto z Copart: krok po kroku',
    dcBlogPost2Title: 'Odprawa celna aut: nowe stawki i przepisy',
    dcBlogPost3Title: 'TOP auta do 20 000 USD na aukcjach w USA',
    dcBlogReadLink: 'Czytaj',
    homeBudgetTitle: 'Dobierzemy auto do Twojego budżetu',
    homeBudgetSubtitle: 'Wskaż typ nadwozia, rocznik i budżet. Menedżer wyśle 2–3 realne opcje z aukcji wraz z pełną kalkulacją.',
    homeBudgetBodyTypeLabel: 'Jaki typ nadwozia Ci odpowiada?',
    homeBudgetYearLabel: 'Rok produkcji',
    homeBudgetYearRangeLabel: 'Zakres',
    homeBudgetBudgetLabel: 'Twój budżet',
    homeBudgetHint: 'Orientacyjnie',
    homeBudgetContactsLabel: 'Dane kontaktowe',
    homeBudgetSubmit: 'Dobierz auto',
    homeBudgetConsent: 'Klikając przycisk, zgadzasz się na przetwarzanie danych osobowych do doboru auta.',
    homeBodySedan: 'Sedan',
    homeBodyCrossover: 'Crossover',
    homeBodyCoupe: 'Coupe',
    homeBodyHatchback: 'Hatchback',
    homeBodyCabriolet: 'Kabriolet',
    homeBodyMinivan: 'Minivan',
    homeBodyMicrobus: 'Mikrobus',
    homeBodyPickup: 'Pick up',
    homeTransitArrival: 'Przyjazd',
    homeTransitInTransitBadge: '1800+ w drodze',
    homeLocAddressStreet: 'ul. Poznańska, 56, 05-850',
    homeBudgetExtrasTitle: 'Szczegóły auta',
    homeBudgetMake: 'Marka',
    homeBudgetModel: 'Model',
    homeBudgetGeneration: 'Generacja',
    homeBudgetDrive: 'Napęd',
    homeBudgetFuel: 'Paliwo',
    homeBudgetGearbox: 'Skrzynia biegów',
    homeBudgetColor: 'Kolor',
    homeBudgetDamageType: 'Typ uszkodzeń',
    homeBudgetSteering: 'Kierownica',
    homeBudgetPower: 'Moc (KM)',
    homeBudgetEngineVol: 'Pojemność silnika (L)',
    homeBudgetAny: 'Dowolny',
    statusDamageUnknown: 'Stan nieokreślony',
    statusDamageCheck: 'Wymaga sprawdzenia',
    statusDamageOk: 'Bez widocznych uszkodzeń',
    statusKeysYes: 'Tak',
    statusKeysNo: 'Nie',
    statusKeysUnknown: 'Do potwierdzenia',
    statusSold: 'Sprzedano',
    statusReady: 'Gotowe do odbioru',
    statusInTransit: 'W drodze',
    statusDocsCustom: 'Odprawa celna wliczona',
    statusDocsUnclear: 'Dokumenty w trakcie',
    transitSeoH2: 'Samochody z USA i ze Stanów dostępne w drodze do Polski',
    transitSeoP1: 'Śledź swoje auto z USA i samochody ze Stanów w czasie rzeczywistym — od wygranej na aukcji do portu i dalej.',
    transitSeoP2: 'Kontrolujemy każdy etap logistyki dla aut z Ameryki: załadunek, transport morski i odprawę celną.',
    transitSeoP3: 'Chcesz poznać pełny koszt sprowadzenia auta ze Stanów jeszcze przed zakupem?',
    transitSeoCtaCalc: 'Otwórz kalkulator',
    transitSeoCtaContacts: 'Skontaktuj się z nami',
    carPageH1Suffix: 'ze Stanów',
    carPageSeoText: 'Kup auto ze Stanów pod klucz — od aukcji Copart lub IAAI pod Twój próg. Oblicz pełny koszt sprowadzenia lub przeglądaj samochody ze Stanów już w drodze do Polski.',
    carPageNotFound: 'Nie znaleziono pojazdu',
    carPageCtaTransit: 'Auta w drodze',
    carPageCtaCalc: 'Oblicz koszt',
    carPageCtaContacts: 'Skontaktuj się',
    carPageLabelVin: 'VIN',
    carPageLabelYear: 'Rok',
    carPageLabelMake: 'Marka',
    carPageLabelModel: 'Model',
    carPageLabelLocation: 'Lokalizacja',
    carPageLabelMileage: 'Przebieg',
    calcSeoTitle: 'Jak obliczana jest cena importu auta?',
    calcSeoP1: 'Nasz kalkulator sprowadzenia auta z USA uwzględnia cenę pojazdu na aukcji, opłatę aukcyjną, transport do portu, fracht morski, cło i VAT — zarówno dla aut z USA, jak i samochodów ze Stanów sprowadzanych przez agenta.',
    calcSeoP2: 'Podaj parametry pojazdu i otrzymaj orientacyjny koszt sprowadzenia samochodu ze Stanów "pod klucz" jeszcze przed pierwszą licytacją.',
    calcFaqTitle: 'Najczęstsze pytania',
    calcFaqQ1: 'Co wchodzi w koszt importu auta z USA?',
    calcFaqA1: 'Opłata aukcyjna, transport do portu, fracht morski, cło, akcyza, VAT i prowizja agenta. Kalkulator pokazuje pełny koszt sprowadzenia auta z USA i samochodu ze Stanów.',
    calcFaqQ2: 'Ile czasu jedzie auto z USA do Polski?',
    calcFaqA2: 'Samochody ze Stanów jadą zwykle 30–60 dni: 5–10 dni do portu, 20–30 dni morzem, 7–14 dni odprawa celna.',
    calcFaqQ3: 'Czy kalkulator uwzględnia cło i podatki?',
    calcFaqA3: 'Tak, kalkulator kosztów importu auta z USA uwzględnia akcyzę i VAT na podstawie typu i pojemności silnika.',
    calcFaqQ4: 'Czy można sprowadzić rozbite auto z USA?',
    calcFaqA4: 'Tak, pracujemy z uszkodzonymi samochodami ze Stanów (salvage title). Kalkulator obsługuje każdy stan pojazdu.',
    calcFaqQ5: 'Kiedy trzeba zapłacić za auto?',
    calcFaqA5: 'Płatność następuje po wygraniu aukcji, przed wysyłką auta z USA lub ze Stanów.',
    calcFaqQ6: 'Czy są ukryte opłaty?',
    calcFaqA6: 'Nie. Wszystkie koszty sprowadzenia auta ze Stanów są przejrzyste i widoczne w kalkulatorze przed potwierdzeniem transakcji.',
    footerCalculator: 'Kalkulator',
    footerCabinet: 'Panel klienta',
    cabinetIntro: 'To jest pierwsza wersja panelu. Następny krok to logowanie i prywatne dane użytkownika.',
    footerContacts: 'Kontakty',
    authLoginTitle: 'Logowanie',
    authLoginLead: 'Zaloguj się, aby zarządzać swoimi autami w panelu.',
    authRegisterTitle: 'Rejestracja',
    authRegisterLead: 'Utwórz konto i zacznij dodawać własne auta.',
    authNameLabel: 'Imię',
    authEmailLabel: 'Email',
    authPasswordLabel: 'Hasło',
    authLoginSubmit: 'Zaloguj się',
    authRegisterSubmit: 'Utwórz konto',
    authGoogleButton: 'Kontynuuj z Google',
    authNoAccount: 'Nie masz konta?',
    authHaveAccount: 'Masz już konto?',
    authGoRegister: 'Załóż konto',
    authGoLogin: 'Zaloguj się',
    authLogout: 'Wyloguj się',
    authModeMock: 'Tryb demo: dopóki klucze Supabase nie są skonfigurowane, logowanie działa lokalnie.',
    authErrorGeneric: 'Błąd logowania. Spróbuj ponownie.',
    authSessionLoadingTitle: 'Sprawdzanie sesji',
    authSessionLoadingLead: 'Poczekaj chwilę, weryfikujemy Twoje logowanie.',
    authCallbackLoadingTitle: 'Kończymy logowanie przez Google',
    authCallbackLoadingLead: 'Przekierowujemy Cię do panelu i wczytujemy profil.',
    authCallbackErrorTitle: 'Nie udało się dokończyć logowania',
    authCallbackErrorLead: 'Spróbuj ponownie na stronie logowania.',
    cabinetNeedAuthTitle: 'Wymagane logowanie',
    cabinetNeedAuthLead: 'Aby korzystać z panelu i dodawać auta, zaloguj się lub zarejestruj.',
    cabinetOpenLogin: 'Przejdź do logowania',
    cabinetOpenRegister: 'Przejdź do rejestracji',
    cabinetWelcome: 'Witamy w Twoim panelu',
    faqFullKicker: 'FAQ',
    faqFullTitle: 'Często zadawane pytania o sprowadzanie aut z USA',
    faqFullSub: 'Odpowiedzi na pytania o koszt, czas, cło i cały proces importu auta z USA i samochodów ze Stanów.',
    seoFaqFullTitle: 'FAQ — Sprowadzanie aut z USA: pytania i odpowiedzi | BID BIDDERS',
    seoFaqFullDescription: 'Odpowiedzi na najczęstsze pytania o import aut z USA i samochodów ze Stanów — koszty, cło, VAT, akcyza, Copart, IAAI i salvage title.',
    faqFullQ1: 'Ile kosztuje sprowadzenie auta z USA?',
    faqFullA1: 'Koszt zależy od ceny auta na aukcji, opłaty aukcyjnej, transportu do portu, frachtu morskiego, cła i VAT. Orientacyjnie od 8 000 EUR do 25 000 EUR pod klucz. Dokładny koszt obliczysz w kalkulatorze.',
    faqFullQ2: 'Ile kosztuje sprowadzenie samochodu ze Stanów?',
    faqFullA2: 'Koszt sprowadzenia samochodu ze Stanów obejmuje: opłatę aukcyjną, transport w USA do portu, fracht morski, odprawę celną, akcyzę i VAT. Kalkulator pokazuje pełną kwotę przed licytacją.',
    faqFullQ3: 'Jak działa kalkulator sprowadzenia auta z USA?',
    faqFullA3: 'Wprowadź cenę auta, typ nadwozia, pojemność silnika i docelowy port. Kalkulator natychmiast pokaże pełny koszt importu — aukcja, fracht, cło, akcyza, VAT — jeszcze przed pierwszą ofertą.',
    faqFullQ4: 'Czy cena z kalkulatora obejmuje cło, VAT i akcyzę?',
    faqFullA4: 'Tak. Kalkulator kosztów sprowadzenia auta z USA uwzględnia cło (najczęściej 6,5%), akcyzę i VAT (23% w Polsce). Żadnych ukrytych opłat.',
    faqFullQ5: 'Ile wynosi cło za auto z USA?',
    faqFullA5: 'Standardowe cło unijne wynosi 6,5% wartości celnej pojazdu. Dla niektórych marek i modeli może wynosić 0% (np. samochody z Korei na mocy umowy handlowej). Dokładną kwotę pokazuje kalkulator.',
    faqFullQ6: 'Jak liczony jest VAT przy imporcie auta z USA?',
    faqFullA6: 'VAT w Polsce wynosi 23% i jest naliczany od wartości celnej powiększonej o cło i akcyzę. Kalkulator uwzględnia tę stawkę automatycznie.',
    faqFullQ7: 'Czy za samochód ze Stanów trzeba zapłacić akcyzę?',
    faqFullA7: 'Tak, akcyza jest obowiązkowa i zależy od pojemności silnika. Dla samochodów elektrycznych ze Stanów obowiązują inne stawki. Szczegóły w kalkulatorze.',
    faqFullQ8: 'Ile trwa sprowadzenie auta z USA do Polski?',
    faqFullA8: 'Średnio 30–60 dni: 5–10 dni transport do portu w USA, 20–30 dni transport morski, 7–14 dni odprawa celna w Polsce.',
    faqFullQ9: 'Ile trwa transport samochodu ze Stanów?',
    faqFullA9: 'Transport morski z USA do Europy trwa zwykle 20–30 dni, w zależności od portu załadunku i docelowego portu (Kłajpeda, Bremerhaven lub Gdańsk).',
    faqFullQ10: 'Jak wygląda sprowadzenie auta z USA krok po kroku?',
    faqFullA10: 'Brief i budżet → dobór lotu z Copart lub IAAI → weryfikacja VIN → licytacja i zakup → transport do portu → fracht morski → odprawa celna → wydanie auta.',
    faqFullQ11: 'Czy można kupić auto z Copart lub IAAI?',
    faqFullA11: 'Tak. BID BIDDERS jest licencjonowanym kupującym na Copart, IAAI, Manheim i ADESA. Licytujemy w Twoim imieniu i zajmujemy się całym procesem zakupu.',
    faqFullQ12: 'Jak sprawdzić VIN auta z USA przed zakupem?',
    faqFullA12: 'Sprawdzamy VIN przez CarFax i NMVTIS przed złożeniem oferty. Otrzymujesz pełną historię: wypadki, przebieg, liczba właścicieli i typ tytułu własności.',
    faqFullQ13: 'Czy warto kupić uszkodzone auto z USA?',
    faqFullA13: 'Jeśli koszt naprawy jest proporcjonalny do oszczędności, zdecydowanie tak. Oceniamy zdjęcia i raport uszkodzeń i doradzamy, czy zakup się opłaca.',
    faqFullQ14: 'Czym jest salvage title w samochodzie z USA?',
    faqFullA14: 'Salvage title oznacza, że ubezpieczyciel uznał pojazd za całkowitą szkodę. Takie auta można sprowadzić do Polski, ale rejestracja wymaga dodatkowych badań technicznych.',
    faqFullQ15: 'Jakie dokumenty są potrzebne do rejestracji auta z USA?',
    faqFullA15: 'Potrzebne są: Certificate of Title (dokument własności), Bill of Lading, faktura handlowa, zgłoszenie celne i świadectwo zgodności. Kompletujemy cały pakiet dokumentów.',
    faqFullQ16: 'Czy BID BIDDERS pomaga w odprawie celnej?',
    faqFullA16: 'Tak. Pełna odprawa celna wchodzi w skład usługi pod klucz. Zajmujemy się całą dokumentacją, deklaracjami i płatnościami celnymi.',
    faqFullQ17: 'Czy można śledzić auto w drodze?',
    faqFullA17: 'Tak. Widzisz status w czasie rzeczywistym: załadunek, port wyjścia, nazwa statku, szacowana data przybycia i etap odprawy celnej.',
    faqFullQ18: 'Czy BID BIDDERS pomaga z transportem, naprawą i rejestracją?',
    faqFullA18: 'Tak. Organizujemy dostawę do Twojego miasta, możemy polecić sprawdzony serwis i konsultujemy rejestrację w Polsce.',
    faqFullCtaCalc: 'Oblicz koszt importu',
    faqFullCtaContacts: 'Skontaktuj się',
    faqFullCtaTransit: 'Auta w drodze',
  },
}
