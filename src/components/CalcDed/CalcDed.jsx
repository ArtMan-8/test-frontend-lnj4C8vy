import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import './calc-ded.scss';
import salaryFormat from '../../utils/salaryFormat';
import endingsYear from '../../utils/endingsYear';
import prefix from '../../utils/prefix';

const MONTH_COUNT = 12;
const TAX = 0.13;
const MAX_DEDUCTION = 260000;

const CalcDed = ({ salary }) => {
  const [isCalc, setIsCalc] = useState(false);

  useEffect(() => {
    setIsCalc(false);
  }, [salary]);

  const deductions = () => {
    const yearSalary = salary * MONTH_COUNT;
    const annualDeduction = Math.floor(yearSalary * TAX);

    const maxDeduction = Math.floor(MAX_DEDUCTION / annualDeduction);
    const restDeduction = MAX_DEDUCTION % annualDeduction;

    const allDeductions = new Array(maxDeduction).fill(annualDeduction);
    return ([...allDeductions, restDeduction]);
  };

  return (
    <fieldset className="calc-ded">
      <button
        type="button"
        className="calc-ded__calc"
        onClick={() => salary && setIsCalc(true)}
      >Рассчитать</button>

      {isCalc
      && (<div className="calc-ded__total">
        <h3 className="calc-ded__total-header">
          Итого можете внести в&nbsp;качесте&nbsp;досрочных:
        </h3>
        <ul className="calc-ded__list">
          {deductions().map((row, index) => (
            <li key={index + 1} className="calc-ded__row">
            <input
              type="checkbox"
              className="calc-ded__check visually-hidden"
              name={`tax-${index + 1}-year`}
              id={`tax-${index + 1}-year`}
            />
            <label
              htmlFor={`tax-${index + 1}-year`}
              className="calc-ded__label"
          >{salaryFormat(row)} рублей{' '}
            <span>{prefix(index + 1)} {index + 1}-{endingsYear(index + 1)} год</span></label>
          </li>
          ))}
        </ul>
      </div>)}

      <div className="calc-ded__controls">
        <h3 className="calc-ded__controls-header">Что уменьшаем?</h3>
        <button
          type="button"
          className="calc-ded__controls-btn calc-ded__controls-btn--active"
        >Платёж</button>

        <button
          type="button"
          className="calc-ded__controls-btn"
        >Срок</button>
      </div>

      <button
        type="submit"
        className="calc-ded__btn-add"
        onClick={(evt) => evt.preventDefault()}
      >Добавить</button>
    </fieldset>
  );
};

CalcDed.propTypes = {
  salary: T.any,
};

export default CalcDed;
