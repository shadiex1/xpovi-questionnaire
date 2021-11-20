import React, { useState } from "react";
import "./App.css";
import Questionnaire from "./Questionnaire/Questionnaire";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Summary from "./Summary/Summary";

function App() {
  const [answers, setAnswers] = useState(null);

  return (
    <div className="App">
      <Routes>
        <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home />} />
        <Route
          path={process.env.PUBLIC_URL + '/form'}
          element={<Questionnaire setAnswer={(ans) => setAnswers(ans)} />}
        />
        <Route path={process.env.PUBLIC_URL + '/summary'} element={<Summary answers={answers} />} />
      </Routes>
    </div>
  );
}

export default App;
