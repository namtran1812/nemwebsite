(() => {
  const landing = document.querySelector(".landing");
  if (!landing) return;

  const targets = document.querySelectorAll(
    ".portfolio-star, .constellation-line"
  );

  let activeTargets = 0;

  const activate = () => {
    activeTargets += 1;
    landing.classList.add("constellation-active");
  };

  const deactivate = () => {
    activeTargets = Math.max(0, activeTargets - 1);

    if (activeTargets === 0) {
      landing.classList.remove("constellation-active");
    }
  };

  targets.forEach((target) => {
    target.addEventListener("pointerenter", activate);
    target.addEventListener("pointerleave", deactivate);

    target.addEventListener("focus", activate);
    target.addEventListener("blur", deactivate);
  });
})();
