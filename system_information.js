var si = require('systeminformation');
 
// callback style
si.cpu(function(data) {
    console.log('CPU-Information:');
    console.log(data);
})
