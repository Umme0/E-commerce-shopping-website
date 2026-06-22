let posts = JSON.parse(localStorage.getItem("posts")) || [];

function savePosts() {
    localStorage.setItem("posts", JSON.stringify(posts));
}

function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields.");
        return;
    }

    posts.push({
        title: title,
        content: content,
        comments: []
    });

    savePosts();
    displayPosts();

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}

function addComment(index) {
    const input = document.getElementById("comment" + index);

    if (input.value.trim() !== "") {
        posts[index].comments.push(input.value);
        savePosts();
        displayPosts();
    }
}

function deletePost(index) {
    posts.splice(index, 1);
    savePosts();
    displayPosts();
}

function displayPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    posts.forEach((post, index) => {
        let commentsHTML = "";

        post.comments.forEach(comment => {
            commentsHTML += `
                <div class="comment">
                    ${comment}
                </div>
            `;
        });

        postsDiv.innerHTML += `
            <div class="post">
                <h2>${post.title}</h2>
                <p>${post.content}</p>

                <button class="delete"
                        onclick="deletePost(${index})">
                        Delete
                </button>

                <div class="comment-box">
                    <h4>Comments</h4>

                    ${commentsHTML}

                    <input
                        type="text"
                        id="comment${index}"
                        placeholder="Write a comment">

                    <button onclick="addComment(${index})">
                        Add Comment
                    </button>
                </div>
            </div>
        `;
    });
}

displayPosts();
