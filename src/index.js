/**
 * Update an object with nested keys
 * ---------------------------------
 * Example:
 * const obj = { one: { two: 1 } }
 * updateIn(obj, ['one', 'two'], 35)
 * > { one: { two: 35 } }
 * ---------------------------------
 * @param {object} previousState 
 * @param {array} fieldArray 
 * @param {any} value 
 * @param {number} index 
 * @returns {object} - Updated state
 */
const updateIn = (previousState, fieldArray, value, index = 0) => {
  const key = fieldArray[index];
  if (index >= fieldArray.length) {
    return value;
  }
  const nextLayer = previousState[key];
  return {
    ...previousState,
    [key]: updateIn(nextLayer, fieldArray, value, index + 1),
  };
};

module.export = updateIn;