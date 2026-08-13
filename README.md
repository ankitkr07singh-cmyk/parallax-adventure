# DRIFT — A Parallax Adventure

A playful, responsive parallax scrolling website built with vanilla HTML, CSS and JavaScript.

> Independent concept website. No external image assets or frameworks are required.

## Features

- Multi-section parallax scrolling
- Background / midground / foreground depth layers
- Smooth requestAnimationFrame motion
- Interactive discovery card and toast
- Animated progress indicator
- Mouse-following cursor
- Ambient sound toggle using Web Audio API
- Responsive mobile layout
- `prefers-reduced-motion` accessibility fallback
- Pure HTML + CSS + JavaScript

## Run

Open `index.html` in a browser or use VS Code Live Server.

## Files

```text
parallax-adventure/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Design concept

The page is a four-part visual journey:

1. **Mountain Night** — enter the world.
2. **Forest** — foreground trees move faster than distant mountains.
3. **Ocean** — waves create a layered depth effect.
4. **Sky** — the journey ends in a floating cosmic scene.

The implementation uses CSS transforms and JavaScript animation frames for broad browser compatibility. Modern CSS also provides native scroll-driven animation timelines for browsers that support them.
