export default function breadcrumbs(path: string) {
  const chunks = path.split("/"); // path chunks array

  return chunks.map((chunk, i) => {
    const item = chunk.replaceAll("-", " ");
    const last = chunks.length - 1 === i;
    const href = chunks.slice(0, i + 1).join("/") || "/";
    const result = { name: item ? item : "Home", last, href };
    return result;
  });
}
