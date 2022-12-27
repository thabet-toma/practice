const UserController = require("../controllers/user.controller");

module.exports = app => {
  app.get("/api/Players/", UserController.findAllAuthors);
  app.get("/api/Players/:id", UserController.findOneSingleAuthor);
  app.put("/api/Players/update/:id", UserController.updateExistingAuthor);
  app.post("/api/Players/new", UserController.createNewAuthor);
  app.delete("/api/Players/delete/:id", UserController.deleteAnExistingAuthor);
};