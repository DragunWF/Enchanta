export function getRandomArrayItem(arr: any): any {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getCurrentDateToday(): string {
  const today = new Date();

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true, // Use 12-hour clock with AM/PM
  };

  return new Intl.DateTimeFormat("en-US", options).format(today);
}
