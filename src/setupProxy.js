import inputEmail from "./EmailVerificationComponent";
const proxy = require("http-proxy-middleware");

let key = "RMOAD7L9PEIZMV5ZS2CK";
module.exports = function (app) {
  app.use(
    proxy("/ajit", {
      target: `https://api.mailboxvalidator.com/v1/validation/single?email=${inputEmail}&key=${key}`,
      changeOrigin: true,
    })
  );
};
