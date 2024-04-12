import React from "react";
import style from "./HomePage.module.css";
import Header from "../../components/Header/Header";

function HomePage() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <ul className={style["card-list"]}>
          <li className={style.card}>
            <h4 className={style["title-card"]}>H20</h4>
            <div className={style.category}>
              <p>Temperature</p>
            </div>
          </li>
          <li className={style.card}>
            <h4 className={style["title-card"]}>02</h4>
            <div className={style.category}>
              <p>Ventilator: </p>
              <button className={style.btn}>Off</button>
            </div>
          </li>
          <li className={style.card}>
            <h4 className={style["title-card"]}>Light</h4>
            <div className={style.category}>
              <p>Daylight: </p>
              <button className={style.btn}>Off</button>
            </div>
            <div className={style.category}>
              <p>Night light: </p>
              <button className={style.btn}>Off</button>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
}

export default HomePage;
