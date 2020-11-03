import React, { useState } from 'react';
import Popup from '../Popup';
import './app.scss';

const App = () => {
  const [isPopup, setIsPopup] = useState(false);

  return (
    <section className="app">
      <button
        type="button"
        className="app__btn-ded"
        onClick={() => setIsPopup(true)}
        disabled={isPopup}
      >Налоговый вычет</button>

      {isPopup && <Popup handleClosePopup={() => setIsPopup(false)} />}
    </section>
  );
};

export default App;
