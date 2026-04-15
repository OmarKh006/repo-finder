import { setSearchResult } from "./setSearchResult";

const API = "https://api.github.com/search/users?q=";

export const performSearch = (searchTerm, isUser) => {
  const query = isUser ? "+type:user" : "+type:org";
  fetch(`${API}${searchTerm}${query}`)
    .then((result) => result.json())
    .then((response) => setSearchResult(response));
  //response.items
};

// export default performSearch
