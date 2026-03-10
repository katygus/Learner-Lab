import { useState, useEffect } from 'react';
import StrategyCard from './Components/StrategyCard';
import type { StrategyType } from './types/types';



const StrategyList = () => {
  const [strategies, setStrategies] = useState<StrategyType[]>([]);
  


  useEffect(() => {
    async function getStrategies() {
    const response: Response = await fetch('http://localhost:5000/api/strategies');
    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      console.error(message);
      return;
    }
    const strategies = await response.json();
    setStrategies(strategies);
  }
  getStrategies();
  return;
  }, [strategies.length]);


  

  return (
    <div className='strategyContainer'>
      {strategies.map((strategy) => (
        <StrategyCard key={strategy._id} strategy={strategy} />
      ))}
    </div>
  );
};

export default StrategyList;
