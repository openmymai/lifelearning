# Lifelearning, Modern NextJS website
- NextJS
- TypedJS
- AOS
- Bootstrap
- Bootstrap Icon
- Boxicons
- Glightbox

### Deploy on Vercel [https://lifelearning.vercel.app](https://lifelearning.vercel.app)

# How to solve "window is not defined" errors in React and Next.js 

Next.js is a React framework with pre-rendering abilities. This means that for every page, Next.js will try to generate the HTML of the page for better SEO and performance.

This is why, if you're trying to do this:<br>
<img width="610" alt="Screenshot 2023-02-13 at 3 18 09 PM" src="https://user-images.githubusercontent.com/15844801/218406676-5d389ebf-4362-47f8-979b-9baa2b65fff5.png">
<br>
Then it will fail with "ReferenceError: window is not defined":<br>
<img width="561" alt="Screenshot 2023-02-13 at 3 18 18 PM" src="https://user-images.githubusercontent.com/15844801/218406736-dc5190eb-f6e9-42ab-80cd-afda4def9ad6.png">
<br>
Because in the Node.js world, window is not defined, window is only available in browsers.

There are three ways to solve that:
### 1. First solution: typeof 
While you can't use:<br>
<img width="611" alt="Screenshot 2023-02-13 at 3 18 36 PM" src="https://user-images.githubusercontent.com/15844801/218406863-90c29c7b-7bdf-4c9e-9fbb-899929ed6af9.png"><br>
Because this would try to compare a non-existent variable (window) to undefined, resulting in the mighty "ReferenceError: window is not defined". You can still use:<br>
<img width="613" alt="Screenshot 2023-02-13 at 3 18 44 PM" src="https://user-images.githubusercontent.com/15844801/218406954-a17a8df0-3d7c-4eeb-aae6-074748b6228a.png"><br>
Because typeof won't try to evaluate "window", it will only try to get its type, in our case in Node.js: "undefined".

### 2. Second solution: the useEffect hook
The "React" way to solve this issue would be to use the useEffect React hook. Which only runs at the rendering phase, so it won't run on the server.

Let's update our scroll.js component:<br>
<img width="611" alt="Screenshot 2023-02-13 at 3 25 11 PM" src="https://user-images.githubusercontent.com/15844801/218407161-308b9975-083a-4d96-8305-a1efb4e27d64.png"><br>
What we've done here is to turn our initial JavaScript file into a true React component that then needs to be added to your React tree via:<br>
<img width="612" alt="Screenshot 2023-02-13 at 3 28 04 PM" src="https://user-images.githubusercontent.com/15844801/218407765-a3587644-9f68-43a6-85b7-81301bffa832.png"><br>
**Tip:** The way we use useEffect in the example is to register and unregister the listeners on mount/unmount. But you could also just register on mount and ignore any other rendering event, to do so you would do this:<br>

<img width="611" alt="Screenshot 2023-02-13 at 3 29 22 PM" src="https://user-images.githubusercontent.com/15844801/218408120-c9846225-4d65-4cb2-a93d-692aa4af7c91.png"><br>
### 3. Third solution: dynamic loading

A different solution is to load your Scroll component using dynamic imports and the ```srr: false``` option. This way your component won't even be rendered on the server-side at all.

This solution works particularly well when you're importing external modules depending on ```window```.<br>
<img width="613" alt="Screenshot 2023-02-13 at 3 32 29 PM" src="https://user-images.githubusercontent.com/15844801/218408704-440164c2-c1a9-4ec8-8a62-4b7180d753d4.png"><br>
<img width="611" alt="Screenshot 2023-02-13 at 3 32 40 PM" src="https://user-images.githubusercontent.com/15844801/218408767-a0b27265-4293-4405-a505-2adfd9549203.png"><br>
If you do not need the features of useEffect, you can even remove its usage completely as shown here.

**Finally,** you could also load your ```Scroll``` component only in _app.js if what you're trying to achieve is to globally load a component and forget about it (no more mount/unmount on page change).

