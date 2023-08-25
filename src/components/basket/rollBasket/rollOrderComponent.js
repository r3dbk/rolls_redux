import React, { useState, useEffect } from "react";
import classNames from "classnames";
import classes from "./rollBasketComponent.css";

function RollOrderComponent({
  imgSrc,
  name,
  amount,
  price,
  weight,
  counter,
  dtId,
  updt,
}) {
  const [counterr, setCounterr] = useState(0);
  useEffect(() => {
    setCounterr(counter);
    return () => {};
  }, [counter]);

  return (
    <div>
      <div className={classNames(classes.cart_item__top, "cart_item__top")}>
        <div className={classNames(classes.cart_item__img, "cart_item__img")}>
          <img src={imgSrc} alt=""></img>
        </div>
        <div className={classNames(classes.cart_item__desc, "cart_item__desc")}>
          <div
            className={classNames(classes.cart_item__title, "cart_item__title")}
          >
            {name}
          </div>
          <div
            className={classNames(
              classes.cart_item__weight,
              "cart_item__weight"
            )}
          >
            {amount} шт. | {weight}г.
          </div>
          <div className={classNames(classes.items, "items")}>
            <div
              className={classNames(classes.items__current, "items__curent")}
            >
              {counterr} шт.
            </div>

            <div
              className={classNames(classes.items__current, "items__curent")}
            >
              {price}р.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RollOrderComponent;
