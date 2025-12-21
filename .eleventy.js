module.exports = function(eleventyConfig) {
  // Copia las imágenes y el panel de admin directamente a la web final
  eleventyConfig.addPassthroughCopy("public/img");
  eleventyConfig.addPassthroughCopy("admin");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};