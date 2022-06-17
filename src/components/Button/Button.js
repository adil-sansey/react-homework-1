import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    return (
      <button
        id={this.props.id}
        type={this.props.type}
        onClick={this.props.onClick}
        className={styles.button}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
