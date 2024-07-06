import {
  faGithub,
  faLinkedin,
  faFacebook,
  faGit,
  faTwitch,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDownload,
  faFileDownload,
  faTshirt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import "./Home.css";
import React from "react";
import { Typed } from "react-typed";
import me from "../images/mLe.png";

const Home = () => {
  const arr = [48, 38, 59, 37, 59];
  const obj = [84747383748];
  const obj1 = [`${obj[0]}`];
  let bb = [];
  const aa = arr.filter((item) => {
    bb = [...bb, `${item}`];
  });
  console.log(bb);
  console.log(aa);
  const arr3 = [];
  obj1.map((item) => {
    for (let i = 0; i < item.length; i++) {
      arr3.push(item.charAt(i));
    }
  });
  const arr4 = arr3.filter((item) => item % 2 == 0);

  const nums = [];
  console.log("ar3", arr4);

  const searchRange = (target) => {
    let arr7 = [];

    nums.map((item, index) => {
      if (item == target) {
        arr7 = [...arr7, index];
      } else arr7 = [-1, -1];
    });
    console.log(arr7);
  };
  searchRange(8);

  const value = 8;
  let arr1 = [];
  nums.map((item, index) => {
    if (item != null) arr1 = [...arr1, index];
    else arr1 = [-1, -1];
  });
  console.log(arr1);
  // const arr1=arr.map((item,index)=>{
  //   // arr=[...${`item`}]
  //   console.log(item);
  // })
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      <div className="home">
        <div className="img-personal">{/* <img  src={me} alt="" /> */}</div>
        <div className="row">
          <div className=" col-md-6">
            <div style={{ height: "100vh", marginTop: "-56px" }}>
              <div className="home-content-container h-100 d-flex flex-column align-items-center justify-content-center">
                <h2>Welcome!</h2>
                <h1 className="name-title">I am Manh Le, a</h1>
                <h1>
                  <span className="art-code">
                    &lt;<i>code</i>&gt;{" "}
                    <Typed
                      strings={["Front-End Developer", "React Developer"]}
                      loop
                      typeSpeed={100}
                      backSpeed={25}
                      smartBackspace
                      shuffle={false}
                      backDelay={1}
                      fadeOut={false}
                      fadeOutDelay={100}
                      loopCount={0}
                      showCursor
                      cursorChar="|"
                    />{" "}
                    &lt;/<i>code</i>&gt;
                  </span>
                </h1>

                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1rVotItzMN9VZzeRVWQ0I3jwETY5Tvpve/view?usp=sharing"
                >
                  <button className="btn brand-btn">
                    Download Resume{" "}
                    <span>
                      <FontAwesomeIcon icon={faFileDownload}></FontAwesomeIcon>
                    </span>
                  </button>
                </a>

                <div className="socialTab">
                  <div className="button">
                    <div className="icon">
                      <a href="https://www.facebook.com/lee.michael.50702">
                        <fontawesomeicon
                          classname="myicon"
                          icon="{faFacebook}"
                        />
                      </a>
                    </div>
                    <span>FaceBook</span>
                  </div>
                  <div className="button">
                    <div className="icon">
                      <a href="https://www.linkedin.com/in/m%E1%BA%A1nh-l%C3%AA-bb2586258/">
                        <fontawesomeicon
                          classname="myicon"
                          icon="{faLinkedinIn}"
                        />
                      </a>
                    </div>
                    <span>LinkedIn</span>
                  </div>
                  <div className="button">
                    <div className="icon">
                      <a href="https://www.instagram.com/manh_mad/">
                        <fontawesomeicon
                          classname="myicon"
                          icon="{faInstagram}"
                        />
                      </a>
                    </div>
                    <span>Instagram</span>
                  </div>
                  <div className="button">
                    <div className="icon">
                      <a href="https://github.com/Mat1Lee">
                        <fontawesomeicon classname="myicon" icon="{faGithub}" />
                      </a>
                    </div>
                    <span>GitHub</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
