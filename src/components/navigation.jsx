import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import s from "../style/navigation.module.css"

export default function Navigation() {
  return (
    <div className={s.nav_container}>
        <Header />
        <div>
          <NavLink to="/finance">Доходи та витрати банків</NavLink>
          <NavLink to="/balance">Incomes and expenses of banks</NavLink>
        </div>
        <Footer />
    </div>
  )
}
