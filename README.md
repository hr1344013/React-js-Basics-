React Basics Project 🚀

Built with React + Vite

This project is created to understand the fundamentals of React.js using a modern setup powered by Vite. It covers essential React concepts through simple examples and reusable components, making it ideal for beginners.

🛠 Tech Stack

React.js

Vite

JavaScript (ES6+)

CSS

📚 Topics Covered
1. React Tutorial for Beginners

This project starts with the basic structure of a React application:

Understanding components

JSX syntax

File structure in a React + Vite project

Rendering components using main.jsx

2. Card Components

Reusable Card components are created to demonstrate:

Component-based architecture

Reusability of UI elements

Passing data to components using props

Example use case:

Displaying user information

Showing product or profile cards

3. Adding CSS Styles

CSS is used to style components in different ways:

External CSS files

Class-based styling

Styling reusable components

This helps in understanding how React works with traditional CSS.

4. Props (defaultProps Deprecated in React 19+)

Props are used to pass data from parent to child components.

⚠️ Note:
defaultProps is deprecated in React 19+ for function components.
Instead, default values are assigned using function parameters.

Example:

function Card({ title = "Default Title" }) {
  return <h2>{title}</h2>;
}

5. Conditional Rendering

Conditional rendering is used to display UI elements based on conditions such as:

Boolean values

User input

Application state

Examples include:

Showing login/logout messages

Displaying content only when data exists

6. Rendering Lists

Lists are rendered using JavaScript’s map() function.

Key concepts:

Dynamic rendering

Using unique keys for each list item

Displaying arrays of data efficiently

7. Click Events

Event handling is demonstrated using:

onClick handlers

Arrow functions for event callbacks

Examples:

Button click counter

Triggering UI updates on user interaction

8. useState() Hook

The useState hook is used for managing component state.

Concepts covered:

Initializing state

Updating state

Re-rendering components on state change

Example use cases:

Counter application

Toggle buttons

Form input handling

9. onChange Event Handler

The onChange event is used to handle user input from:

Text fields

Input boxes

Form elements

This helps in:

Creating controlled components

Updating state in real time based on user input

📂 Project Setup (React + Vite)
Install Dependencies
npm install

Run Development Server
npm run dev

Build for Production
npm run build

🎯 Purpose of This Project

Learn React from scratch

Understand core React concepts

Practice modern React patterns

Build a strong foundation for advanced React topics

✅ Conclusion

This project serves as a complete beginner guide to React.js, covering core concepts like components, props, state, events, and conditional rendering using a fast and modern React + Vite setup.
