import React from "react";
import "./about.css";

export default function About() {
  return (
    <div
      className="main"
      id="about"
    >
      <div className="about">
        <h1>About Me</h1>
        <div className="line"></div>
        <div className="parCont">
          <div className="para">
            <h2>Hi , I am Suraj Kumar Gupta</h2>
            <br />
            A Front-end Web Developer.
            <br />
            Always curious about learning new technologies, and love to
            develop scalable web applications.
            <br />
            <br /> I develop web pages with UI/UX user interface, with having a
            knowledge in React Js, Redux,JavaScript,Typescript, MongoDb, NodeJs,
            ExpressJs, HTML, CSS, and . I am a good team player.
          </div>
          <div className="parImg">
            <img
              src="assets/aboutImg.jpg"
              alt=""
            />
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
                <img
                  src={"assets/React.png"}
                  alt=""
                />
              </div>
              <div className="name">React</div>
            </div>
          </div>
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/JavaScript.png"}
                  alt=""
                />
              </div>
              <div className="name">JavaScript</div>
            </div>
          </div>
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/Typescript.png"}
                  alt=""
                />
              </div>
              <div className="name">Typescript</div>
            </div>
          </div>
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/React.png"}
                  alt=""
                />
              </div>
              <div className="name">ReactNative</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/redux.png"}
                  alt=""
                />
              </div>
              <div className="name">Redux</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/Material UI.png"}
                  alt=""
                />
              </div>
              <div className="name">Material UI</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/node.jpg"}
                  alt=""
                />
              </div>
              <div className="name">Node.js</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/express.png"}
                  alt=""
                />
              </div>
              <div className="name">Express.js</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/mongodb.png"}
                  alt=""
                />
              </div>
              <div className="name">MongoDB</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/github.png"}
                  alt=""
                />
              </div>
              <div className="name">GIT</div>
            </div>
          </div>
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/Azure.jpg"}
                  alt=""
                />
              </div>
              <div className="name">Azure</div>
            </div>
          </div>
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/figma.png"}
                  alt=""
                />
              </div>
              <div className="name">Figma</div>
            </div>
          </div>
          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/html5.png"}
                  alt=""
                />
              </div>
              <div className="name">HTML</div>
            </div>
          </div>

          <div className="icons">
            <div className="mainCO">
              <div className="iconContainer">
                <img
                  src={"assets/css3.png"}
                  alt=""
                />
              </div>
              <div className="name">CSS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
