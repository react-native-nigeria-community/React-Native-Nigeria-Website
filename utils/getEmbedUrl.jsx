export const getEmbedUrl = (url) => {
  const isYT = url.includes("youtube") || url.includes("youtu.be");
  if (!isYT) return url;
  if (url.includes("embed")) return url;
  if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");

  const urlParts = url.split("/");
  return `https://www.youtube.com/embed/${urlParts.pop().split("?")[0]}`;
};
