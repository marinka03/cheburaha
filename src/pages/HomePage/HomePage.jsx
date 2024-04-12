import React from 'react'
import style from './HomePage.module.css'
import Header from '../../components/Header/Header'

function HomePage() {
  return (
    <>
    <Header/>
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
    </>
  )
}

export default HomePage