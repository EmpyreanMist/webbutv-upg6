const toUpper = require('./toUpperCase')

test('changes text to upper case', () => {
  expect(toUpper("hello there")).toBe("HELLO THERE")
});