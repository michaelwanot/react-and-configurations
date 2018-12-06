import React from 'react';
import logo from './logo.svg';
import style from './style.css';

class App extends React.Component {
  render() {
    return (
      <div className={style.App}>
        <header className={style.AppHeader}>
          <img src={logo} className={style.AppLogo} alt="logo" />
          <p className={style.paragraph}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={style.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
