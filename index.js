const express=require('express');
const port=8000;
const app=express();

const cors=require('cors');
const corsOptions ={ origin:'*', credentials:true, optionSuccessStatus:200 };
app.use(cors(corsOptions));

//form data
app.use(express.urlencoded({extended:true}));
app.use(express.json())

//connecting to the DB
const db=require("./config/mongoose");

app.use("/",require('./routes/index'));


app.listen(port,(err)=>{
    if(err) { console.log(err); }
    console.log(`Do-jo blog is up and running on port ${port}`);

})