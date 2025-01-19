# University Borrow System

Welcome to the University Borrow System! This project is a web application designed to manage and facilitate the borrowing process of various items within a university. The system is built using React for the frontend, Node.js for the backend, PostgreSQL as the database, and Prisma ORM for database management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (students and administrators)
- Item catalog management
- Borrowing and returning items
- Notifications for due dates and overdue items
- Admin panel for managing users and items

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **ORM**: Prisma

## Installation

### Prerequisites

- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Shubhamgupta171/University_Borrow_application.git
    cd university-borrow-system
    ```

2. Install backend dependencies:

    ```bash
    cd server
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `server` directory and add the following:

    ```env
    DATABASE_URL=postgresql://user:password@localhost:5432/university_borrow_system
    JWT_SECRET=your_secret_key
    ```

4. Run database migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

5. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the frontend directory:

    ```bash
    cd ../client
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in as a student or admin.
3. Browse the item catalog and borrow items as needed.

## Database Schema

Here is a brief overview of the database schema:

- **User**: Stores user information (students and admins)
- **Item**: Stores information about items available for borrowing
- **Borrow**: Stores information about borrowed items, including the user who borrowed them and due dates

Example Prisma schema:

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  role      String   // 'student' or 'admin'
  borrows   Borrow[]
}

model Item {
  id          Int      @id @default(autoincrement())
  name        String
  description String
  available   Boolean  @default(true)
  borrows     Borrow[]
}

model Borrow {
  id         Int      @id @default(autoincrement())
  userId     Int
  itemId     Int
  borrowDate DateTime @default(now())
  dueDate    DateTime
  returned   Boolean  @default(false)
  
  user       User     @relation(fields: [userId], references: [id])
  item       Item     @relation(fields: [itemId], references: [id])
}
