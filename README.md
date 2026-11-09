# Meetup App
A small React app for browsing, adding and favoriting meetups, built while following a React course.

## Features
- View a list of meetups loaded from a database
- Add a new meetup through a form
- Mark meetups as favorites and view them on a separate page
- Navigation between pages without reloading

## Tech stack
- React (functional components and hooks)
- React Router for routing
- Firebase Realtime Database for storing meetups
- CSS Modules for styling

## Concepts practiced
- Routing and navigation (`Routes`, `Link`)
- Forms with `useRef`
- State with `useState` and fetching data with `useEffect`
- Global state with React Context (favorites)
- Sending and receiving data with `fetch` (GET and POST)

## Getting started
Requires Node.js.

```bash
git clone https://github.com/Viktoria-Iudina/meetup-app.git
cd meet-app
npm install
npm start
```

The app runs at http://localhost:3000.

## Database
Meetups are stored in a Firebase Realtime Database. To use your own, create a Firebase project and replace the database URL in the `fetch` calls (in `NewMeetup.js` and `AllMeetups.js`).

## Status
Learning project, not intended for production.
