import React from 'react';
import InputStyle from '../styles/components/_Input.pcss';
import FormStyle from '../styles/components/_Form.pcss';

const Label = ({ htmlFor, text }) => (
  <div className={FormStyle.sibling__file}>
    <label className={InputStyle.labelfile} htmlFor={htmlFor}>
      {text}
    </label>
  </div>
);

export default Label;
