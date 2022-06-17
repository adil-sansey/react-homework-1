import React from 'react';
import Label from '../Label/Label';
import styles from './TextInput.module.css';

class TextInput extends React.Component {
  render() {
    let style = null;
    let message = null;

    if (this.props.isValid === null) {
      style = styles.input;
    } else {
      style = this.props.isValid
        ? `${styles.input} ${styles.valid_value}`
        : `${styles.input} ${styles.invalid_value}`;

      if (this.props.value !== '') {
        message = this.props.isValid ? null : (
          <div className={styles.message}>{this.props.message}</div>
        );
      } else {
        message = <div className={styles.message}>Поле пустое. Заполните пожалуйста</div>;
      }
    }

    return (
      <>
        <Label htmlFor={this.props.id} placeholder={this.props.placeholder} />
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          className={style}
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onKeyDown={this.props.onKeyDown}
        />
        {message}
      </>
    );
  }
}

export default TextInput;
