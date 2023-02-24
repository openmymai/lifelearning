# Lifelearning, Modern NextJS website
- NextJS
- TypedJS
- AOS
- Bootstrap

### Deploy on Vercel [https://lifelearning.vercel.app](https://lifelearning.vercel.app)

# useWindowSize
A really common need is to get the current size of the browser window. This hook returns an object containing the window's width and height. If executed server-side (no window object) the value of width and height will be undefined.
```
import { useState, useEffect } from "react";

// Usage
function App() {
  const size = useWindowSize();

  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
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

# How to solve "window is not defined" errors in React and Next.js 

Next.js is a React framework with pre-rendering abilities. This means that for every page, Next.js will try to generate the HTML of the page for better SEO and performance.

This is why, if you're trying to do this:<br>
```
window.addEventListener("scroll", function() {
  console.log("scroll!")
});
```
<br>
Then it will fail with "ReferenceError: window is not defined":<br>
<img width="1186" alt="Screenshot 2023-02-13 at 8 06 15 PM" src="https://user-images.githubusercontent.com/15844801/218466180-398ebac3-f341-4156-b4a0-2480c683be7f.png">
<br>
Because in the Node.js world, window is not defined, window is only available in browsers.

There are three ways to solve that:
### 1. First solution: typeof 
While you can't use:<br>
```
if (window !== "undefined") {
  // browser code
}
```
Because this would try to compare a non-existent variable (window) to undefined, resulting in the mighty "ReferenceError: window is not defined". You can still use:
```
if (typeof window !== "undefined") {
  // browser code
}
```
Because typeof won't try to evaluate "window", it will only try to get its type, in our case in Node.js: "undefined".

### 2. Second solution: the useEffect hook
The "React" way to solve this issue would be to use the useEffect React hook. Which only runs at the rendering phase, so it won't run on the server.

Let's update our scroll.js component:<br>
```
import React, { useEffect } from "react";

export default function Scroll() {
  useEffect(function mount() {
    function onScroll() {
      console.log("scroll!");
    }

    window.addEventListener("scroll", onScroll);

    return function unMount() {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return null;
}
```
What we've done here is to turn our initial JavaScript file into a true React component that then needs to be added to your React tree via:<br>
```
import Scroll from "../components/Scroll";

export default function Home() {
  return (
    <div style={{ minHeight: "1000px" }}>
      <h1>Home</h1>
      <Scroll />
    </div>
  );
}
```
**Tip:** The way we use useEffect in the example is to register and unregister the listeners on mount/unmount. But you could also just register on mount and ignore any other rendering event, to do so you would do this:<br>
```
import React, { useEffect } from "react";

export default function Scroll() {
  useEffect(function onFirstMount() {
    function onScroll() {
      console.log("scroll!");
    }
    window.addEventListener("scroll", onScroll);
  }, []);
  return null;
}
```
### 3. Third solution: dynamic loading

A different solution is to load your Scroll component using dynamic imports and the ```srr: false``` option. This way your component won't even be rendered on the server-side at all.

This solution works particularly well when you're importing external modules depending on ```window```.<br>
```
// components/Scroll.js

function onScroll() {
  console.log("scroll!");
}

window.addEventListener("scroll", onScroll);

export default function Scroll() {
  return null;
}

// pages/index.js

import dynamic from "next/dynamic";

const Scroll = dynamic(
  () => {
    return import("../components/Scroll");
  },
  { ssr: false }
);

export default function Home() {
  return (
    <div style={{ minHeight: "1000px" }}>
      <h1>Home</h1>
      <Scroll />
    </div>
  );
}
```
If you do not need the features of useEffect, you can even remove its usage completely as shown here.

**Finally,** you could also load your ```Scroll``` component only in _app.js if what you're trying to achieve is to globally load a component and forget about it (no more mount/unmount on page change).

