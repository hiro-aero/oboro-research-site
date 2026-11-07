# Oboro Research website

A lightweight, static engineering portfolio for Oboro Research, built in plain HTML, CSS, and JavaScript for easy deployment to GitHub Pages. No build step, dependencies, or package manager.

## Open locally

Double-click `index.html`, or open this folder in VS Code and preview via your preferred local web server. Files must stay in the same relative layout as provided.

## Files

- `index.html`: Homepage content, navigation, image references and project sections
- `styles.css`: Responsive layout and midnight-navy / lunar-yellow design tokens
- `script.js`: Accessible auto-rotating project carousel; respects reduced-motion and pauses on hover/focus
- `assets/oboro-research-logo.png`: Oboro Research wordmark
- `assets/tanuk-blueprint.svg`: Concept rover engineering sketch; **not actual CAD**
- `assets/nixie-blueprint.svg`: Concept Nixie clock engineering sketch; **not actual CAD**
- `assets/favicon.svg`: Browser tab icon
- `PUBLISHING_GUIDE.md`: Full Windows/GitHub/domain instructions

## Before public launch

- [ ] Replace the LinkedIn placeholder with your actual LinkedIn profile URL.
- [ ] Review About Me text and mission statement.
- [ ] Keep the images identified as concepts until real design/CAD renders replace them.
- [ ] Verify that you own or have permission to post every asset and that no private employer material is included.
- [ ] Publish on GitHub Pages, optionally connect a custom domain, and enable HTTPS.

## Updating images

Put replacements inside `assets/`, then change the corresponding `src` references in `index.html`. Two references each exist for the TANUK and Nixie images (one carousel, one project card). Updating `alt` text and concept labels is recommended.

## Carousel details

The two featured slides rotate every 7 seconds. Hovering, keyboard focus, background tabs, and reduced-motion preferences pause auto-rotation. The arrows and 01/02 buttons always allow manual selection. Keyboard left/right arrows also operate the carousel when its controls are focused.

© 2026 Oboro Research. Site source and all visual assets supplied for this project. Review third-party obligations before reuse or redistribution.

## Public vs. private repositories

Keep this site in a public repository (`oboro-research-site`), and keep detailed TANUK design files in a separate **private** repository (`tanuk-development`). Review all files before committing; public Git history may preserve accidentally published assets. See `PUBLISHING_GUIDE.md` for the security-first publishing process.
