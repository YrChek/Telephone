import phoneNumber from '../phoneNumbers';

test.each([
  ['test1', '8 (927) 000-00-00', '+79270000000'],
  ['test2', '+7 960 000 00 00', '+79600000000'],
  ['test3', '+86 000 000 0000', '+860000000000'],
  ['test4', '89270000000', '+79270000000'],
])('тестирование "%s"', (_, numbers, expected) => {
  const result = phoneNumber(numbers);
  expect(result).toBe(expected);
});
