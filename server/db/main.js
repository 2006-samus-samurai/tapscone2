const { db } = require("./models");
const app = require("../app");

const PORT = 3000;

const init = async () => {
  try {

    await db.sync({force: true});

    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();


/*

For json package
//"npm run start-server && react-scripts start"

nodemon running , manifest.json error

exemples / deployment/todolist/
"start": "node server/index.js",
    "start-dev": "nodemon server/index.js --ignore public --ignore client & webpack -w",
=======current version

"start": "react-scripts start && npm run start-server",
    "start-server": "nodemon main.js",


*/
