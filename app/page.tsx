'use client'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const formik = useFormik({
    initialValues:{
      name:"",
    email:"",
    number:""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Please enter your name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address'),
      number: Yup.string() 
        .required('Please enter your phone number'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

  })
  
  
  return (
    <div className="container">
      <div className="mini-con">
      <div className="info">
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </div>
      <form className="form">
        <div className="ind-form">
        <label htmlFor="name">Name</label>
        <input type="text"
        name="name"
        id="name"
        placeholder="e.g. Stephen King"
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}/>
        {formik.touched.name && formik.errors.name ? (
              <div className='error'>{formik.errors.name}</div>
            ) : null}
        </div>
        <div className="ind-form">
        <label htmlFor="email">Email Address</label>
        <input type="email"
        name="email"
        id="email"
        placeholder="e.g. stephenking@lorem.com"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email ? (
              <div className='error'>{formik.errors.email}</div>
            ) : null}
        </div>
        <div className="ind-form">
        <label htmlFor="number">Phone Number</label>
        <input type="tel"
        name="number"
        id="number"
        placeholder="e.g. +1 234 567 890"
        onChange={formik.handleChange}
        value={formik.values.number}
        onBlur={formik.handleBlur}/>
        {formik.touched.number && formik.errors.number ? (
              <div className='error'>{formik.errors.number}</div>
            ) : null}
        </div>
        <div className="next-con">
          <Link href='/plan' className="next">Next Step</Link>
        </div>
      </form>
      </div>
    </div>
  );
}
