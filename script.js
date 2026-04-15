const submitButton = document.querySelector(".button");
const searchInput = document.querySelector(".input");
const checkUser = document.querySelector(`input[value="users"]`);
const cards = document.querySelector(".cards");

const API = "https://api.github.com/search/users?q=";

const setSearchResult = (response) => {
  let result = "";

  response.items.map((item) => {
    result += `
    <article class="card">
        <img class="img" loading="lazy" src="${item.avatar_url}" />
        <a class="profileLink" href="${item.html_url}" target="_blank">
            <h2 class="name">${item.login}</h2>
        </a>
    </article>
    `;
  });
  cards.innerHTML = result;
};

const performSearch = (searchTerm, isUser) => {
  const query = isUser ? "+type:user" : "+type:org";
  fetch(`${API}${searchTerm}${query}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response));
  //response.items
};

submitButton?.addEventListener("click", (e) => {
  e.preventDefault();

  performSearch(searchInput.value, checkUser.checked);
});
