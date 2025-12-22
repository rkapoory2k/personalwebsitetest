# Personal Website - MVP

## Goal
Get a functional, visually polished single-page website live with the core sections. Focus on quality over quantity.

---

## MVP Scope

### ✅ Include

| Section | What's In |
|---------|-----------|
| **Hero** | Name, one-liner tagline, call-to-action button (scroll to projects or contact) |
| **About** | 2-3 paragraphs about you, list of 5-8 key skills/technologies |
| **Projects** | 3 project cards (title, description, tech tags, link) |
| **Contact** | Simple form (name, email, message) with validation, 2-3 social links |
| **Navigation** | Fixed header with smooth scroll links |

### ❌ Defer to Later

- Profile photo (can use placeholder or skip)
- Project thumbnails/screenshots
- Dark/light theme toggle
- Project filtering
- Typing animations
- Scroll-triggered animations
- Back-to-top button
- Hamburger menu (can use simple horizontal nav that stacks on mobile)

---

## MVP Tech

```
HTML  →  Semantic structure, single index.html
CSS   →  Custom styles, CSS variables for theming, flexbox/grid, basic responsive
JS    →  Smooth scroll, form validation, simple hover states
```

---

## MVP File Structure

```
/
├── index.html      # Everything in one file initially
├── styles.css      # All styles
├── main.js         # Minimal JS
└── README.md       # Basic project info
```

*Keep it flat and simple. Can reorganize into folders later.*

---

## MVP Checklist

### Structure (HTML)
- [ ] Navigation with 4 links (Hero, About, Projects, Contact)
- [ ] Hero section with name + tagline + CTA button
- [ ] About section with bio text + skills list
- [ ] Projects section with 3 hardcoded project cards
- [ ] Contact section with form + social links
- [ ] Footer with copyright

### Styling (CSS)
- [ ] CSS reset/normalize
- [ ] Define color palette as CSS variables
- [ ] Typography (2 fonts max: heading + body)
- [ ] Layout with flexbox/grid
- [ ] Basic responsive breakpoints (mobile, tablet, desktop)
- [ ] Hover states for buttons/links/cards

### Interactivity (JS)
- [ ] Smooth scroll to sections on nav click
- [ ] Form validation (required fields, email format)
- [ ] Form submit shows success message (no actual sending)

---

## Definition of Done

The MVP is complete when:
1. All 4 sections are visible and styled
2. Navigation works (smooth scroll)
3. Site looks good on mobile AND desktop
4. Contact form validates input and shows feedback
5. You'd be comfortable sharing the URL with someone

---

## Time Estimate

| Task | Estimate |
|------|----------|
| HTML structure | 30 min |
| CSS styling | 1-2 hours |
| JavaScript | 30 min |
| Testing & polish | 30 min |
| **Total** | **~3-4 hours** |

---

## Next Steps After MVP

1. Add project images/thumbnails
2. Add profile photo
3. Implement dark/light toggle
4. Add scroll animations
5. Improve mobile nav (hamburger menu)
6. Connect contact form to backend (Formspree, Netlify Forms, etc.)

