export const proxy: Record<string, any> = {
  dev: {
    '/api/': {
      target: 'http://dev-scm.kxgcc.com:30872',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/public/': {
      target: 'https://test-scm.kxgcc.com:30195',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  test: {
    '/api/': {
      target: 'https://test-scm.kxgcc.com:30195',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
    '/public/': {
      target: 'https://test-scm.kxgcc.com:30195',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
