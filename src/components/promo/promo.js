import React from 'react';
import './index.css';

function Promo({data, show}) {

  return (
    <div className="promo" style={{backgroundColor: data.color, display: show === 'true' ? 'block' : 'none'}}>
      <div className="promo__container">
        <div className="promo__text-block">
          <div className="promo__title">{data.title}</div>
          <div className="promo__subtitle">{data.subtitle}</div>
          <ul className="promo__list">
            {data.list.map((item, index) => (
              <li key={index} className={data.dotColor}>{item}</li>
            ))}
          </ul>
          <div className="promo__button">Консультация</div>
        </div>
        <div className="promo__image" style={{backgroundImage: `url(${data.image})`}}>
        </div>

      </div>

    </div>
  );
}

export default Promo;
