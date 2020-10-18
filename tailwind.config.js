module.exports = {
	future: {
		purgeLayersByDefault: true,
	},
	purge: {
		content: ["dist/**/*.html"],
		options: {
			whitelist: [],
		},
	},
	theme: {
		extend: {
			colors: {
				change: "black",
			},
		},
	},
	variants: {},
	plugins: [],
};