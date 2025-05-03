import React, { use } from 'react';
import { useState, useEffect } from 'react';
import { databases } from '../appwrite';
import { Query } from 'appwrite';
import logo from '../assets/logo.png';
import cart from '../assets/cart.png';

const Projectors = () => {
  const [items, setItems] = useState([])
  const [visible, setVisible] = useState(false);
  const [more, setMore] = useState({
    visible: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          '680f76f400310e3b1030',
          '680f79ba000b5bbffbbd',
          [Query.equal("type", 2)]
        );
        setItems(response.documents);
      } catch (error) {
        console.error("Error fetching data from Appwrite: ", error);
      }
    };

    fetchData();
  }, []);


  return (
    <body>
      <header>
        <div className='row'>
          <a href='/'>
            <img
              className='logo'
              src={logo}
            />
          </a>

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

        <ul>
          <a href="/projectors">
            <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 5L2 3" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 4V1" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12 5L14 3" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 14C9.65685 14 11 12.6569 11 11C11 9.34315 9.65685 8 8 8C6.34315 8 5 9.34315 5 11C5 12.6569 6.34315 14 8 14Z" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10.83 10H19C19.5304 10 20.0391 10.2107 20.4142 10.5858C20.7893 10.9609 21 11.4696 21 12V16C21 16.5304 20.7893 17.0391 20.4142 17.4142C20.0391 17.7893 19.5304 18 19 18H3C2.46957 18 1.96086 17.7893 1.58579 17.4142C1.21071 17.0391 1 16.5304 1 16V12C1 11.4696 1.21071 10.9609 1.58579 10.5858C1.96086 10.2107 2.46957 10 3 10H5.17" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 14H17" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Проекторы</p></a>
          <a href="/panels">
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path stroke="#969696" d="M5.59998 17H15.6M7.59998 13V17M13.6 13V17M2.02855 10.7143H19.1714M2.59998 1H18.6C19.1523 1 19.6 1.44772 19.6 2V12C19.6 12.5523 19.1523 13 18.6 13H2.59998C2.04769 13 1.59998 12.5523 1.59998 12V2C1.59998 1.44772 2.04769 1 2.59998 1Z" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>ЖК Панели</p></a>
          <a href="/speakers">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.19995 7V3C3.19995 2.46957 3.41066 1.96086 3.78574 1.58579C4.16081 1.21071 4.66952 1 5.19995 1H17.2C17.7304 1 18.2391 1.21071 18.6142 1.58579C18.9892 1.96086 19.2 2.46957 19.2 3V7" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.19995 6V7" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.2 6V7" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.2 6V7" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.2 7H3.19995C2.09538 7 1.19995 7.89543 1.19995 9V17C1.19995 18.1046 2.09538 19 3.19995 19H19.2C20.3045 19 21.2 18.1046 21.2 17V9C21.2 7.89543 20.3045 7 19.2 7Z" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.19995 15C8.30452 15 9.19995 14.1046 9.19995 13C9.19995 11.8954 8.30452 11 7.19995 11C6.09538 11 5.19995 11.8954 5.19995 13C5.19995 14.1046 6.09538 15 7.19995 15Z" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15.2 15C16.3045 15 17.2 14.1046 17.2 13C17.2 11.8954 16.3045 11 15.2 11C14.0954 11 13.2 11.8954 13.2 13C13.2 14.1046 14.0954 15 15.2 15Z" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Колонки</p></a>
          <a href="/dj">
            <svg width="20" height="20" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.7999 27C21.9796 27 27.7999 21.1797 27.7999 14C27.7999 6.8203 21.9796 1 14.7999 1C7.62022 1 1.79993 6.8203 1.79993 14C1.79993 21.1797 7.62022 27 14.7999 27Z" stroke="#969696" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.7999 18C17.0091 18 18.7999 16.2091 18.7999 14C18.7999 11.7909 17.0091 10 14.7999 10C12.5908 10 10.7999 11.7909 10.7999 14C10.7999 16.2091 12.5908 18 14.7999 18Z" stroke="#969696" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.7999 4C9.29993 4 4.79993 8.5 4.79993 14" stroke="#969696" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.7999 7C10.8999 7 7.79993 10.1 7.79993 14" stroke="#969696" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p>DJ оборудование</p></a>
          <a href="/karaoke">
            <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.4 9V11C15.4 14.866 12.266 18 8.40002 18M8.40002 18C4.53403 18 1.40002 14.866 1.40002 11V9M8.40002 18V21M4.40002 21H12.4M11.4 5H9.40002M11.4 9H9.40002M8.40002 14C6.74312 14 5.40002 12.6569 5.40002 11V4C5.40002 2.34315 6.74312 1 8.40002 1C10.0569 1 11.4 2.34315 11.4 4V11C11.4 12.6569 10.0569 14 8.40002 14Z" stroke="#969696" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Караоке</p></a>
          <a href="/sensor">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.75209 22.7705C7.94834 22.7705 6.48059 21.2502 6.48059 19.3812V11.2782C6.48059 10.7 6.93734 10.2305 7.49909 10.2305C8.06084 10.2305 8.51759 10.7 8.51759 11.2782L8.51984 13.7937C8.66309 13.715 8.82659 13.6692 9.00059 13.6692C9.38309 13.6692 9.71759 13.8875 9.89159 14.2092C10.0618 14.0787 10.2733 14.0015 10.5013 14.0015C10.9483 14.0015 11.3293 14.2992 11.4658 14.7125C11.6218 14.6127 11.8056 14.555 12.0021 14.555C12.5638 14.555 13.0206 15.0252 13.0206 15.6027V19.382C13.0206 21.2502 11.5543 22.7705 9.75209 22.7705ZM7.49909 10.7705C7.23509 10.7705 7.02059 10.9985 7.02059 11.2782V19.382C7.02059 20.9532 8.24609 22.2305 9.75284 22.2305C11.2573 22.2305 12.4813 20.9532 12.4813 19.382V15.6027C12.4813 15.323 12.2668 15.095 12.0028 15.095C11.7388 15.095 11.5243 15.323 11.5243 15.6027V16.4997C11.5243 16.6482 11.4036 16.769 11.2551 16.7697C11.1066 16.7697 10.9858 16.649 10.9851 16.5005L10.9813 15.0492C10.9813 14.7687 10.7668 14.5407 10.5028 14.5407C10.2373 14.5407 10.0213 14.7687 10.0213 15.0485L10.0243 16.499C10.0243 16.6482 9.90434 16.769 9.75509 16.7697C9.60584 16.7697 9.48584 16.649 9.48509 16.5005L9.48134 14.717C9.48134 14.4372 9.26684 14.2092 9.00284 14.2092C8.73884 14.2092 8.52434 14.4365 8.52434 14.7162V16.4997C8.52434 16.649 8.40359 16.7697 8.25434 16.7697C8.10509 16.7697 7.98434 16.649 7.98434 16.4997L7.98059 11.279C7.97759 10.9985 7.76309 10.7705 7.49909 10.7705ZM23.2506 22.0205H16.5006C16.3513 22.0205 16.2306 21.8997 16.2306 21.7505V16.0205H14.2506V15.4805H19.2306V13.7705H14.2506V13.2305H19.2306V1.77047H1.02059V13.2305H5.25059V13.7712H1.02059V15.4805H5.25059V16.0212H0.750591C0.601341 16.0212 0.480591 15.9005 0.480591 15.7512V1.50047C0.480591 1.35122 0.601341 1.23047 0.750591 1.23047H19.5006C19.6498 1.23047 19.7706 1.35122 19.7706 1.50047V9.48047H23.2506C23.3998 9.48047 23.5206 9.60122 23.5206 9.75047V21.7505C23.5206 21.8997 23.3998 22.0205 23.2506 22.0205ZM16.7706 21.4805H22.9798V19.7705H16.7706V21.4805ZM16.7706 19.2305H22.9798V10.0205H19.7706V15.7505C19.7706 15.8997 19.6498 16.0205 19.5006 16.0205H16.7706V19.2305Z" fill="#969696" stroke="#969696" stroke-width="0.5" />
            </svg>
            <p>Сенсорные панели</p></a>
        </ul>
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

        {more.visible && (
          <div className='more'>
            <img
              src={more.imageUrl}
            />
            <button onClick={() => { setMore({ visible: false }) }} className='cross'>
              <h5>×</h5>
            </button>
            <div>
              <h3>{more.title}</h3>
              <p>{more.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}</p>
              <div className='priceTable'>
                <div className='row bottombar'>
                  <div className='column'>
                    <p>1 день</p>
                  </div>
                  <div className='column'>
                    <p>2 сут.</p>
                  </div>
                  <div className='column'>
                    <p>5 сут.</p>
                  </div>
                </div>
                <div className='row'>
                  <div className='column'>
                    <p>{more.price}₽</p>
                  </div>
                  <div className='column'>
                    <p>-20%</p>
                  </div>
                  <div className='column'>
                    <p>-30%</p>
                  </div>
                </div>
              </div>


              <button className='tocart' onClick={() => {
                const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
                savedItems.push(more);
                localStorage.setItem('savedItems', JSON.stringify(savedItems));
                alert('Добавлено в корзину!')
                console.log(savedItems);
              }}>
                <p>В корзину</p>
              </button>
            </div>
          </div>
        )}

        <div className='productslist'>
          {items.map(item =>
            <div className='item'>
              <img
                src={item.imageUrl}
              />
              <p className='title'>{item.title}</p>

              <div>
                <div className="prices">
                  <div className='stroke'>
                    <p>1 день</p>
                    <p>{item.price}₽</p>
                  </div>
                  <div className='stroke'>
                    <p>2 сут.</p>
                    <p>-20%</p>
                  </div>
                  <div className='stroke'>
                    <p>5 сут.</p>
                    <p>-30%</p>
                  </div>
                </div>
              </div>

              <button className='btn1'
                onClick={() => {
                  setMore({
                    visible: true,
                    title: item.title,
                    imageUrl: item.imageUrl,
                    price: item.price,
                    description: item.description
                  })
                }}
              >
                <p>Подробнее</p>
              </button>
              <button className='btn2' onClick={() => {
                const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
                savedItems.push(item);
                localStorage.setItem('savedItems', JSON.stringify(savedItems));
                alert('Добавлено в корзину!')
                console.log(savedItems);
              }}>
                <p>В корзину</p>
              </button>
            </div>
          )}
        </div>

        <div className='footer'>
          <div><h3>proektor-nsk</h3></div>
          <div>
            <h3>Меню</h3>
            <a href='/'><p>Главная</p></a>
            <a href='/catalog'><p>Каталог</p></a>
            <a href='/contacts'><p>Контакты</p></a>
          </div>

          <div>
            <h3>Контакты</h3>
            <a href='tel:+79628242222'><p>+7 (962) 824-22-22</p></a>
            <a href='https://wa.me/089628242222'><p>Whatsapp</p></a>
            <a href='https://t.me/adigamovrus'><p>Telegram</p></a>
          </div>

          <div>
            <h3>Адрес</h3>
            <a href='https://yandex.by/maps/65/novosibirsk/house/ulitsa_lomonosova_55_1/bEsYfwRlSUUHQFtvfXxyeHhlZA==/?ll=82.935001%2C55.039461&z=16.48'><p>Работаем с 10:00 до 19:00<br />
              г. Новосибирск, ул. Ломоносова 55/1 (Метро Маршала Покрышкина)
            </p></a>
          </div>
        </div>

        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9c541136892eadaf07b95f12c9443bf7eeb91b614a74bd5906840140440d47e3&amp;width=100%25&amp;height=327&amp;lang=ru_RU&amp;scroll=true"></script>
      </main>
    </body>
  );
};

export default Projectors;