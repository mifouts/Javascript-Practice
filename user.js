console.log();

const postListEl = document.querySelector('.post-list');

function onSearchChange(event) {
    console.log(event.target.value)
}

async function main() {
    const id = localStorage.getItem("id");
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    const postsData = await posts.json();

    postListEl.innerHTML = postsData.map((post) => postHTML(post)).join('');
}

function showUserPosts(post) {
    localStorage.setItem("post", post);
    window.location.href = `${window.location.origin}/user.html`
}

function postHTML(post) {
    return `<div class="post" onclick="showUserPosts(${post})">
    <div class="post__title">
        ${post.title}
    </div>
    <p class="post__body">
      ${post.body}
    </p>
  </div>`
}

main();