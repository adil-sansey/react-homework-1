import React from 'react';
import styles from './Profile.module.css';
import Header from '../Header/Header';
import Button from '../Button/Button';

import { formTemplate } from '../../mocks/formTemplate';

function Profile(props) {
  if (!props.info) {
    return <Header>Заполните Анкету!</Header>;
  }

  return (
    <>
      <Header>{`${props.info.name.value} ${props.info.surename.value}`}</Header>
      <div className={styles.profile}>
        {formTemplate.map((elem, index) => {
          if (elem.type === 'buttonsContainer' || elem.id === 'name' || elem.id === 'surename') {
            return null;
          }

          return (
            <div key={index} className={styles.section}>
              <div className={styles.title}>{elem.placeholder}:</div>
              <div className={styles.info}>{props.info[elem.id].value}</div>
            </div>
          );
        })}
      </div>
      <div className={styles.button_container}>
        <Button id="goBack" type="button" text="Назад" onClick={props.onClick} />
      </div>
    </>
  );
}

export default Profile;
