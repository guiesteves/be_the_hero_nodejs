const express = require("express");
const OngsController = require("./Controller/OngController");
const IncidentController = require("./Controller/IncidentController");
const ProfileController = require("./Controller/ProfileOngController");
const SessionController = require("./Controller/SessionController");

const routes = express.Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngsController.index);
routes.post("/ongs", OngsController.create);

routes.get("/incident", IncidentController.index);
routes.post("/incident", IncidentController.create);
routes.delete("/incident/:id", IncidentController.delete);

routes.get("/profile", ProfileController.index);

module.exports = routes;
