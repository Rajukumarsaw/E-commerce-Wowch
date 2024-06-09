# Wowch - E-commerce Website for Watches

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [Contact](#contact)

## Introduction
Wowch is a fully functional e-commerce website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse, search, and purchase a wide variety of watches. The project aims to provide a seamless shopping experience with an intuitive user interface and efficient backend services.
## Features
- User authentication and authorization
- Product Listing
- Product Details & Reviews
- Shopping Cart & Checkout
- Responsive design for mobile and desktop

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payment Gateway**: Stripe

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
- Node.js
- MongoDB
- Stripe
  
### Installation
1. Clone the repository
   ```sh
   git clone https://github.com/Rajukumarsaw/E-commerce-Wowch.git
   cd E-commerce-Wowch
2. Install backend dependencies
   ```sh
   cd backend
   npm install

3. Install frontend dependencies
   ```sh
   cd ../frontend
   npm install

## Configuration
### Backend:
- Create a `.env` file in the backend directory and add the following variables:
   
    ```
    MONGO_URI=your_mongodb_uri
    STRIPE_SECRET_KEY=your_stripe_secret_key
    PORT=8500
    ```

### Frontend:
- Create a `.env` file in the frontend directory and add the following variable:
    ```
    VITE_APP_SERVER_DOMAIN=http://localhost:8500
    VITE_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    ```

## Running the Application
### Start the backend server:

    
      cd backend
      npm run dev
    
### Start the frontend server:
- open new terminal
 
    ```sh
     cd frontend
     npm run dev
 The application should now be running on [http://localhost:5173](http://localhost:5173).


## Contributing
- Contributions are welcome! Please follow these steps:
   1. Fork the repository
   2. Create a new branch (`git checkout -b feature/your-feature`)
   3. Commit your changes (`git commit -m 'Add some feature'`)
   4. Push to the branch (`git push origin feature/your-feature`)
   5. Open a pull request

## Contact
For any inquiries, please contact:
- Raju Kumar: rajukumarsaw184@gmail.com
