# Galactic-Bot-Battlr - Phase 2 | wk2 Code Challenge 
# Project Setup
Once you have a plan in place for the application, take the following steps:

Create a new react app with create-react-app or vite.
Create a new GitHub repository (NB: ENSURE IT IS PRIVATE) and link it to your project.
Add your TM as a contributor to the project. (This is only for grading purposes. We promise we won't steal your code)
Please make sure you regularly commit to the repository.
In your project directory, create a db.json file and use this dataLinks to an external site. for your server DB.
Run command to get the backend started:

# Look of my App
npm install -g serve
serve -s build

src/
├── App.js
├── BotsPage.js
├── BotCard.js
├── BotCollection.js
├── BotSpecs.js
├── YourBotArmy.js
├── SortBar.js
 ├──  index.css
 └──  main.js

   Serving!                                │
   │                                           │
   │   JSON Server started on PORT :3000

Watching db.json...

♡( ◡‿◡ )

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/bots

 *  History restored 

wangumvp@WANGU:~/Documents/bot$ json-server --watch db.json
--watch/-w can be omitted, JSON Server 1+ watches for file changes by default
JSON Server started on PORT :3000
Press CTRL-C to stop
Watching db.json...

♡⸜(˶˃ ᵕ ˂˶)⸝♡

Index:
http://localhost:3000/

Static files:
Serving ./public directory if it exists

Endpoints:
http://localhost:3000/bots
       │
  Local:   http://localhost:5173/