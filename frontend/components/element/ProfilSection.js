import React from 'react'
import Style from './../../styles/homeElement/ProfilSection.module.css'
import { connectProfile } from '../../reducers/user'
import { useSelector, useDispatch } from 'react-redux'


function ProfilSection() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.User)
  console.log(user)

  return (
    <div className={Style.ProfilSection}>
      <div className={Style.profilItem}>
        <div className={Style.pic}></div>
        <div className={Style.content}>
          <h3 className={Style.name}>john</h3>
          <p className={Style.userName}>@johnCena</p>
        </div>
      </div>
    </div>
  )
}

export default ProfilSection
