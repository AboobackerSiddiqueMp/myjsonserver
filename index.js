const jsonServer = require('json-server')

const mediaplayerserver=jsonServer.create()

const router=jsonServer.router('db.json')

const middileware=jsonServer.defaults()

mediaplayerserver.use(middileware)
mediaplayerserver.use(router)

const port =5000;

mediaplayerserver.listen(port,()=>{
    console.log(`server is up and running in port ${port}`)
})
