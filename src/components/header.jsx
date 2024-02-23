import React from 'react'
import iconLogo from "../assets/icon-logo.png"
import s from "../style/header.module.css"

export default function Header() {
  return (
    <div>
      <div className={s.header_container}>
        <img src={iconLogo} alt="Icon logotype" />
        <p>Financial Flow</p>
      </div>
    </div>
  )
}
