export default function breadcrumbs(path: string) {
  const chunks = path.split("/");

  return chunks
    .map((item) => item.replaceAll("-", " "))
    .map((item, i) => {
      const last = chunks.length - 1 === i;
      const result = { name: item ? item : "Home", last };
      return result;
    });
}
