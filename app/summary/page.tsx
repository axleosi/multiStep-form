'use client'
import React from 'react'
import { useStateContext } from '../context/Context'
import styles from './Summary.module.css'
import Link from 'next/link'

const Summary = () => {
  const {plan,billingMon,billingYr,planArrayYr,planArrayMon, setCheckbox,setPlanArrayMon,setBillingMon,setBillingYr,setPlanArrayYr}=useStateContext()
  const addSumsMon=()=>{
    let sum1=planArrayMon.reduce((acc, plan)=>acc + plan.latestAmount.amount, 0)
    let sum2=billingMon.reduce((acc, plan)=>acc + plan.latestAmount.amount, 0);

    return sum1+sum2
  }
  const clear=()=>{
    setBillingMon([]);
    setBillingYr([]);
    setPlanArrayMon([]);
    setPlanArrayYr([]);
    setCheckbox({checkbox1: false, checkbox2: false, checkbox3: false})
  }
  const total=addSumsMon()
  const addSumsYr=()=>{
    let sum1=planArrayYr.reduce((acc, plan)=>acc + plan.latestAmount.amount, 0)
    let sum2=billingYr.reduce((acc, plan)=>acc + plan.latestAmount.amount, 0);

    return sum1+sum2
  }
  const total2=addSumsYr()
  return (
    <div className={styles.container}>
      <div className={styles.miniCon}>
        <div className={styles.finishing}>
          <h1>Finishing up</h1>
          <p>Double-check everything looks OK before confirming</p>
        </div>
        {!plan.isActive?(
        <div className={styles.mapCon}>
          <div className={styles.miniMapCon}>
            {billingMon.map((billing)=>(
              <div className={styles.plansCon}>
                <div className={styles.planText}>
                  <p>{billing.latestPlan.plan}</p>
                  <Link href='/plan' className={styles.plansLink}>Change</Link>
                </div>
                <p>${billing.latestAmount.amount}/mo</p>
              </div>
            ))}
          </div>
          {planArrayMon.length==0?null:<hr className={styles.hr}/>}
          <div className={styles.addonCon}>
            {planArrayMon.map((plan)=>(
              <div className={styles.addonText}>
                <p>{plan.latestPlan.plan}</p>
                <p>+${plan.latestAmount.amount}/mo</p>
              </div>
            ))}
          </div>
          {total===0?null:
          <div className={styles.total}>
          <p>Total(per month)</p>
          <p className={styles.totalT}>${total}/mo</p>
        </div>}
        </div>
      )
      :(
        <div className={styles.mapCon}>
          <div className={styles.miniMapCon}>
            {billingYr.map((billing)=>(
              <div className={styles.plansCon}>
                <div className={styles.planText}>
                  <p>{billing.latestPlan.plan}</p>
                  <Link href='/plan' className={styles.plansLink}>Change</Link>
                </div>
                <p>${billing.latestAmount.amount}/mo</p>
              </div>
            ))}
          </div>
          {planArrayYr.length==0?null:<hr className={styles.hr}/>}
          <div className={styles.addonCon}>
            {planArrayYr.map((plan)=>(
              <div className={styles.addonText}>
                <p>{plan.latestPlan.plan}</p>
                <p>+${plan.latestAmount.amount}/mo</p>
              </div>
            ))}
          </div>
          {total2===0?null:
          <div className={styles.total}>
            <p>Total(per year)</p>
            <p className={styles.totalT}>${total2}/yr</p>
          </div>}
        </div>
      )}
      </div>
      <div className={styles.links}>
        <Link href='/addons'>Go Back</Link>
        <Link href='/finish' className={styles.nextStep} onClick={clear}>Confirm</Link>
      </div>
    </div>
  )
}

export default Summary