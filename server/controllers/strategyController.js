import Strategy from '../models/Strategy.js';


const strategyController = {};

strategyController.getStrategies = async (req, res, next) => {
  try {
    const strategies = await Strategy.find();

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

export default strategyController;