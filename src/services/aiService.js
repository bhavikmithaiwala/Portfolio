const WORKER_URL = "https://bhavik-chat.bhavik-mithaiwala90.workers.dev";

export const startChatSession = () => {
  const contents = [];

  return {
    async sendMessage(text) {
      contents.push({ role: "user", parts: [{ text }] });

      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents }),
      });

      if (!res.ok) {
        contents.pop();
        throw new Error(`Chat API error ${res.status}`);
      }

      const data = await res.json();
      contents.push({ role: "model", parts: [{ text: data.text }] });
      return { response: { text: () => data.text } };
    },
  };
};