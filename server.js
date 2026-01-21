import server from "./app.js";
import initializeDatabase from "./config/db.js";

const SERVER_PORT = process.env.SERVER_PORT || 5000;

// Start database connection
initializeDatabase();

// Launch application server
server.listen(SERVER_PORT, () => {
  console.log(`Application started on port ${SERVER_PORT}`);
});
