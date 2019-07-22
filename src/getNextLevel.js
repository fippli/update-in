const getNextLevel = (previousObject, key) => {
  if (previousObject[key]) {
    return previousObject[key]
  }
  return {};
};

module.exports = getNextLevel;