import React, { Component } from 'react';

import './AppFooter.css';

class AppFooter extends Component {
  render() {
    return (
      <div className="App-footer">
        <h5>Made with <span style={{color: 'red'}}>&#9829;</span> by <a
            target="_blank"
            href="https://twitter.com/ovidiubute">Ovidiu
          </a> using React and create-react-app boilerplate &#169; 2017
        </h5>
      </div>
    );
  }
}

export default AppFooter;
