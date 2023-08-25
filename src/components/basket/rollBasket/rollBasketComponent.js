import React, { useState, useEffect } from "react";
import classNames from "classnames";
import classes from "./rollBasketComponent.css";

function RollBasketComponent({
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

  function result(type) {
    
    if (type == "plus") {
      updt(dtId, -1, "bin");
    } else if (type == "minus") {
      updt(dtId, 1, "bin");
    }

  }

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

          <div
            className={classNames(
              classes.cart_item__details,
              "cart_item__details"
            )}
          >
            <div
              className={classNames(
                classes.items,
                classes.items__small,
                "items",
                "items__small",
                "counter-wrapper"
              )}
            >
              <div
                onClick={() => (counterr > 1 ? result("plus") : null)}
                className={classNames("items__control", classes.items__control)}
              >
                -
              </div>
              <div
                className={classNames(classes.items__current, "items__curent")}
              >
                {counterr}
              </div>
              <div
                onClick={() => result("minus")}
                className={classNames("items__control", classes.items__control)}
              >
                +
              </div>
              <div
                onClick={() => result("в")}
                className={classNames("items__control", classes.items__control)}
              >
                ❌
              </div>
            </div>

            <div className={classNames(classes.price, "price")}>
              <div
                className={classNames(
                  classes.price__currency,
                  "price__currency"
                )}
              >
                {price}р.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RollBasketComponent;
