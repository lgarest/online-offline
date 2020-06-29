const qs = document.querySelector.bind(document);

let element = null;
let previous = '';

const updateBasedOnNetworkStatus = (statusString) => {
  previous && element.classList.remove(previous);
  element.classList.add(statusString);
  element.innerText = statusString;
  previous = statusString;
};

const hasNetwork = (online) => {
  // Update the DOM to reflect the current status
  updateBasedOnNetworkStatus(`${online ? "online" : "offline"}`);
};

window.addEventListener("load", () => {
  element = qs(".status");
  hasNetwork(navigator.onLine);

  // Set hasNetwork to online when they change to online.
  window.addEventListener("online", () => hasNetwork(true));

  // Set hasNetwork to offline when they change to offline.
  window.addEventListener("offline", () => hasNetwork(false));
});
