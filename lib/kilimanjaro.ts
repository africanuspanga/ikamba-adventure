export interface KiliDay {
  day: string;
  title: string;
  trekTime: string;
  zone: string;
  altitude: string;
  description: string;
}

export interface KiliRoute {
  id: string;
  name: string;
  duration: string;
  days: number;
  type: "Camping" | "Huts";
  difficulty: "Moderate" | "Demanding" | "Very Demanding";
  difficultyColor: string;
  successRate: string;
  image: string;
  description: string;
  highlights: string[];
  itinerary: KiliDay[];
  badge?: string;
}

const commonPackageIncludes = [
  "Two nights half board accommodation (one night before + one night after the climb)",
  "All necessary bookings with Kilimanjaro National Park",
  "Hiring, paying and provisioning of all guides and porters",
  "All climbers' and crew food",
  "All cooking and camping equipment (including sleeping bags and mats if needed)",
  "Free additional warm clothing and gear such as water bottles",
  "Free emergency Oxygen cylinder per climb",
  "Pre-climb gear check and full safety briefing/orientation",
  "Transport for climbers and crew to and from trailheads",
  "Base camp support throughout",
];

export const kilimanjaroRoutes: KiliRoute[] = [
  {
    id: "machame",
    name: "Machame Route",
    duration: "6 or 7 Days",
    days: 7,
    type: "Camping",
    difficulty: "Demanding",
    difficultyColor: "text-orange-500",
    successRate: "85%",
    image: "/machame-hut-camps.jpg",
    description:
      "Known as the 'Whiskey Route', Machame is the most scenic and popular camping route on Kilimanjaro. The diverse landscapes — from rainforest to high-altitude desert — make for a spectacular climb with excellent acclimatization.",
    highlights: [
      "Most scenic route on the mountain",
      "Excellent acclimatization profile",
      "Barranco Wall — thrilling scramble",
      "Stella Point and Uhuru Peak sunrise",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Machame Gate → Machame Camp",
        trekTime: "6 hours",
        zone: "Rainforest",
        altitude: "+1,200m / +3,940ft",
        description:
          "From Machame Gate at 1,800m, a 5–6 hour walk gradually ascending through lush forest to Machame Camp just above the forest at 3,000m.",
      },
      {
        day: "Day 2",
        title: "Machame Camp → Shira Camp",
        trekTime: "5 hours",
        zone: "Alpine Moorland",
        altitude: "+800m / +2,625ft",
        description:
          "Ascend a steep ridge through moorland to about 3,600m, then turn left crossing streams to Shira Camp at 3,840m on the expansive Shira Plateau.",
      },
      {
        day: "Day 3",
        title: "Shira Camp → Barranco Camp",
        trekTime: "7 hours",
        zone: "High Altitude Desert",
        altitude: "+100m / +330ft",
        description:
          "Trek through high-altitude desert up towards Kibo. Reach Lava Tower at 4,500m for acclimatization, then descend into the Barranco Valley to camp at 3,985m — a classic 'climb high, sleep low' day.",
      },
      {
        day: "Day 4",
        title: "Barranco Camp → Barafu Camp",
        trekTime: "8 hours",
        zone: "High Altitude Desert",
        altitude: "+700m / +2,300ft",
        description:
          "Climb the famous Barranco Wall — a steep 1–2 hour scramble ascending 300m. Follow the Kibo South Circuit with views of southern glaciers, through Karanga Valley to Barafu Camp at 4,600m.",
      },
      {
        day: "Day 5/6",
        title: "Barafu Camp → Summit → Mweka Camp",
        trekTime: "16 hours",
        zone: "Arctic Zone",
        altitude: "+1,300m / +4,265ft",
        description:
          "Depart at midnight. Zig-zag up scree to reach Stella Point on the crater rim (5,750m) at dawn, then continue to Uhuru Peak — Africa's highest point at 5,896m. Descend to Mweka Camp at 3,100m.",
      },
      {
        day: "Day 6/7",
        title: "Mweka Camp → Mweka Gate",
        trekTime: "4 hours",
        zone: "Rainforest",
        altitude: "Descent",
        description:
          "Final descent through the forest to Mweka Gate where vehicles await to transport you back to the hotel.",
      },
    ],
    badge: "Most Popular",
  },
  {
    id: "lemosho",
    name: "Lemosho Route",
    duration: "7 or 8 Days",
    days: 8,
    type: "Camping",
    difficulty: "Demanding",
    difficultyColor: "text-orange-500",
    successRate: "90%",
    image: "/lemosho.jpg",
    description:
      "The Lemosho Route is widely regarded as the best route on Kilimanjaro, offering the highest summit success rates, superb scenery and excellent acclimatization. Starting from the remote western slopes, it traverses the entire mountain.",
    highlights: [
      "Highest success rates of all routes",
      "Remote Lemosho Glades start",
      "Traverse the entire mountain",
      "Shira Cathedral optional side trip",
    ],
    badge: "Best Success Rate",
    itinerary: [
      {
        day: "Day 1",
        title: "Londorossi Gate → Mti Mkubwa Camp",
        trekTime: "4 hours",
        zone: "Rainforest",
        altitude: "+600m / +1,970ft",
        description:
          "Long drive to Londorossi Gate (2,000m) and trailhead at Lemosho Glades (2,200m). Ascend steeply through lush forest to Mti Mkubwa camp at 2,800m — dominated by a magnificent large tree.",
      },
      {
        day: "Day 2",
        title: "Mti Mkubwa → Shira One Camp",
        trekTime: "6 hours",
        zone: "Alpine Moorland",
        altitude: "+700m / +2,300ft",
        description:
          "Emerge onto the moorland, detour northwards around the Shira ridge through rugged moorland with views to the plains below. Drop onto the Shira Plateau to camp at Shira One (3,500m).",
      },
      {
        day: "Day 3",
        title: "Shira One → Shira Two Camp",
        trekTime: "5 hours",
        zone: "Alpine Moorland",
        altitude: "+300m / +985ft",
        description:
          "Continue across the plateau towards Kibo, with an optional side trip to Shira Cathedral and Shira Needle. Visit Cone Place — the centre of the extinct Shira volcano.",
      },
      {
        day: "Day 4",
        title: "Shira Two → Barranco Camp",
        trekTime: "7 hours",
        zone: "High Altitude Desert",
        altitude: "+200m / +660ft",
        description:
          "Trek through high-altitude desert towards Kibo. Reach Lava Tower at 4,500m then descend into Barranco Valley (3,985m) — a classic acclimatization day.",
      },
      {
        day: "Day 5",
        title: "Barranco Camp → Barafu Camp",
        trekTime: "8 hours",
        zone: "High Altitude Desert",
        altitude: "+700m / +2,300ft",
        description:
          "Climb the Barranco Wall, follow the Kibo South Circuit past Karanga Valley to Barafu Camp at 4,600m.",
      },
      {
        day: "Day 6/7",
        title: "Barafu Camp → Summit → Mweka Camp",
        trekTime: "16 hours",
        zone: "Arctic Zone",
        altitude: "+1,300m / +4,265ft",
        description:
          "Midnight start, summit Uhuru Peak at 5,896m at dawn. Descend to Mweka or Millennium Camp.",
      },
      {
        day: "Day 7/8",
        title: "Mweka Camp → Mweka Gate",
        trekTime: "4 hours",
        zone: "Rainforest",
        altitude: "Descent",
        description:
          "Final descent through the forest to Mweka Gate. Transfer back to hotel.",
      },
    ],
  },
  {
    id: "marangu",
    name: "Marangu Route",
    duration: "5 or 6 Days",
    days: 6,
    type: "Huts",
    difficulty: "Moderate",
    difficultyColor: "text-green-500",
    successRate: "65%",
    image: "/marangu.jpg",
    description:
      "Known as the 'Coca-Cola Route', Marangu is the only route offering dormitory hut accommodation. It's the most accessible route, following the same trail for both ascent and descent — perfect for those preferring comfort over camping.",
    highlights: [
      "Only route with hut accommodation",
      "Comfortable dormitory sleeping",
      "Well-maintained trail",
      "Visit Maundi Crater near Mandara Hut",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Marangu Gate → Mandara Hut",
        trekTime: "4 hours",
        zone: "Rainforest",
        altitude: "+1,000m / +3,280ft",
        description:
          "Start at Marangu Gate (1,600m) and ascend through lush rainforest to Mandara Hut (2,700m). Optional afternoon visit to Maundi Crater with views of Mawenzi.",
      },
      {
        day: "Day 2",
        title: "Mandara Hut → Horombo Hut",
        trekTime: "7 hours",
        zone: "Alpine Moorland",
        altitude: "+1,000m / +3,280ft",
        description:
          "From the forest into spectacular alpine moorland with heather, everlasting flowers and giant groundsel. Stunning views of Kibo, Mawenzi and the plains below. Horombo Hut at 3,700m.",
      },
      {
        day: "Optional Day 3",
        title: "Horombo Hut — Acclimatization Day",
        trekTime: "5 hours",
        zone: "High Altitude Desert",
        altitude: "Acclimatization",
        description:
          "Optional extra day at Horombo — morning walk towards the saddle between Kibo and Mawenzi, afternoon to relax and acclimatize.",
      },
      {
        day: "Day 3/4",
        title: "Horombo Hut → Kibo Hut",
        trekTime: "7 hours",
        zone: "High Altitude Desert",
        altitude: "+1,000m / +3,280ft",
        description:
          "Ascend through the high altitude 'saddle' desert between Kibo and Mawenzi peaks to Kibo Hut at 4,700m. Upper or lower route options available.",
      },
      {
        day: "Day 4/5",
        title: "Kibo Hut → Summit → Horombo Hut",
        trekTime: "15 hours",
        zone: "Arctic Zone",
        altitude: "+1,200m / +3,940ft",
        description:
          "Midnight start. Ascend to Gillman's Point (5,700m) then Uhuru Peak (5,896m) at dawn. Descend to Horombo Hut.",
      },
      {
        day: "Day 5/6",
        title: "Horombo Hut → Marangu Gate",
        trekTime: "6 hours",
        zone: "Rainforest",
        altitude: "Descent",
        description:
          "Descend through Mandara Hut to Marangu Gate where vehicles await. Certificate presentation.",
      },
    ],
  },
  {
    id: "rongai-5day",
    name: "Rongai Route (5 Day)",
    duration: "5 Days",
    days: 5,
    type: "Camping",
    difficulty: "Demanding",
    difficultyColor: "text-orange-500",
    successRate: "70%",
    image: "/uhuru-peak-rongai.jpg",
    description:
      "The Rongai Route approaches Kilimanjaro from the north — the only route from the Kenyan side. This remote, less-traveled path offers a unique perspective of the mountain through pristine forests and vast moorlands.",
    highlights: [
      "Unique north-side approach from Kenya",
      "Remote and less-crowded trail",
      "Views of both Kibo and Mawenzi",
      "Only 5-day camping route permitted",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Nalemuru Gate → Simba Camp",
        trekTime: "4 hours",
        zone: "Rainforest",
        altitude: "+600m / +1,970ft",
        description:
          "Drive to the gate at 2,000m on the north-eastern side of the mountain. Ascend through forest to Simba Camp at 2,600m just above the treeline.",
      },
      {
        day: "Day 2",
        title: "Simba Camp → Third Cave",
        trekTime: "8 hours",
        zone: "Alpine Moorland",
        altitude: "+1,100m / +3,610ft",
        description:
          "Ascend through alpine moorland to Second Cave (3,500m) for lunch then continue directly towards Kibo to Third Cave at 3,700m.",
      },
      {
        day: "Day 3",
        title: "Third Cave → Kibo Hut",
        trekTime: "5 hours",
        zone: "High Altitude Desert",
        altitude: "+1,000m / +3,280ft",
        description:
          "Cross the moonscape saddle between Kibo and Mawenzi — high altitude desert at its most dramatic — to Kibo Hut at 4,700m.",
      },
      {
        day: "Day 4/5",
        title: "Kibo Hut → Summit → Horombo Hut",
        trekTime: "15 hours",
        zone: "Arctic Zone",
        altitude: "+1,000m / +3,280ft",
        description:
          "Midnight start. Reach Gillman's Point (5,700m) then summit Uhuru Peak (5,896m) at dawn. Descend to Horombo Hut.",
      },
      {
        day: "Day 5/6",
        title: "Horombo Hut → Marangu Gate",
        trekTime: "6 hours",
        zone: "Rainforest",
        altitude: "Descent",
        description:
          "Final descent through Mandara Hut to Marangu Gate. Transfer back to hotel.",
      },
    ],
  },
  {
    id: "rongai-67day",
    name: "Rongai Route (6–7 Day)",
    duration: "6 or 7 Days",
    days: 7,
    type: "Camping",
    difficulty: "Moderate",
    difficultyColor: "text-green-500",
    successRate: "80%",
    image: "/uhuru-peak-rongai.jpg",
    description:
      "The extended Rongai Route via Mawenzi Tarn offers superior acclimatization and breathtaking views of Mawenzi Peak's dramatic rock faces. A scenic, less-crowded alternative to the southern routes.",
    highlights: [
      "Dramatic Mawenzi Tarn setting",
      "Superior acclimatization profile",
      "Views into the Small Barranco",
      "Unique Mawenzi Peak perspectives",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Nalemuru Gate → Simba Camp",
        trekTime: "4 hours",
        zone: "Rainforest",
        altitude: "+600m / +1,970ft",
        description:
          "Drive to the north-eastern gate at 2,000m. Ascend through forest to Simba Camp at 2,600m.",
      },
      {
        day: "Day 2",
        title: "Simba Camp → Kikelewa Camp",
        trekTime: "8 hours",
        zone: "Alpine Moorland",
        altitude: "+1,100m / +3,600ft",
        description:
          "Ascend to Second Cave (3,500m) for lunch then fork left towards Mawenzi. Reach Kikelewa Cave at 3,690m — a long but rewarding day.",
      },
      {
        day: "Day 3",
        title: "Kikelewa Camp → Mawenzi Tarn",
        trekTime: "4 hours",
        zone: "High Altitude Desert",
        altitude: "+700m / +2,300ft",
        description:
          "Steep ridge climb towards Mawenzi, then descend into the Tarn Valley to camp at 4,320m. Afternoon hike into the Mawenzi North Corrie for dramatic views.",
      },
      {
        day: "Optional Rest Day",
        title: "Mawenzi Tarn — Acclimatization",
        trekTime: "Rest day",
        zone: "High Altitude Desert",
        altitude: "Acclimatization",
        description:
          "Optional extra day at Mawenzi Tarn for acclimatization — explore the corrie and admire Kibo across the saddle.",
      },
      {
        day: "Day 4/5",
        title: "Mawenzi Tarn → Kibo Hut",
        trekTime: "5 hours",
        zone: "High Altitude Desert",
        altitude: "+400m / +1,315ft",
        description:
          "Descend to the saddle and cross the high altitude desert to Kibo Hut at 4,700m.",
      },
      {
        day: "Day 5/6",
        title: "Kibo Hut → Summit → Horombo Hut",
        trekTime: "15 hours",
        zone: "Arctic Zone",
        altitude: "+1,000m / +3,280ft",
        description:
          "Midnight summit attempt. Gillman's Point (5,700m) then Uhuru Peak (5,896m) at dawn. Descend to Horombo Hut.",
      },
      {
        day: "Day 6/7",
        title: "Horombo Hut → Marangu Gate",
        trekTime: "6 hours",
        zone: "Rainforest",
        altitude: "Descent",
        description:
          "Final descent to Marangu Gate and transfer to hotel.",
      },
    ],
  },
  {
    id: "umbwe",
    name: "Umbwe Route",
    duration: "6 Days",
    days: 6,
    type: "Camping",
    difficulty: "Very Demanding",
    difficultyColor: "text-red-500",
    successRate: "60%",
    image: "/umbwe-route.jpg",
    description:
      "The Umbwe Route is the most direct and challenging route on Kilimanjaro — a steep, dramatic ascent through the southern face. For experienced, fit climbers only. The views into the Umbwe Valley — Kilimanjaro's largest valley — are spectacular.",
    highlights: [
      "Most direct route to the summit",
      "Dramatic views of Umbwe Valley",
      "For experienced mountaineers",
      "Least crowded major route",
    ],
    badge: "Expert Only",
    itinerary: [
      {
        day: "Day 1",
        title: "Umbwe Gate → Forest Camp",
        trekTime: "6 hours",
        zone: "Rainforest",
        altitude: "+600m / +1,970ft",
        description:
          "From Umbwe Gate (1,800m), ascend steeply through lush forest to Forest Camp at 2,400m — one of the most demanding first days on Kilimanjaro.",
      },
      {
        day: "Day 2",
        title: "Forest Camp → Barranco Camp",
        trekTime: "7 hours",
        zone: "Alpine Moorland",
        altitude: "+1,300m / +4,265ft",
        description:
          "Steep ascent up the Umbwe Valley ridge with stunning views of Kibo peak and into the valley depths — the largest valley on Kibo's slopes. Reach Barranco Camp at 3,950m.",
      },
      {
        day: "Day 3",
        title: "Barranco Camp → Karanga Valley",
        trekTime: "4 hours",
        zone: "Alpine Moorland",
        altitude: "+100m / +330ft",
        description:
          "Climb the Barranco Wall then follow the Kibo South Circuit with views of the southern glaciers to Karanga Valley Camp at 4,000m.",
      },
      {
        day: "Day 4",
        title: "Karanga Valley → Barafu Camp",
        trekTime: "3 hours",
        zone: "High Altitude Desert",
        altitude: "+600m / +1,970ft",
        description:
          "Short day — climbers often depart mid-morning. Ascend to Barafu Camp at 4,600m with terrific views of the Red Wall ridge.",
      },
      {
        day: "Day 5",
        title: "Barafu Camp → Summit → Mweka Camp",
        trekTime: "16 hours",
        zone: "Arctic Zone",
        altitude: "+1,300m / +4,265ft",
        description:
          "Midnight start — zig-zag up scree to Stella Point (5,750m) at dawn then on to Uhuru Peak (5,896m), Africa's highest point. Descend to Mweka Camp.",
      },
      {
        day: "Day 6",
        title: "Mweka Camp → Mweka Gate",
        trekTime: "4 hours",
        zone: "Rainforest",
        altitude: "Descent",
        description:
          "Final descent through the forest to Mweka Gate where vehicles await for transfer back to hotel.",
      },
    ],
  },
];

export { commonPackageIncludes };
