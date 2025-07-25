 /** @type {import('tailwindcss').Config} */
 export default {
content: [
    './src/**/*.{html,js}',
  ],  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          900: '#1a202c',
        },

        // color_primary: deeppink,
        color_secondary: '#333',
        color_background: '#f0f0f0',
        // color_text: rgba(0, 0, 0, 0.8)',
        color_header_bg: '#fff',
        color_link_hover: '#BB8588',
        color_btn_background: '#ff1493',
        btn_hover: '#980ada',
        backgroundTransparent: 'rgba(255,255,255,0.5)',

        darkerOlive: '#585840',
        olive: '#A3A380',
        golden: '#D7CE93',
        daisy: '#EFEBCE',
        rose: '#D8A48F',
        peach: '#BB8588',
      }
    }
  },
  plugins: [],
}

