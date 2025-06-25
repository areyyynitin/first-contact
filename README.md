Contact Us Section – How It Was Built
This Contact Us section is built using React and Tailwind CSS. It features a responsive layout with an image and text side-by-side on larger screens and stacked vertically on smaller screens.

Features
Responsive layout using flex-col md:flex-row

Tailwind CSS utility classes for layout, spacing, typography, and responsiveness

Smooth and clean design with image and text alignment

Optimized for all screen sizes

Sure! Here's the full setup command and steps to create a **Vite + React + Tailwind CSS + React Icons** project using `npm`.

---

## ✅ Step-by-Step Setup

### 1. **Create Vite Project with React**

```bash
npm create vite@latest my-app -- --template react
```

> Replace `my-app` with your desired project name.

---

### 2. **Move into the project folder**

```bash
cd my-app
```

---

### 3. **Install dependencies**

```bash
npm install
```

---

### 4. **Install Tailwind CSS**

Follow the official Tailwind installation for Vite:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

### 5. **Configure Tailwind**

Edit `tailwind.config.cjs` or `tailwind.config.js` and add the content path:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### 6. **Add Tailwind to your CSS**

In `src/index.css`, replace everything with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Then make sure `index.css` is imported in `main.jsx`:

```js
import './index.css'
```

---

### 7. **Install React Icons**

```bash
npm install react-icons
```

---

### 8. **Start your dev server**

```bash
npm run dev
```

---

You're now ready to use:

* Tailwind utility classes
* React Icons like:

  ```jsx
  import { FaSearch } from 'react-icons/fa';
  ```

