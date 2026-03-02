# Serpil Ural — Portfolio

Personal portfolio site for Serpil Ural, Senior Product Marketer based in Vienna.

**Live:** [serpil.ural.club](https://serpil.ural.club)

## Stack

- Vanilla HTML, CSS, JavaScript
- No frameworks, no build step
- Served via Nginx

## Structure

```
index.html   — Single-page layout (hero, about, experience, education, projects, reading, contact)
styles.css   — All styling + animations
main.js      — Scroll animations, book filters, mobile nav
hero-photo.jpg
```

## Deploy

Copy files to the web server:

```bash
scp index.html styles.css main.js hero-photo.jpg user@server:/var/www/serpil.ural.club/
```

## Features

- Clip-reveal text animations on hero and section headings
- Photo curtain reveal on hero image
- Scroll progress bar
- Timeline connector animations in experience section
- Animated book filter with fade/scale transitions
- Skill chip staggered entrance with hover glow
- Mobile hamburger nav with slide-out drawer
- Back-to-top button
- Book covers via OpenLibrary and Goodreads APIs
- Series book grid layouts (Aurelia, Stefan Zweig)
