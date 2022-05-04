import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="main" id="about">
      <div className="about">
        <h1>About Me</h1>
        <div className="line"></div>
        <div className="parCont">
          <div className="para">
            <h2>Hi , I am Suraj Kumar Gupta</h2>
            <br />
            <br />
            I am a Full-Stack Web Developer.
            <br />
            <br />
            I am always curious about learning new technologies, and love to
            develop scalable web applications.
            <br />
            <br /> I create web pages with UI/UX user
            interface, with having a knowledge in MongoDb, NodeJs,
            ExpressJs, React, Redux, HTML, CSS, and Javascript. I am a good team
            player.
            
          </div>
          <div className="parImg">
            <img src="assets/aboutImg.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Proficiency</h1>
        <div className="line"></div>
        <div className="options">
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/html5.png"} alt="" />
              </div>
              <div className="name">HTML</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/css3.png"} alt="" />
              </div>
              <div className="name">CSS</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/JavaScript.png"} alt="" />
              </div>
              <div className="name">Javascript</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/React.png"} alt="" />
              </div>
              <div className="name">React</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/redux.png"} alt="" />
              </div>
              <div className="name">Redux</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/npm.png"} alt="" />
              </div>
              <div className="name">NPM</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/node.jpg"} alt="" />
              </div>
              <div className="name">Node.js</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/express.png"} alt="" />
              </div>
              <div className="name">Express.js</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/mongodb.png"} alt="" />
              </div>
              <div className="name">MongoDB</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img src={"assets/github.png"} alt="" />
              </div>
              <div className="name">GIT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}