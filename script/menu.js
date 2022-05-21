const header = document.createElement('header');
header.classList.add('page-header')
document.querySelector('body').appendChild(header);

const logo = document.createElement('h1');
logo.innerHTML = `<a href='../index.html'>Your Bookshop</a>`;
document.querySelector('header').appendChild(logo);

const nav = document.createElement('nav');
document.querySelector('header').appendChild(nav);

const menuUl = document.createElement('ul');
document.querySelector('nav').appendChild(menuUl);

const menuItems = {
    Home: `<a href='../index.html'>Home</a>`,
    Form: `<a href='../form.html'>Form</a>`,
    Bag: `<a href='../bag.html'>Bag</a>`
}

Object.keys(menuItems).forEach(function(key) {
    const elementLi = document.createElement('li');
    elementLi.innerHTML = menuItems[key];
    document.querySelector('ul').appendChild(elementLi);
});