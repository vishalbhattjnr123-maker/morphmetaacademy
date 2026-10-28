import { useState, useEffect, useRef } from "react";

export default function MorphAIBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I'm Morph AIBot. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  // AUTO SCROLL REF
  const chatEndRef = useRef(null);

  // FUNCTION TO SCROLL TO BOTTOM
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // SCROLL WHEN MESSAGES CHANGE
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // BASIC FRONTEND LOGIC
  const getReply = (msg) => {
    msg = msg.toLowerCase();

    if (["hi", "hello", "hey", "hii", "helo"].some((word) => msg.includes(word))) {
      return "Hello! Welcome to Morph Academy. How can I help you? You can ask me about courses, fees, duration, or location.";
    }

    if (msg.includes("course")) {
      return "We offer Graphics Designing, AI, Animation, VFX ,AR/VR Technologies and Video Editing courses.\n\nContact our counsellor: +91 9501489999";
    }

    if (msg.includes("fees"))
      return "Our fees range from ₹30,000 to ₹80,000 depending on the course.\n\nContact our counsellor: +91 9501489999";

    if (msg.includes("python"))
      return "Python Course: 3–6 months | 100% Practical Training.\n\nContact our counsellor: +91 9501489999";

    if (msg.includes("ai"))
      return "AI Course includes ML, DL, Python, Live Projects & Placement Support.\n\nContact our counsellor: +91 9501489999";

    if (msg.includes("duration"))
      return "Course duration ranges from 3 months to 2 years.\n\nContact our counsellor: +91 9501489999";

    if (msg.includes("location"))
      return "We are located in SCO 64-65, 4th Floor, Sub. City Center, Sector 34A, Chandigarh.\n\nContact our counsellor: +91 9501489999";

    if (msg.includes("contact"))
      return "You can call us at +91 9815 551 552.\nCounsellor: +91 9501489999";

    return "Sorry, I didn’t understand. Try asking about courses, fees, duration, or location.\n\nContact counsellor: +91 9501489999";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setInput("");

    const reply = getReply(userMsg);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
    }, 400);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen(!open)}
        className="
          fixed bottom-40 right-6 z-[999999]
          bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600
          text-white p-4 rounded-full shadow-2xl 
          hover:scale-110 active:scale-95 transition-all
        "
      >
        AI Bot
      </button>

      {/* Chat Window */}
      {open && (
        <div
          className="
            fixed bottom-24 right-6 w-80 z-[999999]
            backdrop-blur-xl bg-white/20
            shadow-2xl border border-white/20
            rounded-2xl overflow-hidden animate-in fade-in zoom-in duration-300
          "
        >
          {/* Header */}
          <div
            className="
              bg-gradient-to-r 
              from-purple-700 via-fuchsia-700 to-blue-700 
              text-white p-3 font-semibold 
              flex items-center justify-between
            "
          >
            <span className="flex items-center gap-2">Morph AI Bot</span>
            <button onClick={() => setOpen(false)} className="text-white text-xl">
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-80 overflow-y-auto space-y-3 custom-scrollbar">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-4 py-2 rounded-xl shadow-sm text-sm 
                  ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600 text-white ml-auto rounded-br-none"
                      : "bg-white/80 text-gray-900 backdrop-blur-md rounded-bl-none"
                  }
                `}
              >
                {msg.text}
              </div>
            ))}

            {/* Invisible element for auto scroll */}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <div className="border-t bg-white/20 flex backdrop-blur-xl">
            <input
              className="flex-1 p-3 bg-transparent outline-none text-sm text-black placeholder:text-gray-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type your message..."
            />
            <button
              onClick={sendMessage}
              className="
                px-5 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-blue-600
                text-white text-lg
                hover:opacity-90 transition
              "
            >
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Scrollbar Styling */}
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.4);
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
}
