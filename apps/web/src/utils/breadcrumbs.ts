export default function breadcrumbs(path: string) {
  return path
    .split("/")
    .map((item) => item.replaceAll("-", " "))
    .filter((item) => item);
}
