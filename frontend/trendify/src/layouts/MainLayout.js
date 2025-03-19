import React from 'react'
import Header from "../components/Header"
import styles from "../layouts/MainLayout.module.css"

const MainLayout = () => {
    return (
        <>
            <Header/>
            <div className={styles.big}>MainLayout</div>
        </>

    )
}

export default MainLayout