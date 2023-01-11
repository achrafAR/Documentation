const express = require('express');
const app = express();

app.listen(3000);

app.get('/', function(req, res){
    res.send('ok')
})

app.get('/test', function(req, res){
    res.status(200).json({status:200, message:"ok"});
})

app.get('/time', function(req, res){
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    res.status(200).json({status:200, message:`${hour}:${minutes}`});
    
});

