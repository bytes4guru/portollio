/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        dotnet: '#68217A',
        django: '#166534',
        nextjs: '#E0234E',
        nodejs: '#68A063',
        laravel: '#F05340',
        ror: '#CC0000',
        react: '#61dafb',
        vue: '#42b883',
        angular: '#dd0031',
        flux: '#4183C4',
        mui: '#1976D2',
        mssql: '#CC2927',
        postgresql: '#336791',
        mysql: '#4479A1',
        mongodb: '#47A248',
        firebase: '#FFCA28',
        aws: '#FF9900',
        gcp: '#4285F4',
        azure: '#0089D6',
        digitalocean: '#0080FF',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
