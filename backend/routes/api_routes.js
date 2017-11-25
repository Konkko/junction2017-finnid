// =============================================================================
// API ROUTES
// =============================================================================

var express             = require("express");
var router              = express.Router();
//var faker               = require("faker");
var axios               = require("axios");
var bodyParser          = require("body-parser");
var _                   = require("lodash");

router.get("/Epc/GetAll", function(req, res){
    res.send(global.EPC);
});

router.get("/Epc/GetById/:id", function(req, res){
    console.log(global.EPC);
    console.log(req.params.id);
    var epc = _.filter(global.EPC, function(o) {return o.id == req.params.id});
    console.log(epc);
    res.send(JSON.stringify(epc[0]));

    
    
});

router.get("/Epc/GetByEpc/:epc", function(req, res) {
    var epc = _.filter(global.EPC, {epcCode: req.params.epc});
    console.log(epc);

   res.send(JSON.stringify({epc}));
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