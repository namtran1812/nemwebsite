(() => {
  const landing = document.querySelector(".landing");
  if (!landing) return;

  const layer = document.createElement("div");
  layer.className = "ambient-stars";
  layer.setAttribute("aria-hidden", "true");

  const stars = [
    [47, 9],  [51, 13], [55, 7],  [59, 11], [63, 6],
    [67, 10], [71, 14], [74, 18], [46, 18], [50, 22],
    [55, 18], [60, 16], [65, 19], [70, 23], [73, 27],
    [47, 28], [51, 33], [56, 30], [61, 34], [66, 31],
    [70, 35], [73, 38], [53, 26], [58, 23], [63, 27],
    [68, 26], [49, 38], [54, 40], [59, 38], [64, 40],
    [69, 39], [52, 5],  [58, 4],  [64, 5],  [70, 7],
    [45, 14], [46, 34], [72, 12], [57, 36], [67, 36],
  ];

  stars.forEach(([x, y], index) => {
    const star = document.createElement("span");
    star.className = "ambient-star";

    const size = 1.1 + ((index * 7) % 15) / 10;
    const duration = 2.8 + ((index * 11) % 28) / 10;
    const delay = -((index * 0.73) % 6);

    star.style.setProperty("--x", `${x}%`);
    star.style.setProperty("--y", `${y}%`);
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--duration", `${duration}s`);
    star.style.setProperty("--delay", `${delay}s`);

    layer.appendChild(star);
  });

  landing.appendChild(layer);
})();
