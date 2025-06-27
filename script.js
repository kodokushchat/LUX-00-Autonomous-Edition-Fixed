async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  const msgDiv = document.createElement("div");
  msgDiv.textContent = "You: " + message;
  document.getElementById("messages").appendChild(msgDiv);

  input.value = "";

  const res = await fetch("/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });

  const data = await res.json();

  const replyDiv = document.createElement("div");
  replyDiv.textContent = "LUX-00: " + data.reply;
  document.getElementById("messages").appendChild(replyDiv);
}
