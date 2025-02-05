export function extractUserName(input: string): string {
  if (input.includes("@")) {
    const username = input.split("@")[0];
    return username
      .replace(/[_\.]/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  } else {
    return input
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  }
}
