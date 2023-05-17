# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# Employee Management Web App

This web app allows you to manage employees in a company. It provides a table view of employees with their profile picture, name, email, active status, role, and last login date. You can perform various actions such as adding a new user, deleting a user, and editing user details.

## Technologies Used

- React
- React-Table
- React-Query
- Axios
- Typescript

## Features

- Display a table of employees with their details.
- Add a new user using the "Add User" button.
- Edit the details of an existing user using the "Edit icon in each row.
- Delete a user from the table using the Dustbin icon in each row

## Installation

1. Clone the repository: git clone https://github.com/your/repository.git
2. Install the dependencies: npm install


## Usage

1. Start the development server: npm start

2. Open your browser and navigate to `http://localhost:3000` to access the web app.

## API Integration

1. Make sure you have a backend API set up to handle the CRUD operations for managing employees.
2. Update the API endpoint in the code to match your backend server.
3. Modify the code in the relevant components(e.g. AddUserForm, EditUserForm) to make API requests using Axios and React-Query.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.


