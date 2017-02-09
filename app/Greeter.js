// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = "Hi there and greetings!";
//     return greet;
// };

// var config = require('./config.json');

// module.exports = function () {
//     var greet = document.createElement('div');
//     greet.textContent = config.greetText;
//     return greet;
// };



// import React, { Component } from 'react'
// import config from './config.json';

// class Greeter extends Component {
//     render() {
//         return (
//             <div>
//                 {config.greetText}
//                 <p className="red">test</p>
//             </div>
//         );
//     }
// }

// export default Greeter


import React, { Component } from 'react';
import config from './config.json';
import styles from './Greeter.css'; //导入

class Greeter extends Component {
    render() {
        return (
            // 添加类名
            <div className={styles.root}> 
                {config.greetText}
            </div>
        );
    }
}

export default Greeter;