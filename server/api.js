const features = [];
const screenshots = [];

const handlers = {
  getFeatures: (req, res) => {
    res.status(200).json(features);
  },

  getScreenshots: (req, res) => {
    res.status(200).json(screenshots);
  }
};

module.exports = { handlers, features, screenshots };
