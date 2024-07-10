import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import './Resume.css'
import React from 'react';
import Lineproces from '../common/line/LineProces';
const Resume = () => {
  const frontendskills = [    {
      skill:'ReactJs',
      rate:'95',
    },
    {
      skill:'VueJs',
      rate:'80',
    },
    {
      skill:'HTML5',
      rate:'95',
    },
    {
      skill:'CSS',
      rate:'95',
    },
    {
      skill:'JavaScript',
      rate:'95',
    },
  ]
  const softSkill =['TeamWork','Teachnical communication','Hight adaptable',' High self-study ability']
  
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div style={{minHeight:'100vh'}} className="container">
        <div className="row">
          <h1 className="brand-text mb-5">My Resume</h1>
          <div className="col-md-7">
            <p>
              My expertise are in frontend technologies such as HTML5, CSS, BOOTSTRAP,
              JAVASCRIPT, REACTJS,REDUX,VUEJS,FIREBASE 
              <br/><br/>
              Experience working with ReactJs and VueJs. Good use of libraries such as Antd, Antdv, Bootstrap... <br/><br/>
            Experience working with RESTful APIs and NoSQL databases. With little experience in backend programming, you can write simple CRUD APIs<br/>
            Able to absorb and always learn new related technologies and use them for their work. <br></br>
            Have experience developing projects according to the AGILE SCRUM model.
              I am a solution-focused
              developer with the ability to develop interactive and responsive websites that
              satisfies a user’s experience.
            </p>
            <div className="hobbies mt-5">
              <h3>My Hobbies: </h3>
              <div className='content mt-3'>
                <li>Play Football</li>
                <li>Play Game</li>
                <li>Play Guitar</li>
                <li>Listen To Music</li>
                
              </div>
            </div>
          </div>
          <div className="col-md-5 skill">
            <h3 className="skills">My Skillset:</h3>
            <h4 className="brand-text">Frontend skills: </h4> 
            {
              frontendskills.map((item)=> <Lineproces props={item}/>)
            }

            <h4 className="brand-text mt-5">Soft Skills: </h4>

            {

              softSkill.map(item=><li>{item}</li>)
            }
            
            <a target="_blank" href="https://drive.google.com/file/d/1biUI1QCBhtwH_JyUgsIOqF4QEA6mX0eB/view?usp=sharing">
          <button className="btn brand-btn mt-5">Download Resume <span><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></span></button>
          </a>
          
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;