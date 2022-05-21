fetch('books.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        let myData = data;

        for (let index = 0; index < myData.length; index++) {

            const node = document.createElement("article");
            const wrapper = document.createElement("div");
            const author = document.createElement("h2");
            const title = document.createElement("h3");
            const description = document.createElement("p");


            const nodeAuthor = document.createTextNode(myData[index].author + ' ');
            const nodeTitle = document.createTextNode(myData[index].title);
            const nodeDescription = document.createTextNode(myData[index].description);


            // + ' ' + '\"' + myData[index].title + '\" ' + myData[index].price + ' $ ' + myData[index].description);
            const imgNode = document.createElement('img');


            imgNode.src = myData[index].imageLink;

            // node.appendChild(textnode);
            document.getElementById("myList").appendChild(node).appendChild(imgNode);
            document.getElementById("myList").appendChild(node).appendChild(wrapper).appendChild(author).appendChild(nodeAuthor);
            document.getElementById("myList").appendChild(node).appendChild(wrapper).appendChild(title).appendChild(nodeTitle);
            document.getElementById("myList").appendChild(node).appendChild(wrapper).appendChild(description).appendChild(nodeDescription);
            // document.getElementById("myList").appendChild(node).appendChild(giveSpace);
            // document.getElementById("myList").appendChild(imgNode);
            // document.getElementById("myList").appendChild(textnode);


        }

    });