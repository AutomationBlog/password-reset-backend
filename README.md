# Password Reset Backend API

User Authentication and Password Reset Email Notification.

## End Point

[Frontend URL](https://password-reset-blog.netlify.app/)

[Backend URL](https://password-reset-backend-n39j.onrender.com/)

## Testing

    - npm install
    - npm run dev

## .env

    DB_NAME=
    DB_PASSWORD=
    DB_USERNAME=
    DB_CLUSTER=
    DB_URL=localhost:
    JWT_SECRET=
    GMAIL_EMAIL=
    GMAIL_PASSWORD=
    CLIENT_URL_LOCAL=<http://localhost:5173>
    CLIENT_URL_CLOUD=<https://password-reset-blog.netlify.app>
    isLOCAL=true

## API End Points

    - POST /signup - Create a new user
    - POST /login - Login a user
    - POST /forgot-password - Send password reset email
    - POST /reset-password - Reset password
    - POST /verify-email - Verify email

## Dependencies

    - express
    - nodemailer
    - mongoose
    - dotenv
    - jwt
    - bcrypt    
    - crypto
    - cookie-parser

## Git Repository

[Backend Repository](https://github.com/automationblog/password-reset-backend)

[Frontend Repository](https://github.com/automationblog/password-reset-frontend)