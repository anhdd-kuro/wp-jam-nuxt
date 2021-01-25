module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-prettier",
    "stylelint-config-property-sort-order-smacss",
    "stylelint-config-recommended-scss",
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  plugins: ["stylelint-scss"],
  rules: {
    "no-empty-source": null,
    "color-hex-length": "long",
  },
};
