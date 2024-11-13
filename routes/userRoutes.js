const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const emailCheck = require("../middlewares/emailCheck");

/*
 * API endpoints relacionados a los usuarios.
 *
 * Notar que todos estos endpoints tienen como prefijo el string "/users",
 * tal como se definió en el archivo `routes/index.js`.
 */

router.get("/", userController.index);
router.post("/", userController.store);
router.post("/email", userController.show);
router.patch("/", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
