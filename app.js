const express=require("express");

const bodyParser=require("body-parser");

const mongoose = require('mongoose');

const app=express();

 

app.use(bodyParser.json());

app.use(express.static('public'));

app.use(bodyParser.urlencoded({

    extended: true

}));

 

mongoose.connect('mongodb://localhost:27017/FairGiveaway',{

    useNewUrlParser: true,

    useUnifiedTopology: true,

    family: 4

})

const db = mongoose.connection;

 

db.on('error',()=>{

    console.log ("connection error")});

db.once('open', function(callback){

    console.log("connection succeeded");

})

 

app.post('/sign_up', function(req,res){

    const email =req.body.GID;

    const walletAddress = req.body.wa;

    const community =req.body.ca;

 

    const data = {

        "email": email,

        "wallet address": walletAddress,

        "wallet network": community

    }

 

    db.collection('participant').insertOne(data,function(err, collection){

        if (err) throw err;

        console.log("Record inserted Successfully");              

    });        

        return res.redirect('signup_success.html');

})

 

app.get('/',function(req,res){

res.set({

    'Access-control-Allow-Origin': '*'

    });

return res.redirect('index4.html');

});

 

app.post('/creator_data', (req, res)=>{

    const title = req.body.title;

    const des = req.body.desc;

    const NOD = req.body.NOD;

    const dur = req.body.dur;

    const NOE = req.body.NUE;

    const NOW = req.body.NOW;

    const tokenName = req.body.tokenName

 

    const data = {

        "Title": title,

        "description": des,

        "Wallet Adddress": NOD,

        "Duration": dur,

        "No. of entry": NOE,

        "No. of winners": NOW,

        "Token Name": tokenName

    }

    console.log(data)

    db.collection('UserForm').insertOne(data,function(err, collection){

        if (err) throw err;

        console.log("Record inserted Successfully");              

    });        

        return res.redirect('createdsuccessfully.html');

 

})

 

app.get('/',function(req,res){

    res.set({

        'Access-control-Allow-Origin': '*'

        });

    return res.redirect('index3.html');

    });


    app.post('/creatordata', (req, res)=>{

        const PersonalId = req.body.PersonalID;
    
        const GiveAwayId = req.body.GiveawayID
    
       
    
        const data = {
    
            "Personal-ID": PersonalId,
    
            "Giveaway-ID": GiveAwayId
    
        }
    
        db.collection('creatorCode').insertOne(data,function(err, collection){
    
            if (err) throw err;
    
            console.log("Record-3 inserted Successfully");              
    
        });  
    
        return res.redirect('index.html');
    
    });    
    
     
    
    app.get('/creatorecodepage', (req, res)=>{
    
        res.set({
    
            'Access-control-Allow-Origin': '*'
    
        });
    
        return res.redirect(' ');
    
    });

 

app.listen(3000, (req, res) => {

    console.log("server listening at port 3000");

});