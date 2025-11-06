# 🖱️ Click-to-Focus Input

A simple React project that lets you focus an input box by clicking a button — built as part of my **React Mastery Roadmap**.

---

## 🧠 Introduction

When building React apps, sometimes we need to **interact directly with the DOM** — for example, focusing an input, playing a video, or scrolling to a section.  
This project was created to understand and practice how to do that using the **`useRef` Hook**.

I built this project to:
- Learn how to use `useRef` to access real DOM elements in React.
- Understand the difference between `useRef` and `useState`.
- Practice writing clean, functional components.

---

## ⚙️ Tech Stack

- **React** (Functional Components + Hooks)
- **JavaScript (ES6+)**

---

## 🚀 Features

- Click a button to automatically focus on the input box.  
- Demonstrates how to use the `useRef` hook to directly manipulate DOM elements.  
- Simple, minimal, and easy to understand for beginners.

---

## 💡 What I Learned

1. **`useRef` Basics:**  
   - It gives a special “box” (`.current`) that holds a value between re-renders.  
   - Perfect for accessing DOM elements directly.

2. **DOM Manipulation in React:**  
   - Using `ref={myRef}` connects a React element to a `useRef`.  
   - You can then call DOM methods like `.focus()` safely.

3. **When to use `useRef` vs `useState`:**  
   - `useState` → when you need to update the UI on change.  
   - `useRef` → when you just need to remember or touch something in the DOM, without re-rendering.

---

## How to Run Locally

# 1. Clone this repository:#
```bash
git clone https://github.com/yourusername/click-to-focus-input.git
```

# 2 Go to the project folder:#
```bash
cd click-to-focus-input
```


# 3. Install dependencies:#
```bash
npm install
```


# 4. Start the development server:#
```bash
npm start
```

