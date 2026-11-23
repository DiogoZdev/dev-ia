const CONFETTI_COLORS = ['#2f6df6', '#22d3ee', '#a78bfa', '#f472b6', '#fbbf24', '#f8fafc']
const CONFETTI_Z_INDEX = 60
const CONFETTI_IDLE_TIMEOUT = 1000

export function fireConfetti() {
  const runConfetti = () => {
    void import('canvas-confetti').then(({ default: confetti }) => {
      const baseOptions = {
        colors: CONFETTI_COLORS,
        zIndex: CONFETTI_Z_INDEX,
        disableForReducedMotion: true,
        ticks: 220,
      }

      void confetti({
        ...baseOptions,
        particleCount: 90,
        spread: 100,
        startVelocity: 50,
        origin: { x: 0.5, y: 0.3 },
      })

      void confetti({
        ...baseOptions,
        particleCount: 45,
        angle: 60,
        spread: 60,
        origin: { x: 0, y: 0.65 },
      })

      void confetti({
        ...baseOptions,
        particleCount: 45,
        angle: 120,
        spread: 60,
        origin: { x: 1, y: 0.65 },
      })
    })
  }

  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(runConfetti, { timeout: CONFETTI_IDLE_TIMEOUT })
    return
  }

  setTimeout(runConfetti, 0)
}
