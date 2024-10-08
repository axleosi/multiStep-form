import React from 'react'
import styles from './Finish.module.css'

const Finish = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}></div>
      <h1>Thank you!</h1>
      <p>Thanks for confirming your subscription! We hope you have<br/> fun using our platform. If you ever need support, please feel<br/> free to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Finish