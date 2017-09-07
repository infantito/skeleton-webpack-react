import React from 'react';
import Style from '../styles/components/_Hello.scss';

// React Stateless Functional Components
const Hello = ({ name, onCounter }) => (
  <h1 className={Style.hello} onClick={onCounter}>Hello, {name}</h1>
);

export default Hello;
