const http = require("http")
const server = http.createServer((req,res)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    if(req.url=='/'){
        res.writeHead(200,{
            "content-type":"text/html"
        })
        res.end(`
            
            <h1>Backend runnign on Node</h1>
            
            `)
    }
})
server.listen(3000,()=>{
    console.log("server runnign at port 3000")
})