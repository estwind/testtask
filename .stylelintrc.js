module.exports = {
    extends: ["stylelint-config-standard",
              "stylelint-config-rational-order",
              "stylelint-prettier/recommended"],
    plugins: ["stylelint-order", "stylelint-scss"],
    rules: {
      "number-max-precision": [4, { "ignoreUnits": ["%"] }],
      'selector-class-pattern': null,
    }
  };