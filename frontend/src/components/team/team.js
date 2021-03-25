import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faAngellist } from '@fortawesome/free-brands-svg-icons';
import "./team.css";

class Team extends React.Component {
  render() {
    return (
      <div className="team-page-container">
        <h1>Meet the Developers</h1>
        <div className='teammate-container'>
          <div className='teammate'>
              <h2>Annie Xu</h2>
              <div className='profile-pic' >
                <img src='../developers_profile_pic/Annie.png' alt='profile pic' className='profile-img'/>
              </div>
              <div className='social-links'>
                <a href="https://github.com/anyqx" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/annie-y-xu/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://angel.co/u/anyqx" target="_blank">
                  <FontAwesomeIcon icon={faAngellist} />
                </a>
              </div>
            </div>
            <div className='teammate'>
              <h2>Brandon Estaño</h2>
              <div className='profile-pic' >
                <img src='../developers_profile_pic/Brandon.png' alt='profile pic' className='profile-img'/>
              </div>
              <div className='social-links'>
                <a href="https://github.com/estanob" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/estanob/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://angel.co/u/brandon-estano" target="_blank">
                  <FontAwesomeIcon icon={faAngellist} />
                </a>
              </div>
            </div>
            <div className='teammate'>
              <h2>Joseph Sandoval</h2>
              <div className='profile-pic' >
                <img src='../developers_profile_pic/Joseph.png' alt='profile pic' className='profile-img'/>
              </div>
              <div className='social-links'>
                <a href="https://github.com/JosephASandoval" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/josephasandoval/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />

                </a>
                <a href="https://angel.co/u/joseph-sandoval-3" target="_blank">
                  <FontAwesomeIcon icon={faAngellist} />
                </a>
              </div>
            </div>
            <div className='teammate'>
              <h2>Tim Kim</h2>
              <div className='profile-pic' >
                <img src='../developers_profile_pic/Tim.png' alt='profile pic' className='profile-img'/>
              </div>
              <div className='social-links'>
                <a href="https://github.com/timjkim210" target="_blank">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://linkedin.com/in/timothy-kim-0a818a99/" target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://angel.co/u/timothy-kim-26" target="_blank">
                  <FontAwesomeIcon icon={faAngellist} />
                </a>
              </div>
            </div>

            <div className='project'>
              <span id='name'>Project Repo</span>
              <a
                href="https://github.com/JosephASandoval/mern-oneroof"
                target="_blank"
              >
                  <FontAwesomeIcon icon={faGithub} />

                {/* <img src='github_logo.png' alt='github link' className='team-img' /> */}
              </a>
            </div>
          </div>
      </div>
    );
  }
}

export default Team;
