import React from 'react';
import FormStyle from '../styles/components/_Form.pcss';
import InputStyle from '../styles/components/_Input.pcss';

class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={FormStyle.root__form__block}>
        <input
          name={this.props.name}
          type={this.props.type}
          maxLength={this.props.maxLength}
          placeholder={this.props.placeholder}
          className={`${InputStyle.root__form__input} ${
            this.props.ownClassName
          }`}
          autoComplete="off"
          required="required"
          ref={input => (this[this.props.name] = input)}
        />
      </div>
    );
  }
}

export default Input;
