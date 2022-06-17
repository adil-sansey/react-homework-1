import React from 'react';
import Label from '../Label/Label';
import styles from './Textarea.module.css';

class Textarea extends React.Component {
  render() {
    let style = null;
    let message = null;

    if (this.props.isValid === null) {
      style = styles.textarea;
    } else {
      style = this.props.isValid
        ? `${styles.textarea} ${styles.valid_value}`
        : `${styles.textarea} ${styles.invalid_value}`;

      if (this.props.value.length !== 0) {
        message = this.props.isValid ? (
          <div
            className={`${styles.message} ${styles.valid_message}`}
          >{`${this.props.length}/600`}</div>
        ) : (
          <div className={`${styles.message} ${styles.invalid_message}`}>{this.props.message}</div>
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
        <Label htmlFor={this.props.id} placeholder={this.props.placeholder} />
        <textarea
          value={this.props.value}
          className={style}
          onChange={this.props.onChange}
          rows={this.props.rows}
          id={this.props.id}
          length={this.props.length}
          placeholder={this.props.placeholder}
        ></textarea>
        {message}
      </>
    );
  }
}

export default Textarea;
