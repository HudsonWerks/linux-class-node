var si = require('systeminformation');
 
// callback style
si.cpu(function(data) {
    console.log('CPU-Information:');
    console.log(data);
})
 
si.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
