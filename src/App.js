import React from 'react';
import './App.css';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      isValidData: false,
    };
  }

  handleClick = (state) => {
    let isValidData = true;

    for (let prop in state) {
      if (!state[prop].isValid) {
        isValidData = false;
      }
    }

    this.setState({ isValidData, info: state });
  };

  render() {
    return (
      <div className="App">
        {!this.state.isValidData ? (
          <>
            <Header>Создание анкеты</Header>
            <Form onSubmit={this.handleClick} />
          </>
        ) : (
          <Profile info={this.state.info} />
        )}
      </div>
    );
  }
}

export default App;
