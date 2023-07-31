import { defineConfig } from 'vite'
import { sveltepress } from '@sveltepress/vite'
import { defaultTheme } from '@sveltepress/theme-default'

const config = defineConfig({
  plugins: [
    sveltepress({
      theme: defaultTheme({
        navbar: [
          // Add your navbar configs here
          {
            title: "Petit Vert",
            to: "/pv/"
          }
        ],
        sidebar: {
          // Add your sidebar configs here
          "/pv/": [
            {
              title: "Intro",
              to: "/pv/",
              items: [
                {
                  title: "waza ?",
                  to:"/pv/waza/"
                },
                {
                  title: "quick start",
                  to:"/pv/quick-start/"
                },
              ]
            }
          ]
        },
        github: 'https://github.com/Blackman99/sveltepress',
        logo: '/sveltepress.svg',
        i18n: {
          onThisPage: "Sur cette page",
        }
      }),
      siteConfig: {
        title: 'Sveltepress',
        description: 'A content centered site build tool',
      },
    }),
  ],
})

export default config
