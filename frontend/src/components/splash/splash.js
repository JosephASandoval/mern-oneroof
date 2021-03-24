import React from "react";
import "./splash.css";

class Splash extends React.Component {
  render() {
    return (
      <>
        <div className="splash-container">
          <div className="splash-img-container">
            <img src="splash.png" alt="splash-img" className="splash-img" />
          </div>
          <p> Welcome to ONEROOF</p>
          <ul className="welcome-msg">
            <li>
              OneRoof, a housemate organization tool, is an online application
              for users to create a home and invite housemates. With this app,
              housemates can better coordinate house chores, expenses, and
              communication.
            </li>
          </ul>
        </div>
        <div>
          <footer>
            <p>Copyright &copy; 2021 ONEROOF</p>
          </footer>
        </div>
      </>
    );
  }
}

export default Splash;
