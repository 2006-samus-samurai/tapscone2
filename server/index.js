const db  = require("./db");
const app = require("./api/app");

const PORT = 3000;

const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error)
  }
};

init();