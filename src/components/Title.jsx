import React from 'react';
import Style from '../styles/components/_Title.pcss';

// React Stateless Functional Components
const Title = ({ name }) => (
  <h1 className={Style.title}>REGISTRATION FORM, {name}</h1>
);

export default Title;
