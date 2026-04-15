// import getMessage from "./getMessage";
import { cards } from "./elements";
import { setMessage } from "./setMessage";
import { setSearchResult } from "./setSearchResult";

const API = "https://api.github.com/search/users?q=";

export const performSearch = (searchTerm, isUser) => {
  //   searchTerm = searchTerm.replace(/\s/g, "");
  if (searchTerm.trim()) {
    // getMessage() && setMessage("");
    setMessage("");
    const query = isUser ? "+type:user" : "+type:org";
    fetch(`${API}${searchTerm}${query}`)
      .then((result) => result.json())
      .then((response) => setSearchResult(response));
    //response.items
  } else {
    cards.innerHTML = "";
    setMessage("Enter something to search for !");
    return;
  }
};

// export default performSearch
