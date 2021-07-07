const path = require('path');
const { override, addLessLoader, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
  }),
  addWebpackAlias({
    ['@kongd/constants']: path.resolve(__dirname, 'src/common/constants'),
    ['@kongd/helpers']: path.resolve(__dirname, 'src/common/helpers'),
    ['@kongd/languages']: path.resolve(__dirname, 'src/common/languages'),
    ['@kongd/auth']: path.resolve(__dirname, 'src/common/auth'),
    ['@kongd/redux']: path.resolve(__dirname, 'src/redux'),
    ['@kongd/routes']: path.resolve(__dirname, 'src/routes'),
    ['@kongd/pages']: path.resolve(__dirname, 'src/pages'),
    ['@kongd/apis']: path.resolve(__dirname, 'src/apis'),
    ['@kongd/assets']: path.resolve(__dirname, 'src/shared/assets'),
    ['@kongd/containers']: path.resolve(__dirname, 'src/shared/containers'),
    ['@kongd/components']: path.resolve(__dirname, 'src/shared/components'),
    ['@kongd/styles']: path.resolve(__dirname, 'src/shared/styles'),
  })
);
