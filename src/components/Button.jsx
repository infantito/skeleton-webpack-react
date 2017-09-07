import React, { Component } from 'react';
import Style from '../styles/components/_Button.scss';

export default class Button extends Component {
  constructor() {
    super();

    this.onClickCounter = this.onClickCounter.bind(this);
  }

  onClickCounter() {
  // onClickCounter = () => {
    const bar = () => 'baz';
    let test = { a: 1, b: 2, e: 2.5 };
    console.log({ c: 3, d: 4, ...test });
    console.log(Math.trunc(test.e));
  }

  render() {
    return (
      <input type="button" value="Click me" className={Style.button} onClick={this.onClickCounter} />
    );
  }
}
