const app = require("./app");
const { AppConfig } = require("./config/config");

app.listen(AppConfig.port)