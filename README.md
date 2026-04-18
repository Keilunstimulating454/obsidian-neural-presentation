# OBSIDIAN Neural — Workshop Presentation

Interactive slide deck for the OBSIDIAN Neural workshop.  
Live at: **[presentation.obsidian-neural.com](https://presentation.obsidian-neural.com)**

Built as a website, not a PowerPoint. Navigate with arrow keys, scroll, or swipe.  
Each slide has a "Read more" button that opens a modal with detailed content — useful for people revisiting the slides on their phone after the session.

## Stack

- [Reveal.js](https://revealjs.com/) — slide engine
- [GSAP](https://gsap.com/) — animations
- [Font Awesome](https://fontawesome.com/) — icons
- [Material Symbols](https://fonts.google.com/icons) — diagram icons
- Pure CSS — no framework, no Bootstrap
- HTML/CSS diagrams — no inline SVG

## Run locally

```bash
# Install dependencies
chmod +x install.sh && ./install.sh

# Serve locally
python3 -m http.server 8000
# → open http://localhost:8000
```

````

Requires Node.js + npm for the initial install. After that, everything runs offline.

> **Note:** `vendor/` is not committed to the repo. Run `install.sh` to regenerate it.

## Offline fonts

The presentation uses Syne + Space Mono from Google Fonts (loaded via CDN).
For full offline support, download the `.woff2` files manually:

- [Syne](https://gwfh.mranftl.com/fonts/syne?subsets=latin)
- [Space Mono](https://gwfh.mranftl.com/fonts/space-mono?subsets=latin)

Place them in `./fonts/` and uncomment the `@font-face` blocks in `css/theme.css`.

## QR Codes

Two QR codes are included in the final slide. Regenerate them with:

```bash
pip install qrcode[pil]
python3 -c "
import qrcode
qrcode.make('https://obsidian-neural.com').save('assets/images/qrcode.png')
qrcode.make('https://presentation.obsidian-neural.com').save('assets/images/qrcode-slides.png')
"
```

## Navigation

| Key / Action      | Effect                        |
| ----------------- | ----------------------------- |
| `→` or `Space`    | Next slide                    |
| `←`               | Previous slide                |
| `F`               | Fullscreen                    |
| `Esc`             | Exit fullscreen / close modal |
| Mouse wheel       | Next / previous slide         |
| Click "Read more" | Open detail modal             |

## Structure

```
presentation/
├── index.html               # All slides + modals
├── css/
│   └── theme.css            # OBSIDIAN Neural theme + CSS variables
├── js/
│   └── slides.js            # Reveal init + GSAP + modal logic + GitHub stats
├── vendor/                  # Not committed — regenerated via install.sh
│   ├── reveal/              # Reveal.js (local)
│   ├── gsap/                # GSAP (local)
│   └── fontawesome/         # Font Awesome (local)
├── fonts/                   # Google Fonts (manual, for offline)
├── assets/
│   └── images/
│       ├── qrcode.png       # obsidian-neural.com
│       └── qrcode-slides.png # presentation.obsidian-neural.com
├── .htaccess                # HTTPS redirect + cache + security headers
├── .gitignore
├── install.sh               # Dependency installer
└── README.md
```

## Slides

1. **Cover** — OBSIDIAN Neural, AI music generation, generate while you play
2. **The Problem** — Diffusion models in a DAW existed. None were built around the performance workflow.
3. **Architecture** — VST → Central Server → GPU Provider Network → WAV
4. **Central Server** — WAV validation, BPM detection, RubberBand stretch, trim, resample, response headers
5. **Provider Verification** — Mel spectrogram fingerprinting, canary tests, trusted reference, auto-ban
6. **8 AI Models** — Community fine-tunes, freely assignable per track and per page (8 models × 8 tracks × 4 pages)
7. **Draw-to-Audio** — Visual creativity as a sound design interface, Gemma4 vision LLM
8. **Results** — Downloads, GitHub stars, press coverage, AES AIMLA 2025
9. **Reflection** — What building this taught me
10. **Vision** — Model packs as the next sample packs. A new economic model for AI music.
11. **Q&A** — QR codes, links, thank you

## CSS Variables

Key variables to tune the presentation visually:

```css
--diagram-max-width: 1200px; /* width of all diagrams */
--icon-size: 2.1rem; /* Material Symbols size in cards */
--card-title: 1.2rem; /* card title font size */
--card-sub: 0.9rem; /* card subtitle font size */
```

## License

AGPL-3.0 — fork it, adapt it for your own talks. If you build on it, keep it open.

---

_Made with 🎵 in Grenoble, France_
_By [Anthony Charretier](https://github.com/innermost47) — InnerMost47_
````
