// import app file
const app = require("./backend/app");
// make surver listening on port 3000
//http://localhost:3000
// app.listen(3000);
// Démarrer le serveur Express sur le port 3000
app.listen(3000, () => {
    console.log(' BackEnd Server is listening on port 3000');
  });
  