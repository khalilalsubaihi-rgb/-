/* eslint-disable @typescript-eslint/no-require-imports */
const { handlers, features, screenshots } = require('./api.js');

describe('API Handlers', () => {
  let mockReq;
  let mockRes;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getFeatures', () => {
    it('should respond with status 200 and the features array', () => {
      handlers.getFeatures(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenCalledWith(200);

      expect(mockRes.json).toHaveBeenCalledTimes(1);
      expect(mockRes.json).toHaveBeenCalledWith(features);
    });
  });

  describe('getScreenshots', () => {
    it('should respond with status 200 and the screenshots array', () => {
      handlers.getScreenshots(mockReq, mockRes);

      expect(mockRes.status).toHaveBeenCalledTimes(1);
      expect(mockRes.status).toHaveBeenCalledWith(200);

      expect(mockRes.json).toHaveBeenCalledTimes(1);
      expect(mockRes.json).toHaveBeenCalledWith(screenshots);
    });
  });
});
