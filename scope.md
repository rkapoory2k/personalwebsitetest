# Personal Website - Project Scope

## Overview
A modern, visually distinctive personal website showcasing who you are, your projects, and providing a way for visitors to get in touch.

---

## Pages / Sections

### 1. Hero / Landing
- Eye-catching introduction with your name and tagline
- Smooth scroll navigation to other sections
- Animated entrance effects

### 2. About Section
- Brief biography and background
- Skills/technologies you work with
- Profile photo or avatar
- Personal interests or fun facts

### 3. Projects Section
- Grid or card-based layout showcasing your work
- Each project card includes:
  - Project title
  - Thumbnail/screenshot
  - Brief description
  - Technologies used (tags/badges)
  - Links to live demo and/or source code
- Hover effects and animations for interactivity
- Filterable by category or technology (optional enhancement)

### 4. Contact Section
- Contact form with fields:
  - Name
  - Email
  - Message
- Form validation (client-side JavaScript)
- Success/error feedback UI
- Alternative contact methods (email link, social media icons)

---

## Technical Stack

| Layer | Technology |
|-------|------------|
| Structure | HTML5 |
| Styling | CSS3 (custom, no frameworks) |
| Interactivity | Vanilla JavaScript |
| Backend | None (form will be frontend-only for now) |
| Database | None |

---

## Design Direction

- **Aesthetic**: Bold, modern, and memorable — avoiding generic "AI slop" design
- **Typography**: Distinctive font pairing (e.g., a striking display font for headings, a clean readable font for body)
- **Color Palette**: Cohesive theme with a dominant color and sharp accents
- **Layout**: Single-page scrolling design with clear section breaks
- **Animations**: Smooth scroll, fade-ins, hover effects, staggered reveals on page load
- **Responsive**: Fully mobile-friendly with breakpoints for tablet and desktop

---

## Features & Functionality

### Must Have
- [x] Responsive navigation (hamburger menu on mobile)
- [x] Smooth scrolling between sections
- [x] Project cards with hover effects
- [x] Contact form with client-side validation
- [x] Social media links
- [x] Mobile-first responsive design

### Nice to Have
- [ ] Dark/light theme toggle
- [ ] Project filtering by category
- [ ] Typing animation for tagline
- [ ] Scroll-triggered animations (fade in as you scroll)
- [ ] Back-to-top button

---

## File Structure

```
/
├── index.html          # Main HTML file (single page)
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # All JavaScript functionality
├── assets/
│   ├── images/         # Project thumbnails, profile photo
│   └── icons/          # Social icons, UI icons
├── scope.md            # This file
└── README.md           # Project documentation
```

---

## Milestones

1. **Setup & Structure** - HTML skeleton with all sections
2. **Styling** - Complete CSS with responsive design
3. **Interactivity** - JavaScript for navigation, form validation, animations
4. **Polish** - Final touches, testing, optimization

---

## Out of Scope (For Now)

- Backend server
- Database storage
- Form submission to email/server
- CMS integration
- Blog functionality
- User authentication

---

## Notes

- Contact form will display a success message on submit but won't actually send data (backend integration can be added later)
- Project data will be hardcoded in HTML (can be moved to JSON or CMS later)
- Focus on creating a unique visual identity that stands out

