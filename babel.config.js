module.exports = function (api) {
    const presets = [
        '@babel/preset-env',
      '@babel/preset-react'
    ];
    const plugins = [
      '@babel/plugin-transform-runtime',
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
      "transform-class-properties",
    ];
    
    api.cache(false);
  
    return {
      presets,
      plugins
    }

    
};