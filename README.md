# MERN: Full Stack Hands-on Test

This project is a MERN stack application implementing a user registration and login system with secure authentication and REST APIs.

---

## Features

1. **Registration Page**:
   - Fields: 
     - First Name
     - Last Name
     - Mobile Number
     - Password
   - Social Media Login Options:
     - Google
     - Facebook
     - Apple ID
   - Responsive UI with custom CSS.

2. **Database**:
   - MySQL database with user details.
   - Additional fields:
     - Primary Key
     - Created Date (UTC)
     - Created By
     - Updated Date (UTC)
     - Updated By
   - Secure password hashing.

3. **Stored Procedures**:
   - `CREATE`, `INSERT`, `UPDATE`, `DELETE`, and `SELECT` stored procedures.

4. **REST APIs**:
   - **POST**: Add records to the database.
   - **GET**: Retrieve records.
   - **PUT**: Update records.
   - **DELETE**: Remove records.

5. **Authentication**:
   - Login with token-based authentication (JWT).
   - Greeting message based on the time of the day.

6. **Logout Functionality**:
   - A logout button is available on the page header.

---

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JSON Web Tokens (JWT)
- **Other Tools**: bcrypt for password hashing
