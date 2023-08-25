import React, { useState, useEffect } from "react";
import classNames from "classnames";
import classes from "./basketComponent.css";
import RollBasketComponent from "./rollBasket/rollBasketComponent";
import RollOrderComponent from "./rollBasket/rollOrderComponent";
import CheckOut from "./checkout/checkOut";

function BasketComponent({ listRoll, isEmpty, updt, modal_show }) {
  const [totPrice, setTotPrice] = useState(0);
  useEffect(() => {
    // console.log(listRoll);
    // console.log(number, "number basket");
    // console.log(listRoll[0]);
    totPr(listRoll);
    return () => {};
  });

  function totPr(listRoll) {
    let res = 0;
    listRoll.map((roll) => {
      res += roll.counter * Number(roll.price);
    });
    setTotPrice(res);
  }

  const res = listRoll.map((roll) => {
    return (
      <RollBasketComponent
        imgSrc={roll.imgSrc}
        name={roll.name}
        amount={roll.amount}
        price={roll.price}
        weight={roll.weight}
        counter={roll.counter}
        dtId={roll.dtId}
        updt={updt}
      />
    );
  });
  const res2 = listRoll.map((roll) => {
    return (
      <RollOrderComponent
        imgSrc={roll.imgSrc}
        name={roll.name}
        amount={roll.amount}
        price={roll.price}
        weight={roll.weight}
        counter={roll.counter}
        dtId={roll.dtId}
        updt={updt}
      />
    );
  });
  return (
    <div className="col-md-4">
      <div className={classNames("card", "mb-4")}>
        <div className="card-body">
          <h5 className="card-title">Ваш заказ</h5>
          {isEmpty ? (
            <div
              className={classNames("alert", "alert-secondary")}
              role="alert"
            >
              Корзина пуста
            </div>
          ) : null}
          <div className={"cart-wrapper"}>{res}</div>
          {isEmpty ? null : (
            <div className={classNames("cart_total")}>
              <p>
                <span className="h5">Доставка: </span>
                {totPrice > 500 ? (
                  <span className={classNames("delivery-cost", "free")}>
                    бесплатно
                  </span>
                ) : (
                  <span className={classNames("delivery-cost")}>300p.</span>
                )}
              </p>
              <p>
                <span className="h5">Итого: </span>
                {totPrice > 500 ? (
                  <span className="total_price">{totPrice}</span>
                ) : (
                  <span className="total_price">{totPrice + 300}</span>
                )}
                <span className="rouble">₽</span>
              </p>
            </div>
          )}

          {isEmpty ? null : (
            <CheckOut
              res2={res2}
              totPrice={totPrice}
              modalShow={modal_show}
            ></CheckOut>
          )}
        </div>
      </div>
    </div>
  );
}

export default BasketComponent;
