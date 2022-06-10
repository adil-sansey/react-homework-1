import React from 'react';
import styles from './Header.module.css';

class Header extends React.Component {
  render() {
    return <h1 className={styles.Header}>{this.props.headerText}</h1>;
  }
}

export default Header;
