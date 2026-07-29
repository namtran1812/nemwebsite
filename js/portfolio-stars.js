const PORTFOLIO_STARS = [
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
    x: 56,
    y: 16,
    brightness: 1,
    glow: 28,
    size: 6,
    twinkle: 4.8,
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    x: 57.5,
    y: 35,
    brightness: 0.72,
    glow: 19,
    size: 4.5,
    twinkle: 5.7,
  },
  {
    id: "about",
    label: "About",
    href: "#about",
    x: 65,
    y: 25,
    brightness: 0.86,
    glow: 23,
    size: 5,
    twinkle: 4.2,
  },
  {
    id: "research",
    label: "Research",
    href: "#research",
    x: 73,
    y: 13,
    brightness: 1,
    glow: 31,
    size: 6.5,
    twinkle: 5.3,
  },
  {
    id: "leadership",
    label: "Leadership",
    href: "#leadership",
    x: 71.5,
    y: 36,
    brightness: 0.78,
    glow: 21,
    size: 5,
    twinkle: 6.1,
  },
];

const CONNECTIONS = [
  ["experience", "projects"],
  ["experience", "about"],
  ["about", "leadership"],
  ["research", "leadership"],
];

const style = document.createElement("style");

style.textContent = `
  .portfolio-constellation {
    position: absolute;
    inset: 0;
    z-index: 6;
    pointer-events: none;
  }

  .constellation-lines {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: visible;
    pointer-events: none;
  }

  .constellation-line {
    stroke: rgba(185, 215, 245, 0.52);
    stroke-width: 1.15px;
    stroke-linecap: round;
    vector-effect: non-scaling-stroke;

    filter:
      drop-shadow(0 0 3px rgba(160, 205, 245, 0.55));

    pointer-events: stroke;
    cursor: pointer;

    transition:
      stroke 400ms ease,
      filter 400ms ease;
  }

  .portfolio-star {
    position: absolute;
    left: calc(var(--x) * 1%);
    top: calc(var(--y) * 1%);

    width: calc(var(--star-size) * 0.65px);
    height: calc(var(--star-size) * 0.65px);

    transform: translate(-50%, -50%);

    border-radius: 50%;
    background: rgba(255, 255, 255, var(--brightness));

    box-shadow:
      0 0 3px rgba(255, 255, 255, 1),
      0 0 8px rgba(220, 238, 255, 0.85),
      0 0 calc(var(--glow) * 0.55px) rgba(145, 200, 255, 0.65),
      0 0 calc(var(--glow) * 1px) rgba(80, 150, 230, 0.28);

    animation:
      starTwinkle
      calc(var(--twinkle) * 1s)
      ease-in-out
      infinite;

    pointer-events: auto;
    cursor: pointer;
  }

  .portfolio-star::before,
  .portfolio-star::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;

    transform: translate(-50%, -50%);
    pointer-events: none;
  }

  .portfolio-star::before {
    width: 1px;
    height: calc(var(--star-size) * 4.2px);

    background: linear-gradient(
      to bottom,
      transparent,
      rgba(195, 225, 255, 0.3),
      white,
      rgba(195, 225, 255, 0.3),
      transparent
    );

    filter:
      drop-shadow(0 0 3px rgba(170, 215, 255, 0.75));
  }

  .portfolio-star::after {
    width: calc(var(--star-size) * 3px);
    height: 1px;

    background: linear-gradient(
      to right,
      transparent,
      rgba(195, 225, 255, 0.3),
      white,
      rgba(195, 225, 255, 0.3),
      transparent
    );

    filter:
      drop-shadow(0 0 3px rgba(170, 215, 255, 0.7));
  }

  @keyframes starTwinkle {
    0%,
    100% {
      opacity: calc(var(--brightness) * 0.78);
      transform: translate(-50%, -50%) scale(0.92);
    }

    38% {
      opacity: var(--brightness);
      transform: translate(-50%, -50%) scale(1.12);
    }

    60% {
      opacity: calc(var(--brightness) * 0.86);
      transform: translate(-50%, -50%) scale(1);
    }

    76% {
      opacity: var(--brightness);
      transform: translate(-50%, -50%) scale(1.06);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .portfolio-star {
      animation: none;
    }
  }
`;

document.head.appendChild(style);

const constellation = document.createElement("nav");
constellation.className = "portfolio-constellation";
constellation.setAttribute("aria-label", "Portfolio navigation");

const svg = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "svg"
);

svg.classList.add("constellation-lines");
svg.setAttribute("viewBox", "0 0 100 100");
svg.setAttribute("preserveAspectRatio", "none");

const starMap = new Map(
  PORTFOLIO_STARS.map((star) => [star.id, star])
);

for (const [fromId, toId] of CONNECTIONS) {
  const from = starMap.get(fromId);
  const to = starMap.get(toId);

  if (!from || !to) continue;

  const line = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );

  line.setAttribute("x1", from.x);
  line.setAttribute("y1", from.y);
  line.setAttribute("x2", to.x);
  line.setAttribute("y2", to.y);
  line.classList.add("constellation-line");

  svg.appendChild(line);
}

constellation.appendChild(svg);

for (const [index, star] of PORTFOLIO_STARS.entries()) {
  const link = document.createElement("a");

  link.className = "portfolio-star";
  link.href = star.href;
  link.setAttribute("aria-label", star.label);

  link.style.setProperty("--x", star.x);
  link.style.setProperty("--y", star.y);
  link.style.setProperty("--brightness", star.brightness);
  link.style.setProperty("--glow", star.glow);
  link.style.setProperty("--star-size", star.size);
  link.style.setProperty("--twinkle", star.twinkle);
  link.style.animationDelay = `${index * -0.83}s`;

  constellation.appendChild(link);
}

document.querySelector(".landing")?.appendChild(constellation);
