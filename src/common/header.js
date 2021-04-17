import $ from 'jquery';

export const header = () => {
    const fragment = $(document.createDocumentFragment());

    const header = $(`
        <header class="container">
            <h1>IT SPA</h1>
            <div class="iconShopping">
				<p>0</p>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                 <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
			</div>
        </header>
    `);
    const iconShopping = header.find('.iconShopping')
    iconShopping.on('click', showCart)

    function showCart() {
        const cart = document.getElementById('card')
        console.log(cart)
        cart.classList.add('active')
    }

    fragment.append(header);
    return fragment;
};
