const express = require('express');
const app = express();
var fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({extended: true}))



app.get('/', (req, res) => {
    res.send('Sube movil api')
});

app.get('/api/recargas', (req, res) => {
    fs.readFile(__dirname + "/" + "BA.json", 'utf-8', function( err, data){
        console.log(data);
        res.end(data);
    });
})

app.post('/api/recargas', (req, res) => {
    console.log(req.body);

    fs.readFile(__dirname + "/" + "BA.json", 'utf-8', function( err, data){
        console.log(req.body);
        res.end("anduvo");
    });
})

var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("Rest api listening at http://%s:%s", host, port)
})