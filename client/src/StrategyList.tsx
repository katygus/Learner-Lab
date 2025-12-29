import { useState, useEffect } from 'react';
import StrategyCard from './Components/StrategyCard';


interface StrategyType {
  _id?: string;
  title: string;
  description: string;
  strengthsLeveraged: string[];
  supportsChallenges: string[];
  ageGroup: string;
  tags: string[];
}
const StrategyList = () => {
  const [strategies, setStrategies] = useState<StrategyType[]>([]);
  


  useEffect(() => {
    async function getStrategies() {
    const response = await fetch('http://localhost:5000/api/strategies');
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
