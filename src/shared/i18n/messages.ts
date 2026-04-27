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
  | 'lotSbCurrentBid'
  | 'lotSbEstimate'
  | 'lotSbMaxBid'
  | 'lotSbDecrease'
  | 'lotSbIncrease'
  | 'lotSbBidNow'
  | 'lotSbHowToBid'
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
  | 'casesLabelSavings'
  | 'casesCtaBlog'
  | 'casesCtaHome'
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

type Messages = Record<string, string>

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
    seoCatalogTitle: 'Каталог авто з аукціонів США | BIDDERS',
    seoCatalogDescription: 'Перегляньте каталог автомобілів з аукціонів Copart, IAAI та Manheim. Фільтрація за маркою, роком, бюджетом і станом. Повний розрахунок під ключ.',
    seoInStockTitle: 'Авто в наявності — готові до відправки | BIDDERS',
    seoInStockDescription: 'Автомобілі, що вже знаходяться в Польщі або готові до відправки. Огляд на майданчику, документи готові. Швидка передача.',
    seoTransitTitle: 'Авто в дорозі — відстежуйте онлайн | BIDDERS',
    seoTransitDescription: 'Понад 1800 автомобілів на шляху до Польщі. Відстежуйте статус доставки в реальному часі та отримуйте актуальні оновлення.',
    seoCalculatorTitle: 'Калькулятор вартості імпорту авто | BIDDERS',
    seoCalculatorDescription: 'Розрахуйте повну вартість авто під ключ: аукціон, доставка, мито, ПДВ. Точний розрахунок без прихованих платежів.',
    seoBlogTitle: 'Блог про імпорт авто зі США | BIDDERS',
    seoBlogDescription: 'Статті, кейси та поради щодо купівлі авто на американських аукціонах, логістики та митного оформлення в Польщі.',
    seoCasesTitle: 'Кейси клієнтів — реальні угоди та економія | BIDDERS',
    seoCasesDescription: 'Реальні приклади купівлі авто через BIDDERS: ціна, економія, терміни та відгуки клієнтів.',
    seoFaqTitle: 'Часті запитання про імпорт авто | BIDDERS',
    seoFaqDescription: 'Відповіді на питання про терміни доставки, вартість під ключ, гарантії, VIN-перевірку та огляд авто на майданчику.',
    seoContactsTitle: 'Контакти — звʼяжіться з BIDDERS',
    seoContactsDescription: 'Телефон, email, адреса офісу та посилання на соціальні мережі команди BIDDERS. Консультація безкоштовна.',
    seoPrivacyTitle: 'Політика конфіденційності | BIDDERS',
    seoPrivacyDescription: 'Умови обробки персональних даних, використання файлів cookie та захист інформації користувачів BIDDERS.',
    seoTermsTitle: 'Умови використання | BIDDERS',
    seoTermsDescription: 'Правила користування сайтом та послугами BIDDERS, обмеження відповідальності та умови надання сервісу.',
    seoLotTitle: 'Деталі лота | BIDDERS',
    seoLotDescription: 'Детальна інформація про лот: фото, характеристики, VIN, стан та поточна ставка на аукціоні.',
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
    homeEconKicker: 'Економіка · Real numbers',
    homeEconTitle: 'Чому це вигідніше, ніж ринок Польщі',
    homeEconLead: 'Реальна економіка на прикладах клієнтів — без округлень і маркетингу.',
    homeEconCase: 'Кейс ·',
    homeEconMarket: 'Ринок Польщі',
    homeEconTurnkey: 'BIDDERS під ключ',
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
    lotLabelLocation: 'Локація',
    lotLabelDispatchPort: 'Порт відправлення',
    lotLabelPickupPoint: 'Місце видачі',
    lotLabelStatus: 'Статус',
    lotLabelAuctionDate: 'Дата аукціону',
    lotLabelEstDelivery: 'Орієнт. доставка',
    lotDeliveryTbd: 'Уточнюється',
    lotWatching: 'У спостереженні',
    lotWatch: 'Слідкувати',
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
    lotSbCurrentBid: 'Поточна ставка',
    lotSbEstimate: 'Оцінка:',
    lotSbMaxBid: 'Ваша максимальна ставка',
    lotSbDecrease: 'Зменшити',
    lotSbIncrease: 'Збільшити',
    lotSbBidNow: 'Зробити ставку зараз',
    lotSbHowToBid: 'Як зробити ставку? →',
    lotSbTimeLeft: 'Час, що залишився',
    lotSbAuctionEnded: 'Аукціон завершено',
    lotSbTimerUntil: 'до',
    lotSbCalcTitle: 'Калькулятор підсумкової ціни',
    lotCalcBid: 'Ставка (поточна)',
    lotCalcAuctionFee: 'Аукціонний збір',
    lotCalcTransport: 'Транспорт до порту',
    lotCalcShipping: 'Морська доставка',
    lotCalcDocs: 'Документи + сервіс BIDDERS',
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
    lotSbIncluded5: 'Сервіс та супровід BIDDERS',
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
    lotKnowPriceEnd: 'Далі зніметься реєстрація, підготовка, сертифікація та передача в Україні.',
    lotKnowCheckTitle: 'Що перевірити перед рішенням',
    lotKnowCheckDamage: 'Список пошкоджень:',
    lotKnowCheckDocs: 'Перевірка документів:',
    lotKnowCheckBudget: 'Орієнтовний бюджет: від',
    lotKnowCheckBudgetSuffix: 'з урахуванням логістики',
    lotKnowCheckAgreement: 'Узгодьте бюджет видачі авто / доставки в Україну',
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
    lotFaq3A: 'Блок «Бюджет по готовому авто» показує поточну ціну + сервіс BIDDERS. Для точного розрахунку з логістикою і митницею запустіть калькулятор у сайдбарі або на сторінці /calculator.',
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
    lotStep4Title: 'Передаємо в Україні',
    lotStep4Text: 'Авто проходить фінальні етапи і передається разом із підтримкою команди BIDDERS.',
    lotSummaryTitle: 'Що важливо знати перед рішенням по',
    lotSummarySubtitle: 'Стан, поточний статус і орієнтир по фінальному бюджету.',
    lotSummaryStatusTitle: 'Статус та готовність авто',
    lotSummaryStatusP1: 'зараз знаходиться у статусі',
    lotSummaryStatusP2: 'Перед покупкою ми уточнюємо місцезнаходження, наявність документів і сценарій передачі в Україні.',
    lotSummaryStatusFacts: 'За наявними даними: документи —',
    lotSummaryStatusFactsDmg: 'пошкодження —',
    lotSummaryStatusFactsLoc: 'локація —',
    lotSummaryStatusP3: 'Якщо потрібен детальний прорахунок, команда BIDDERS допоможе з логістикою і розмитненням у реальний бюджет без прихованих сюрпризів.',
    lotSummaryBudgetTitle: 'Бюджет по готовому авто',
    lotSummaryBudgetLead: 'Для готового авто ми орієнтуємося на поточну ціну, підготовку, сертифікацію та супровід передачі.',
    lotBudgetCurrentPrice: 'Поточна ціна авто',
    lotBudgetPrep: 'Підготовка та сервіс',
    lotBudgetPrepValue: 'за запитом',
    lotBudgetCert: 'Сертифікація / реєстрація',
    lotBudgetCertValue: 'індивідуально',
    lotBudgetService: 'Послуга BIDDERS',
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
    calcHeroDesc: 'Від ставки до фінальної вартості з митницею та сервісом BIDDERS.',
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
    calcCaptionErr401: 'API калькулятора потребує авторизації. Додайте токен у localStorage (ключ lubeavtoPartnerToken).',
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
    calcRowBiddersFee: 'Комісія BIDDERS',
    calcRowInsuranceFee: 'Страхування',
    calcRowMoneyTransfer: 'Комісія за переказ коштів в США',
    calcLabelEuPort: 'Порт призначення (ЄС)',
    calcLabelImportTax: 'Податок на імпорт',
    calcLabelVatProfile: 'ПДВ (профіль)',
    calcRowCustomsAgency: 'Митне агентство',
    calcTaxAuto: '10% (Автомобіль)',
    calcTaxTruck: '22% (Вантажний)',
    calcTaxMoto: '6% (Мотоцикл)',
    calcTaxClassic0: '0% (Класика)',
    calcVatClassic9: '9% (Класика)',
    blogHeroKicker: 'Блог BIDDERS',
    blogHeroTitle: 'Матеріали про імпорт авто з США та Європи',
    blogHeroSub: 'Покрокові гіди, розбір логістики, митниці та вибору лотів на Copart, IAAI, Manheim. Без води — тільки робочі інсайти від команди BIDDERS.',
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
    casesPageTitle: 'Реальні кейси клієнтів BIDDERS',
    casesPageSub: 'Єдина методика порівняння: ціна під ключ, ціна ринку Польщі, фінальна економія.',
    casesLabelTurnkey: 'Під ключ',
    casesLabelMarket: 'Ринок Польщі',
    casesLabelSavings: 'Економія',
    casesCtaBlog: 'Читати блог',
    casesCtaHome: 'На головну',
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
    catalogPriceNoteSeller: 'Продавець: BIDDERS',
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
    termsSub: 'Користуючись сайтом BIDDERS, ви погоджуєтесь із цими умовами.',
    termsS1Title: '1. Загальні положення',
    termsS1Text: 'Сайт має інформаційний характер і не є публічною офертою. Фінальні умови співпраці визначаються індивідуальним договором.',
    termsS2Title: '2. Контент і авторські права',
    termsS2Text: 'Тексти, дизайн, графіка та інші матеріали сайту належать BIDDERS або використовуються на законних підставах.',
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
    ctHeroKicker: 'Контакти BIDDERS',
    ctHeroTitle: 'Контакти та майданчик BIDDERS у Польщі',
    ctHeroSub: 'Приїжджайте на огляд, отримайте консультацію по документах та фінальній вартості володіння. Команда представників по всій Європі — від Лондона до Клайпеди.',
    ctHeroFactOffices: 'Представництва у ЄС',
    ctHeroFactDelivery: 'Доставлених авто щомісяця',
    ctHeroFactChat: 'Чат у Telegram',
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
    ctMapAriaLabel: 'Карта BIDDERS, Польща',
    ctMapBadge: 'Головний офіс',
    ctAddressLabel: 'Адреса',
    ctAddressCoords: 'Координати:',
    ctAddressNearest: 'Ближче за все:',
    ctAddressFromWarsaw: 'Доїхати з Варшави:',
    ctAddressFromWarsawValue: '~25 хв на авто',
    ctDirectionsLabel: 'Прокласти маршрут',
    ctWazeLabel: 'Навігатор',
    ctChannelsSectionTitle: 'Усі канали зв\'язку',
    ctChannelsSectionSub: 'Телефон — для швидких дзвінків. Email — для офіційних документів та комерційних пропозицій. Telegram — для швидких питань у будь-який час.',
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
    ctHoursSaturday: 'Субота',
    ctHoursSunday: 'Неділя',
    ctHoursSatSun: 'Сб – Нд',
    ctHoursTelegramChat: 'Telegram-чат',
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
    seoCatalogTitle: 'Car Catalog from US Auctions | BIDDERS',
    seoCatalogDescription: 'Browse vehicles from Copart, IAAI, and Manheim auctions. Filter by make, year, budget, and condition. Full turnkey cost estimate included.',
    seoInStockTitle: 'Cars in Stock — Ready to Ship | BIDDERS',
    seoInStockDescription: 'Vehicles available in Poland or ready for dispatch. On-site inspection available, documents ready. Fast handover.',
    seoTransitTitle: 'Cars in Transit — Track Online | BIDDERS',
    seoTransitDescription: 'Over 1800 vehicles on their way to Poland. Track delivery status in real time and get up-to-date updates.',
    seoCalculatorTitle: 'Car Import Cost Calculator | BIDDERS',
    seoCalculatorDescription: 'Calculate the full turnkey cost: auction price, shipping, customs, and VAT. Accurate estimate with no hidden fees.',
    seoBlogTitle: 'Blog on Car Import from the USA | BIDDERS',
    seoBlogDescription: 'Articles, cases, and tips on buying cars at US auctions, logistics, and customs clearance in Poland.',
    seoCasesTitle: 'Client Cases — Real Deals & Savings | BIDDERS',
    seoCasesDescription: 'Real examples of car purchases through BIDDERS: price, savings, timelines, and client reviews.',
    seoFaqTitle: 'FAQ About Car Import | BIDDERS',
    seoFaqDescription: 'Answers to questions about delivery times, turnkey cost, warranties, VIN checks, and on-site vehicle inspection.',
    seoContactsTitle: 'Contacts — Get in Touch with BIDDERS',
    seoContactsDescription: 'Phone, email, office address, and social media links for the BIDDERS team. Consultation is free of charge.',
    seoPrivacyTitle: 'Privacy Policy | BIDDERS',
    seoPrivacyDescription: 'Terms for processing personal data, cookie usage, and protection of user information at BIDDERS.',
    seoTermsTitle: 'Terms of Use | BIDDERS',
    seoTermsDescription: 'Rules for using the BIDDERS website and services, liability limitations, and service provision terms.',
    seoLotTitle: 'Lot Details | BIDDERS',
    seoLotDescription: 'Detailed lot information: photos, specifications, VIN, condition, and current auction bid.',
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
    homeEconKicker: 'Economy · Real numbers',
    homeEconTitle: 'Why this is more profitable than the Polish market',
    homeEconLead: 'Real savings based on client cases — no rounding, no marketing fluff.',
    homeEconCase: 'Case ·',
    homeEconMarket: 'Poland market',
    homeEconTurnkey: 'BIDDERS turnkey',
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
    navChinaCars: 'Cars from China',
    footerLotSources: 'Official lot sources',
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
    catalogPriceNoteSeller: 'Seller: BIDDERS',
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
    lotLabelLocation: 'Location',
    lotLabelDispatchPort: 'Dispatch port',
    lotLabelPickupPoint: 'Pickup point',
    lotLabelStatus: 'Status',
    lotLabelAuctionDate: 'Auction date',
    lotLabelEstDelivery: 'Est. delivery',
    lotDeliveryTbd: 'TBD',
    lotWatching: 'Watching',
    lotWatch: 'Watch',
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
    lotSbCurrentBid: 'Current bid',
    lotSbEstimate: 'Estimate:',
    lotSbMaxBid: 'Your maximum bid',
    lotSbDecrease: 'Decrease',
    lotSbIncrease: 'Increase',
    lotSbBidNow: 'Place bid now',
    lotSbHowToBid: 'How to bid? →',
    lotSbTimeLeft: 'Time remaining',
    lotSbAuctionEnded: 'Auction ended',
    lotSbTimerUntil: 'until',
    lotSbCalcTitle: 'Total price calculator',
    lotCalcBid: 'Bid (current)',
    lotCalcAuctionFee: 'Auction fee',
    lotCalcTransport: 'Transport to port',
    lotCalcShipping: 'Ocean shipping',
    lotCalcDocs: 'Documents + BIDDERS service',
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
    lotSbIncluded5: 'BIDDERS service & support',
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
    lotKnowPriceEnd: 'Next steps include de-registration, preparation, certification and handover in Ukraine.',
    lotKnowCheckTitle: 'What to check before deciding',
    lotKnowCheckDamage: 'Damage list:',
    lotKnowCheckDocs: 'Document check:',
    lotKnowCheckBudget: 'Estimated budget: from',
    lotKnowCheckBudgetSuffix: 'including logistics',
    lotKnowCheckAgreement: 'Agree on the handover / delivery budget to Ukraine',
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
    lotFaq3A: 'The "Ready car budget" block shows the current price + BIDDERS service. For a precise calculation including logistics and customs, run the calculator in the sidebar or on the /calculator page.',
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
    lotStep4Title: 'We hand over in Ukraine',
    lotStep4Text: 'The car goes through final stages and is handed over with BIDDERS team support.',
    lotSummaryTitle: 'What to know before deciding on',
    lotSummarySubtitle: 'Condition, current status, and estimated final budget.',
    lotSummaryStatusTitle: 'Car status & readiness',
    lotSummaryStatusP1: 'is currently in status',
    lotSummaryStatusP2: 'Before purchase we clarify location, document availability, and handover scenario in Ukraine.',
    lotSummaryStatusFacts: 'Available data: documents —',
    lotSummaryStatusFactsDmg: 'damage —',
    lotSummaryStatusFactsLoc: 'location —',
    lotSummaryStatusP3: 'If you need a detailed quote, the BIDDERS team will help with logistics and customs clearance within a real budget — no hidden surprises.',
    lotSummaryBudgetTitle: 'Ready car budget',
    lotSummaryBudgetLead: 'For a ready car we factor in the current price, preparation, certification, and handover support.',
    lotBudgetCurrentPrice: 'Current car price',
    lotBudgetPrep: 'Preparation & service',
    lotBudgetPrepValue: 'on request',
    lotBudgetCert: 'Certification / registration',
    lotBudgetCertValue: 'individual',
    lotBudgetService: 'BIDDERS service',
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
    calcHeroDesc: 'From bid to final cost including customs and BIDDERS service.',
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
    calcCaptionErr401: 'Calculator API requires authorization. Add token to localStorage (key lubeavtoPartnerToken).',
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
    calcRowBiddersFee: 'BIDDERS commission',
    calcRowInsuranceFee: 'Insurance',
    calcRowMoneyTransfer: 'Wire transfer fee (USA)',
    calcLabelEuPort: 'EU destination port',
    calcLabelImportTax: 'Import tax',
    calcLabelVatProfile: 'VAT (profile)',
    calcRowCustomsAgency: 'Customs agency',
    calcTaxAuto: '10% (Car)',
    calcTaxTruck: '22% (Truck)',
    calcTaxMoto: '6% (Motorcycle)',
    calcTaxClassic0: '0% (Classic)',
    calcVatClassic9: '9% (Classic)',
    blogHeroKicker: 'BIDDERS Blog',
    blogHeroTitle: 'Guides on importing cars from the USA and Europe',
    blogHeroSub: 'Step-by-step guides, logistics breakdowns, customs and lot selection on Copart, IAAI, Manheim. No fluff — only actionable insights from the BIDDERS team.',
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
    casesPageTitle: 'Real client cases from BIDDERS',
    casesPageSub: 'One consistent methodology: turnkey price, Polish market price, final savings.',
    casesLabelTurnkey: 'Turnkey',
    casesLabelMarket: 'Polish market',
    casesLabelSavings: 'Savings',
    casesCtaBlog: 'Read the blog',
    casesCtaHome: 'Back to home',
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
    termsSub: 'By using the BIDDERS website, you agree to these terms.',
    termsS1Title: '1. General provisions',
    termsS1Text: 'The website is for informational purposes only and does not constitute a public offer. Final terms of cooperation are determined by an individual contract.',
    termsS2Title: '2. Content and copyright',
    termsS2Text: 'Texts, design, graphics, and other site materials belong to BIDDERS or are used on lawful grounds.',
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
    ctHeroKicker: 'BIDDERS Contacts',
    ctHeroTitle: 'BIDDERS contacts and showroom in Poland',
    ctHeroSub: 'Visit us for an inspection, get consultation on documents and total ownership cost. Representatives across Europe — from London to Klaipeda.',
    ctHeroFactOffices: 'EU offices',
    ctHeroFactDelivery: 'Cars delivered monthly',
    ctHeroFactChat: 'Telegram chat',
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
    ctMapAriaLabel: 'BIDDERS map, Poland',
    ctMapBadge: 'Head office',
    ctAddressLabel: 'Address',
    ctAddressCoords: 'Coordinates:',
    ctAddressNearest: 'Closest town:',
    ctAddressFromWarsaw: 'From Warsaw:',
    ctAddressFromWarsawValue: '~25 min by car',
    ctDirectionsLabel: 'Get directions',
    ctWazeLabel: 'Navigate',
    ctChannelsSectionTitle: 'All contact channels',
    ctChannelsSectionSub: 'Phone — for quick calls. Email — for official documents and business inquiries. Telegram — for fast questions at any time.',
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
    ctHoursSaturday: 'Saturday',
    ctHoursSunday: 'Sunday',
    ctHoursSatSun: 'Sat – Sun',
    ctHoursTelegramChat: 'Telegram chat',
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
    seoCatalogTitle: 'Katalog samochodów z aukcji USA | BIDDERS',
    seoCatalogDescription: 'Przeglądaj auta z aukcji Copart, IAAI i Manheim. Filtruj po marce, roku, budżecie i stanie. Pełna wycena pod klucz w zestawie.',
    seoInStockTitle: 'Auta dostępne — gotowe do wysyłki | BIDDERS',
    seoInStockDescription: 'Pojazdy dostępne w Polsce lub gotowe do wysyłki. Możliwość oględzin na miejscu, dokumenty gotowe. Szybkie przekazanie.',
    seoTransitTitle: 'Auta w drodze — śledź online | BIDDERS',
    seoTransitDescription: 'Ponad 1800 pojazdów w drodze do Polski. Śledź status dostawy w czasie rzeczywistym i otrzymuj aktualne informacje.',
    seoCalculatorTitle: 'Kalkulator kosztów importu auta | BIDDERS',
    seoCalculatorDescription: 'Oblicz pełny koszt pod klucz: aukcja, transport, cło, VAT. Dokładna wycena bez ukrytych opłat.',
    seoBlogTitle: 'Blog o imporcie aut z USA | BIDDERS',
    seoBlogDescription: 'Artykuły, przypadki i porady dotyczące zakupu aut na aukcjach w USA, logistyki i odprawy celnej w Polsce.',
    seoCasesTitle: 'Przypadki klientów — realne transakcje i oszczędności | BIDDERS',
    seoCasesDescription: 'Prawdziwe przykłady zakupu aut przez BIDDERS: cena, oszczędności, terminy i opinie klientów.',
    seoFaqTitle: 'FAQ dotyczące importu aut | BIDDERS',
    seoFaqDescription: 'Odpowiedzi na pytania o czas dostawy, koszt pod klucz, gwarancje, sprawdzenie VIN i oględziny auta na placu.',
    seoContactsTitle: 'Kontakty — skontaktuj się z BIDDERS',
    seoContactsDescription: 'Telefon, e-mail, adres biura i linki do mediów społecznościowych zespołu BIDDERS. Konsultacja bezpłatna.',
    seoPrivacyTitle: 'Polityka prywatności | BIDDERS',
    seoPrivacyDescription: 'Warunki przetwarzania danych osobowych, korzystania z plików cookie i ochrony informacji użytkowników BIDDERS.',
    seoTermsTitle: 'Warunki użytkowania | BIDDERS',
    seoTermsDescription: 'Zasady korzystania ze strony i usług BIDDERS, ograniczenia odpowiedzialności i warunki świadczenia usług.',
    seoLotTitle: 'Szczegóły lotu | BIDDERS',
    seoLotDescription: 'Szczegółowe informacje o locie: zdjęcia, dane techniczne, VIN, stan i aktualna oferta aukcyjna.',
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
    homeHeroEyebrow: 'BIDDERS · 13 LAT Doświadczenia',
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
    homeTrustOneDesc: 'USA, Kanada i Korea',
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
    homeEconKicker: 'Ekonomia · Real numbers',
    homeEconTitle: 'Dlaczego to bardziej opłacalne niż rynek w Polsce',
    homeEconLead: 'Realna ekonomia na przykładach klientów — bez zaokrągleń i marketingu.',
    homeEconCase: 'Case ·',
    homeEconMarket: 'Rynek Polski',
    homeEconTurnkey: 'BIDDERS pod klucz',
    homeEconSave: 'Oszczędność',
    homeEconAvgSave: 'Średnia oszczędność',
    homeEconDesc: 'Przykłady bazują na realnych przypadkach. Finalny koszt zależy od modelu, stanu auta i logistyki.',
    homeEconBtn: 'Oblicz moją oszczędność',
    homeCalcKicker: 'Kalkulator pod klucz',
    homeCalcTitle: 'Kalkulacja przed licytacją',
    homeCalcLead: 'Oblicz koszt końcowy przed zakupem: oferta, opłaty, logistyka, podatki i dostawa.',
    homeCalcCheck1: 'Lot + opłaty aukcyjne',
    homeCalcCheck2: 'Transport do portu i morski',
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
    homeCalcTotal: 'Suma pod klucz ({port})',
    homeCalcNote: 'Kalkulacja orientacyjna. Finalny koszt zależy od modelu, stanu auta, stawek logistyki i miejsca zakupu.',
    homeCalcStep1: 'Wybierz auto',
    homeCalcStep1Desc: 'Znajdź lot na aukcji',
    homeCalcStep2: 'Ustaw ofertę',
    homeCalcStep2Desc: 'Podaj kwotę licytacji',
    homeCalcStep3: 'Oblicz',
    homeCalcStep3Desc: 'Otrzymaj pełny kosztorys pod klucz',
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
    homeModalScenarioLabel: 'Wybierz scenariusz',
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
    homeStockLoc: 'Lokalizacja',
    homeStockLocCity: 'Jawczyce, ul. Poznanska 56',
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
    homeHowAct: 'Akt',
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
    homeHowCtaLead: 'Gotów obliczyć auto pod klucz?',
    homeHowCtaBtn: 'Uzyskaj wycenę',
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
    navChinaCars: 'Auta z Chin',
    footerLotSources: 'Oficjalne źródła lotów',
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
    catalogPriceNoteSeller: 'Sprzedawca: BIDDERS',
    catalogPriceNoteLease: 'Dostępne w leasingu',
    catalogPriceNoteEstimate: 'Szacunek:',
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
    lotLabelLocation: 'Lokalizacja',
    lotLabelDispatchPort: 'Port wysyłki',
    lotLabelPickupPoint: 'Miejsce odbioru',
    lotLabelStatus: 'Status',
    lotLabelAuctionDate: 'Data aukcji',
    lotLabelEstDelivery: 'Szac. dostawa',
    lotDeliveryTbd: 'Do ustalenia',
    lotWatching: 'Obserwowane',
    lotWatch: 'Obserwuj',
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
    lotSbCurrentBid: 'Aktualna oferta',
    lotSbEstimate: 'Wycena:',
    lotSbMaxBid: 'Twoja maksymalna oferta',
    lotSbDecrease: 'Zmniejsz',
    lotSbIncrease: 'Zwiększ',
    lotSbBidNow: 'Złóż ofertę teraz',
    lotSbHowToBid: 'Jak złożyć ofertę? →',
    lotSbTimeLeft: 'Pozostały czas',
    lotSbAuctionEnded: 'Aukcja zakończona',
    lotSbTimerUntil: 'do',
    lotSbCalcTitle: 'Kalkulator ceny końcowej',
    lotCalcBid: 'Oferta (aktualna)',
    lotCalcAuctionFee: 'Opłata aukcyjna',
    lotCalcTransport: 'Transport do portu',
    lotCalcShipping: 'Dostawa morska',
    lotCalcDocs: 'Dokumenty + serwis BIDDERS',
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
    lotSbTurnkeyFixed: 'Stała cena pod klucz',
    lotSbFactDelivery: 'Szac. dostawa',
    lotSbFactDeliveryValue: 'W drodze',
    lotSbContact: 'Skontaktuj się w sprawie auta',
    lotSbWhatsIncluded: 'Co jest w cenie',
    lotSbIncluded1: 'Zakup na aukcji',
    lotSbIncluded2: 'Transport USA → port',
    lotSbIncluded3: 'Dostawa morska',
    lotSbIncluded4: 'Odprawa celna w Europie',
    lotSbIncluded5: 'Serwis i wsparcie BIDDERS',
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
    lotKnowPriceEnd: 'Następnie wyrejestrowanie, przygotowanie, certyfikacja i przekazanie na Ukrainie.',
    lotKnowCheckTitle: 'Co sprawdzić przed decyzją',
    lotKnowCheckDamage: 'Lista uszkodzeń:',
    lotKnowCheckDocs: 'Weryfikacja dokumentów:',
    lotKnowCheckBudget: 'Szacowany budżet: od',
    lotKnowCheckBudgetSuffix: 'z uwzględnieniem logistyki',
    lotKnowCheckAgreement: 'Uzgodnij budżet wydania auta / dostawy na Ukrainę',
    lotKnowChip1: 'Import pod klucz',
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
    lotFaq3Q: 'Jaki jest orientacyjny budżet pod klucz?',
    lotFaq3A: 'Blok „Budżet gotowego auta" pokazuje aktualną cenę + serwis BIDDERS. Dla dokładnego wyliczenia z logistyką i cłem użyj kalkulatora w sidebarze lub na stronie /calculator.',
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
    lotStep4Title: 'Przekazujemy na Ukrainie',
    lotStep4Text: 'Auto przechodzi przez ostatnie etapy i jest przekazywane z pełnym wsparciem zespołu BIDDERS.',
    lotSummaryTitle: 'Co warto wiedzieć przed decyzją o',
    lotSummarySubtitle: 'Stan, aktualny status i orientacyjny budżet końcowy.',
    lotSummaryStatusTitle: 'Status i gotowość auta',
    lotSummaryStatusP1: 'jest aktualnie w statusie',
    lotSummaryStatusP2: 'Przed zakupem ustalamy lokalizację, dostępność dokumentów i scenariusz przekazania na Ukrainie.',
    lotSummaryStatusFacts: 'Dostępne dane: dokumenty —',
    lotSummaryStatusFactsDmg: 'uszkodzenia —',
    lotSummaryStatusFactsLoc: 'lokalizacja —',
    lotSummaryStatusP3: 'Jeśli potrzebujesz szczegółowej wyceny, zespół BIDDERS pomoże z logistyką i odprawą celną w realnym budżecie — bez ukrytych niespodzianek.',
    lotSummaryBudgetTitle: 'Budżet gotowego auta',
    lotSummaryBudgetLead: 'Dla gotowego auta opieramy się na aktualnej cenie, przygotowaniu, certyfikacji i wsparciu przy przekazaniu.',
    lotBudgetCurrentPrice: 'Aktualna cena auta',
    lotBudgetPrep: 'Przygotowanie i serwis',
    lotBudgetPrepValue: 'na życzenie',
    lotBudgetCert: 'Certyfikacja / rejestracja',
    lotBudgetCertValue: 'indywidualnie',
    lotBudgetService: 'Serwis BIDDERS',
    lotSummaryCtaCar: 'Znajdź auto',
    lotSummaryCtaLogistics: 'Dowiedz się o logistyce',
    lotTimerDays: 'd',
    lotTimerHours: 'g',
    lotTimerMinutes: 'min',
    lotTimerSeconds: 's',
    lotPickupCity: 'Lwów',
    lotDispatchCountry: 'USA',
    calcPill: 'Kalkulator importu',
    calcHeroTitle: 'Oblicz realny koszt auta pod klucz jeszcze przed licytacją',
    calcHeroDesc: 'Od oferty do kosztu końcowego z cłem i serwisem BIDDERS.',
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
    calcLabelCity: 'Miasto wysyłki',
    calcLabelYear: 'Rok produkcji',
    calcLabelBattery: 'Pojemność baterii',
    calcLabelEngine: 'Pojemność silnika',
    calcLabelPrice: 'Cena auta / oferta',
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
    calcCaptionErr401: 'API kalkulatora wymaga autoryzacji. Dodaj token do localStorage (klucz lubeavtoPartnerToken).',
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
    calcRowBiddersFee: 'Prowizja BIDDERS',
    calcRowInsuranceFee: 'Ubezpieczenie',
    calcRowMoneyTransfer: 'Opłata za przelew w USA',
    calcLabelEuPort: 'Port docelowy (UE)',
    calcLabelImportTax: 'Podatek importowy',
    calcLabelVatProfile: 'VAT (profil)',
    calcRowCustomsAgency: 'Agencja celna',
    calcTaxAuto: '10% (Samochód)',
    calcTaxTruck: '22% (Ciężarówka)',
    calcTaxMoto: '6% (Motocykl)',
    calcTaxClassic0: '0% (Klasyk)',
    calcVatClassic9: '9% (Klasyk)',
    blogHeroKicker: 'Blog BIDDERS',
    blogHeroTitle: 'Materiały o imporcie aut z USA i Europy',
    blogHeroSub: 'Przewodniki krok po kroku, logistyka, cło i dobór lotów na Copart, IAAI, Manheim. Bez wody — tylko konkretna wiedza od zespołu BIDDERS.',
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
    casesPageTitle: 'Realne przypadki klientów BIDDERS',
    casesPageSub: 'Jedna metodologia porównania: cena pod klucz, cena rynku polskiego, końcowa oszczędność.',
    casesLabelTurnkey: 'Pod klucz',
    casesLabelMarket: 'Rynek polski',
    casesLabelSavings: 'Oszczędność',
    casesCtaBlog: 'Czytaj blog',
    casesCtaHome: 'Na stronę główną',
    faqKicker: 'FAQ',
    faqPageTitle: 'Często zadawane pytania o import aut',
    faqPageSub: 'Odpowiedzi na pytania o terminy, usługę pod klucz, gwarancje, aplikację i oględziny na placu.',
    faqDeliveryTimeQuestion: 'Ile trwa dostawa?',
    faqDeliveryTimeAnswer: 'Średnio 45-60 dni w zależności od trasy, portu i obciążenia celnego.',
    faqTurnkeyQuestion: 'Co obejmuje format pod klucz?',
    faqTurnkeyAnswer: 'Dobór lotu, licytacja, zakup, logistyka, cło, dokumenty i przekazanie auta.',
    faqTransparencyQuestion: 'Jakie gwarancje przejrzystości?',
    faqTransparencyAnswer: 'Jedna umowa, kosztorys ustalony przed licytacją, weryfikacja VIN i przejrzyste etapy transakcji.',
    faqInspectionQuestion: 'Czy można przyjechać na oględziny?',
    faqInspectionAnswer: 'Tak, oględziny na placu są dostępne po wcześniejszym umówieniu.',
    faqCtaHome: 'Blok FAQ na stronie głównej',
    faqCtaContacts: 'Przejdź do kontaktów',
    legalKicker: 'Informacje prawne',
    termsTitle: 'Warunki użytkowania',
    termsSub: 'Korzystając ze strony BIDDERS, zgadzasz się z tymi warunkami.',
    termsS1Title: '1. Postanowienia ogólne',
    termsS1Text: 'Serwis ma charakter informacyjny i nie stanowi oferty publicznej. Ostateczne warunki współpracy określa indywidualna umowa.',
    termsS2Title: '2. Treści i prawa autorskie',
    termsS2Text: 'Teksty, projekt, grafika i inne materiały serwisu należą do BIDDERS lub są używane na podstawie prawnej.',
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
    ctHeroKicker: 'Kontakty BIDDERS',
    ctHeroTitle: 'Kontakty i plac BIDDERS w Polsce',
    ctHeroSub: 'Przyjedź na oględziny, uzyskaj konsultację dotyczącą dokumentów i całkowitego kosztu posiadania. Przedstawiciele w całej Europie — od Londynu do Kłajpedy.',
    ctHeroFactOffices: 'Biura w UE',
    ctHeroFactDelivery: 'Dostarczonych aut miesięcznie',
    ctHeroFactChat: 'Chat na Telegram',
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
    ctMapAriaLabel: 'Mapa BIDDERS, Polska',
    ctMapBadge: 'Główne biuro',
    ctAddressLabel: 'Adres',
    ctAddressCoords: 'Współrzędne:',
    ctAddressNearest: 'Najbliższe miasto:',
    ctAddressFromWarsaw: 'Z Warszawy:',
    ctAddressFromWarsawValue: '~25 min samochodem',
    ctDirectionsLabel: 'Wyznacz trasę',
    ctWazeLabel: 'Nawiguj',
    ctChannelsSectionTitle: 'Wszystkie kanały kontaktu',
    ctChannelsSectionSub: 'Telefon — do szybkich rozmów. Email — do oficjalnych dokumentów i zapytań biznesowych. Telegram — do szybkich pytań o każdej porze.',
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
    ctHoursSaturday: 'Sobota',
    ctHoursSunday: 'Niedziela',
    ctHoursSatSun: 'Sob – Ndz',
    ctHoursTelegramChat: 'Chat Telegram',
    ctHoursOnAppointment: 'po umówieniu',
    ctHoursDayOff: 'nieczynne',
    ctHoursDuration: 'Czas trwania',
    ctHoursDurationValue: '~45 min',
    ctNavFaqLabel: 'Pytania',
    ctNavFaqHint: 'Najczęstsze pytania i krótkie odpowiedzi.',
    ctNavCalcLabel: 'Wycena',
    ctNavCalcHint: 'Orientacyjny koszt pod klucz.',
    ctNavHomeLabel: 'Wróć',
    ctNavHomeHint: 'Nasze usługi i zalety.',
    ctJsonLdDesc: 'Import aut z aukcji USA i Europy pod klucz.',
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
  },
}
