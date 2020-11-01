import React, { useState } from 'react';
import T from 'prop-types';
import './popup.scss';

const Popup = ({ handleClosePopup }) => {
  // const [isValid, setIsValid] = useState(true);
  const [salary, setSalary] = useState(null);
  console.log(salary);

  return (
    <form className="popup">
      <fieldset className="popup__field">
        <legend className="popup__legend">Налоговый вычет</legend>
        <p className="popup__description">Используйте налоговый вычет чтобы погасить ипотеку досрочно.{' '}
        Размер налогового вычета составляет не более 13% от своего официального годового дохода.</p>

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
            onChange={(evt) => {
              setSalary(evt.target.value);
            }}
          />

          <p className="popup__data-none">Поле обязательно для заполнения</p>
        </div>
      </fieldset>

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
