import React from 'react';
import Label from '../Label/Label';
import styles from './DateInput.module.css';

function DateInput(props) {
  return (
    <>
      <Label htmlFor={props.id} placeholder={props.placeholder} />
      <input
        value={props.value}
        onChange={props.onChange}
        className={styles.date_input}
        type="date"
        id={props.id}
        max="2022-12-31"
      />
    </>
  );
}

export default DateInput;
