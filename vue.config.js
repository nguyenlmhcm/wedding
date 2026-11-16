const wedding = require("./wedding.config.js");

module.exports = {
  // Tên repo GitHub → link https://<tài-khoản>.github.io/wedding/
  publicPath: process.env.NODE_ENV === "production" ? "/wedding/" : "/",
  outputDir: "docs",
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/styles/_var.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = wedding.title;
      return args;
    });
  },
  devServer: {
    disableHostCheck: true,
  },
};
