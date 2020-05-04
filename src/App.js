import React, {useState} from 'react';
import './App.css';
import Promo from "./components/promo/promo";
import Rectangle45 from './components/images/Rectangle-45.png';
import Rectangle46 from './components/images/Rectangle-46.png';
import Rectangle47 from './components/images/Rectangle-47.png';
import Rectangle48 from './components/images/Rectangle-48.png';
import Rectangle49 from './components/images/Rectangle-49.png';
import Rectangle50 from './components/images/Rectangle-50.png';

const data = [
  {
    color: '#FFF8CC',
    dotColor: 'yellow',
    title: 'Валютные операции по выгодному курсу',
    buttonTitle: 'Валютные операции по выгодному курсу',
    subtitle: 'На московской бирже без посредников',
    list: ['Комиссия от 1 копейки*', 'Для заключения сделки достаточно иметь на брокерском счету лишь часть суммы', 'Быстрый вывод валюты на ваш расчётный счёт'],
    image: Rectangle47,
  },
  {
    color: '#FFE9E9',
    dotColor: 'pink',
    title: 'Вложение свободных средств для юридических лиц',
    buttonTitle: 'Однодневные инструменты МосБиржи',
    subtitle: 'Зарабатывайте с помощью однодневных инструментов  московской биржи:',
    list: ['Срок от 1 дня', 'Конкурентные ставки', 'Надёжный контрагент  НКО “Национальный Клиринговый Центр” АО'],
    image: Rectangle45,
  },
  {
    color: '#D9F4F2',
    dotColor: 'blue',
    title: 'Инвестиции  в еврооблигации и ETF',
    buttonTitle: 'Инвестиции  в еврооблигации и ETF',
    subtitle: 'Вкладывайте валюту в инструменты с фиксированной доходностью',
    list: ['Еврооблигации — ценные бумаги, номинированные в валюте с фиксированной доходностью', 'ETF2 — группа инструменов для реализации инвестиционной стратегии, не требующей активного участия'],
    image: Rectangle50,
  },
  {
    color: '#E1EAF7',
    dotColor: 'purple',
    title: 'Брокерское обслуживание',
    buttonTitle: 'Брокерское обслуживание',
    subtitle: 'Получите доступ к российским и международным торговым площадкам:',
    list: ['А мы поможем составить портфель из ценных бумаг, валюты, фьючерсов и опционов', 'Предоставим программное обеспечение, аналитику, обзоры рынков'],
    image: Rectangle49,
  },
  {
    color: '#F3EFF7',
    dotColor: 'purple-light',
    title: 'Привлечение финансирования',
    buttonTitle: 'Привлечение финансирования',
    subtitle: 'Брокер предоставляет вам возможность вывода денежных средств под обеспечение в виде валюты или ценных бумаг',
    list: ['Для решения кассовых разрывов, развития бизнеса и других целей', 'Низкие процентные ставки', 'Гибкие сроки возврата'],
    image: Rectangle48,
  },
  {
    color: '#EEF8E4',
    dotColor: 'green',
    title: 'Снижение валютных и рыночных рисков',
    buttonTitle: 'Снижение валютных и рыночных рисков',
    subtitle: '',
    list: ['Фиксируйте курс сегодня для будущих расчётов', 'Проконсультируем, дадим экспертную оценку, порекомендуем оптимальное решение для защиты от валютных колебаний'],
    image: Rectangle46,
  }


];

function App() {
  const [current, setCurrent] = useState(0);

  const onChange = (index) => {
    setCurrent(index);
  };

  return (
    <div className="App">
      {data.map((item, index) => (
        <Promo key={index} data={item} show={current === index ? 'true' : 'false'}/>
      ))}
      <div className="buttons">
        {data.map((item, index) => (
          <div className="button" key={index} onClick={() => onChange(index)} style={{backgroundColor: current === index ? item.color : ''}}>
            {item.buttonTitle}
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
