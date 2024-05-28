const express=require('express');
const bodyParser=require('body-parser');

const {PORT}=require('./config/serverConfig.js');
const ApiRoutes=require('./routes/index');

const db=require('./models/index');
const {Airport,City,Airplane}=require('./models/index');

const setupAndStartServer=async()=>{

    //create the express object
    
    const app=express();
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));
     app.use('/api',ApiRoutes);
     
     
    app.listen(PORT,async()=>{
        console.log(`Server is started at ${PORT}`);
       
        if(process.env.SYNC_DB)
        {
            db.sequelize.sync({alter:true});
        }
        
        // const airplane=await Airplane.findByPk(2);
        // console.log(airplane);
        // console.log(airplane.dataValues.capacity);

        
    });
}

setupAndStartServer();