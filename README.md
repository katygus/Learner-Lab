##TO DO

Server
[x] Start with npm run dev in server folder
[x] Check for message saying it's running (make sure without errors)
[x] add error handling middleware at end of server.js

MongoDB Connection
[x] Create server/models/Strategy.js schema
[x] Import/use in server.js
[x] Test -> restart server and check for Connected to MongoDB message

Create API Routes
[x] create GET /api/strategies route in server/routes/strategies.js
[x] test routes in Postman http://localhost:5000/api/strategies -> does it return seed data from MOngoDB?
[x] define route handlers in server.js


Frontend Setup
[x] in client, make sure React runs -> npm run dev
[x] shows default page

Display Data
[x] create client/src/Components/StrategyCard.tsx
[x] Create StrategyCard component

[x] Fetch & display strategies from backend
[x] Test that data from MongoDB shows on page
[ ] add basic styling

Other Page Components
[x] Add title and app description
[x] Add filter component

Search Filter
[ ] Think about how to use this (in App.tsx):
 - onFilterChange is a prop passed from parent component (App) to child (FilterBar)
 - filters is a prop passed from parent (App) to child (StrategyList)
I think that means each prop needs to be defined in App.tsx ->
    * handleFilterChange
    * activeFilters
  <FilterBar 
    onFilterChange={handleFilterChange} 
  />
  <StrategyList 
    filters={activeFilters} 
  />


Database filtering happens in backend - frontend just sends selected values

Your API: GET /api/strategies?strengths=Visual+Thinking&challenges=Attention

const [selectedStrengths, setSelectedStrengths] = useState([]);
const [selectedChallenges, setSelectedChallenges] = useState([]);
const [selectedTags, setSelectedTags] = useState([]);

// When any selection changes, combine and send to parent
    // FIGURE OUT what useEffect is doing here -> how does it relate to what it does when rendering ALL the cards?
    
useEffect(() => {
  onFilterChange({
    strengths: selectedStrengths.map(s => s.value),
    challenges: selectedChallenges.map(c => c.value),
    tags: selectedTags.map(t => t.value)
  });
}, [selectedStrengths, selectedChallenges, selectedTags]);

6. Backend API Update:
Backend needs to accept query params:
// In routes/strategies.js
router.get('/', async (req, res) => {
  const { strengths, challenges, tags } = req.query;
  // Build MongoDB query from these
});

Quickest Implementation:
Install react-select

Create 3 Select components in FilterBar

Pass selected values to parent (App.tsx)

Update StrategyList to accept filters prop

Modify backend to filter by query params

Start with just ONE filter (e.g., tags) to get it working, then add the others.

##STRETCHES
Create New Strategies
[ ] create StrategyForm component
[ ] POST new strategy to backend
[ ] update UI after success
[ ] test that new strategy appears on update

[ ] add additional server routes for UPDATE and DELETE


WHAT DOES WHAT frontend
App.tsx -> fetches from API

StrategyList.tsx -> Maps through all strategies and passes one to each card

StrategyCard.tsx -> Renders each section with strategy data