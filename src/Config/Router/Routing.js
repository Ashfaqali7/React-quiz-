import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Quiz from "../../Pages/Quiz";
function MyRouting() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRouting;
