class SearchController { 
    async search(req, resp) { 
            //res.json({message:"succes"})
            const {name} = req.body
            const {author} = req.body

            const https = require('https');

            const options = {
                hostname: 'api.github.com',
                path: `/repos/${author}/${name}/zipball`,
                headers: {
                    'User-Agent': 'nodejs'
                 }
            };

            let someString = "123"
            https.get(options, (res) => {
            if (res.statusCode === 302) {
              console.log(`Download URL: ${res.headers.location}`);
              someString = res.headers.location;
              resp.json({name: {name}, author: {author}, proj: {someString}})
            } else {
              console.error(`Failed to get download URL: ${res.statusCode}`);
              someString = "404"
              resp.json({name: {name}, author: {author}, proj: {someString}})
            }
            }).on('error', (err) => {
            console.error(`Error: ${err.message}`);
            });
    }
    
    async checkLink(req, resp) { 
        // res.json({message: "succes"})
        // const {name} = req.body
        const {link} = req.body
        let someString = link.split("/")

        const https = require('https');

        const options = {
            hostname: 'api.github.com',
            path: `/repos/${someString[3]}/${someString[4]}/zipball`,
            headers: {
                'User-Agent': 'nodejs'
             }
        };
        
        https.get(options, (res) => {
            if (res.statusCode === 302 && res.headers.location === link) {
              resp.json({isExists: true})
            } else {
              console.error(`Failed to get download URL: ${res.statusCode}`);
              someString = "404"
              resp.json({isExists: false})
            }
            }).on('error', (err) => {
            console.error(`Error: ${err.message}`);
            });
    }
}




module.exports = new SearchController()