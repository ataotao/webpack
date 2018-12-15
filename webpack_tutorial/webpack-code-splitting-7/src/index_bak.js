import _ from 'lodash';
import './style.css';
import Img1 from './img/img1.jpg';
import XmlData from './xml/data.xml';

function component() {
    var element = document.createElement('div');
    var div_img = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack', 'demo1'], ' ');
    element.classList.add('hello');

    // 将图像添加到我们现有的 div。
    var myIcon = new Image();
    myIcon.src = Img1;
    myIcon.width = 50;
    div_img.appendChild(myIcon);
    div_img.classList.add('div_img');
    document.body.appendChild(div_img);

    // 加载xml文件
    console.log('XmlData', XmlData);
    

    return element;
}

document.body.appendChild(component());