# FE22-js2-slutprojekt-eleonora-nocentini

# Simple Social Media Page using Firebase
This is a basic social media page that allows users to sign in, create a new user, write status updates, visit other people's profiles, and delete their own account. The project uses Firebase to store user information, including their usernames, passwords, and status updates.

## Requirements
### The website
* Sign in: users can log in with a username and associated password, which is checked against the firebase database. Note that this is not secure.
* Create User: users can create a new account, which includes a username, password, and a profile picture chosen from three default images.
* Logged in User: once logged in, the user can see their own status updates, add new status updates, visit other users' pages, and delete their own account.
* Visiting Users: there is a list of all users, and each user's profile is clickable to visit their page. Each user's page displays their username, profile picture, and their latest status updates.
### Technologies
* TypeScript: the entire project is written in TypeScript.
* Firebase: used to store user information and status updates.
* Parcel: a simple bundler used to bundle the code.
### Installation and Usage
### Clone the repository.
### Install dependencies using npm install.
### Create a Firebase project and add your Firebase configuration details to the firebaseConfig object in src/firebase.ts.
### Run the development server using npm run dev.
### Open localhost:1234 in your web browser to see the project in action.

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


