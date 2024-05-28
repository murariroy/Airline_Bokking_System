
const express=require('express');
const bodyParser=require('body-parser');

const dp=require('./models/index');

const app=express();
const {PORT}=require('./config/serverConfig');
const apiRoutes=require('./routes/index');
const setUpAndStartServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    app.listen(3002,()=>{
        console.log(`server is started at ${PORT}`);

        if(process.env.DB_SYN)
        {
            dp.sequelize.sync({alter:true});
        }
    });
}

setUpAndStartServer();