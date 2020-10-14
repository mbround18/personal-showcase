export default {
  buildModules: ['@nuxt/typescript-build'],
  target: "static",  
  env: {
    configUrl: process.env.CONFIG_URL || "http://localhost:3000/config.json",
  },
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Personal Showcase',
        name: 'Personal Showcase',
        content: 'A website to showcase skills and social media links.'
      }
    ]
  },
  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        'tailwindcss': {}
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {}
      }
    }
  }
};