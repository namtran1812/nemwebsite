(() => {
  const constellation = document.querySelector(".portfolio-constellation");
  if (!constellation) return;

  document.querySelectorAll(".portfolio-star").forEach((star) => {
    const labelText = star.getAttribute("aria-label");
    if (!labelText) return;

    const label = document.createElement("span");
    label.className = "static-star-label";
    label.textContent = labelText.toLowerCase();
    label.dataset.label = labelText.toLowerCase();

    label.style.setProperty("--x", star.style.getPropertyValue("--x"));
    label.style.setProperty("--y", star.style.getPropertyValue("--y"));

    constellation.appendChild(label);
  });
})();
