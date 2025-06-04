import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'My Site Kevin',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
  outDir: 'dist',
  base: '/rsbuild-test/', // Asegúrate que coincida con tu repo
  builderConfig: {
    output: {
      assetPrefix: '/rsbuild-test/', // Mismo que base
    }
  }
});
