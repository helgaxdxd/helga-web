module.exports = function(eleventyConfig) {
  // Copia de archivos estáticos
  eleventyConfig.addPassthroughCopy("public/img");
  eleventyConfig.addPassthroughCopy("admin");

  // Definir el filtro de fecha que faltaba
  eleventyConfig.addFilter("dateFilter", (dateObj) => {
  const d = dateObj === "now" ? new Date() : new Date(dateObj);
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
});

eleventyConfig.addCollection("cryptography", function(collectionApi) {
    return collectionApi.getFilteredByTag("cryptography").sort((a, b) => {
      return b.date - a.date; // Los más nuevos primero
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
