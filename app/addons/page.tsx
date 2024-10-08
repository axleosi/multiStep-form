'use client'
import styles from './Addons.module.css'
import React, { useState } from 'react'
import { useStateContext } from '../context/Context'
import Link from 'next/link'

const AddOns = () => {
  const { plan, addPlanMon, addPlanYr, setPlanArrayMon, setPlanArrayYr,checkbox,setCheckbox } = useStateContext();
 
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, planName: string, amount: number) => {
    const isChecked=event.target.checked
    setCheckbox({...checkbox,[event.target.name]:isChecked})

    if(plan.isActive){
      if(isChecked){
        addPlanYr({ plan: planName }, { amount });
      }
      else{
        setPlanArrayYr(prev => prev.filter(item => item.latestPlan.plan !== planName))
      }
    }
    else{
      if(isChecked){
        addPlanMon({ plan: planName }, { amount })
      }
      else{
        setPlanArrayMon(prev=>prev.filter((item)=>(item.latestPlan.plan !== planName)))
      }
    }
  }
  return (
    <div>
        <div className={styles.container}>
          <div className={styles.miniCon}>
            <div className={styles.options}>
              <div className={styles.title}>
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience</p>
              </div>

              <div className={styles.select}>
                <div className={styles.miniSel}>
                  <div className={styles.checkbox}>
                  <input type='checkbox' id='service' name='checkbox1' checked={checkbox.checkbox1} onChange={(e) => handleCheckboxChange(e, 'Online service', plan.isActive ? 10 : 1)}/>
                    <label htmlFor='service'>
                      <p>Online service</p>
                      <p>Access to multiplayer games</p>
                    </label>
                  </div>

                  <p>{plan.isActive? '+$10/yr':'+$1/mo'}</p>
                </div>

                <div className={styles.miniSel}>
                  <div className={styles.checkbox}>
                    <input type='checkbox' id='storage' name='checkbox2' checked={checkbox.checkbox2} onChange={(e) => handleCheckboxChange(e, 'Larger Storage', plan.isActive ? 20 : 2)}/>
                    <label htmlFor='storage'>
                      <p>Larger storage</p>
                      <p>Extra 1TB of cloud save</p>
                    </label>
                  </div>

                  <p>{plan.isActive? '+$20/yr':'+$2/mo'}</p>
                </div>

                <div className={styles.miniSel}>
                  <div className={styles.checkbox}>
                    <input type='checkbox' id='profile' name='checkbox3' checked={checkbox.checkbox3} onChange={(e) => handleCheckboxChange(e, 'Customizable Profile', plan.isActive ? 20 : 2)}/>
                    <label htmlFor='profile'>
                      <p>Customizable profile</p>
                      <p>Custom theme on your profile</p>
                    </label>
                  </div>

                  <p>{plan.isActive? '+$20/yr':'+$2/mo'}</p>
                </div>
              </div>
            </div>

            <div className={styles.buttons}>
              <Link href='/plan'>Go Back</Link>
              <Link href='/summary' className={styles.nextStep}>Next Step</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AddOns