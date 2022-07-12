/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'bg-innner-vue': '#35495e',
        'bg-outer-vue': '#42b883'
      }
    }
  },
  plugins: []
}
