module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("index.html");
    eleventyConfig.addPassthroughCopy("myjava.js");
  };