import React from 'react'
import './techstack.css';
import react from '../../assets/react.png';
import node from '../../assets/node.png';

const Techstack = () => {
  return (
    <section id='tech'>
    <span className='skillTitle'>Technologies Known</span>
    <div className='techstacks'>
        <div className='techstack'>
            <img src={react} alt="" className='techstackImg' />
            <div className='techstackText'>
                <h2>React Js</h2>
                <p></p>
            </div>
        </div>
        <div className='techstack'>
            <img src={node} alt="" className='techstackImg' />
            <div className='techstackText'>
                <h2>Node Js</h2>
                <p></p>
            </div>
        </div>
    </div>
    </section>
)
}
export default Techstack;