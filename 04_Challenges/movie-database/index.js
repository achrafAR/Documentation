
const movies = [
    { title: 'Jaws', year: 1975, rating: 8 },
    { title: 'Avatar', year: 2009, rating: 7.8 },
    { title: 'Brazil', year: 1985, rating: 8 },
    { title: 'الإرهاب والكباب‎', year: 1992, rating: 6.2 }
]



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

app.get('/movies/add', (req, res) => {
    const t = req.query.title;
    const y = req.query.year;
    const r = req.query.rating;
    const addMovie = {title : t , year : y , rating : r || 4};
    if(!t || !y || y>9999 || y.length !=4 )
    {
    res.send({status:403, error:true, message:'you cannot create a movie without providing a title and a year'});
    }
    else
    {
        movies.push(addMovie);
        res.send({status:200, message:movies});
    }
      
    
});

app.get('/movies/get', (req, res) => {
    const read = movies.map(movies => movies.title);
    res.send({status:200, data:read});
});

app.get('/movies/edit', (req, res) => {
    const edit = req.params.edit;
    res.send({status:200, message:"edit Movies"});
});

app.get('/movies/delete', (req, res) => {
    const index = req.query.id;
    if(index<1 || index>movies.length){
        res.send({status:404, error:true, message:`the movie ${index} does not exist`});
    }else{
        movies.splice(index-1,1);
        res.send({status:200, message:movies});

    }
});

app.get('/movies/read/by-date', (req, res) => {
    const get = movies.sort(function(a ,b){return a.year - b.year})
    const read = get.map(get => get.title);
    res.send({status:200, message:read});
});


app.get('/movies/read/by-rating', (req, res) => {
    const get = movies.sort(function(a ,b){return a.rating - b.rating})
    const read = get.map(get => get.title);
    res.send({status:200, message:read});
});


app.get('/movies/read/by-title', (req, res) => {
    const get = movies.sort((a ,b) => a.title.localeCompare(b.title))
    const read = get.map(get => get.title);
    res.send({status:200, message:read});
});


app.get('/movies/read/id/:index', (req, res) => {
    const index=req.params.index;
    const get=movies.map(movies => movies.title);
    if(index>0 && index<=movies.length){
        res.send({status:200, data:get[index-1]})
    }else{
        res.send({status:404, error:true, message:`the movie  ${index} does not exist`});
    }
    
});







