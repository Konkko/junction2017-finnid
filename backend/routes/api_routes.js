// =============================================================================
// API ROUTES
// =============================================================================

var express             = require("express");
var router              = express.Router();
//var faker               = require("faker");
var axios               = require("axios");

var response = {res: "RESPOOOONSE"};

router.get("/Epc/GetAll", function(req, res){
    res.send(JSON.stringify(response));
});

router.get("/Epc/GetById/:id", function(req, res){
    res.send(JSON.stringify({res: "ID"}));
});

router.get("/Epc/GetByEpc/:epc", function(req, res) {
   res.send(JSON.stringify({res: "EPC"}));
});

router.get("/Item/GetAll", function(req, res) {
   res.send(JSON.stringify({res: "All Items"}));
});

router.get("/Item/GetById/:id", function(req, res) {
   res.send(JSON.stringify({res: "Item ID"}));
});
router.get("/Item/GetByEpc/:epc", function(req, res) {
   res.send(JSON.stringify({res: "Item EPC"}));
});

module.exports = router;