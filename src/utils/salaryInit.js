export default function salaryInit(formatVal) {
  return parseInt(formatVal.replace(/\s+/g, '').trim(), 10);
}
