import React from 'react'
import './contact.css';
import gs from '../../assets/gs.jpg';
import linkdn from '../../assets/linkdn.png';
import { useState } from 'react';

const Contact = () => {
    const[text,setText] = useState('')
    const changeValue = (e) =>{
        setText(e.target.value)
    }
  return (
    <section id='contactPage'>
        <div className='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>Some notable companies include</p>
            <div className='clientImgs'>
                <img src={gs} alt='' className='clientImg' />
            </div>
        </div>
        <div className='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm'>
                <input type="text" className='name' placeholder='Your Name'/>
                <input type="email" className='email' placeholder='Your Email'/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message' value={text} onChange={changeValue}></textarea>

                <button type='submit' value='Send' className="submitBtn"><a href={`mailto:rupkatharay62737@gmail.com?cc=rupkatharay3@gmail.com,&subject=Mail from portfolio &body=${text}`}>Submit</a></button>
                <div className='links'>
                    <a href = "https://www.linkedin.com/in/rupkatha-ray-357234233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" ><img src={linkdn} alt="" className='link' /></a>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;