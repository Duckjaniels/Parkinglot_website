const subscription = [
  {
    title: 'Samochód osobowy',
    price: '150 pln',
    tags: 'audi a4, vw passat',
  },
  {
    title: 'Samochód dostawczy',
    price: '180 pln',
    tags: 'vw transporter, renault master',
  },
  {
    title: 'Motocykl',
    price: '70 pln',
    tags: 'kawasaki ninja, skuter piaggio',
  },
  {
    title: 'Rower',
    price: '25 pln',
    tags: 'rower, rower elektryczny',
  },
];

const day = [
  {
    title: 'Samochód osobowy',
    price: '25 pln',
    tags: 'audi a4, vw passat',
  },
  {
    title: 'Samochód dostawczy',
    price: '30 pln',
    tags: 'vw transporter, renault master',
  },
  {
    title: 'Motocykl',
    price: '20 pln',
    tags: 'kawasaki ninja, skuter piaggio',
  },
  {
    title: 'Rower',
    price: '10 pln',
    tags: 'rower, rower elektryczny',
  },
];

const hourly = [
  {
    title: 'Samochód osobowy',
    price: '7 pln',
    tags: 'audi a4, vw passat',
  },
  {
    title: 'Samochód dostawczy',
    price: '8 pln',
    tags: 'vw transporter, renault master',
  },
  {
    title: 'Motocykl',
    price: '5 pln',
    tags: 'kawasaki ninja, skuter piaggio',
  },
  {
    title: 'Rower',
    price: '3 pln',
    tags: 'rower, rower elektryczny',
  },
];
const navList =[
  {
    className: "p__opensans",
    to: "/home",
    name: "Strona Główna"
  },
  {
    className: "p__opensans",
    to: "/about",
    name: "O nas"
  },
  {
    className: "p__opensans",
    to: "/find",
    name: "Lokalizacja"
  },
  {
    className: "p__opensans",
    to: "/pricing",
    name: "Cennik"
  },
  {
    className: "p__opensans",
    to: "/rules",
    name: "Regulamin"
  },
  {
    className: "p__opensans",
    to: "/contact",
    name: "Kontakt"

  }
]
export default { subscription, day, hourly, navList };
