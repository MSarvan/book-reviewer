# Book Review Application

## Overview

The Book Review Application allows users to browse, search, and review books. The application features a responsive user interface for interacting with book listings and detailed book information, including user reviews. The backend provides a RESTful API for managing book data and user reviews.

## Features

- Browse a grid of book covers with titles and authors.
- Search for books by title or author.
- View detailed information about a book, including reviews and ratings.
- Submit user reviews with a rating (1-5 stars) and a comment.
- Client-side and server-side validation for review submission.

## Technologies Used

- Frontend: React, Axios, React Router, SCSS
- Backend: Node.js, Express, MongoDB, Mongoose
- Other: Toastify for notifications

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB Atlas account (or local MongoDB instance).

### Setup

1. **Clone the repository:**

   git clone https://github.com/MSarvan/book-review-app.git
   cd book-review-app

### Install dependencies

# For backend
cd book-review-server
npm install

# For frontend
cd ../book-review-app
npm install

## Start the backend server: 
cd book-review-server
npm run dev
The backend server will run on http://localhost:3005

## Start the backend server: 
cd ../book-review-app
npm start
The frontend development server will run on http://localhost:3000

### API Endpoints

## Books
GET /v1/books: Retrieve a list of all books.
GET /v1/books/:id: Retrieve details of a specific book by ID.
POST /v1/reviews/:id: Submit a review for a specific book.

## Reviews
Reviews are embedded within the book documents and can be accessed through the book endpoints.

## Project Structure

book-review-app/
├── book-review-server/
│   ├── controllers/
│   │   └── bookController.js
│   ├── models/
│   │   └── book.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── app.js
│   ├── server.js
│   └── .env
├── book-review-app/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookInfo.js
│   │   │   ├── BookList.js
│   │   │   ├── ReviewForm.js
│   │   │   └── LoadingInfo.js
│   │   ├── styles/
│   │   │   └── BookInfo.scss
│   │   ├── App.js
│   │   └── index.js
│   └── public/
│       └── index.html
└── README.md

