import React from 'react';
import Label from '../Label/Label';
import styles from './TextInput.module.css';

class TextInput extends React.Component {
  render() {
    return (
      <>
        <Label htmlFor={this.props.id} placeholder={this.props.placeholder} />
        <input
          className={styles.input}
          type="text"
          id={this.props.id}
          placeholder={this.props.placeholder}
        />
      </>
    );
  }
}

export default TextInput;
