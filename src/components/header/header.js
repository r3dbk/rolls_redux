import "./header.css";
import React, { useState, useEffect } from "react";
import classNames from "classnames";

function HeaderComponent() {
 return <div>
    	<header className="header">
		<div className={classNames("container", "text-center")}>
			<img src="img/logo/logo.svg" width="92" alt="Суши и пицца"></img>
			<div className={classNames("display-4")}>Доставка роллов</div>
			<p className={classNames("lead")}>Оперативно и вкусно</p>
		</div>
	</header>
 </div>;   
}

export default HeaderComponent;