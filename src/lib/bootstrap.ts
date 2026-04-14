// Ensure Bootstrap's global event listeners are only registered once.
// During Vite HMR, side-effect imports can be re-evaluated and cause
// duplicate data-api handlers (which can toggle collapse open+closed).
declare global {
  // eslint-disable-next-line no-var
  var __HAYC_BOOTSTRAP_LOADED__: boolean | undefined;
}

if (!globalThis.__HAYC_BOOTSTRAP_LOADED__) {
  globalThis.__HAYC_BOOTSTRAP_LOADED__ = true;
  await import('bootstrap/dist/js/bootstrap.bundle.min.js');
}

