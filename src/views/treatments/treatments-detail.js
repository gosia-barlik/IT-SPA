import $ from 'jquery';
import axios from 'axios';

export const treatmentsDetail = treatmentId => {
    const fragment = $(document.createDocumentFragment());
    const section = $('<section>Loading...</section>');

    axios.get(`http://localhost:3000/treatments/${treatmentId}`)
        .then(response => response.data)
        .then(treatment => {
            const {name, area, time, price} = treatment;

            const article = $(`
                <article>
                    <h2>${name}</h2>
                    <p><strong>Area</strong> ${area} | <strong>Time</strong> ${time} min</p>
                    <p><strong>Price</strong> ${price.toFixed(2)} zł</p>
                </article>
            `);

            section.empty().append(article);
        });

    fragment.append(section);

    return fragment;
};
