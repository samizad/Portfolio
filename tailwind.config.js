module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "Sans-Condensed": ['"Open Sans Condensed"', "cursive"],
        transitionProperty: {
          width: "width",
          height: "height",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderColor: ["focus-visible", "first"],
      textColor: ["visited"],
      height: ["hover", "focus", "group-hover"],
      width: ["responsive", "hover", "focus", "group-hover"],
      transform: ["hover", "focus"],
      scale: ["active", "group-hover", "hover", "focus"],
      transitionProperty: ["responsive", "hover", "focus"],
      transitionTimingFunction: ["responsive", "hover", "focus"],
      transitionDuration: ["responsive", "hover", "focus"],
      transitionDelay: ["responsive", "hover", "focus"],
    },
  },
};
