const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tempBlog');
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");

const citySchema = new mongoose.Schema({
    name: String,
    image: String,
    desc: String
});

const City = mongoose.model('City',citySchema);

 /*  var cities = [
        {name:'Tokyo',image:'http://www.japan-guide.com/thumb/XYZeXYZe3009_375.jpg'},
        {name:'Osaka',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Central_Osaka.jpg/600px-Central_Osaka.jpg'},
        {name:'Nagoya',image:'http://www.japantimes.co.jp/wp-content/uploads/2016/10/p18-brasor-nagoya-a-20161009.jpg'},
        {name:'Kyoto',image:'http://www.fourseasons.com/content/dam/fourseasons/images/web/KYO/KYO_041_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg'},
        {name:'Tokyo',image:'http://www.japan-guide.com/thumb/XYZeXYZe3009_375.jpg'},
        {name:'Osaka',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Central_Osaka.jpg/600px-Central_Osaka.jpg'},
        {name:'Nagoya',image:'http://www.japantimes.co.jp/wp-content/uploads/2016/10/p18-brasor-nagoya-a-20161009.jpg'},
        {name:'Kyoto',image:'http://www.fourseasons.com/content/dam/fourseasons/images/web/KYO/KYO_041_1280x486.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg'}
        ];
*/

app.get('/', function(req, res){
    res.render("Index");
})

app.get('/cities', function(req,res){
    City.find({}, function(err,cities){
       if(err){
           console.log(err)
       } else{
           res.render('city', {cities:cities});
       }
    });
})

app.post('/cities', function(req,res){
    var name = req.body.city;
    var image = req.body.image;
    var desc = req.body.desc;
    var addCity= {name:name,image:image,desc:desc};
    console.log(addCity);
    //cities.push(addCity)
   City.create(addCity, function(err,data){
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});
    res.redirect('/cities');
});

app.get('/cities/new', function(req,res){
    console.log('new');
   res.render('new'); 
});

app.get('/city/:id', function(req, res){
    const id = req.params.id;  
    City.findById(id,function(err, foundData){
        if(err){
            console.log(err)
        }else{
             res.render('show',{city:foundData});
        }
    });
});

app.listen(PORT, process.env.IP, function(){
    console.log('Blog server is running', PORT);
});
