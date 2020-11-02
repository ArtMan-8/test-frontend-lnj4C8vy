export default function salaryFormat(inputVal) {
  const formatNum = inputVal.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
  const formatValue = `${formatNum}`;
  return formatValue;
}
