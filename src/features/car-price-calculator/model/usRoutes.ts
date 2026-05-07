import type { EuPortId } from './calculatorTypes'

// AUTO-GENERATED from data/bidcars-rates-full.json — do not edit manually
// Generated: 2026-05-04T19:08:08.184Z
// 456 branches × 4 destinations = 1824 rates

export type DestKey = 'rotterdam' | 'gdynia' | 'bremerhaven' | 'klaipeda';

export interface BranchRates {
  rotterdam?: VehicleRates;
  gdynia?: VehicleRates;
  bremerhaven?: VehicleRates;
  klaipeda?: VehicleRates;
}

export interface VehicleRates {
  auto: number | null;
  moto: number | null;
  atv: number | null;
  pwc: number | null;
  snow: number | null;
  trucking: number | null;
  shipping: number | null;
}

export interface Branch {
  id: number;
  name: string;
  group: string;
}

export const BRANCHES: Branch[] = [
  {
    "id": 52,
    "name": "Abilene",
    "group": "IAAI"
  },
  {
    "id": 175,
    "name": "Abilene",
    "group": "Copart"
  },
  {
    "id": 537,
    "name": "ACE - Carson",
    "group": "IAAI"
  },
  {
    "id": 538,
    "name": "ACE - Perris",
    "group": "IAAI"
  },
  {
    "id": 549,
    "name": "ACE - Perris 2",
    "group": "IAAI"
  },
  {
    "id": 569,
    "name": "Adelanto",
    "group": "Copart"
  },
  {
    "id": 173,
    "name": "ADESA Birmingham",
    "group": "IAAI"
  },
  {
    "id": 627,
    "name": "Akron",
    "group": "Copart"
  },
  {
    "id": 112,
    "name": "Akron-Canton",
    "group": "IAAI"
  },
  {
    "id": 96,
    "name": "Albany",
    "group": "IAAI"
  },
  {
    "id": 176,
    "name": "Albany",
    "group": "Copart"
  },
  {
    "id": 9,
    "name": "Albuquerque",
    "group": "IAAI"
  },
  {
    "id": 177,
    "name": "Albuquerque",
    "group": "Copart"
  },
  {
    "id": 93,
    "name": "Altoona",
    "group": "IAAI"
  },
  {
    "id": 178,
    "name": "Altoona",
    "group": "Copart"
  },
  {
    "id": 51,
    "name": "Amarillo",
    "group": "IAAI"
  },
  {
    "id": 179,
    "name": "Amarillo",
    "group": "Copart"
  },
  {
    "id": 5,
    "name": "Anaheim",
    "group": "IAAI"
  },
  {
    "id": 584,
    "name": "Anaheim Consolidated",
    "group": "IAAI"
  },
  {
    "id": 30,
    "name": "Anchorage",
    "group": "IAAI"
  },
  {
    "id": 180,
    "name": "Anchorage",
    "group": "Copart"
  },
  {
    "id": 600,
    "name": "Anchorage South",
    "group": "Copart"
  },
  {
    "id": 181,
    "name": "Andrews",
    "group": "Copart"
  },
  {
    "id": 182,
    "name": "Antelope",
    "group": "Copart"
  },
  {
    "id": 70,
    "name": "Appleton",
    "group": "IAAI"
  },
  {
    "id": 183,
    "name": "Appleton",
    "group": "Copart"
  },
  {
    "id": 156,
    "name": "Asheville",
    "group": "IAAI"
  },
  {
    "id": 106,
    "name": "Ashland",
    "group": "IAAI"
  },
  {
    "id": 127,
    "name": "Atlanta",
    "group": "IAAI"
  },
  {
    "id": 126,
    "name": "Atlanta East",
    "group": "IAAI"
  },
  {
    "id": 184,
    "name": "Atlanta East",
    "group": "Copart"
  },
  {
    "id": 125,
    "name": "Atlanta North",
    "group": "IAAI"
  },
  {
    "id": 185,
    "name": "Atlanta North",
    "group": "Copart"
  },
  {
    "id": 124,
    "name": "Atlanta South",
    "group": "IAAI"
  },
  {
    "id": 186,
    "name": "Atlanta South",
    "group": "Copart"
  },
  {
    "id": 638,
    "name": "Atlanta West",
    "group": "IAAI"
  },
  {
    "id": 187,
    "name": "Atlanta West",
    "group": "Copart"
  },
  {
    "id": 583,
    "name": "Augusta",
    "group": "Copart"
  },
  {
    "id": 37,
    "name": "Austin",
    "group": "IAAI"
  },
  {
    "id": 188,
    "name": "Austin",
    "group": "Copart"
  },
  {
    "id": 620,
    "name": "Austin North",
    "group": "IAAI"
  },
  {
    "id": 82,
    "name": "Avenel New Jersey",
    "group": "IAAI"
  },
  {
    "id": 189,
    "name": "Bakersfield",
    "group": "Copart"
  },
  {
    "id": 133,
    "name": "Baltimore",
    "group": "IAAI"
  },
  {
    "id": 190,
    "name": "Baltimore",
    "group": "Copart"
  },
  {
    "id": 556,
    "name": "Baltimore East",
    "group": "Copart"
  },
  {
    "id": 624,
    "name": "Bank Repo Auction",
    "group": "Copart"
  },
  {
    "id": 41,
    "name": "Baton Rouge",
    "group": "IAAI"
  },
  {
    "id": 191,
    "name": "Baton Rouge",
    "group": "Copart"
  },
  {
    "id": 25,
    "name": "Billings",
    "group": "IAAI"
  },
  {
    "id": 192,
    "name": "Billings",
    "group": "Copart"
  },
  {
    "id": 141,
    "name": "Birmingham",
    "group": "IAAI"
  },
  {
    "id": 193,
    "name": "Birmingham",
    "group": "Copart"
  },
  {
    "id": 572,
    "name": "Bismarck",
    "group": "Copart"
  },
  {
    "id": 22,
    "name": "Boise",
    "group": "IAAI"
  },
  {
    "id": 194,
    "name": "Boise",
    "group": "Copart"
  },
  {
    "id": 83,
    "name": "Boston - Shirley",
    "group": "IAAI"
  },
  {
    "id": 110,
    "name": "Bowling Green",
    "group": "IAAI"
  },
  {
    "id": 104,
    "name": "Bridgeport",
    "group": "IAAI"
  },
  {
    "id": 107,
    "name": "Buckhannon",
    "group": "IAAI"
  },
  {
    "id": 92,
    "name": "Buffalo",
    "group": "IAAI"
  },
  {
    "id": 542,
    "name": "Buffalo",
    "group": "Copart"
  },
  {
    "id": 103,
    "name": "Burlington",
    "group": "IAAI"
  },
  {
    "id": 195,
    "name": "Candia",
    "group": "Copart"
  },
  {
    "id": 196,
    "name": "Cartersville",
    "group": "Copart"
  },
  {
    "id": 32,
    "name": "Casper",
    "group": "IAAI"
  },
  {
    "id": 626,
    "name": "Casper",
    "group": "Copart"
  },
  {
    "id": 197,
    "name": "Casper",
    "group": "Copart"
  },
  {
    "id": 635,
    "name": "Cedar Rapids",
    "group": "Copart"
  },
  {
    "id": 87,
    "name": "Central New Jersey",
    "group": "IAAI"
  },
  {
    "id": 198,
    "name": "Chambersburg",
    "group": "Copart"
  },
  {
    "id": 134,
    "name": "Charleston",
    "group": "IAAI"
  },
  {
    "id": 199,
    "name": "Charleston Hurricane",
    "group": "Copart"
  },
  {
    "id": 131,
    "name": "Charlotte",
    "group": "IAAI"
  },
  {
    "id": 157,
    "name": "Chattanooga",
    "group": "IAAI"
  },
  {
    "id": 200,
    "name": "Chicago North",
    "group": "Copart"
  },
  {
    "id": 201,
    "name": "Chicago South",
    "group": "Copart"
  },
  {
    "id": 64,
    "name": "Chicago-North",
    "group": "IAAI"
  },
  {
    "id": 65,
    "name": "Chicago-South",
    "group": "IAAI"
  },
  {
    "id": 63,
    "name": "Chicago-West",
    "group": "IAAI"
  },
  {
    "id": 202,
    "name": "China Grove",
    "group": "Copart"
  },
  {
    "id": 561,
    "name": "Cicero",
    "group": "Copart"
  },
  {
    "id": 108,
    "name": "Cincinnati",
    "group": "IAAI"
  },
  {
    "id": 113,
    "name": "Cincinnati-South",
    "group": "IAAI"
  },
  {
    "id": 152,
    "name": "Clearwater",
    "group": "IAAI"
  },
  {
    "id": 115,
    "name": "Cleveland",
    "group": "IAAI"
  },
  {
    "id": 203,
    "name": "Cleveland East",
    "group": "Copart"
  },
  {
    "id": 204,
    "name": "Cleveland West",
    "group": "Copart"
  },
  {
    "id": 636,
    "name": "Clewiston",
    "group": "Copart"
  },
  {
    "id": 574,
    "name": "Colorado Springs",
    "group": "IAAI"
  },
  {
    "id": 206,
    "name": "Colorado Springs",
    "group": "Copart"
  },
  {
    "id": 2,
    "name": "Colton",
    "group": "IAAI"
  },
  {
    "id": 163,
    "name": "Columbia",
    "group": "IAAI"
  },
  {
    "id": 207,
    "name": "Columbia",
    "group": "Copart"
  },
  {
    "id": 208,
    "name": "Columbia - Gaston",
    "group": "Copart"
  },
  {
    "id": 114,
    "name": "Columbus",
    "group": "IAAI"
  },
  {
    "id": 209,
    "name": "Columbus",
    "group": "Copart"
  },
  {
    "id": 153,
    "name": "Concord",
    "group": "IAAI"
  },
  {
    "id": 553,
    "name": "Concord",
    "group": "Copart"
  },
  {
    "id": 594,
    "name": "COPART SELECT NATIONAL AUCTION",
    "group": "Copart"
  },
  {
    "id": 34,
    "name": "Corpus Christi",
    "group": "IAAI"
  },
  {
    "id": 210,
    "name": "Corpus Christi",
    "group": "Copart"
  },
  {
    "id": 211,
    "name": "Crashedtoys Atlanta",
    "group": "Copart"
  },
  {
    "id": 212,
    "name": "Crashedtoys Dallas",
    "group": "Copart"
  },
  {
    "id": 249,
    "name": "Crashedtoys Eldridge",
    "group": "Copart"
  },
  {
    "id": 214,
    "name": "Crashedtoys Minneapolis",
    "group": "Copart"
  },
  {
    "id": 595,
    "name": "CRASHEDTOYS POWERSPORT AUCTION",
    "group": "Copart"
  },
  {
    "id": 215,
    "name": "Crashedtoys Sacramento",
    "group": "Copart"
  },
  {
    "id": 140,
    "name": "Culpeper",
    "group": "IAAI"
  },
  {
    "id": 54,
    "name": "Dallas",
    "group": "IAAI"
  },
  {
    "id": 217,
    "name": "Dallas",
    "group": "Copart"
  },
  {
    "id": 216,
    "name": "Dallas South",
    "group": "Copart"
  },
  {
    "id": 218,
    "name": "Danville",
    "group": "Copart"
  },
  {
    "id": 78,
    "name": "Davenport",
    "group": "IAAI"
  },
  {
    "id": 250,
    "name": "Davenport",
    "group": "Copart"
  },
  {
    "id": 109,
    "name": "Dayton",
    "group": "IAAI"
  },
  {
    "id": 219,
    "name": "Dayton",
    "group": "Copart"
  },
  {
    "id": 28,
    "name": "Denver",
    "group": "IAAI"
  },
  {
    "id": 222,
    "name": "Denver",
    "group": "Copart"
  },
  {
    "id": 220,
    "name": "Denver Central",
    "group": "Copart"
  },
  {
    "id": 31,
    "name": "Denver East",
    "group": "IAAI"
  },
  {
    "id": 205,
    "name": "Denver South",
    "group": "Copart"
  },
  {
    "id": 79,
    "name": "Des Moines",
    "group": "IAAI"
  },
  {
    "id": 223,
    "name": "Des Moines",
    "group": "Copart"
  },
  {
    "id": 66,
    "name": "Detroit",
    "group": "IAAI"
  },
  {
    "id": 224,
    "name": "Detroit",
    "group": "Copart"
  },
  {
    "id": 143,
    "name": "Dothan",
    "group": "IAAI"
  },
  {
    "id": 557,
    "name": "Dothan",
    "group": "Copart"
  },
  {
    "id": 559,
    "name": "Dream Rides",
    "group": "IAAI"
  },
  {
    "id": 166,
    "name": "Dundalk",
    "group": "IAAI"
  },
  {
    "id": 536,
    "name": "Dyer",
    "group": "Copart"
  },
  {
    "id": 576,
    "name": "Earlington",
    "group": "Copart"
  },
  {
    "id": 19,
    "name": "East Bay",
    "group": "IAAI"
  },
  {
    "id": 39,
    "name": "El Paso",
    "group": "IAAI"
  },
  {
    "id": 225,
    "name": "El Paso",
    "group": "Copart"
  },
  {
    "id": 611,
    "name": "Electric Vehicle Auction",
    "group": "Copart"
  },
  {
    "id": 623,
    "name": "Electric Vehicle Auctions",
    "group": "IAAI"
  },
  {
    "id": 588,
    "name": "Elkton",
    "group": "IAAI"
  },
  {
    "id": 84,
    "name": "Englishtown",
    "group": "IAAI"
  },
  {
    "id": 608,
    "name": "EQUIPMENT SPECIALTY SALE",
    "group": "Copart"
  },
  {
    "id": 95,
    "name": "Erie",
    "group": "IAAI"
  },
  {
    "id": 14,
    "name": "Eugene",
    "group": "IAAI"
  },
  {
    "id": 226,
    "name": "Eugene",
    "group": "Copart"
  },
  {
    "id": 227,
    "name": "Exeter",
    "group": "Copart"
  },
  {
    "id": 568,
    "name": "Fairburn",
    "group": "Copart"
  },
  {
    "id": 27,
    "name": "Fargo",
    "group": "IAAI"
  },
  {
    "id": 49,
    "name": "Fayetteville",
    "group": "IAAI"
  },
  {
    "id": 228,
    "name": "Fayetteville",
    "group": "Copart"
  },
  {
    "id": 61,
    "name": "Flint",
    "group": "IAAI"
  },
  {
    "id": 229,
    "name": "Flint",
    "group": "Copart"
  },
  {
    "id": 6,
    "name": "Fontana",
    "group": "IAAI"
  },
  {
    "id": 155,
    "name": "Fort Myers",
    "group": "IAAI"
  },
  {
    "id": 164,
    "name": "Fort Pierce",
    "group": "IAAI"
  },
  {
    "id": 605,
    "name": "Fort Wayne",
    "group": "IAAI"
  },
  {
    "id": 552,
    "name": "Fort Wayne",
    "group": "Copart"
  },
  {
    "id": 59,
    "name": "Fort Worth North",
    "group": "IAAI"
  },
  {
    "id": 535,
    "name": "Fredericksburg",
    "group": "Copart"
  },
  {
    "id": 167,
    "name": "Fredericksburg-South",
    "group": "IAAI"
  },
  {
    "id": 577,
    "name": "Freetown",
    "group": "Copart"
  },
  {
    "id": 20,
    "name": "Fremont",
    "group": "IAAI"
  },
  {
    "id": 21,
    "name": "Fresno",
    "group": "IAAI"
  },
  {
    "id": 231,
    "name": "Fresno",
    "group": "Copart"
  },
  {
    "id": 232,
    "name": "Ft. Pierce",
    "group": "Copart"
  },
  {
    "id": 233,
    "name": "Ft. Worth",
    "group": "Copart"
  },
  {
    "id": 571,
    "name": "Gastonia",
    "group": "Copart"
  },
  {
    "id": 234,
    "name": "Glassboro East",
    "group": "Copart"
  },
  {
    "id": 550,
    "name": "Glassboro West",
    "group": "Copart"
  },
  {
    "id": 593,
    "name": "GO APP Only",
    "group": "Copart"
  },
  {
    "id": 235,
    "name": "Graham",
    "group": "Copart"
  },
  {
    "id": 67,
    "name": "Grand Rapids",
    "group": "IAAI"
  },
  {
    "id": 60,
    "name": "Great Lakes",
    "group": "IAAI"
  },
  {
    "id": 132,
    "name": "Greensboro",
    "group": "IAAI"
  },
  {
    "id": 162,
    "name": "Greenville",
    "group": "IAAI"
  },
  {
    "id": 46,
    "name": "Grenada",
    "group": "IAAI"
  },
  {
    "id": 612,
    "name": "Grenada",
    "group": "Copart"
  },
  {
    "id": 45,
    "name": "Gulf Coast",
    "group": "IAAI"
  },
  {
    "id": 237,
    "name": "Hammond",
    "group": "Copart"
  },
  {
    "id": 238,
    "name": "Hampton",
    "group": "Copart"
  },
  {
    "id": 239,
    "name": "Harrisburg",
    "group": "Copart"
  },
  {
    "id": 91,
    "name": "Hartford",
    "group": "IAAI"
  },
  {
    "id": 240,
    "name": "Hartford",
    "group": "Copart"
  },
  {
    "id": 230,
    "name": "Hartford City",
    "group": "Copart"
  },
  {
    "id": 543,
    "name": "Hartford Springfield",
    "group": "Copart"
  },
  {
    "id": 99,
    "name": "Hartford-South",
    "group": "IAAI"
  },
  {
    "id": 244,
    "name": "Hawaii - Kailua-Kona\r\n",
    "group": "Copart"
  },
  {
    "id": 247,
    "name": "Hawaii - Kapolei\r\n",
    "group": "Copart"
  },
  {
    "id": 245,
    "name": "Hawaii - Lihue\r\n",
    "group": "Copart"
  },
  {
    "id": 246,
    "name": "Hawaii - Maui\r\n",
    "group": "Copart"
  },
  {
    "id": 242,
    "name": "Hayward",
    "group": "Copart"
  },
  {
    "id": 241,
    "name": "Hayward - Desert View",
    "group": "Copart"
  },
  {
    "id": 618,
    "name": "HEAVY-TRAILER-RV CLEAN SALE",
    "group": "Copart"
  },
  {
    "id": 243,
    "name": "Helena",
    "group": "Copart"
  },
  {
    "id": 7,
    "name": "High Desert",
    "group": "IAAI"
  },
  {
    "id": 606,
    "name": "High Point",
    "group": "IAAI"
  },
  {
    "id": 3,
    "name": "Honolulu",
    "group": "IAAI"
  },
  {
    "id": 57,
    "name": "Houston",
    "group": "IAAI"
  },
  {
    "id": 248,
    "name": "Houston",
    "group": "Copart"
  },
  {
    "id": 562,
    "name": "Houston East",
    "group": "Copart"
  },
  {
    "id": 53,
    "name": "Houston-North",
    "group": "IAAI"
  },
  {
    "id": 539,
    "name": "Houston-South",
    "group": "IAAI"
  },
  {
    "id": 142,
    "name": "Huntsville",
    "group": "IAAI"
  },
  {
    "id": 56,
    "name": "IAA Dallas/Ft Worth",
    "group": "IAAI"
  },
  {
    "id": 68,
    "name": "IAA Ignite Auction Portage",
    "group": "IAAI"
  },
  {
    "id": 80,
    "name": "Indianapolis",
    "group": "IAAI"
  },
  {
    "id": 251,
    "name": "Indianapolis",
    "group": "Copart"
  },
  {
    "id": 587,
    "name": "Indianapolis South",
    "group": "IAAI"
  },
  {
    "id": 252,
    "name": "Ionia",
    "group": "Copart"
  },
  {
    "id": 44,
    "name": "Jackson",
    "group": "IAAI"
  },
  {
    "id": 253,
    "name": "Jackson",
    "group": "Copart"
  },
  {
    "id": 129,
    "name": "Jacksonville",
    "group": "IAAI"
  },
  {
    "id": 254,
    "name": "Jacksonville East",
    "group": "Copart"
  },
  {
    "id": 555,
    "name": "Jacksonville North",
    "group": "Copart"
  },
  {
    "id": 255,
    "name": "Jacksonville West",
    "group": "Copart"
  },
  {
    "id": 75,
    "name": "Kansas City",
    "group": "IAAI"
  },
  {
    "id": 256,
    "name": "Kansas City",
    "group": "Copart"
  },
  {
    "id": 602,
    "name": "Kansas City",
    "group": "Copart"
  },
  {
    "id": 563,
    "name": "Kansas City East",
    "group": "IAAI"
  },
  {
    "id": 257,
    "name": "Kincheloe",
    "group": "Copart"
  },
  {
    "id": 159,
    "name": "Knoxville",
    "group": "IAAI"
  },
  {
    "id": 258,
    "name": "Knoxville",
    "group": "Copart"
  },
  {
    "id": 161,
    "name": "Lafayette",
    "group": "IAAI"
  },
  {
    "id": 643,
    "name": "Lagrange",
    "group": "Copart"
  },
  {
    "id": 637,
    "name": "Lake City",
    "group": "IAAI"
  },
  {
    "id": 260,
    "name": "Lansing",
    "group": "Copart"
  },
  {
    "id": 11,
    "name": "Las Vegas",
    "group": "IAAI"
  },
  {
    "id": 261,
    "name": "Las Vegas",
    "group": "Copart"
  },
  {
    "id": 610,
    "name": "Las Vegas West",
    "group": "Copart"
  },
  {
    "id": 136,
    "name": "Laurel",
    "group": "IAAI"
  },
  {
    "id": 541,
    "name": "Lexington",
    "group": "IAAI"
  },
  {
    "id": 262,
    "name": "Lexington East",
    "group": "Copart"
  },
  {
    "id": 263,
    "name": "Lexington West",
    "group": "Copart"
  },
  {
    "id": 62,
    "name": "Lincoln",
    "group": "IAAI"
  },
  {
    "id": 264,
    "name": "Lincoln",
    "group": "Copart"
  },
  {
    "id": 42,
    "name": "Little Rock",
    "group": "IAAI"
  },
  {
    "id": 265,
    "name": "Little Rock",
    "group": "Copart"
  },
  {
    "id": 266,
    "name": "Long Beach",
    "group": "Copart"
  },
  {
    "id": 86,
    "name": "Long Island",
    "group": "IAAI"
  },
  {
    "id": 267,
    "name": "Long Island",
    "group": "Copart"
  },
  {
    "id": 38,
    "name": "Longview",
    "group": "IAAI"
  },
  {
    "id": 268,
    "name": "Longview",
    "group": "Copart"
  },
  {
    "id": 8,
    "name": "Los Angeles",
    "group": "IAAI"
  },
  {
    "id": 269,
    "name": "Los Angeles",
    "group": "Copart"
  },
  {
    "id": 560,
    "name": "Los Angeles South",
    "group": "IAAI"
  },
  {
    "id": 117,
    "name": "Louisville",
    "group": "IAAI"
  },
  {
    "id": 259,
    "name": "Louisville",
    "group": "Copart"
  },
  {
    "id": 118,
    "name": "Louisville North",
    "group": "IAAI"
  },
  {
    "id": 33,
    "name": "Lubbock",
    "group": "IAAI"
  },
  {
    "id": 270,
    "name": "Lufkin",
    "group": "Copart"
  },
  {
    "id": 548,
    "name": "Lumberton",
    "group": "Copart"
  },
  {
    "id": 271,
    "name": "Lyman",
    "group": "Copart"
  },
  {
    "id": 146,
    "name": "Macon",
    "group": "IAAI"
  },
  {
    "id": 272,
    "name": "Macon",
    "group": "Copart"
  },
  {
    "id": 273,
    "name": "Madison",
    "group": "Copart"
  },
  {
    "id": 575,
    "name": "Madison South",
    "group": "Copart"
  },
  {
    "id": 101,
    "name": "Manchester",
    "group": "IAAI"
  },
  {
    "id": 579,
    "name": "Marhaba Cars Auction",
    "group": "IAAI"
  },
  {
    "id": 274,
    "name": "Martinez",
    "group": "Copart"
  },
  {
    "id": 275,
    "name": "Mcallen",
    "group": "Copart"
  },
  {
    "id": 58,
    "name": "McAllen",
    "group": "IAAI"
  },
  {
    "id": 276,
    "name": "Mebane",
    "group": "Copart"
  },
  {
    "id": 617,
    "name": "MEDIUM DUTY CLEAN TITLE SALE",
    "group": "Copart"
  },
  {
    "id": 607,
    "name": "MEDIUM DUTY SPECIALTY SALE",
    "group": "Copart"
  },
  {
    "id": 149,
    "name": "Memphis",
    "group": "IAAI"
  },
  {
    "id": 277,
    "name": "Memphis",
    "group": "Copart"
  },
  {
    "id": 601,
    "name": "Mentone",
    "group": "Copart"
  },
  {
    "id": 135,
    "name": "Metro DC",
    "group": "IAAI"
  },
  {
    "id": 150,
    "name": "Miami",
    "group": "IAAI"
  },
  {
    "id": 278,
    "name": "Miami Central",
    "group": "Copart"
  },
  {
    "id": 279,
    "name": "Miami North",
    "group": "Copart"
  },
  {
    "id": 280,
    "name": "Miami South",
    "group": "Copart"
  },
  {
    "id": 147,
    "name": "Miami-North",
    "group": "IAAI"
  },
  {
    "id": 69,
    "name": "Milwaukee",
    "group": "IAAI"
  },
  {
    "id": 281,
    "name": "Milwaukee",
    "group": "Copart"
  },
  {
    "id": 570,
    "name": "Milwaukee North",
    "group": "Copart"
  },
  {
    "id": 586,
    "name": "Milwaukee South",
    "group": "Copart"
  },
  {
    "id": 282,
    "name": "Minneapolis",
    "group": "Copart"
  },
  {
    "id": 283,
    "name": "Minneapolis North",
    "group": "Copart"
  },
  {
    "id": 598,
    "name": "Minneapolis South",
    "group": "IAAI"
  },
  {
    "id": 74,
    "name": "Minneapolis/St. Paul",
    "group": "IAAI"
  },
  {
    "id": 24,
    "name": "Missoula",
    "group": "IAAI"
  },
  {
    "id": 644,
    "name": "Mobile",
    "group": "IAAI"
  },
  {
    "id": 284,
    "name": "Mobile",
    "group": "Copart"
  },
  {
    "id": 573,
    "name": "Mobile South",
    "group": "Copart"
  },
  {
    "id": 285,
    "name": "Mocksville",
    "group": "Copart"
  },
  {
    "id": 286,
    "name": "Montgomery",
    "group": "Copart"
  },
  {
    "id": 631,
    "name": "Monticello",
    "group": "IAAI"
  },
  {
    "id": 625,
    "name": "Napa",
    "group": "Copart"
  },
  {
    "id": 158,
    "name": "Nashville",
    "group": "IAAI"
  },
  {
    "id": 287,
    "name": "Nashville",
    "group": "Copart"
  },
  {
    "id": 591,
    "name": "NCS CENTRAL REGION",
    "group": "Copart"
  },
  {
    "id": 592,
    "name": "NCS EASTERN REGION",
    "group": "Copart"
  },
  {
    "id": 590,
    "name": "NCS MOUNTAIN REGION",
    "group": "Copart"
  },
  {
    "id": 589,
    "name": "NCS PACIFIC REGION",
    "group": "Copart"
  },
  {
    "id": 89,
    "name": "New Castle",
    "group": "IAAI"
  },
  {
    "id": 160,
    "name": "New Orleans",
    "group": "IAAI"
  },
  {
    "id": 288,
    "name": "New Orleans",
    "group": "Copart"
  },
  {
    "id": 47,
    "name": "New Orleans East",
    "group": "IAAI"
  },
  {
    "id": 97,
    "name": "Newburgh",
    "group": "IAAI"
  },
  {
    "id": 289,
    "name": "Newburgh",
    "group": "Copart"
  },
  {
    "id": 633,
    "name": "North Austin",
    "group": "Copart"
  },
  {
    "id": 290,
    "name": "North Boston",
    "group": "Copart"
  },
  {
    "id": 291,
    "name": "North Charleston",
    "group": "Copart"
  },
  {
    "id": 1,
    "name": "North Hollywood",
    "group": "IAAI"
  },
  {
    "id": 292,
    "name": "North Seattle",
    "group": "Copart"
  },
  {
    "id": 137,
    "name": "Northern Virginia",
    "group": "IAAI"
  },
  {
    "id": 293,
    "name": "Ocala",
    "group": "Copart"
  },
  {
    "id": 294,
    "name": "Ogden",
    "group": "Copart"
  },
  {
    "id": 40,
    "name": "Oklahoma City",
    "group": "IAAI"
  },
  {
    "id": 295,
    "name": "Oklahoma City",
    "group": "Copart"
  },
  {
    "id": 73,
    "name": "Omaha",
    "group": "IAAI"
  },
  {
    "id": 628,
    "name": "Omaha South",
    "group": "IAAI"
  },
  {
    "id": 170,
    "name": "Online Exclusive - Rental",
    "group": "IAAI"
  },
  {
    "id": 169,
    "name": "Online Exclusive - Work and Play",
    "group": "IAAI"
  },
  {
    "id": 144,
    "name": "Orlando",
    "group": "IAAI"
  },
  {
    "id": 297,
    "name": "Orlando North",
    "group": "Copart"
  },
  {
    "id": 298,
    "name": "Orlando South",
    "group": "Copart"
  },
  {
    "id": 151,
    "name": "Orlando-North",
    "group": "IAAI"
  },
  {
    "id": 111,
    "name": "Paducah",
    "group": "IAAI"
  },
  {
    "id": 299,
    "name": "Pasco",
    "group": "Copart"
  },
  {
    "id": 148,
    "name": "Pensacola",
    "group": "IAAI"
  },
  {
    "id": 300,
    "name": "Peoria",
    "group": "Copart"
  },
  {
    "id": 36,
    "name": "Permian Basin",
    "group": "IAAI"
  },
  {
    "id": 90,
    "name": "Philadelphia",
    "group": "IAAI"
  },
  {
    "id": 301,
    "name": "Philadelphia",
    "group": "Copart"
  },
  {
    "id": 302,
    "name": "Philadelphia East",
    "group": "Copart"
  },
  {
    "id": 540,
    "name": "Philadelphia-East",
    "group": "IAAI"
  },
  {
    "id": 10,
    "name": "Phoenix",
    "group": "IAAI"
  },
  {
    "id": 303,
    "name": "Phoenix",
    "group": "Copart"
  },
  {
    "id": 616,
    "name": "Phoenix North",
    "group": "Copart"
  },
  {
    "id": 105,
    "name": "Pittsburgh",
    "group": "IAAI"
  },
  {
    "id": 304,
    "name": "Pittsburgh East",
    "group": "Copart"
  },
  {
    "id": 305,
    "name": "Pittsburgh North",
    "group": "Copart"
  },
  {
    "id": 306,
    "name": "Pittsburgh South",
    "group": "Copart"
  },
  {
    "id": 547,
    "name": "Pittsburgh West",
    "group": "Copart"
  },
  {
    "id": 88,
    "name": "Pittsburgh-North",
    "group": "IAAI"
  },
  {
    "id": 580,
    "name": "Port Murray",
    "group": "IAAI"
  },
  {
    "id": 71,
    "name": "Portage",
    "group": "IAAI"
  },
  {
    "id": 13,
    "name": "Portland",
    "group": "IAAI"
  },
  {
    "id": 119,
    "name": "Portland - Gorham",
    "group": "IAAI"
  },
  {
    "id": 307,
    "name": "Portland North",
    "group": "Copart"
  },
  {
    "id": 613,
    "name": "Portland South",
    "group": "IAAI"
  },
  {
    "id": 308,
    "name": "Portland South",
    "group": "Copart"
  },
  {
    "id": 15,
    "name": "Portland West",
    "group": "IAAI"
  },
  {
    "id": 102,
    "name": "Providence",
    "group": "IAAI"
  },
  {
    "id": 619,
    "name": "Provo",
    "group": "IAAI"
  },
  {
    "id": 138,
    "name": "Pulaski",
    "group": "IAAI"
  },
  {
    "id": 309,
    "name": "Punta Gorda",
    "group": "Copart"
  },
  {
    "id": 585,
    "name": "Punta Gorda South",
    "group": "Copart"
  },
  {
    "id": 154,
    "name": "Raleigh",
    "group": "IAAI"
  },
  {
    "id": 310,
    "name": "Raleigh",
    "group": "Copart"
  },
  {
    "id": 564,
    "name": "Raleigh North",
    "group": "Copart"
  },
  {
    "id": 311,
    "name": "Rancho Cucamonga",
    "group": "Copart"
  },
  {
    "id": 603,
    "name": "Rapid City",
    "group": "Copart"
  },
  {
    "id": 172,
    "name": "REC RIDES - Online-Exclusive",
    "group": "IAAI"
  },
  {
    "id": 551,
    "name": "Redding",
    "group": "Copart"
  },
  {
    "id": 12,
    "name": "Reno",
    "group": "IAAI"
  },
  {
    "id": 312,
    "name": "Reno",
    "group": "Copart"
  },
  {
    "id": 558,
    "name": "Rental Rides",
    "group": "IAAI"
  },
  {
    "id": 596,
    "name": "RENTAL VEHICLE SALE",
    "group": "Copart"
  },
  {
    "id": 128,
    "name": "Richmond",
    "group": "IAAI"
  },
  {
    "id": 313,
    "name": "Richmond",
    "group": "Copart"
  },
  {
    "id": 546,
    "name": "Richmond East",
    "group": "Copart"
  },
  {
    "id": 630,
    "name": "Riverside",
    "group": "IAAI"
  },
  {
    "id": 545,
    "name": "Roanoke",
    "group": "IAAI"
  },
  {
    "id": 120,
    "name": "Rochester",
    "group": "IAAI"
  },
  {
    "id": 314,
    "name": "Rochester",
    "group": "Copart"
  },
  {
    "id": 615,
    "name": "Rutland",
    "group": "Copart"
  },
  {
    "id": 18,
    "name": "Sacramento",
    "group": "IAAI"
  },
  {
    "id": 315,
    "name": "Sacramento",
    "group": "Copart"
  },
  {
    "id": 639,
    "name": "Sacramento West",
    "group": "IAAI"
  },
  {
    "id": 23,
    "name": "Salt Lake City",
    "group": "IAAI"
  },
  {
    "id": 316,
    "name": "Salt Lake City",
    "group": "Copart"
  },
  {
    "id": 554,
    "name": "Salt Lake City 2",
    "group": "Copart"
  },
  {
    "id": 35,
    "name": "San Antonio",
    "group": "IAAI"
  },
  {
    "id": 317,
    "name": "San Antonio",
    "group": "Copart"
  },
  {
    "id": 55,
    "name": "San Antonio-South",
    "group": "IAAI"
  },
  {
    "id": 318,
    "name": "San Bernardino",
    "group": "Copart"
  },
  {
    "id": 4,
    "name": "San Diego",
    "group": "IAAI"
  },
  {
    "id": 319,
    "name": "San Diego",
    "group": "Copart"
  },
  {
    "id": 320,
    "name": "San Jose",
    "group": "Copart"
  },
  {
    "id": 621,
    "name": "Santa Clarita",
    "group": "IAAI"
  },
  {
    "id": 123,
    "name": "Savannah",
    "group": "IAAI"
  },
  {
    "id": 321,
    "name": "Savannah",
    "group": "Copart"
  },
  {
    "id": 567,
    "name": "Sayreville",
    "group": "IAAI"
  },
  {
    "id": 98,
    "name": "Scranton",
    "group": "IAAI"
  },
  {
    "id": 322,
    "name": "Scranton",
    "group": "Copart"
  },
  {
    "id": 323,
    "name": "Seaford",
    "group": "Copart"
  },
  {
    "id": 17,
    "name": "Seattle",
    "group": "IAAI"
  },
  {
    "id": 121,
    "name": "Shady Spring",
    "group": "IAAI"
  },
  {
    "id": 48,
    "name": "Shreveport",
    "group": "IAAI"
  },
  {
    "id": 324,
    "name": "Shreveport",
    "group": "Copart"
  },
  {
    "id": 325,
    "name": "Sikeston",
    "group": "Copart"
  },
  {
    "id": 26,
    "name": "Sioux Falls",
    "group": "IAAI"
  },
  {
    "id": 326,
    "name": "So Sacramento",
    "group": "Copart"
  },
  {
    "id": 328,
    "name": "Somerville",
    "group": "Copart"
  },
  {
    "id": 81,
    "name": "South Bend",
    "group": "IAAI"
  },
  {
    "id": 329,
    "name": "South Boston",
    "group": "Copart"
  },
  {
    "id": 330,
    "name": "Southern Illinois",
    "group": "Copart"
  },
  {
    "id": 85,
    "name": "Southern New Jersey",
    "group": "IAAI"
  },
  {
    "id": 641,
    "name": "Spanaway",
    "group": "Copart"
  },
  {
    "id": 331,
    "name": "Spartanburg",
    "group": "Copart"
  },
  {
    "id": 171,
    "name": "Specialty Division",
    "group": "IAAI"
  },
  {
    "id": 16,
    "name": "Spokane",
    "group": "IAAI"
  },
  {
    "id": 332,
    "name": "Spokane",
    "group": "Copart"
  },
  {
    "id": 76,
    "name": "Springfield",
    "group": "IAAI"
  },
  {
    "id": 333,
    "name": "Springfield",
    "group": "Copart"
  },
  {
    "id": 634,
    "name": "St. Cloud",
    "group": "IAAI"
  },
  {
    "id": 334,
    "name": "St. Cloud",
    "group": "Copart"
  },
  {
    "id": 72,
    "name": "St. Louis",
    "group": "IAAI"
  },
  {
    "id": 335,
    "name": "St. Louis",
    "group": "Copart"
  },
  {
    "id": 632,
    "name": "Staten Island",
    "group": "IAAI"
  },
  {
    "id": 622,
    "name": "Stockton",
    "group": "IAAI"
  },
  {
    "id": 165,
    "name": "Suffolk",
    "group": "IAAI"
  },
  {
    "id": 336,
    "name": "Sun Valley",
    "group": "Copart"
  },
  {
    "id": 94,
    "name": "Syracuse",
    "group": "IAAI"
  },
  {
    "id": 337,
    "name": "Syracuse",
    "group": "Copart"
  },
  {
    "id": 338,
    "name": "Tallahassee",
    "group": "Copart"
  },
  {
    "id": 130,
    "name": "Tampa",
    "group": "IAAI"
  },
  {
    "id": 168,
    "name": "Tampa North",
    "group": "IAAI"
  },
  {
    "id": 640,
    "name": "Tampa North",
    "group": "Copart"
  },
  {
    "id": 339,
    "name": "Tampa South",
    "group": "Copart"
  },
  {
    "id": 340,
    "name": "Tanner",
    "group": "Copart"
  },
  {
    "id": 100,
    "name": "Taunton",
    "group": "IAAI"
  },
  {
    "id": 544,
    "name": "Templeton",
    "group": "IAAI"
  },
  {
    "id": 139,
    "name": "Tidewater",
    "group": "IAAI"
  },
  {
    "id": 122,
    "name": "Tifton",
    "group": "IAAI"
  },
  {
    "id": 341,
    "name": "Tifton",
    "group": "Copart"
  },
  {
    "id": 342,
    "name": "Trenton",
    "group": "Copart"
  },
  {
    "id": 629,
    "name": "Tss Test Stage Prod",
    "group": "Copart"
  },
  {
    "id": 43,
    "name": "Tucson",
    "group": "IAAI"
  },
  {
    "id": 343,
    "name": "Tucson",
    "group": "Copart"
  },
  {
    "id": 50,
    "name": "Tulsa",
    "group": "IAAI"
  },
  {
    "id": 344,
    "name": "Tulsa",
    "group": "Copart"
  },
  {
    "id": 604,
    "name": "Unknown",
    "group": "Copart"
  },
  {
    "id": 345,
    "name": "Vallejo",
    "group": "Copart"
  },
  {
    "id": 346,
    "name": "Van Nuys",
    "group": "Copart"
  },
  {
    "id": 642,
    "name": "Vinton",
    "group": "Copart"
  },
  {
    "id": 581,
    "name": "Virtual Lane A",
    "group": "IAAI"
  },
  {
    "id": 599,
    "name": "Virtual Lane B",
    "group": "IAAI"
  },
  {
    "id": 582,
    "name": "Virtual Lane C",
    "group": "IAAI"
  },
  {
    "id": 597,
    "name": "VIX",
    "group": "Copart"
  },
  {
    "id": 347,
    "name": "Waco",
    "group": "Copart"
  },
  {
    "id": 348,
    "name": "Walton",
    "group": "Copart"
  },
  {
    "id": 349,
    "name": "Washington",
    "group": "Copart"
  },
  {
    "id": 614,
    "name": "Wayland",
    "group": "Copart"
  },
  {
    "id": 578,
    "name": "West Palm Beach",
    "group": "IAAI"
  },
  {
    "id": 350,
    "name": "West Palm Beach",
    "group": "Copart"
  },
  {
    "id": 351,
    "name": "West Warren",
    "group": "Copart"
  },
  {
    "id": 29,
    "name": "Western Colorado",
    "group": "IAAI"
  },
  {
    "id": 352,
    "name": "Wheeling",
    "group": "Copart"
  },
  {
    "id": 77,
    "name": "Wichita",
    "group": "IAAI"
  },
  {
    "id": 353,
    "name": "Wichita",
    "group": "Copart"
  },
  {
    "id": 145,
    "name": "Wilmington",
    "group": "IAAI"
  },
  {
    "id": 609,
    "name": "Windham",
    "group": "Copart"
  },
  {
    "id": 354,
    "name": "York Haven",
    "group": "Copart"
  },
  {
    "id": 116,
    "name": "York Springs",
    "group": "IAAI"
  }
];

