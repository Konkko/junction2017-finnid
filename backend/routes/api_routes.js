// =============================================================================
// API ROUTES
// =============================================================================

var express             = require("express");
var router              = express.Router();
//var faker               = require("faker");
var axios               = require("axios");
var bodyParser          = require("body-parser");
var _                   = require("lodash");

//All history data
router.get("/Epc/GetAll", function(req, res){
    res.send(global.EPC);
});

//One data point in history
router.get("/Epc/GetById/:id", function(req, res){
    var epc = _.filter(global.EPC, function(o) {return o.id == req.params.id});
    res.send(JSON.stringify(epc[0]));
});

//All history data of one specified epc tag
router.get("/Epc/GetByEpc/:epc", function(req, res) {
    var epc = _.filter(global.EPC, {epcCode: req.params.epc});

   res.send(JSON.stringify(epc));
});

//All epc tags with latest location
router.get("/Item/GetAll", function(req, res) {
    var uniqueEpc = _.uniqBy(global.EPC, 'epcCode');

    var response = uniqueEpc.map(function(uniqObj){
        var asd = _.findLast(global.EPC, function(o){
            return o.epcCode == uniqObj.epcCode;
        });
        
        return asd;
        
    });
    res.send(JSON.stringify(response));
});

router.get("/Item/GetById/:id", function(req, res) {
   res.send(JSON.stringify({res: "Item ID"}));
});
router.get("/Item/GetByEpc/:epc", function(req, res) {
   res.send(JSON.stringify({res: "Item EPC"}));
});

module.exports = router;