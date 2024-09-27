import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div>
            <Link href='/'>1</Link>
            <div>
                <p>STEP 1</p>
                <Link href='/'>YOUR INFO</Link>
            </div>
        </div>
        <div>
            <Link href='/plan'>2</Link>
            <div>
                <p>STEP 2</p>
                <Link href='/plan'>SELECT PLAN</Link>
            </div>
        </div>
        <div>
            <Link href='/addons'>3</Link>
            <div>
                <p>STEP 3</p>
                <Link href='/addons'> ADD-ONS</Link>
            </div>
        </div>
        <div>
            <Link href='/summary'>4</Link>
            <div>
                <p>STEP 4</p>
                <Link href='/summary'>SUMMARY</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar