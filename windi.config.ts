import { defineConfig } from 'vite-plugin-windicss';
import typography from 'windicss/plugin/typography';

export default defineConfig({
  darkMode: 'class',
  plugins: [typography()],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'ui-sans-serif', 'system-ui'],
      serif: ['Montserrat', 'ui-serif', 'Georgia'],
      mono: ['Fira Sans', 'ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        // editorial cards on the publications page; 50 and 700 are sampled from
        // assets/publications/toc/2023-palani-toc.png (lavender band, violet bullet text),
        // 200 is the same hue at the lightness of the other card colors
        editorial: {
          50: '#f5f5ff',
          200: '#dcc5fc',
          700: '#34007a',
        },
      },
    },
  },
});
