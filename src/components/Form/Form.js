import React, { useState } from 'react';
import styles from './Form.module.css';
import { formTemplate } from '../../mocks/formTemplate';
import { formDefaultState } from '../../mocks/formDefaultState';
import Header from '../Header/Header';
import TextInput from '../TextInput/TextInput';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

function Form(props) {
  const [userData, setUserData] = useState(formDefaultState);

  function submitButtonClickHandler(e) {
    e.preventDefault();

    const userDataChanges = {};
    let isValidData = true;

    for (let prop in userData) {
      const elem = userData[prop];

      if (elem.isValid === null) {
        isValidData = false;
        userDataChanges[prop] = { ...elem, isValid: false };
      }
    }

    setUserData({ ...userData, ...userDataChanges });

    if (!isValidData) {
      return;
    }

    props.onSubmit(userData);
  }

  function canselButtonClickHandler(e) {
    e.preventDefault();

    setUserData(formDefaultState);
  }

  function inputChangeHandler(e) {
    const elem = e.target;
    let value = elem.value;
    let tel = value.replace(/-/g, '');
    let isValid = true;

    switch (elem.id) {
      case 'name':
      case 'surename':
        const isFirstLetterCapitalized = value.codePointAt(0) < 65 || value.codePointAt(0) > 90;

        if (value === '' || isFirstLetterCapitalized) {
          isValid = false;
        }
        break;

      case 'site':
        if (value === '' || !value.startsWith('https://')) {
          isValid = false;
        }
        break;

      case 'phoneNumber':
        if (value.length > 12) {
          return;
        }

        if (value === '' || value.length < 12 || !isFinite(+tel)) {
          isValid = false;
        }

        if (value.length === 1 || value.length === 6 || value.length === 9) {
          value += '-';
        }
        break;

      case 'about':
      case 'technologyStack':
      case 'aboutLastProject':
        if (value.length === 0 || value.length > 600) {
          isValid = false;
        }
        break;

      default:
        break;
    }

    if (elem.id === 'phoneNumber') {
      setUserData({ ...userData, [elem.id]: { value, tel, isValid } });
    } else {
      setUserData({ ...userData, [elem.id]: { value, isValid } });
    }

    // setTimeout(() => {
    //   console.log(userData);
    // });
  }

  function onKeyPressed(event) {
    if (event.key === 'Backspace') {
      const elem = event.target;
      const prevTel = userData.phoneNumber.value;
      const length = prevTel.length;

      const newTel = prevTel[length - 1] === '-' ? prevTel.slice(0, length - 1) : prevTel.slice();

      const isValid = !!newTel.length;

      setUserData({ ...userData, [elem.id]: { value: newTel, isValid } });
    }
  }

  return (
    <>
      <Header>???????????????? ????????????</Header>
      <form action="" method="" className={styles.form}>
        {formTemplate.map((elem, index) => {
          switch (elem.type) {
            case 'text':
              return (
                <div key={index}>
                  <TextInput
                    type={elem.type}
                    value={userData[elem.id].value}
                    isValid={userData[elem.id].isValid}
                    onChange={inputChangeHandler}
                    id={elem.id}
                    placeholder={elem.placeholder}
                    message={elem.invalidMessage}
                  />
                </div>
              );
            case 'date':
              return (
                <div key={index}>
                  <TextInput
                    type={elem.type}
                    value={userData[elem.id].value}
                    isValid={userData[elem.id].isValid}
                    onChange={inputChangeHandler}
                    id={elem.id}
                    placeholder={elem.placeholder}
                  />
                </div>
              );
            case 'tel':
              return (
                <div key={index}>
                  <TextInput
                    type={elem.type}
                    value={userData[elem.id].value}
                    isValid={userData[elem.id].isValid}
                    onChange={inputChangeHandler}
                    onKeyDown={onKeyPressed}
                    id={elem.id}
                    placeholder={elem.placeholder}
                    message={elem.invalidMessage}
                  />
                </div>
              );
            case 'textarea':
              return (
                <div key={index}>
                  <Textarea
                    value={userData[elem.id].value}
                    isValid={userData[elem.id].isValid}
                    id={elem.id}
                    onChange={inputChangeHandler}
                    placeholder={elem.placeholder}
                    length={userData[elem.id].length}
                    rows={elem.rows}
                    message={elem.invalidMessage}
                  />
                </div>
              );
            case 'buttonsContainer':
              const buttons = elem.buttons.map((button, key) => {
                return (
                  <Button
                    key={key}
                    id={button.id}
                    type={button.type}
                    text={button.text}
                    onClick={
                      button.id === 'submit' ? submitButtonClickHandler : canselButtonClickHandler
                    }
                  />
                );
              });

              return (
                <div key={index} className={styles.button_container}>
                  {buttons}
                </div>
              );
            default:
              break;
          }

          return null;
        })}
      </form>
    </>
  );
}

export default Form;
