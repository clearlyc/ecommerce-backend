const products = [
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
      "/img/Lambo/Avenntador/lambo-aventador-driving.png",
      "/img/Lambo/Aventador/lambo-aventador-wheel.png",
    ],
    featured: true,
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
      "/img/Lambo/Revuelto/lambo-aventador-wheel-2.png",
    ],
    featured: true,
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
      "/img/Lambo/Miura/lambo-back.png",
      "/img/Lambo/Miura/lambo-back2.png",
      "/img/Lambo/Miura/lambo-miura-interior.png",
      "/img/Lambo/Miura/lambo-miura-wheel.png",
      "/img/Lambo/Miura/lambo-miura-front.png",
    ],
    featured: true,
    price: 2500000,
    stock: 7,
    year: 1967,
    power:
      "The Miura S has a 4-liter V12 engine with 370 horsepower at 7,500 rpm and 389 N·m of torque at 5,500 rpm.",
  },
  {
    model: "Duke Dynamics",
    description:
      "The Duke Dynamics Lamborghini Aventador is a custom kit that includes a front bumper, front fenders, side skirts, rear bumper, and rear diffuser. The kit is designed to improve the car's performance and give it a more aerodynamic and aggressive look.",
    image: "/img/Lambo/Duke/duke-lambo.png",
    imageProduct: "/img/Lambo/Duke/duke-lambo.png",
    photos: [
      "/img/Lambo/Duke/duke-lambo.png",
      "/img/Lambo/Duke/duke-lambo-fire.png",
      "/img/Lambo/Duke/duke-lambo-back.png",
      "/img/Lambo/Duke/duke-lambo-close-back.png",
      "/img/Lambo/Duke/duke-lambo-front.png",
      "/img/Lambo/Duke/duke-lambo-wheel.png",
      "/img/Lambo/Duke/duke-lambo-close.png",
    ],
    featured: true,
    price: 320000,
    stock: 4,
    year: 2023,
    power:
      "The mid-mount 6.5 liter V-12, generating 740 CV at 8,400 rpm, offers remarkable pick-up at high engine speeds and an incredibly fast response.",
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
    featured: true,
    price: 320000,
    stock: 4,
    year: 2023,
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
    featured: true,
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
    featured: true,
    price: 230000,
    stock: 3,
    year: 1969,
    power:
      "The 1969 McLaren M6GT has a Bartz-tuned Chevrolet engine that provides an estimated top speed of 165 miles per hour and a 0 to 100 miles per hour time of eight seconds.",
  },
];

module.exports = products;
