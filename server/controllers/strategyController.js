import Strategy from '../models/Strategy.js';


const strategyController = {};

// added queries for different filters
strategyController.getStrategies = async (req, res, next) => {
   const filter = {};
  if (req.query.strengths) {
    filter.strengths = { $in: req.query.strengths.split(',') };
  }
  if (req.query.challenges) {
    filter.challenges = { $in: req.query.challenges.split(',') };
  }
  if (req.query.tags) {
    filter.tags = { $in: req.query.tags.split(',') };
  }
  try {
    const strategies = await Strategy.find(filter);

    res.locals.strategies = strategies;

    return next();
  } catch (err) {
    return next({
      log: `Error in getStrategies: ${err}`,
      status: 500,
      message: 'An error occurred while fetching strategies',
    });
  }
};

// strategyController.getFilteredStrategies = async (req, res, next) => {
//   const filter = {};
//   if (req.query.strengths) {
//     filter.strengths = { $in: req.query.strengths.split(',') };
//   }
//   if (req.query.challenges) {
//     filter.challenges = { $in: req.query.challenges.split(',') };
//   }
//   if (req.query.tags) {
//     filter.tags = { $in: req.query.tags.split(',') };
//   }
//   const strategies = await Strategy.find(filter);
//   res.json(strategies);
// };

export default strategyController;