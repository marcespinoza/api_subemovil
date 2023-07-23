const express = require('express');
const app = express();
var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {
    res.send('Sube movil api')
});

app.get('/api/getrecargas', (req, res) => {
    fs.readFile(__dirname + "/" + "BA.json", 'utf-8', function( err, data){
        console.log(data);
        res.end(data);
    });
})

app.post('/api/recargas', (req, res) => {
    console.log(req.body.provincia);

    fs.readFile(__dirname + "/" + req.body.provincia+".json", 'utf-8', function( err, data){
        if(typeof data == "undefined"){
            res.status(400).json({status: err.status, message: err.message})
        }else
            res.send(data)
    });
})

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Rest api listening at http://%s:%s", host, port)
})