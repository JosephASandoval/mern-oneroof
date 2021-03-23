import React from 'react';
import "./footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-list-div">
          <ul className="footer-list">
            Developed by:
            <li>
              <a href="" target="_blank">
                Annie
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Brandon
              </a>
            </li>
            <li>
              <a href="https://github.com/JosephASandoval" target="_blank">
                Joseph
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                Tim
              </a>
            </li>
            <li>
              <a
                href="https://github.com/JosephASandoval/mern-oneroof"
                target="_blank"
              >
                Github Repo
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;