const { withPlugins } = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

// next.js configuration
const nextConfig = {
  env: {
    STRIPE_PUBLIC_KEY:
      'pk_test_51H0q2JIMGefvgk9o8IYNJAsHqFrjL0S1yuLESW6he76cdT5UWbCxvOn4fQEvzBTNAYybSsGsWVn9U02Dmo1KywXD00NYWbuJWg',
    API_URL: 'http://localhost:4000/shop/graphql',
  },
  webpack: (config) => {
    config.resolve.modules.push(__dirname);

    config.resolve.alias = {
      ...config.resolve.alias,
    };
    return config;
  },
};

module.exports = withPlugins([withOptimizedImages], nextConfig);
