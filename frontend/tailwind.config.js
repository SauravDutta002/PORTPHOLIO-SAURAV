// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#1E1E1E',
        'sidebar-icons': '#CCCCCC',
        'folder-name-selected': '#F28B25',
        'file-icons': '#61DAFB',
        'text-normal': '#D4D4D4',
        'text-dim': '#808080',
        'highlight-hover': '#2A2A2A',
        'border-line': '#333333',
        'bottom-status-bar': '#007ACC',
        'green-indicators': '#00FF00',
        'error-warning-bar': '#F8C555',
        'error-warning-bar-red': '#F44747',
      },
    },
  },
  plugins: [],
}
