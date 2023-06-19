console.log("hello world!")

const http=require('http')
const fs= require('fs')
const { send } = require('process')
const port=3000

/* const server=http.createServer((req,res)=>{
res.send('hello world')
}) */

const server= http.createServer((req,res)=>{
    res.end("<h1>hello node!<h1>")
})

//fs.writeFile('welcome.txt','hello node',(err)=>err?console.log('erreur'):console.log('file created'))
fs.readFile('welcome.txt','utf-8',(err,data)=>{err?console.log('erreur'):console.log(data)})

server.listen(port,(err)=>err?console.log(err):console.log(`server running on port ${port}`))

