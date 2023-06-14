import { useState } from "react";
import './home.css';

const Home1 = () => {
    const [messages, setMessages] = useState([]);
    const [message1, setMessage1] = useState('');
    const [message2, setMessage2] = useState('');

    const sendMessage = (e, user) => {
        e.preventDefault();
        const newMessage = { text: user === 'User1' ? message1 : message2, user };
        setMessages([...messages, newMessage]);
        if (user === 'User1') {
            setMessage1('');
        } else {
            setMessage2('');
        }
    };

    return (
        <div className="name">
            <h1>Chatting</h1>
            <div className="conatin">
                <div className="message-container">
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.user === 'User1' ? 'user1' : 'user2'}`}
                        >
                            <span className="message-user">{message.user}</span>
                            {message.text}
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={(e) => sendMessage(e, 'User1')}>
                <input type="text" value={message1} onChange={(e) => setMessage1(e.target.value)} />
                <button type="submit">Send as User1</button>
            </form>
            <form onSubmit={(e) => sendMessage(e, 'User2')}>
                <input type="text" value={message2} onChange={(e) => setMessage2(e.target.value)} />
                <button type="submit">Send as User2</button>
            </form>
        </div>
    );
};

export default Home1;
