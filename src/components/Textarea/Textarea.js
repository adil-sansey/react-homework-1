import React from 'react';
import Label from '../Label/Label';
import styles from './Textarea.module.css';

function Textarea(props) {
  let style = styles.textarea;
  let message = null;
  const length = props.value.length;

  if (props.isValid !== null) {
    style += props.isValid ? ` ${styles.valid_value}` : ` ${styles.invalid_value}`;

    if (length !== 0) {
      message = props.isValid ? (
        <div className={`${styles.message} ${styles.valid_message}`}>{`${length}/600`}</div>
      ) : (
        <div className={`${styles.message} ${styles.invalid_message}`}>{props.message}</div>
      );
    } else {
      message = (
        <div className={`${styles.message} ${styles.invalid_message}`}>
          Поле пустое. Заполните пожалуйста
        </div>
      );
    }
  }

  return (
    <>
      <Label htmlFor={props.id} placeholder={props.placeholder} />
      <textarea
        value={props.value}
        className={style}
        onChange={props.onChange}
        rows={props.rows}
        id={props.id}
        placeholder={props.placeholder}
      ></textarea>
      {message}
    </>
  );
}

export default Textarea;
