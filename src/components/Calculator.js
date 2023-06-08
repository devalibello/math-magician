import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <input type="text" className="input" readOnly value={0} />

    <div className="buttons">
      <div className="row-one">
        <button className="button" type="button">AC</button>
        <button className="button" type="button">+/-</button>
        <button className="button" type="button">%</button>
        <button className="button operator" type="button">/</button>
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
);

export default Calculator;
