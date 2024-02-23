import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import s from "../style/navigation.module.css"

export default function Navigation() {
  return (
    <div className={s.nav_container}>
        <div>
          <Header />
          <div className={s.link_container}>
            <NavLink to="/balance" className={s.link_style}>Доходи та витрати</NavLink>
          </div>
          <div className={s.link_container}>
            <NavLink to="/income" className={s.link_style}>Доходи банків</NavLink>
          </div>
          <div className={s.link_container}>
            <NavLink to="/expence" className={s.link_style}>Витрати банків</NavLink>
          </div>
        </div>
        <Footer />
    </div>
  )
}
