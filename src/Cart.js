import React, { use } from 'react';
import { useState, useEffect } from 'react';
import trash from './assets/delete.png';
import { databases } from './appwrite';
import { ID } from 'appwrite';
import logo from './assets/logo.png';

const Cart = () => {
    const [phone, setPhone] = useState('')
    const [visible, setVisible] = useState(false);
    const [delivery, setDelivery] = useState(false);
    const [pricetoadd, setPricetoadd] = useState(0);
    const [savedItems, setSavedItems] = useState(JSON.parse(localStorage.getItem('savedItems')) || []);


    function calculateTotalPrice(savedItems) {
        return savedItems.reduce((total, item) => {
            if (item.price < 0) {
                console.warn(`Warning: Negative price ${item.price} encountered. Ignoring.`);
                return total; // Skip negative prices
            }
            return total + item.price; // Add price to total
        }, 0);
    }

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
                        <a href="/catalog"><p>Каталог</p></a>
                        <a href="/"><p>Контакты</p></a>
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
                </div>

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
                {visible && (
                    <div className='menu'>
                        <h3>Аренда техники в Новосибирске</h3>
                        <a href='/'><p>Главная</p></a>
                        <a href='/catalog'><p>Каталог</p></a>
                        <a href='/contacts'><p>Контакты</p></a>
                        <h3>Аренда техники в Новосибирске</h3>
                        <a href='/projectors'><p>Проекторы</p></a>
                        <a href='/panels'><p>ЖК Панели</p></a>
                        <a href='/speakers'><p>Колонки</p></a>
                        <a href='/dj'><p>DJ оборудование</p></a>
                        <a href='/karaoke'><p>Караоке</p></a>
                        <a href='/sensor'><p>Сенсорные панели</p></a>
                    </div>
                )}

                <h2 className='cartTitle'>Корзина</h2>

                {savedItems.length > 0 ? (
                    <div className='cartItems'>
                        <div className='column'>
                            {savedItems.map(saved =>
                                <div className='saved'>
                                    <img
                                        src={saved.imageUrl}
                                        className='photo'
                                    />

                                    <h3>{saved.title}</h3>
                                    <div className='row'>
                                        <p>{saved.price}₽</p>

                                        <img
                                            className='trash'
                                            src={trash}
                                            onClick={() => {
                                                const toSave = JSON.parse(localStorage.getItem('savedItems')) || [];
                                                // Add the new item to the list
                                                toSave.splice(savedItems.indexOf(saved), 1);
                                                // Save the updated list back to local storage
                                                localStorage.setItem('savedItems', JSON.stringify(toSave));
                                                setSavedItems(toSave)
                                            }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className='bill'>
                            <h3>Итого: {calculateTotalPrice(savedItems) + pricetoadd}₽</h3>

                            <div className='row delivery'>
                                <input
                                    type='checkbox'
                                    onClick={() => {
                                        setDelivery(!delivery);
                                        if (delivery === true) {
                                            setPricetoadd(0);
                                        }
                                        else {
                                            setPricetoadd(1000);
                                        }
                                    }}
                                />
                                <p>Мне нужна доставка</p>
                            </div>

                            <p className='sub'>Номер телефона</p>
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

                            <button
                                onClick={() => {
                                    const newPost = databases.createDocument(
                                        '680f76f400310e3b1030',
                                        '6810c2130026c004a692',
                                        ID.unique(),
                                        {
                                            phone: phone,
                                            contactType: 'Не указан',
                                            delivery: delivery,
                                            products: savedItems.map(item => item.title)
                                        }
                                    );

                                    alert('Заявка отправлена!')
                                    setPhone('')
                                    localStorage.setItem('savedItems', JSON.stringify([]));
                                    setSavedItems([])
                                    return newPost;
                                }}
                                className='checkout'>
                                <p>Заказать</p>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h2 className='cartTitle'>В корзине пусто :/</h2>
                    </div>
                )}
            </main>
        </body>
    );
};

export default Cart;