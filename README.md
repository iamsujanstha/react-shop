# React Vite Project with JSONPlaceholder API

## Overview
This project is a React application bootstrapped with Vite. It fetches data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) and displays it dynamically. The project now includes an **infinite scrolling** feature implemented using the **Intersection Observer API**.

## Features
- **React with Vite** for fast development and build performance.
- **Fetch and display data** from JSONPlaceholder API.
- **Infinite Scrolling** using Intersection Observer for seamless content loading.
- **Optimized performance** with lazy loading and API pagination.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/iamsujanstha/react-shop.git
   ```

2. Navigate to the project directory:
   ```sh
   cd react-shop
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
- Open `http://localhost:5173/` in your browser.
- Scroll down to the bottom to trigger the infinite scroll.
- More data will be loaded dynamically as you reach the bottom.

## Implementation Details

The infinite scrolling is achieved using the **Intersection Observer API**. When the user scrolls near the bottom of the page, a new set of data is fetched from the JSONPlaceholder API.

Example code snippet:

```jsx
import { useState, useEffect, useRef } from "react";

const InfiniteScrollComponent = () => {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const observerRef = useRef(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`)
            .then((response) => response.json())
            .then((newItems) => setItems((prevItems) => [...prevItems, ...newItems]));
    }, [page]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            {items.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
            <div ref={observerRef} style={{ height: 20, background: "transparent" }}></div>
        </div>
    );
};

export default InfiniteScrollComponent;
```

## Contributions
Feel free to fork and submit pull requests to improve the project!

## License
This project is licensed under the MIT License.

