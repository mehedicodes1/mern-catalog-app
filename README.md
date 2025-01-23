# Catalog Website using MERN Stack

This project is a catalog website built using the MERN stack: MongoDB, Express, React, and Node.js. 

## Features

- User authentication and authorization
- CRUD operations for catalog items (Create, Read, Update, Delete)
- Responsive design for different screen sizes
- Search and filter functionality

## Technologies Used

- **MongoDB**: Database for storing catalog items and user information.
- **Express**: Web framework for Node.js used for building the backend API.
- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for building the server-side of the application.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/mehedicodes1/mern-catalog-app.git
    cd mern-catalog-app
    ```

2. **Install backend dependencies:**
    ```sh
    cd backend
    npm install
    # or yarn install
    ```

3. **Install frontend dependencies:**
    ```sh
    cd ../frontend
    npm install
    # or yarn install
    ```

### Configuration

Create a `.env` file in the `backend` folder and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
