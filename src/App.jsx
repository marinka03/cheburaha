import style from "./App.module.css";

function App() {
  return (
    <div>
      <header className={style.header}></header>
      <main className={style.main}>
        <ul className={style["card-list"]}>
          <li className={style.card}>
            <h4 className={style['title-card']}>H20</h4>
          </li>
          <li className={style.card}>
            <h4 className={style['title-card']}>02</h4>
          </li>
          <li className={style.card}>
            <h4 className={style['title-card']}>Light</h4>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
