import React from "react";
import "./team.css";

class Team extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-list-div">
          <ul className="footer-list">
            Developers:
            <li>
              <span id='name'>Annie Xu</span>
              <img src='../developers_profile_pic/Annie.png' alt='profile pic' className='footer-img'/>
              &nbsp;
              <a href="https://github.com/anyqx" target="_blank">
                <img src='github_logo.png' alt='github link' className='footer-img'/>
              </a>
              &nbsp;
              <a href="https://linkedin.com/in/annie-y-xu/" target="_blank">
                <img src='linkedin_logo.png' alt='linkedin link' className='footer-img'/>
              </a>
            </li>
            <li>
              <span id='name'>Brandon Estaño</span>
              <img src='../developers_profile_pic/Brandon.png' alt='profile pic' className='footer-img'/>
              &nbsp;
              <a href="https://github.com/estanob" target="_blank">
                <img src='github_logo.png' alt='github link' className='footer-img'/>
              </a>
              &nbsp;
              <a href="https://linkedin.com/in/estanob/" target="_blank">
                <img src='linkedin_logo.png' alt='linkedin link' className='footer-img'/>
              </a>
            </li>
            <li>
              <span id='name'>Joseph Sandoval</span>
              <img src='../developers_profile_pic/Joseph.png' alt='profile pic' className='footer-img'/>
              &nbsp;
              <a href="https://github.com/JosephASandoval" target="_blank">
                <img src='github_logo.png' alt='github link' className='footer-img'/>
              </a>
              &nbsp;
              <a href="https://linkedin.com/in/josephasandoval/" target="_blank">
                <img src='linkedin_logo.png' alt='linkedin link' className='footer-img'/>
              </a>
            </li>
            <li>
              <span id='name'>Tim Kim</span>
              <img src='../developers_profile_pic/Tim.png' alt='profile pic' className='footer-img'/>
              &nbsp;
              <a href="https://github.com/timjkim210" target="_blank">
                <img src='github_logo.png' alt='github link' className='footer-img'/>
              </a>
              &nbsp;
              <a href="https://linkedin.com/in/timothy-kim-0a818a99/" target="_blank">
                <img src='linkedin_logo.png' alt='linkedin link' className='footer-img'/>
              </a>
            </li>
            <li>
              <span id='name'>Project Repo</span>
              <a
                href="https://github.com/JosephASandoval/mern-oneroof"
                target="_blank"
              >
                <img src='github_logo.png' alt='github link' className='footer-img' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Team;
