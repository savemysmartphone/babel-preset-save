module.exports = {
  presets: [
    require('modify-babel-preset')('babel-preset-es2015', {
      'transform-es2015-classes': { loose: true },
      'transform-es2015-modules-commonjs': { loose: true }
    }),
    require('babel-preset-react'),
    require('babel-preset-stage-0')
  ],
  plugins: [
    require('babel-plugin-transform-decorators-legacy').default,
    require('babel-plugin-add-module-exports'),
    [require('babel-plugin-transform-es2015-template-literals'), { spec: true }],
    require('babel-plugin-transform-es3-member-expression-literals'),
    require('babel-plugin-transform-es3-property-literals'),
    require('babel-plugin-transform-jscript'),
    require('babel-plugin-transform-exponentiation-operator'),
    require('babel-plugin-transform-proto-to-assign')
  ]
};
