var axios           = require("axios");



module.exports = {
//    initiate: function() {
//        global.product
//    },
    
    listen: function() {
        setInterval(function(){
            axios.get("http://finnidhackjunctionrfidwebapi.azurewebsites.net/api/Epc/GetAll")
            .then(function(res) {
                global.EPC = res.data;
                console.log(global.EPC);
            })}
            ,1000)
    }

}