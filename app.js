// console.log("Hello World");
const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3002;






//default page
app.get('/',(req,res) => {
    res.send("Welcome to Coding Competition #2 by Femi , NORKA B1");
});

// const static_path = path.join(__dirname,'./public');
// console.log(path.join(__dirname,'./public'));
// app.use(express.static(static_path));
//app.use(express.static("public"));

//app.use(express.static('public'));

app.get('/home',(req,res) => {
   //res.sendFile('\D\FSD Course\coding competetion2\public\index.html');
  // res.sendFile('index.html');
   res.sendFile(path.join(__dirname+'/public/index.html'));
//    res.send("sample");
})




//app.

app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
})