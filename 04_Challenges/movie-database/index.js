const express = require('express');
const app = express();

app.listen(3000);

app.get('/', function(req, res){
    res.send('ok')
})

app.get('/test', function(req, res){
    res.send({status:200, message:"ok"});
})

app.get('/time', function(req, res){
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    res.send({status:200, message:`${hour}:${minutes}`});
    
});

app.get('/hello/:id?', (req, res) => {
    const id = req.params.id;
    res.send({status:200, message:`Hello, ${id}`});
});

app.get('/search', (req, res) => {
    const s = req.query.s;
    if(!s){
        res.send({status:500, error:true, message:"you have to provide a search"});
    }
    else{
    res.send({status:200, message:'ok', data: `${s}`});
    }
});



