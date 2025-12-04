import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import strategyRoutes from "./routes/strategies.js"
import Strategy from "./models/Strategy.js";
import path from "path";



dotenv.config();

const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'strategy_library'
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Failed:", err);
    process.exit(1); // Exit process with failure
  }
};

connectDB();


//define route handlers (import any necessary routers)
app.use('/api/strategies', strategyRoutes);

app.get('/test', (req, res) => {
  res.json({message: 'Test route works'});
});
//create catch-all route handler for requests to unknown route
app.use((req, res) => res.status(404).send("Cannot find what you're searching for"));

// Add error handling middleware (incl default)
app.use((err, req, res, next) => {
  const defaultErr = {
  log: 'Express error handler caught unknown middleware error',
  status: 500,
  message: { err: 'An error occurred' },
};
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;