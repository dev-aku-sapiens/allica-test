export default {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    return {
      ...config,
      esbuild: {
        jsxInject: `import React from 'react'`,
        loader: 'tsx',
      },
      build: {
        sourcemap: configType === 'DEVELOPMENT',
        outDir: 'storybook-static',
        rollupOptions: {
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom'],
            },
          },
        },
      },
    };
  },
};
