// Basic memory system (in-browser)
let history = [];

function remember(message) {
  history.push(message);
  if (history.length > 20) history.shift(); // Keep it short
}
