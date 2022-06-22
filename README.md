To Install the application please install nodejs and then in the project directory please run - npm install

To run the application in the project directory please run - npm start
it will start the application on URL - http://localhost:3000
initial page render the list of repository from the url - https://api.github.com/orgs/godaddy/repos
on click of any item you will navigate to the details page of that item.

Run test cases in the project directory please run - npm test
Included 2 testcases 
1. renders a list with mock data and verify if each repository is rendered on the screen or not.
2. on selection of first item, it navigates to the details page an verifies if all information is rendered or not.

App is created using create-react-app package, which is standard for creating a react app.
additional library used - react-router-dom, used to do navigation between initial load page and details page.