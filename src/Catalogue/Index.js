import React from 'react';
import projector from '../assets/projector-cropped.png';
import panel from '../assets/panel.png';
import jbl from '../assets/jbl.png';
import sensor from '../assets/sensor.png';
import dj from '../assets/dj.png';
import karaoke from '../assets/karaoke.png';
import { useState } from 'react';
import { ID } from 'appwrite';
import { databases } from '../appwrite';
import cart from '../assets/cart.png'
import logo from '../assets/logo.png';

const Catalog = () => {
  const [contactType, setContactType] = useState(0);
  const [phone, setPhone] = useState(null);

  const handleSubmit = () => {
    console.log(phone);
  };

  const [visible, setVisible] = useState(false);

  return (
    <body>
      <header>
        <div className='row'>
          <img
            className='logo'
            src={logo}
          />

          <nav>
            <a href="/"><p>Главная</p></a>
            <a href="/catalog"><p className='selected'>Каталог</p></a>
            <a href="/contacts"><p>Контакты</p></a>
            <a href="tel:+7(962)824-22-22"><p className='selected'>+7 (962) 824-22-22</p></a>
          </nav>

          <div className='nav-container' onClick={() => { setVisible(!visible) }} >
            <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>
          </div>

          <a href='/cart' className='cart'>
            <img
              src={cart}
            />
          </a>
        </div>
      </header>

      <main>
        {visible && (
          <div className='menu'>
            <h3>Аренда техники в Новосибирске</h3>
            <a href='/'><p>Главная</p></a>
            <a href='/catalog'><p>Каталог</p></a>
            <a href='/contacts'><p>Контакты</p></a>
            <a href='/cart'><p>Корзина</p></a>
            <h3>Аренда техники в Новосибирске</h3>
            <a href='/projectors'><p>Проекторы</p></a>
            <a href='/panels'><p>ЖК Панели</p></a>
            <a href='/speakers'><p>Колонки</p></a>
            <a href='/dj'><p>DJ оборудование</p></a>
            <a href='/karaoke'><p>Караоке</p></a>
            <a href='/sensor'><p>Сенсорные панели</p></a>
          </div>
        )}
        <ul className='catalogue toppad'>
          <a href="/projectors">
            <p>Проекторы</p>
            <img src={projector} />
          </a>
          <a href="/panels">
            <p>ЖК Панели</p>
            <img src={panel} />
          </a>
          <a href="/speakers">
            <p>Колонки</p>
            <img src={jbl} />
          </a>
          <a href="/sensor">
            <p>Сенсорные панели</p>
            <img src={sensor} />
          </a>
          <a href="/dj">
            <p>DJ оборудование</p>
            <img src={dj} />
          </a>
          <a href="/karaoke">
            <p>Караоке</p>
            <img src={karaoke} />
          </a>
        </ul>

        <div className='block5'>
          <div className='left'>
            <h3>Позвоните нам прямо сейчас!</h3>
            <p>Не откладывайте! Каждый звонок — шаг к безупречной организации вашего мероприятия с профессиональной техникой!</p>

            <a href="tel:+7(962)824-22-22"><p>+7 (962) 824-22-22</p></a>
          </div>

          <div className='right'>
            <h3>Или оставьте заявку</h3>
            <ul>
              <li onClick={() => setContactType(0)}>
                <div className={`circle ${contactType === 0 ? 'clicked' : ''}`}></div>
                <p>Позвонить</p>
              </li>
              <li onClick={() => setContactType(1)}>
                <div className={`circle ${contactType === 1 ? 'clicked' : ''}`}></div>
                <p>Whatsapp</p>
              </li>
              <li onClick={() => setContactType(2)}>
                <div className={`circle ${contactType === 2 ? 'clicked' : ''}`}></div>
                <p>Telegram</p>
              </li>
            </ul>
            <div
              contentEditable
              className="input"
              onInput={(e) => {
                const text = e.target.innerText;
                setPhone(text);
                // Устанавливаем курсор в конец текста
                const range = document.createRange();
                const selection = window.getSelection();
                range.selectNodeContents(e.target);
                range.collapse(false);
                selection.removeAllRanges();
                selection.addRange(range);
              }}
              suppressContentEditableWarning={true}
            >
              {phone}
            </div>
            <button onClick={() => {
              const newPost = databases.createDocument(
                '680f76f400310e3b1030',
                '6810c2130026c004a692',
                ID.unique(),
                {
                  phone: phone,
                  contactType: ['Звонок', 'Whatsapp', 'Telegram'][contactType]
                }
              );

              alert('Заявка отправлена!')
              setPhone('')
              return newPost;
            }}>
              <p>Свяжитесь со мной</p>
            </button>
          </div>
        </div>

        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9c541136892eadaf07b95f12c9443bf7eeb91b614a74bd5906840140440d47e3&amp;width=100%25&amp;height=327&amp;lang=ru_RU&amp;scroll=true"></script>
      </main>
    </body>
  );
};

export default Catalog;