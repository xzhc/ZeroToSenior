# The 6-Stage Web Development Lifecycle

A practical, project-driven guide to developing a personal website from scratch to production.

---

## Lifecycle Overview

```text
1. Requirements & Scope ➔ 2. Setup & Skeleton ➔ 3. Styling & Responsive Design ➔ 4. Interactivity ➔ 5. Verification ➔ 6. Deployment & Hosting
```

---

## 1. Requirements & Scope (What & Why)

Before writing code, clearly define what the website needs to achieve and who will visit it.

* **Define Purpose**: State whether the site is a portfolio, personal brand landing page, blog, or resume.
* **Determine Core Sections**:
  * **Hero / Introduction**: Name, tagline, and a brief summary of what you do.
  * **About Me**: Background, interests, and professional journey.
  * **Featured Projects**: List of key projects with descriptions, tech stacks, and links.
  * **Skills & Tools**: Core technical strengths and languages/frameworks.
  * **Contact & Links**: Email, GitHub, LinkedIn, or social profiles.
* **Gather Assets**: Profile avatar, project screenshots, and resume PDF (if applicable).

---

## 2. Project Setup & Semantic Skeleton (HTML)

Establish the project repository and write semantic, accessible HTML structure before adding styles.

* **Repository Setup**: Create a dedicated project directory with Git version control.
* **Semantic Hierarchy**:
  * `<header>`: Site logo, branding, and `<nav>` navigation links.
  * `<main>`: Core page content organized into distinct `<section>` blocks (e.g., `#about`, `#projects`, `#contact`).
  * `<footer>`: Copyright, auxiliary links, and back-to-top button.
* **Accessibility Fundamentals**: Use valid heading levels (`<h1>` through `<h3>`), proper list tags (`<ul>`, `<li>`), and `alt` attributes for images.

---

## 3. Visual Styling & Responsive Layout (CSS)

Apply visual design principles to ensure readability, hierarchy, and multi-device support.

* **Design Tokens & Foundation**:
  * Define a clean color palette (primary, background, text, accent).
  * Establish consistent spacing scales (margins, paddings, gap).
  * Configure legible typography (font family, line height, font sizes).
* **Layout Engines**:
  * Use **CSS Flexbox** for 1D alignments (navbars, button groups, card headers).
  * Use **CSS Grid** for 2D page layouts (project galleries, multi-column sections).
* **Responsive Design**:
  * Implement mobile-first media queries (`@media (min-width: 768px)` or `@media (max-width: 768px)`).
  * Ensure touch targets, fonts, and container widths adapt smoothly across mobile, tablet, and desktop screens.

---

## 4. Interactivity & Polish (JavaScript)

Add functional enhancements that improve user experience without overloading the page.

* **Navigation Behavior**: Smooth scrolling to section anchors, sticky navigation bar, and mobile hamburger menu toggle.
* **Theme Switching**: Dark mode / light mode toggle persisted with `localStorage`.
* **Dynamic Content**: Filtering projects by tag or rendering dynamic data if needed.

---

## 5. Verification & Quality Assurance

Test the website thoroughly before publishing.

* **Cross-Browser & Device Testing**: Test across Chrome, Safari, Firefox, and mobile viewports via DevTools.
* **Validation**:
  * Validate HTML and CSS syntax.
  * Check for broken links and missing image paths.
* **Performance & Accessibility Audits**: Run Google Lighthouse to inspect SEO, Accessibility score, and page load speed.

---

## 6. Deployment, Hosting & Maintenance (Go Live)

Publish the website to the internet and establish ongoing maintenance workflows.

* **Static Hosting**: Deploy to platforms such as GitHub Pages, Cloudflare Pages, or Vercel.
* **Domain & Security**: Connect a custom domain (e.g., `yourname.dev`) and ensure HTTPS / SSL encryption is active.
* **Continuous Updates**: Update project listings, articles, and bio as your skills grow.
