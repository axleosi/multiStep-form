'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
    const currentPath=usePathname()
    const isActive=(path:string)=>{
       return path===currentPath
    }
  return (
    <nav className={styles.container}>
        <div className={styles.miniCon}>
        <div className={styles.steps}>
            <Link href='/' className={isActive('/')?styles.circleButtonActive:styles.circleButton}>1</Link>
            <div className={styles.indStep}>
                <p>STEP 1</p>
                <Link href='/' className={styles.link}>YOUR INFO</Link>
            </div>
        </div>
        <div className={styles.steps}>
            <Link href='/plan' className={isActive('/plan')?styles.circleButtonActive:styles.circleButton}>2</Link>
            <div className={styles.indStep}>
                <p>STEP 2</p>
                <Link href='/plan' className={styles.link}>SELECT PLAN</Link>
            </div>
        </div>
        <div className={styles.steps}>
            <Link href='/addons' className={isActive('/addons')?styles.circleButtonActive:styles.circleButton}>3</Link>
            <div className={styles.indStep}>
                <p>STEP 3</p>
                <Link href='/addons' className={styles.link}> ADD-ONS</Link>
            </div>
        </div>
        <div className={styles.steps}>
            <Link href='/summary' className={isActive('/summary')?styles.circleButtonActive:styles.circleButton}>4</Link>
            <div className={styles.indStep}>
                <p>STEP 4</p>
                <Link href='/summary' className={styles.link}>SUMMARY</Link>
            </div>
        </div>
        </div>
    </nav>
  )
}

export default Navbar