# Patisserie 4 You

**Selected Client Work**

A responsive bakery website developed around client content, visual identity and customer-facing requirements.

## Overview

Patisserie 4 You is a single-page website for a Brighton bakery and dining business. It presents the menu, business story, mission, areas of expertise, customer review and contact information in a visually led layout.

Visitors can move between page sections using desktop or mobile navigation, filter menu items by category and save favourites in their browser.

## Live website

[View the live Patisserie 4 You website](https://bakeryprojectapp.netlify.app/)

## Key features

- Responsive single-page layout for desktop, tablet and mobile screens
- Desktop and mobile navigation with labelled, keyboard-operable controls
- Category-based menu filtering
- Favourite menu items with browser-local persistence
- Reusable, data-driven content sections and menu cards
- Animated content presentation with reduced-motion support
- Responsive image and video presentation
- Keyboard-operable links, buttons and menu controls
- Lazy loading for appropriate below-the-fold images

## Technical implementation

The interface is built from reusable React components composed in `App.jsx`. Shared navigation, menu, contact and social content is held in a central constants module and passed into components through props where appropriate.

React state manages menu filters, mobile navigation and favourite controls. Favourite identifiers are stored in `localStorage`, with defensive handling for malformed or unavailable browser storage. Tailwind CSS utilities provide the responsive layout and visual styling, while Framer Motion supports section transitions and user reduced-motion preferences.

Vite provides the development and production build pipeline. ESLint checks the JavaScript and JSX source for code-quality issues.

## Page structure

The active page is composed of the following sections:

1. Hero
2. Our Menu
3. About Patisserie 4 You
4. Our Mission
5. Our Expertise
6. Customer review
7. Contact Us
8. Footer and social links

The application currently uses section-based navigation rather than multiple routes.

## Accessibility and interaction considerations

The project includes practical accessibility improvements rather than a claim of formal compliance:

- Semantic main, navigation and section landmarks
- One meaningful page-level heading
- Native links and buttons for interactive controls
- Visible keyboard focus styles
- Mobile-menu labels, expanded state and controlled-region attributes
- Escape-to-close behaviour with focus returned to the menu control
- Pressed-state information for filters and favourites
- Contextual alternative text, with empty alternatives for decorative images
- Reduced-motion handling for animation, scrolling and automatically playing video

## Responsive design

Representative layouts have been manually verified at approximately:

- 1280 × 800 for desktop
- 768 × 1024 for tablet
- 375 × 812 for mobile

These checks cover representative viewport sizes rather than exhaustive device certification.

## Technology stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- ESLint
- Netlify

## Local development

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the lint checks:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project structure

```text
src/
|-- assets/       Images and video used by active sections
|-- components/   Reusable page sections and menu cards
|-- constants/    Shared navigation and content data
|-- utils/        Browser-local favourite persistence
|-- App.jsx       Active single-page composition
|-- main.jsx      React entry point
`-- index.css     Tailwind layers and global styles
```

## Deployment

The production website is hosted on Netlify. Running `npm run build` creates the Vite production output in `dist/` for deployment.

## Current scope and limitations

- The project is a client-side, single-page website with no user accounts or server-side persistence.
- Favourites are stored in the visitor's current browser.
- Large image and video assets remain an opportunity for future performance optimisation.
- No automated test suite is currently configured; the project uses linting, production builds and manual interaction checks.
