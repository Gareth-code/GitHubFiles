class PrInfoController { 
    async show() { 

    }
    
    async test(req, res) { 
        res.json({message: "succes"})
    }
}




module.exports = new PrInfoController()