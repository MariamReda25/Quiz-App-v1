# 🧠 Quiz App (useReducer Practice)

This project is a **Quiz Application** built as a **practice project after finishing the Advanced `useReducer` section** in  
**The Ultimate React Course** by _Jonas Schmedtmann_ on Udemy.

The main goal of this project is to **deeply understand complex state management using `useReducer`**, action-driven logic, and clean component structure in React.

---

## 🚀 Project Purpose

- Practice **advanced `useReducer` patterns**
- Learn how to manage **complex, interrelated state**
- Apply **action-based state transitions**
- Build a realistic mini-app instead of isolated examples
 

---

## 🧩 Features

- Select quiz subject
- Display questions dynamically
- Select and submit answers
- Navigate between questions
- Calculate and display final score
- Restart the quiz
- Light / Dark theme toggle
- Loading & error handling states

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- `useReducer`
- `useEffect`
- CSS

---

## 🧠 State Management

This project uses **`useReducer`** instead of multiple `useState` hooks to manage:

- Quiz data
- Application status (`loading`, `ready`, `start`, `finish`, `error`)
- Current question index
- Selected answer
- Score calculation
- Theme (light / dark)

### Why `useReducer`?

- Centralized state logic
- Predictable state transitions
- Easier debugging
- Better scalability for complex UI logic

---

## 🔁 Reducer Actions

Examples of handled actions:

- `data/receive`
- `subject/select`
- `option/select`
- `btn/submit`
- `btn/next`
- `theme/toggle`
- `again`
- `error`

Each action represents a **clear user interaction or state transition**.

---

---

## 🎓 What I Learned

- When to prefer `useReducer` over `useState`
- How to model UI behavior using actions
- Writing cleaner and more maintainable reducers
- Separating UI components from state logic
 
---

## 📌 Notes

- This project is for **learning and practice purposes**
- Built after completing **Advanced `useReducer`** section
- Inspired by patterns taught in *The Ultimate React Course*

  
