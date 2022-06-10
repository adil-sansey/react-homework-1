import React from 'react';
import styles from './Form.module.css';
import { formTemplate } from '../../mocks/formTemplate';
import TextInput from '../TextInput/TextInput';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

class Form extends React.Component {
  createTextInput(textInput) {
    return <TextInput id={textInput.id} placeholder={textInput.placeholder} />;
  }

  createTextarea(textarea) {
    return <Textarea id={textarea.id} placeholder={textarea.placeholder} rows={textarea.rows} />;
  }

  createButton(button, key) {
    return <Button key={key} text={button.text} />;
  }

  render() {
    const formItems = formTemplate.map((elem, index) => {
      if (elem.type === 'text') {
        return <li key={index}>{this.createTextInput(elem)}</li>;
      }

      if (elem.type === 'textarea') {
        return <li key={index}>{this.createTextarea(elem)}</li>;
      }

      if (elem.type === 'buttonsContainer') {
        const buttons = elem.buttons.map((button, key) => {
          return this.createButton(button, key);
        });

        return (
          <li key={index} className={styles.button_container}>
            {buttons}
          </li>
        );
      }

      return <></>;
    });

    return (
      <form action="" method="" className={styles.form}>
        <ul className={styles.formList}>{formItems}</ul>
      </form>
    );
  }
}

export default Form;
