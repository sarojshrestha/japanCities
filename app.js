const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine","ejs");

app.get('/', function(req, res){
    res.render("landing");
})

app.get('/cities', function(req,res){
    var cities = [
        {name:'Tokyo',image:'https://en.wikipedia.org/wiki/Tokyo#/media/File:TokyoMetropolitanGovernmentOffice.jpg'},
        {name:'Osaka',image:'https://en.wikipedia.org/wiki/Osaka#/media/File:Osaka_Castle_02bs3200.jpg'},
        {name:'Nagoya',image:'https://en.wikipedia.org/wiki/Port_of_Nagoya#/media/File:Nagoya_Port_02.jpg'},
        {name:'Kyoto',image:'https://en.wikipedia.org/wiki/Kyoto#/media/File:Atago07.JPG'}
        ];
    res.render('city.ejs');
})

app.listen(PORT, process.env.IP, function(){
    console.log('Blog server is running', PORT);
});
