const {
  override,
  overrideDevServer,
  addWebpackAlias,
  addDecoratorsLegacy,
} = require("customize-cra");
const { alias } = require("./common.config");
const { devServerConfig } = require("./dev.config");
const { addBuildConfig } = require("./prod.config");

module.exports = {
  webpack: override(
    addDecoratorsLegacy(),
    addWebpackAlias(alias),
    addBuildConfig()
  ),
  devServer: overrideDevServer(devServerConfig),
};
