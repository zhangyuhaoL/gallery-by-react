require('normalize.css/normalize.css');
require('styles/App.scss');
//获取图片相关数据
var imageDatas = require('../data/imageDatas.json');

import React from 'react';

//利用自执行函数，将图片名信息转成图片URL路径信息
imageDatas = (function genImageURL(imagedatasArr) {
  for (var i = 0; i < imagedatasArr.length; i++) {
    var singleImageData = imagedatasArr[i];

    singleImageData.imageURL = require('../images/' + singleImageData.fileName);

    imagedatasArr[i] = singleImageData;
  }
  return imagedatasArr;
})(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
        </section>
        <nav className="controller-nav">
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
