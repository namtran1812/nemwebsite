const PORTFOLIO_STARS = [
  {
    id: "experience",
    label: "Experience",
    href: "#experience",
    x: 56,
    y: 16,
    brightness: 1.0,
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
    brightness: 1.0,
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
    z-index: 5;
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
    pointer-events: stroke;
    pointer-events: stroke;
    cursor: pointer;
    stroke-linecap: round;
    stroke: rgba(215, 232, 255, 0.48);
    stroke-width: 1.15px;
    vector-effect: non-scaling-stroke;
    filter: drop-shadow(0 0 4px rgba(185, 218, 255, 0.7));
    animation: constellationGlow 4s ease-in-out infinite;
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
      0 0 8px rgba(225, 240, 255, calc(var(--brightness) * 0.95)),
      0 0 calc(var(--glow) * 0.55px) rgba(175, 215, 255, calc(var(--brightness) * 0.75)),
      0 0 calc(var(--glow) * 1px) rgba(120, 180, 255, calc(var(--brightness) * 0.32));

    animation:
      starGlow
      calc(var(--twinkle) * 1s)
      ease-in-out
      infinite;

    pointer-events: auto;
    cursor: pointer;

    transition:
      transform 250ms ease,
      box-shadow 250ms ease;
  }

   starGlow 3.5s ease-in-out infinite;

    pointer-events: auto;
    cursor: pointer;
  }

  .portfolio-star:nth-of-type(2) {
    animation-delay: 0.7s;
  }

  .portfolio-star:nth-of-type(3) {
    animation-delay: 1.4s;
  }

  .portfolio-star:nth-of-type(4) {
    animation-delay: 2.1s;
  }

  .portfolio-star:nth-of-type(5) {
    animation-delay: 2.8s;
  }

  .portfolio-star:hover {
    transform: translate(-50%, -50%) scale(1.5);

    box-shadow:
      0 0 8px white,
      0 0 18px rgba(210, 232, 255, 1),
      0 0 34px rgba(160, 205, 255, 0.75);
  }

  .star-label {
    position: absolute;
    left: 50%;
    bottom: 14px;

    transform: translateX(-50%) translateY(4px);

    color: rgba(255, 255, 255, 0.92);

    font-family: "Snell Roundhand", "Apple Chancery", "URW Chancery L", cursive;

    font-size: 15px;
    letter-spacing: 0.02em;
    text-transform: none;
    white-space: nowrap;

    opacity: 0;

    transition:
      opacity 250ms ease,
      transform 250ms ease;

    text-shadow:
      0 1px 5px rgba(0, 0, 0, 0.8),
      0 0 8px rgba(120, 175, 255, 0.5);

    pointer-events: stroke;
  }

  .portfolio-star:hover .star-label,
  .portfolio-star:focus-visible .star-label {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  @keyframes starGlow {
    0%, 100% {
      opacity: calc(var(--brightness) * 0.78);
      transform: translate(-50%, -50%) scale(0.92);
    }

    37% {
      opacity: var(--brightness);
      transform: translate(-50%, -50%) scale(1.12);
    }

    53% {
      opacity: calc(var(--brightness) * 0.86);
      transform: translate(-50%, -50%) scale(1);
    }

    71% {
      opacity: var(--brightness);
      transform: translate(-50%, -50%) scale(1.06);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .portfolio-star {
      animation: none;
    }
  }

  /* Elegant celestial star rays */
  .portfolio-star::before,
  .portfolio-star::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }

  .portfolio-star::before {
    width: 1px;
    height: calc(var(--star-size) * 4.2px);
    background: linear-gradient(to bottom, transparent, rgba(210, 230, 255, 0.3), white, rgba(210, 230, 255, 0.3), transparent);
    filter: drop-shadow(0 0 3px rgba(190, 220, 255, 0.75));
  }

  .portfolio-star::after {
    width: calc(var(--star-size) * 3px);
    height: 1px;
    background: linear-gradient(to right, transparent, rgba(210, 230, 255, 0.3), white, rgba(210, 230, 255, 0.3), transparent);
    filter: drop-shadow(0 0 3px rgba(190, 220, 255, 0.7));
  }


  .portfolio-constellation:hover .constellation-line {
    pointer-events: stroke;
    pointer-events: stroke;
    cursor: pointer;
    stroke: rgba(225, 240, 255, 0.9);
    filter:
      drop-shadow(0 0 3px rgba(220, 238, 255, 1))
      drop-shadow(0 0 8px rgba(155, 205, 255, 0.85));
  }

  .portfolio-constellation:hover .portfolio-star {
    opacity: 1;
    box-shadow:
      0 0 4px rgba(255, 255, 255, 1),
      0 0 12px rgba(225, 240, 255, 1),
      0 0 24px rgba(175, 215, 255, 0.9),
      0 0 42px rgba(120, 180, 255, 0.55);
  }


  .constellation-line {
    pointer-events: stroke;
    pointer-events: stroke;
    cursor: pointer;
    transition: stroke 500ms ease, filter 500ms ease;
  }

  .portfolio-star {
    transition:
      transform 300ms ease,
      box-shadow 500ms ease,
      opacity 500ms ease;
  }


  .landing.constellation-active .constellation-line {
    stroke: rgba(230, 242, 255, 0.95);
    filter:
      drop-shadow(0 0 3px rgba(225, 240, 255, 1))
      drop-shadow(0 0 9px rgba(155, 205, 255, 0.9));
  }

  .landing.constellation-active .portfolio-star {
    filter: brightness(1.3);
  }


  @keyframes hoverStarRadiance {
    0%, 100% {
      opacity: 0.9;
      transform: translate(-50%, -50%) scale(1.05);
      filter: brightness(1.15);
    }

    35% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.28);
      filter: brightness(1.65);
    }

    62% {
      opacity: 0.94;
      transform: translate(-50%, -50%) scale(1.12);
      filter: brightness(1.35);
    }
  }

  @keyframes hoverLineRadiance {
    0%, 100% {
      opacity: 0.72;
      stroke-width: 1.15px;
      filter:
        drop-shadow(0 0 3px rgba(225, 240, 255, 0.8))
        drop-shadow(0 0 7px rgba(155, 205, 255, 0.55));
    }

    50% {
      opacity: 1;
      stroke-width: 1.55px;
      filter:
        drop-shadow(0 0 5px rgba(240, 248, 255, 1))
        drop-shadow(0 0 12px rgba(165, 215, 255, 0.95))
        drop-shadow(0 0 20px rgba(110, 175, 255, 0.55));
    }
  }

  .landing.constellation-active .portfolio-star {
    animation:
      hoverStarRadiance 1.35s ease-in-out infinite !important;

    box-shadow:
      0 0 5px rgba(255, 255, 255, 1),
      0 0 14px rgba(230, 242, 255, 1),
      0 0 28px rgba(175, 215, 255, 0.95),
      0 0 48px rgba(120, 180, 255, 0.65);
  }

  .landing.constellation-active .constellation-line {
    animation:
      hoverLineRadiance 1.6s ease-in-out infinite !important;

    stroke: rgba(235, 245, 255, 1);
  }


  .landing.constellation-active .portfolio-star::before,
  .landing.constellation-active .portfolio-star::after {
    filter:
      brightness(1.8)
      drop-shadow(0 0 4px rgba(225, 240, 255, 1))
      drop-shadow(0 0 9px rgba(160, 210, 255, 0.9));
  }


  .landing.constellation-active .constellation-line:nth-child(2) {
    animation-delay: -0.35s !important;
  }

  .landing.constellation-active .constellation-line:nth-child(3) {
    animation-delay: -0.7s !important;
  }

  .landing.constellation-active .constellation-line:nth-child(4) {
    animation-delay: -1.05s !important;
  }


  .landing.constellation-active .star-label {
    opacity: 1 !important;
    transform: translateX(-50%) translateY(0) !important;
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
  line.setAttribute("class", "constellation-line");

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
  link.style.animationDelay = (index * -0.83) + "s";

  const label = document.createElement("span");
  label.className = "star-label";
  label.textContent = star.label;

  link.appendChild(label);
  constellation.appendChild(link);
}

document.querySelector(".landing")?.appendChild(constellation);

const landing = document.querySelector(".landing");
const interactiveConstellation = document.querySelectorAll(
  ".portfolio-star, .constellation-line"
);

for (const element of interactiveConstellation) {
  element.addEventListener("mouseenter", () => {
    landing?.classList.add("constellation-active");
  });

  element.addEventListener("mouseleave", () => {
    landing?.classList.remove("constellation-active");
  });
}
