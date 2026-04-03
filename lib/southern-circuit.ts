import type { ItineraryDay, SafariPackage } from "./northern-circuit";

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

export const southernCircuitPackages: SafariPackage[] = [
  {
    id: "sc-2d-mikumi",
    title: "Escape to Mikumi National Park",
    subtitle: "2 Days / 1 Night",
    days: 2,
    nights: 1,
    parks: ["Mikumi"],
    highlights: [
      "SGR train experience from Dar es Salaam",
      "Buffalo, giraffe, elephant & lion",
      "Diverse open plains wildlife",
      "Easy weekend getaway",
    ],
    image: "/packages images/mikumi.jpg",
    itinerary: [
      {
        day: 1,
        title: "Mikumi National Park — Afternoon Game Drive",
        description:
          "Catch the earliest SGR Train at 6:00 am from Dar es Salaam to Morogoro (arriving 07:40 am). Picked up by your driver-guide and depart to Mikumi National Park (approx. 2 hours). Explore wildlife including buffaloes, giraffes, elephants, zebras and lions.",
        accommodation: "Camp Bastian",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Mikumi — Morning Game Drive & Return to Dar",
        description:
          "Morning game drive in Mikumi National Park until noon. Transfer to SGR Train Station (approx. 2 hours) to catch the 16:25 train, arriving in Dar es Salaam at 18:10.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Return SGR train tickets (Dar es Salaam – Morogoro)",
    ],
    exclusions: commonExclusions,
  },
  {
    id: "sc-3d-mikumi",
    title: "Mikumi National Park Safari",
    subtitle: "3 Days / 2 Nights",
    days: 3,
    nights: 2,
    parks: ["Mikumi"],
    highlights: [
      "Open savanna plains teaming with wildlife",
      "Lion, elephant, giraffe & wildebeest",
      "Northern terminus of Selous ecosystem",
      "Perfect for first-time safari visitors",
    ],
    image: "/packages images/mikumi.jpg",
    itinerary: [
      {
        day: 1,
        title: "Departure & Afternoon Game Drive at Mikumi",
        description:
          "Depart from Dar es Salaam to Mikumi National Park (approx. 4–5 hours via road, or train to Morogoro then drive). Afternoon game drive exploring Mikumi's diverse wildlife.",
        accommodation: "Camp Bastian",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Mikumi — Full Day Game Drive",
        description:
          "Full day game drive in Mikumi National Park. Encounter buffaloes, giraffes, elephants, zebras, lions, wildebeests and antelope across the open plains.",
        accommodation: "Camp Bastian",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Morning Game Drive & Return to Dar es Salaam",
        description:
          "Morning game drive until noon. Depart and return to Dar es Salaam via SGR train or road.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "sc-3d-nyerere",
    title: "Explore Nyerere National Park",
    subtitle: "3 Days / 2 Nights",
    days: 3,
    nights: 2,
    parks: ["Nyerere (Selous)"],
    highlights: [
      "Evening boat safari on Rufiji River",
      "Crocodiles and hippos",
      "Walking safari through wilderness",
      "Optional Maasai cultural tour",
    ],
    image: "/selous.jpg",
    badge: "Popular",
    itinerary: [
      {
        day: 1,
        title: "Nyerere National Park — Evening Boat Safari",
        description:
          "Depart from Dar es Salaam and drive to Nyerere National Park (approx. 3–4 hours). Evening boat safari on the Rufiji River — encounter crocodiles, hippos and rich birdlife.",
        accommodation: "Nyerere Tented Camp",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Nyerere — Full Day Game Drive",
        description:
          "Full day game drive at Nyerere National Park. Encounter buffaloes, giraffes, elephants, zebras, lions and more across Africa's largest national park.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Walking Safari or Maasai Cultural Tour & Return",
        description:
          "Early morning walking safari — creep silently through wilderness to discover secret watering holes, OR enjoy a Maasai Cultural Tour experiencing traditional customs and lifestyle. Depart back to Dar es Salaam.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Boat safari and walking safari/cultural tour",
    ],
    exclusions: commonExclusions,
  },
  {
    id: "sc-3d-chimp-gombe",
    title: "Chimp Trekking at Gombe National Park",
    subtitle: "3 Days / 2 Nights",
    days: 3,
    nights: 2,
    parks: ["Gombe"],
    highlights: [
      "Chimpanzee trekking",
      "Lake Tanganyika beaches",
      "Jane Goodall's research site",
      "Forest hikes & birdlife",
    ],
    image: "/packages images/mahale.jpg",
    itinerary: [
      {
        day: 1,
        title: "Departure to Gombe National Park",
        description:
          "Fly to Kigoma, transfer by boat to Gombe National Park — the site of Jane Goodall's famous chimpanzee research. Settle in and enjoy the lakeside setting.",
        accommodation: "Gombe Forest Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Chimpanzee Trekking — Full Day",
        description:
          "Full day trekking through the forest with expert guides to track and observe chimpanzees in their natural habitat. Also spot colobus monkeys, baboons and diverse birdlife.",
        accommodation: "Gombe Forest Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Morning Forest Walk & Return to Kigoma",
        description:
          "Morning walk along Lake Tanganyika's shores and through the forest. Boat transfer back to Kigoma and return flight.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "sc-4d-mikumi-nyerere",
    title: "Mikumi NP & Nyerere National Park",
    subtitle: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    parks: ["Mikumi", "Nyerere (Selous)"],
    highlights: [
      "Two iconic southern parks",
      "Boat safari on Rufiji River",
      "Open savanna and riverine wilderness",
      "Diverse wildlife ecosystems",
    ],
    image: "/packages images/nyerere-elephants.jpg",
    itinerary: [
      {
        day: 1,
        title: "Mikumi National Park — Afternoon Game Drive",
        description:
          "Depart to Mikumi National Park via SGR train to Morogoro. Afternoon game drive — encounter buffaloes, giraffes, elephants, zebras and lions.",
        accommodation: "Camp Bastian",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Mikumi — Morning Game Drive & Depart to Nyerere",
        description:
          "Morning game drive in Mikumi until noon. Depart to Nyerere National Park (approx. 3–4 hours).",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Nyerere — Full Day Game Drive",
        description:
          "Full day game drive at Nyerere National Park. Explore Africa's largest national park — elephants, lions, wild dogs and more.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Nyerere — Boat Safari & Return to Dar",
        description:
          "Morning boat safari on the Rufiji River encountering hippos, crocodiles and birdlife. Return to Dar es Salaam in the afternoon.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Boat safari at Nyerere National Park",
    ],
    exclusions: commonExclusions,
  },
  {
    id: "sc-4d-mikumi-udzungwa",
    title: "Mikumi NP & Udzungwa Mountains",
    subtitle: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    parks: ["Mikumi", "Udzungwa Mountains"],
    highlights: [
      "Sanje Waterfalls hike",
      "Rare Udzungwa red colobus monkeys",
      "Open savanna game drives",
      "Spectacular mountain forest scenery",
    ],
    image: "/udzungwa-waterfall.jpg",
    itinerary: [
      {
        day: 1,
        title: "Mikumi National Park — Afternoon Game Drive",
        description:
          "Depart to Mikumi via SGR train. Afternoon game drive in Mikumi's open plains.",
        accommodation: "Camp Bastian",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Mikumi — Full Day Game Drive",
        description:
          "Full day game drive exploring Mikumi's diverse wildlife across savanna plains.",
        accommodation: "Camp Bastian",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Udzungwa Mountains — Hike to Sanje Waterfalls",
        description:
          "Hike through beautiful forest trails to the spectacular Sanje Waterfalls. Encounter the Udzungwa red colobus monkey and Sanje crested mangabey — primates found nowhere else on earth.",
        accommodation: "Udzungwa Falls Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Morning Nature Walk & Return to Dar",
        description:
          "Morning walk in the mountain forests, then return to Dar es Salaam via SGR train.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "sc-5d-mikumi-ruaha-iringa",
    title: "Mikumi NP, Ruaha NP & Town of Iringa",
    subtitle: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    parks: ["Mikumi", "Ruaha"],
    highlights: [
      "Tanzania's largest national park — Ruaha",
      "Elephant super-herds",
      "Historic Iringa town",
      "Remote wilderness experience",
    ],
    image: "/ruaha.jpg",
    itinerary: [
      {
        day: 1,
        title: "Mikumi National Park — Afternoon Game Drive",
        description:
          "Depart to Mikumi via SGR train. Arrive for afternoon game drive across the open plains.",
        accommodation: "Camp Bastian",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Mikumi — Morning Game Drive & Depart to Ruaha",
        description:
          "Morning game drive in Mikumi then depart to Ruaha National Park (approx. 5–6 hours).",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Ruaha National Park — Full Day Game Drive",
        description:
          "Full day exploring Ruaha — Tanzania's largest park. Encounter large elephant herds, lions, leopards, cheetahs, wild dogs and more.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Ruaha — Another Full Day Game Drive",
        description:
          "Another full day in the vast Ruaha National Park — a remote wilderness experience with fewer tourists and abundant wildlife.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Town of Iringa & Return to Dar",
        description:
          "Visit the historic highland town of Iringa with its colonial architecture and vibrant local market. Return to Dar es Salaam.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: commonExclusions,
  },
  {
    id: "sc-5d-nyerere-mikumi",
    title: "Nyerere National Park & Mikumi",
    subtitle: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    parks: ["Nyerere (Selous)", "Mikumi"],
    highlights: [
      "Boat safari on Rufiji River",
      "Walking safari in wilderness",
      "Two complementary ecosystems",
      "Hippos, crocodiles & big cats",
    ],
    image: "/packages images/nyerere-elephants.jpg",
    badge: "Popular",
    itinerary: [
      {
        day: 1,
        title: "Nyerere National Park — Evening Boat Safari",
        description:
          "Depart from Dar es Salaam to Nyerere (approx. 3–4 hours). Evening boat safari on the Rufiji River encountering crocodiles, hippos and diverse birdlife.",
        accommodation: "Nyerere Tented Camp",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Nyerere — Full Day Game Drive",
        description:
          "Full day game drive exploring Africa's largest national park — buffaloes, elephants, lions, wild dogs, giraffes and more.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Walking Safari & Depart to Mikumi",
        description:
          "Early morning walking safari in Nyerere — discover secret watering holes as elephants wallow oblivious to your presence. Depart to Mikumi (approx. 5–6 hours).",
        accommodation: "Camp Bastian",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Mikumi — Full Day Game Drive",
        description:
          "Full day game drive in Mikumi National Park — buffaloes, giraffes, elephants, zebras, lions and wildebeest.",
        accommodation: "Camp Bastian",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Morning Game Drive & Return to Dar",
        description:
          "Morning game drive then transfer to SGR train station and return to Dar es Salaam.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Boat safari and walking safari at Nyerere National Park",
      "SGR train tickets (Morogoro – Dar es Salaam)",
    ],
    exclusions: commonExclusions,
  },
  {
    id: "sc-5d-saadani-mikumi",
    title: "Saadani National Park & Mikumi",
    subtitle: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    parks: ["Saadani", "Mikumi"],
    highlights: [
      "Beach & safari in one trip",
      "Tanzania's only coastal wildlife sanctuary",
      "Boat trips on Wami River",
      "Giraffes on the beach",
    ],
    image: "/packages images/saadani.jpg",
    itinerary: [
      {
        day: 1,
        title: "Saadani National Park — Beach & Wildlife",
        description:
          "Depart to Saadani National Park — Tanzania's unique coastal park where the bush meets the beach. Afternoon game drive and beach time.",
        accommodation: "Saadani Safari Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Saadani — Boat Safari on Wami River",
        description:
          "Boat safari on the Wami River — encounter hippos, crocodiles and abundant birdlife. Afternoon beach game walk.",
        accommodation: "Saadani Safari Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Saadani — Game Drive & Depart to Mikumi",
        description:
          "Morning game drive at Saadani then depart to Mikumi National Park (approx. 4 hours).",
        accommodation: "Camp Bastian",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Mikumi — Full Day Game Drive",
        description:
          "Full day game drive across Mikumi's open savanna plains encountering diverse wildlife.",
        accommodation: "Camp Bastian",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Morning Game Drive & Return to Dar",
        description:
          "Final morning game drive in Mikumi then return to Dar es Salaam via SGR train.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Boat safari on Wami River",
    ],
    exclusions: commonExclusions,
  },
  {
    id: "sc-6d-gombe-katavi",
    title: "Gombe & Katavi National Parks",
    subtitle: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    parks: ["Gombe", "Katavi"],
    highlights: [
      "Chimpanzee trekking at Gombe",
      "Katavi's enormous hippo pools",
      "Off-the-beaten-path adventure",
      "Western Tanzania wilderness",
    ],
    image: "/packages images/katavi.jpg",
    itinerary: [
      {
        day: 1,
        title: "Fly to Kigoma & Gombe National Park",
        description:
          "Morning flight to Kigoma, boat transfer to Gombe National Park. Afternoon forest walk.",
        accommodation: "Gombe Forest Lodge",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Gombe — Chimpanzee Trekking",
        description:
          "Full day trekking with guides to observe chimpanzees in their natural forest habitat.",
        accommodation: "Gombe Forest Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Gombe — Forest Walk & Fly to Katavi",
        description:
          "Morning forest walk then fly to Katavi National Park — Tanzania's most remote major park.",
        accommodation: "Katavi Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Katavi — Full Day Game Drive",
        description:
          "Full day exploring Katavi's vast floodplains — enormous hippo pods, crocodiles, elephants and lions crowd seasonal pools.",
        accommodation: "Katavi Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Katavi — Walking Safari & Game Drive",
        description:
          "Morning walking safari followed by afternoon game drive in Katavi's remote wilderness.",
        accommodation: "Katavi Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 6,
        title: "Return to Dar es Salaam",
        description:
          "Morning game drive then fly back to Dar es Salaam via Kigoma or direct charter.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: commonInclusions,
    exclusions: [
      ...commonExclusions,
      "Internal charter flights (quoted separately)",
    ],
  },
  {
    id: "sc-6d-nyerere-mikumi",
    title: "Nyerere & Mikumi — 6 Days",
    subtitle: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    parks: ["Nyerere (Selous)", "Mikumi"],
    highlights: [
      "Extended boat safari on Rufiji",
      "Walking safari & game drives",
      "Two nights under the Mikumi stars",
      "Best of southern Tanzania",
    ],
    image: "/selous.jpg",
    itinerary: [
      {
        day: 1,
        title: "Nyerere National Park — Evening Boat Safari",
        description:
          "Depart from Dar es Salaam to Nyerere (approx. 3–4 hours). Evening boat safari on Rufiji River.",
        accommodation: "Nyerere Tented Camp",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Nyerere — Full Day Game Drive",
        description:
          "Full day exploring Africa's largest national park — diverse wildlife in pristine wilderness.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Nyerere — Boat Safari & Full Day Game Drive",
        description:
          "Morning boat safari followed by afternoon game drive through Nyerere's varied habitats.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Walking Safari & Depart to Mikumi",
        description:
          "Early morning walking safari in Nyerere then depart to Mikumi National Park.",
        accommodation: "Camp Bastian",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Mikumi — Full Day Game Drive",
        description:
          "Full day game drive across Mikumi's open savanna encountering elephant, buffalo, zebra, lion and more.",
        accommodation: "Camp Bastian",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 6,
        title: "Mikumi — Morning Game Drive & Return",
        description:
          "Final morning game drive then return to Dar es Salaam via SGR train.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Boat safari and walking safari at Nyerere",
      "SGR train tickets (Morogoro – Dar es Salaam)",
    ],
    exclusions: commonExclusions,
  },
  {
    id: "sc-8d-mikumi-ruaha-isimila-nyerere",
    title: "Mikumi, Ruaha, Isimila Stone Age Site & Nyerere",
    subtitle: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    parks: ["Mikumi", "Ruaha", "Udzungwa Mountains", "Nyerere (Selous)"],
    highlights: [
      "Isimila Stone Age archaeological site",
      "Udzungwa mountain forest hike",
      "4 iconic southern parks",
      "Boat & walking safaris at Nyerere",
    ],
    image: "/packages images/ruaha.jpg",
    badge: "Adventure",
    itinerary: [
      {
        day: 1,
        title: "Mikumi National Park — Afternoon Game Drive",
        description:
          "SGR train to Morogoro, then drive to Mikumi. Afternoon game drive across the open plains.",
        accommodation: "Camp Bastian",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Mikumi — Morning Game Drive & Depart to Ruaha",
        description:
          "Morning game drive then long drive to Ruaha National Park (approx. 5–6 hours).",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Ruaha — Full Day Game Drive",
        description:
          "Full day in Tanzania's largest park — massive elephant herds, big cats, wild dogs and more.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Ruaha — Full Day Game Drive",
        description:
          "Another full day exploring the remote vast wilderness of Ruaha National Park.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Isimila Stone Age Site & Udzungwa Mountains",
        description:
          "Visit Isimila — one of Tanzania's most significant archaeological sites with ancient sandstone pillars and stone age tools. Depart to Udzungwa Mountains.",
        accommodation: "Udzungwa Falls Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 6,
        title: "Udzungwa — Sanje Waterfalls Hike & Depart to Morogoro",
        description:
          "Hike through Udzungwa Mountains forest to Sanje Waterfalls. Encounter rare endemic primates. Depart to Morogoro in the afternoon.",
        accommodation: "Forest Sunset Hotel, Morogoro",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 7,
        title: "Nyerere National Park — Evening Boat Safari",
        description:
          "Drive to Nyerere National Park (approx. 4–5 hours). Evening boat safari on the Rufiji River.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 8,
        title: "Nyerere — Game Drive, Walking Safari & Return",
        description:
          "Morning game drive in Nyerere then walking safari. Return to Dar es Salaam in the afternoon.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Boat safari and walking safari at Nyerere",
      "SGR train tickets (Dar es Salaam – Morogoro)",
    ],
    exclusions: commonExclusions,
  },
  {
    id: "sc-10d-best-southern",
    title: "Best of Tanzania Southern Circuit",
    subtitle: "10 Days / 9 Nights",
    days: 10,
    nights: 9,
    parks: ["Mikumi", "Ruaha", "Isimila Stone Age Site", "Udzungwa Mountains", "Nyerere (Selous)"],
    highlights: [
      "5 incredible destinations",
      "Stone Age archaeology at Isimila",
      "Chimpanzees & rare primates",
      "Multiple safari activities",
    ],
    image: "/packages images/nyerere-elephants.jpg",
    badge: "Ultimate",
    itinerary: [
      {
        day: 1,
        title: "Mikumi NP — Afternoon Game Drive",
        description:
          "SGR train to Morogoro then drive to Mikumi. Afternoon game drive.",
        accommodation: "Camp Bastian",
        meals: "Lunch and dinner",
      },
      {
        day: 2,
        title: "Mikumi — Morning Game Drive & Depart to Ruaha",
        description:
          "Morning game drive then long drive to Ruaha National Park.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Ruaha — Full Day Game Drive",
        description:
          "Full day in Tanzania's largest national park — massive herds, big cats and more.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Ruaha — Full Day Game Drive",
        description:
          "Another full day exploring the remote vast wilderness of Ruaha.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Isimila Stone Age Site & Udzungwa Mountains",
        description:
          "Visit Isimila archaeological site then drive to Udzungwa Mountains.",
        accommodation: "Udzungwa Falls Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 6,
        title: "Udzungwa — Sanje Waterfalls Hike & Morogoro",
        description:
          "Hike to spectacular Sanje Waterfalls through endemic primate habitat. Drive to Morogoro.",
        accommodation: "Forest Sunset Hotel, Morogoro",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 7,
        title: "Nyerere National Park — Evening Boat Safari",
        description:
          "Drive to Nyerere National Park. Evening boat safari on the Rufiji River.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 8,
        title: "Nyerere — Full Day Game Drive",
        description:
          "Full day game drive across the enormous Nyerere National Park.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 9,
        title: "Nyerere — Walking Safari & Full Day Game Drive",
        description:
          "Morning walking safari then afternoon game drive through Nyerere's diverse habitats.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 10,
        title: "Maasai Cultural Tour & Return to Dar",
        description:
          "Enriching Maasai Cultural Tour — experience traditional customs, dance and community life. Return to Dar es Salaam.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Boat safari, walking safari and cultural tour",
      "SGR train tickets",
    ],
    exclusions: commonExclusions,
  },
  {
    id: "sc-14d-western-ruaha",
    title: "Best of Tanzania Western Circuit & Ruaha",
    subtitle: "14 Days / 13 Nights",
    days: 14,
    nights: 13,
    parks: ["Ruaha", "Katavi", "Gombe", "Mahale", "Nyerere (Selous)"],
    highlights: [
      "Chimpanzee trekking at Gombe & Mahale",
      "Katavi's enormous hippo pools",
      "Remote western Tanzania wilderness",
      "Ultimate Tanzania experience",
    ],
    image: "/packages images/mahale.jpg",
    badge: "Premium",
    itinerary: [
      {
        day: 1,
        title: "Fly to Dar es Salaam & Transfer to Ruaha",
        description:
          "Arrive Dar es Salaam and connect to Ruaha National Park. Afternoon game drive.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Dinner",
      },
      {
        day: 2,
        title: "Ruaha — Full Day Game Drive",
        description:
          "Full day exploring Tanzania's largest national park — impressive elephant herds, big cats, wild dogs.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 3,
        title: "Ruaha — Full Day Game Drive",
        description:
          "Another full day in the vast wilderness of Ruaha National Park.",
        accommodation: "Ruaha Hill Top Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 4,
        title: "Fly to Katavi National Park",
        description:
          "Charter flight to Katavi — Tanzania's most remote and unspoiled national park. Afternoon game drive.",
        accommodation: "Katavi Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 5,
        title: "Katavi — Full Day Game Drive",
        description:
          "Enormous hippo pools, massive crocodiles, lions, elephants and leopards in one of Africa's last true wildernesses.",
        accommodation: "Katavi Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 6,
        title: "Katavi — Walking Safari & Game Drive",
        description:
          "Morning walking safari through Katavi's floodplains, afternoon game drive.",
        accommodation: "Katavi Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 7,
        title: "Fly to Gombe National Park",
        description:
          "Fly to Kigoma and boat transfer to Gombe. Afternoon forest walk.",
        accommodation: "Gombe Forest Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 8,
        title: "Gombe — Chimpanzee Trekking",
        description:
          "Full day trekking to observe chimpanzees in Jane Goodall's famous research site.",
        accommodation: "Gombe Forest Lodge",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 9,
        title: "Fly to Mahale Mountains",
        description:
          "Boat to Kigoma then charter to Mahale Mountains National Park. Arrive and explore lakeside.",
        accommodation: "Mahale Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 10,
        title: "Mahale — Chimpanzee Trekking",
        description:
          "Trek through Mahale Mountains to observe chimpanzees with the stunning Lake Tanganyika as backdrop.",
        accommodation: "Mahale Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 11,
        title: "Mahale — Forest Trails & Lake Tanganyika",
        description:
          "Morning forest hike, afternoon snorkelling and kayaking on Africa's deepest lake.",
        accommodation: "Mahale Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 12,
        title: "Fly to Nyerere National Park",
        description:
          "Charter flight to Nyerere. Evening boat safari on the Rufiji River.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 13,
        title: "Nyerere — Full Day Game Drive",
        description:
          "Full day in Africa's largest national park — diverse wildlife in pristine southern Tanzania wilderness.",
        accommodation: "Nyerere Tented Camp",
        meals: "Breakfast, lunch and dinner",
      },
      {
        day: 14,
        title: "Nyerere — Walking Safari & Return to Dar",
        description:
          "Morning walking safari then return to Dar es Salaam.",
        meals: "Breakfast and lunch",
      },
    ],
    inclusions: [
      ...commonInclusions,
      "Boat safari and walking safari",
      "Internal charter flights (between parks)",
    ],
    exclusions: commonExclusions,
  },
];

export type { SafariPackage, ItineraryDay };
