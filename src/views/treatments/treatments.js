import $ from 'jquery';
import axios from 'axios';

export const treatments = () => {
    const fragment = $(document.createDocumentFragment());
    const h2 = $('<h2>Treatments</h2>');
    const section = $('<section>Loading...</section>');

    fragment.append(h2, section);

    // POBIERAMY POKOJE Z JSON-SERVER
    axios.get('http://localhost:3000/treatments')
        .then(response => response.data)
        .then(treatments => {
            const articles = treatments.map(treatment => {
                const {id, name, area, time, price} = treatment;

                const article = $(`
                    <article style="background: #F3F3F7; cursor: pointer">
                        <h4>${name}</h4>
                        <p><strong>Area</strong> ${area} | <strong>Time</strong> ${time} min</p>
                        <p><strong>Price</strong> ${price.toFixed(2)} zł</p>
                    </article>
                `);

                article.on('click', event => {
                    event.preventDefault();

                    const navigationEvent = new CustomEvent('navigation', {
                        detail: {
                            view: 'treatments-detail',
                            treatmentId: id
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
