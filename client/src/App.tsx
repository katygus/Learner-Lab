import React, { useState, useEffect } from 'react'
import axios from "axios";
// import Strategies component when I make it
import './App.css'

interface Strategy {
  _id: string;
  title: string;
  description: string;
  strengthsLeveraged: [string];
  supportsChallenges: [string];
  tags: [string];
  ageGroup: string;
}
const App: React.FC = () => {
 const [strategies, setStrategies] = useState<Strategy[]>([]);
// create use state for filtering strategies

useEffect(() => {
  const fetchStrategies = async () => {
    try {
      const response = await axios.get<Strategy[]>('http://localhost:5000/api/strategies/${id}');
      console.log("Fetched tasks:", response.data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };
  fetchStrategies();
}, []);
  return (
    <>
    
      <h1>Strategy Library</h1>
     
    </>
  )
}

export default App
