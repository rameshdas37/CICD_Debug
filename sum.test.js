const sum = (a, b) => a + b;
test('adds 1 + 2 to equal 4', () => {
  expect(sum(1, 2)).toBe(4); // Intentional failure: 1 + 2 != 4
});
