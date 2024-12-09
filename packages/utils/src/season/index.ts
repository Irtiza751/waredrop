export function getSeason(month: number): string {
  if (month < 1 || month > 12) {
    throw new Error("Invalid month. Please provide a value between 1 and 12.");
  }

  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter";
    case 3:
    case 4:
    case 5:
      return "Spring";
    case 6:
    case 7:
    case 8:
      return "Summer";
    case 9:
    case 10:
    case 11:
      return "Fall";
    default:
      return "Unknown"; // This line is just for safety but won't be reached.
  }
}
