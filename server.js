const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
app.set('view engine', 'ejs')
app.set('views', './views')
app.get('/', (req, res) => {
    res.render('index')
})
app.use(express.static('public'))
io.on('connection', (socket) => {
    console.log(`co nguoi vua ket noi ${socket.id}`)
    socket.on('disconnect', () => {
        console.log(`co nguoi vua ngat ket noi ${socket.id}`)
    })
    socket.on('send-content-client-self', (data) => {
        socket.emit('send-content-server-self', data)
        socket.broadcast.emit('send-content-server-other', data)
    })
    socket.on('typing', (data)=> {
        console.log(data)
        socket.broadcast.emit('typing-self', data)
    })
})
server.listen(5000, () => {
    console.log('server run on port 5000')
})