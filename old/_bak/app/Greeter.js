// var configJson = require('../config/config.json');
// module.exports = function() {
//   var greet = document.createElement('div');
//   greet.textContent = configJson.greetText + '1';
//   return greet;
// };

/*
import React, {Component} from 'react'
import config from '../config/config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText} + 1
      </div>
    );
  }
}

export default Greeter
*/


import React, {Component} from 'react';
import config from '../config/config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component{
  render() {
    return (
      <div className={styles.root}> //添加类名
        {config.greetText}
      </div>
    );
  }
}

export default Greeter