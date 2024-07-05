import React from 'react';
import '../../App.css'
const SingleProject = ({project}) => {
  const {img, title, description,technology, livesite, github } = project;
  return (
    <div className="project-container p-4 position-relative">
              <img className="item-img w-100" src={img} alt=""/>
              <h5 className="mt-2">{title}</h5>
              <p>{description}</p>
              {
                technology.map(tech => <span style={{fontSize:'10px'}} className="singleSkill">{tech}</span> )
              }
                <div className="h-100 d-flex justify-content-around align-items-center">
                <a href={livesite} target="_blank"><button style={{backgroundColor:'#8e2de2'}} className="btn brand-btn">Live Site</button></a>
                <a target="_blank" href={github}><button className="btn brand-btn">Source Code</button></a>
              </div>
            </div>
  );
};

export default SingleProject;