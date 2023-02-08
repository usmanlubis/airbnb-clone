/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  'tailwindCSS.emmetCompletions': true,
  'editor.inlineSuggest.enabled': true,
  'editor.quickSuggestions': {
    strings: true,
  },
  'css.validate': false,
};
