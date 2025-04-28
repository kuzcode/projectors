import './App.css';
import projector from './assets/projector-cropped.png';
import panel from './assets/panel.png';
import jbl from './assets/jbl.png';
import sensor from './assets/sensor.png';
import dj from './assets/dj.png';
import karaoke from './assets/karaoke.png';

function App() {
  return (
    <body>
      <header>
        <ul>
          <a><p>Проекторы</p></a>
          <a><p>ЖК Панели</p></a>
          <a><p>Колонки</p></a>
          <a><p>DJ оборудование</p></a>
          <a><p>Караоке</p></a>
          <a><p>Сенсорные панели</p></a>
        </ul>
      </header>
      <main>
        <div className='block1'>
          <img src={projector} />
          <h1>Аренда проекторов, колонок и профессионального оборудования в Новосибирске</h1>

          <button>
            <p>Перейти в каталог</p>
          </button>
        </div>

        <div className='block2'>
          <h2>Весь каталог</h2>

          <ul className='catalogue'>
            <li>
              <p>Проекторы</p>
              <img src={projector} />
            </li>
            <li>
              <p>ЖК Панели</p>
              <img src={panel} />
            </li>
            <li>
              <p>Колонки</p>
              <img src={jbl} />
            </li>
            <li>
              <p>Проекторы</p>
              <img src={sensor} />
            </li>
            <li>
              <p>DJ оборудование</p>
              <img src={dj} />
            </li>
            <li>
              <p>Караоке</p>
              <img src={karaoke} />
            </li>
          </ul>
        </div>
      </main>
    </body>
  );
}

export default App;
