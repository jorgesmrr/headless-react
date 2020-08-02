const defaultTheme = require("tailwindcss/defaultTheme");

const extendedColorMapping = {
  primary: "blue",
  neutral: "gray",
  info: "teal",
  success: "green",
  warning: "yellow",
  danger: "red",
};

const extendedColors = {};

for (const variant in extendedColorMapping) {
  const color = extendedColorMapping[variant];

  extendedColors[variant] = {
    1: defaultTheme.colors[color]["200"],
    2: defaultTheme.colors[color]["300"],
    3: defaultTheme.colors[color]["500"],
    4: defaultTheme.colors[color]["700"],
    5: defaultTheme.colors[color]["900"],
  };
}

module.exports = {
  theme: {
    extend: {
      colors: extendedColors,
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant("colors", ({ container }) => {
        const originalRules = [];
        container.walkRules((rule) => originalRules.push(rule));

        const colorVariations = Object.keys(extendedColorMapping);

        const build = (rule, color, firstVariation) => {
          const newRule = firstVariation ? rule : rule.clone();
          const regex = new RegExp(
            firstVariation ? colorVariations[0] : colorVariations[1],
            "g"
          );
          newRule.selector = rule.selector.slice().replace(regex, color);
          newRule.walkAtRules(
            (innerRule) =>
              (innerRule.params = innerRule.params
                .slice()
                .replace(regex, color))
          );

          container.append(newRule);

          firstVariation = false;
        };

        originalRules.forEach((rule) =>
          colorVariations
            .slice(1)
            .forEach((color, index) => build(rule, color, index === 0))
        );
      });
    },
  ],
};
