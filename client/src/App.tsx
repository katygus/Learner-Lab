import React from 'react';
import StrategyList from './StrategyList';
import './App.css';
import './index.css';
import FilterBar from './Components/FilterBar'



const App: React.FC = () => {

  // handler functions
  return (
    <>
    <div className='hero'>
      <img className='icon' src="/logo.png" alt='Logo' />
      <h1 className="pageTitle">Learner Lab</h1>
      <h2 className='pageDescription'>A strengths-first library of learning supports</h2>
      </div>
      <h3>Filter Results</h3>
      < FilterBar />,
      < StrategyList />
    </>
  );
};

export default App;
