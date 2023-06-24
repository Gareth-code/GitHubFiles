const Router = require("express");
const router = new Router()
const searchController = require("../controllers/searchController")

router.post("/search", searchController.search)
router.get("/",)
router.post("/checklink", searchController.checkLink)

module.exports = router