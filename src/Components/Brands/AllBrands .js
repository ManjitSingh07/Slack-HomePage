import React from 'react'
import styles from './AllBrands.module.css';
import airbnb from '../../Assets/airbnbLogo.png';
import etsy from '../../Assets/etsyLogo.png';
import nasa from '../../Assets/nasaLogo.png';
import uber from '../../Assets/uberLogo.png';
import target from '../../Assets/targetLogo.png';
import newYork from '../../Assets/newYorkLogo.png';
const AllBrands = () => {
  return (
    <div className={styles.brand__container}>
      <div className={styles.brand__main}>
        <h4>TRUSTED BY COMPANIES ALL OVER THE WORLD</h4>
        <div className={styles.logo}>
          <img src={airbnb} />
          <img src={nasa} />
          <img src={uber} />
          <img src={target} />
          <img src={newYork} />
          <img src={etsy} />
        </div>
      </div>
    </div>
  )
}

export default AllBrands
