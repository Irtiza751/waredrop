export default function breadcrumbs(path: string) {
  return path
    .split("/")
    .map((item) => item.replaceAll("-", " "))
    .map((item) => (item !== "/" ? item : "home"))
    .join(" / ");
}
