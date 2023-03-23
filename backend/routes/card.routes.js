const express = require("express");
const verifyToken = require("../middlewares/auth.middleware");
const {} = require("../controllers/card.controller");

const cardRouter = express.Router();

listRouter.post("/", verifyToken);
listRouter.delete("/:id", verifyToken);

module.exports = cardRouter;
