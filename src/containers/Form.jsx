import React, { Component } from 'react';
import Input from '../components/Input';
import InputFile from '../components/InputFile';
import Button from '../components/Button';
import Select from '../components/Select';
import FormStyle from '../styles/components/_Form.pcss';

class Form extends Component {
  constructor(props) {
    super(props);
  }

  onSubmit = e => {
    e.preventDefault();

    const { name, phone, email, textresume, last_job } = this;

    const client = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      textresume: textresume.value,
      last_job: last_job.value
    };

    console.log(client);
  };

  render() {
    return (
      <form className={FormStyle.root__form} onSubmit={this.onSubmit}>
        <div className={FormStyle.root__form__controls}>
          <Input
            name="name"
            type="text"
            maxLength="35"
            placeholder="Name"
            ownClassName="name"
            ref={input => (this.name = input.name)}
          />
          <Input
            name="phone"
            type="tel"
            maxLength="9"
            placeholder="Phone"
            ownClassName="phone"
            ref={input => (this.phone = input.phone)}
          />
          <Input
            name="email"
            type="email"
            maxLength="35"
            placeholder="Email"
            ownClassName="email"
            ref={input => (this.email = input.email)}
          />
          <InputFile
            nameInputTextFile="textresume"
            placeholderTextFile="Attach your resume"
            maxLength="100"
            inputTextFileClassName="textresume"
            accept=".pdf,.docx"
            idInputFile="resume"
            labelText="Choose file"
            description={'Attach a word or pdf file.\n800KB max.'}
            ref={input => (this.textresume = input.textresume)}
          />
          <Select
            name="last_job"
            firstOptionDisabled="disabled"
            firstValueDefault="Last work experience"
            ownClassName="last_job"
            options={['Google', 'Facebook', 'Twitter', 'Instagram', 'Otros']}
            ref={select => (this.last_job = select.last_job)}
          />
          <Button type="submit" value="Send" />
        </div>
      </form>
    );
  }
}

export default Form;
