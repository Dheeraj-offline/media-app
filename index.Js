// 1 import json server
const jsonServer = require('json-server')

// 2 create server application using json server

const mediaAppServer = jsonServer.create()

// 3 create a middle ware using json server
const middleware = jsonServer.defaults()

// 4 create a router : set up a router for db.json.file
const router = jsonServer.router('db.json')

// 5 applying midlleware to server 
mediaAppServer.use(middleware)

// 6 applying router to server
mediaAppServer.use(router)

// 7 define poort 
const PORT = 3000

// 8 Starting the server
mediaAppServer.listen(PORT,()=>{
    console.log("media app Server port started on PORT" + PORT);
    
})