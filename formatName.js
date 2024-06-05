function formatName(name) {
  let trimmedName = name.trim();
  let capitalizedWords = trimmedName
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return capitalizedWords.join(" ");
}
3;
console.log(formatName("   victor red   ")); // => output Victor Red
