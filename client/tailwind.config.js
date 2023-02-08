/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'bnb-pink': '#FF385C',
      'bnb-icon': '#777777',
    },
  },
  plugins: [],
  'tailwindCSS.emmetCompletions': true,
  'editor.inlineSuggest.enabled': true,
  'editor.quickSuggestions': {
    strings: true,
  },
  'css.validate': false,
};
