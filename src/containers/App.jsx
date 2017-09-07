import React, { Component } from 'react';
import Hello from '../components/Hello.jsx';
import Button from '../components/Button.jsx';
import ImageNode from '../components/ImageNode.jsx';
import Style from '../styles/components/_Image.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { number: 0 };

    // This binding is necessary to make `this` work in the callback
    this.onCounter = this.onCounter.bind(this);
  }

  onCounter() {
    let text = 'abcde';
    let test = { a: 1, b: 2 };
    let result = 4 ** test.b;
    this.setState({ number: this.state.number + 1 });
    console.log({ c: 3, d: 4, ...test });
    console.log(text.includes('c'));
    console.log(result);
  }

  render() {
    return (
      <section id={Style.root_section}>
        <Hello
          name={`React with Webpack2 (${this.state.number})`}
          onCounter={this.onCounter}
        />
        <Button />
        <ImageNode />
      </section>
    );
  }
}

export default App;
