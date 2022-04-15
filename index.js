const menuButton = document.getElementById('nav-button');
const menuList = document.getElementById('drop-down-list');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
})