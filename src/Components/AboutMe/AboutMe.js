import { faDesktop, faDownload, faEye, faMobile,faBriefcase,faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

import React from 'react';
import './About.css'

const AboutMe = () => {
  const data= [{
    id: 1,
    icon: <FontAwesomeIcon icon={faDesktop} className="icon" />,
    title: 'Frontend Web Developer',
    desc: 'I am a Frontend Web Developer. I can create responsive websites. I can do front end work such as PSD to HTML, Sketch to html with proper responsiveness.',
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faMobile} className="icon" />,
    title: 'Mobile App Developer',
  }
]
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
     
          <div className="container pb-5"> 
     
      <div className="row"> 
    
        <h1 className="brand-text mb-5">About Me</h1>
        <div className="col-md-8">
          <h2 className="text-white mb-3">Frontend Web Developer</h2>
          <p className="text-white">
            Hard working professional with proven critical thinking, good communication and
            multitasking skills. Aiming to leverage my abilities to successfully deliver your desired product. Developer with knowledge about backend technology that allows me to create dynamic and a fully functional website. <br/><br/>
            Experience working with ReactJs and VueJs. Good use of libraries such as Antd, Antdv, Bootstrap... <br/><br/>
            Experience working with RESTful APIs and NoSQL databases. With little experience in backend programming, you can write simple CRUD APIs<br/>
            Able to absorb and always learn new related technologies and use them for their work.
          </p>
        </div>
        <div className="infomation col-md-4">
          <h4 className=" mb-4">Personal Information</h4>
          <p><span className="info-text">Name: </span>Le Van Manh</p>
          <p><span className="info-text">Age: </span>23</p>
          <p><span className="info-text">Address: </span>Da Nang, Viet nam</p>
          <p><span className="info-text">Email: </span>manhnghean183286@gmail.com</p>
          <a target="_blank" href="https://drive.google.com/file/d/1biUI1QCBhtwH_JyUgsIOqF4QEA6mX0eB/view?usp=sharing">
          <button className="btn brand-btn mt-5">Download Resume <span><FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon></span></button>
          </a>
        </div>
      </div>
       
      <div className="row mt-5 text-center mb-5">
     
        <div className="col-md-6">
        <h3 className="text-center mt-5">Education</h3>
          <div className="service-box">
            <div className="timeline-item">
              <div className="cirle-dot"></div>
              <h3 className="timeline-date">
              <FontAwesomeIcon className='myicon' icon={faBriefcase}/> 2018 - 2023
              </h3>
              <p className="timeline-title">Computer Science</p>
              <p className="timeline-text">I majored in computer engineering from DUT university. Here I was trained in programming thinking as well as teamwork skills.</p>
              
            </div>
            <div className="timeline-item">
              <div className="cirle-dot"></div>
              <h3 className="timeline-date">
              <FontAwesomeIcon className='myicon' icon={faBriefcase}/> Dec 2022 -  Oct 2023
              </h3>
              <p className="timeline-title">CyberSoft Academy</p>
              <p className="timeline-text">Front-End Deverloper </p>
              
            </div>
           
          </div>
        </div>
        <div className="col-md-6">
        <h3 className="text-center mt-5">Experience</h3>
          <div className="service-box">
          <div className="timeline-item">
              <div className="cirle-dot"></div>
              <h3 className="timeline-date">
              <FontAwesomeIcon className='myicon' icon={faBriefcase}/>Oct 2023 - Mar 2024
              </h3>
              <p className="timeline-title">Front-End Deverlop</p>
              <p className="timeline-text">Work at World Tech company</p>
              
            </div>
            <div className="timeline-item">
              <div className="cirle-dot"></div>
              <h3 className="timeline-date">
              <FontAwesomeIcon className='myicon' icon={faBriefcase}/> Apr 2024 - now
              </h3>
              <p className="timeline-title">Front-End Deverlop</p>
              <p className="timeline-text">Work at Masscom group</p>
              
            </div>
           
           
          </div>
        </div>
      </div>
      <h3 className="text-center mt-5">Services</h3>
      <div className="row mt-5 text-center mb-5">
        <div className="col-md-6"> 
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faDesktop}></FontAwesomeIcon>
            <h4>Web Development</h4>
            <p>
            I can build fully functional and single page application with database operations 
            </p>
          </div>
        </div>
       
        <div className="col-md-6">
          <div className="service-box">
            <FontAwesomeIcon className="myicon" icon={faEye}></FontAwesomeIcon>
            <h4>Responsive Design</h4>
            <p>
              I can develop fully responsive websites that meets the satisfaction of users with various devices
            </p>
          </div>
        </div>  
         
      </div>
      
    </div>
   
  
    </motion.div>
  );
};

export default AboutMe;