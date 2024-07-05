/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Light Mode
        'primary-light': 'var(--primary-color-light)',
        'secondary-light': 'var(--secondary-color-light)',
        'tertiary-light': 'var(--tertiary-color-light)',
        'background-light': 'var(--background-color-light)',
        'secondary-background-light': 'var(--secondary-background-color-light)',
        'surface-light': 'var(--surface-background-color-light)',
        'primary-text-light': 'var(--primary-text-color-light)',
        'secondary-text-light': 'var(--secondary-text-color-light)',
        'highlight-text-light': 'var(--highlight-text-color-light)',
        // Dark Mode
        'primary-dark': 'var(--primary-color-dark)',
        'secondary-dark': 'var(--secondary-color-dark)',
        'tertiary-dark': 'var(--tertiary-color-dark)',
        'background-dark': 'var(--background-color-dark)',
        'secondary-background-dark': 'var(--secondary-background-color-dark)',
        'surface-dark': 'var(--surface-background-color-dark)',
        'primary-text-dark': 'var(--primary-text-color-dark)',
        'secondary-text-dark': 'var(--secondary-text-color-dark)',
        'highlight-text-dark': 'var(--highlight-text-color-dark)'
      }
    }
  },
  plugins: []
}
