import React, { useEffect, useState } from "react";
import firebase from "src/app/chat/firebase"; // Path to your firebase.js file

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const db = firebase.database();

  useEffect(() => {
    const messagesRef = db.ref("messages");

    messagesRef.on("value", (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesArray = Object.values(messagesData);
        setMessages(messagesArray);
      }
    });
  }, [db]);

  const sendMessage = () => {
    const messagesRef = db.ref("messages");
    const newMessage = {
      text: message,
      timestamp: firebase.database.ServerValue.TIMESTAMP
    };

    messagesRef.push(newMessage);
    setMessage("");
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg.text}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;