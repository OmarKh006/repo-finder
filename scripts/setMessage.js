import { msgElement } from "./elements";

export const setMessage = (msg) => {
  msgElement.textContent = msg ? `*${msg}` : "";
};
