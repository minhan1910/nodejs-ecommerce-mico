const app = require("./src/app");
const {
  app: { port },
} = require("./src/config/config.mongodb");

const PORT = port || 3052;

const server = app.listen(PORT, () => {
  console.log("WSV Ecommerce start with port " + PORT);
});

// CTRL+C
// process.on('SIGINT', () => {
//     server.close(() => {
//         console.log('Exit Server Express');
//     });
// });
