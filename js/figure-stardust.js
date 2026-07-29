(() => {
  const layer = document.querySelector(".figure-stardust");
  if (!layer) return;

  const particles = [
    [25, 78, 1.8, 4.7, -0.4],
    [31, 64, 1.2, 5.6, -2.1],
    [22, 49, 1.5, 4.9, -1.3],
    [28, 34, 1.0, 6.2, -3.5],
    [36, 22, 1.6, 5.2, -0.9],

    [47, 16, 1.2, 6.0, -2.8],
    [57, 25, 1.8, 4.6, -1.7],
    [64, 38, 1.1, 5.8, -4.0],
    [70, 53, 1.5, 5.1, -0.6],
    [66, 70, 1.0, 6.4, -2.5],

    [58, 82, 1.7, 4.8, -3.1],
    [46, 88, 1.1, 5.9, -1.1],
    [34, 86, 1.4, 5.3, -4.2],

    [18, 60, 0.9, 6.7, -2.2],
    [73, 64, 1.3, 5.5, -0.8],
    [40, 10, 0.9, 6.3, -3.8],
    [53, 9, 1.3, 5.0, -1.5],
    [77, 46, 0.8, 6.8, -4.5],

    [24, 72, 0.8, 5.4, -2.7],
    [62, 18, 0.9, 6.1, -0.2],
    [30, 17, 1.1, 5.7, -3.0],
    [71, 78, 1.0, 6.5, -1.9],
  ];

  particles.forEach(([x, y, size, duration, delay], index) => {
    const particle = document.createElement("span");

    particle.className =
      index % 4 === 0
        ? "stardust-particle stardust-spark"
        : "stardust-particle";

    particle.style.setProperty("--x", `${x}%`);
    particle.style.setProperty("--y", `${y}%`);
    particle.style.setProperty("--size", `${size}px`);
    particle.style.setProperty("--duration", `${duration}s`);
    particle.style.setProperty("--delay", `${delay}s`);

    layer.appendChild(particle);
  });
})();
