export function getFormattedDate(date: Date) {
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" }); // "September"
  const day = date.getDate();
  return `${day} ${month} ${year} `;
}

export function getDateMinusDays(date: Date, days: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function getISOFormattedDate(date: Date) {
  return date.toISOString().slice(0, 10);
}
