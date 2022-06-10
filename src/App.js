import React from 'react';
import './App.css';

import Form from './components/Form/Form';
import Header from './components/Header/Header';

class App extends React.Component {
  render() {
    const headerText = 'Создание анкеты';

    return (
      <div className="App">
        <Header headerText={headerText}></Header>
        <Form></Form>
      </div>
    );
  }
}

export default App;
