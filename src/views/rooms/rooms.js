import $ from 'jquery';
import axios from 'axios';

let contents = []

export const rooms = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Rooms</h2>');
    const section = $('<section>Loading...</section>');


    fragment.append(h2, section);


    // POBIERAMY POKOJE Z JSON-SERVER
    axios.get('http://localhost:3000/rooms')
        .then(response => response.data)
        .then(rooms => {
            const articles = rooms.map(room => {
                const { id, name, beds, guests, price } = room;

                const article = $(`
                    <article style="background: #F3F3F7; cursor: pointer">
                        <div class="item">
                            <h4 class ="item-name" >${name}</h4>
                            <p><strong>Beds</strong> ${beds} | <strong>Guests</strong> ${guests}</p>
                            <p><strong>Price</strong> ${price.toFixed(2)} zł</p>
                        </div>
                        <button class="shop-item-btn" data-id=${id}'> ADD TO CART </button>
                    </article>
                `);

                const button = article.find('button')
                button.on('click', addItem)

                //LocalStorage test
                function addItem (e) {
                    e.preventDefault();
                    let id = parseInt(e.target.getAttribute('data-id'));
                    let item = { id, name, beds, guests, price };
                    contents.push(item)
                    // Put the object into storage
                    localStorage.setItem('contents', JSON.stringify(contents));
                }

                const item = article.find('.item')
                item.on('click', event => {
                    event.preventDefault();
                    const navigationEvent = new CustomEvent('navigation', {
                        detail: {
                            view: 'rooms-detail',
                            roomId: id
                        }
                    });

                    document.dispatchEvent(navigationEvent);
                });

                return article;
            });

            section.empty().append(articles);
        });

    return fragment;
};
