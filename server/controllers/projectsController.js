class ProjectsController { 
    async download(req, res) { 
        const {data} = req.query
        const fs = require("fs")
        //console.log(data)
        try {
            const path = `.\\repositories\\${data}.zip`
            if (fs.existsSync(path)) {
              return res.download(path, `${data}.zip`)
            }
            return res.status(400).json({message: "Not found"})
        } catch(e) { 
            console.log(e)
            res.status(500).json({message: "Download failed"})
        }
    }
}




module.exports = new ProjectsController()