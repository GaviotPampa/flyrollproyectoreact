import "./styles.css";

const Products = [

  {
    id: 0,
    tittle: "Roller Fly Wick JWJ",
    detalle:"De competición",
    description: "Descripcion: Los patines en linea Wick urbanos de Fly son patines Freeskate que pueden ser utilizados fácilmente para slalom o speed slalom, gracias a su anclaje de 165mm de distancia entre barrenos y su frame rockeable.",
    precio: 53550,
    img: "/assets/img/wick_roller.jpg",
    category: "roller",
    stock: 2

  },


  {
    id: 1,
    tittle: "Roller Fly Eagle BCB",
    detalle:"De competición",
    description: "Descripcion: Fly Eagle BCB  es un patín para principiantes del Freeskate que puede ser utilizado fácilmente para slalom o freeskate.",
    precio: 28550,
    img: "/assets/img/rolleruno.jpg",
    category: "roller",
    stock: 3,
  },

  {
    id: 2,
    tittle: "Roller Fly MoonRouge GC",
    detalle:"Con luces",
    description: "Descripcion: Roller con luces",
    precio: 35550,
    img: "/assets/img/rollerdos.jpg",
    category: "roller",
    stock: 2

  },

  {
    id: 3,
    tittle: "Roller Fly Eagle BFB",
    detalle:"De competición",
    description: "Descripcion: Fly Eagle BFB  es un patín para principiantes del Freeskate que puede ser utilizado fácilmente para slalom o freeskate.",
    precio: 28550,
    img: "/assets/img/rollertres.jpg",
    category: "roller",
    stock: 2

  },

  {
    id: 4,
    tittle: "Roller Fly Maratt JWJ",
    detalle:"Urbanos",
    description: "Descripcion: Los patines en linea Wick urbanos de Fly son patines Freeskate que pueden ser utilizados fácilmente para slalom o speed slalom, gracias a su anclaje de 165mm de distancia entre barrenos y su frame rockeable.",
    precio: 53550,
    img: "/assets/img/rollercuatro.jpg",
    category: "roller",
    stock: 0

  },

  {
    id: 5,
    tittle: "Roller Fly Maratt D&C",
    detalle:"Urbanos",
    description: "Descripcion: es el patin en linea mas económico de la serie FR, donde puedes utilizarlo tanto para recorridos urbanos, como poder desarrollar tus destrezas en el slalom, gracias al ser equipado con ruedas urbanas.",
    precio: 23550,
    img: "/assets/img/rollercinco.jpg",
    category: "roller",
    stock: 5,

  },
  {
    id: 6,
    tittle: "Roller Fly Maratt SSR",
    detalle:"Urbanos",
    description: "Descripcion: Patines para utilizarlos en la calle, así como para Freestyle slalom. Son patines fabricados en fibra de carbono para quienes buscan un patín mas rígido y ligero al mismo tiempo, sin romper sus ahorros.",
    precio: 23550,
    img: "/assets/img/rollerseis.jpg",
    category: "roller",
    stock: 6,

  },

  {
    id: 7,
    tittle: "Roller Fly Boyle CC",
    detalle:"De competición",
    description: "Descripcion: Patines para utilizarlos en la calle, así como para Freestyle slalom. Son patines fabricados en fibra de carbono para quienes buscan un patín mas rígido y ligero al mismo tiempo, sin romper sus ahorros.",
    precio: 35550,
    img: "/assets/img/rollersiete.jpg",
    category: "roller",
    stock: 6,

  },

  {
    id: 8,
    tittle: "Roller Fly Marratt Dog",
    detalle:"Urbanos",
    description: "Descripcion: Patines para utilizarlos en la calle, así como para Freestyle slalom. Son patines fabricados en fibra de carbono para quienes buscan un patín mas rígido y ligero al mismo tiempo, sin romper sus ahorros.",
    precio: 23550,
    img: "/assets/img/rollerdiez.jpg",
    category: "roller",
    stock: 6,

  },

  {
    id: 9,
    tittle: "Roller Fly Marratt PJM",
    detalle:"Urbanos",
    description: "Descripcion: Patines para utilizarlos en la calle, así como para Freestyle slalom. Son patines fabricados en fibra de carbono para quienes buscan un patín mas rígido y ligero al mismo tiempo, sin romper sus ahorros. ",
    precio: 23550,
    img: "/assets/img/rollerdoce.jpg",
    category: "roller",
    stock: 8,
  },

  {
    id: 10,
    tittle: "Casco 1",
    description: "Descripcion: casco",
    precio: 16550,
    img: "/assets/img/cascouno.jpg",
    category: "accesorios",
    stock: 5,
  },

  {
    id: 11,
    tittle: "Casco 2",
    description: "Descripcion: casco",
    precio: 10550,
    img: "/assets/img/cascodos.jpg",
    category: "accesorios",
    stock: 7,
  },

  {
    id: 12,
    tittle: "Casco 3",
    description: "Descripcion: casco",
    precio: 16550,
    img: "/assets/img/cascotres.jpg",
    category: "accesorios",
    stock: 5,
  },

  {
    id: 13,
    tittle: "Casco 4",
    description: "Descripcion: casco",
    precio: 15550,
    img: "/assets/img/cascocuatro.jpg",
    category: "accesorios",
    stock: 5,
  },
  {
    id: 14,
    tittle: "Casco 5",
    description: "Descripcion: casco",
    precio: 15550,
    img: "/assets/img/cascocinco.jpg",
    category: "accesorios",
    stock: 3,
  },
  {
    id: 15,
    tittle: "Casco 6",
    description: "Descripcion: casco",
    precio: 15550,
    img: "/assets/img/cascoseis.jpg",
    category: "accesorios",
    stock: 5,
  },

  {
    id: 16,
    tittle: "Ruedas",
    detalle:"Ruedas de Freeskate",
    description: "Descripcion: especializadas para practicar en la ciudad Freeskate.Se vende individualmente 76mm, 80mm, y 84mm con 85a de dureza." ,
    precio: 5550,
    img: "/assets/img/ruedasroller1.jpg",
    category: "accesorios",
    stock: 6,
  },

  {
    id: 17,
    tittle: "Rueda 14",
    detalle:"Ruedas 100mm",
    description: "Descripcion: rueda",
    precio: 5550,
    img: "/assets/img/ruedasroller2.jpg",
    category: "accesorios",
    stock: 20,
  },

  {
    id: 18,
    tittle: "Ruedas",
    detalle:"Ruedas Led",
    description: "Descripcion: ruedas",
    precio: 4550,
    img: "/assets/img/ruedasrollers4.jpg",
    category: "accesorios",
    stock: 30,
  },

  {
    id: 19,
    tittle: "Ruedas",
    detalle:"Ruedas 125mm",
    description: "Descripcion: rueda celeste",
    precio: 6550,
    img: "/assets/img/ruedasroller5.jpg",
    category: "accesorios",
    stock: 30,
  },

  {
    id: 20,
    tittle: "Rodilleras",
    description: "Descripcion: rodilleras",
    precio: 4550,
    img: "/assets/img/rodilleras1.jpg",
    category: "accesorios",
    stock: 4,
  },

  {
    id: 21,
    tittle: "Rodilleras",
    description: "Descripcion: rodilleras",
    precio: 4550,
    img: "/assets/img/rodilleras2.jpg",
    category: "accesorios",
    stock: 24,
  },

];

export default Products;
