import React from 'react'
import iconLogo from "../assets/icon-logo.png"
import s from "../style/header.module.css"
// import logo from "../assets/icon-logo (2).png"

export default function Header() {
  return (
    <div>
      <div className={s.header_container}>
        <img src={iconLogo} alt="Icon logotype" />
        <p>Financial Flow</p>
      </div>
        {/* <img src={logo} alt="" className={s.logo_img}/> */}
    </div>
  )
}
