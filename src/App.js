import React, { useState } from 'react';
import './App.css';

import Form from './components/Form/Form';
import Profile from './components/Profile/Profile';

import { Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const [info, setInfo] = useState(null);
  const navigate = useNavigate();

  function submitButtonHandler(state) {
    setInfo(state);
    navigate('/react-homework-1/profile');
  }

  function goBackButtonHandler() {
    setInfo(null);
    navigate('/react-homework-1');
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/react-homework-1" element={<Form onSubmit={submitButtonHandler} />} />
        <Route
          path="/react-homework-1/profile"
          element={<Profile info={info} onClick={goBackButtonHandler} />}
        />
      </Routes>
    </div>
  );
}

export default App;
