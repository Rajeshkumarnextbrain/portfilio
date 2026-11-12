'use client';

// Suppress known noisy browser extension warnings (e.g. Bitdefender, Urban VPN)
// Execute synchronously at script evaluation time before React hydration begins
if (typeof window !== 'undefined') {
  const isExtensionNoise = (msg) => {
    if (typeof msg !== 'string') return false;
    return (
      msg.includes('bis_skin_checked') ||
      msg.includes('Extra attributes from the server') ||
      msg.includes('chrome-extension://') ||
      msg.includes('eppiocemhmnlbhjplcgkofciiegomcon')
    );
  };

  const origError = console.error;
  console.error = function (...args) {
    if (args.length > 0 && isExtensionNoise(args[0])) {
      return;
    }
    return origError.apply(console, args);
  };

  const origWarn = console.warn;
  console.warn = function (...args) {
    if (args.length > 0 && isExtensionNoise(args[0])) {
      return;
    }
    return origWarn.apply(console, args);
  };
}

export default function HydrationFix() {
  return null;
}
