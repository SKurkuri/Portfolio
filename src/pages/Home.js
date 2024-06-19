import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, I am Sanjana Kurkuri</h2>
        <div className="prompt">
          <p>I am an ambitious learner whose interests range from computer science to marketing</p>
          <h4>Let's connect!!</h4>
          <LinkedInIcon />
          {/* <EmailIcon />
          <GithubIcon /> */}
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Soft skills</h2>
            <span>
            Leadership · Team Management · Entrepreneurship · Creative Content Creation · Media Planning · Public Speaking
            </span>
          </li>
          <li className="item">
            <h2> Technical skills</h2>
            <span>
              ReactJS . Angular . HTML . CSS . NodeJS . MySQL . MongoDB
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript . Java . Python . C . C++ . R . Linux</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
