var axios           = require("axios");
var _               = require("lodash");



module.exports = {
//    initiate: function() {
//        global.product
//    },
    
    listen: function() {
        setInterval(function(){
            axios.get("http://finnidhackjunctionrfidwebapi.azurewebsites.net/api/Epc/GetAll")
            .then(function(res) {
                if (!global.EPC){
                    global.EPC = _.sortBy(res.data, ['id']);
                } else {
                    var newValues = _.filter(res.data, function(o){ 
                            return parseInt(o.id) > parseInt(global.EPC[global.EPC.length-1].id)})
                    newValues = _.sortBy(newValues, ['id']);
                    global.EPC = global.EPC.concat(newValues);
                    
                }
                global.EPC = res.data;
                //console.log(global.EPC);
            })}
            ,2000)
    }

}