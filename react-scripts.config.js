// react-scripts.config.js
export default function override(config, env) {
    // Customize your build configuration here
    if (env === 'production') {
      config.output.filename = 'static/js/main.js'; // Set the desired filename
    }
    return config;
  };