import React, { useState, useEffect } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';
import style from '../styles/Calculator.module.css';

const Calculator = () => {
  const [calculationValues, setCalculatorValues] = useState({
    total: null,
    next: null,
    operation: null,
  });

  useEffect(() => {
    const handleButtonClick = (event) => {
      const buttonValue = event.target.textContent;
      setCalculatorValues(calculate(calculationValues, buttonValue));
    };

    const buttons = document.querySelectorAll('.button');
    buttons.forEach((button) => {
      button.addEventListener('click', handleButtonClick);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener('click', handleButtonClick);
      });
    };
  });

  return (
    <div className="calculatorContainer">
      <p className={style.mathText}>Lets do some Math!!!</p>
      <div className="calculator">
        <input type="text" className="input" readOnly value={calculationValues.next || calculationValues.total || '0'} />
        <div className="buttons">
          <div className="row-one">
            <button className="button" type="button">AC</button>
            <button className="button" type="button">+/-</button>
            <button className="button" type="button">%</button>
            <button className="button operator" type="button">&#247;</button>
          </div>

          <div className="row">
            <button className="button" type="button">7</button>
            <button className="button" type="button">8</button>
            <button className="button" type="button">9</button>
            <button className="button operator" type="button">x</button>
          </div>

          <div className="row">
            <button className="button" type="button">4</button>
            <button className="button" type="button">5</button>
            <button className="button" type="button">6</button>
            <button className="button operator" type="button">-</button>
          </div>

          <div className="row">
            <button className="button" type="button">1</button>
            <button className="button" type="button">2</button>
            <button className="button" type="button">3</button>
            <button className="button operator" type="button">+</button>
          </div>

          <div className="row row-five">
            <button className="button button-zero" type="button">0</button>
            <button className="button  dot" type="button">.</button>
            <button className="button operator" type="button">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
