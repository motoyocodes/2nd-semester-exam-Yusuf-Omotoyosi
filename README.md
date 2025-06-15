# React + Vite

# My To-Do App project description

Welcome to **My To-Do App**, a task management tool built with React and TanStack libraries. Easily create, manage, edit, and delete your tasks — all in a clean and intuitive interface.

## key Features

- Create new to-dos
- Edit existing to-dos
- Delete to-dos
- Mark tasks as complete or incomplete
- Search functionality
- Pagination
- Filter by completion status
- Responsive UI with modern design

## Installation and Setup Instructions

Follow these steps to get the project up and running on your local machine:

```bash
git clone https://github.com/motoyocodes/2nd-semester-exam-Yusuf-Omotoyosi.git
cd 2nd-semester-exam-Yusuf-Omotoyosi
then npm install
then npm run dev
then go to http://localhost:5173


##  Available scripts and commands
npm run dev      # to Start development server
npm run build    # to Create production build
npm run preview  # t Preview production build


##  Technology Stack

| Technology       Description

| React            Frontend library                           |
| TanStack Router  Client-side routing
| TanStack Query    Data fetching and caching
| Tailwind CSS      Styling and responsiveness
| React Icons       UI Icons



##  Architectural Decisions

- **Component-Based Design**: Pages and logic split into reusable components (`TodoForm`, `MyTodoList`, etc.)
- **Separation of Concerns**: API logic is isolated inside `/api/` files.
- **Client-Side Routing**: TanStack Router handles navigation.
- **State Management**: Global data with `useQuery` (TanStack Query) and local UI state with `useState`.


 ## API Documentation
This app interacts with a mock API to

GET /todos – Fetch a to-do

GET /todos/:id – Fetch all to-dos

PUT /todos/:id – Update a to-do

POST /todo  - Post a  new to-do

DELETE /todos/:id – Delete a to-do

## Screenshots

## Home page
src/assets/screenshots/mainpage.png

##TodoList

src/assets/screenshots/todopage1.png
src/assets/screenshots/todopage2.png

## todo details

src/assets/screenshots/a-todo.png

## GIF

src/assets/GIF/my Todo.gif

## not found page

src/assets/screenshots/notfound page.png


## Known Issues
Hard to work with the API especially with how to post new todo.

No user authentication.

Localstorage could not work properly.


## Future Improvements
Add user login and signup

Integrate real backend so it is easier to work with API

Improve accessibility

Better API (preferrably one in english)


```
