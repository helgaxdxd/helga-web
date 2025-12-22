module.exports = function(eleventyConfig) {
  // Copia de archivos estáticos
  eleventyConfig.addPassthroughCopy("public/img");
  eleventyConfig.addPassthroughCopy("admin");

  // Definir el filtro de fecha que faltaba
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
