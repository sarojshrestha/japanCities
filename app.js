const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set("view engine","ejs");

app.get('/', function(req, res){
    res.render("landing");
})

app.get('/cities', function(req,res){
    var cities = [
        {name:'Tokyo',image:'http://www.japan-guide.com/thumb/XYZeXYZe3009_375.jpg'},
        {name:'Osaka',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Central_Osaka.jpg/600px-Central_Osaka.jpg'},
        {name:'Nagoya',image:'http://www.japantimes.co.jp/wp-content/uploads/2016/10/p18-brasor-nagoya-a-20161009.jpg'},
        {name:'Kyoto',image:'http://www.fourseasons.com/content/dam/fourseasons/images/web/KYO/KYO_041_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg'},
        {name:'Tokyo',image:'http://www.japan-guide.com/thumb/XYZeXYZe3009_375.jpg'},
        {name:'Osaka',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Central_Osaka.jpg/600px-Central_Osaka.jpg'},
        {name:'Nagoya',image:'http://www.japantimes.co.jp/wp-content/uploads/2016/10/p18-brasor-nagoya-a-20161009.jpg'},
        {name:'Kyoto',image:'http://www.fourseasons.com/content/dam/fourseasons/images/web/KYO/KYO_041_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg'}
        ];
    res.render('city', {cities:cities});
})

app.post('/cities', function(req,res){
    res.send('posting cities')
});

app.get('/cities/new', function(req,res){
    console.log('new');
   res.render('new'); 
});

app.listen(PORT, process.env.IP, function(){
    console.log('Blog server is running', PORT);
});
