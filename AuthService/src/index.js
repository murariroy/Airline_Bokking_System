
const express=require('express');
const bodyParser=require('body-parser');
const {PORT,DB_SYNC}=require('./config/serverConfig');

const db=require('./models/index');



const ApiRoutes=require('./routes/index');


const app=express();

const preapareAndStartServer=async()=>{
  
      app.use(bodyParser.json());
      app.use(bodyParser.urlencoded({extended:true}));

      app.use('/api',ApiRoutes);
      
     app.listen(PORT,()=>{
        console.log(`server starte at PORT ${PORT}`);

        if(process.env.DB_SYNC)
        {
           db.sequelize.sync({alter:true});
        }

       

       


       
     });
}

preapareAndStartServer();