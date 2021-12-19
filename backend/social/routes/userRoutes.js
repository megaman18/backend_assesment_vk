var controller = require("../controllers/userController");
var express = require("express");
var router = express.Router();

router.route("/get").get(controller.get);
router.route("/get/:id").get(controller.getByID);
router.route("/add").post(controller.add);
router.route("/update").patch(controller.update);
router.route("/delete").delete(controller.delete);
module.exports = router;
