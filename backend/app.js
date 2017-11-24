// Backend

var express             = require("express");
var bodyParser          = require("body-parser");
var apiRoutes           = require("./routes/api_routes");

var app                 = express();
var IP                  = process.env.IP,
    PORT                = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({extended: true}));

// REST routes
 app.use("/api", apiRoutes);

app.get("/", (req, res) => {
    res.send("API");
});

// 404
app.get("*", function(req, res, next) {
    res.status(404).send("There is no such thing");
});


// SERVER LISTENER
app.listen(PORT, IP, function() {
    console.log('Server is listening');
});