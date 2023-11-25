import React from 'react'
import Style from './../../styles/homeElement/ProfilSection.module.css'
import { useSelector } from 'react-redux'


function ProfilSection() {
  const user = useSelector((state) => state.User)
  console.log(user)

  return (
    <div className={Style.ProfilSection}>
      <div className={Style.profilItem}>
        <div className={Style.pic}></div>
        <div className={Style.content}>
          <h3 className={Style.name}> {user.firstname} </h3>
          <p className={Style.userName}> {user.username} </p>

        </div>
      </div>
    </div>
  )
}

export default ProfilSection
