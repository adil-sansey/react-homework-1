import React from 'react';
import styles from './Form.module.css';
import { formTemplate } from '../../mocks/formTemplate';
import { formDefaultState } from '../../mocks/formDefaultState';
import TextInput from '../TextInput/TextInput';
import Textarea from '../Textarea/Textarea';
import Button from '../Button/Button';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = formDefaultState;
  }

  submitButtonClickHandler = (event) => {
    event.preventDefault();

    for (let prop in this.state) {
      const elem = this.state[prop];

      if (elem.isValid === null) {
        this.setState((prevState) => ({
          ...prevState,
          [prop]: { ...prevState[prop], isValid: false },
        }));
      }
    }

    this.props.onSubmit(this.state);
  };

  canselButtonClickHandler = (event) => {
    event.preventDefault();

    this.setState(formDefaultState);
  };

  inputChangeHandler = (event) => {
    const elem = event.target;
    let value = elem.value;
    let tel = value.replace(/-/g, '');
    let isValid = true;
    let length = 0;

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

        length = value.length;
        break;

      default:
        break;
    }

    if (elem.id === 'about' || elem.id === 'technologyStack' || elem.id === 'aboutLastProject') {
      this.setState({ [elem.id]: { value, isValid, length } });
    } else if (elem.id === 'phoneNumber') {
      this.setState({ [elem.id]: { value, tel, isValid } });
    } else {
      this.setState({ [elem.id]: { value, isValid } });
    }

    setTimeout(() => {
      console.log(this.state);
    });
  };

  onKeyPressed = (event) => {
    if (event.key === 'Backspace') {
      const elem = event.target;

      this.setState((prevState) => {
        const prevTel = prevState.phoneNumber.value;
        const length = prevTel.length;

        const newTel = prevTel[length - 1] === '-' ? prevTel.slice(0, length - 1) : prevTel.slice();

        const isValid = !!newTel.length;

        return { ...prevState, [elem.id]: { value: newTel, isValid } };
      });
    }
  };

  render() {
    return (
      <form action="" method="" className={styles.form}>
        {formTemplate.map((elem, index) => {
          switch (elem.type) {
            case 'text':
              return (
                <div key={index}>
                  <TextInput
                    type={elem.type}
                    value={this.state[elem.id].value}
                    isValid={this.state[elem.id].isValid}
                    onChange={this.inputChangeHandler}
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
                    value={this.state[elem.id].value}
                    isValid={this.state[elem.id].isValid}
                    onChange={this.inputChangeHandler}
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
                    value={this.state[elem.id].value}
                    isValid={this.state[elem.id].isValid}
                    onChange={this.inputChangeHandler}
                    onKeyDown={this.onKeyPressed}
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
                    value={this.state[elem.id].value}
                    isValid={this.state[elem.id].isValid}
                    id={elem.id}
                    onChange={this.inputChangeHandler}
                    placeholder={elem.placeholder}
                    length={this.state[elem.id].length}
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
                      button.id === 'submit'
                        ? this.submitButtonClickHandler
                        : this.canselButtonClickHandler
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
    );
  }
}

export default Form;
