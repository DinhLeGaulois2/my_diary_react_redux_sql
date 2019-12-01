const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

// DB Setup
// Requiring our models for syncing
var db = require("./models");

// App Setup
app.use(cors());
app.use(bodyParser.json({ type: '*/*', limit: '10mb', extended: true }));

// Import routes and give the server access to them.
require("./routes/api-routes-delete.js")(app);
require("./routes/api-routes-insert.js")(app);
require("./routes/api-routes-read.js")(app);
require("./routes/api-routes-update.js")(app);
require("./routes/auth-routes.js")(app);

var initValues = require("./data/initialData.js");

// Server Setup
const PORT = process.env.PORT || 3090;
app.set('port', PORT);

db.sequelize.sync({ force: false }).then(function () {
    initValues();
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
})