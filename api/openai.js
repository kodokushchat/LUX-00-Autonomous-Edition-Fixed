export default async function handler(req, res) {
  const { message } = req.body;

  const reply = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OR_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openai/gpt-4o",
      messages: [
        { role: "system", content: "You are LUX-00, a helpful AI assistant." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await reply.json();
  const text = data.choices?.[0]?.message?.content || "No response";

  res.status(200).json({ reply: text });
}
