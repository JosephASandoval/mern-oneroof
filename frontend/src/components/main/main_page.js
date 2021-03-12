import React from 'react';
import '../../styles/main_page.css';


class MainPage extends React.Component {

  render() {
    return (
      <>
      <div className='main-page-container'>
        <img src='splash.png' alt='splash-img' className='splash-img'/>

        <p> Welcome to ONEROOF</p>
        <ul className='welcome-msg'>
          <li>OneRoof, a housemate organization tool, is an online application 
            for users create a home and invite housemates. With this app, housemates can better coordinate house chores, expenses, and communication.
          </li>
          {/* <li><img src='logo_word.png' alt='LOGO' className='logo-img-word'/></li> */}
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

export default MainPage;