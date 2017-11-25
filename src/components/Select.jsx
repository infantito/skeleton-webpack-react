import React from 'react';
import FormStyle from '../styles/components/_Form.pcss';
import InputStyle from '../styles/components/_Input.pcss';

const ListItem = ({ disabled, value }) => (
  <option disabled={disabled} value={value}>
    {value}
  </option>
);

class Select extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { options } = this.props;
    const listItems = options.map(value => (
      <ListItem key={value.toString()} value={value} />
    ));

    listItems.unshift(
      <ListItem
        key=""
        value={this.props.firstValueDefault}
        disabled={this.props.firstOptionDisabled}
      />
    );

    return (
      <div className={FormStyle.root__form__block}>
        <select
          defaultValue={this.props.firstValueDefault}
          name={this.props.name}
          className={`${InputStyle.root__form__select} ${
            this.props.ownClassName
          }`}
          required="required"
          ref={select => (this[this.props.name] = select)}
        >
          {listItems}
        </select>
      </div>
    );
  }
}

export default Select;
