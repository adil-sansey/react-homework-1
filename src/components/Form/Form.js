import React from 'react';
import styles from './Form.module.css';
import { formTemplate } from '../../mocks/formTemplate';
import TextInput from '../TextInput/TextInput';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

class Form extends React.Component {
  render() {
    return (
      <form action="" method="" className={styles.form}>
        {formTemplate.map((elem, index) => {
          switch (elem.type) {
            case 'text':
              return (
                <div key={index}>
                  <TextInput id={elem.id} placeholder={elem.placeholder} />
                </div>
              );
            case 'textarea':
              return (
                <div key={index}>
                  <Textarea id={elem.id} placeholder={elem.placeholder} rows={elem.rows} />
                </div>
              );
            case 'buttonsContainer':
              const buttons = elem.buttons.map((button, key) => {
                return <Button key={key} text={button.text} />;
              });

              return (
                <div key={index} className={styles.button_container}>
                  {buttons}
                </div>
              );
            default:
              break;
          }

          return <></>;
        })}
      </form>
    );
  }
}

export default Form;
