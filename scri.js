async function  getAllPosts(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // fetch the posts node from the DOM
    const postsContainer = document.querySelector(".posts");

    // traverse over the data
    for(let i = 0; i < data.length; i++){
        // create the required tags for each card data
        const card = document.createElement("div"); // <div></div>
        const title = document.createElement("p"); // <p></p>
        const body = document.createElement("p"); // <p></p>
        const by = document.createElement("p"); // <p></p>
        const cancel = document.createElement("p"); // <p></p>

        // add event(click) listener on the cancel button
        cancel.addEventListener('click', () => {
            postsContainer.removeChild(card);
        })

        // add the content for each of the above created tags
        title.innerHTML = data[i].title;  // <p>Hello</p>
        body.innerHTML = data[i].body; // <p>xctvybdcfvgbh</p>
        by.innerHTML = `By: ${data[i].id}`; // <p>By 1</p>
        cancel.innerHTML = "X"; // <p>X</p>

        // add class attribute for the above created tags
        card.classList.add("post"); // <div class="post"></div>
        title.classList.add("title");
        body.classList.add("body");
        by.classList.add("by");
        cancel.classList.add("deleteButton");

        // creating parent-child relationship
        card.appendChild(title);
        // <div class="card">
        //     <p class="title">Hello</p>
        // </div>

        card.appendChild(body);
        // <div class="card">
        //     <p class="title">Hello</p>
        //     <p class="body">zdcftgdcfvgb</p>
        // </div>

        card.appendChild(by);
        // <div class="card">
        //     <p class="title">Hello</p>
        //     <p class="body">zdcftgdcfvgb</p>
        //     <p class="by">By: 1</p>
        // </div>

        card.appendChild(cancel);
        // <div class="card">
        //     <p class="title">Hello</p>
        //     <p class="body">zdcftgdcfvgb</p>
        //     <p class="by">By: 1</p>
        //     <p class="cancel">X</p>
        // </div>

        postsContainer.appendChild(card);
        // <div class="posts">
        //     <div class="card">
        //         <p class="title">Hello</p>
        //         <p class="body">zdcftgdcfvgb</p>
        //         <p class="by">By: 1</p>
        //         <p class="cancel">X</p>
        //     </div>
        // </div>
    }
}

getAllPosts();