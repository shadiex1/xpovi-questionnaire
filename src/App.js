import React, { useState } from 'react';
import './App.css';
import Questionnaire from './Questionnaire/Questionnaire';
import {Route, Routes} from "react-router-dom";
function App() {
  useState()
  return (
    <div className="App">
      <Routes>
      <Route
          exact
          path="/form"
          component={Questionnaire}
        />
        </Routes>
    </div>
  );
}

export default App;
