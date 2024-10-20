/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      colors: {
        primary: {
          hover: '#1D46C0',
          focus: '#587FF3',
          active: '#0E2360',
          DEFAULT: '#2F60F1',
          disabledBg: '#CCD2DC',
          disabledText: '#8090A7',
        },
        secondary: {
          hover: '#E9EEFE',
          DEFAULT: '#2F60F1',
          activeBg: '#D3DEFC',
          activeText: '#163590',
          borderActive: '#0E2360',
          disabledText: '#8090A7',
          disabledBorder: '#CCD2DC',
        },
        ghost: {
          hoverBg: '#E9EEFE',
          activeBg: '#D3DEFC',
          activeText: '#163590',
        },
        gray: {
          300: '#CCD2DC',
          500: '#8090A7',
        },
        eyebrow: '#424E61',
        scrim: '#0a1424cc',
        closeIcon: '#00204E',
        headerTitle: '#00204E',
      },
      padding: {
        btnVertical: '16px',
        btnHorizontal: '20px',
      },
      minWidth: {
        btn: '120px',
      },
    },
  },
  plugins: [],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
};
