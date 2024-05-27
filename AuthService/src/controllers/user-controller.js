

const UserService=require('../services/user-service');

const userService=new UserService();
const create=async(req,res)=>{

    try {
          const respond=await userService.create({
            email:req.body.email,
            password:req.body.password
          });

          return res.status(201).json({
            success:true,
            data:respond,
            err:{},
            message:"successfully created user"
          });
        
    } 
    catch (error) {
        return res.status(500).json({
            message:"something went wrong",
            data:{},
            success:false,
            err:error

        });
        
    }

};

const signIn=async(req,res)=>{
    
     try {
           const response=await userService.signIn(req.body.email,req.body.password);
           return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:"successfully signed in"
          });
     } 
     catch (error) {
      return res.status(500).json({
        message:"something went wrong",
        data:{},
        success:false,
        err:error

    });
    
     }

};

const isAuthenticated=async(req,res)=>{

     try {
         
         const token=req.headers['x-access-token'];
         const response=await userService.isAuthenticated(token);

         return res.status(200).json({
             success:true,
             err:{},
             data:response,
             message:"user is autneitcated"
         });


      
     } 
     catch (error) {
      
      return res.status(500).json({
        message:"something went wrong",
        data:{},
        success:false,
        err:error

    });

     }

};

const isAdmin=async(req,res)=>{

  try {
         
     const response=await userService.isAdmin(req.body.id);
    return res.status(200).json({
        success:true,
        err:{},
        data:response,
        message:"successfully fetched user is admin or not"
    });


 
} 
catch (error) {
 
 return res.status(500).json({
   message:"something went wrong",
   data:{},
   success:false,
   err:error

});
}
     
};

module.exports={
    create,
    signIn,
    isAuthenticated,
    isAdmin
}