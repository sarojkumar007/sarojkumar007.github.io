export function formatDate(date: String | Date): String {
  return new Date(date as Date).toLocaleString('en-US', {
    day: 'numeric', // numeric, 2-digit
    year: 'numeric', // numeric, 2-digit
    month: 'short', // numeric, 2-digit, long, short, narrow
  });
}
export function formatDateLong(dateString: string): string {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}

export const slugify = (str: string) => {
  if (str)
    // @ts-ignore
    return str
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x: string) => x.toLowerCase())
      .join('-');
};
