# Galactic-Bot-Battlr - Phase 2 | wk2 Code Challenge 
Project Setup
Once you have a plan in place for the application, take the following steps:

Create a new react app with create-react-app or vite.
Create a new GitHub repository (NB: ENSURE IT IS PRIVATE) and link it to your project.
Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
Please make sure you regularly commit to the repository.
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run this command to get the backend started:
json-server --watch db.json
# Look of App
BotPage is the highest component below App, and serves as the main container for all of the pieces of the page.

 BotCollection is where all the bots will be displayed, while YourBotArmy will only display the bots selected by the user.

BotCard and BotSpecs components that will render out information about individual bots formatted for a list view and for a full view.

# json-server --watch db.json in my terminal
Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/bots