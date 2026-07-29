(() => {
  const constellation = document.querySelector(".portfolio-constellation");
  if (!constellation) return;

  document.querySelectorAll(".portfolio-star").forEach((star) => {
    const text = star.getAttribute("aria-label");
    if (!text) return;

    const label = document.createElement("span");

    label.className = "static-star-label";
    label.textContent = text.toLowerCase();
    label.dataset.label = text.toLowerCase();

    label.style.setProperty(
      "--x",
      star.style.getPropertyValue("--x")
    );

    label.style.setProperty(
      "--y",
      star.style.getPropertyValue("--y")
    );

    constellation.appendChild(label);
  });
})();
