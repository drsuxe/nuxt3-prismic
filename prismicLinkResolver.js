export default (doc) => {
  if (doc.type === "blogs") {
    return `/blogs/${doc.uid}`;
  }
  return "/";
};
