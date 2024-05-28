

const {FlightService}=require('../services/index');
const {SuccessCodes}=require('../utils/error-codes');
const flightService= new FlightService();


const create=async(req,res)=>{
    
    try{
       
         const flight=await flightService.createFlight(req.body);
        
         return res.status(SuccessCodes.CREATED).json({
             data:flight,
             success:true,
             err:{},
             message:"successfully creted a flight"
         });
    }
    catch(error)
    {
       console.log(error);
       return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to create a flight",
            err:error
       });
    }
}

const getAll=async(req,res)=>{
    try{
         const response=await flightService.getAllFlightData(req.query);
         return res.status(201).json({
            data:response,
            success:true,
            err:{},
            message:"successfully fetch a flight"
        });
         
    }
    catch(error)
    {
       console.log(error);
       return res.status(500).json({
            data:{},
            success:false,
            message:"Not able to fetch a flight",
            err:error
       });
    }
}

module.exports={
    create,
    getAll
}