export const RATES: Record<number, BranchRates> = {
  "1": {
    "bremerhaven": {
      "auto": 2345,
      "moto": 1215,
      "atv": 1365,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 350,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1215,
      "atv": 1365,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 350,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2345,
      "moto": 1215,
      "atv": 1365,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 350,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2845,
      "moto": 1465,
      "atv": 1615,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 350,
      "shipping": 2045
    }
  },
  "2": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2345,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 300,
      "shipping": 2045
    }
  },
  "3": {
    "bremerhaven": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 5995,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 6445,
      "moto": 4345,
      "atv": 4495,
      "pwc": 5295,
      "snow": 5295,
      "trucking": 3950,
      "shipping": 2045
    }
  },
  "4": {
    "bremerhaven": {
      "auto": 2375,
      "moto": 1239,
      "atv": 1389,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 380,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2425,
      "moto": 1239,
      "atv": 1389,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 380,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2375,
      "moto": 1239,
      "atv": 1389,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 380,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2875,
      "moto": 1489,
      "atv": 1639,
      "pwc": 1725,
      "snow": 1725,
      "trucking": 380,
      "shipping": 2045
    }
  },
  "5": {
    "bremerhaven": {
      "auto": 2255,
      "moto": 1143,
      "atv": 1293,
      "pwc": 1355,
      "snow": 1355,
      "trucking": 260,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2305,
      "moto": 1143,
      "atv": 1293,
      "pwc": 1355,
      "snow": 1355,
      "trucking": 260,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2255,
      "moto": 1143,
      "atv": 1293,
      "pwc": 1355,
      "snow": 1355,
      "trucking": 260,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2755,
      "moto": 1393,
      "atv": 1543,
      "pwc": 1605,
      "snow": 1605,
      "trucking": 260,
      "shipping": 2045
    }
  },
  "6": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2345,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 300,
      "shipping": 2045
    }
  },
  "7": {
    "bremerhaven": {
      "auto": 2345,
      "moto": 1215,
      "atv": 1365,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 350,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1215,
      "atv": 1365,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 350,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2345,
      "moto": 1215,
      "atv": 1365,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 350,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2845,
      "moto": 1465,
      "atv": 1615,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 350,
      "shipping": 2045
    }
  },
  "8": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "9": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2445,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1735,
      "atv": 1885,
      "pwc": 2045,
      "snow": 2045,
      "trucking": 750,
      "shipping": 1595
    }
  },
  "10": {
    "bremerhaven": {
      "auto": 2420,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2470,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2420,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2920,
      "moto": 1525,
      "atv": 1675,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 425,
      "shipping": 2045
    }
  },
  "11": {
    "bremerhaven": {
      "auto": 2445,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2495,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2445,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2945,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 450,
      "shipping": 2045
    }
  },
  "12": {
    "bremerhaven": {
      "auto": 2615,
      "moto": 1431,
      "atv": 1581,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 620,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2665,
      "moto": 1431,
      "atv": 1581,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 620,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2615,
      "moto": 1431,
      "atv": 1581,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 620,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3115,
      "moto": 1681,
      "atv": 1831,
      "pwc": 1965,
      "snow": 1965,
      "trucking": 620,
      "shipping": 2045
    }
  },
  "13": {
    "bremerhaven": {
      "auto": 2765,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2815,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2765,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3265,
      "moto": 1801,
      "atv": 1951,
      "pwc": 2115,
      "snow": 2115,
      "trucking": 770,
      "shipping": 2045
    }
  },
  "14": {
    "bremerhaven": {
      "auto": 2835,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1935,
      "snow": 1935,
      "trucking": 840,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2885,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1935,
      "snow": 1935,
      "trucking": 840,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2835,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1935,
      "snow": 1935,
      "trucking": 840,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3335,
      "moto": 1857,
      "atv": 2007,
      "pwc": 2185,
      "snow": 2185,
      "trucking": 840,
      "shipping": 2045
    }
  },
  "15": {
    "bremerhaven": {
      "auto": 2765,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2815,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2765,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3265,
      "moto": 1801,
      "atv": 1951,
      "pwc": 2115,
      "snow": 2115,
      "trucking": 770,
      "shipping": 2045
    }
  },
  "16": {
    "bremerhaven": {
      "auto": 2970,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3020,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2970,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3470,
      "moto": 1965,
      "atv": 2115,
      "pwc": 2320,
      "snow": 2320,
      "trucking": 975,
      "shipping": 2045
    }
  },
  "17": {
    "bremerhaven": {
      "auto": 2895,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2945,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2895,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3395,
      "moto": 1905,
      "atv": 2055,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 900,
      "shipping": 2045
    }
  },
  "18": {
    "bremerhaven": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2595,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3045,
      "moto": 1625,
      "atv": 1775,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 550,
      "shipping": 2045
    }
  },
  "19": {
    "bremerhaven": {
      "auto": 2455,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2505,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2455,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2955,
      "moto": 1553,
      "atv": 1703,
      "pwc": 1805,
      "snow": 1805,
      "trucking": 460,
      "shipping": 2045
    }
  },
  "20": {
    "bremerhaven": {
      "auto": 2465,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2515,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2465,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2965,
      "moto": 1561,
      "atv": 1711,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 470,
      "shipping": 2045
    }
  },
  "21": {
    "bremerhaven": {
      "auto": 2420,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2470,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2420,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2920,
      "moto": 1525,
      "atv": 1675,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 425,
      "shipping": 2045
    }
  },
  "22": {
    "bremerhaven": {
      "auto": 3115,
      "moto": 1831,
      "atv": 1981,
      "pwc": 2215,
      "snow": 2215,
      "trucking": 1120,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3165,
      "moto": 1831,
      "atv": 1981,
      "pwc": 2215,
      "snow": 2215,
      "trucking": 1120,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 3115,
      "moto": 1831,
      "atv": 1981,
      "pwc": 2215,
      "snow": 2215,
      "trucking": 1120,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3615,
      "moto": 2081,
      "atv": 2231,
      "pwc": 2465,
      "snow": 2465,
      "trucking": 1120,
      "shipping": 2045
    }
  },
  "23": {
    "bremerhaven": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2695,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3145,
      "moto": 1705,
      "atv": 1855,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 650,
      "shipping": 2045
    }
  },
  "24": {
    "bremerhaven": {
      "auto": 3295,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3345,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 3295,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3795,
      "moto": 2225,
      "atv": 2375,
      "pwc": 2645,
      "snow": 2645,
      "trucking": 1300,
      "shipping": 2045
    }
  },
  "25": {
    "bremerhaven": {
      "auto": 3295,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3345,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 3295,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3795,
      "moto": 2225,
      "atv": 2375,
      "pwc": 2645,
      "snow": 2645,
      "trucking": 1300,
      "shipping": 2045
    }
  },
  "26": {
    "bremerhaven": {
      "auto": 2395,
      "moto": 1565,
      "atv": 1715,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 850,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2545,
      "moto": 1565,
      "atv": 1715,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 850,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2395,
      "moto": 1565,
      "atv": 1715,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 850,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2895,
      "moto": 1815,
      "atv": 1965,
      "pwc": 2145,
      "snow": 2145,
      "trucking": 850,
      "shipping": 1595
    }
  },
  "27": {
    "bremerhaven": {
      "auto": 2495,
      "moto": 1645,
      "atv": 1795,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 950,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2645,
      "moto": 1645,
      "atv": 1795,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 950,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2495,
      "moto": 1645,
      "atv": 1795,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 950,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2995,
      "moto": 1895,
      "atv": 2045,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 950,
      "shipping": 1595
    }
  },
  "28": {
    "bremerhaven": {
      "auto": 2385,
      "moto": 1557,
      "atv": 1707,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 840,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2535,
      "moto": 1557,
      "atv": 1707,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 840,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2385,
      "moto": 1557,
      "atv": 1707,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 840,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2885,
      "moto": 1807,
      "atv": 1957,
      "pwc": 2135,
      "snow": 2135,
      "trucking": 840,
      "shipping": 1595
    }
  },
  "29": {
    "bremerhaven": {
      "auto": 3045,
      "moto": 2055,
      "atv": 2205,
      "pwc": 2545,
      "snow": 2545,
      "trucking": 1500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 3195,
      "moto": 2055,
      "atv": 2205,
      "pwc": 2545,
      "snow": 2545,
      "trucking": 1500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 3045,
      "moto": 2055,
      "atv": 2205,
      "pwc": 2545,
      "snow": 2545,
      "trucking": 1500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 3545,
      "moto": 2305,
      "atv": 2455,
      "pwc": 2795,
      "snow": 2795,
      "trucking": 1500,
      "shipping": 1595
    }
  },
  "30": {
    "bremerhaven": {
      "auto": 4645,
      "moto": 3025,
      "atv": 3175,
      "pwc": 3745,
      "snow": 3745,
      "trucking": 2650,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 4695,
      "moto": 3025,
      "atv": 3175,
      "pwc": 3745,
      "snow": 3745,
      "trucking": 2650,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 4645,
      "moto": 3025,
      "atv": 3175,
      "pwc": 3745,
      "snow": 3745,
      "trucking": 2650,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 5145,
      "moto": 3275,
      "atv": 3425,
      "pwc": 3995,
      "snow": 3995,
      "trucking": 2650,
      "shipping": 2045
    }
  },
  "31": {
    "bremerhaven": {
      "auto": 2395,
      "moto": 1565,
      "atv": 1715,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 850,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2545,
      "moto": 1565,
      "atv": 1715,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 850,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2395,
      "moto": 1565,
      "atv": 1715,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 850,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2895,
      "moto": 1815,
      "atv": 1965,
      "pwc": 2145,
      "snow": 2145,
      "trucking": 850,
      "shipping": 1595
    }
  },
  "32": {
    "bremerhaven": {
      "auto": 2745,
      "moto": 1845,
      "atv": 1995,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2895,
      "moto": 1845,
      "atv": 1995,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2745,
      "moto": 1845,
      "atv": 1995,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 3245,
      "moto": 2095,
      "atv": 2245,
      "pwc": 2495,
      "snow": 2495,
      "trucking": 1200,
      "shipping": 1595
    }
  },
  "33": {
    "bremerhaven": {
      "auto": 2120,
      "moto": 1315,
      "atv": 1465,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2270,
      "moto": 1315,
      "atv": 1465,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2120,
      "moto": 1315,
      "atv": 1465,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2620,
      "moto": 1565,
      "atv": 1715,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 575,
      "shipping": 1595
    }
  },
  "34": {
    "bremerhaven": {
      "auto": 2025,
      "moto": 1269,
      "atv": 1419,
      "pwc": 1525,
      "snow": 1525,
      "trucking": 480,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2175,
      "moto": 1269,
      "atv": 1419,
      "pwc": 1525,
      "snow": 1525,
      "trucking": 480,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2025,
      "moto": 1269,
      "atv": 1419,
      "pwc": 1525,
      "snow": 1525,
      "trucking": 480,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2525,
      "moto": 1519,
      "atv": 1669,
      "pwc": 1775,
      "snow": 1775,
      "trucking": 480,
      "shipping": 1595
    }
  },
  "35": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "36": {
    "bremerhaven": {
      "auto": 2165,
      "moto": 1381,
      "atv": 1531,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 620,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2315,
      "moto": 1381,
      "atv": 1531,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 620,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2165,
      "moto": 1381,
      "atv": 1531,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 620,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2665,
      "moto": 1631,
      "atv": 1781,
      "pwc": 1915,
      "snow": 1915,
      "trucking": 620,
      "shipping": 1595
    }
  },
  "37": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "38": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1487,
      "atv": 1637,
      "pwc": 1735,
      "snow": 1735,
      "trucking": 440,
      "shipping": 1595
    }
  },
  "39": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1415,
      "atv": 1565,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1415,
      "atv": 1565,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1415,
      "atv": 1565,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1665,
      "atv": 1815,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "40": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "41": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "42": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1695,
      "atv": 1845,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "43": {
    "bremerhaven": {
      "auto": 2530,
      "moto": 1363,
      "atv": 1513,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 535,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2580,
      "moto": 1363,
      "atv": 1513,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 535,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2530,
      "moto": 1363,
      "atv": 1513,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 535,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3030,
      "moto": 1613,
      "atv": 1763,
      "pwc": 1880,
      "snow": 1880,
      "trucking": 535,
      "shipping": 2045
    }
  },
  "44": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "45": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "46": {
    "bremerhaven": {
      "auto": 2195,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2345,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2195,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2695,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 650,
      "shipping": 1595
    }
  },
  "47": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "48": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "49": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1695,
      "atv": 1845,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "50": {
    "bremerhaven": {
      "auto": 2185,
      "moto": 1397,
      "atv": 1547,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 640,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2335,
      "moto": 1397,
      "atv": 1547,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 640,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2185,
      "moto": 1397,
      "atv": 1547,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 640,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2685,
      "moto": 1647,
      "atv": 1797,
      "pwc": 1935,
      "snow": 1935,
      "trucking": 640,
      "shipping": 1595
    }
  },
  "51": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1695,
      "atv": 1845,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "52": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "53": {
    "bremerhaven": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 1975,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2325,
      "moto": 1359,
      "atv": 1509,
      "pwc": 1575,
      "snow": 1575,
      "trucking": 280,
      "shipping": 1595
    }
  },
  "54": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1595
    }
  },
  "55": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "56": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1595
    }
  },
  "57": {
    "bremerhaven": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 1975,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2325,
      "moto": 1359,
      "atv": 1509,
      "pwc": 1575,
      "snow": 1575,
      "trucking": 280,
      "shipping": 1595
    }
  },
  "58": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "59": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1457,
      "atv": 1607,
      "pwc": 1735,
      "snow": 1735,
      "trucking": 440,
      "shipping": 1595
    }
  },
  "60": {
    "bremerhaven": {
      "auto": 2215,
      "moto": 1501,
      "atv": 1651,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 770,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1501,
      "atv": 1651,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 770,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2215,
      "moto": 1501,
      "atv": 1651,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 770,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2715,
      "moto": 1751,
      "atv": 1901,
      "pwc": 2065,
      "snow": 2065,
      "trucking": 770,
      "shipping": 1495
    }
  },
  "61": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1495
    }
  },
  "62": {
    "bremerhaven": {
      "auto": 1975,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2125,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1975,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2475,
      "moto": 1479,
      "atv": 1629,
      "pwc": 1725,
      "snow": 1725,
      "trucking": 430,
      "shipping": 1595
    }
  },
  "63": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "64": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "65": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "66": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1495
    }
  },
  "67": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1495
    }
  },
  "68": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1595
    }
  },
  "69": {
    "bremerhaven": {
      "auto": 2020,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2170,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2020,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2520,
      "moto": 1515,
      "atv": 1665,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 475,
      "shipping": 1595
    }
  },
  "70": {
    "bremerhaven": {
      "auto": 2095,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2245,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2095,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2595,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1595
    }
  },
  "71": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1595
    }
  },
  "72": {
    "bremerhaven": {
      "auto": 1955,
      "moto": 1213,
      "atv": 1363,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2105,
      "moto": 1213,
      "atv": 1363,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1955,
      "moto": 1213,
      "atv": 1363,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2455,
      "moto": 1463,
      "atv": 1613,
      "pwc": 1705,
      "snow": 1705,
      "trucking": 410,
      "shipping": 1595
    }
  },
  "73": {
    "bremerhaven": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2370,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2720,
      "moto": 1675,
      "atv": 1825,
      "pwc": 1970,
      "snow": 1970,
      "trucking": 675,
      "shipping": 1595
    }
  },
  "74": {
    "bremerhaven": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2320,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2670,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1595
    }
  },
  "75": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1705,
      "atv": 1855,
      "pwc": 2045,
      "snow": 2045,
      "trucking": 750,
      "shipping": 1595
    }
  },
  "76": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "77": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1705,
      "atv": 1855,
      "pwc": 2045,
      "snow": 2045,
      "trucking": 750,
      "shipping": 1595
    }
  },
  "78": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "79": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "80": {
    "bremerhaven": {
      "auto": 1845,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 1995,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1845,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2345,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 300,
      "shipping": 1595
    }
  },
  "81": {
    "bremerhaven": {
      "auto": 1955,
      "moto": 1213,
      "atv": 1363,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2105,
      "moto": 1213,
      "atv": 1363,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1955,
      "moto": 1213,
      "atv": 1363,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2455,
      "moto": 1463,
      "atv": 1613,
      "pwc": 1705,
      "snow": 1705,
      "trucking": 410,
      "shipping": 1595
    }
  },
  "82": {
    "bremerhaven": {
      "auto": 1695,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1845,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1695,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2195,
      "moto": 1335,
      "atv": 1485,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 250,
      "shipping": 1495
    }
  },
  "83": {
    "bremerhaven": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2055,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2405,
      "moto": 1503,
      "atv": 1653,
      "pwc": 1755,
      "snow": 1755,
      "trucking": 460,
      "shipping": 1495
    }
  },
  "84": {
    "bremerhaven": {
      "auto": 1695,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1845,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1695,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2195,
      "moto": 1335,
      "atv": 1485,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 250,
      "shipping": 1495
    }
  },
  "85": {
    "bremerhaven": {
      "auto": 1745,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1895,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1745,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2245,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 300,
      "shipping": 1495
    }
  },
  "86": {
    "bremerhaven": {
      "auto": 1805,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1955,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1805,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2305,
      "moto": 1423,
      "atv": 1573,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 360,
      "shipping": 1495
    }
  },
  "87": {
    "bremerhaven": {
      "auto": 1695,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1845,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1695,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2195,
      "moto": 1335,
      "atv": 1485,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 250,
      "shipping": 1495
    }
  },
  "88": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "89": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "90": {
    "bremerhaven": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1935,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2285,
      "moto": 1407,
      "atv": 1557,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 340,
      "shipping": 1495
    }
  },
  "91": {
    "bremerhaven": {
      "auto": 1775,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1925,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1775,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2275,
      "moto": 1399,
      "atv": 1549,
      "pwc": 1625,
      "snow": 1625,
      "trucking": 330,
      "shipping": 1495
    }
  },
  "92": {
    "bremerhaven": {
      "auto": 2035,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2185,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2035,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2535,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 590,
      "shipping": 1495
    }
  },
  "93": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "94": {
    "bremerhaven": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2025,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2375,
      "moto": 1479,
      "atv": 1629,
      "pwc": 1725,
      "snow": 1725,
      "trucking": 430,
      "shipping": 1495
    }
  },
  "95": {
    "bremerhaven": {
      "auto": 2055,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2205,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2055,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2555,
      "moto": 1623,
      "atv": 1773,
      "pwc": 1905,
      "snow": 1905,
      "trucking": 610,
      "shipping": 1495
    }
  },
  "96": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "97": {
    "bremerhaven": {
      "auto": 1765,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1915,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1765,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2265,
      "moto": 1391,
      "atv": 1541,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 320,
      "shipping": 1495
    }
  },
  "98": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "99": {
    "bremerhaven": {
      "auto": 1775,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1925,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1775,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2275,
      "moto": 1399,
      "atv": 1549,
      "pwc": 1625,
      "snow": 1625,
      "trucking": 330,
      "shipping": 1495
    }
  },
  "100": {
    "bremerhaven": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2055,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2405,
      "moto": 1503,
      "atv": 1653,
      "pwc": 1755,
      "snow": 1755,
      "trucking": 460,
      "shipping": 1495
    }
  },
  "101": {
    "bremerhaven": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2080,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2430,
      "moto": 1523,
      "atv": 1673,
      "pwc": 1780,
      "snow": 1780,
      "trucking": 485,
      "shipping": 1495
    }
  },
  "102": {
    "bremerhaven": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2080,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2430,
      "moto": 1523,
      "atv": 1673,
      "pwc": 1780,
      "snow": 1780,
      "trucking": 485,
      "shipping": 1495
    }
  },
  "103": {
    "bremerhaven": {
      "auto": 2020,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2170,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2020,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2520,
      "moto": 1595,
      "atv": 1745,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 575,
      "shipping": 1495
    }
  },
  "104": {
    "bremerhaven": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1935,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2285,
      "moto": 1407,
      "atv": 1557,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 340,
      "shipping": 1495
    }
  },
  "105": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "106": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1495
    }
  },
  "107": {
    "bremerhaven": {
      "auto": 2055,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2205,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2055,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2555,
      "moto": 1623,
      "atv": 1773,
      "pwc": 1905,
      "snow": 1905,
      "trucking": 610,
      "shipping": 1495
    }
  },
  "108": {
    "bremerhaven": {
      "auto": 1915,
      "moto": 1181,
      "atv": 1331,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 370,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2065,
      "moto": 1181,
      "atv": 1331,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 370,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1915,
      "moto": 1181,
      "atv": 1331,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 370,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2415,
      "moto": 1431,
      "atv": 1581,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 370,
      "shipping": 1595
    }
  },
  "109": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "110": {
    "bremerhaven": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2120,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2470,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1495
    }
  },
  "111": {
    "bremerhaven": {
      "auto": 2030,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2180,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2030,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2530,
      "moto": 1603,
      "atv": 1753,
      "pwc": 1880,
      "snow": 1880,
      "trucking": 585,
      "shipping": 1495
    }
  },
  "112": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "113": {
    "bremerhaven": {
      "auto": 1915,
      "moto": 1181,
      "atv": 1331,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 370,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2065,
      "moto": 1181,
      "atv": 1331,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 370,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1915,
      "moto": 1181,
      "atv": 1331,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 370,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2415,
      "moto": 1431,
      "atv": 1581,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 370,
      "shipping": 1595
    }
  },
  "114": {
    "bremerhaven": {
      "auto": 1925,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2075,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1925,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2425,
      "moto": 1439,
      "atv": 1589,
      "pwc": 1675,
      "snow": 1675,
      "trucking": 380,
      "shipping": 1595
    }
  },
  "115": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "116": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "117": {
    "bremerhaven": {
      "auto": 1895,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2045,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1895,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2395,
      "moto": 1495,
      "atv": 1645,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 450,
      "shipping": 1495
    }
  },
  "118": {
    "bremerhaven": {
      "auto": 1895,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2045,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1895,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2395,
      "moto": 1495,
      "atv": 1645,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 450,
      "shipping": 1495
    }
  },
  "119": {
    "bremerhaven": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2120,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2470,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1495
    }
  },
  "120": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "121": {
    "bremerhaven": {
      "auto": 2095,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2245,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2095,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2595,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 650,
      "shipping": 1495
    }
  },
  "122": {
    "bremerhaven": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1990,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2340,
      "moto": 1451,
      "atv": 1601,
      "pwc": 1690,
      "snow": 1690,
      "trucking": 395,
      "shipping": 1495
    }
  },
  "123": {
    "bremerhaven": {
      "auto": 1715,
      "moto": 1101,
      "atv": 1251,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1865,
      "moto": 1101,
      "atv": 1251,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1715,
      "moto": 1101,
      "atv": 1251,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2215,
      "moto": 1351,
      "atv": 1501,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 270,
      "shipping": 1495
    }
  },
  "124": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "125": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "126": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "127": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "128": {
    "bremerhaven": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2025,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2375,
      "moto": 1479,
      "atv": 1629,
      "pwc": 1725,
      "snow": 1725,
      "trucking": 430,
      "shipping": 1495
    }
  },
  "129": {
    "bremerhaven": {
      "auto": 1780,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1930,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1780,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2280,
      "moto": 1403,
      "atv": 1553,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 335,
      "shipping": 1495
    }
  },
  "130": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "131": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "132": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "133": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "134": {
    "bremerhaven": {
      "auto": 1810,
      "moto": 1177,
      "atv": 1327,
      "pwc": 1410,
      "snow": 1410,
      "trucking": 365,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1960,
      "moto": 1177,
      "atv": 1327,
      "pwc": 1410,
      "snow": 1410,
      "trucking": 365,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1810,
      "moto": 1177,
      "atv": 1327,
      "pwc": 1410,
      "snow": 1410,
      "trucking": 365,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2310,
      "moto": 1427,
      "atv": 1577,
      "pwc": 1660,
      "snow": 1660,
      "trucking": 365,
      "shipping": 1495
    }
  },
  "135": {
    "bremerhaven": {
      "auto": 1850,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2000,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1850,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2350,
      "moto": 1459,
      "atv": 1609,
      "pwc": 1700,
      "snow": 1700,
      "trucking": 405,
      "shipping": 1495
    }
  },
  "136": {
    "bremerhaven": {
      "auto": 1850,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2000,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1850,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2350,
      "moto": 1459,
      "atv": 1609,
      "pwc": 1700,
      "snow": 1700,
      "trucking": 405,
      "shipping": 1495
    }
  },
  "137": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "138": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "139": {
    "bremerhaven": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2025,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2375,
      "moto": 1479,
      "atv": 1629,
      "pwc": 1725,
      "snow": 1725,
      "trucking": 430,
      "shipping": 1495
    }
  },
  "140": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "141": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "142": {
    "bremerhaven": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2090,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2440,
      "moto": 1531,
      "atv": 1681,
      "pwc": 1790,
      "snow": 1790,
      "trucking": 495,
      "shipping": 1495
    }
  },
  "143": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "144": {
    "bremerhaven": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2020,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2370,
      "moto": 1475,
      "atv": 1625,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 425,
      "shipping": 1495
    }
  },
  "145": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "146": {
    "bremerhaven": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1990,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2340,
      "moto": 1451,
      "atv": 1601,
      "pwc": 1690,
      "snow": 1690,
      "trucking": 395,
      "shipping": 1495
    }
  },
  "147": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "148": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "149": {
    "bremerhaven": {
      "auto": 2030,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2180,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2030,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2530,
      "moto": 1603,
      "atv": 1753,
      "pwc": 1880,
      "snow": 1880,
      "trucking": 585,
      "shipping": 1495
    }
  },
  "150": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "151": {
    "bremerhaven": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2020,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2370,
      "moto": 1475,
      "atv": 1625,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 425,
      "shipping": 1495
    }
  },
  "152": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "153": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "154": {
    "bremerhaven": {
      "auto": 1880,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2030,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1880,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2380,
      "moto": 1483,
      "atv": 1633,
      "pwc": 1730,
      "snow": 1730,
      "trucking": 435,
      "shipping": 1495
    }
  },
  "155": {
    "bremerhaven": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2090,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2440,
      "moto": 1531,
      "atv": 1681,
      "pwc": 1790,
      "snow": 1790,
      "trucking": 495,
      "shipping": 1495
    }
  },
  "156": {
    "bremerhaven": {
      "auto": 1920,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2070,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1920,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2420,
      "moto": 1515,
      "atv": 1665,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 475,
      "shipping": 1495
    }
  },
  "157": {
    "bremerhaven": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2145,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2495,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1495
    }
  },
  "158": {
    "bremerhaven": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2145,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2495,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1495
    }
  },
  "159": {
    "bremerhaven": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2145,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2495,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1495
    }
  },
  "160": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "161": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "162": {
    "bremerhaven": {
      "auto": 1820,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1970,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1820,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2320,
      "moto": 1435,
      "atv": 1585,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 375,
      "shipping": 1495
    }
  },
  "163": {
    "bremerhaven": {
      "auto": 1800,
      "moto": 1169,
      "atv": 1319,
      "pwc": 1400,
      "snow": 1400,
      "trucking": 355,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1950,
      "moto": 1169,
      "atv": 1319,
      "pwc": 1400,
      "snow": 1400,
      "trucking": 355,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1800,
      "moto": 1169,
      "atv": 1319,
      "pwc": 1400,
      "snow": 1400,
      "trucking": 355,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2300,
      "moto": 1419,
      "atv": 1569,
      "pwc": 1650,
      "snow": 1650,
      "trucking": 355,
      "shipping": 1495
    }
  },
  "164": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "165": {
    "bremerhaven": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2025,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2375,
      "moto": 1479,
      "atv": 1629,
      "pwc": 1725,
      "snow": 1725,
      "trucking": 430,
      "shipping": 1495
    }
  },
  "166": {
    "bremerhaven": {
      "auto": 1850,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2000,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1850,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2350,
      "moto": 1459,
      "atv": 1609,
      "pwc": 1700,
      "snow": 1700,
      "trucking": 405,
      "shipping": 1495
    }
  },
  "167": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "168": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "169": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "170": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "171": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "172": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "173": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "175": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "176": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "177": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2445,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1735,
      "atv": 1885,
      "pwc": 2045,
      "snow": 2045,
      "trucking": 750,
      "shipping": 1595
    }
  },
  "178": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "179": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1695,
      "atv": 1845,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "180": {
    "bremerhaven": {
      "auto": 4645,
      "moto": 3025,
      "atv": 3175,
      "pwc": 3745,
      "snow": 3745,
      "trucking": 2650,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 4695,
      "moto": 3025,
      "atv": 3175,
      "pwc": 3745,
      "snow": 3745,
      "trucking": 2650,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 4645,
      "moto": 3025,
      "atv": 3175,
      "pwc": 3745,
      "snow": 3745,
      "trucking": 2650,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 5145,
      "moto": 3275,
      "atv": 3425,
      "pwc": 3995,
      "snow": 3995,
      "trucking": 2650,
      "shipping": 2045
    }
  },
  "181": {
    "bremerhaven": {
      "auto": 2135,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2285,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2135,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2635,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 590,
      "shipping": 1595
    }
  },
  "182": {
    "bremerhaven": {
      "auto": 2495,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 500,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2545,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 500,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2495,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 500,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2995,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 500,
      "shipping": 2045
    }
  },
  "183": {
    "bremerhaven": {
      "auto": 2095,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2245,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2095,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2595,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1595
    }
  },
  "184": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "185": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "186": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "187": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "188": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "189": {
    "bremerhaven": {
      "auto": 2370,
      "moto": 1235,
      "atv": 1385,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 375,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2420,
      "moto": 1235,
      "atv": 1385,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 375,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2370,
      "moto": 1235,
      "atv": 1385,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 375,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2870,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 375,
      "shipping": 2045
    }
  },
  "190": {
    "bremerhaven": {
      "auto": 1855,
      "moto": 1183,
      "atv": 1333,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2005,
      "moto": 1183,
      "atv": 1333,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1855,
      "moto": 1183,
      "atv": 1333,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2355,
      "moto": 1433,
      "atv": 1583,
      "pwc": 1705,
      "snow": 1705,
      "trucking": 410,
      "shipping": 1495
    }
  },
  "191": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "192": {
    "bremerhaven": {
      "auto": 3295,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3345,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 3295,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3795,
      "moto": 2225,
      "atv": 2375,
      "pwc": 2645,
      "snow": 2645,
      "trucking": 1300,
      "shipping": 2045
    }
  },
  "193": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "194": {
    "bremerhaven": {
      "auto": 3115,
      "moto": 1831,
      "atv": 1981,
      "pwc": 2215,
      "snow": 2215,
      "trucking": 1120,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3165,
      "moto": 1831,
      "atv": 1981,
      "pwc": 2215,
      "snow": 2215,
      "trucking": 1120,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 3115,
      "moto": 1831,
      "atv": 1981,
      "pwc": 2215,
      "snow": 2215,
      "trucking": 1120,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3615,
      "moto": 2081,
      "atv": 2231,
      "pwc": 2465,
      "snow": 2465,
      "trucking": 1120,
      "shipping": 2045
    }
  },
  "195": {
    "bremerhaven": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2080,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2430,
      "moto": 1523,
      "atv": 1673,
      "pwc": 1780,
      "snow": 1780,
      "trucking": 485,
      "shipping": 1495
    }
  },
  "196": {
    "bremerhaven": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2020,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2370,
      "moto": 1475,
      "atv": 1625,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 425,
      "shipping": 1495
    }
  },
  "197": {
    "bremerhaven": {
      "auto": 2745,
      "moto": 1845,
      "atv": 1995,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2895,
      "moto": 1845,
      "atv": 1995,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2745,
      "moto": 1845,
      "atv": 1995,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 3245,
      "moto": 2095,
      "atv": 2245,
      "pwc": 2495,
      "snow": 2495,
      "trucking": 1200,
      "shipping": 1595
    }
  },
  "198": {
    "bremerhaven": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2055,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2405,
      "moto": 1503,
      "atv": 1653,
      "pwc": 1755,
      "snow": 1755,
      "trucking": 460,
      "shipping": 1495
    }
  },
  "199": {
    "bremerhaven": {
      "auto": 2055,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2205,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2055,
      "moto": 1373,
      "atv": 1523,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 610,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2555,
      "moto": 1623,
      "atv": 1773,
      "pwc": 1905,
      "snow": 1905,
      "trucking": 610,
      "shipping": 1495
    }
  },
  "200": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "201": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "202": {
    "bremerhaven": {
      "auto": 1880,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2030,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1880,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2380,
      "moto": 1483,
      "atv": 1633,
      "pwc": 1730,
      "snow": 1730,
      "trucking": 435,
      "shipping": 1495
    }
  },
  "203": {
    "bremerhaven": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2145,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2495,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1495
    }
  },
  "204": {
    "bremerhaven": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2145,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2495,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1495
    }
  },
  "205": {
    "bremerhaven": {
      "auto": 2370,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 825,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2520,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 825,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2370,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 825,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2870,
      "moto": 1795,
      "atv": 1945,
      "pwc": 2120,
      "snow": 2120,
      "trucking": 825,
      "shipping": 1595
    }
  },
  "206": {
    "bremerhaven": {
      "auto": 2445,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 900,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2595,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 900,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2445,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 900,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2945,
      "moto": 1825,
      "atv": 1975,
      "pwc": 2195,
      "snow": 2195,
      "trucking": 900,
      "shipping": 1595
    }
  },
  "207": {
    "bremerhaven": {
      "auto": 2115,
      "moto": 1341,
      "atv": 1491,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 570,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2265,
      "moto": 1341,
      "atv": 1491,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 570,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2115,
      "moto": 1341,
      "atv": 1491,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 570,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2615,
      "moto": 1591,
      "atv": 1741,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 570,
      "shipping": 1595
    }
  },
  "208": {
    "bremerhaven": {
      "auto": 1800,
      "moto": 1169,
      "atv": 1319,
      "pwc": 1400,
      "snow": 1400,
      "trucking": 355,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1950,
      "moto": 1169,
      "atv": 1319,
      "pwc": 1400,
      "snow": 1400,
      "trucking": 355,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1800,
      "moto": 1169,
      "atv": 1319,
      "pwc": 1400,
      "snow": 1400,
      "trucking": 355,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2300,
      "moto": 1419,
      "atv": 1569,
      "pwc": 1650,
      "snow": 1650,
      "trucking": 355,
      "shipping": 1495
    }
  },
  "209": {
    "bremerhaven": {
      "auto": 1925,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2075,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1925,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2425,
      "moto": 1439,
      "atv": 1589,
      "pwc": 1675,
      "snow": 1675,
      "trucking": 380,
      "shipping": 1595
    }
  },
  "210": {
    "bremerhaven": {
      "auto": 2025,
      "moto": 1269,
      "atv": 1419,
      "pwc": 1525,
      "snow": 1525,
      "trucking": 480,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2175,
      "moto": 1269,
      "atv": 1419,
      "pwc": 1525,
      "snow": 1525,
      "trucking": 480,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2025,
      "moto": 1269,
      "atv": 1419,
      "pwc": 1525,
      "snow": 1525,
      "trucking": 480,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2525,
      "moto": 1519,
      "atv": 1669,
      "pwc": 1775,
      "snow": 1775,
      "trucking": 480,
      "shipping": 1595
    }
  },
  "211": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "212": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1595
    }
  },
  "214": {
    "bremerhaven": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2320,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2670,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1595
    }
  },
  "215": {
    "bremerhaven": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2595,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3045,
      "moto": 1625,
      "atv": 1775,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 550,
      "shipping": 2045
    }
  },
  "216": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1595
    }
  },
  "217": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1595
    }
  },
  "218": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "219": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "220": {
    "bremerhaven": {
      "auto": 2385,
      "moto": 1557,
      "atv": 1707,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 840,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2535,
      "moto": 1557,
      "atv": 1707,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 840,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2385,
      "moto": 1557,
      "atv": 1707,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 840,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2885,
      "moto": 1807,
      "atv": 1957,
      "pwc": 2135,
      "snow": 2135,
      "trucking": 840,
      "shipping": 1595
    }
  },
  "222": {
    "bremerhaven": {
      "auto": 2370,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 825,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2520,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 825,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2370,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 825,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2870,
      "moto": 1795,
      "atv": 1945,
      "pwc": 2120,
      "snow": 2120,
      "trucking": 825,
      "shipping": 1595
    }
  },
  "223": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "224": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1355,
      "atv": 1505,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1355,
      "atv": 1505,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1355,
      "atv": 1505,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1605,
      "atv": 1755,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1495
    }
  },
  "225": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1415,
      "atv": 1565,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1415,
      "atv": 1565,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1415,
      "atv": 1565,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1665,
      "atv": 1815,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "226": {
    "bremerhaven": {
      "auto": 2835,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1935,
      "snow": 1935,
      "trucking": 840,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2885,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1935,
      "snow": 1935,
      "trucking": 840,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2835,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1935,
      "snow": 1935,
      "trucking": 840,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3335,
      "moto": 1857,
      "atv": 2007,
      "pwc": 2185,
      "snow": 2185,
      "trucking": 840,
      "shipping": 2045
    }
  },
  "227": {
    "bremerhaven": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2080,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2430,
      "moto": 1523,
      "atv": 1673,
      "pwc": 1780,
      "snow": 1780,
      "trucking": 485,
      "shipping": 1495
    }
  },
  "228": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1695,
      "atv": 1845,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "229": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1495
    }
  },
  "230": {
    "bremerhaven": {
      "auto": 1875,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2025,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1875,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2375,
      "moto": 1399,
      "atv": 1549,
      "pwc": 1625,
      "snow": 1625,
      "trucking": 330,
      "shipping": 1595
    }
  },
  "231": {
    "bremerhaven": {
      "auto": 2420,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2470,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2420,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2920,
      "moto": 1525,
      "atv": 1675,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 425,
      "shipping": 2045
    }
  },
  "232": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "233": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1487,
      "atv": 1637,
      "pwc": 1735,
      "snow": 1735,
      "trucking": 440,
      "shipping": 1595
    }
  },
  "234": {
    "bremerhaven": {
      "auto": 1745,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1895,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1745,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2245,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 300,
      "shipping": 1495
    }
  },
  "235": {
    "bremerhaven": {
      "auto": 2895,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2945,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2895,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3395,
      "moto": 1905,
      "atv": 2055,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 900,
      "shipping": 2045
    }
  },
  "237": {
    "bremerhaven": {
      "auto": 1920,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2070,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1920,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2420,
      "moto": 1435,
      "atv": 1585,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 375,
      "shipping": 1595
    }
  },
  "238": {
    "bremerhaven": {
      "auto": 1915,
      "moto": 1261,
      "atv": 1411,
      "pwc": 1515,
      "snow": 1515,
      "trucking": 470,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2065,
      "moto": 1261,
      "atv": 1411,
      "pwc": 1515,
      "snow": 1515,
      "trucking": 470,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1915,
      "moto": 1261,
      "atv": 1411,
      "pwc": 1515,
      "snow": 1515,
      "trucking": 470,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2415,
      "moto": 1511,
      "atv": 1661,
      "pwc": 1765,
      "snow": 1765,
      "trucking": 470,
      "shipping": 1495
    }
  },
  "239": {
    "bremerhaven": {
      "auto": 1825,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1975,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1825,
      "moto": 1189,
      "atv": 1339,
      "pwc": 1425,
      "snow": 1425,
      "trucking": 380,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2325,
      "moto": 1439,
      "atv": 1589,
      "pwc": 1675,
      "snow": 1675,
      "trucking": 380,
      "shipping": 1495
    }
  },
  "240": {
    "bremerhaven": {
      "auto": 1775,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1925,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1775,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2275,
      "moto": 1399,
      "atv": 1549,
      "pwc": 1625,
      "snow": 1625,
      "trucking": 330,
      "shipping": 1495
    }
  },
  "241": {
    "bremerhaven": {
      "auto": 2455,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2505,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2455,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2955,
      "moto": 1553,
      "atv": 1703,
      "pwc": 1805,
      "snow": 1805,
      "trucking": 460,
      "shipping": 2045
    }
  },
  "242": {
    "bremerhaven": {
      "auto": 2455,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2505,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2455,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2955,
      "moto": 1553,
      "atv": 1703,
      "pwc": 1805,
      "snow": 1805,
      "trucking": 460,
      "shipping": 2045
    }
  },
  "243": {
    "bremerhaven": {
      "auto": 3295,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3345,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 3295,
      "moto": 1975,
      "atv": 2125,
      "pwc": 2395,
      "snow": 2395,
      "trucking": 1300,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3795,
      "moto": 2225,
      "atv": 2375,
      "pwc": 2645,
      "snow": 2645,
      "trucking": 1300,
      "shipping": 2045
    }
  },
  "244": {
    "bremerhaven": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 5995,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 6445,
      "moto": 4345,
      "atv": 4495,
      "pwc": 5295,
      "snow": 5295,
      "trucking": 3950,
      "shipping": 2045
    }
  },
  "245": {
    "bremerhaven": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 5995,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 6445,
      "moto": 4345,
      "atv": 4495,
      "pwc": 5295,
      "snow": 5295,
      "trucking": 3950,
      "shipping": 2045
    }
  },
  "246": {
    "bremerhaven": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 5995,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 6445,
      "moto": 4345,
      "atv": 4495,
      "pwc": 5295,
      "snow": 5295,
      "trucking": 3950,
      "shipping": 2045
    }
  },
  "247": {
    "bremerhaven": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 5995,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 5945,
      "moto": 4095,
      "atv": 4245,
      "pwc": 5045,
      "snow": 5045,
      "trucking": 3950,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 6445,
      "moto": 4345,
      "atv": 4495,
      "pwc": 5295,
      "snow": 5295,
      "trucking": 3950,
      "shipping": 2045
    }
  },
  "248": {
    "bremerhaven": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 1975,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2325,
      "moto": 1359,
      "atv": 1509,
      "pwc": 1575,
      "snow": 1575,
      "trucking": 280,
      "shipping": 1595
    }
  },
  "249": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "250": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "251": {
    "bremerhaven": {
      "auto": 1845,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 1995,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1845,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2345,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 300,
      "shipping": 1595
    }
  },
  "252": {
    "bremerhaven": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2320,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2670,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1595
    }
  },
  "253": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "254": {
    "bremerhaven": {
      "auto": 1780,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1930,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1780,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2280,
      "moto": 1403,
      "atv": 1553,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 335,
      "shipping": 1495
    }
  },
  "255": {
    "bremerhaven": {
      "auto": 1780,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1930,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1780,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2280,
      "moto": 1403,
      "atv": 1553,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 335,
      "shipping": 1495
    }
  },
  "256": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1705,
      "atv": 1855,
      "pwc": 2045,
      "snow": 2045,
      "trucking": 750,
      "shipping": 1595
    }
  },
  "257": {
    "bremerhaven": {
      "auto": 2515,
      "moto": 1661,
      "atv": 1811,
      "pwc": 2015,
      "snow": 2015,
      "trucking": 970,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2665,
      "moto": 1661,
      "atv": 1811,
      "pwc": 2015,
      "snow": 2015,
      "trucking": 970,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2515,
      "moto": 1661,
      "atv": 1811,
      "pwc": 2015,
      "snow": 2015,
      "trucking": 970,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 3015,
      "moto": 1911,
      "atv": 2061,
      "pwc": 2265,
      "snow": 2265,
      "trucking": 970,
      "shipping": 1595
    }
  },
  "258": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "259": {
    "bremerhaven": {
      "auto": 1895,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2045,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1895,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2395,
      "moto": 1495,
      "atv": 1645,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 450,
      "shipping": 1495
    }
  },
  "260": {
    "bremerhaven": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2320,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2670,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1595
    }
  },
  "261": {
    "bremerhaven": {
      "auto": 2445,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2495,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2445,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2945,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 450,
      "shipping": 2045
    }
  },
  "262": {
    "bremerhaven": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2120,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2470,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1495
    }
  },
  "263": {
    "bremerhaven": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2120,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2470,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1495
    }
  },
  "264": {
    "bremerhaven": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2370,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2720,
      "moto": 1675,
      "atv": 1825,
      "pwc": 1970,
      "snow": 1970,
      "trucking": 675,
      "shipping": 1595
    }
  },
  "265": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1695,
      "atv": 1845,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "266": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "267": {
    "bremerhaven": {
      "auto": 1805,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1955,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1805,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2305,
      "moto": 1423,
      "atv": 1573,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 360,
      "shipping": 1495
    }
  },
  "268": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1487,
      "atv": 1637,
      "pwc": 1735,
      "snow": 1735,
      "trucking": 440,
      "shipping": 1595
    }
  },
  "269": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "270": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "271": {
    "bremerhaven": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2120,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2470,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1495
    }
  },
  "272": {
    "bremerhaven": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1990,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2340,
      "moto": 1451,
      "atv": 1601,
      "pwc": 1690,
      "snow": 1690,
      "trucking": 395,
      "shipping": 1495
    }
  },
  "273": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1595
    }
  },
  "274": {
    "bremerhaven": {
      "auto": 2455,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2505,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2455,
      "moto": 1303,
      "atv": 1453,
      "pwc": 1555,
      "snow": 1555,
      "trucking": 460,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2955,
      "moto": 1553,
      "atv": 1703,
      "pwc": 1805,
      "snow": 1805,
      "trucking": 460,
      "shipping": 2045
    }
  },
  "275": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "276": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "277": {
    "bremerhaven": {
      "auto": 2030,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2180,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2030,
      "moto": 1353,
      "atv": 1503,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 585,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2530,
      "moto": 1603,
      "atv": 1753,
      "pwc": 1880,
      "snow": 1880,
      "trucking": 585,
      "shipping": 1495
    }
  },
  "278": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "279": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "280": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "281": {
    "bremerhaven": {
      "auto": 2020,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2170,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2020,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2520,
      "moto": 1515,
      "atv": 1665,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 475,
      "shipping": 1595
    }
  },
  "282": {
    "bremerhaven": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2320,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2670,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1595
    }
  },
  "283": {
    "bremerhaven": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2320,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2670,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1595
    }
  },
  "284": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "285": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "286": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "287": {
    "bremerhaven": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2145,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2495,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1495
    }
  },
  "288": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "289": {
    "bremerhaven": {
      "auto": 1765,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1915,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1765,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2265,
      "moto": 1391,
      "atv": 1541,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 320,
      "shipping": 1495
    }
  },
  "290": {
    "bremerhaven": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2055,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2405,
      "moto": 1503,
      "atv": 1653,
      "pwc": 1755,
      "snow": 1755,
      "trucking": 460,
      "shipping": 1495
    }
  },
  "291": {
    "bremerhaven": {
      "auto": 1810,
      "moto": 1177,
      "atv": 1327,
      "pwc": 1410,
      "snow": 1410,
      "trucking": 365,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1960,
      "moto": 1177,
      "atv": 1327,
      "pwc": 1410,
      "snow": 1410,
      "trucking": 365,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1810,
      "moto": 1177,
      "atv": 1327,
      "pwc": 1410,
      "snow": 1410,
      "trucking": 365,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2310,
      "moto": 1427,
      "atv": 1577,
      "pwc": 1660,
      "snow": 1660,
      "trucking": 365,
      "shipping": 1495
    }
  },
  "292": {
    "bremerhaven": {
      "auto": 2995,
      "moto": 1735,
      "atv": 1885,
      "pwc": 2095,
      "snow": 2095,
      "trucking": 1000,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3045,
      "moto": 1735,
      "atv": 1885,
      "pwc": 2095,
      "snow": 2095,
      "trucking": 1000,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2995,
      "moto": 1735,
      "atv": 1885,
      "pwc": 2095,
      "snow": 2095,
      "trucking": 1000,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3495,
      "moto": 1985,
      "atv": 2135,
      "pwc": 2345,
      "snow": 2345,
      "trucking": 1000,
      "shipping": 2045
    }
  },
  "293": {
    "bremerhaven": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2020,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2370,
      "moto": 1475,
      "atv": 1625,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 425,
      "shipping": 1495
    }
  },
  "294": {
    "bremerhaven": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2695,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3145,
      "moto": 1705,
      "atv": 1855,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 650,
      "shipping": 2045
    }
  },
  "295": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "297": {
    "bremerhaven": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2020,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2370,
      "moto": 1475,
      "atv": 1625,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 425,
      "shipping": 1495
    }
  },
  "298": {
    "bremerhaven": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2020,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1870,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2370,
      "moto": 1475,
      "atv": 1625,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 425,
      "shipping": 1495
    }
  },
  "299": {
    "bremerhaven": {
      "auto": 2970,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3020,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2970,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3470,
      "moto": 1965,
      "atv": 2115,
      "pwc": 2320,
      "snow": 2320,
      "trucking": 975,
      "shipping": 2045
    }
  },
  "300": {
    "bremerhaven": {
      "auto": 1970,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2120,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1970,
      "moto": 1225,
      "atv": 1375,
      "pwc": 1470,
      "snow": 1470,
      "trucking": 425,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2470,
      "moto": 1475,
      "atv": 1625,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 425,
      "shipping": 1595
    }
  },
  "301": {
    "bremerhaven": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1935,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2285,
      "moto": 1407,
      "atv": 1557,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 340,
      "shipping": 1495
    }
  },
  "302": {
    "bremerhaven": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1935,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2285,
      "moto": 1407,
      "atv": 1557,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 340,
      "shipping": 1495
    }
  },
  "303": {
    "bremerhaven": {
      "auto": 2420,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2470,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2420,
      "moto": 1275,
      "atv": 1425,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 425,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2920,
      "moto": 1525,
      "atv": 1675,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 425,
      "shipping": 2045
    }
  },
  "304": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "305": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "306": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "307": {
    "bremerhaven": {
      "auto": 2795,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2845,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2795,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3295,
      "moto": 1825,
      "atv": 1975,
      "pwc": 2145,
      "snow": 2145,
      "trucking": 800,
      "shipping": 2045
    }
  },
  "308": {
    "bremerhaven": {
      "auto": 2795,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2845,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2795,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3295,
      "moto": 1825,
      "atv": 1975,
      "pwc": 2145,
      "snow": 2145,
      "trucking": 800,
      "shipping": 2045
    }
  },
  "309": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "310": {
    "bremerhaven": {
      "auto": 1880,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2030,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1880,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2380,
      "moto": 1483,
      "atv": 1633,
      "pwc": 1730,
      "snow": 1730,
      "trucking": 435,
      "shipping": 1495
    }
  },
  "311": {
    "bremerhaven": {
      "auto": 2335,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2385,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2335,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2835,
      "moto": 1457,
      "atv": 1607,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 340,
      "shipping": 2045
    }
  },
  "312": {
    "bremerhaven": {
      "auto": 2615,
      "moto": 1431,
      "atv": 1581,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 620,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2665,
      "moto": 1431,
      "atv": 1581,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 620,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2615,
      "moto": 1431,
      "atv": 1581,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 620,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3115,
      "moto": 1681,
      "atv": 1831,
      "pwc": 1965,
      "snow": 1965,
      "trucking": 620,
      "shipping": 2045
    }
  },
  "313": {
    "bremerhaven": {
      "auto": 1885,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2035,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1885,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2385,
      "moto": 1487,
      "atv": 1637,
      "pwc": 1735,
      "snow": 1735,
      "trucking": 440,
      "shipping": 1495
    }
  },
  "314": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "315": {
    "bremerhaven": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2595,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3045,
      "moto": 1625,
      "atv": 1775,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 550,
      "shipping": 2045
    }
  },
  "316": {
    "bremerhaven": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2695,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3145,
      "moto": 1705,
      "atv": 1855,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 650,
      "shipping": 2045
    }
  },
  "317": {
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    }
  },
  "318": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2345,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 300,
      "shipping": 2045
    }
  },
  "319": {
    "bremerhaven": {
      "auto": 2375,
      "moto": 1239,
      "atv": 1389,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 380,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2425,
      "moto": 1239,
      "atv": 1389,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 380,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2375,
      "moto": 1239,
      "atv": 1389,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 380,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2875,
      "moto": 1489,
      "atv": 1639,
      "pwc": 1725,
      "snow": 1725,
      "trucking": 380,
      "shipping": 2045
    }
  },
  "320": {
    "bremerhaven": {
      "auto": 2465,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2515,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2465,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2965,
      "moto": 1561,
      "atv": 1711,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 470,
      "shipping": 2045
    }
  },
  "321": {
    "bremerhaven": {
      "auto": 1715,
      "moto": 1101,
      "atv": 1251,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1865,
      "moto": 1101,
      "atv": 1251,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1715,
      "moto": 1101,
      "atv": 1251,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2215,
      "moto": 1351,
      "atv": 1501,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 270,
      "shipping": 1495
    }
  },
  "322": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "323": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "324": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "325": {
    "bremerhaven": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2395,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2245,
      "moto": 1445,
      "atv": 1595,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 700,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2745,
      "moto": 1695,
      "atv": 1845,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 700,
      "shipping": 1595
    }
  },
  "326": {
    "bremerhaven": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2595,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3045,
      "moto": 1625,
      "atv": 1775,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 550,
      "shipping": 2045
    }
  },
  "328": {
    "bremerhaven": {
      "auto": 1695,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1845,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1695,
      "moto": 1085,
      "atv": 1235,
      "pwc": 1295,
      "snow": 1295,
      "trucking": 250,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2195,
      "moto": 1335,
      "atv": 1485,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 250,
      "shipping": 1495
    }
  },
  "329": {
    "bremerhaven": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2055,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2405,
      "moto": 1503,
      "atv": 1653,
      "pwc": 1755,
      "snow": 1755,
      "trucking": 460,
      "shipping": 1495
    }
  },
  "330": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1487,
      "atv": 1637,
      "pwc": 1735,
      "snow": 1735,
      "trucking": 440,
      "shipping": 1595
    }
  },
  "331": {
    "bremerhaven": {
      "auto": 1820,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1970,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1820,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2320,
      "moto": 1435,
      "atv": 1585,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 375,
      "shipping": 1495
    }
  },
  "332": {
    "bremerhaven": {
      "auto": 2970,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 3020,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2970,
      "moto": 1715,
      "atv": 1865,
      "pwc": 2070,
      "snow": 2070,
      "trucking": 975,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3470,
      "moto": 1965,
      "atv": 2115,
      "pwc": 2320,
      "snow": 2320,
      "trucking": 975,
      "shipping": 2045
    }
  },
  "333": {
    "bremerhaven": {
      "auto": 2115,
      "moto": 1341,
      "atv": 1491,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 570,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2265,
      "moto": 1341,
      "atv": 1491,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 570,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2115,
      "moto": 1341,
      "atv": 1491,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 570,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2615,
      "moto": 1591,
      "atv": 1741,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 570,
      "shipping": 1595
    }
  },
  "334": {
    "bremerhaven": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2370,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2720,
      "moto": 1675,
      "atv": 1825,
      "pwc": 1970,
      "snow": 1970,
      "trucking": 675,
      "shipping": 1595
    }
  },
  "335": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "336": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "337": {
    "bremerhaven": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2025,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1875,
      "moto": 1229,
      "atv": 1379,
      "pwc": 1475,
      "snow": 1475,
      "trucking": 430,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2375,
      "moto": 1479,
      "atv": 1629,
      "pwc": 1725,
      "snow": 1725,
      "trucking": 430,
      "shipping": 1495
    }
  },
  "338": {
    "bremerhaven": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2090,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2440,
      "moto": 1531,
      "atv": 1681,
      "pwc": 1790,
      "snow": 1790,
      "trucking": 495,
      "shipping": 1495
    }
  },
  "339": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "340": {
    "bremerhaven": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2090,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2440,
      "moto": 1531,
      "atv": 1681,
      "pwc": 1790,
      "snow": 1790,
      "trucking": 495,
      "shipping": 1495
    }
  },
  "341": {
    "bremerhaven": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1990,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2340,
      "moto": 1451,
      "atv": 1601,
      "pwc": 1690,
      "snow": 1690,
      "trucking": 395,
      "shipping": 1495
    }
  },
  "342": {
    "bremerhaven": {
      "auto": 1715,
      "moto": 1071,
      "atv": 1221,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1865,
      "moto": 1071,
      "atv": 1221,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1715,
      "moto": 1071,
      "atv": 1221,
      "pwc": 1315,
      "snow": 1315,
      "trucking": 270,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2215,
      "moto": 1321,
      "atv": 1471,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 270,
      "shipping": 1495
    }
  },
  "343": {
    "bremerhaven": {
      "auto": 2530,
      "moto": 1363,
      "atv": 1513,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 535,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2580,
      "moto": 1363,
      "atv": 1513,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 535,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2530,
      "moto": 1363,
      "atv": 1513,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 535,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3030,
      "moto": 1613,
      "atv": 1763,
      "pwc": 1880,
      "snow": 1880,
      "trucking": 535,
      "shipping": 2045
    }
  },
  "344": {
    "bremerhaven": {
      "auto": 2185,
      "moto": 1397,
      "atv": 1547,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 640,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2335,
      "moto": 1397,
      "atv": 1547,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 640,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2185,
      "moto": 1397,
      "atv": 1547,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 640,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2685,
      "moto": 1647,
      "atv": 1797,
      "pwc": 1935,
      "snow": 1935,
      "trucking": 640,
      "shipping": 1595
    }
  },
  "345": {
    "bremerhaven": {
      "auto": 2465,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2515,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2465,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2965,
      "moto": 1561,
      "atv": 1711,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 470,
      "shipping": 2045
    }
  },
  "346": {
    "bremerhaven": {
      "auto": 2335,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2385,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2335,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2835,
      "moto": 1457,
      "atv": 1607,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 340,
      "shipping": 2045
    }
  },
  "347": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "348": {
    "bremerhaven": {
      "auto": 1995,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2145,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1995,
      "moto": 1245,
      "atv": 1395,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 450,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2495,
      "moto": 1495,
      "atv": 1645,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 450,
      "shipping": 1595
    }
  },
  "349": {
    "bremerhaven": {
      "auto": 1850,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2000,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1850,
      "moto": 1209,
      "atv": 1359,
      "pwc": 1450,
      "snow": 1450,
      "trucking": 405,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2350,
      "moto": 1459,
      "atv": 1609,
      "pwc": 1700,
      "snow": 1700,
      "trucking": 405,
      "shipping": 1495
    }
  },
  "350": {
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    },
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    }
  },
  "351": {
    "rotterdam": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2405,
      "moto": 1503,
      "atv": 1653,
      "pwc": 1755,
      "snow": 1755,
      "trucking": 460,
      "shipping": 1495
    },
    "bremerhaven": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2055,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 1145
    }
  },
  "352": {
    "rotterdam": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2435,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1595
    },
    "bremerhaven": {
      "auto": 1935,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2085,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1245
    }
  },
  "353": {
    "rotterdam": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1705,
      "atv": 1855,
      "pwc": 2045,
      "snow": 2045,
      "trucking": 750,
      "shipping": 1595
    },
    "bremerhaven": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1245
    }
  },
  "354": {
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    },
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    }
  },
  "535": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "536": {
    "bremerhaven": {
      "auto": 1920,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2070,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1920,
      "moto": 1185,
      "atv": 1335,
      "pwc": 1420,
      "snow": 1420,
      "trucking": 375,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2420,
      "moto": 1435,
      "atv": 1585,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 375,
      "shipping": 1595
    }
  },
  "537": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "538": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "539": {
    "bremerhaven": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 1975,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2325,
      "moto": 1359,
      "atv": 1509,
      "pwc": 1575,
      "snow": 1575,
      "trucking": 280,
      "shipping": 1595
    }
  },
  "540": {
    "bremerhaven": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1935,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1785,
      "moto": 1157,
      "atv": 1307,
      "pwc": 1385,
      "snow": 1385,
      "trucking": 340,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2285,
      "moto": 1407,
      "atv": 1557,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 340,
      "shipping": 1495
    }
  },
  "541": {
    "bremerhaven": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1990,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2340,
      "moto": 1451,
      "atv": 1601,
      "pwc": 1690,
      "snow": 1690,
      "trucking": 395,
      "shipping": 1495
    }
  },
  "542": {
    "bremerhaven": {
      "auto": 2035,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2185,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2035,
      "moto": 1357,
      "atv": 1507,
      "pwc": 1635,
      "snow": 1635,
      "trucking": 590,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2535,
      "moto": 1607,
      "atv": 1757,
      "pwc": 1885,
      "snow": 1885,
      "trucking": 590,
      "shipping": 1495
    }
  },
  "543": {
    "bremerhaven": {
      "auto": 1775,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1925,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1775,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2275,
      "moto": 1399,
      "atv": 1549,
      "pwc": 1625,
      "snow": 1625,
      "trucking": 330,
      "shipping": 1495
    }
  },
  "544": {
    "bremerhaven": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2080,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1930,
      "moto": 1273,
      "atv": 1423,
      "pwc": 1530,
      "snow": 1530,
      "trucking": 485,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2430,
      "moto": 1523,
      "atv": 1673,
      "pwc": 1780,
      "snow": 1780,
      "trucking": 485,
      "shipping": 1495
    }
  },
  "545": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "546": {
    "bremerhaven": {
      "auto": 1885,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2035,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1885,
      "moto": 1237,
      "atv": 1387,
      "pwc": 1485,
      "snow": 1485,
      "trucking": 440,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2385,
      "moto": 1487,
      "atv": 1637,
      "pwc": 1735,
      "snow": 1735,
      "trucking": 440,
      "shipping": 1495
    }
  },
  "547": {
    "bremerhaven": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2135,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1985,
      "moto": 1317,
      "atv": 1467,
      "pwc": 1585,
      "snow": 1585,
      "trucking": 540,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2485,
      "moto": 1567,
      "atv": 1717,
      "pwc": 1835,
      "snow": 1835,
      "trucking": 540,
      "shipping": 1495
    }
  },
  "548": {
    "bremerhaven": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2090,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1940,
      "moto": 1281,
      "atv": 1431,
      "pwc": 1540,
      "snow": 1540,
      "trucking": 495,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2440,
      "moto": 1531,
      "atv": 1681,
      "pwc": 1790,
      "snow": 1790,
      "trucking": 495,
      "shipping": 1495
    }
  },
  "549": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "550": {
    "bremerhaven": {
      "auto": 1745,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1895,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1745,
      "moto": 1095,
      "atv": 1245,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2245,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 300,
      "shipping": 1495
    }
  },
  "551": {
    "bremerhaven": {
      "auto": 2765,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2815,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2765,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1865,
      "snow": 1865,
      "trucking": 770,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3265,
      "moto": 1801,
      "atv": 1951,
      "pwc": 2115,
      "snow": 2115,
      "trucking": 770,
      "shipping": 2045
    }
  },
  "552": {
    "bremerhaven": {
      "auto": 1875,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2025,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1875,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2375,
      "moto": 1399,
      "atv": 1549,
      "pwc": 1625,
      "snow": 1625,
      "trucking": 330,
      "shipping": 1595
    }
  },
  "553": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "554": {
    "bremerhaven": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2695,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3145,
      "moto": 1705,
      "atv": 1855,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 650,
      "shipping": 2045
    }
  },
  "555": {
    "bremerhaven": {
      "auto": 1780,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1930,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1780,
      "moto": 1153,
      "atv": 1303,
      "pwc": 1380,
      "snow": 1380,
      "trucking": 335,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2280,
      "moto": 1403,
      "atv": 1553,
      "pwc": 1630,
      "snow": 1630,
      "trucking": 335,
      "shipping": 1495
    }
  },
  "556": {
    "bremerhaven": {
      "auto": 1855,
      "moto": 1183,
      "atv": 1333,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2005,
      "moto": 1183,
      "atv": 1333,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1855,
      "moto": 1183,
      "atv": 1333,
      "pwc": 1455,
      "snow": 1455,
      "trucking": 410,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2355,
      "moto": 1433,
      "atv": 1583,
      "pwc": 1705,
      "snow": 1705,
      "trucking": 410,
      "shipping": 1495
    }
  },
  "557": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "558": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "559": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "560": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "561": {
    "bremerhaven": {
      "auto": 1745,
      "moto": 1045,
      "atv": 1195,
      "pwc": 1245,
      "snow": 1245,
      "trucking": 200,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 1895,
      "moto": 1045,
      "atv": 1195,
      "pwc": 1245,
      "snow": 1245,
      "trucking": 200,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1745,
      "moto": 1045,
      "atv": 1195,
      "pwc": 1245,
      "snow": 1245,
      "trucking": 200,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2245,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1495,
      "snow": 1495,
      "trucking": 200,
      "shipping": 1595
    }
  },
  "562": {
    "bremerhaven": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 1975,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1825,
      "moto": 1109,
      "atv": 1259,
      "pwc": 1325,
      "snow": 1325,
      "trucking": 280,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2325,
      "moto": 1359,
      "atv": 1509,
      "pwc": 1575,
      "snow": 1575,
      "trucking": 280,
      "shipping": 1595
    }
  },
  "563": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1705,
      "atv": 1855,
      "pwc": 2045,
      "snow": 2045,
      "trucking": 750,
      "shipping": 1595
    }
  },
  "564": {
    "bremerhaven": {
      "auto": 1880,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2030,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1880,
      "moto": 1233,
      "atv": 1383,
      "pwc": 1480,
      "snow": 1480,
      "trucking": 435,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2380,
      "moto": 1483,
      "atv": 1633,
      "pwc": 1730,
      "snow": 1730,
      "trucking": 435,
      "shipping": 1495
    }
  },
  "567": {
    "bremerhaven": {
      "auto": 1720,
      "moto": 1075,
      "atv": 1225,
      "pwc": 1320,
      "snow": 1320,
      "trucking": 275,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1870,
      "moto": 1075,
      "atv": 1225,
      "pwc": 1320,
      "snow": 1320,
      "trucking": 275,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1720,
      "moto": 1075,
      "atv": 1225,
      "pwc": 1320,
      "snow": 1320,
      "trucking": 275,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2220,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 275,
      "shipping": 1495
    }
  },
  "568": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "569": {
    "bremerhaven": {
      "auto": 2335,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2385,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2335,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2835,
      "moto": 1457,
      "atv": 1607,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 340,
      "shipping": 2045
    }
  },
  "570": {
    "bremerhaven": {
      "auto": 2020,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2170,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2020,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2520,
      "moto": 1515,
      "atv": 1665,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 475,
      "shipping": 1595
    }
  },
  "571": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "572": {
    "bremerhaven": {
      "auto": 2670,
      "moto": 1755,
      "atv": 1905,
      "pwc": 2170,
      "snow": 2170,
      "trucking": 1125,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2820,
      "moto": 1755,
      "atv": 1905,
      "pwc": 2170,
      "snow": 2170,
      "trucking": 1125,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2670,
      "moto": 1755,
      "atv": 1905,
      "pwc": 2170,
      "snow": 2170,
      "trucking": 1125,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 3170,
      "moto": 2005,
      "atv": 2155,
      "pwc": 2420,
      "snow": 2420,
      "trucking": 1125,
      "shipping": 1595
    }
  },
  "573": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "574": {
    "bremerhaven": {
      "auto": 2445,
      "moto": 1605,
      "atv": 1755,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 900,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2595,
      "moto": 1605,
      "atv": 1755,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 900,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2445,
      "moto": 1605,
      "atv": 1755,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 900,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2945,
      "moto": 1855,
      "atv": 2005,
      "pwc": 2195,
      "snow": 2195,
      "trucking": 900,
      "shipping": 1595
    }
  },
  "575": {
    "bremerhaven": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2195,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2045,
      "moto": 1285,
      "atv": 1435,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 500,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2545,
      "moto": 1535,
      "atv": 1685,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 500,
      "shipping": 1595
    }
  },
  "576": {
    "bremerhaven": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2120,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2470,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1495
    }
  },
  "577": {
    "bremerhaven": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2055,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1905,
      "moto": 1253,
      "atv": 1403,
      "pwc": 1505,
      "snow": 1505,
      "trucking": 460,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2405,
      "moto": 1503,
      "atv": 1653,
      "pwc": 1755,
      "snow": 1755,
      "trucking": 460,
      "shipping": 1495
    }
  },
  "578": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "579": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "580": {
    "bremerhaven": {
      "auto": 1745,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1895,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1745,
      "moto": 1125,
      "atv": 1275,
      "pwc": 1345,
      "snow": 1345,
      "trucking": 300,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2245,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 300,
      "shipping": 1495
    }
  },
  "581": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "582": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "583": {
    "bremerhaven": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1990,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1840,
      "moto": 1201,
      "atv": 1351,
      "pwc": 1440,
      "snow": 1440,
      "trucking": 395,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2340,
      "moto": 1451,
      "atv": 1601,
      "pwc": 1690,
      "snow": 1690,
      "trucking": 395,
      "shipping": 1495
    }
  },
  "584": {
    "bremerhaven": {
      "auto": 2445,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2495,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2445,
      "moto": 1295,
      "atv": 1445,
      "pwc": 1545,
      "snow": 1545,
      "trucking": 450,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2945,
      "moto": 1545,
      "atv": 1695,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 450,
      "shipping": 2045
    }
  },
  "585": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "586": {
    "bremerhaven": {
      "auto": 2020,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2170,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2020,
      "moto": 1265,
      "atv": 1415,
      "pwc": 1520,
      "snow": 1520,
      "trucking": 475,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2520,
      "moto": 1515,
      "atv": 1665,
      "pwc": 1770,
      "snow": 1770,
      "trucking": 475,
      "shipping": 1595
    }
  },
  "587": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1141,
      "atv": 1291,
      "pwc": 1365,
      "snow": 1365,
      "trucking": 320,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1391,
      "atv": 1541,
      "pwc": 1615,
      "snow": 1615,
      "trucking": 320,
      "shipping": 1595
    }
  },
  "588": {
    "bremerhaven": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1985,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1835,
      "moto": 1197,
      "atv": 1347,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 390,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2335,
      "moto": 1447,
      "atv": 1597,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 390,
      "shipping": 1495
    }
  },
  "589": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "590": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "591": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "592": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "593": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "594": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "595": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "596": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "597": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "598": {
    "bremerhaven": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2320,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2170,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2670,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1595
    }
  },
  "599": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "600": {
    "bremerhaven": {
      "auto": 4745,
      "moto": 3135,
      "atv": 3285,
      "pwc": 3845,
      "snow": 3845,
      "trucking": 2750,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 4795,
      "moto": 3135,
      "atv": 3285,
      "pwc": 3845,
      "snow": 3845,
      "trucking": 2750,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 4745,
      "moto": 3135,
      "atv": 3285,
      "pwc": 3845,
      "snow": 3845,
      "trucking": 2750,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 5245,
      "moto": 3385,
      "atv": 3535,
      "pwc": 4095,
      "snow": 4095,
      "trucking": 2750,
      "shipping": 2045
    }
  },
  "601": {
    "bremerhaven": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2365,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2315,
      "moto": 1191,
      "atv": 1341,
      "pwc": 1415,
      "snow": 1415,
      "trucking": 320,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2815,
      "moto": 1441,
      "atv": 1591,
      "pwc": 1665,
      "snow": 1665,
      "trucking": 320,
      "shipping": 2045
    }
  },
  "602": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2445,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1485,
      "atv": 1635,
      "pwc": 1795,
      "snow": 1795,
      "trucking": 750,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1735,
      "atv": 1885,
      "pwc": 2045,
      "snow": 2045,
      "trucking": 750,
      "shipping": 1595
    }
  },
  "603": {
    "bremerhaven": {
      "auto": 2460,
      "moto": 1617,
      "atv": 1767,
      "pwc": 1960,
      "snow": 1960,
      "trucking": 915,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2610,
      "moto": 1617,
      "atv": 1767,
      "pwc": 1960,
      "snow": 1960,
      "trucking": 915,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2460,
      "moto": 1617,
      "atv": 1767,
      "pwc": 1960,
      "snow": 1960,
      "trucking": 915,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2960,
      "moto": 1867,
      "atv": 2017,
      "pwc": 2210,
      "snow": 2210,
      "trucking": 915,
      "shipping": 1595
    }
  },
  "604": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "605": {
    "bremerhaven": {
      "auto": 1875,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2025,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1875,
      "moto": 1149,
      "atv": 1299,
      "pwc": 1375,
      "snow": 1375,
      "trucking": 330,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2375,
      "moto": 1399,
      "atv": 1549,
      "pwc": 1625,
      "snow": 1625,
      "trucking": 330,
      "shipping": 1595
    }
  },
  "606": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "607": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "608": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "609": {
    "rotterdam": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2470,
      "moto": 1555,
      "atv": 1705,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 525,
      "shipping": 1495
    },
    "bremerhaven": {
      "auto": 1970,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2120,
      "moto": 1305,
      "atv": 1455,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 525,
      "shipping": 1145
    }
  },
  "610": {
    "bremerhaven": {
      "auto": 2470,
      "moto": 1315,
      "atv": 1465,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 475,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2520,
      "moto": 1315,
      "atv": 1465,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 475,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2470,
      "moto": 1315,
      "atv": 1465,
      "pwc": 1570,
      "snow": 1570,
      "trucking": 475,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2970,
      "moto": 1565,
      "atv": 1715,
      "pwc": 1820,
      "snow": 1820,
      "trucking": 475,
      "shipping": 2045
    }
  },
  "611": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "612": {
    "bremerhaven": {
      "auto": 2195,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2345,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2195,
      "moto": 1405,
      "atv": 1555,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 650,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2695,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1945,
      "snow": 1945,
      "trucking": 650,
      "shipping": 1595
    }
  },
  "613": {
    "bremerhaven": {
      "auto": 2795,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2845,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2795,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 800,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3295,
      "moto": 1825,
      "atv": 1975,
      "pwc": 2145,
      "snow": 2145,
      "trucking": 800,
      "shipping": 2045
    }
  },
  "614": {
    "bremerhaven": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2220,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2070,
      "moto": 1385,
      "atv": 1535,
      "pwc": 1670,
      "snow": 1670,
      "trucking": 625,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2570,
      "moto": 1635,
      "atv": 1785,
      "pwc": 1920,
      "snow": 1920,
      "trucking": 625,
      "shipping": 1495
    }
  },
  "615": {
    "bremerhaven": {
      "auto": 2020,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2170,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 2020,
      "moto": 1345,
      "atv": 1495,
      "pwc": 1620,
      "snow": 1620,
      "trucking": 575,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2520,
      "moto": 1595,
      "atv": 1745,
      "pwc": 1870,
      "snow": 1870,
      "trucking": 575,
      "shipping": 1495
    }
  },
  "616": {
    "bremerhaven": {
      "auto": 2495,
      "moto": 1335,
      "atv": 1485,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 500,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2545,
      "moto": 1335,
      "atv": 1485,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 500,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2495,
      "moto": 1335,
      "atv": 1485,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 500,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2995,
      "moto": 1585,
      "atv": 1735,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 500,
      "shipping": 2045
    }
  },
  "617": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "618": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "619": {
    "bremerhaven": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2695,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2645,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1745,
      "snow": 1745,
      "trucking": 650,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3145,
      "moto": 1705,
      "atv": 1855,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 650,
      "shipping": 2045
    }
  },
  "620": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "621": {
    "bremerhaven": {
      "auto": 2335,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2385,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2335,
      "moto": 1207,
      "atv": 1357,
      "pwc": 1435,
      "snow": 1435,
      "trucking": 340,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2835,
      "moto": 1457,
      "atv": 1607,
      "pwc": 1685,
      "snow": 1685,
      "trucking": 340,
      "shipping": 2045
    }
  },
  "622": {
    "bremerhaven": {
      "auto": 2465,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2515,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2465,
      "moto": 1311,
      "atv": 1461,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 470,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2965,
      "moto": 1561,
      "atv": 1711,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 470,
      "shipping": 2045
    }
  },
  "623": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "624": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "625": {
    "bremerhaven": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2595,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3045,
      "moto": 1625,
      "atv": 1775,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 550,
      "shipping": 2045
    }
  },
  "626": {
    "bremerhaven": {
      "auto": 2745,
      "moto": 1820,
      "atv": 1970,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2895,
      "moto": 1820,
      "atv": 1970,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2745,
      "moto": 1820,
      "atv": 1970,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 1200,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 3245,
      "moto": 2070,
      "atv": 2220,
      "pwc": 2495,
      "snow": 2495,
      "trucking": 1200,
      "shipping": 1595
    }
  },
  "627": {
    "bremerhaven": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2145,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1995,
      "moto": 1325,
      "atv": 1475,
      "pwc": 1595,
      "snow": 1595,
      "trucking": 550,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2495,
      "moto": 1575,
      "atv": 1725,
      "pwc": 1845,
      "snow": 1845,
      "trucking": 550,
      "shipping": 1495
    }
  },
  "628": {
    "bremerhaven": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2370,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2720,
      "moto": 1675,
      "atv": 1825,
      "pwc": 1970,
      "snow": 1970,
      "trucking": 675,
      "shipping": 1595
    }
  },
  "629": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "630": {
    "bremerhaven": {
      "auto": 2295,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2345,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2295,
      "moto": 1175,
      "atv": 1325,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 300,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 2795,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 300,
      "shipping": 2045
    }
  },
  "631": {
    "bremerhaven": {
      "auto": 1795,
      "moto": 1165,
      "atv": 1315,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 350,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1945,
      "moto": 1165,
      "atv": 1315,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 350,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1795,
      "moto": 1165,
      "atv": 1315,
      "pwc": 1395,
      "snow": 1395,
      "trucking": 350,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2295,
      "moto": 1415,
      "atv": 1565,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 350,
      "shipping": 1495
    }
  },
  "632": {
    "bremerhaven": {
      "auto": 1805,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 1955,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1805,
      "moto": 1173,
      "atv": 1323,
      "pwc": 1405,
      "snow": 1405,
      "trucking": 360,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2305,
      "moto": 1423,
      "atv": 1573,
      "pwc": 1655,
      "snow": 1655,
      "trucking": 360,
      "shipping": 1495
    }
  },
  "633": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "634": {
    "bremerhaven": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2370,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2220,
      "moto": 1425,
      "atv": 1575,
      "pwc": 1720,
      "snow": 1720,
      "trucking": 675,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2720,
      "moto": 1675,
      "atv": 1825,
      "pwc": 1970,
      "snow": 1970,
      "trucking": 675,
      "shipping": 1595
    }
  },
  "635": {
    "bremerhaven": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2295,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 2145,
      "moto": 1365,
      "atv": 1515,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 600,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2645,
      "moto": 1615,
      "atv": 1765,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 600,
      "shipping": 1595
    }
  },
  "636": {
    "bremerhaven": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2115,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1965,
      "moto": 1301,
      "atv": 1451,
      "pwc": 1565,
      "snow": 1565,
      "trucking": 520,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2465,
      "moto": 1551,
      "atv": 1701,
      "pwc": 1815,
      "snow": 1815,
      "trucking": 520,
      "shipping": 1495
    }
  },
  "637": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "638": {
    "bremerhaven": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2015,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1865,
      "moto": 1221,
      "atv": 1371,
      "pwc": 1465,
      "snow": 1465,
      "trucking": 420,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2365,
      "moto": 1471,
      "atv": 1621,
      "pwc": 1715,
      "snow": 1715,
      "trucking": 420,
      "shipping": 1495
    }
  },
  "639": {
    "bremerhaven": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2595,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2545,
      "moto": 1375,
      "atv": 1525,
      "pwc": 1645,
      "snow": 1645,
      "trucking": 550,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3045,
      "moto": 1625,
      "atv": 1775,
      "pwc": 1895,
      "snow": 1895,
      "trucking": 550,
      "shipping": 2045
    }
  },
  "640": {
    "bremerhaven": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "klaipeda": {
      "auto": 2060,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 1145
    },
    "rotterdam": {
      "auto": 1910,
      "moto": 1257,
      "atv": 1407,
      "pwc": 1510,
      "snow": 1510,
      "trucking": 465,
      "shipping": 995
    },
    "gdynia": {
      "auto": 2410,
      "moto": 1507,
      "atv": 1657,
      "pwc": 1760,
      "snow": 1760,
      "trucking": 465,
      "shipping": 1495
    }
  },
  "641": {
    "bremerhaven": {
      "auto": 2895,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1545
    },
    "klaipeda": {
      "auto": 2945,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1595
    },
    "rotterdam": {
      "auto": 2895,
      "moto": 1655,
      "atv": 1805,
      "pwc": 1995,
      "snow": 1995,
      "trucking": 900,
      "shipping": 1545
    },
    "gdynia": {
      "auto": 3395,
      "moto": 1905,
      "atv": 2055,
      "pwc": 2245,
      "snow": 2245,
      "trucking": 900,
      "shipping": 2045
    }
  },
  "642": {
    "bremerhaven": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "klaipeda": {
      "auto": 2095,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1245
    },
    "rotterdam": {
      "auto": 1945,
      "moto": 1205,
      "atv": 1355,
      "pwc": 1445,
      "snow": 1445,
      "trucking": 400,
      "shipping": 1095
    },
    "gdynia": {
      "auto": 2445,
      "moto": 1455,
      "atv": 1605,
      "pwc": 1695,
      "snow": 1695,
      "trucking": 400,
      "shipping": 1595
    }
  },
  "643": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  },
  "644": {
    "bremerhaven": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "klaipeda": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "rotterdam": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    },
    "gdynia": {
      "auto": 450,
      "moto": 450,
      "atv": 450,
      "pwc": 450,
      "snow": 450,
      "trucking": null,
      "shipping": null
    }
  }
};

export function getUsRoute(
  branchId: number,
  euPortId: EuPortId,
): { trucking: number; shipping: number } | null {
  const branchRates = RATES[branchId]
  if (!branchRates) return null
  const dest = branchRates[euPortId]
  if (!dest) return null
  if (dest.trucking == null || dest.shipping == null) return null
  return { trucking: dest.trucking, shipping: dest.shipping }
}
