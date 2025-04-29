import './App.css';
import { useEffect, useState } from 'react';
import { databases } from './appwrite'; // Импортируйте ваши настройки Appwrite
import projector from './assets/projector-cropped.png';
import panel from './assets/panel.png';
import jbl from './assets/jbl.png';
import sensor from './assets/sensor.png';
import dj from './assets/dj.png';
import karaoke from './assets/karaoke.png';
import cart from './assets/cart.png';
import { Router, useNavigate } from 'react-router-dom';
import { ID, Query } from 'appwrite';

function App() {
  const [items, setItems] = useState([]); // Здесь будет храниться полученный список
  const [contactType, setContactType] = useState(0);
  const [phone, setPhone] = useState('');
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');

  const handleSubmit = () => {
    if (phone.length > 0) {
      // выполнять подачу заявки или другую логику
      console.log(`Контактный тип: ${contactType}, Телефон: ${phone}`);
    } else {
      alert('Пожалуйста, введите номер телефона.');
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await databases.listDocuments(
          '680f76f400310e3b1030',
          '680f79ba000b5bbffbbd',
          [Query.limit(5)]
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
          <p>аренда техники</p>
          <p>в Новосибирске</p>

          <div
            contentEditable
            className="search"
            onInput={(e) => {
              const text = e.target.innerText;
              setSearch(text);
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
            {search}
          </div>

          <nav>
            <a href="/"><p className='selected'>Главная</p></a>
            <a href="/catalog"><p>Каталог</p></a>
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
          <a href="./projectors"><p>Проекторы</p></a>
          <a href="./panels"><p>ЖК Панели</p></a>
          <a href="./speakers"><p>Колонки</p></a>
          <a href="./dj"><p>DJ оборудование</p></a>
          <a href="./karaoke"><p>Караоке</p></a>
          <a href="./sensor"><p>Сенсорные панели</p></a>
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

        <div className='block1'>
          <img src={projector} />
          <h1>Аренда проекторов, колонок и профессионального оборудования в Новосибирске</h1>

          <a href="/catalog">
            <div>
              <p>Перейти в каталог</p>
            </div>
          </a>
        </div>

        <div className='block2'>
          <h2>Весь каталог</h2>

          <ul className='catalogue'>
            <a href='/projectors'>
              <p>Проекторы</p>
              <img src={projector} />
            </a>
            <a href='/panels'>
              <p>ЖК Панели</p>
              <img src={panel} />
            </a>
            <a href='/speakers'>
              <p>Колонки</p>
              <img src={jbl} />
            </a>
            <a href='/sensor'>
              <p>Сенсорные панели</p>
              <img src={sensor} />
            </a>
            <a href='/dj'>
              <p>DJ оборудование</p>
              <img src={dj} />
            </a>
            <a href='/karaoke'>
              <p>Караоке</p>
              <img src={karaoke} />
            </a>
          </ul>
        </div>

        <h3>Популярные товары</h3>
        <h6>Выберите технику для вашего мероприятия</h6>
        <div className='products'>
          {items.map(item =>
            <div className='item' key={item.id}>
              <img src={item.imageUrl} alt={item.title} />
              <p>{item.title}</p>
              <div>
                <button className='btn1'>
                  <p>Подробнее</p>
                </button>
                <button className='btn2' onClick={() => {
                  // Get existing items from local storage
                  const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
                  // Add the new item to the list
                  savedItems.push(item);
                  // Save the updated list back to local storage
                  localStorage.setItem('savedItems', JSON.stringify(savedItems));
                  alert('Добавлено в корзину!')
                  // Log the saved items to the console
                  console.log(savedItems);
                }}>
                  <p>В корзину</p>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className='block3'>
          <div className='steps'>
            <li>
              <h4>01</h4>
              <p>Выберите дату и оборудование – онлайн или по телефону</p>
            </li>
            <li>
              <h4>02</h4>
              <p>Подтвердите заказ – менеджер согласует детали</p>
            </li>
            <li>
              <h4>03</h4>
              <p>Получите технику – доставим, настроим, заберем!</p>
            </li>
          </div>

          <h3>Как заказать?</h3>
          <h6>3 шага – и техника у вас!</h6>

          <h5>Звоните</h5>
          <a href='tel:+7(962)824-22-22'><p>+7 (962) 824-22-22</p></a>

          <h6>Или пишите – ответим за 5 минут! </h6>
        </div>

        <div className='block4'>
          <li>
            <img
              src='https://ru-static.z-dn.net/files/d2c/cd32ddddf5f88c6cded3642b05af38d2.jpg'
            />
            <h4>Игорсь С.</h4>
            <h6>Отзыв от частного клиента</h6>
            <p>
              Нужны были колонки для домашней вечеринки. Взял здесь пару колонок на выходные – звук мощный, все гости довольны. Удобно, что можно взять в аренду на день-два, не покупая дорогое оборудование. Быстро оформили, никаких заморочек. Рекомендую!
            </p>
          </li>
          <li>
            <img
              src='https://ru-static.z-dn.net/files/d2c/cd32ddddf5f88c6cded3642b05af38d2.jpg'
            />
            <h4>Игорсь С.</h4>
            <h6>Отзыв от частного клиента</h6>
            <p>
              Нужны были колонки для домашней вечеринки. Взял здесь пару колонок на выходные – звук мощный, все гости довольны. Удобно, что можно взять в аренду на день-два, не покупая дорогое оборудование. Быстро оформили, никаких заморочек. Рекомендую!
            </p>
          </li>
          <li className='advice'>
            <h4>Оставьте свой отзыв о работе с нами!</h4>
            <p>
              Мы дорожим каждым нашим клиентом и всегда учитываем его мнение для лучший эффективности наших продуктов!
            </p>

            <button>
              <p>Оставить отзыв</p>
            </button>
          </li>
        </div>

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
}

export default App;
