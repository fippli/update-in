const updateIn = require('../src');

/* Level 1 */
test('Add field and value to empty object, one level', () => {
  expect(updateIn({}, ['name'], 'Optimus Prime'))
    .toEqual({
      name: 'Optimus Prime',
    })
});

test('Change existing value in object, one level', () => {
  expect(updateIn({ name: 'Bumblebee' }, ['name'], 'Optimus Prime'))
    .toEqual({
      name: 'Optimus Prime',
    })
});

/* Level 2 */

test('Add field and value to empty object, two level', () => {
  expect(updateIn({}, ['name', 'first'], 'Optimus'))
    .toEqual({
      name: {
        first: 'Optimus',
      }
    })
});

test('Change existing value in object, two level', () => {
  expect(updateIn({ name: { first: 'Bumblebee', last: 'Prime' } }, ['name', 'first'], 'Optimus'))
    .toEqual({
      name: {
        first: 'Optimus',
        last: 'Prime',
      }
    })
});

/* Level 3 */

test('Add field and value to empty object, two level', () => {
  expect(updateIn({}, ['numbers', '10', '10-14'], [10, 11, 12, 13, 14]))
    .toEqual({
      numbers: {
        '10': {
          '10-14': [10, 11, 12, 13, 14],
        },
      }
    })
});
