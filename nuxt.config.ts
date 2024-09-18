export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",

	devtools: { enabled: true },

	ssr: true,

	modules: ["@nuxt/image", "@nuxt/content"],

	content: {
		// ... options
	},
});
