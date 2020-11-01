import React, { useState } from 'react';
import T from 'prop-types';
import './popup.scss';
import CalcDed from '../CalcDed';

const Popup = ({ handleClosePopup }) => {
  const [salary, setSalary] = useState('');

  const salaryFormat = (inputVal) => {
    // const rub = '₽';
    const formatNum = inputVal.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    const formatValue = `${formatNum}`;
    return formatValue;
  };

  const salaryInit = (formatVal) => parseInt(formatVal.replace(/\s+/g, '').trim(), 10);

  return (
    <form className="popup">
      <fieldset className="popup__salary">
        <legend className="popup__legend">Налоговый вычет</legend>
        <p className="popup__description">
          Используйте налоговый вычет чтобы погасить ипотеку досрочно.{' '}
          Размер налогового вычета составляет не более 13%{' '}
          от своего официального годового дохода.
        </p>

        <div className="popup__data">
          <label
            htmlFor="salary"
            className="popup__data-label"
          >Ваша зарплата в месяц</label>

          <input
            type="text"
            id="salary"
            className="popup__data-input"
            placeholder="Введите данные"
            required
            value={salaryFormat(salary)}
            onChange={(evt) => {
              const inputValue = salaryInit(evt.target.value);

              if (Number(inputValue)) {
                setSalary(inputValue);
                return;
              }

              setSalary('');
            }}
          />

          <p className="popup__data-none">Поле обязательно для заполнения</p>
        </div>
      </fieldset>

      <CalcDed salary={salary} />

      <button
        type="submit"
        className="popup__btn-add"
        onClick={(evt) => evt.preventDefault()}
      >Добавить</button>

      <button
        type="button"
        className="popup__btn-close"
        onClick={handleClosePopup}
      >Закрыть попап</button>
    </form>
  );
};

Popup.propTypes = {
  handleClosePopup: T.func,
};

export default Popup;
