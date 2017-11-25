import React from 'react';
import Label from './Label';
import InputStyle from '../styles/components/_Input.pcss';
import FormStyle from '../styles/components/_Form.pcss';

class InputFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { filename: '' };

    this.getFileName = this.getFileName.bind(this);
    this.getFileNameFromPath = this.getFileNameFromPath.bind(this);
  }

  getFileName() {
    const self = this;
    const filename = self.getFileNameFromPath(self.inputFile.value);

    self.setState({ filename });
  }

  getFileNameFromPath(value = '') {
    return value.replace(/^.*[\\]/, '');
  }

  render() {
    const description = this.props.description.split('\n');

    return (
      <div className={FormStyle.root__form__block}>
        <input
          type="text"
          name={this.props.nameInputTextFile}
          placeholder={this.props.placeholderTextFile}
          maxLength={this.props.maxLength}
          className={`${InputStyle.root__form__input} ${
            this.props.inputTextFileClassName
          }`}
          value={this.state.filename}
          required="required"
          ref={input => (this[this.props.nameInputTextFile] = input)}
        />
        <input
          id={this.props.idInputFile}
          type="file"
          name={this.props.nameInputFile}
          className={`${InputStyle.root__form__file}`}
          accept={this.props.accept}
          readOnly="readonly"
          onChange={this.getFileName}
          ref={input => (this.inputFile = input)}
        />
        <div className={FormStyle.root__form__sibling}>
          <Label htmlFor={this.props.idInputFile} text={this.props.labelText} />
          <div className={FormStyle.sibling__file}>
            {description.map((item, index) => (
              <p className={FormStyle.description} key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default InputFile;
