import Header from "./components/Header";
import InpitNumber from "./components/InputNumber";
import sumNatural from "./sumNatural";
import React, { useState } from "react";
import './App.css';

function App() {
  var def = 1;
  const [num, setNum] = useState(def);

  function onChange(value) {
    setNum(value);
    console.log("changed", value, num);
  }

  return (
    <>
      <Header />
      <div className="main">
        <InpitNumber def={def} onChange={onChange} />
        <span className="output">
          Сумма первых {num} натуральных чисел: <span className="result">{sumNatural(num)}</span>
        </span>
      </div>
    </>
  );
}

export default App;
