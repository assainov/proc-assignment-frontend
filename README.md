/\*

# Procurified Interview Assignment - Frontend

This project is a frontend assignment for the Procurified interview process. It leverages modern web development technologies to create a robust and efficient application.

## Technologies Used:

- **React**: A popular JavaScript library for building user interfaces, particularly single-page applications where you can create reusable UI components.
- **Vite**: A build tool that provides a faster and leaner development experience for modern web projects. It offers instant server start, lightning-fast HMR (Hot Module Replacement), and optimized builds.
- **React Router**: A standard library for routing in React applications. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps UI in sync with the URL.
- **Zustand**: A small, fast, and scalable state-management solution for React. It provides a simple API and is easy to integrate into any React project.
- **Cypress**: Runs on every push to remote Git repo. An end-to-end testing framework that aims to make testing easier and more reliable. It provides a comprehensive suite of tools for writing, running, and debugging tests.
- **Jest + React Testing Library**: Jest is a delightful JavaScript testing framework with a focus on simplicity. React Testing Library is a set of helpers that let you test React components without relying on their implementation details.
- **Eslint + Prettier + Husky + Lint-Staged**: A combination of DevX technologies aimed at standardizing the team code to use the same styling as well as to prevent pushing the buggy code to production. Every commit and push have preventative hooks to lint and test the code.

## Prerequisites

- Good to have Node version 20 (LTS)
- Backend server running at `http://localhost:3000`
- Otherwise check `.env.example` file, rename it to `.env.local`, and specify a different API host

## Getting Started:

To get started with the project, follow these steps in your terminal:

1. **Install Dependencies**:

```sh
npm install
```

2. **Build the Project**:

```sh
npm run build
```

3. **Preview the Build**:

```sh
npm run preview
```

After running these commands, visit [http://localhost:4173](http://localhost:4173) in your browser to see the application in action.

4. **(Optional) Continuous Integration**:

Stop above process, and run the following commands, simulating the CI pipeline (ensure the backend is up-and-running):

```sh
npm run test && npm run build && npm run cy:ci
```

5. **(Optional) Observe E2E tests in the browser**:

```sh
npm run cy:e2e - then click on `spec.cy.js` in the opened window.
```

6. **Start coding**:

```sh
npm run dev
```

6. **Write more E2E tests**:

```sh
npm run dev && npm run cy:open-e2e
```

## Features

- **Search with Autocomplete**: Allows users to search for people from the SWAPI engine through our caching-backed layer, providing suggestions as they type.
- **SWAPI Result Box**: Displays detailed information about a selected SW character from the autocomplete suggestions.
- **User Registration and Login**: Enables users to create an account and log in to the search feature.

## Project Structure

All source code is located in the `src` directory, which is divided into the following subdirectories:

```
src
├── services
├── state
└── views
```

- **services**: Contains all the service-related code, such as API calls and utility functions.
- **state**: Manages the application's state using Zustand.
- **views**: Contains the UI components and pages. This directory is structured to accommodate a large website with many components.

State management is intentionally minimal for such a small application. Most of the UI logic is co-located inside the `views` folder as it's tightly coupled with the UI.
