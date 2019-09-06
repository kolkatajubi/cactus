const express = require('express')
const app = express()
var path = require('path');
const port = 3004
const bodyparser = require('body-parser');
const jsonParser = bodyparser.json();
app.use(bodyparser.json());
app.use(express.json());

app.use(bodyparser.urlencoded({ 
  extended:false  
}));



const candidate1 ="sonu";
const password1 = "666";
const candidate2 ="viru";
const password2 = "444";

app.listen(port,"192.168.0.106", () => console.log(`Example app listening on port ${port}!`));
app.get('/',function(req, res)
{  res.sendFile(path.join(__dirname +'/log.html'));
});

     app.post('/user_l',(req, res) =>{
    
     if(req.body.username==candidate1 && req.body.password==password1)
       {
        res.send(`access granted------- hello ${candidate1}`);
        }
      else if(req.body.username==candidate2 && req.body.password==password2)
       {
           
            res.send(`access granted------- hello ${candidate2}`);
        }
        else {
          res.send("wrong username or password");
          console.log("wrong username or password");
      }
     });