import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [token, setToken] = useState('');

  const handleAuth = async () => {
    try {
      const response = await axios.post('http://104.211.219.98/train/auth', {
        
            companyName: "train central",
            clientID: "6e752c1f-4227-4107-9777-d3e86a4937ce",
            clientSecret: "ArTdZoNzcwgvmZkR",
            ownerName: "Gnanaprasoona",
            ownerEmail: "chittemprasoona@gmail.com",
            rollNo: "8"
        
      });
      
      console.log(response.data);
      setToken(response.data.access_token);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {token ? (
        <h2>Authorization token: {token}</h2>
      ) : (
        <button onClick={handleAuth}>Get Authorization Token</button>
      )}
    </div>
  );
};

export default Auth;