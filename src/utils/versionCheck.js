// Automated deployment version check and cache buster
export function initVersionChecker() {
  if (typeof window === 'undefined') return;

  const currentVersion = typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : null;

  // 1. Global handler for chunk loading errors when old hash files are deleted after deploy
  window.addEventListener('error', (event) => {
    const errorMsg = event?.message || '';
    if (
      errorMsg.includes('Failed to fetch dynamically imported module') ||
      errorMsg.includes('Loading chunk') ||
      errorMsg.includes('Importing a module script failed')
    ) {
      console.warn('New deployment detected due to chunk error. Reloading fresh...');
      window.location.reload();
    }
  });

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event?.reason?.message || '';
    if (
      reason.includes('Failed to fetch dynamically imported module') ||
      reason.includes('Loading chunk') ||
      reason.includes('Importing a module script failed')
    ) {
      console.warn('New deployment detected due to chunk rejection. Reloading fresh...');
      window.location.reload();
    }
  });

  // 2. Periodic and Focus-based version check
  let lastCheckedTime = 0;
  async function checkForUpdate() {
    const now = Date.now();
    // Throttle checks to at most once every 30 seconds
    if (now - lastCheckedTime < 30000) return;
    lastCheckedTime = now;

    try {
      const response = await fetch(`/version.json?_t=${now}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          Pragma: 'no-cache',
        },
      });

      if (!response.ok) return;

      const data = await response.json();
      if (data?.version && currentVersion && data.version !== currentVersion) {
        console.log(`New version found: ${data.version} (current: ${currentVersion}). Refreshing...`);
        window.location.reload();
      }
    } catch (err) {
      // Ignore network errors when offline
    }
  }

  // Check when tab becomes visible / refocused
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      checkForUpdate();
    }
  });

  window.addEventListener('focus', () => {
    checkForUpdate();
  });

  // Check on a gentle background interval
  setInterval(checkForUpdate, 60000);
}
