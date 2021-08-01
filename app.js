const server = require("express")
const path = require("path")

const app = server()
const port = 3030

app.use(server.static("public"))

app.get ("/home", (resq, res) => {
     res.sendFile(path.join(__dirname, "views", "index.html"))})
//res.senFile(path.join(__dirname, "views/index.html"))

app.get ("/babbage", (resq, res) => { 
    res.sendFile(path.join(__dirname, "views", "babbage.html"))})

app.get ("/berners", (resq, res) => { 
    res.sendFile(path.join(__dirname, "views", "berners.html"))})

app.get ("/clarke", (resq, res) => { 
    res.sendFile(path.join(__dirname, "views", "clarke.html"))})

app.get ("/hamilton", (resq, res) => { 
    res.sendFile(path.join(__dirname, "views", "hamilton.html"))})
     
app.get ("/hopper", (resq, res) => { 
    res.sendFile(path.join(__dirname, "views", "hopper.html"))})
        
app.get ("/lovelace", (resq, res) => { 
    res.sendFile(path.join(__dirname, "views", "lovelace.html"))})
    
    
app.get ("/turing", (resq, res) => { 
    res.sendFile(path.join(__dirname, "views", "turing.html"))})

app.listen(port, () => console.log("servidor ejecutandose en puerto", port))