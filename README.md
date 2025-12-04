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

[ ] Fetch & display strategies from backend
[ ] Test that data from MongoDB shows on page

Search Filter
[ ] add filter checkboxes (by various elements)
[ ] test
[ ] or use search bar filter with keywords

Fix up
[ ] add basic styling
[ ] check for bugs
[ ] test entire flow for presentation
[ ] add concurrently??




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