import React, { useState } from 'react';
import StrategyList from './StrategyList';
import './App.css';
import './index.css';
import FilterBar from './Components/FilterBar';
import type { SelectOption } from './types/types';

/*
DO NEXT - pass filters to StrategyList as props:
Passing Filters - What to Consider:
1. What Data Should You Pass?
Think about what StrategyList actually needs to filter:

Just the string values from the selected options? (e.g., ["Hyperfocus", "Visual Thinking"])

Or the full objects? (e.g., [{value: "Hyperfocus", label: "Hyperfocus"}, ...])

Hint: Backend API will need simple strings for query params.

2. Filter Data Structure:
Consider creating a filter object in App.tsx:

typescript
const filters = {
  strengths: string[],
  challenges: string[], 
  tags: string[]
}
3. How to Transform Data:
selectedStrengths is currently [{value: "x", label: "x"}, ...]
But backend expects: ?strengths=x,y

Need to map objects to strings before passing to StrategyList.

4. Where to Transform:
Option A: Transform in App.tsx before passing down

Option B: Transform in StrategyList before making API call

Option C: Transform in a utility function

5. Prop Drilling vs Context:
Currently using prop drilling (passing through App). Consider:

Is this getting too deep?

Would React Context be better? (Probably not for this small app)

6. Performance Considerations:
Should I debounce filter changes? (Prevent too many API calls) -> what does this mean?

How often will filters change vs re-renders?

7. Edge Cases:
What if all filters are empty? (Show all strategies)

What if user selects contradictory filters? (AND vs OR logic)

Think About This:
When a user selects "Hyperfocus" in the strengths dropdown:

FilterBar calls setSelectedStrengths([{value: "Hyperfocus", label: "Hyperfocus"}])

App.tsx state updates

App.tsx needs to pass this to StrategyList

StrategyList needs to convert to ["Hyperfocus"]

StrategyList needs to fetch /api/strategies?strengths=Hyperfocus

Key design decision:
Where should step 4 happen?  

Look at  current data flow and decide where the transformation should occur for cleanest code.
*/

const App: React.FC = () => {
  // handler functions
  const [selectedStrengths, setSelectedStrengths] = useState<SelectOption[]>(
    [],
  );
  const [selectedChallenges, setSelectedChallenges] = useState<SelectOption[]>(
    [],
  );
  const [selectedTags, setSelectedTags] = useState<SelectOption[]>([]);

  return (
    <>
      <div className='hero'>
        <img className='icon' src='/logo.png' alt='Logo' />
        <h1 className='pageTitle'>Learner Lab</h1>
        <h2 className='pageDescription'>
          A strengths-first library of learning supports
        </h2>
      </div>
      <h3>Filter Results</h3>
      <FilterBar
        selectedStrengths={selectedStrengths}
        setSelectedStrengths={setSelectedStrengths}
        selectedChallenges={selectedChallenges}
        setSelectedChallenges={setSelectedChallenges}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />
      <StrategyList />
    </>
  );
};

export default App;
