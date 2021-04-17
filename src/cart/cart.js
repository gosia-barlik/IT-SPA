import $ from 'jquery';

export const cart = () => {
    const fragment = $(document.createDocumentFragment());
    const section = $('<section id ="card" class="cart container"></section>');
    const cartheader = $('<div class="cartHeader"><h2> Your items </h2><div class ="iconClose"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></div></div>')
    section.append(cartheader)

    const iconClose = cartheader.find('.iconClose')
    iconClose.on('click', closeCart)

    function closeCart() {
        const cart = document.getElementById('card')
        console.log(cart)
        cart.classList.remove('active')
    }

    // Retrieve the object from storage
    let retrievedObject = localStorage.getItem('contents');
    retrievedObject = JSON.parse(retrievedObject)

    if (retrievedObject) {
        retrievedObject.forEach(item => {
            const { name, beds, guests, price } = item;

            const article = $(`
        <article>
            <h2>${name}</h2>
            <p><strong>Beds</strong> ${beds} | <strong>Guests</strong> ${guests}</p>
            <p><strong>Price</strong> ${price.toFixed(2)} zł</p>
        </article>
    `);

            section.append(article);
        })
    }

    fragment.append(section);

    return fragment;
};

