## GoodBank REST API Automation Testing with Postman Newman

This project showcases Automated API testing with Postman and generates report using Newman for Good Bank API server, featuring a collection of tests to validate different API endpoints.

## Project Scenario

1. **Application Status**

- Check Application Status: Provides the current status of a user's application.

2. **Bank User Management**

- User Registration:

  - Create a new user with valid credentials.
  - Check user registration with an already registered username.
  - Test user registration with invalid passwords.

- User Login:

  - Test login with invalid credentials.
  - Lock user after 4 failed login attempts.
  - Login with valid credentials.

- User Information:

  - Fetch user information with proper authentication.
  - Attempt to fetch user information without authentication.
  - Update user information (requires authentication).
  - Verify updated user information.

- Password Management:

  - Change user password (authentication and old password required).
  - Test change password with wrong old password.
  - Login with the new updated password.

- User Logout: API to log out authenticated users and revoke sessions.

3. **Bank Account Management**

- Account Transactions: Fetch account transaction details with options to limit the number of transactions and apply filters.

4. **Bank Admin Management**

- Customer Data: Fetch all customers' details.
- Credit Amount: Admin API to credit an amount using admin authentication. Admins can handle transactions like cashing checks, deposits, and other banking operations.
- Debit Amount: Admin API to debit an amount using admin authentication.

## How to run this project

- clone this repository
- give this command
  - npm i
  - npm run report

## Pre-condition

- Node.js must be installed
- Newman
- Newman HTML Report Library

## Technology used

- Postman
- Newman

## API Documentation

- https://documenter.getpostman.com/view/25676466/2sAXqtc2Qu

## Newman Report Summary

![Newman-Report-Summary](https://github.com/PapriSaha/GoodBank_REST-API-Testing_Automation_Newman/blob/master/assets/Newman-Report-Summary.jpg)

![Total Requests](https://github.com/PapriSaha/GoodBank_REST-API-Testing_Automation_Newman/blob/master/assets/Total%20Requests.jpg)

![Total-Requests_2](https://github.com/PapriSaha/GoodBank_REST-API-Testing_Automation_Newman/blob/master/assets/Total-Requests_2.jpg)

![Failed_tests](https://github.com/PapriSaha/GoodBank_REST-API-Testing_Automation_Newman/blob/master/assets/Failed_tests.jpg)

![Skipped_Tests](https://github.com/PapriSaha/GoodBank_REST-API-Testing_Automation_Newman/blob/master/assets/Skipped_Tests.jpg)
