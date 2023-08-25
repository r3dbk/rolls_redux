import React, { useState, useEffect } from "react";
import classNames from "classnames";
import classes from "./rollComponent.css";

function RollComponent({
  imgSrc,
  name,
  amount,
  price,
  weight,
  dtId,
  updateBasket,
}) {
  const [counter, setCounter] = useState(1);
  return (
    <div className="col-md-6">
      <div className={classNames("card", "mb-4")} data-id={dtId}>
        <img className="product-img" src={imgSrc} alt=""></img>
        <div className={classNames("card-body", "text-center")}>
          <h4 className={classNames(classes.item_title, "item_title")}>
            {name}
          </h4>
          <p>
            <small className="text-muted">{amount} шт.</small>
          </p>

          <div
            className={classNames(classes.details_wrapper, "details_wrapper")}
          >
            <div
              className={classNames(classes.items, "items", "counter-wrapper")}
            >
              <div
                onClick={() => counter > 1 ? setCounter(counter - 1) : null}
                className={classNames(classes.items__control, "items__control")}
              >
                -
              </div>
              <div
                className={classNames(classes.items__current, "items__current")}
              >
                {counter}
              </div>
              <div
                onClick={() => setCounter(counter + 1)}
                className={classNames(classes.items__control, "items__control")}
              >
                +
              </div>
            </div>

            <div className={classNames(classes.price, "price")}>
              <div
                className={classNames(classes.price__weight, "price__weight")}
              >
                {weight}г.
              </div>
              <div
                className={classNames(
                  classes.price__currency,
                  "price__currency"
                )}
              >
                {price}₽
              </div>
            </div>
          </div>

          <button
            type="button"
            className={classNames("btn", "btn-block", "btn-outline-warning")}
            onClick={() => {
              updateBasket(dtId, counter, "bin");
              setCounter(1);
            }}
          >
            + в корзину
          </button>
        </div>
      </div>
    </div>
  );
}

export default RollComponent;
