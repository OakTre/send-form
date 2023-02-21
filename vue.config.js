const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/send-form/dist/" : "/",
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Authorization',
    },
  }
})
