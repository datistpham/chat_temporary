const express = require('express')
const app = express()
const http = require('http')
const mysql= require('mysql')
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server)
const connection= mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cock_mess'
})
connection.connect()
app.set('view engine', 'ejs')
app.set('views', './views')
app.get('/', (req, res) => {
    connection.query(`SELECT * FROM theme`, (err,result,fields)=> {
        res.render('index', {data: result})
    })
})
app.use(express.static('public'))
app.use(express.static('image'))

io.on('connection', (socket) => {
    console.log(`co nguoi vua ket noi ${socket.id}`)
    
    socket.on('disconnect', () => {
        console.log(`co nguoi vua ngat ket noi ${socket.id}`)
    })
    socket.on('send-content-client-self', (data) => {
        connection.query(`INSERT INTO cock_mess_sub(username,message,data_status) VALUES("${data.username}","${data.content}","${data.date_status}")`, (err, rows, fields)=> {
            if(err) {
                throw err
            }
        })
        socket.emit('send-content-server-self', data)
        socket.broadcast.emit('send-content-server-other', data)
    })
    socket.on('leave-rooms', (data)=> {
        socket.broadcast.emit('leave-rooms-server',data)
    })
    socket.on('typing', (data)=> {
        socket.broadcast.emit('typing-self', data)
    })
})

server.listen(5000, () => {
    console.log('server run on port 5000')
})