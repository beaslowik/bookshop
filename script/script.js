//BAG 
const main = document.querySelector('main');
const aside = document.createElement('aside');

const bagTitle = document.createElement('h2');
bagTitle.innerText = 'Your bag'

const yourBooks = document.createElement('ul');
yourBooks.setAttribute('id', 'your-books')

const item = document.createElement('li');
item.setAttribute('id', 'empty-bag')
item.textContent = 'Your bag is empty, add something :)';

const totalPrice = document.createElement('p');

const confirmOrder = document.createElement('a');
confirmOrder.setAttribute('href', 'form.html')
confirmOrder.style.display = 'none';

const fragmentAside = new DocumentFragment();

fragmentAside.appendChild(aside).appendChild(bagTitle);
fragmentAside.appendChild(aside).appendChild(yourBooks);
fragmentAside.appendChild(aside).appendChild(yourBooks).appendChild(item);
fragmentAside.appendChild(aside).appendChild(totalPrice);
fragmentAside.appendChild(aside).appendChild(confirmOrder);

document.querySelector('body').insertBefore(fragmentAside, main);

fetch('books.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let myData = data;
        let counter = 0;
        // ADD HTML BOOK LIST
        const frgmentBookList = new DocumentFragment();
        const booksList = document.createElement('section');
        booksList.setAttribute("id", "books-list");
        booksList.classList.add('books-list')

        for (let index = 0; index < myData.length; index++) {
            const article = document.createElement("article");

            const image = document.createElement('img');
            image.src = myData[index].imageLink;

            const wrapper = document.createElement("div");

            const author = document.createElement("h2");
            author.textContent = myData[index].author + ' ';

            const title = document.createElement("h3");
            title.textContent = myData[index].title;

            const price = document.createElement('span');
            price.textContent = 'Price: ' + myData[index].price + ' $';

            const more = document.createElement('button');
            more.textContent = 'Show more';
            more.setAttribute('id', 'show-more');
            more.classList.add('show-more');

            const addToBag = document.createElement('button');
            addToBag.textContent = 'Add to bag'
            addToBag.classList.add('add-to-bag');

            frgmentBookList.appendChild(booksList).appendChild(article);
            frgmentBookList.appendChild(booksList).appendChild(article).appendChild(image);
            frgmentBookList.appendChild(booksList).appendChild(article).appendChild(wrapper);
            frgmentBookList.appendChild(booksList).appendChild(article).appendChild(wrapper).appendChild(author);
            frgmentBookList.appendChild(booksList).appendChild(article).appendChild(wrapper).appendChild(title);
            frgmentBookList.appendChild(booksList).appendChild(article).appendChild(wrapper).appendChild(price);
            frgmentBookList.appendChild(booksList).appendChild(article).appendChild(wrapper).appendChild(more);
            frgmentBookList.appendChild(booksList).appendChild(article).appendChild(wrapper).appendChild(addToBag);

            document.querySelector('main').appendChild(frgmentBookList);

            // SHOW MORE 
            more.addEventListener('click', () => {
                const modalWrapper = document.createElement('div');
                modalWrapper.classList.add('modal-wrapper');

                const modalPopup = document.createElement('div')

                const modalParagraph = document.createElement('p');
                modalParagraph.textContent = myData[index].description;

                const cancel = document.createElement('button')
                cancel.textContent = "CLOSE"

                const fragmentModalWindow = new DocumentFragment();
                fragmentModalWindow.appendChild(modalWrapper).appendChild(modalPopup).appendChild(cancel);
                fragmentModalWindow.appendChild(modalWrapper).appendChild(modalPopup).appendChild(modalParagraph);
                document.querySelector('main').appendChild(fragmentModalWindow);

                cancel.addEventListener('click', () => {
                    modalWrapper.style.display = 'none';
                })
            })
            //ADD TO BAG
            addToBag.addEventListener('click', () => {
                document.getElementById('empty-bag').style.display = 'none';

                const element = document.createElement('li');
                const removeElement = document.createElement('span');
                removeElement.setAttribute('id', 'remove');
                removeElement.textContent = 'X'


                element.textContent = 'Title: ' + myData[index].title + ' Author: ' + myData[index].author + ' Price: ' + myData[index].price + ' ';
                document.getElementById('your-books').appendChild(element).appendChild(removeElement);

                counter = counter + myData[index].price;

                totalPrice.textContent = 'TOTAL PRICE: ' + counter;

                confirmOrder.textContent = 'Confirm order'
                confirmOrder.style.display = 'block';

                removeElement.addEventListener('click', () => {
                    counter = counter - myData[index].price;
                    totalPrice.textContent = 'TOTAL PRICE: ' + counter;
                    document.getElementById('your-books').removeChild(element);
                })

            })


        }

    });