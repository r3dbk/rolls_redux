import "./mainContainer.css";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import RollComponent from "../roll/rollComponent";
import { connect } from "react-redux";
import BasketComponent from "../basket/basketComponent";
import classes from "./mainContainer.css";



function MainContainer({ onTest, onModal_show, onRoll, state }) {
  const [basket, setBasket] = useState([]);
  const [isBasketEmpty, setIsBasketEmpty] = useState(true);
  const [number, setNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [delivery, setDelivery] = useState("");
  const [ttPrice, setTtPrice] = useState("0");
  const [modal_c, setModal_c] = useState("hide");
  const [res, setRes] = useState("");
  // function updateBasket(rollId, count, what) {
  //   setIsBasketEmpty(false);
  //   setProds(
  //     prods.map((prod) => {
  //       if (prod.dtId === rollId) {
  //         let mark = false;
  //         let updatedBasket = basket.map((rollInBskt) => {
  //           if (rollInBskt.dtId === rollId) {
  //             mark = true;
  //             if (what === "bin") {
  //               return { ...rollInBskt, counter: rollInBskt.counter + count };
  //             } else {
  //               return { ...rollInBskt, counter: count };
  //             }
  //           }
  //           return rollInBskt;
  //         });
  //         if (!mark) updatedBasket = [...basket, { ...prod, counter: count }];
  //         setBasket(updatedBasket);
  //         console.log(basket);
  //       }
  //       return prod;
  //     })
  //   );
  // }
  function test() {
    onTest("testtr");
  }
  function modal_show(what, result, totPrice, adress, del) {
    if (what === "c") {
      setModal_c("hide");
    } else {
      setModal_c("modall");
      setNumber(what);
      if (del == "y") {
        setDelivery("300₽");
      } else {
        setDelivery("бесплатно");
      }
      setTtPrice(totPrice);
      setAdress(adress);
      setRes(result);
    }
  }
  const rolls = onRoll();
  console.log(rolls)
  return (
    <div>
      <button onClick={test}>dfgdfh</button>
      <div className={classNames("container", "mb-5")}>
        <div className="row">
          <div className="col-md-8">
            <div className="row">{rolls}</div>
          </div>
          <BasketComponent
            listRoll={basket}
            isEmpty={isBasketEmpty}
            // updt={updateBasket}
            modal_show={modal_show}
          />
        </div>
      </div>
      <div className={modal_c}>
        <div className="modall_content">
          <div>
            <h1>Ваш заказ оформлен</h1>
            <div>{res}</div>
            <div className="order-det">
              <p>
                Номер телефона: <span className="numb">{number}</span>
              </p>
              <p>
                Адрес: <span className="adr">{adress}</span>
              </p>
              {delivery == "300₽" ? (
                <p>
                  Доставка: <span>{delivery}</span>
                </p>
              ) : (
                <p>
                  Доставка: <span className="free">{delivery}</span>
                </p>
              )}

              <p className="itog">
                Итого: <span className="total_price">{ttPrice}₽</span>
              </p>
            </div>
            <button
              onClick={() => {
                onModal_show()
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  (state) => ({

  }),
  (dispatch) => ({
    onTest: () => {
      dispatch({ type: "TEST", payload: "TESTING" });
    },
    onRoll: () => {
      dispatch({type: "ROLL", payload: 'display'})
    },
    onModal_show: () => {
      const pld = {}
      dispatch({type: "MODAL_SHOW", payload: pld});
    },
  })
)(MainContainer);
