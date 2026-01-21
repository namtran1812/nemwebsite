Performance & deployment notes
------------------------------
- Added optimized background video assets: `images/homeimages/homebackground-720.mp4` and `images/homeimages/homebackground-720.webm` (smaller, 720p, web-optimized).
- Lazy-loads video sources after first paint and uses `homebackground-poster.jpg` as a poster for faster LCP.
- Added font preconnect and poster preload to improve perceived load time.

How to verify (quick):
1. Visit: https://namtran1812.github.io/nemwebsite/
2. Open DevTools → Network. Confirm the poster image is requested early and the video files `homebackground-720.webm` / `homebackground-720.mp4` are fetched after initial paint.