const footerFragment = new DocumentFragment();

const footer = document.createElement('footer');
footer.classList.add('page-footer')

const copyRights = document.createElement('span');
copyRights.innerText = 'Copyrights: Your Bookshop 2022'

footerFragment.appendChild(footer).appendChild(copyRights);
document.querySelector('body').appendChild(footerFragment);