import React from "react";
import "./projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="line"></div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/project1.png"} alt="" />
        </div>
        <div className="pinf">
          <h3>Clone of Shop.com</h3>
          <p>
            SHOP.COM is a new kind of shopping site that offers comprehensive
            shopping experience.
          </p>
          <h4>Tech Stack</h4>
          <p>HTML . Javascript . CSS</p>
          <div className="card_btn">
            <button>
              <a target="_blank" href="https://colneshopdotcom.netlify.app">
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/rauniyarsuraj731/shop.com"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="pcards">
        <div className="pimg">
          <img src={"assets/project2.png"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>Clone of Internshala</h3>
          <p>
            Internshala is India's internship and training platform with paid
            internships in Engineering, MBA, media, law, arts, and other
            streams.
          </p>
          {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML . CSS . Javascript . expressjs . MongoDb . NodeJs </p>
          <div className="card_btn">
            <button>
              <a target="_blank" href="https://web15internsaalaclone.netlify.app/">
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/rauniyarsuraj731/Backend-Internshaala"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="pcards">
        <div className="pimg">
          <img src={"assets/project3.png"} alt="" />
        </div>
        <div className="pinf">
          {/* <div className="pinfone"> */}
          <h3>Clone of Youtube</h3>
          <p>
          YouTube is an online video sharing and social media platform,to enjoy free video and music .
          </p>
          {/* </div> */}
          <h4>Tech Stack</h4>
          <p>HTML . CSS . Advance Javascript </p>
          <div className="card_btn">
            <button>
              <a target="_blank" href="https://web15youtubeclone.netlify.app/">
                DEMO
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="https://github.com/rauniyarsuraj731/clone_of_youtube"
              >
                {" "}
                CODE
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
