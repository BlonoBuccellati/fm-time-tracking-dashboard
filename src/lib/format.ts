export function formatHours(num: number): string {
  return num <= 1 ? `${num}hr` : `${num}hrs`;
}
