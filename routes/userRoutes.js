const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const emailCheck = require("../middlewares/emailCheck");

router.get("/", userController.index);
router.post("/", userController.store);
router.post("/email", userController.show);
router.patch("/", userController.update);
router.patch("/:id", userController.profileUpdate);
router.delete("/:id", userController.destroy);

module.exports = router;
