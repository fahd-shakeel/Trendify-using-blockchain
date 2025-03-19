import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div id={styles.header}>
      <div>
        <p style={{margin:0,padding:10,fontWeight:700,fontFamily:"Poppins"}} id={styles.logo}>Trendi<span className='red'>fy</span></p>
      </div>

      <div>
        <p style={{margin:0,padding:10,fontWeight:700}}>Other details</p>
      </div>
    </div>
  )
}

export default Header