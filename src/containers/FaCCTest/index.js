import React, { Component } from 'react';
import { FaCC } from '../../components';

class FaCCTest extends Component {
  componentDidMount() {
    console.log('为所欲为2');
  }

  render() {
    return (
      <FaCC>
        {
          (txt1, txt2) => (
            <div>
              <div>{txt1}</div>
              <div>{txt2}</div>
            </div>
          )
        }
      </FaCC>
    );
  }
}

export default FaCCTest;
