/** @type {import('tailwindcss').Config} */

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `hsla(var(${variableName}), ${opacityValue})`;
    }
    return `hsla(var(${variableName}))`;
  };
}

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-very-dark-blue": withOpacity("--very-dark-blue"),
        "clr-dark-blue": withOpacity("--dark-blue"),
        "clr-light-gray": withOpacity("--light-gray"),
        "clr-medium-gray": withOpacity("--medium-gray"),
        "clr-orange": withOpacity("--orange"),
        "clr-pure-white": withOpacity("--pure-white"),
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    plugins: [],
  },
};
