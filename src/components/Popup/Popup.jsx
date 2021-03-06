import React, { useState, useRef } from 'react';
import T from 'prop-types';
import './popup.scss';
import CalcDed from '../CalcDed';
import salaryFormat from '../../utils/salaryFormat';
import salaryInit from '../../utils/salaryInit';
import showRub from '../../utils/showRub';

const Popup = ({ handleClosePopup }) => {
  const [salary, setSalary] = useState('');
  const wrapper = useRef(null);

  return (
    <div className="popup-wrapper"
    ref={wrapper}
      onClick={(evt) => (
        evt.target === wrapper.current && handleClosePopup(false)
      )}
    >
      <form className="popup">
        <fieldset className="popup__salary">
          <legend className="popup__legend">Налоговый вычет</legend>
          <p className="popup__description">
            Используйте налоговый вычет чтобы погасить ипотеку досрочно.{' '}
            Размер налогового вычета составляет не&nbsp;более&nbsp;13%{' '}
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

                showRub(evt);
                if (Number(inputValue)) {
                  setSalary(inputValue && inputValue);
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
          type="button"
          className="popup__btn-close"
          onClick={handleClosePopup}
        >Закрыть попап</button>
      </form>
    </div>
  );
};

Popup.propTypes = {
  handleClosePopup: T.func,
};

export default Popup;
