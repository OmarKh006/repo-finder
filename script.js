import * as element from "./scripts/elements";
import { performSearch } from "./scripts/performSearch";

element.submitButton?.addEventListener("click", (e) => {
  e.preventDefault();

  performSearch(element.searchInput.value, element.checkUser.checked);
});
