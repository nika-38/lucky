import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";


const App:React.FC=()=>{
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/> } />
          <Route path="ques" element={<Question/> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;