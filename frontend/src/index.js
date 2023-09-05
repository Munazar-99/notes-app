// Import necessary dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './pages/Homepage';
import Notespage from './pages/Notespage';

// Create a router configuration
const router = createBrowserRouter([
  {
    path: "/",              // Define the path for the Homepage component
    element: <Homepage />, // Render the Homepage component
  },
  {
    path: "/note/:id",     // Define the path for the Notespage component with a parameter 'id'
    element: <Notespage />, // Render the Notespage component
  },
  {
    path: "/create",       // Define the path for creating a note
    element: <Notespage />, // Render the Notespage component for note creation
  },
]);

// Create a React root and render the RouterProvider with the router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
