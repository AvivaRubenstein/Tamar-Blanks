// react-scripts.config.js
module.exports = function override(config, env) {
    // Customize your build configuration here
    if (env === 'production') {
      config.output.filename = 'static/js/main.js'; // Set the desired filename
    }
    return config;
  };