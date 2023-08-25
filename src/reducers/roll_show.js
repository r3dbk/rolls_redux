import RollComponent from "../components/roll/rollComponent";

const initProds = [
  {
    imgSrc: "img/roll/philadelphia.jpg",
    name: "Филадельфия хит ролл",
    amount: "6",
    price: "300",
    weight: "180",
    dtId: "01",
    counter: 1,
  },
  {
    imgSrc: "img/roll/california-tempura.jpg",
    name: "Калифорния темпура",
    amount: "6",
    price: "250",
    weight: "205",
    dtId: "02",
    counter: 1,
  },
  {
    imgSrc: "img/roll/zapech-california.jpg",
    name: "Запеченый ролл «Калифорния»",
    amount: "6",
    price: "230",
    weight: "182",
    dtId: "03",
    counter: 1,
  },
  {
    imgSrc: "img/roll/philadelphia.jpg",
    name: "Филадельфия",
    amount: "6",
    price: "320",
    weight: "230",
    dtId: "04",
    counter: 1,
  },
];

export default function roll_show(state = initProds, action) {
  if (action.type === "ROLL") {
    const plld = state.map((prod) => {
      return (
        <RollComponent
          imgSrc={prod.imgSrc}
          name={prod.name}
          amount={prod.amount}
          price={prod.price}
          weight={prod.weight}
          dtId={prod.dtId}
        />
      );
    });
    console.log(plld, " plld");
    return plld;
  }
  console.log(state, " state");
  return state;
}
