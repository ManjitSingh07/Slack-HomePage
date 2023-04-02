import React from 'react'
import styles from './VideoTextDataComponent.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const VideoTextDataComponent = (props) =>{
  const leftRight = props.left===true?'left':'right';
  return (
    <div className={styles['videoTextComponent__container__'+leftRight]}>
      <div className={styles['video__container']}>
        <video src={props.video} type="video/webm" muted loop autoPlay />
      </div>
      <div className={styles['text__container']}>
        <div className={styles.videoTextComponent__heading}>{props.heading}</div>
        <div className={styles.videoTextComponent__text}>{props.text}</div>
        <div className={styles.learnMore}>{props.learnMore} <ArrowForwardIcon/> </div>
      </div>
    </div>
  )
}

export default VideoTextDataComponent
