import { cards } from "./elements";

export const setSearchResult = (response) => {
  let result = "";

  if (response?.items?.length === 0) {
    result = "<p>Not found!</p>";
  } else if (response === null) {
    result = "";
  } else if (response?.items?.length) {
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
  }
  cards.innerHTML = result;
};
