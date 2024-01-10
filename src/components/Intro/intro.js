import React from 'react'
import './intro.css';
import dp from '../../assets/dp.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent" >
            <span className='hello'>Hello,</span>
            <span className='introtext'> I'm <span className='introName'>Rupkatha</span> <br />Website Designer</span>
            <span className="introPara">I am a skilled web designer with experience in creating <br></br>visually appealing and user friendly website</span>
            <Link><button className='btn'>HIRE ME</button></Link>
        </div>
        <img src={dp} alt="profile" className="dp"/>
    </section>
  );
}

export default Intro;