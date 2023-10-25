"use client";
import React, { useState, useEffect } from 'react';
import { database } from './firebase';


const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const chatRef = database.ref('chat');

    chatRef.on('value', snapshot => {
      if (snapshot.val()) {
        setMessages(Object.values(snapshot.val()));
      }
    });

    return () => {
      chatRef.off();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      const chatRef = database.ref('chat');
      chatRef.push({
        text: newMessage,
        timestamp: Date.now()
      });
      setNewMessage('');
    }
  };

  return (
    <div>
      <div style={{ height: '300px', overflowY: 'scroll' }}>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
