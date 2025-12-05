import { useState, useEffect } from 'react';
import StrategyCard from './Components/StrategyCard';
import AsyncSelect from 'react-select/async';

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
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    fetch('http://localhost:5000/api/strategies')
      .then((res) => res.json())
      .then((data) => {
        setStrategies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching strategies:', error);
      });
  }, []);

  
  if (loading) return <div>Loading strategies...</div>;
  
    
  

  return (
    <div className='strategyContainer'>
      {strategies.map((strategy) => (
        <StrategyCard key={strategy._id} strategy={strategy} />
      ))}
    </div>
  );
};

export default StrategyList;
