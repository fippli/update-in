const getNextLevel = require('./getNextLevel');
/**
 * Update an object with nested keys
 * ---------------------------------
 * Example:
 * const obj = { one: { two: 1 } }
 * updateIn(obj, ['one', 'two'], 35)
 * > { one: { two: 35 } }
 * ---------------------------------
 * @param {object} previousObject 
 * @param {array} fieldArray 
 * @param {any} value 
 * @param {number} index 
 * @returns {object} - Updated state
 */
const updateIn = (previousObject, fieldArray, value, index = 0) => {
  const key = fieldArray[index];
  if (index >= fieldArray.length) {
    return value;
  }

  return {
    ...previousObject,
    [key]: updateIn(getNextLevel(previousObject, key), fieldArray, value, index + 1),
  };
};

module.exports = updateIn;