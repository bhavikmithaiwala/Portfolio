import { useState, useEffect, useRef } from 'react';
import { X, Send, Maximize2, Minimize2 } from 'lucide-react';
import { startChatSession } from '../services/aiService';
import ReactMarkdown from 'react-markdown';

const robotIcon = `${import.meta.env.BASE_URL}AMA.png`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! I'm Bhavik's AI assistant. Want to ask something about his skills or journey?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [chatSession, setChatSession] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setChatSession(startChatSession());
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { text: userMessage, sender: 'user' }]);

    // If the AI service failed to load, show an error message in the chat
    if (!chatSession) {
      setMessages((prev) => [
        ...prev,
        { text: "System Error: AI session failed to start. Please check your .env.local file for the API key.", sender: 'ai' }
      ]);
      return;
    }

    setIsLoading(true);
    try {
      const result = await Promise.race([
        chatSession.sendMessage(userMessage),
        new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 20000)),
      ]);
      const responseText = result.response.text();
      setMessages((prev) => [...prev, { text: responseText, sender: 'ai' }]);
    } catch (error) {
      console.error('Gemini error:', error);
      setMessages((prev) => [
        ...prev,
        { text: "Sorry, I'm having trouble connecting right now.", sender: 'ai' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-wrapper">
      {isOpen && (
        <div className={`chat-window ${isExpanded ? 'expanded' : ''}`}>
          <div className="chat-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img
                src={robotIcon}
                alt="Robot Avatar"
                style={{ width: '28px', height: '28px', borderRadius: '50%', border: '1px solid white' }}
              />
              <h3 style={{ margin: 0, fontSize: '14px', fontWeight: 'bold' }}>Ask about Bhavik</h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button
                onClick={() => setIsExpanded((prev) => !prev)}
                aria-label={isExpanded ? 'Shrink chat' : 'Expand chat'}
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 0 }}
              >
                {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: 0 }}
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`msg ${msg.sender}`}>
                <div className="msg-bubble">
                    {msg.sender === 'ai' ? <ReactMarkdown>{msg.text}</ReactMarkdown> : msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div style={{ fontSize: '12px', color: 'var(--muted)', fontStyle: 'italic' }}>
                Bhavik's AI is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about CI/CD, 2022..."
            />
            <button onClick={handleSend} disabled={isLoading}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="chat-toggle-btn">
          <img src={robotIcon} alt="Chat Robot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </button>
      )}
    </div>
  );
}