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

          <div className='nav-container'>
            <input class="checkbox" type="checkbox" name="" id="" onClick={() => { setVisible(!visible) }} />
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
          <a href="/projectors"><p>Проекторы</p></a>
          <a href="/panels"><p>ЖК Панели</p></a>
          <a href="/speakers"><p>Колонки</p></a>
          <a href="/dj"><p>DJ оборудование</p></a>
          <a href="/karaoke"><p>Караоке</p></a>
          <a href="/sensor"><p>Сенсорные панели</p></a>
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
              <h3>{more.title}, {more.price}₽</h3>
              <p>{more.description}</p>


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

        <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A9c541136892eadaf07b95f12c9443bf7eeb91b614a74bd5906840140440d47e3&amp;width=100%25&amp;height=327&amp;lang=ru_RU&amp;scroll=true"></script>
      </main>
    </body>
  );
};

export default Projectors;