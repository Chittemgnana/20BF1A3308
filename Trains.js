import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Trains = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://104.211.219.98/train/trains', {
          headers: {
            Authorization: 'Bearer YOUR_AUTH_TOKEN'
  
  