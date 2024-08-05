function smoothScroll() {
  let scrollAmount = 0;
  let isScrolling = false;
  let lastTouchY = 0;

  function smoothScroll(delta) {
    scrollAmount += delta;

    if (!isScrolling) {
      isScrolling = true;
      requestAnimationFrame(smoothStep);
    }
  }

  function smoothStep() {
    if (Math.abs(scrollAmount) > 1) {
      window.scrollBy(0, scrollAmount * 0.2);
      scrollAmount *= 0.9;
      requestAnimationFrame(smoothStep);
    } else {
      scrollAmount = 0;
      isScrolling = false;
    }
  }

  window.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();
      smoothScroll(event.deltaY);
    },
    { passive: false }
  );

  window.addEventListener("touchstart", (event) => {
    lastTouchY = event.touches[0].clientY;
  });

  window.addEventListener("touchmove", (event) => {
    const currentTouchY = event.touches[0].clientY;
    const deltaY = lastTouchY - currentTouchY;
    smoothScroll(deltaY);
    lastTouchY = currentTouchY;
  });

  window.addEventListener("touchend", () => {
    lastTouchY = 0;
  });
}

window.innerWidth >= 768 && smoothScroll();
