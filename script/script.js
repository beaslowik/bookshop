fetch('books.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let myData = data;

        const booksList = document.createElement('section');
        booksList.setAttribute("id", "books-list");
        document.querySelector('main').appendChild(booksList);

        for (let index = 0; index < myData.length; index++) {

            const article = document.createElement("article");
            const wrapper = document.createElement("div");

            const image = document.createElement('img');
            const author = document.createElement("h2");
            const title = document.createElement("h3");
            const price = document.createElement('span');
            const more = document.createElement('button');
            const addToBag = document.createElement('button');


            image.src = myData[index].imageLink;
            author.textContent = myData[index].author + ' ';
            title.textContent = myData[index].title;
            price.textContent = myData[index].price + ' $';
            more.textContent = 'Show more';
            more.classList.add('show-more');
            addToBag.textContent = 'Add to bag'

            document.getElementById("books-list").appendChild(article).appendChild(image);
            document.getElementById('books-list').appendChild(article).appendChild(wrapper).appendChild(author);
            document.getElementById("books-list").appendChild(article).appendChild(wrapper).appendChild(title);
            document.getElementById("books-list").appendChild(article).appendChild(wrapper).appendChild(price);
            document.getElementById("books-list").appendChild(article).appendChild(wrapper).appendChild(more);
            document.getElementById("books-list").appendChild(article).appendChild(wrapper).appendChild(addToBag);
        }

        function showMore() {
            for (let index = 0; index < myData.length; index++) {
                alert(myData[index].description);

            }
        }
        const buttonShowMore = document.getElementsByClassName('show-more');
        buttonShowMore[0].addEventListener('click', showMore);
        console.log(buttonShowMore);
    });