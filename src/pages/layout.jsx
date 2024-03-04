import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/navigation'
import s from "../style/layout.module.css"

export default function Layout() {
  return (
    <div className={s.layout_container} >
      <Navigation />
      <div style={{width: "25%"}}></div>
      <div className={s.main_container}>
        <Outlet />
      </div>
    </div>
  )
}
