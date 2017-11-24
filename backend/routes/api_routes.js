// =============================================================================
// API ROUTES
// =============================================================================

var express             = require("express");
var router              = express.Router();

var response = {res: "RESPOOOONSE"};

router.get("/Epc/GetAll", function(req, res){
    res.send(JSON.stringify(response))
});

module.exports = router;

// /api/Epc/GetById/{id}
