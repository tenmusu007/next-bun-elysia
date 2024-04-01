'use client';

import axios from 'axios';
import { useState } from 'react';

const UserPage = () => {
  const [message, setMessage] = useState(null);
  const [messageList, setMessageLists] = useState(null);
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

  return (
    <div>
      <h1>Users</h1>
      {message && <p>{message}</p>}
      {messageList && <p>{messageList}</p>}
      <button onClick={fetingUsers}>Fetch Users</button>
      <button onClick={fetingLists}>Fetch Lists</button>
    </div>
  );
};

export default UserPage;
