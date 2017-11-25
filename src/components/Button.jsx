import React, { Component } from 'react';
import ButtonStyle from '../styles/components/_Button.pcss';

export default class Button extends Component {
  constructor(props) {
    super(props);

    this.onAttempt = this.onAttempt.bind(this);
  }

  onAttempt() {
    return this;
  }

  render() {
    return (
      <div className={ButtonStyle.root__form__button}>
        <button
          type={this.props.type}
          className={ButtonStyle.button}
          onClick={this.onAttempt}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}
