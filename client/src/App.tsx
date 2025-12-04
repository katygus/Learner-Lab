import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StrategyList from './StrategyList';
import './App.css';

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
  // const [strategies, setStrategies] = useState<Strategy[]>([]);
  // create use state for filtering strategies

  return (
    <>
      <h1>Strategy Library</h1>
      <StrategyList />
    </>
  );
};

export default App;
