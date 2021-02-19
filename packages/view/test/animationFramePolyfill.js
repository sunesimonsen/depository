global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
global.cancelAnimationFrame = (timer) => clearTimeout(timer);
