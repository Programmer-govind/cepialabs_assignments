# Student Management Dashboard

A React application for managing students, built with Vite, Redux Toolkit, and React Router.

## Features

- **Navbar**: Navigation with active route highlighting and favorites count.
- **Home Page**: Welcome message, theme switcher (light/dark mode), and motivational quote.
- **Students Page**: Fetches student data from JSONPlaceholder API, displays in cards with options to view profile or add to favorites. Includes loading and error states.
- **Student Details Page**: Dynamic route to view individual student details, with add to favorites and back button.
- **Favorites Page**: Manage favorite students with remove and clear all options.
- **About Page**: Static information about the project.
- **Persistent Storage**: Favorites and theme preferences are saved to localStorage for persistence across sessions.

## Technologies Used

- React
- Redux Toolkit
- React Router
- Axios
- Vite

## Installation

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev` to start the development server.

## API

Uses JSONPlaceholder for mock student data: https://jsonplaceholder.typicode.com/users
