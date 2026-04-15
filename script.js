const submitButton = document.querySelector("button");
const API = "https://api.github.com/search/users?q=";

const setSearchResult = (response) => {
  console.log(response.items[0].login);
};

const performSearch = (searchTerm, isUser) => {
  const query = isUser ? "+type:user" : "+type:org";
  fetch(`${API}${searchTerm}${query}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response));
};

submitButton?.addEventListener("click", (e) => {
  e.preventDefault();
  performSearch("Omarkh006", true);
});
