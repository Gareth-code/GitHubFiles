const Router = require("express");
const router = new Router()
const projectsController = require("../controllers/projectsController");


//router.post("/",)
router.get("/",)
//router.get("/test", projectsController.test)
router.get("/download", projectsController.download)

module.exports = router