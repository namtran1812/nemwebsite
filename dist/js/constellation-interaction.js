(() => {
  const landing = document.querySelector(".landing");

  if (!landing) return;

  let dim = landing.querySelector(".constellation-dim");

  if (!dim) {
    dim = document.createElement("div");
    dim.className = "constellation-dim";
    landing.insertBefore(dim, landing.firstChild);
  }

  const activate = () => {
    landing.classList.add("constellation-active");
  };

  const deactivate = () => {
    landing.classList.remove("constellation-active");
  };

  const bindConstellation = () => {
    const targets = document.querySelectorAll(
      ".portfolio-star, .constellation-line"
    );

    targets.forEach((target) => {
      target.addEventListener("pointerenter", activate);
      target.addEventListener("pointerleave", deactivate);
    });

    console.log("Constellation hover targets:", targets.length);
  };

  bindConstellation();
})();
