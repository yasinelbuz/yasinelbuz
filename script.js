const MEDIUM_USERNAME = "handbuz"; // buraya kendi username

const RSS_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;

async function getPosts() {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        renderPosts(data.items);
    } catch (err) {
        console.error("Hata:", err);
    }
}

function renderPosts(posts) {
    const container = document.querySelector(".blog-list");

    container.innerHTML = ""; // statik yazıları temizle

    posts.slice(0, 10).forEach(post => {
        const article = document.createElement("article");
        article.className = "blog-item";

        article.innerHTML = `
            <h2 class="blog-title">
                <a href="${post.link}" target="_blank">
                    ${post.title}
                </a>
            </h2>
        `;

        container.appendChild(article);
    });
}

getPosts();