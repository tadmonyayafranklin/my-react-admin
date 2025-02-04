# Welcome on Nexus &#x1F389;

This project is a React dashbord application using React-admin that enable us to manage users and posts. 

# Goals &#x1F3AF;

1. ### Setting up a React Admin Project
**Task:** Create a React Admin application using the React Admin framework.

&#x2705; Set up a project with mock data using `json-server`.

&#x2705; Configure the application to connect to the mock API.

&#x2705; Configure authentication using React Admin's `authProvider`.

2. ### Customizing React Admin Components
**Task:** Customize the default `List view` for posts.

&#x2705; Display a table with the following columns: `Title`, `Author (User)`, `Published Date`, and `Status`.

&#x2705; Add filters for `Author` and `Status`.

&#x2705; Add pagination and sorting functionality.


3. ### Adding Custom Actions
**Task:** Add a bulk action to the users resource.

&#x2705; Create a bulk action button to deactivate selected users.

&#x2705; Use `BulkActionButton` for the functionality.

&#x2705; Show a confirmation dialog before performing the action.

&#x2705; Implement API calls with `dataProvider`.

&#x2705; Add success and error notifications.

4. ### Theming and Accessibility
**Task:** Customize the default theme of the React Admin application.

&#x2705; Change the primary and secondary colors.

&#x2705; Adjust the typography for headings and body text.

&#x2705; Use React Admin's `ThemeProvider`.

&#x2705; Persist the theme preference using `localStorage`.

5. ### Dashboard with Custom Charts
**Task:** Build a dashboard that displays the following:

&#x2705; A bar chart showing the number of posts per user.

&#x2705; A pie chart showing the distribution of published vs. draft posts.

&#x2705; Use `nivo`  library to draw the different charts.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run the project ? &#128221;

1. ### Prerequisites

Before running this project, make sure you have `Node JS` and `npm` installed on your computer.

If you're using `Ubuntu` or other linux systems, type this command on your terminal to install it:

`sudo apt-get install update`

`sudo apt install node`

Then type this command to check the installation:

`node -v` 

`npm -v`

2. ### Run the project

- First start cloning the project using `git clone https://github.com/tadmonyayafranklin/my-react-admin.git`

- Then run the project using by executing these commands:
   - `npm install`: Install all the dependencies for the project.
   - `npm run server`:Runs the server that enables our react admin application to connect to the mock API using `json-server`.
   - `npm start`: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.
   - `npm run build`: Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Login details &#x1F6E1;
To connect to the application `before/after` logout, use the following credentials:
- username=`admin`;

- password=`password`;

## Technologies &#x1F6E0;
To achieve this project, I have used:

- Node JS;

- React;

- React Admin (**Ra**): This project uses `React-admin ` framework for building interfaces!. It is a popular choice for developers looking to create admin panels and dashboards &#x1F4CA; efficiently.

- Material-UI (**MUI**): `MUI` is a powerful tool for building modern web applications with `React`. Its adherence to Material Design Principles, along with its rich set of `components` and customization options, makes it a popular choice among developers looking to create `beautiful` and `functional` user interfaces. 

## Contributions &#x1F91D;
We are waiting for your contributions, improvements and your support! 
This application was made with &#x2764; by **TADMON-YAYA Franklin Lenny**.
