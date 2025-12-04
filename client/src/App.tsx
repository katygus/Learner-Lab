import React from 'react';
import StrategyList from './StrategyList';
import './App.css';
import './index.css';
import FilterBar from './Components/FilterBar'


const App: React.FC = () => {

  return (
    <>
    <div className='hero'>
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
