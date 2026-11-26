// Himalayan Travel Agency Data (Himachal Pradesh & Uttarakhand)
const TRAVEL_DATA = {
  company: {
    name: "Abhi.tourist",
    tagline: "Making The Himalayas Your Playground",
    established: "2016",
    headOffice: "The Mall Road, Near Circuit House, Manali, Himachal Pradesh 175131",
    branchOffice: "Rajpur Road, Opposite Silver City, Dehradun, Uttarakhand 248001",
    phone: "+91 98160 84321",
    altPhone: "+91 88942 12090",
    email: "explore@abhitourist.com",
    whatsapp: "+919816084321",
    stats: {
      tourPacks: "240+",
      destinations: "48+",
      localGuides: "450+",
      happyTravelers: "18,500+",
      rating: "4.9/5"
    }
  },

  destinations: [
    {
      id: "manali",
      name: "Manali & Solang Valley",
      state: "Himachal Pradesh",
      badge: "Top Summer & Snow Pick",
      packagesCount: 18,
      altitude: "2,050 m (6,726 ft)",
      bestTime: "Year Round (Snow: Dec-Feb)",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      description: "Nestled along the Beas River, Manali offers apple orchards, snow-covered Solang Valley, Atal Tunnel thrills, and vibrant Old Manali cafe culture."
    },
    {
      id: "spiti",
      name: "Spiti Valley & Chandratal",
      state: "Himachal Pradesh",
      badge: "The Middle Land",
      packagesCount: 12,
      altitude: "3,800 m (12,500 ft)",
      bestTime: "May to October",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      description: "High-altitude desert wonderland featuring ancient 1,000-year-old monasteries, world's highest post office at Hikkim, and the crescent Chandratal Lake."
    },
    {
      id: "rishikesh",
      name: "Rishikesh & Haridwar",
      state: "Uttarakhand",
      badge: "Yoga & Adventure Capital",
      packagesCount: 15,
      altitude: "372 m (1,220 ft)",
      bestTime: "September to June",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      description: "Holy Ganges waters, thrilling Grade-IV white water rafting, riverside luxury camps, bungee jumping, and spiritually electrifying evening Ganga Aarti."
    },
    {
      id: "kedarnath",
      name: "Kedarnath & Chopta Tungnath",
      state: "Uttarakhand",
      badge: "Sacred Peaks & Treks",
      packagesCount: 14,
      altitude: "3,583 m (11,755 ft)",
      bestTime: "May to June, Sep to Nov",
      image: "https://images.unsplash.com/photo-1600100397608-f010f443b794?auto=format&fit=crop&w=800&q=80",
      description: "Revered Jyotirlinga nestled amidst Mandakini snow peaks, combined with Chopta 'Mini Switzerland' and Tungnath, world's highest Shiva temple."
    },
    {
      id: "shimla",
      name: "Shimla, Kufri & Narkanda",
      state: "Himachal Pradesh",
      badge: "Colonial Queen of Hills",
      packagesCount: 14,
      altitude: "2,276 m (7,467 ft)",
      bestTime: "March to June, Dec to Feb",
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
      description: "Historic Mall Road, heritage toy train, panoramic Himalayan views at Jakhoo hill, and apple blossom orchards stretching to Narkanda."
    },
    {
      id: "dharamshala",
      name: "Dharamshala & Bir Billing",
      state: "Himachal Pradesh",
      badge: "Little Lhasa & Paragliding",
      packagesCount: 11,
      altitude: "1,457 m (4,780 ft)",
      bestTime: "March to June, Sep to Dec",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      description: "Residence of the Dalai Lama, Tibetan monasteries, cedar forests of McLeodganj, and the world's second-highest paragliding takeoff at Bir Billing."
    },
    {
      id: "nainital",
      name: "Nainital & Jim Corbett",
      state: "Uttarakhand",
      badge: "Lakes & Tiger Safari",
      packagesCount: 10,
      altitude: "2,084 m (6,837 ft)",
      bestTime: "October to June",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      description: "Romantic boat rides on the eye-shaped Naini Lake, misty viewpoint cable cars, followed by open Gypsy safaris into Bengal tiger territory at Corbett."
    },
    {
      id: "kasol",
      name: "Kasol, Tosh & Parvati Valley",
      state: "Himachal Pradesh",
      badge: "Backpacker Paradise",
      packagesCount: 9,
      altitude: "1,580 m (5,180 ft)",
      bestTime: "March to June, Sep to Nov",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      description: "Chirping pine forests along Parvati river, Israeli cafes, natural sulphur hot springs in Manikaran, and scenic village hikes to Tosh & Kheerganga."
    },
    {
      id: "auli",
      name: "Auli & Mussoorie",
      state: "Uttarakhand",
      badge: "Skiing Wonderland",
      packagesCount: 8,
      altitude: "2,800 m (9,200 ft)",
      bestTime: "Dec to March (Snow), Apr to Jun",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      description: "Premier winter ski slopes of India facing Nanda Devi peak, India's highest ropeway, coupled with Mussoorie's cascading Kempty Falls and Gun Hill."
    }
  ],

  packages: [
    {
      id: "pkg-spiti-circuit",
      title: "Spiti Valley 4x4 Expedition & Stargazing",
      destination: "Spiti Valley",
      state: "Himachal Pradesh",
      category: "adventure",
      duration: "7 Days / 6 Nights",
      rating: 4.95,
      reviewsCount: 168,
      price: 18499,
      originalPrice: 22999,
      discount: "20% OFF",
      featured: true,
      pickup: "Shimla or Chandigarh",
      drop: "Manali or Chandigarh",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80",
      badge: "Bestseller Adventure",
      overview: "An epic high-altitude road journey covering Kinnaur, Tabo, Kaza, Key Monastery, Hikkim, Komic, Langza, and camping beside the pristine blue Chandratal Lake.",
      highlights: [
        "4x4 Expedition vehicle with veteran mountain captain",
        "Visit World's Highest Post Office (Hikkim) & send a postcard",
        "Stargazing & Milky Way photography at Chandratal camp",
        "Cross 15,060 ft Kunzum Pass and Atal Tunnel",
        "All permits, homestays, breakfast & dinner included"
      ],
      itinerary: [
        { day: "Day 1", title: "Shimla to Sangla / Kalpa", desc: "Drive along Hindustan-Tibet highway, dramatic Sutlej river gorge, overnight stay with views of Kinner Kailash." },
        { day: "Day 2", title: "Kalpa to Nako & Tabo", desc: "Pass Khab (confluence of Spiti & Sutlej), visit Nako Lake, and 1,000-year-old UNESCO Tabo Monastery." },
        { day: "Day 3", title: "Tabo to Dhankar & Kaza", desc: "Explore cliffside Dhankar Monastery, reach Kaza, visit local Tibetan handicraft markets." },
        { day: "Day 4", title: "Highest Villages: Hikkim, Komic, Langza & Key", desc: "Send postcards from Hikkim (14,567 ft), high village Komic, Buddha statue at Langza, Key Gompa." },
        { day: "Day 5", title: "Kaza to Chandratal via Kunzum Pass", desc: "Cross the mighty Kunzum Pass (4,551 m), arrive at Chandratal 'Moon Lake', luxury alpine camp." },
        { day: "Day 6", title: "Chandratal to Manali via Batal & Atal Tunnel", desc: "Rugged dirt tracks through Chhatru, Batal, cross through the engineering marvel Atal Tunnel to Manali." },
        { day: "Day 7", title: "Manali Departure", desc: "Morning exploration of Old Manali cafes, shopping on Mall Road, departure to Chandigarh/Delhi." }
      ],
      inclusions: ["6 Nights Boutique Homestays & Swiss Tents", "Breakfast & Dinner Daily", "Dedicated 4x4 Mountain Vehicle with Fuel", "Oxygen Cylinder & First Aid Onboard", "Inner Line Permits & Tolls"],
      exclusions: ["Personal expenses & tips", "Monument entry fees", "Lunches", "Travel insurance"]
    },
    {
      id: "pkg-manali-solang",
      title: "Enchanting Manali, Solang Valley & Kasol Escape",
      destination: "Manali & Solang",
      state: "Himachal Pradesh",
      category: "honeymoon",
      duration: "5 Days / 4 Nights",
      rating: 4.88,
      reviewsCount: 242,
      price: 11999,
      originalPrice: 15499,
      discount: "22% OFF",
      featured: true,
      pickup: "Chandigarh / Delhi / Bhuntar",
      drop: "Chandigarh / Delhi",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      badge: "Top Rated Couple & Family",
      overview: "Experience snow adventures in Solang Valley, drive through Atal Tunnel to snowy Sissu waterfalls, relax in cedar scented Old Manali, and unwind by Parvati River in Kasol.",
      highlights: [
        "Snow activities & cable car in Solang Valley",
        "Drive through 9.02 km Atal Tunnel to Lahaul Valley",
        "Riverside stay & Israeli bakery exploration in Kasol",
        "Hadimba Devi temple, Vashisht hot springs, Mall Road",
        "Complimentary candlelight dinner for honeymooners"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Manali & Local Sights", desc: "Check-in to mountain resort, visit Hadimba Temple, Club House, Van Vihar, and stroll Mall Road." },
        { day: "Day 2", title: "Solang Valley Snow Thrills & Atal Tunnel", desc: "Full day excursion to Solang Valley for Zorbing/Quad biking, cross Atal Tunnel into mystical Sissu waterfall." },
        { day: "Day 3", title: "Naggar Castle & Heritage Art Tour", desc: "Visit historic timber-and-stone Naggar Castle, Roerich Art Gallery, trout fish tasting by the Beas river." },
        { day: "Day 4", title: "Manali to Kasol & Manikaran Sahib", desc: "Scenic transfer to Parvati Valley. Visit Manikaran hot springs and gurdwara, cozy cafe hopping in Kasol." },
        { day: "Day 5", title: "Kasol Riverside Morning & Departure", desc: "Morning riverside trail walk along Parvati river, transfer back to Chandigarh or Delhi with fond memories." }
      ],
      inclusions: ["4 Nights in 4-Star Mountain View Rooms", "Daily Buffet Breakfast & Dinner", "Private Sedan / SUV for all sightseeing", "Atal Tunnel & Green Tax permits", "Welcome Drinks on Arrival"],
      exclusions: ["Activity charges (Paragliding/Zorbing)", "Lunches & Personal Shopping", "Heater charges if applicable"]
    },
    {
      id: "pkg-kedarnath-chopta",
      title: "Sacred Kedarnath & Chopta Tungnath Trek",
      destination: "Kedarnath & Chopta",
      state: "Uttarakhand",
      category: "spiritual",
      duration: "6 Days / 5 Nights",
      rating: 4.96,
      reviewsCount: 310,
      price: 15999,
      originalPrice: 19999,
      discount: "20% OFF",
      featured: true,
      pickup: "Haridwar or Rishikesh",
      drop: "Haridwar or Rishikesh",
      image: "https://images.unsplash.com/photo-1600100397608-f010f443b794?auto=format&fit=crop&w=800&q=80",
      badge: "Divine Himalayan Pilgrimage",
      overview: "The most sacred journey in the Garhwal Himalayas. Trek or take helicopter to the majestic 8th-century Kedarnath Jyotirlinga, followed by serene Chopta meadows and Tungnath temple.",
      highlights: [
        "Kedarnath VIP Darshan & Puja coordination",
        "Trek to world's highest Shiva temple: Tungnath (12,073 ft)",
        "Scenic drive along Ganga, Mandakini & Alaknanda rivers",
        "Chopta 'Mini Switzerland' alpine meadow camping",
        "Helicopter booking assistance available on request"
      ],
      itinerary: [
        { day: "Day 1", title: "Haridwar/Rishikesh to Guptkashi", desc: "Drive along sacred river confluences (Devprayag & Rudraprayag). Overnight in Guptkashi/Phata." },
        { day: "Day 2", title: "Guptkashi to Kedarnath (16 km Trek / Heli)", desc: "Early morning transfer to Gaurikund. Trek uphill amidst chanting pilgrims to the holy Kedarnath shrine. Evening Aarti." },
        { day: "Day 3", title: "Morning Darshan & Descend to Guptkashi", desc: "Early morning temple darshan with snow peaks glowing in sunrise. Descend down to Gaurikund and drive to hotel." },
        { day: "Day 4", title: "Guptkashi to Chopta Meadows", desc: "Drive through dense rhododendron and deodar forests to Chopta. Swiss camp check-in, campfire under stars." },
        { day: "Day 5", title: "Trek to Tungnath & Chandrashila Peak", desc: "3.5 km scenic stone-paved trail to Tungnath Temple and breathtaking 360-degree Himalayan view from Chandrashila (13,000 ft)." },
        { day: "Day 6", title: "Chopta to Rishikesh / Haridwar Return", desc: "Scenic descent to Rishikesh. Optional Ganga Aarti at Triveni Ghat and drop at station." }
      ],
      inclusions: ["5 Nights Accommodation (Hotels & Swiss Tents)", "Daily MAP Meals (Breakfast & Dinner)", "Dedicated Vehicle with Experienced Mountain Chauffeur", "Medical First Aid & Oxygen Support", "Kedarnath Yatra Registration Assistance"],
      exclusions: ["Pony/Palki/Helicopter ticket fare", "VIP Darshan pass fees", "Personal porter charges"]
    },
    {
      id: "pkg-rishikesh-adventure",
      title: "Rishikesh White Water Rafting, Bungee & Riverside Camp",
      destination: "Rishikesh",
      state: "Uttarakhand",
      category: "adventure",
      duration: "3 Days / 2 Nights",
      rating: 4.89,
      reviewsCount: 195,
      price: 6499,
      originalPrice: 8999,
      discount: "28% OFF",
      featured: true,
      pickup: "Dehradun / Haridwar / Rishikesh",
      drop: "Dehradun / Haridwar / Rishikesh",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      badge: "High Adrenaline Weekend",
      overview: "Electrifying weekend getaway featuring 16 km Ganga River rafting with famous rapids like Roller Coaster and Golf Course, cliff jumping, luxury riverside camping, and Parmarth Niketan Aarti.",
      highlights: [
        "16 km Grade III+ river rafting with certified river guide",
        "Body surfing & cliff jumping in the emerald Ganges",
        "Riverside Swiss camp with swimming pool & bonfire",
        "Evening Ganga Aarti & Beatles Ashram exploration",
        "Optional 83m India's highest Bungee Jump slot"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival in Rishikesh & Camp Check-in", desc: "Arrive at riverside luxury camp in Shivpuri. Enjoy outdoor games, sunset over river, evening bonfire & music." },
        { day: "Day 2", title: "River Rafting & Cliff Jumping Thrill", desc: "Gear up with lifejackets for the famous 16 km Shivpuri to NIM beach rafting run. Brave rapids, jump from 25ft cliff, relax at riverside cafe." },
        { day: "Day 3", title: "Beatles Ashram, Laxman Jhula & Departure", desc: "Explore historic Beatles Ashram, Laxman Jhula pedestrian suspension bridge, local cafe brunch, and departure." }
      ],
      inclusions: ["2 Nights Luxury Camp stay with attached washrooms", "All Meals (2 Breakfasts, 2 Lunches, 2 Dinners)", "16 km River Rafting with all safety gear & guides", "Evening Bonfire with snacks & music", "Local Transfers between camp and river point"],
      exclusions: ["Bungee Jump & Giant Swing ticket", "Transport from hometown to Rishikesh", "Any personal bar orders"]
    },
    {
      id: "pkg-dharamshala-bir",
      title: "Dharamshala, McLeodganj & Bir Billing Paragliding",
      destination: "Dharamshala & Bir",
      state: "Himachal Pradesh",
      category: "adventure",
      duration: "5 Days / 4 Nights",
      rating: 4.91,
      reviewsCount: 142,
      price: 13499,
      originalPrice: 16999,
      discount: "21% OFF",
      featured: false,
      pickup: "Pathankot / Gaggal / Chandigarh",
      drop: "Pathankot / Chandigarh",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      badge: "Sky Soaring & Tibetan Soul",
      overview: "Fly like a bird at world's premier paragliding site at Bir Billing, witness the serene abode of the Dalai Lama in McLeodganj, and taste authentic Tibetan momos and herbal tea.",
      highlights: [
        "Tandem Paragliding flight from 8,000 ft with GoPro recording",
        "Dalai Lama Temple, Namgyal Monastery & Norbulingka",
        "Bhagsunag waterfall hike and quaint cafes",
        "Tea garden tour in Kangra Valley",
        "Cozy mountain resort stays"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrive Dharamshala / McLeodganj", desc: "Arrival and check-in to hillside hotel. Visit Tsuglagkhang Complex (Dalai Lama Temple), Tibetan handicraft market." },
        { day: "Day 2", title: "McLeodganj, Bhagsu & St. John in Wilderness", desc: "Hike to Bhagsu Waterfall, visit historic neo-Gothic church hidden in deodar forest, sunset at Dharamkot." },
        { day: "Day 3", title: "Kangra Fort & Scenic Drive to Bir", desc: "Tour the oldest recorded fort in India (Kangra Fort) and drive to the paragliding hub of Bir." },
        { day: "Day 4", title: "Paragliding Takeoff at Billing (8,000 ft)", desc: "Jeep transfer to Billing takeoff cliff. Soar 20-30 mins in Himalayan thermal updrafts with instructor. Land at Bir. Explore monasteries & cafes." },
        { day: "Day 5", title: "Bir Colony Cycle Ride & Departure", desc: "Morning mountain cycle ride around Bir Tibetan colony, souvenir shopping, departure transfer." }
      ],
      inclusions: ["4 Nights 3/4-Star Hotels", "Daily Breakfast & Dinner", "Tandem Paragliding with GoPro Video", "Private AC Cab for entire circuit", "Sightseeing & driver allowances"],
      exclusions: ["Lunches", "Monastery camera permits", "Entry tickets"]
    },
    {
      id: "pkg-shimla-kufri-chail",
      title: "Shimla, Kufri & Chail Heritage Mountain Holiday",
      destination: "Shimla & Kufri",
      state: "Himachal Pradesh",
      category: "family",
      duration: "4 Days / 3 Nights",
      rating: 4.84,
      reviewsCount: 180,
      price: 8999,
      originalPrice: 11999,
      discount: "25% OFF",
      featured: false,
      pickup: "Kalka / Chandigarh / Delhi",
      drop: "Chandigarh / Delhi",
      image: "https://images.unsplash.com/photo-1597074866923-dc0589150358?auto=format&fit=crop&w=800&q=80",
      badge: "Family Favorite Classic",
      overview: "Relive British colonial charm on Shimla Mall Road, take in snow views and yak rides at Kufri, and stroll through Chail Palace and world's highest cricket ground.",
      highlights: [
        "Stroll along historic Mall Road, Ridge & Christ Church",
        "Panoramic snow views & amusement rides at Kufri",
        "Visit Chail Palace and world's highest cricket ground",
        "Jakhoo Temple cable car ride with giant Hanuman statue",
        "Ideal easy-paced vacation for seniors and kids"
      ],
      itinerary: [
        { day: "Day 1", title: "Chandigarh to Shimla Scenic Drive", desc: "Drive along the Himalayan Expressway, check-in to Shimla hotel. Evening free to explore Mall Road." },
        { day: "Day 2", title: "Kufri Snow View & Adventure Park", desc: "Excursion to Kufri (2,622 m). Enjoy pony rides to Mahasu Peak, Himalayan Nature Park, and snow fun." },
        { day: "Day 3", title: "Chail Day Excursion & Heritage Walk", desc: "Visit Chail Palace heritage grounds, deodar woods, world's highest cricket pitch, return to Shimla." },
        { day: "Day 4", title: "Shimla to Chandigarh Departure", desc: "Morning visit to Indian Institute of Advanced Study (Viceregal Lodge), transfer back to Chandigarh." }
      ],
      inclusions: ["3 Nights Deluxe Hotel Stay", "Breakfast & Dinner", "Dedicated Cab for 4 Days", "Driver charges, tolls, parking"],
      exclusions: ["Toy train tickets", "Kufri pony rides & amusement entry", "Lunch"]
    },
    {
      id: "pkg-nainital-corbett",
      title: "Nainital Lake Splendor & Jim Corbett Tiger Safari",
      destination: "Nainital & Jim Corbett",
      state: "Uttarakhand",
      category: "family",
      duration: "5 Days / 4 Nights",
      rating: 4.92,
      reviewsCount: 215,
      price: 14999,
      originalPrice: 18999,
      discount: "21% OFF",
      featured: false,
      pickup: "Delhi / Kathgodam",
      drop: "Delhi / Kathgodam",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      badge: "Lakes & Wildlife Combo",
      overview: "The quintessential Kumaon getaway! Cruise across tranquil Naini Lake, explore Bhimtal and Naukuchiatal, then plunge into the deep sal forests of Jim Corbett for wild elephant and Bengal tiger sightings.",
      highlights: [
        "Boat ride on Naini Lake & aerial cable car to Snow View",
        "4x4 Open Gypsy Safari inside Jim Corbett National Park",
        "Visit Corbett Falls & Corbett Museum at Kaladhungi",
        "Lake tour: Bhimtal island, Sattal, Naukuchiatal",
        "Stay at luxury jungle resort with pool & bonfire"
      ],
      itinerary: [
        { day: "Day 1", title: "Delhi/Kathgodam to Nainital", desc: "Scenic mountain climb to Nainital. Check in, evening leisure boating on Naini Lake and Naina Devi temple visit." },
        { day: "Day 2", title: "Nainital Local Lakes & Viewpoints", desc: "Tour the famous Lake District (Bhimtal, Sattal, Naukuchiatal), Governor's House, and Tibetan Market." },
        { day: "Day 3", title: "Nainital to Jim Corbett Tiger Reserve", desc: "Drive through mango orchards to Ramnagar. Check-in at luxury riverside jungle resort in Corbett." },
        { day: "Day 4", title: "Jim Corbett Open Gypsy Jungle Safari", desc: "Early morning 4x4 Gypsy safari in Bijrani/Jhirna/Dhela zone. Track tigers, wild elephants, deer. Evening resort games & bonfire." },
        { day: "Day 5", title: "Corbett to Delhi Departure", desc: "Morning leisurely breakfast, visit Garjiya Devi temple on Kosi river, return drive to Delhi." }
      ],
      inclusions: ["2 Nights in Nainital + 2 Nights in Corbett Resort", "Daily Breakfast & Dinner", "Exclusive Open 4x4 Gypsy Safari with Forest Guide", "Private AC Vehicle for all transfers", "All Park Entry & Forest Permits"],
      exclusions: ["Camera fees inside tiger reserve", "Boating tickets in Nainital", "Lunches"]
    },
    {
      id: "pkg-auli-snow-mussoorie",
      title: "Auli Snow Wonderland, Ropeway & Mussoorie Hills",
      destination: "Auli & Mussoorie",
      state: "Uttarakhand",
      category: "honeymoon",
      duration: "6 Days / 5 Nights",
      rating: 4.94,
      reviewsCount: 153,
      price: 17999,
      originalPrice: 22499,
      discount: "20% OFF",
      featured: false,
      pickup: "Dehradun / Rishikesh / Delhi",
      drop: "Dehradun / Rishikesh",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      badge: "India's Premier Ski Slopes",
      overview: "Witness 180-degree panoramas of India's second-highest peak Nanda Devi. Ride the 4 km Joshimath-Auli cable car, walk on snow slopes, followed by romantic sunset points in Mussoorie.",
      highlights: [
        "Ride Asia's highest ropeway from Joshimath to Auli (3,010 m)",
        "Stunning view of Nanda Devi, Kamet and Dunagiri peaks",
        "Short trek to Gorson Bugyal alpine meadow",
        "Kempty Falls, Camel's Back Road & Gun Hill in Mussoorie",
        "Warm Himachali & Garhwali hospitality in boutique lodges"
      ],
      itinerary: [
        { day: "Day 1", title: "Dehradun/Rishikesh to Joshimath", desc: "Drive through the Devprayag & Karnaprayag confluences, check into Joshimath hotel." },
        { day: "Day 2", title: "Joshimath Cable Car to Auli Slopes", desc: "Board the cable car directly up to snowy Auli. Check-in to cliff resort, beginner ski trial or snow walk." },
        { day: "Day 3", title: "Auli to Gorson Bugyal Trek & Sunset", desc: "Scenic snow trek to Gorson Bugyal. Gaze at the towering snow wall of Nanda Devi. Campfire evening." },
        { day: "Day 4", title: "Auli to Mussoorie 'Queen of Hills'", desc: "Scenic descent towards Mussoorie. Check-in to colonial heritage hillside hotel." },
        { day: "Day 5", title: "Mussoorie Sightseeing & Kempty Falls", desc: "Splash at Kempty Falls, walk Camel's Back Road, stroll Mall Road and Lal Tibba scenic peak." },
        { day: "Day 6", title: "Mussoorie to Dehradun Departure", desc: "Morning cafe breakfast with valley view, drop at Dehradun airport or railway station." }
      ],
      inclusions: ["5 Nights in Premium Mountain Resorts", "Breakfast & Dinner", "Private SUV with seasoned hill driver", "Auli Cable Car ticket assistance", "All tolls and parking"],
      exclusions: ["Skiing equipment rentals & instructors", "Personal shopping", "Lunches"]
    },
    {
      id: "pkg-kasol-kheerganga",
      title: "Kasol, Tosh & Kheerganga Hot Spring Trek",
      destination: "Kasol & Parvati",
      state: "Himachal Pradesh",
      category: "adventure",
      duration: "4 Days / 3 Nights",
      rating: 4.87,
      reviewsCount: 220,
      price: 7499,
      originalPrice: 9999,
      discount: "25% OFF",
      featured: false,
      pickup: "Bhuntar / Chandigarh / Delhi",
      drop: "Bhuntar / Chandigarh",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
      badge: "Trekker & Backpacker Craze",
      overview: "Hike through lush pine forests, waterfalls and wooden fairy-tale villages to soak in the natural hot sulphur pools atop Kheerganga with snow peaks towering overhead.",
      highlights: [
        "12 km scenic forest trek to Kheerganga top",
        "Dip in natural hot water sulphur springs surrounded by snow",
        "Dome tent camping under 10,000 stars",
        "Explore picturesque Tosh village & German bakeries",
        "Riverside bonfire and music in Kasol"
      ],
      itinerary: [
        { day: "Day 1", title: "Arrival Kasol & Chalal Trail", desc: "Arrive in Kasol, walk the suspension bridge to pine trail in Chalal, cafe evening." },
        { day: "Day 2", title: "Barshaini to Kheerganga Trek (12 km)", desc: "Drive to Barshaini. Trek past Rudranag waterfall to Kheerganga top. Take hot bath in holy kund. Night camp." },
        { day: "Day 3", title: "Kheerganga to Tosh Village", desc: "Descend back to Barshaini, transfer to quaint Tosh village. Stunning wooden balconies and valley views." },
        { day: "Day 4", title: "Manikaran Sahib & Departure", desc: "Visit the hot water springs and langar at Manikaran Gurudwara, transfer back to Bhuntar/Chandigarh." }
      ],
      inclusions: ["1 Night Kasol Hotel + 1 Night Kheerganga Camp + 1 Night Tosh Stay", "All Breakfasts & Dinners", "Certified Mountain Trek Leader", "Trekking Gear & Sleeping Bags"],
      exclusions: ["Porter for personal backpacks", "Snacks during trek", "Travel from hometown"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Elizabeth & Rohan Sharma",
      role: "Travelers from Mumbai",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "Booking our Spiti Valley road trip through Abhi.tourist was the best decision ever! Our driver Sanjay bhaiya was a master on high-altitude mountain turns. The Chandratal camp was magical with zero hassle.",
      tour: "Spiti Valley 4x4 Expedition"
    },
    {
      id: 2,
      name: "Vikram & Ananya Malhotra",
      role: "Couple from Delhi NCR",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "We planned our honeymoon in Manali and Atal Tunnel with them. Right from Chandigarh Innova pickup to the flower bed decor and candlelight dinner, everything was top-notch!",
      tour: "Manali & Solang Valley Escape"
    },
    {
      id: 3,
      name: "Dr. K. S. Sundaram",
      role: "Pilgrim from Bengaluru",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "Kedarnath Yatra can be intimidating for elderly parents, but Abhi.tourist's local staff in Guptkashi handled our helicopter passes and darshan queue seamlessly. Truly blessed by Mahadev.",
      tour: "Kedarnath & Chopta Spiritual Trek"
    },
    {
      id: 4,
      name: "Sneha & Friends Group",
      role: "Adventure Group from Pune",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      rating: 5,
      review: "Rishikesh 16km rafting + cliff jump was adrenaline pure! The riverside camps had hot water, great food, and music. Will definitely book their Bir Billing trip next summer!",
      tour: "Rishikesh White Water Rafting"
    }
  ],

  articles: [
    {
      id: 1,
      title: "Best Time to Visit Spiti Valley: Complete Season Guide",
      category: "Himachal Travel",
      date: "Oct 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=600&q=80",
      excerpt: "Wondering whether to visit during the white winter Spiti or sunny summer Chandratal road trip? Here is everything about road status, passes, and clothes."
    },
    {
      id: 2,
      title: "Kedarnath Yatra 2026: Registration, Route & Fitness Tips",
      category: "Uttarakhand Pilgrimage",
      date: "Oct 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1600100397608-f010f443b794?auto=format&fit=crop&w=600&q=80",
      excerpt: "A comprehensive checklist on biometric registration, helicopter bookings from Phata/Sersi, mule rates, and acclimatization for high altitude."
    },
    {
      id: 3,
      title: "Top 8 Hidden Cafes & Waterfalls in Old Manali & Jibhi",
      category: "Mountain Vibes",
      date: "Oct 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=600&q=80",
      excerpt: "Step away from crowded tourist spots into pine-shaded hamlets with woodfired pizzas, trout fish delicacies, and roaring crystal waterfalls."
    }
  ],

  faqs: [
    {
      q: "Why should I book with a local Himachal-based travel agency?",
      a: "Because mountains are dynamic! Weather, road landslides, snow clearance, and high-altitude permits require real-time local network. As a Himachal-headquartered operator with field offices in Manali and Dehradun, we own our fleets, have verified mountain drivers who know every turn, and guarantee 24/7 on-ground emergency assistance."
    },
    {
      q: "Can I customize the tour packages according to my family's needs?",
      a: "Yes, 100%! All our tour itineraries are flexible. You can add extra days in Manali, upgrade to luxury boutique cottages, change vehicle types (Sedan, Innova Crysta, Urbania, Tempo Traveller), or request special dietary meals."
    },
    {
      q: "Where do you pick us up from?",
      a: "We offer seamless door-to-mountain pickups from major transit hubs including Delhi (IGI Airport & Railway Stations), Chandigarh (Airport & Railway Station), Kalka, Dehradun, Haridwar, Kathgodam, and Bhuntar (Kullu) Airport."
    },
    {
      q: "What is your booking and cancellation policy?",
      a: "You can reserve any tour package with just a 20% advance token amount. The balance can be paid in convenient installments before or upon arrival in Himachal/Uttarakhand. We also offer 100% free date rescheduling if mountain roads are blocked due to weather."
    },
    {
      q: "Are the tour packages safe for solo female travelers and senior citizens?",
      a: "Safety and dignity are our utmost priorities. All our drivers are police-verified local mountain residents with clean track records. For seniors, we design slow-paced itineraries with proper acclimatization days, lower-altitude stays, and oxygen cylinders in vehicles."
    }
  ]
};
