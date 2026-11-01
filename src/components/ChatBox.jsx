import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "emoji-picker-react";

function ChatBox() {
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showMentions, setShowMentions] = useState(false);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (message.trim() === "") return;

    const randomUser = user_list[Math.floor(Math.random() * user_list.length)];

    const newMessage = {
      id: Date.now(),
      username: randomUser,
      text: message,
      likes: 0,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: `https://ui-avatars.com/api/?name=${randomUser}&background=random`,
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");
    setShowEmoji(false);
  };

  const handleLike = (id) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === id ? { ...msg, likes: msg.likes + 1 } : msg,
      ),
    );
  };

  const handleEmoji = (emojiObject) => {
    setMessage((prev) => prev + emojiObject.emoji);
  };

  const handleMention = (username) => {
    setMessage((prev) => prev.replace("@", `@${username} `));
    setShowMentions(false);
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col  overflow-hidden">
      <div className="flex flex-1 flex-col justify-end overflow-y-auto p-6">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="mb-5 flex items-start justify-between gap-4"
          >
            <div className="flex min-w-0 gap-3">
              <img
                src={msg.avatar}
                alt={msg.username}
                className="h-10 w-10 shrink-0 rounded-full"
              />

              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h3 className="font-semibold text-gray-800">
                    {msg.username}
                  </h3>

                  <span className="text-xs text-gray-500">{msg.time}</span>
                </div>

                <p className="break-words text-gray-700">{msg.text}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleLike(msg.id)}
              className="flex shrink-0 items-center gap-2 rounded-lg px-3 py-1 hover:bg-gray-100"
            >
              👍 <span>{msg.likes}</span>
            </button>
          </div>
        ))}

        <div ref={chatEndRef} />
      </div>

      <div className="shrink-0 border-t border-gray-200 p-4">
        <div className="relative flex items-center gap-3 rounded-xl border border-gray-300 p-2">
          <input
            type="text"
            value={message}
            onChange={(e) => {
              const value = e.target.value;
              setMessage(value);
              setShowMentions(value.includes("@"));
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
            placeholder="Type your message..."
            className="min-w-0 flex-1 bg-transparent p-2 outline-none"
          />

          {showMentions && (
            <div className="absolute bottom-full left-0 mb-2 rounded-lg border bg-white p-2 shadow-lg">
              {user_list.map((username) => (
                <button
                  key={username}
                  type="button"
                  onClick={() => handleMention(username)}
                  className="block w-full rounded px-4 py-2 text-left hover:bg-gray-100"
                >
                  @{username}
                </button>
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={() => setShowEmoji((prev) => !prev)}
            className="shrink-0 rounded-lg p-2 text-xl hover:bg-gray-100"
            aria-label="Open emoji picker"
          >
            😊
          </button>

          <button
            type="button"
            onClick={handleSend}
            className="shrink-0 rounded-lg bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
          >
            Send
          </button>

          {showEmoji && (
            <div className="absolute bottom-full right-0 z-10 mb-2">
              <EmojiPicker
                onEmojiClick={handleEmoji}
                previewConfig={{ showPreview: false }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
