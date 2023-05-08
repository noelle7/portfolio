
// 1. Find all the nav containers.

const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

// console.log(closeMenu);

// 2. Listen to the event when user click on .open-menu and .close-menu

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// 3. Create function to display nav when click show

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
// console.log(show);
 
// 4. Create function to close the displayed nav when click close.

function close() {
    mainMenu.style.top = '-100%';
}