const header = document.createElement('header');
header.classList.add('page-header')

const logo = document.createElement('h1');
logo.innerHTML = `<a href='../index.html'>Your Bookshop</a>`;

const nav = document.createElement('nav');
const menuUl = document.createElement('ul');
const menuFragment = new DocumentFragment;

menuFragment.appendChild(header).appendChild(logo);
menuFragment.querySelector('header').appendChild(nav).appendChild(menuUl);

const menuItems = {
    Home: `<a href='../index.html'>Home</a>`,
    Form: `<a href='../form.html'>Form</a>`,
}

Object.keys(menuItems).forEach(function(key) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = menuItems[key];
    menuFragment.querySelector('ul').appendChild(elementLi);
});

document.querySelector('body').appendChild(menuFragment);