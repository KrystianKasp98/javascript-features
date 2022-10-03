const {Router} = require("express");
const ControllerTest = require("../controllers/test");

const router = Router();

router.get("/", ControllerTest.handleGet);
router.post("/", ControllerTest.handlePost);
router.put("/", ControllerTest.handlePut);
router.delete("/", ControllerTest.handleDelete);

module.exports = router;
