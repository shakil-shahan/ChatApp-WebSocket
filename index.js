const express = require('express');
const app = express();
const os = require('os')

app.get('/host', (req, res) => {
    res.send(os.hostname())
})

// Port setup
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})

// serve static files
app.use(express.static('public'))
app.use('/adminLte', express.static('node_modules/admin-lte'))
