export default function parseSlug(slug: string) {
  return slug.replaceAll("-", " ");
}
