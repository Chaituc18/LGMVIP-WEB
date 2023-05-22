const express = require("express");
const bodyParser = require('body-parser');

 const app = express();
 var itm=[];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}))
app.use(express.static("public"));


app.get("/", function (req, res) {
    var today = new Date();
    var options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    };
    var day = today.toLocaleDateString("en-US",options);
  res.render('fle', { kindofday : day , newlistitems: itm});
});
app.post("/",function(req,res){
    var item = req.body.newitem;
    itm.push(item);
    res.redirect("/");

})


app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
