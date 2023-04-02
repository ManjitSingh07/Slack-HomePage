import React from 'react'
import styles from './MiddleDataComponent.module.css';
const MiddleDataComponent = () => {
  return (
    <div className={styles['middleComponent__outer__container']}>
        <div className={styles['middleComponent__container']}>
          <div className={styles['middleComponent__mainText']}>
            <div className={styles['middleComponent__heading']}>
            Teams large and small rely on Slack
            </div>
            <div className={styles['middleComponent__text']}>
            Slack securely scales up to support collaboration at the world’s biggest companies.
            </div>
          </div>
          <div className={styles['middleComponent__buttons']}>
            <div className={styles["PurpleBtn"]}>
              MEET SLACK FOR ENTERPRISE
            </div>
            <div className={styles['whiteBtn']}>
              TALK TO SALES
            </div>
          </div>
        </div>
        <div className={styles['middleComponent__figures']}>
          <div className={styles['figure1']}>
            <div className={styles['numberPercent']}>
              85%
            </div>
            <p>of users say Slack has improved communication*</p>
          </div>
          <div className={styles['figure1']}>
            <div className={styles['numberPercent']}>
              86%
            </div>
            <p>feel their ability to work remotely has improved*</p>
          </div>
          <div className={styles['figure1']}>
            <div className={styles['numberPercent']}>
              88%
            </div>
            <p>feel more connected to their teams*</p>
          </div>
        </div>
    </div>
    
  )
}

export default MiddleDataComponent;
