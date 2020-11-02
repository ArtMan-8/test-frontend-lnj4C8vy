export default function endingsYear(number) {
  const titles = ['ый', 'ой', 'ий'];

  if (number % 100 > 8 && number % 100 < 22) return titles[0];
  if ((number % 10 < 9 && number % 10 > 5) || number % 10 === 2) return titles[1];
  if (number % 10 === 3) return titles[2];
  return titles[0];
}
