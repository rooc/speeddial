const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false);

	eleventyConfig.addWatchTarget("./_tmp/styles.css");
	eleventyConfig.addWatchTarget("./js/scripts.js");
	eleventyConfig.addWatchTarget("img");
	
	eleventyConfig.addPassthroughCopy("img");
	eleventyConfig.addPassthroughCopy({	"./_tmp/styles.css": "./css/styles.css"});
	eleventyConfig.addPassthroughCopy({	"./js/scripts.js": "./js/scripts.js"});
	eleventyConfig.addPassthroughCopy({"./node_modules/alpinejs/dist/alpine.js": "./js/alpine.js",});

	eleventyConfig.addShortcode("version", function() {
		return String(Date.now());
	});

	eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
		if (
			process.env.ELEVENTY_PRODUCTION &&
			outputPath &&
			outputPath.endsWith(".html")
		) {
			let minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true,
			});
			return minified;
		}

		return content;
	});
};