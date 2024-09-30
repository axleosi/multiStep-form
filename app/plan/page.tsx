'use client'
import React, { useState } from 'react'
import styles from './Plan.module.css'
import Link from 'next/link'

const Plan = () => {
  const [plan, setPlan]=useState(true)
  const togglePlan=()=>{
    setPlan(!plan)
  }
  return (
    <div className={styles.con}>
      <div className={styles.select}>
        <div className={styles.selectI}>
          <div className={styles.selPlan}>
          <h1>Select your plan</h1>
          <p>You have the option of monthly or yearly billing.</p>
        </div>
        <div className={styles.billing}>
          {!plan?(
            <div className={styles.billingInd}>
              <div className={styles.box}>
                <div className={styles.boxInd}>
                  <img src='/icon-arcade.svg' className={styles.boxImg}/>
                <div>
                  <p>Arcade</p>
                  <p>$9/mo</p>
                </div>
                </div>
              </div>

              <div className={styles.box}>
              <div className={styles.boxInd}>
                 <img src='/icon-advanced.svg' className={styles.boxImg}/>
                <div>
                  <p>Advanced</p>
                  <p>$12/mo</p>
                </div>
              </div>
               
              </div>
              <div className={styles.box}>
              <div className={styles.boxInd}>
                <img src='/icon-pro.svg' className={styles.boxImg}/>
                <div>
                  <p>Pro</p>
                  <p>$15/mo</p>
                </div>
              </div>
                
              </div>
            </div>
            ):(
              <div className={styles.billingInd}>
              <div className={styles.box}>
              <div className={styles.boxInd}>
                <img src='/icon-arcade.svg' className={styles.boxImg}/>
                <div>
                  <p>Arcade</p>
                  <p>$90/yr</p>
                  <p>2 months free</p>
                </div>
              </div>
                
              </div>
              <div className={styles.box}>
              <div className={styles.boxInd}>
                <img src='/icon-advanced.svg' className={styles.boxImg}/>
                <div>
                  <p>Advanced</p>
                  <p>$120/yr</p>
                  <p>2 months free</p>
                </div>
              </div>
                
              </div>
              <div className={styles.box}>
              <div className={styles.boxInd}>
                <img src='/icon-pro.svg' className={styles.boxImg}/>
                <div>
                  <p>Pro</p>
                  <p>$150/yr</p>
                  <p>2 months free</p>
                </div>
              </div>
                
              </div>
            </div>
            )}
        </div>
        <div className={styles.buttonCon}>
          <p>Monthly</p>
          <div>
          <label className={styles.switch}>
          <input type="checkbox" checked={plan} onChange={togglePlan} />
          <span className={styles.slider}></span>
        </label>
          </div>
          <p>Yearly</p>
        </div>
      </div>
        </div>
        
      <div className={styles.links}>
        <Link href='/'>Go Back</Link>
        <Link href='/addons' className={styles.nextStep}>Next Step</Link>
      </div>
    </div>
  )
}

export default Plan