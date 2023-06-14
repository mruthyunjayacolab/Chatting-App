import { useState, useEffect } from "react";
import './home.css';

const Home = () => {
    const [data1, setdata1] = useState([]);
    const [data2, setdata2] = useState([]);
    const [message1, setmessage1] = useState('');
    const [message2, setmessage2] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res1 = await fetch('http://localhost:4409/user1');
            const res2 = await fetch('http://localhost:4409/user2');
            const data1 = await res1.json();
            const data2 = await res2.json();
            setdata1(data1);
            setdata2(data2);
        };
        fetchData();
    }, []);

    const submitMessage1 = (e) => {
        e.preventDefault();
        const newData1 = { message1 };

        fetch('http://localhost:4409/user1', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData1)
        });

        setmessage1('');
        alert("Submitted");
    };

    const submitMessage2 = (e) => {
        e.preventDefault();
        const newData2 = { message2 };

        fetch('http://localhost:4409/user2', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newData2)
        });

        setmessage2('');
        alert("Submitted");
    };

    return (
        <div className="name">
            <h1>Chatting</h1>
            <div className="conatin">
                <div className="row flex-container">
                    <div className="send1" style={{ backgroundColor: 'green' }}>
                        {data1.map((x, index) => (
                            <div key={index}>
                                <h1 className='s2'>{x.message1}</h1>
                            </div>
                        ))}
                    </div>
                    <div className="send2" style={{ backgroundColor: 'yellow' }}>
                        {data2.map((b, index) => (
                            <div key={index}>
                                <h1>{b.message2}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <form onSubmit={submitMessage1}>
                <input type="text" value={message1} onChange={(e) => setmessage1(e.target.value)} />
                <button type="submit">Send1</button>
            </form>
            <form onSubmit={submitMessage2}>
                <input type="text" value={message2} onChange={(e) => setmessage2(e.target.value)} />
                <button type="submit">Send2</button>
            </form>
        </div>
    );
};

export default Home;
