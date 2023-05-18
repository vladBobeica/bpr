const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://citygrid.dk/fiware/v2",
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
