import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Choice from './pages/Choice';
import Produtos from "./pages/Produtos";
import Compras from "./pages/Compras";
import reportWebVitals from './reportWebVitals';
import './assets/css/milligram.css';
import './assets/css/custom.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Choice />} />
        <Route path="produtos" element={<Produtos />} />
        <Route path="compras" element={<Compras />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
