const products = [
  {
    model: "SF90 Stradale",
    description:
      "The car's name encapsulates the true significance of all that has been achieved in terms of performance. The reference to the 90th anniversary of the foundation of Scuderia Ferrari underscores the strong link that has always existed between Ferrari’s track and road cars.",
    imageProduct: "/img/Ferrari/sf90-stradale/ferrari-sf90-1.jpg",
    image: "/img/Ferrari/sf90-stradale/ferrari-sf90-1.jpg",
    photos: [
      "/img/Ferrari/sf90-stradale/ferrari-sf90-1.jpg",
      "/img/Ferrari/sf90-stradale/ferrari-sf90-2.jpg",
      "/img/Ferrari/sf90-stradale/ferrari-sf90-3.jpg",
      "/img/Ferrari/sf90-stradale/ferrari-sf90-4.jpg",
      "/img/Ferrari/sf90-stradale/ferrari-sf90-5.jpg",
    ],
    featured: true,
    price: 700000,
    stock: 5,
    year: 2020,
  },
  {
    model: "La Rose Noire Droptail",
    description:
      "A modern interpretation of the roadster body style, Droptail represents the next chapter of Rolls-Royce Coachbuild. La Rose Noire Droptail, embodies the allure of the Black Baccara rose.",
    imageProduct: "/img/RollsRoyce/la-rose-noire-droptail/droptail-1.png",
    image: "/img/RollsRoyce/la-rose-noire-droptail/droptail-1.png",
    photos: [
      "/img/RollsRoyce/la-rose-noire-droptail/droptail-1.png",
      "/img/RollsRoyce/la-rose-noire-droptail/droptail-2.png",
      "/img/RollsRoyce/la-rose-noire-droptail/droptail-3.png",
      "/img/RollsRoyce/la-rose-noire-droptail/droptail-4.png",
      "/img/RollsRoyce/la-rose-noire-droptail/droptail-5.png",
    ],
    featured: true,
    price: 30000000,
    stock: 3,
    year: 2022,
  },

  {
    model: "328 GTB",
    description:
      "The 308 series had won universal acclaim from both customers and critics, and its natural evolution continued with the 328 GTB, a berlinetta fitted with the new 3.2-litre version of the V8.",
    imageProduct: "/img/Ferrari/328-gtb/328-gtb-1.jpg",
    image: "/img/Ferrari/328-gtb/328-gtb-1.jpg",
    photos: [
      "/img/Ferrari/328-gtb/328-gtb-1.jpg",
      "/img/Ferrari/328-gtb/328-gtb-2.jpg",
      "/img/Ferrari/328-gtb/328-gtb-3.jpg",
      "/img/Ferrari/328-gtb/328-gtb-4.jpg",
      "/img/Ferrari/328-gtb/328-gtb-5.jpg",
    ],
    featured: false,
    price: 130000,
    stock: 4,
    year: 1985,
  },
  {
    model: "Duke Dynamics",
    description:
      "The Duke Dynamics Lamborghini Aventador is a custom kit that includes a front bumper, front fenders, side skirts, rear bumper, and rear diffuser. The kit is designed to improve the car's performance and give it a more aerodynamic and aggressive look.",
    image: "/img/Lambo/Duke/duke-lambo-fire.png",
    imageProduct: "/img/Lambo/Duke/duke-lambo.png",
    photos: [
      "/img/Lambo/Duke/duke-lambo.png",
      "/img/Lambo/Duke/duke-lambo-fire.png",
      "/img/Lambo/Duke/duke-lambo-back.png",
      "/img/Lambo/Duke/duke-lambo-front.png",
      "/img/Lambo/Duke/duke-lambo-wheel.png",
      "/img/Lambo/Duke/duke-lambo-close.png",
    ],
    featured: false,
    price: 320000,
    stock: 4,
    year: 2023,
    power:
      "The mid-mount 6.5 liter V-12, generating 740 CV at 8,400 rpm, offers remarkable pick-up at high engine speeds and an incredibly fast response.",
  },
  {
    model: "SP48 Unica",
    description:
      "Designed by the Ferrari Styling Centre under the direction of Flavio Manzoni, Chief Design Officer, is a two-seater sports berlinetta developed on the F8 Tributo platform.",
    imageProduct: "/img/Ferrari/sp48-unica/sp48-unica-1.jpg",
    image: "/img/Ferrari/sp48-unica/sp48-unica-1.jpg",
    photos: [
      "/img/Ferrari/sp48-unica/sp48-unica-1.jpg",
      "/img/Ferrari/sp48-unica/sp48-unica-2.jpg",
      "/img/Ferrari/sp48-unica/sp48-unica-3.jpg",
      "/img/Ferrari/sp48-unica/sp48-unica-4.jpg",
      "/img/Ferrari/sp48-unica/sp48-unica-5.jpg",
    ],
    featured: false,
    price: 250000,
    stock: 3,
    year: 2022,
  },
  {
    model: "288 GTO",
    description:
      "Twin-turbo engine, use of special materials, Pininfarina styling. The first production model with the features of a racing car. The Ferrari GTO",
    imageProduct: "/img/Ferrari/288-gto/1984_Ferrari_288GTO-0-1536.jpg",
    image: "/img/Ferrari/288-gto/1984_Ferrari_288GTO-0-1536.jpg",
    photos: [
      "/img/Ferrari/288-gto/1984_Ferrari_288GTO-0-1536.jpg",
      "/img/Ferrari/288-gto/1984_Ferrari_288GTO-1-1536.jpg",
      "/img/Ferrari/288-gto/1984_Ferrari_288GTO-2-1536.jpg",
      "/img/Ferrari/288-gto/1984_Ferrari_288GTO-3-1536.jpg",
    ],
    featured: false,
    price: 3250000,
    stock: 2,
    year: 1984,
  },
  {
    model: "765LT",
    description:
      "The McLaren 765LT is a two-door, two-passenger, mid-engine, rear-wheel-drive supercar designed for both road and track use. It has an intense driving experience, looks sensational, and has precise steering.",
    image: "/img/McLaren/765lt/mclaren-765lt.png",
    imageProduct: "/img/McLaren/765lt/mclaren-765lt.png",
    photos: [
      "/img/McLaren/765lt/mclaren-765lt.png",
      "/img/McLaren/765lt/mclaren-765lt-back.png",
      "/img/McLaren/765lt/mclaren-765lt-perfil.png",
      "/img/McLaren/765lt/mclaren-765lt-right.png",
      "/img/McLaren/765lt/mclaren-765lt-wheel.png",
    ],
    featured: false,
    price: 320000,
    stock: 4,
    year: 2023,
    power:
      "The McLaren 765LT has a 4.0 liter twin-turbocharged V8 engine that produces 765 horsepower at 7,500 rpm and 800 Nm of torque at 800 rpm",
  },
  {
    model: "296 GT3",
    description:
      "The Ferrari 296 GT3 is a versatile car, developed with the needs of gentleman drivers in mind, both those who aim to win and those who relish racing on the track.",
    imageProduct: "/img/Ferrari/296-gt3/296-gt3-1.jpg",
    image: "/img/Ferrari/296-gt3/296-gt3-1.jpg",
    photos: [
      "/img/Ferrari/296-gt3/296-gt3-1.jpg",
      "/img/Ferrari/296-gt3/296-gt3-2.jpg",
      "/img/Ferrari/296-gt3/296-gt3-3.jpg",
      "/img/Ferrari/296-gt3/296-gt3-4.jpg",
    ],
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
    price: 559500,
    stock: 3,
    year: 1964,
  },
  {
    model: "Mission X",
    description:
      "Flat body, sculptural styling, closed design — the exterior design of the Mission X is both innovative and distinctively Porsche. From the light structure and Le-Mans-style doors to the integrated, adaptive wings.",
    imageProduct: "/img/Porsche/porsche-mission-x-1.jpg",
    image: "/img/Porsche/porsche-mission-x-1.jpg",
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
    model: "Electric Phantom V",
    description:
      "A luxury car known for its opulent interior, iconic design, and advanced technology.",
    imageProduct: "/img/RollsRoyce/electric-phantom/electric-phantom-1.jpg",
    image: "/img/RollsRoyce/electric-phantom/electric-phantom-1.jpg",
    photos: [
      "/img/RollsRoyce/electric-phantom/electric-phantom-1.jpg",
      "/img/RollsRoyce/electric-phantom/electric-phantom-2.jpg",
      "/img/RollsRoyce/electric-phantom/electric-phantom-3.jpg",
      "/img/RollsRoyce/electric-phantom/electric-phantom-4.jpg",
    ],
    featured: false,
    price: 495000,
    stock: 7,
    year: 1959,
  },
  {
    model: "103 EX",
    description:
      "Rolls-Royce 103EX is our first ever vision vehicle, and embodies just one of the endless possibilities that awaits. A personalised icon for the future, providing a sanctuary of calm in an ever-faster world. ",
    imageProduct: "/img/RollsRoyce/103ex/103ex-1.jpg",
    image: "/img/RollsRoyce/103ex/103ex-1.jpg",
    photos: [
      "/img/RollsRoyce/103ex/103ex-1.jpg",
      "/img/RollsRoyce/103ex/103ex-2.jpg",
      "/img/RollsRoyce/103ex/103ex-3.jpg",
      "/img/RollsRoyce/103ex/103ex-4.jpg",
      "/img/RollsRoyce/103ex/103ex-5.jpg",
    ],
    featured: true,
    price: 1800000,
    stock: 7,
    year: 2024,
  },
  {
    model: "Boat Tail",
    description:
      "Envisioned by extraordinary clients and realised by the master artisans of Coachbuild, this singular imagining honours the owners’ lifelong reverence for life at sea.",
    imageProduct: "/img/RollsRoyce/boat-tail/boat-tail-1.jpg",
    image: "/img/RollsRoyce/boat-tail/boat-tail-1.jpg",
    photos: [
      "/img/RollsRoyce/boat-tail/boat-tail-1.jpg",
      "/img/RollsRoyce/boat-tail/boat-tail-2.jpg",
      "/img/RollsRoyce/boat-tail/boat-tail-3.jpg",
      "/img/RollsRoyce/boat-tail/boat-tail-4.jpg",
    ],
    featured: false,
    price: 30000000,
    stock: 3,
    year: 2022,
  },

  {
    model: "911 GT3",
    description:
      "For almost 25 years the 911 GT3 has accepted only the limits of physics — and left the ordinary far behind. Motorsport-tested design and maximum performance ensure it unwaveringly bridges the boundary between the racetrack and the road.",
    imageProduct: "/img/Porsche/porsche-911-gt3-1.jpg",
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
    imageProduct: "/img/Audi/audi-100-coupe-s-1.png",
    image: "/img/Audi/audi-100-coupe-s-1.png",
    photos: [
      "/img/Audi/audi-100-coupe-s-1.png",
      "/img/Audi/audi-100-coupe-s-2.png",
      "/img/Audi/audi-100-coupe-s-3.png",
      "/img/Audi/audi-100-coupe-s-4.png",
      "/img/Audi/audi-100-coupe-s-5.png",
    ],
    featured: true,
    price: 37000,
    stock: 5,
    year: 1969,
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
    featured: false,
    price: 2535000,
    stock: 10,
    year: 2024,
  },
  {
    model: "Aventador Ultimae",
    description:
      "The Lamborghini Aventador Ultimae is a mid-engine, all-wheel-drive, two-door coupe super sports car with a V12 engine.",
    image: "/img/Lambo/Aventador/lambo-aventador-left.png",
    imageProduct: "/img/Lambo/Aventador/lambo-aventador-left.png",
    photos: [
      "/img/Lambo/Aventador/lambo-aventador-back.png",
      "/img/Lambo/Aventador/lambo-aventador-right.png",
      "/img/Lambo/Aventador/lambo-aventador-left.png",
      "/img/Lambo/Aventador/lambo-aventador-driving.png",
      "/img/Lambo/Aventador/lambo-aventador-wheel.png",
    ],
    featured: false,
    price: 860000,
    stock: 3,
    year: 2022,
    power:
      "The heart of the Aventador LP 780-4 Ultimae is the most powerful standard-production naturally aspirated V12 in Lamborghini history. This result was achieved by incorporating titanium intake valves that increase maximum power to 780 CV (574 kW) at 8,500 rpm.",
  },
  {
    model: "Revuelto",
    description:
      "The Lamborghini Revuelto is a high-performance, plug-in hybrid super sports car with a 6.5-liter V12 engine and three electric motors.",
    image: "/img/Lambo/Revuelto/lambo-revuelto.png",
    imageProduct: "/img/Lambo/Revuelto/lambo-revuelto.png",
    photos: [
      "/img/Lambo/Revuelto/lambo-revuelto.png",
      "/img/Lambo/Revuelto/lambo-revuelto-back.png",
      "/img/Lambo/Revuelto/lambo-revuelto-left.png",
      "/img/Lambo/Revuelto/lambo-revuelto-wheel.png",
      "/img/Lambo/Revuelto/lambo-revuelto-wheel-2.png",
    ],
    featured: false,
    price: 608000,
    stock: 7,
    year: 2023,
    power:
      "With a total output of 1,001 horsepower, the Revuelto is the most powerful Lamborghini ever made.",
  },
  {
    model: "Miura S",
    description:
      "The Miura was the first standard production supercar and was developed from the Miura 350 CV. Is a two-seater sports car with a central V12 engine that was produced from 1969 to 1971.",
    image: "/img/Lambo/Miura/lambo-miura.png",
    imageProduct: "/img/Lambo/Miura/lambo-miura.png",
    photos: [
      "/img/Lambo/Miura/lambo-miura.png",
      "/img/Lambo/Miura/lambo-miura2.png",
      "/img/Lambo/Miura/lambo-miura-back.png",
      "/img/Lambo/Miura/lambo-miura-back2.png",
      "/img/Lambo/Miura/lambo-miura-interior.png",
      "/img/Lambo/Miura/lambo-miura-wheel.png",
      "/img/Lambo/Miura/lambo-miura-front.png",
    ],
    featured: false,
    price: 2500000,
    stock: 7,
    year: 1967,
    power:
      "The Miura S has a 4-liter V12 engine with 370 horsepower at 7,500 rpm and 389 N·m of torque at 5,500 rpm.",
  },
  {
    model: "Mantis 720S Spider",
    description:
      "The McLaren 720S Spider is a convertible supercar with a carbon fiber Monocage II-S chassis, a twin-turbo V8 engine, and a top speed of 212 mph.",
    image: "/img/McLaren/Mantis/mantis-green.png",
    imageProduct: "/img/McLaren/Mantis/mantis-green.png",
    photos: [
      "/img/McLaren/Mantis/mantis-green.png",
      "/img/McLaren/Mantis/mantis-green-back.png",
      "/img/McLaren/Mantis/mantis-green-perfil.png",
      "/img/McLaren/Mantis/mantis-green-doors.png",
      "/img/McLaren/Mantis/mantis-green-wheel.png",
      "/img/McLaren/Mantis/mantis-green-front.png",
      "/img/McLaren/Mantis/mantis-green-half.png",
      "/img/McLaren/Mantis/mantis-green-up.png",
    ],
    featured: false,
    price: 326500,
    stock: 10,
    year: 2018,
    power: "The 720S Spider has a 710 bhp twin-turbo V8 engine that produces 770 Nm of torque.",
  },
  {
    model: "M6GT Coupé",
    description:
      "The 1969 McLaren M6GT Coupé is a high-performance road car with a Chevrolet V8 engine, designed by Bruce McLaren to be the fastest and quickest accelerating car in the world.",
    image: "/img/McLaren/M6GT/m6gt.png",
    imageProduct: "/img/McLaren/M6GT/m6gt.png",
    photos: [
      "/img/McLaren/M6GT/m6gt.png",
      "/img/McLaren/M6GT/m6gt-back.png",
      "/img/McLaren/M6GT/m6gt-front.png",
      "/img/McLaren/M6GT/m6gt-diagonal.png",
      "/img/McLaren/M6GT/m6gt-right.png",
    ],
    featured: false,
    price: 230000,
    stock: 3,
    year: 1969,
    power:
      "The 1969 McLaren M6GT has a Bartz-tuned Chevrolet engine that provides an estimated top speed of 165 miles per hour and a 0 to 100 miles per hour time of eight seconds.",
  },
  {
    model: "458 Spider",
    description:
      "The 458 Spider is the first car ever to combine a mid-rear engine with a retractable folding hard top that delivers both unprecedented in-cabin comfort when closed and unparalleled Spider performance.",
    imageProduct: "/img/Ferrari/458-spider/458-spider-1.jpg",
    image: "/img/Ferrari/458-spider/458-spider-1.jpg",
    photos: [
      "/img/Ferrari/458-spider/458-spider-1.jpg",
      "/img/Ferrari/458-spider/458-spider-2.jpg",
      "/img/Ferrari/458-spider/458-spider-3.jpg",
      "/img/Ferrari/458-spider/458-spider-4.jpg",
      "/img/Ferrari/458-spider/458-spider-5.jpg",
    ],
    featured: false,
    price: 640000,
    stock: 3,
    year: 2013,
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
    imageProduct: "/img/Audi/audi-pb18-eTron-4.jpg",
    image: "/img/Audi/audi-pb18-eTron-4.jpg",
    photos: [
      "/img/Audi/audi-pb18-eTron-2.jpg",
      "/img/Audi/audi-pb18-eTron-3.jpg",
      "/img/Audi/audi-pb18-eTron-1.jpg",
      "/img/Audi/audi-pb18-eTron-4.jpg",
      "/img/Audi/audi-pb18-eTron-5.jpg",
    ],
    featured: true,
    price: 920000,
    stock: 3,
    year: 2022,
  },
];

module.exports = products;
