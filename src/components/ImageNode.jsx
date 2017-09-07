import React from 'react';
import ImageSvgNode from '../images/nodejs.svg';
import Style from '../styles/components/_Image.scss';

// React Stateless Functional Components
const ImageNode = () => (
  <img
    src={ImageSvgNode}
    alt="Nodejsx SVG"
    className={`${Style.root__image} ${Style['root__image--default']}`}
  />
);

export default ImageNode;
