const Router = require("express");
const router = new Router()
const prInfoController =  require("../controllers/prInfoController");

//router.post("/",)
router.get("/",)
router.get("/test", prInfoController.test)

module.exports = router