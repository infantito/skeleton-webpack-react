import React, { Component } from 'react';
import Title from '../components/Title';
import Form from './Form';

import '../styles/style.pcss';
import Style from '../styles/components/_Form.pcss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { number: 0 };

    this.onCounter = this.onCounter.bind(this);
  }

  onCounter() {
    return this.state.number;
  }

  render() {
    return (
      <div className={Style.root__boxcontainer}>
        <div className={Style.root__boxcontainer__form}>
          <div className={Style.root__form__title}>
            <Title name={this.state.number} />
          </div>
          <div className={Style.root__form__container}>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
