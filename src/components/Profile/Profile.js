import React from 'react';
import styles from './Profile.module.css';
import Header from '../Header/Header';

import { formTemplate } from '../../mocks/formTemplate';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header>{`${this.props.info.name.value} ${this.props.info.surename.value}`}</Header>
        <div className={styles.profile}>
          {formTemplate.map((elem, index) => {
            if (elem.type === 'buttonsContainer' || elem.id === 'name' || elem.id === 'surename') {
              return null;
            }

            return (
              <div key={index} className={styles.section}>
                <div className={styles.title}>{elem.placeholder}:</div>
                <div className={styles.info}>{this.props.info[elem.id].value}</div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Profile;
