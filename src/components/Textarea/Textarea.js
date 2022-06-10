import React from 'react';
import Label from '../Label/Label';
import styles from './Textarea.module.css';

class Textarea extends React.Component {
  render() {
    return (
      <>
        <Label htmlFor={this.props.id} placeholder={this.props.placeholder} />
        <textarea
          className={styles.textarea}
          maxLength={600}
          rows={this.props.rows}
          id={this.props.id}
          placeholder={this.props.placeholder}
        ></textarea>
      </>
    );
  }
}

export default Textarea;
