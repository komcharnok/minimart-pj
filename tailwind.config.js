/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '375px',
      'sm': '414px',  // สำหรับหน้าจอขนาดเล็ก เช่นมือถือ
      'md': '770px',  // สำหรับหน้าจอขนาดกลาง เช่น tablet
      'lg': '1140px', // สำหรับหน้าจอขนาดใหญ่ เช่น laptop
      'xl': '1280px', // สำหรับหน้าจอขนาดใหญ่มาก เช่น desktop
      '2xl': '1536px', // สำหรับหน้าจอ ultra-wide
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
