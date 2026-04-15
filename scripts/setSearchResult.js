import * as element from "./elements";

export const setSearchResult = (response) => {
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
  element.cards.innerHTML = result;
};
