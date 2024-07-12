# BLOGEASY
A MERN stack based Blog web application

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Schema Diagram](#schema-diagram)
- [Getting Started](#getting-started)



## Project Overview

The project is a blog web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It incorporates varoius features including authentication and authorization. The  features are accompanied by common functionalities found in usual blog applications, such as profile creation, blog creation and  liking and commenting on blogs etc.


- Website is built with robust authentication using JSON Web Tokens - Google OAuth integration - Redux Toolkit is used for state management
- Secured both client and server for specific pages , like the admin dashboard. Admins gain the ability to effortlessly manage blogs, comments, and users, complete with CRUD operations using the MongoDB database.
- The website is carefully designed to work well on all devices, providing a smooth experience everywhere.
- Added a sleek dark mode to enhance user experience and cater to different preferences.
-  Users can search by title, limit results, and sort through a modern sidebar, utilizing cutting-edge search query techniques with MongoDB.
-  Everyone has the ability to leave, edit, and delete their comments on the post pages

### User Roles

There are three distinct user roles within the system:

1. Admin: The admin role manages the overall system, including blog management, user management, content moderation, monitoring user activity, and more.
2. General Users: General users have the ability to like and make comments on posts .

## Features

- [x] User authentication and authorization (JWT)
- [x] User profile creation and management
- [x] Post creation and management
- [x] Commenting on posts
- [x] Liking posts and comments
- [x] Admin dashboard

## Technologies

- React.js
- Node.js
- Express.js
- MongoDB
- JWT Authentication


## Schema Diagram

![image](https://github.com/user-attachments/assets/913d7b7c-cccb-4818-b7bf-8cc26b0b3365)



## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB or MongoDB Atlas account

### Installation

1. Clone the repository

```bash
git clone https://github.com/Harikrishna6225/BlogEasy.git
```
2. Go to the project directory and install dependencies for both the client and server

```bash
cd client
npm install
```

```bash
cd server
npm install
```

3. Create a `.env` file in both the `client` and `server` directories and add the environment variables as shown in the `.env.example` files.
4. Start the server

```bash
cd server
npm start
```

5. Start the client

```bash
cd client
npm start
```

### HomePage
![UI-BLOGESAY](https://github.com/user-attachments/assets/d483d791-5490-419e-80c4-ec66280bd221)
### Sign-up Page
![image](https://github.com/user-attachments/assets/597ecbec-b610-43b0-9ec6-8d09400015b7)
### Post 
![image](https://github.com/user-attachments/assets/3f8125ef-4a7c-4429-b237-e13e13af845d)
### Dashboard
![image](https://github.com/user-attachments/assets/bbaa145f-1993-444a-a61a-a2448244738a)
### User-Profile
![image](https://github.com/user-attachments/assets/a504ae8a-8a23-467c-8d23-94397434bd17)








