// src/index.js
import './styles.css';  // Importing the CSS file

// Basic JavaScript logic to display a message on the webpage
document.getElementById('app').innerHTML = `
  <h2>Webpack is awesome!</h2>
  <p>Enjoy the optimizations like code splitting, tree shaking, and lazy loading.</p>
`;

// Demonstrating lazy loading (code splitting)
import(/* webpackChunkName: "extra-feature" */ './extraFeature').then((module) => {
  module.showExtraFeature();  // Dynamically load and execute the extra feature
});
