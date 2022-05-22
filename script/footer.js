const footer = document.createElement('footer');
footer.classList.add('page-footer')
document.querySelector('body').appendChild(footer);

const copyRights = document.createElement('span');
copyRights.innerText = 'Copyrights: Your Bookshop 2022'
document.querySelector('footer').appendChild(copyRights);