# Orizon Design – Rentals

A cinematic, scroll-driven landing page for a rental and travel brand. Smooth inertia scrolling, pinned sections, parallax depth and glassmorphism UI come together in a single-page experience that works from small phones to large desktops.

[![Live Demo](https://img.shields.io/badge/Live-Demo-00c7b7?style=for-the-badge&logo=netlify&logoColor=white)](https://spontaneouslive.netlify.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SanwalBhatti2904/living)

## 🔗 Links

| | |
|---|---|
| **Live site** | https://spontaneouslive.netlify.app/ |
| **GitHub repo** | https://github.com/SanwalBhatti2904/living |

## ✨ Features

- **Smooth scrolling** with [Lenis](https://github.com/darkroomengineering/lenis), synced to GSAP's ticker
- **Hero section** with a parallax background, intro timeline and a Buy / Rent toggle
- **Pinned rental section** where text lines fly in as you scroll
- **Cinematic "Silent Tides" section** with a layered background, fog, a pulsing sun glow, a vignette and film grain
- **Travel destination carousel** driven entirely by scroll, with five destinations, animated info cards and progress indicators
- **Fullscreen pinned footer** with socials sliding in from the left, navigation from the right and a centered call to action
- **Responsive by design**, with separate desktop (≥ 768px) and mobile (< 768px) animation timelines via `gsap.matchMedia()`
- **Glassmorphism** panels, buttons and badges

## 🛠️ Tech Stack

- HTML5
- CSS3, plus [Tailwind CSS](https://tailwindcss.com/) (CDN)
- JavaScript (ES6)
- [GSAP](https://gsap.com/) 3.12.2 and ScrollTrigger
- [Lenis](https://github.com/darkroomengineering/lenis) 1.0.29
- [Font Awesome](https://fontawesome.com/) 6.4.0
- Google Fonts: Inter and Playfair Display

## 📁 Project Structure

```
living/
├── index.html      # Page markup and sections
├── style.css       # Custom styles, glassmorphism, section and footer styling
├── script.js       # Lenis setup + all GSAP / ScrollTrigger animations
└── assets/
    ├── home1.jpg   # Rental section image
    └── footer.png  # Footer background
```

## 🚀 Getting Started

No build step is required. It is a static site.

1. **Clone the repository**
   ```bash
   git clone https://github.com/SanwalBhatti2904/living.git
   cd living
   ```

2. **Run it locally**

   Open `index.html` directly in your browser, or serve it with a local server for best results:
   ```bash
   # Python
   python -m http.server 8000

   # or Node
   npx serve .
   ```
   Then visit `http://localhost:8000`.

> **Note:** An internet connection is needed, since Tailwind, GSAP, Lenis, Font Awesome, fonts and some images load from CDNs.

## 🎬 How the Animations Work

| Section | Technique |
|---|---|
| Hero | Intro timeline on load, then scrubbed parallax on the background, card and title |
| Rental | Pinned with `ScrollTrigger`, text lines animate in from different directions |
| Section 3 | Pinned, scrubbed background drift plus staggered title and metadata reveals |
| Section 4 | Pinned, scrubbed timeline moving five destinations through a vertical carousel |
| Footer | Pinned, with staggered entrance of socials, nav links, CTA and bottom text |

Lenis is wired into GSAP with `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker.add(...)`, so scroll position and animations stay in sync.

## 🎨 Customization

- **Images:** swap the Unsplash URLs in `style.css` (`.bg-3-image`, `.bg-4-image`) or replace the files in `assets/`.
- **Destinations:** edit the five `.dest-item` blocks in `index.html` (name, location, description, image).
- **Scroll length:** change the `end: "+=..."` values in `script.js` to speed up or slow down each pinned section.
- **Contact and social links:** update the `href="#"` placeholders and the email and phone in the footer..

## 🌐 Deployment

The site is deployed on **Netlify**: https://spontaneouslive.netlify.app/

To deploy your own copy, push to GitHub, then import the repo in Netlify (no build command needed, publish directory is the repo root).

## 📄 License

This project is open source. Add a license of your choice (for example MIT) in a `LICENSE` file..

## 👤 Author

**Sanwal Bhatti**
GitHub: [@SanwalBhatti2904](https://github.com/SanwalBhatti2904)
