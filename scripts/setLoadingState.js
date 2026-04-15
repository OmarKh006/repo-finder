import { loaderElement } from "./elements";
import { setSearchResult } from "./setSearchResult";

export default function setLoading(loadingState) {
  loaderElement.classList.toggle("hidden", !loadingState);
  loadingState && setSearchResult(null);
}
