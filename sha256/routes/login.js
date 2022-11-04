const {Router} = require("express");
const ControllerLogin = require("../controllers/login");
const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({encrypted: 'f2hf3YasYsfOId2', decrypted: 'blah blah'});
});
router.post("/", ControllerLogin.handlePost);

module.exports = router;