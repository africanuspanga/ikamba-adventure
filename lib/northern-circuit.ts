export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation?: string;
  meals?: string;
}

export interface SafariPackage {
  id: string;
  title: string;
  subtitle: string;
  days: number;
  nights: number;
  parks: string[];
  highlights: string[];
  image: string;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  badge?: string;
}

const commonInclusions = [
  "Accommodation and full board meals",
  "2.5 ltr of mineral water per person/day",
  "Transport and game drives in a 4WD pop-up roof Land Cruiser",
  "Services of a professional English-speaking driver guide",
  "Park entrance fees, concession fees and government taxes",
];

const commonExclusions = [
  "International and local airfare & flights",
  "All items of a personal nature",
  "Gratuities for safari guide and camp staff",
  "Travel insurance, Visa and Passport fees",
  "Alcoholic and non-alcoholic drinks and beverages in lodges",
];

export const northernCircuitPackages: SafariPackage[] = [
  {
    id: "nc-2d-manyara-ngorongoro",
    title: "Lake Manyara & Ngorongoro Crater",
    subtitle: "2 Days / 1 Night",
    days: 2,
    nights: 1,
    parks: ["Lake Manyara", "Ngorongoro Crater"],
    highlights: [
      "Flamingo flocks at soda lake",
      "Tree-climbing lions",
      "Big 5 in Ngorongoro Crater",
      "30,000 animals on crater floor",
    ],
    image: "/manyara.jpg",
    itinerary: [
      {
        day: 1,
        title: "Lake Manyara National Park — Full Day Game Drive",
        description:
          "Depart to Lake Manyara National Park (approx. 2 hours' drive). Explore large elephant herds, high concentration of baboons, diverse habitats including a soda lake and woodlands supporting a variety of wildlife. The park boasts remarkable birdlife including pink flamingos attracted by the lake's alkaline water.",
        accommodation: "Octagon Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Ngorongoro Crater — Half Day Game Drive & Return to Arusha",
        description:
          "Depart to Ngorongoro Crater (about an hour drive). Explore a unique deep volcanic crater — an un-flooded, unbroken caldera approximately 200 km across, 600 m deep and 300 sq km in area. Approximately 30,000 animals live on the crater floor including the Big 5! Depart back to Arusha in the afternoon (approx. 3–4 hours).",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "nc-3d-tarangire-manyara-ngorongoro",
    title: "Tarangire, Lake Manyara & Ngorongoro Crater",
    subtitle: "3 Days / 2 Nights",
    days: 3,
    nights: 2,
    parks: ["Tarangire", "Lake Manyara", "Ngorongoro Crater"],
    highlights: [
      "Elephant herds in Tarangire",
      "Ancient baobab trees",
      "Flamingos at Lake Manyara",
      "Big 5 in Ngorongoro",
    ],
    image: "/tarangire.jpg",
    itinerary: [
      {
        day: 1,
        title: "Tarangire National Park — Full Day Game Drive",
        description:
          "Depart to Tarangire National Park (approx. 2–3 hours' drive). Encounter high concentrations of elephants, rich wildlife, a diverse savanna landscape with massive baobab trees and impressive birdlife.",
        accommodation: "Octagon Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Lake Manyara National Park — Full Day Game Drive",
        description:
          "Depart to Lake Manyara National Park. Explore large elephant herds, tree-climbing lions, baboons and diverse birdlife including pink flamingos attracted by the alkaline soda lake.",
        accommodation: "Octagon Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Ngorongoro Crater — Game Drive & Return to Arusha",
        description:
          "Descend into the Ngorongoro Crater — one of Africa's most spectacular natural wonders. Around 30,000 animals including the Big 5 inhabit this 300 sq km caldera floor. Return to Arusha in the afternoon.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "nc-4d-manyara-serengeti-ngorongoro",
    title: "Lake Manyara, Central Serengeti & Ngorongoro",
    subtitle: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    parks: ["Lake Manyara", "Serengeti", "Ngorongoro Crater"],
    highlights: [
      "Serengeti big cats & acacia savanna",
      "Flamingos at Lake Manyara",
      "Big 5 at Ngorongoro",
      "Year-round wildlife viewing",
    ],
    image: "/serengeti.jpg",
    badge: "Popular",
    itinerary: [
      {
        day: 1,
        title: "Lake Manyara National Park — Full Day Game Drive",
        description:
          "Depart to Lake Manyara National Park (approx. 2 hours' drive). Explore large elephant herds, high concentration of baboons, diverse habitats including a soda lake, woodlands and remarkable birdlife including pink flamingos.",
        accommodation: "Octagon Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Central Serengeti — Afternoon Game Drive",
        description:
          "Depart to Serengeti National Park (approx. 4–5 hours' drive). Afternoon game drive in the most popular region of the reserve, renowned for its abundant wildlife, large numbers of big cats and quintessential acacia-studded savanna landscapes.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Central Serengeti — Full Day Game Drive",
        description:
          "A full day game drive through this enormous, beautiful park exploring its abundant wildlife — lions, leopards, elephants, wildebeest and more. A fantastic year-round destination for wildlife viewing.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Ngorongoro Crater — Game Drive & Return to Arusha",
        description:
          "Depart to Ngorongoro Crater (about an hour drive). Half-day game drive in this unique volcanic caldera — approximately 30,000 animals live on the crater floor including the Big 5. Return to Arusha in the afternoon.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "nc-5d-tarangire-serengeti-ngorongoro",
    title: "Tarangire, Serengeti & Ngorongoro Crater",
    subtitle: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    parks: ["Tarangire", "Southern Serengeti", "Central Serengeti", "Ngorongoro Crater"],
    highlights: [
      "Great Migration calving season (Dec–Mar)",
      "Wildebeest & zebra herds",
      "Baobab trees in Tarangire",
      "Big 5 in Ngorongoro",
    ],
    image: "/packages images/serengeti-1.jpg",
    badge: "Best Seller",
    itinerary: [
      {
        day: 1,
        title: "Tarangire National Park — Full Day Game Drive",
        description:
          "Depart to Tarangire National Park (approx. 2–3 hours' drive). Encounter high concentrations of elephants, diverse savanna landscape with massive baobab trees and impressive birdlife.",
        accommodation: "Octagon Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Southern Serengeti — Afternoon Game Drive",
        description:
          "Depart to Southern Serengeti (approx. 4–5 hours' drive). During December–March, the Great Migration moves to the southern Ndutu area coinciding with calving season for wildebeests — a unique game viewing experience with abundant wildlife and resident predators.",
        accommodation: "Ndutu Migration Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Southern & Central Serengeti — Full Day Game Drive",
        description:
          "Full day game drive in the southern Serengeti until sunset, then depart to Central Serengeti (approx. 2 hours' drive).",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Central Serengeti — Full Day Game Drive",
        description:
          "Explore the most popular region of the Serengeti — abundant wildlife, large numbers of big cats and quintessential acacia-studded savanna. A fantastic year-round destination.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Ngorongoro Crater — Game Drive & Return to Arusha",
        description:
          "Half-day game drive in the magnificent Ngorongoro Crater. Approximately 30,000 animals including the Big 5 inhabit this unique caldera. Return to Arusha in the afternoon.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "nc-8d-manyara-serengeti-ngorongoro",
    title: "Lake Manyara, Central & Northern Serengeti & Ngorongoro",
    subtitle: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    parks: ["Lake Manyara", "Central Serengeti", "Northern Serengeti", "Olduvai Gorge", "Ngorongoro Crater"],
    highlights: [
      "Great Migration — Mara River crossing",
      "Canopy walkway at Lake Manyara",
      "Olduvai Gorge historical site",
      "Big 5 in Ngorongoro",
    ],
    image: "/ngorongoro.jpg",
    itinerary: [
      {
        day: 1,
        title: "Lake Manyara — Game Drive & Canopy Walkway",
        description:
          "Depart to Lake Manyara National Park. Full day game drive plus a Treetop/Canopy Walkway experience — narrow bridges over the treetops through untouched nature filled with monkeys, butterflies and exotic birds.",
        accommodation: "Octagon Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Central Serengeti — Afternoon Game Drive",
        description:
          "Drive to Serengeti National Park (approx. 4–5 hours). Afternoon game drive in the central Serengeti, renowned for its big cats and quintessential acacia savanna landscapes.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Central Serengeti — Full Day Game Drive",
        description:
          "Full day exploring this enormous park — lions, leopards, cheetahs, elephants, buffalo and more in their natural habitat.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Northern Serengeti — Migration Game Drive",
        description:
          "Drive to Northern Serengeti (approx. 3–4 hours) with en-route game drive. Follow the spectacular migration of wildebeest and zebra crossing the Mara River to Masai Mara — one of nature's greatest events.",
        accommodation: "Mara KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Northern Serengeti — Following the Migration",
        description:
          "Full day exploring the Northern Serengeti while experiencing the remarkable Great Migration event until sunset.",
        accommodation: "Mara KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 6,
        title: "Northern Serengeti — Morning Drive & Return to Central",
        description:
          "Half day game drive in the Northern Serengeti until noon, then depart back to Central Serengeti with en-route game drives.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 7,
        title: "Olduvai Gorge Historical Visit & Ngorongoro",
        description:
          "Visit Olduvai Gorge — a paleoanthropological site in the Ngorongoro Conservation Area famous for rich fossil discoveries and stone tools that have advanced our understanding of early human evolution.",
        accommodation: "Ngorongoro Kuhama Camp (crater rim)",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 8,
        title: "Ngorongoro Crater — Game Drive & Return to Arusha",
        description:
          "Descend into the Ngorongoro Crater for a game drive — approximately 30,000 animals including the Big 5 call this unique caldera home. Return to Arusha in the afternoon.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "nc-10d-best-of-northern",
    title: "Best of Tanzania Northern Circuit",
    subtitle: "10 Days / 9 Nights",
    days: 10,
    nights: 9,
    parks: ["Tarangire", "Central Serengeti", "Northern Serengeti", "Olduvai Gorge", "Ngorongoro Crater", "Lake Manyara"],
    highlights: [
      "3 nights with the Great Migration",
      "Olduvai Gorge paleoanthropology site",
      "Maasai cultural experience",
      "All major northern parks",
    ],
    image: "/packages images/tarangire-1.jpg",
    badge: "Ultimate",
    itinerary: [
      {
        day: 1,
        title: "Tarangire National Park — Game Drive",
        description:
          "Depart to Tarangire National Park (approx. 2–3 hours). Encounter high concentrations of elephants, rich wildlife and diverse savanna landscape with massive baobab trees.",
        accommodation: "Octagon Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Central Serengeti — Afternoon Game Drive",
        description:
          "Drive to Serengeti National Park (approx. 4–5 hours). Afternoon game drive in the central Serengeti — big cats, wildebeest and quintessential Serengeti landscapes.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Central Serengeti — Full Day Game Drive",
        description:
          "Full day exploring the central Serengeti and its abundant wildlife — a remarkable year-round destination.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Northern Serengeti — Migration Game Drive",
        description:
          "Drive to the Northern Serengeti with en-route game drives. Follow the Great Migration — wildebeest and zebra crossing the Mara River to the Masai Mara.",
        accommodation: "Mara KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Northern Serengeti — Full Day with the Migration",
        description:
          "Full day in the Northern Serengeti experiencing the remarkable Great Migration event until sunset.",
        accommodation: "Mara KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 6,
        title: "Northern Serengeti — Full Day Migration Experience",
        description:
          "Another full day following the migration in the Northern Serengeti — wildebeest crossings, predator interactions and breathtaking wildlife encounters.",
        accommodation: "Mara KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 7,
        title: "Northern Serengeti — Morning Drive & Return to Central",
        description:
          "Final morning game drive in the Northern Serengeti until noon, then depart back to Central Serengeti with en-route game viewing.",
        accommodation: "Serengeti KatiKati Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 8,
        title: "Olduvai Gorge & Ngorongoro Conservation Area",
        description:
          "Visit Olduvai Gorge — Tanzania's most significant paleoanthropological site. Rich fossil discoveries dating back millions of years provide insight into early human history.",
        accommodation: "Ngorongoro Kuhama Camp (crater rim)",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 9,
        title: "Ngorongoro Crater — Game Drive & Karatu",
        description:
          "Descend into the Ngorongoro Crater — the world's largest intact caldera. Approximately 30,000 animals including the Big 5. Depart to Town of Karatu in the afternoon.",
        accommodation: "Octagon Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 10,
        title: "Lake Manyara, Maasai Cultural Tour & Return to Arusha",
        description:
          "Game drive at Lake Manyara, then a Maasai Cultural Tour — glimpse into the traditional lifestyle, customs, dress and social structure of the Maasai people. Return to Arusha.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
];
