# Grafterr Landing Page 

A modern, fully responsive landing page built using React, focused on clean UI design, reusable components, and dynamic data rendering.

This project demonstrates:

- Component-based architecture  
- Dynamic content rendering from JSON  
- Custom React hooks  
- Responsive UI design  
- Carousel functionality  



## Tech Stack

- React 18 (Functional Components + Hooks)  
- Vite (Fast development environment)  
- CSS (Custom styling, no frameworks)  



##  Project Structure

src/
  components/
    Carousel.jsx
    ProductCard.jsx
    Skeleton.jsx

  sections/
    HeroSection.jsx
    FeaturesSection.jsx

  hooks/
    useContent.js
    useCarousel.js

  services/
    api.js

  data/
    content.json

  styles/
    global.css

  App.jsx
  main.jsx



## Features

### Hero Section
- Gradient-highlighted headline  
- Supporting description text  
- Call-to-action button  
- Fully responsive layout  



### Features Section
- Section title with gradient accent  
- Informational subtitle with divider  
- Product carousel  

Products showcased:
- Point of Sale  
- Self-service  
- Kitchen Management  


### Carousel Functionality
- Responsive behavior:
  - Desktop → 3 items  
  - Tablet → 2 items  
  - Mobile → 1 item  
- Smooth 300ms sliding transition  
- Previous / Next navigation  
- Disabled controls at boundaries  



### Dynamic Data
- Content loaded from `content.json`  
- Simulated API calls using delay  
- No hardcoded UI content  



### Loading & Error Handling
- Skeleton loading UI  
- Error state with retry functionality  



### Responsive Design
- Mobile-first approach  
- Breakpoints:
  - 375px (mobile)  
  - 768px (tablet)  
  - 1024px+ (desktop)  



## Data Flow

- Content source: `src/data/content.json`  
- API simulation: `src/services/api.js`  
- Data fetching handled via custom hook: `useContent()`  



## Key Concepts

- React Hooks (`useState`, `useEffect`)  
- Custom Hooks (`useContent`, `useCarousel`)  
- Component composition  
- CSS Flexbox  
- Responsive design principles  



## Getting Started

### 1. Clone the repository
git clone https://github.com/CHITTIBOINA-ANITHA/GrafterLanding

### 2. Navigate to project folder
cd grafterr-landing

### 3. Install dependencies
npm install

### 4. Run development server
npm run dev

### 5. Open in browser


## Live Demo

(Add your deployed link here)

---

## Screenshots

![Full Page](./screenshots/fullpage.png)


 



