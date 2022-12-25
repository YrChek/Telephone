export default function phoneNumber(number) {
  const digits = number.replace(/(^8)/i, '+7');
  const result = digits.replace(/[ ()-]?/g, '');
  return result;
}
