import React, { useState, useEffect } from "react";
import classNames from "classnames";
import classes from "./checkOut.css";

function CheckOut({ res2, totPrice, modalShow }) {
  const [number, setNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [deliver, setDeliver] = useState(true);
  return (
    <div id="order-form" className={classNames("card-body", "border-top")}>
      <h5 className="card-title">Оформить заказ</h5>
      <div>
        <div className="form-group">
          <input
            type="text"
            onChange={(event) => setNumber(event.target.value)}
            className="form-control"
            placeholder="Ваш номер телефона"
          />
          <input
            type="text"
            onChange={(event) => setAdress(event.target.value)}
            className="form-control"
            placeholder="Ваш адрес"
          />
        </div>
        <button
          type="submit"
          onClick={() =>
            totPrice > 500
              ? modalShow(number, res2, totPrice, adress, 'n')
              : modalShow(number, res2, totPrice + 300, adress, 'y')
          }
          className={classNames("btn", "btn-primary")}
        >
          Заказать
        </button>
      </div>
    </div>
  );
}

export default CheckOut;
