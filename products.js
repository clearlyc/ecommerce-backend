const products = [
  {
    model: "Mustang GT Fastback",
    description:
      "A two-door, four-seat sports coupe with a 5.0-liter V8 engine that produces 460 horsepower and 420 pound-feet of torque",
    image: "/img/Ford/Ford-Mustang.png",
    featured: false,
    price: 40000,
    stock: 5,
    year: 2018,
  },
  {
    model: "SF90 Stradale",
    description:
      "The car's name encapsulates the true significance of all that has been achieved in terms of performance. The reference to the 90th anniversary of the foundation of Scuderia Ferrari underscores the strong link that has always existed between Ferrari’s track and road cars.",
    image: "/img/Ferrari/sf90-stradale/ferrari-sf90-1.jpg",
    featured: false,
    price: 700000,
    stock: 5,
    year: 2020,
  },
  {
    model: "458 Spider",
    description:
      "The 458 Spider is the first car ever to combine a mid-rear engine with a retractable folding hard top that delivers both unprecedented in-cabin comfort when closed and unparalleled Spider performance.",
    image: "/img/Ferrari/458-spider/458-spider-1.jpg",
    featured: false,
    price: 640000,
    stock: 3,
    year: 2013,
  },
  {
    model: "328 GTB",
    description:
      "The 308 series had won universal acclaim from both customers and critics, and its natural evolution continued with the 328 GTB, a berlinetta fitted with the new 3.2-litre version of the V8.",
    image: "/img/Ferrari/328-gtb/328-gtb-1.jpg",
    featured: false,
    price: 130000,
    stock: 4,
    year: 1985,
  },
  {
    model: "SP48 Unica",
    description:
      "Designed by the Ferrari Styling Centre under the direction of Flavio Manzoni, Chief Design Officer, is a two-seater sports berlinetta developed on the F8 Tributo platform.",
    image: "/img/Ferrari/sp48-unica/sp48-unica-1.jpg",
    featured: false,
    price: 250000,
    stock: 3,
    year: 2022,
  },
  {
    model: "288 GTO",
    description:
      "Twin-turbo engine, use of special materials, Pininfarina styling. The first production model with the features of a racing car. The Ferrari GTO",
    image: "/img/Ferrari/288-gto/1984_Ferrari_288GTO-0-1536.jpg",
    featured: true,
    price: 3250000,
    stock: 2,
    year: 1984,
  },
  {
    model: "296 GT3",
    description:
      "The Ferrari 296 GT3 is a versatile car, developed with the needs of gentleman drivers in mind, both those who aim to win and those who relish racing on the track.",
    image: "img/Ferrari/296-gt3/296-gt3-1.jpg",
    featured: true,
    price: 820000,
    stock: 3,
    year: 2022,
  },
  {
    model: "356 SC",
    description:
      "The Porsche 356 SC with its small frontal area of only 1.4 square metres, designed by F.A. Porsche, is the first Porsche with a fibre glass-reinforced plastic body.",
    imageProduct: "/img/Porsche/porsche-356-sc-3.jpg",
    image: "/img/Porsche/porsche-356-sc-4.jpg",
    photos: [
      "/img/Porsche/porsche-356-sc-1.jpg",
      "/img/Porsche/porsche-356-sc-2.jpg",
      "/img/Porsche/porsche-356-sc-3.jpg",
      "/img/Porsche/porsche-356-sc-4.jpg",
      "/img/Porsche/porsche-356-sc-6.jpg",
    ],
    featured: false,
    price: 2535000,
    stock: 3,
    year: 1964,
  },
  {
    model: "Mission X",
    description:
      "Flat body, sculptural styling, closed design — the exterior design of the Mission X is both innovative and distinctively Porsche. From the light structure and Le-Mans-style doors to the integrated, adaptive wings.",
    imageProduct: "/img/Porsche/porsche-mission-x-3.jpg",
    image: "/img/Porsche/porsche-mission-x-5.jpg",
    photos: [
      "/img/Porsche/porsche-mission-x-1.jpg",
      "/img/Porsche/porsche-mission-x-3.jpg",
      "/img/Porsche/porsche-mission-x-4.jpg",
      "/img/Porsche/porsche-mission-x-5.jpg",
      "/img/Porsche/porsche-mission-x-6.jpg",
    ],
    featured: false,
    price: 1850000,
    stock: 3,
    year: 2025,
  },
  {
    model: "Electric Phantom",
    description:
      "A luxury car known for its opulent interior, iconic design, and advanced technology.",
    image: "/img/RollsRoyce/RollsRoyce-ModdedElectricPhantom.png",
    featured: false,
    price: 495000,
    stock: 7,
    year: 2024,
  },
  {
    model: "103 EX",
    description:
      "Rolls-Royce 103EX is our first ever vision vehicle, and embodies just one of the endless possibilities that awaits. A personalised icon for the future, providing a sanctuary of calm in an ever-faster world. ",
    image: "/img/RollsRoyce/RollsRoyce-103Ex.png",
    featured: false,
    price: 1800000,
    stock: 7,
    year: 2024,
  },
  {
    model: "Boat Tail",
    description:
      "Envisioned by extraordinary clients and realised by the master artisans of Coachbuild, this singular imagining honours the owners’ lifelong reverence for life at sea.",
    image: "/img/RollsRoyce/boat-tail/boat-tail-1.jpg",
    featured: false,
    price: 30000000,
    stock: 3,
    year: 2022,
  },
  {
    model: "La Rose Noire Droptail",
    description:
      "A modern interpretation of the roadster body style, Droptail represents the next chapter of Rolls-Royce Coachbuild. La Rose Noire Droptail, embodies the allure of the Black Baccara rose.",
    image: "img/RollsRoyce/la-rose-noire-droptai/ldroptail-1.png",
    featured: false,
    price: 30000000,
    stock: 3,
    year: 2022,
  },

  {
    model: "911 GT3",
    description:
      "For almost 25 years the 911 GT3 has accepted only the limits of physics — and left the ordinary far behind. Motorsport-tested design and maximum performance ensure it unwaveringly bridges the boundary between the racetrack and the road.",
    imageProduct: "/img/Porsche/porsche-911-gt3-3.jpg",
    image: "/img/Porsche/porsche-911-gt3-1.jpg",
    photos: [
      "/img/Porsche/porsche-911-gt3-1.jpg",
      "/img/Porsche/porsche-911-gt3-4.jpg",
      "/img/Porsche/porsche-911-gt3-3.jpg",
      "/img/Porsche/porsche-911-gt3-5.jpg",
      "/img/Porsche/porsche-911-gt3-6.jpg",
    ],
    featured: false,
    price: 222500,
    stock: 9,
    year: 2024,
  },
  {
    model: "100 Coupe S",
    description:
      "It is a two-door coupé with a fastback design and a front-engine, front-wheel-drive layout.",
      imageProduct: "/img/Audi/audi-coupe-s-2.png",
      image: "/img/Audi/audi-coupe-s-1.webp",
      photos: [
        "/img/Audi/audi-coupe-s-1.webp",
        "/img/Audi/audi-coupe-s-2.png",
        "/img/Audi/audi-coupe-s-3.png",
        "/img/Audi/audi-coupe-s-4.png",
        "/img/Audi/audi-coupe-s-5.png",
      ],
    featured: true,
    price: 37000,
    stock: 5,
    year: 1969,
  },
  {
    model: "Gt Limited",
    description:
      "This model was built to honor Ford's 2016 Le Mans win and the 1966 podium sweep. It features a 3.5-liter EcoBoost V6 engine, 660 horsepower, and a top speed of 216 mph.",
    image: "/img/Ford/Ford-GtLimitedEdition.png",
    featured: true,
    price: 1700000,
    stock: 4,
    year: 2022,
  },
  {
    model: "Spider RS",
    description:
      "Pure GT engineering in a proudly open-top 2-seater. Puristic, unfiltered, genuine. The 718 Spyder RS is a mid-engine roadster that leaves worries behind in fractions of a second. For driving pleasure with a powerful sound that you can hear and feel immediately.",
    imageProduct: "/img/Porsche/porsche-spiderRS-6.jpg",
    image: "/img/Porsche/porsche-spiderRS-1.jpg",
    photos: [
      "/img/Porsche/porsche-spiderRS-1.jpg",
      "/img/Porsche/porsche-spiderRS-2.jpg",
      "/img/Porsche/porsche-spiderRS-3.jpg",
      "/img/Porsche/porsche-spiderRS-4.jpg",
      "/img/Porsche/porsche-spiderRS-5.jpg",
      "/img/Porsche/porsche-spiderRS-6.jpg",
    ],
    featured: true,
    price: 2535000,
    stock: 10,
    year: 2024,
  },
  {
    model: "Aventador Ultimae",
    description:
      "The Lamborghini Aventador Ultimae is a mid-engine, all-wheel-drive, two-door coupe super sports car with a V12 engine.",
    image: "/img/Lambo/Aventador_Ultimae/lambo-aventador-left.png",
    photos: [
      "/img/Lambo/Aventador_Ultimae/lambo-aventador-back.png",
      "/img/Lambo/Aventador_Ultimae/lambo-aventador-right.png",
      "/img/Lambo/Aventador_Ultimae/lambo-aventador-left.png",
      "/img/Lambo/Aventador_Ultimae/lambo-aventador-driving.png",
      "/img/Lambo/Aventador_Ultimae/lambo-aventador-wheel.png",
    ],
    featured: false,
    price: 860000,
    stock: 3,
    year: 2022,
  },
  {
    model: "Taycan Turbo",
    description:
      "The overwhelming feeling of sitting in an amazing electric sports car: The new Taycan makes electricity even more electrifying. Performance even more impressive. And the extraordinary even more outstanding.",
    imageProduct: "/img/Porsche/porsche-taycan-turbo-5.jpg",
    image: "/img/Porsche/porsche-taycan-turbo-1.jpg",
    photos: [
      "/img/Porsche/porsche-taycan-turbo-1.jpg",
      "/img/Porsche/porsche-taycan-turbo-2.jpg",
      "/img/Porsche/porsche-taycan-turbo-3.jpg",
      "/img/Porsche/porsche-taycan-turbo-4.jpg",
      "/img/Porsche/porsche-taycan-turbo-5.jpg",
    ],
    featured: false,
    price: 920000,
    stock: 3,
    year: 2022,
  },
  {
    model: "PB18 eTron",
    description:
      "The all-electric Audi PB18 e-tron presents a radical vision for the high-performance sports car of tomorrow. Broad and flat, visibly inspired by the wind tunnel and the race track, its very presence signals that it is destined to push boundaries.",
    imageProduct: "/img/Audi/audi-pb18-eTron-2.jpg",
    image: "/img/Audi/audi-pb18-eTron-3.jpg",
    photos: [
      "/img/Audi/audi-pb18-eTron-1.jpg",
      "/img/Audi/audi-pb18-eTron-2.jpg",
      "/img/Audi/audi-pb18-eTron-3.jpg",
      "/img/Audi/audi-pb18-eTron-4.jpg",
      "/img/Audi/audi-pb18-eTron-5.jpg",
    ],
    featured: false,
    price: 920000,
    stock: 3,
    year: 2022,
  },
];

module.exports = products;
