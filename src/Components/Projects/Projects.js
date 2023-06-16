import React from 'react';
import Masonry from 'react-masonry-css';
import './Projects.css';
import diennuoc from '../images/dienNuoc.png';
import phone from '../images/Phone.png';
import music from '../images/music.png';
import chat from '../images/chat.png';
import weather from '../images/weather.png'
import { motion } from 'framer-motion';
import SingleProject from './SingleProject';

const Projects = () => {
  const projects = [
    {img: diennuoc,livesite:'https://diennuoc-9bba6.web.app/', title: 'Website displaying and monitoring data', description:'Website display and functions for users', technology:['HTML', 'SCSS', 'REACTBOOTSTRAP', 'REACT','REACT-REDUX', 'FIREBASE'],github:'https://github.com/Mat1Lee/dienNuocAdmin'},
    {img: phone,livesite:'https://phone-seller-219d4.web.app/', title: 'Phone Seller', description:'Website with  user  operations', technology:['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT'],github:'https://github.com/Mat1Lee/Phone' },
    {img: music,livesite:'https://music-e47bb.web.app/', title: 'Music player', description:'', technology:['HTML','SCSS', 'REACTBOOTSTRAP', 'REACT','REACT-REDUX' ],github:'https://github.com/Mat1Lee/music' },
    {img: chat,livesite:'https://chat-react-69d2d.web.app/', title: 'Fun Chat', description:'Chat app using firebase', technology:['HTML', 'SCSS','REACT','FIREBASE' ],github:'https://github.com/Mat1Lee/chatApp' },
    {img: weather,livesite:'https://react1-bdb08.web.app/', title: 'Weather App', description:'Weather information app that supports voice search. You must say the weather at along with the name of the city you want', technology:['HTML','SCSS', 'REACTBOOTSTRAP', ],github:'https://github.com/Mat1Lee/Weather' },
  ]
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 2,
    500: 1
  };
  return (
    <motion.div 
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      exit={{opacity:0, scale:0.5}}
      transition={{duration: 0.5}}
    >
      <div className="container">
          <h2 className="brand-text mb-5">My Projects:</h2>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid "
            columnClassName="my-masonry-grid_column">
              {
                projects.map(project => <SingleProject project={project}></SingleProject>)
              }
        </Masonry>
      </div>
        </motion.div>
  );
};

export default Projects;