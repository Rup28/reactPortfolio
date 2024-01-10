import React from 'react'
import'./skills.css';
import conly from '../../assets/conly.png';
import cpluss from '../../assets/cpluss.jpg';
import pythonlogo from '../../assets/pythonlogo.png';
import javalogo from '../../assets/javalogo.png';
import htmllogo1 from '../../assets/htmllogo1.png';
import csslogo from '../../assets/csslogo.png';
import jslogo from '../../assets/jslogo.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I know</span>
        <div className='skillsBars'>

            <div className='skillBar' >
                <img src={conly} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>C</h2>
                    <p></p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={cpluss} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>C++</h2>
                    <p></p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={pythonlogo} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Python</h2>
                    <p></p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={javalogo} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>Java</h2>
                    <p></p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={htmllogo1} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>HTML</h2>
                    <p></p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={csslogo} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>CSS</h2>
                    <p></p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={jslogo} alt="" className='skillBarImg' />
                <div className='skillBarText'>
                    <h2>JavaScript</h2>
                    <p></p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills