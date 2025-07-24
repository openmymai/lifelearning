<div align="center">
  <a href="https://www.buymeacoffee.com/maicmi" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me a Coffee" height="45">
  </a>
  <br/>
  <small>If you found this project or the code snippets helpful, consider supporting my work!</small>
</div>

<br/>

# Lifelearning - A Modern Next.js Website & Code Snippet Hub

This repository contains the source code for the **Lifelearning** website, a modern, responsive site built with Next.js and Bootstrap, based on a template from BootstrapMade.

More than just a demo, this project also serves as a practical guide and a collection of useful React Hooks and solutions to common problems encountered in Next.js development.

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🚀 Live Demo

Check out the live version deployed on Vercel:

**[https://lifelearning.vercel.app](https://lifelearning.vercel.app)**

---

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/)
-   **UI Library**: [React](https://reactjs.org/)
-   **Styling**: [Bootstrap](https://getbootstrap.com/)
-   **Animations**: [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
-   **Typing Effect**: [Typed.js](https://github.com/mattboldt/typed.js)

---

## 🧠 Useful Next.js Patterns & Hooks

This repository contains practical solutions and custom hooks that you can adapt for your own projects.

### 1. `useWindowSize` Hook

A common need is to get the current size of the browser window. This hook returns an object containing the window's width and height. If executed server-side, the values will be `undefined` to prevent hydration errors.

**Usage:**
```jsx
import { useWindowSize } from './hooks/useWindowSize';

function MyComponent() {
  const size = useWindowSize();

  return (
    <div>
      Window Dimensions: {size.width}px / {size.height}px
    </div>
  );
}
```

**Hook Implementation:**
```jsx
import { useState, useEffect } from "react";

// Hook
export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}
```

### 2. How to Solve "window is not defined" Errors

Next.js pre-renders pages on the server, where the `window` object does not exist. This causes errors if you try to access it directly in your component's top-level scope. Here are three effective solutions:

#### Solution A: Check with `typeof`

This is a quick check for one-off situations. It works because `typeof` can check a variable's type without trying to evaluate it, thus avoiding a `ReferenceError`.

```jsx
if (typeof window !== "undefined") {
  // This code will only run on the client-side
  window.addEventListener("scroll", () => {
    console.log("scrolling!");
  });
}
```

#### Solution B: The `useEffect` Hook (Recommended)

The standard React way to handle browser-only logic. The `useEffect` hook only runs on the client-side after the component has mounted.

```jsx
import React, { useEffect } from "react";

export default function ScrollListener() {
  useEffect(() => {
    function onScroll() {
      console.log("scroll!");
    }

    window.addEventListener("scroll", onScroll);

    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []); // The empty dependency array ensures this runs only once on mount

  return null; // This component doesn't render anything
}
```

#### Solution C: Dynamic Imports

This is a powerful Next.js feature. You can dynamically import a component with Server-Side Rendering (SSR) turned off. This is perfect for components that are entirely client-side and depend heavily on browser APIs.

```jsx
// pages/index.js
import dynamic from "next/dynamic";

const ScrollListener = dynamic(
  () => import("../components/ScrollListener"),
  { ssr: false }
);

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ScrollListener />
    </div>
  );
}
```
```jsx
// components/ScrollListener.js
// This code now runs only on the client, so direct access is safe.
window.addEventListener("scroll", () => console.log("scroll!"));

export default function ScrollListener() {
  return null;
}
```
