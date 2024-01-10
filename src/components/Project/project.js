import React from 'react'
import project from '../../assets/project.jpg';

const Project = () => {
  return (
    <section id='techh'>
    <span className='skillTitle'>Projects</span>
    <div className='techstacks'>
        <div className='techstack'>
            <img src={project} alt="" className='techstackImg' />
            <div className='techstackText'>
                <h1>Swift Docs</h1>
                <h3>File Conversion</h3>
                <p>It gives smaller file size,easier to store and share.As it is a online file converter it never jeopardize with the security and the quality remains intact also very handy.</p>
                <h2>Frontend:-<br></br></h2>
                <p>Developing Tools</p>
                <p>1.React Js</p>
                <p>2.Daisy UI</p>
                <h2>Backend:-<br></br></h2>
                <p>Developing Tools</p>
                <p>1.Node Js</p>
                <p>2.Express Js</p>
                <p>3.MongoDb</p>
                
            </div>
            
        </div>
    </div>
    </section>
  )
}

export default Project;