function formatDate(date) {
  return new Date(date).toLocaleString("en-US", {
    day: "numeric", // numeric, 2-digit
    year: "numeric", // numeric, 2-digit
    month: "short", // numeric, 2-digit, long, short, narrow
  })
}
function formatDateLong(dateString) {
  return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
    new Date(dateString)
  )
}

export { formatDate, formatDateLong }
