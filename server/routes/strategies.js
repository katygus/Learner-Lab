import express from "express";
import Strategy from "../models/Strategy.js";
import strategyController from "../controllers/strategyController.js";
import getFilteredStrategies from "../controllers/strategyController.js";

const router = express.Router();

// add all route specific middleware here

//router.get GET request for all strategies
router.get('/', strategyController.getStrategies, (req, res) => res.status(200).json(res.locals.strategies)
);

//POST to create strategy

// GET filtered strategies


// PUT /:id to update a strategy

// DELETE /:id to delete a strategy


export default router;