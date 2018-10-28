const express = require('express');
const socket = require('socket.io');
const os = require('os')

// express initialization & port setup
const app = express();
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

// route testing
app.get('/hostname', (req, res) => {
    res.send(os.hostname())
})

// serve static files
app.use(express.static('public'))
app.use('/adminLte', express.static('node_modules/admin-lte'))


// socket setup
const io = socket(server);
io.on('connection', (socket) => {
    console.log('socket')
})