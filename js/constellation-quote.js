(() => {
  const landing = document.querySelector(".landing");
  const quote = document.querySelector(".constellation-quote");

  if (!landing || !quote) return;

  const lines = [
    '"life is not about finding yourself.',
    'life is about creating yourself."',
    '— george bernard shaw',
  ];

  const typingDelay = 38;
  const linePause = 180;
  const restartDelay = 500;

  let runId = 0;

  const sleep = (ms) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const buildLines = () => {
    quote.innerHTML = "";

    return lines.map((_, index) => {
      const line = document.createElement("span");
      line.className = `quote-line quote-line-${index + 1}`;
      quote.appendChild(line);
      return line;
    });
  };

  const typeQuote = async () => {
    const currentRun = ++runId;
    const elements = buildLines();

    for (let i = 0; i < lines.length; i++) {
      for (const character of lines[i]) {
        if (
          currentRun !== runId ||
          landing.classList.contains("constellation-active")
        ) {
          return;
        }

        elements[i].textContent += character;
        await sleep(typingDelay);
      }

      await sleep(linePause);
    }
  };

  const observer = new MutationObserver(() => {
    if (landing.classList.contains("constellation-active")) {
      ++runId;
      return;
    }

    setTimeout(() => {
      if (!landing.classList.contains("constellation-active")) {
        typeQuote();
      }
    }, restartDelay);
  });

  observer.observe(landing, {
    attributes: true,
    attributeFilter: ["class"],
  });

  typeQuote();
})();
