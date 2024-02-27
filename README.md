Download and unzip the project or clone the project to an empty directory.

CD to that directory and run 'npm install' to install all the dependencies.

Then run 'npm run dev' to start up the application.

Open the application in your browser by visiting the link provided when the project is run.

It should be something like http://localhost:5173/




This application was built using Vite and ReactJS.
It simply makes a call to the github api to return some data about pull requests for the lodash library.
Within the application is the basic framework for UI tests using Jest.  To run the test, simply run 'npm test'.
A basic UI has been implemented to showcase some of the PR details.
The API call itself is done using a generic hook that handles the request and response.
