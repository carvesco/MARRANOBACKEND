const bodyParser = require("body-parser");
const express = require("express");

const placesRoutes = require('./routes/places_routes');

const app = express();

app.use('/api/places',placesRoutes); // places routes http.../api/places

 app.use((error,req,res,next)=>{
    if(res.headreSent){
        return next(error); 
    } 
    res.status(error.code || 500);
    res.json({message: error.message|| 'unknow error ocurred'});
 });

app.listen(5000);