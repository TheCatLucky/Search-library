export const dateConversion = (date: Date): string => {
  let d: string | number = date.getDate();
  let m: string | number = date.getMonth() + 1;
  const y: string | number = date.getFullYear();
  if (m <= 9) {
    m = `0${m}`;
  }
  if (d < 9) {
    d = `0${d}`;
  }
  return `${d}.${m}.${y}`;
};
