'use client';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { api } from '../libs/api';
const UserPage = () => {
  const [message, setMessage] = useState(null);
  const [messageList, setMessageLists] = useState(null);
  const [messageElysia, setMessageElysia] = useState(null);
  const [messageElysiaUser, setMessageElysiaUser] = useState<{
    name: string;
    age: number;
  } | null>({
    name: '',
    age: 0,
  });
  const [elysiaId, setElysiaId] = useState<string | null>(null);
  const [chatLits, setChatLists] = useState<any[]>([]);
  const idRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLInputElement>(null);
  const fetingUsers = async () => {
    try {
      const response = await axios.get('/api/user');
      console.log(response);

      const { message } = response.data;
      setMessage(message);
    } catch (error) {
      console.log(error);
    }
  };
  const fetingLists = async () => {
    try {
      const response2 = await axios.get('/api/lists');
      console.log(response2);

      const { message } = response2.data;
      setMessageLists(message);
    } catch (error) {
      console.log(error);
    }
  };
  const fetingElysia = async () => {
    try {
      const { data, error } = await api.user.elysia.profile.patch({
        name: 'saltyaom',
        age: 21,
      });
      console.log(data);
      console.log(error);
      setMessageElysiaUser(data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetingElysiaUser = async () => {
    // try {
    const id = idRef.current?.value;
    if (!id) return;
    const { data, error } = await api.user.elysia({ id }).get();
    if (data) {
      setElysiaId(data.id);
    }
    if (error)
      switch (error.status) {
        case 400:
          throw error.value;

        case 418:
          throw error.value;
      }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  // const ws = new WebSocket('ws://localhost:3000/chat');
  // ws.onopen = () => {
  //   console.log('Opened');
  // };
  // ws.onclose = () => {
  //   console.log('Closed');
  // };
  // ws.onmessage = (ev) => console.log('onmessage', ev.data);
  const OnClickSendChat = async () => {
    const chatText = chatRef.current?.value;
    const chat = await api.chat.index.get();
  };
  return (
    <div>
      <h1>Lists</h1>
      {message && <p>{message}</p>}
      {messageList && <p>{messageList}</p>}
      {messageElysia && <p>{messageElysia}</p>}
      {messageElysiaUser && (
        <p>
          {messageElysiaUser.name} {messageElysiaUser.age}
        </p>
      )}
      <div>
        {chatLits.map((chat) => (
          <div key={chat.id}>
            <p>{chat.id}</p>
            <p>{chat.name}</p>
          </div>
        ))}
      </div>
      <button onClick={fetingUsers}>Fetch Users</button>
      <button onClick={fetingLists}>Fetch Lists</button>
      <button onClick={fetingElysia}>elysia</button>
      <button onClick={fetingElysiaUser}>ID: {elysiaId}</button>
      <input type='text' ref={idRef} />
      <div style={{ marginTop: '30px' }}>
        <input type='text' ref={chatRef} />
        <button onClick={OnClickSendChat}>send</button>
      </div>
    </div>
  );
};

export default UserPage;
