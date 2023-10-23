function convertToLongFormat(shortDay) {
    const dayMap = {
      "Sun": "Sunday",
      "Mon": "Monday",
      "Tue": "Tuesday",
      "Wed": "Wednesday",
      "Thu": "Thursday",
      "Fri": "Friday",
      "Sat": "Saturday"
    };
    if (shortDay in dayMap) {
      return dayMap[shortDay];
    } else {
      return "Invalid Day";
    }
  }
  const shortDayInput = prompt("Enter a short day(e.g.,'Mon'):");
  const longDay = convertToLongFormat(shortDayInput);
  console.log(`Long format: ${longDay}`);
  