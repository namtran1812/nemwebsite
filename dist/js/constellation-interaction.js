(() => {
  const landing = document.querySelector(".landing");
  if (!landing) return;

  const targets = document.querySelectorAll(
    ".portfolio-star, .constellation-line"
  );

  const activate = () => {
    landing.classList.add("constellation-active");
  };

  const deactivate = () => {
    landing.classList.remove("constellation-active");
  };

  targets.forEach((target) => {
    target.addEventListener("mouseenter", activate);
    target.addEventListener("mouseleave", deactivate);

    target.addEventListener("focus", activate);
    target.addEventListener("blur", deactivate);
  });
})();
