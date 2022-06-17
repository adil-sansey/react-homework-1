import React from 'react';
import Label from '../Label/Label';
import styles from './DateInput.module.css';

class DateInput extends React.Component {
  render() {
    return (
      <>
        <Label htmlFor={this.props.id} placeholder={this.props.placeholder} />
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          className={styles.date_input}
          type="date"
          id={this.props.id}
          min="1900-01-01"
          max="2022-12-31"
          // placeholder={this.props.placeholder}
        />
      </>
    );
  }
}

export default DateInput;
