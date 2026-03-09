# Lotto Generator Project Blueprint

## Overview
A modern, responsive Lotto Number Generator with theme support (Dark/White modes), built using framework-less web standards (Web Components, modern CSS, ES Modules).

## Detailed Outline
### Features
- **Lotto Generation:** Generates 6 unique random numbers between 1 and 45.
- **Theme Toggle:** Switch between Light (White) and Dark modes with smooth transitions.
- **Partnership Inquiry:** A dedicated contact form powered by Formspree for business inquiries.
- **Modern UI:** Vibrant colors (Lotto ball colors), interactive buttons, and depth using shadows.
- **Responsive Design:** Adapts to mobile and desktop viewports.

### Design System
- **Colors:** Using `oklch` for perceptually uniform colors.
  - Light Mode: High lightness, low chroma backgrounds.
  - Dark Mode: Low lightness backgrounds.
  - Lotto Balls: Thematic colors (1-10: Yellow, 11-20: Blue, 21-30: Red, 31-40: Gray, 41-45: Green).
- **Forms:** Clean inputs with focus states and validation feedback.

### Technical Implementation
- **Web Components:** `<lotto-generator>` custom element for encapsulation.
- **Formspree Integration:** Secure form handling via external endpoint.
- **CSS Variables:** For theme-switching and consistent styling.
- **ES Modules:** Organized JavaScript functionality.

## Current Plan & Steps
1.  **Initialize `blueprint.md`:** (Completed)
2.  **Update `index.html`:** Setup the base structure and link assets. (Completed)
3.  **Update `style.css`:** Define modern CSS layers, theme variables using `oklch`, and global styles. (Completed)
4.  **Update `main.js`:** 
    - Implement theme switching logic.
    - Create the `<lotto-generator>` Web Component.
    - Implement lotto number generation logic (1-45). (Completed)
5.  **Add Partnership Page:**
    - Create `contact.html` with the Formspree form.
    - Add navigation to `index.html`.
    - Update `style.css` for form styling.
6.  **Finalize & Push:** Commit changes and push to GitHub repository.
