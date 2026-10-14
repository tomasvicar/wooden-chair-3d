const viewer = document.querySelector('#chair');
const rotate = document.querySelector('#rotate');
const loading = document.querySelector('#loading');
let ready = false;
const timeout = setTimeout(() => {
  if (!ready) loading.textContent = 'Still loading — you can also download the model.';
}, 20000);
viewer.addEventListener('load', () => {
  ready = true;
  clearTimeout(timeout);
  loading.hidden = true;
});
viewer.addEventListener('error', () => {
  clearTimeout(timeout);
  loading.hidden = true;
  document.querySelector('#viewer-error').hidden = false;
});
rotate.addEventListener('click', () => {
  viewer.autoRotate = !viewer.autoRotate;
  rotate.setAttribute('aria-pressed', String(viewer.autoRotate));
  rotate.querySelector('span').textContent = viewer.autoRotate ? 'Pause rotation' : 'Auto rotate';
});
document.querySelector('#reset').addEventListener('click', () => {
  viewer.autoRotate = false;
  rotate.setAttribute('aria-pressed', 'false');
  rotate.querySelector('span').textContent = 'Auto rotate';
  viewer.resetTurntableRotation(0);
  viewer.cameraOrbit = '32deg 72deg 2.6m';
  viewer.cameraTarget = '0m 0.51m 0m';
  viewer.fieldOfView = '30deg';
});
