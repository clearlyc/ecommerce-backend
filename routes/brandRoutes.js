const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brandController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", brandController.index);
router.post("/", brandController.store);
router.get("/:id", brandController.show);
router.patch("/:id", brandController.update);
router.delete("/:id", brandController.destroy);

module.exports = router;
