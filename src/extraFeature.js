// src/extraFeature.js

export function showExtraFeature() {
  const extraElement = document.createElement('div');
  extraElement.innerHTML = '<p>This is an extra feature loaded dynamically!</p>';
  document.body.appendChild(extraElement);
}
