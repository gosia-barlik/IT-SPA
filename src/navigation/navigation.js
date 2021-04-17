import $ from 'jquery';

const button = text => $(`<button class="nav-btn" type="button">${text.toUpperCase()}</button>`);

const createNavigationEvent = view => new CustomEvent('navigation', {
    detail: {
        view: view
    }
});

export const navigation = () => {
    const nav = $('<nav class="container"></nav>');

    const homeButton = button('Home');
    homeButton.on('click', function (event) {
        event.preventDefault();
        document.dispatchEvent(createNavigationEvent('home'));
    });

    const roomsButton = button('Rooms');
    roomsButton.on('click', function (event) {
        event.preventDefault();
        document.dispatchEvent(createNavigationEvent('rooms'));
    });

    const treatmentsButton = button('Treatments');
    treatmentsButton.on('click', function (event) {
        event.preventDefault();
        document.dispatchEvent(createNavigationEvent('treatments'));
    });

    const signUpButton = button('Sign Up');
    signUpButton.on('click', function (event) {
        event.preventDefault();
        document.dispatchEvent(createNavigationEvent('signUp'));
    });


    nav.append(homeButton, roomsButton, treatmentsButton, signUpButton);

    return nav;
};
