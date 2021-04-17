import $ from 'jquery';

export const basket = () => {

    const addToCartButtons = document.querySelectorAll('.shop-item-btn')
    console.log(addToCartButtons)
    for (let i=0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked)
    }

   function addToCartClicked (e) {
        let button = e.target
        let shopItem = button.parentElement
        let name = shopItem.getElementsByClassName('item-name')[0].innerText
        console.log(name)
    }

    return $(`
        <div>
            <h3>Twoje zakupy</h3>
        </div>
    `);
};