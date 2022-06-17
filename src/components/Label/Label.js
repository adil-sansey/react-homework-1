import React from 'react';
import styles from './Label.module.css';

class Label extends React.Component {
  render() {
    return (
      <label className={styles.label} htmlFor={this.props.htmlFor}>
        {this.props.placeholder}:<span className={styles.required}> *</span>
      </label>
    );
  }
}

export default Label;
