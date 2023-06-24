const Router = require("express");
const router = new Router()
const searchRouter = require("./searchRouter")
const projectsRouter = require("./projectsRouter")
const prInfoRouter = require("./prInfoRouter")

router.use("/projectinfo", prInfoRouter)
router.use("/projects", projectsRouter)
router.use("/search", searchRouter)

module.exports = router