import React from 'react'
import styles from '../style';
import { Navbar, Home, Status, Advantages, Apps, Tech, Team, Clients, Footer, Platform } from './';

const Site = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Home />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Status />
          <Advantages />
          <Apps />
          <Tech />
          <Team />
          <Clients />
          <Platform />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Site