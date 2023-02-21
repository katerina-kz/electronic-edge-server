import type { AWS } from '@serverless/typescript';

import hello from '@functions/hello';
import getProductList from '@functions/getProductsList';

const serverlessConfiguration: AWS = {
  service: 'product-service',
  disabledDeprecations: [
    'CLI_OPTIONS_SCHEMA',
  ],
  frameworkVersion: '3',
  plugins: [
    'serverless-webpack',
    'serverless-esbuild',
  ],
  provider: {
    name: 'aws',
    runtime: 'nodejs16.x',
    region: 'us-east-1',
    stage: 'dev',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  // import the function via paths
  functions: { hello, getProductList },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node16',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
      packager: 'npm',
      excludeFiles: 'src/**/*.test.js'
    }
  },
};

module.exports = serverlessConfiguration;
