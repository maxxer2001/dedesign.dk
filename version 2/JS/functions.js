document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.getElementById('burger-menu');
    const dropdownMenu = document.getElementById('dropdown-menu');

    burgerMenu.addEventListener('click', () => {
        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }

        burgerMenu.style.zIndex = '10';
        dropdownMenu.style.zIndex = '5';
    });
});
