'use client'
import React, { useState } from 'react';
import styles from './Plan.module.css';
import Link from 'next/link';

const Plan = () => {
  const [plan, setPlan] = useState({
    isYearly: false,
    selected: '',
    amount: 0,
  });

  const [error, setError] = useState('');

  const togglePlan = () => {
    setPlan(prev => ({
      isYearly: !prev.isYearly,
      selected: '',
      amount: 0,
    }));
    setError('');
  };

  const selectPlan = (planName: string, amount: number) => {
    setPlan(prev => ({
      ...prev,
      selected: planName,
      amount,
    }));
    setError('');
  };

  const handleNextStep = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!plan.selected) {
      e.preventDefault();
      setError('Please select a plan before proceeding.');
    }
  };

  return (
    <div className={styles.con}>
      <div className={styles.select}>
        <div className={styles.selectI}>
          <div className={styles.selPlan}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <div className={styles.billing}>
            {!plan.isYearly ? (
              <div className={styles.billingInd}>
                {[
                  { name: 'Arcade (Monthly)', price: 9, icon: '/icon-arcade.svg' },
                  { name: 'Advanced (Monthly)', price: 12, icon: '/icon-advanced.svg' },
                  { name: 'Pro (Monthly)', price: 15, icon: '/icon-pro.svg' },
                ].map(({ name, price, icon }) => (
                  <div
                    key={name}
                    className={`${styles.box} ${plan.selected === name ? styles.selectedBox : ''}`}
                    onClick={() => selectPlan(name, price)}
                  >
                    <div className={styles.boxInd}>
                      <img src={icon} className={styles.boxImg} alt={name} />
                      <div>
                        <button className={styles.button}>{name.split(' ')[0]}</button>
                        <p>${price}/mo</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className={styles.billingInd}>
                {[
                  { name: 'Arcade (Yearly)', price: 90, icon: '/icon-arcade.svg' },
                  { name: 'Advanced (Yearly)', price: 120, icon: '/icon-advanced.svg' },
                  { name: 'Pro (Yearly)', price: 150, icon: '/icon-pro.svg' },
                ].map(({ name, price, icon }) => (
                  <div
                    key={name}
                    className={`${styles.box} ${plan.selected === name ? styles.selectedBox : ''}`}
                    onClick={() => selectPlan(name, price)}
                  >
                    <div className={styles.boxInd}>
                      <img src={icon} className={styles.boxImg} alt={name} />
                      <div>
                        <button className={styles.button}>{name.split(' ')[0]}</button>
                        <p>${price}/yr</p>
                        <p>2 months free</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={styles.buttonCon}>
            <p>Monthly</p>
            <div>
              <label className={styles.switch}>
                <input type="checkbox" checked={plan.isYearly} onChange={togglePlan} />
                <span className={styles.slider}></span>
              </label>
            </div>
            <p>Yearly</p>
          </div>
        </div>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}

        <div className={styles.links}>
          <Link href="/">Go Back</Link>
          <Link href="/addons" className={styles.nextStep} onClick={handleNextStep}>
            Next Step
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;
