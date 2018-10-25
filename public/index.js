const express = require('express');
const app = express();

app.use('/adminLte', express.static('node_modules/admin-lte'))