import strategyController from './strategyController.js';

// Mock the Strategy model so tests never touch the database
jest.mock('../models/Strategy.js', () => ({
  __esModule: true,
  default: {
    find: jest.fn(),
  },
}));

import Strategy from '../models/Strategy.js';

function makeReqResNext(query = {}) {
  const req = { query };
  const res = { locals: {} };
  const next = jest.fn();
  return { req, res, next };
}

beforeEach(() => {
  jest.clearAllMocks();
});

describe('strategyController.getStrategies', () => {
  test('calls Strategy.find with empty filter when no query params', async () => {
    Strategy.find.mockResolvedValue([]);
    const { req, res, next } = makeReqResNext();

    await strategyController.getStrategies(req, res, next);

    expect(Strategy.find).toHaveBeenCalledWith({});
    expect(res.locals.strategies).toEqual([]);
    expect(next).toHaveBeenCalledWith(); // no error
  });

  test('builds strengths filter from comma-separated query param', async () => {
    Strategy.find.mockResolvedValue([]);
    const { req, res, next } = makeReqResNext({ strengths: 'memory,focus' });

    await strategyController.getStrategies(req, res, next);

    expect(Strategy.find).toHaveBeenCalledWith({
      strengths: { $in: ['memory', 'focus'] },
    });
    expect(next).toHaveBeenCalledWith();
  });

  test('builds combined filter when multiple query params are provided', async () => {
    Strategy.find.mockResolvedValue([]);
    const { req, res, next } = makeReqResNext({
      strengths: 'memory',
      challenges: 'focus',
      tags: 'visual',
    });

    await strategyController.getStrategies(req, res, next);

    expect(Strategy.find).toHaveBeenCalledWith({
      strengths: { $in: ['memory'] },
      challenges: { $in: ['focus'] },
      tags: { $in: ['visual'] },
    });
    expect(next).toHaveBeenCalledWith();
  });
});
