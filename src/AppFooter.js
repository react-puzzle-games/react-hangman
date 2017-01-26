import React, { Component } from 'react';

import './AppFooter.css';

class AppFooter extends Component {
  render() {
    return (
      <div className="App-footer">
        <a target="_blank"
          href="https://github.com/ovidiubute/react-hangman"
        >
          <img src="github-10-xxl.png" width="30" height="30"
            alt="Github"
          />
        </a>
        <h5>Made with <span style={{color: 'red'}}>&#9829;</span> by <a
            target="_blank"
            href="https://twitter.com/ovidiubute">Ovidiu
          </a> using React and create-react-app boilerplate
        </h5>
      </div>
    );
  }
}

export default AppFooter;
