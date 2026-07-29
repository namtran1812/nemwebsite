(() => {
  const layer = document.querySelector(".figure-butterflies");
  if (!layer) return;

  const butterflies = [
    [22, 72, 0.75, 5.4, -0.8],
    [30, 55, 0.62, 6.1, -2.3],
    [25, 36, 0.68, 5.7, -3.6],
    [40, 22, 0.58, 6.5, -1.4],
    [55, 28, 0.72, 5.2, -4.0],
    [67, 41, 0.62, 6.0, -2.0],
    [73, 58, 0.70, 5.6, -0.5],
    [65, 76, 0.55, 6.6, -3.1],
    [48, 84, 0.64, 5.9, -1.8],
  ];

  butterflies.forEach(([x, y, scale, duration, delay], index) => {
    const butterfly = document.createElement("span");

    butterfly.className = "figure-butterfly";

    butterfly.style.setProperty("--x", `${x}%`);
    butterfly.style.setProperty("--y", `${y}%`);
    butterfly.style.setProperty("--scale", scale);
    butterfly.style.setProperty("--duration", `${duration}s`);
    butterfly.style.setProperty("--delay", `${delay}s`);
    butterfly.style.setProperty(
      "--direction",
      index % 2 === 0 ? 1 : -1
    );

    butterfly.innerHTML = `
      <span class="butterfly-wing butterfly-wing-left"></span>
      <span class="butterfly-body"></span>
      <span class="butterfly-wing butterfly-wing-right"></span>
    `;

    layer.appendChild(butterfly);
  });
})();
