// Timing tokens, easing curves, and transition configurations

export const TIMING = {
  micro: 0.15, // 150ms
  base: 0.3, // 300ms
  reveal: 0.5, // 500ms
  diagram: 0.8, // 800ms
  maxSingle: 1.0, // 1.0s
  diagramMax: 2.5, // 2.5s
  stagger: 0.06, // 60ms
  staggerChips: 0.03, // 30ms
};

export const EASING = {
  out: [0.22, 1, 0.36, 1] as const, // cubic-bezier(0.22, 1, 0.36, 1)
  inOut: [0.65, 0, 0.35, 1] as const, // cubic-bezier(0.65, 0, 0.35, 1)
};

export const TRANSITIONS = {
  micro: {
    duration: TIMING.micro,
    ease: EASING.out,
  },
  base: {
    duration: TIMING.base,
    ease: EASING.out,
  },
  reveal: {
    duration: TIMING.reveal,
    ease: EASING.out,
  },
  diagram: {
    duration: TIMING.diagram,
    ease: EASING.out,
  },
};

export const VIEWPORT_CONFIG = {
  once: true,
  margin: "0px",
  amount: 0 as const,
};
