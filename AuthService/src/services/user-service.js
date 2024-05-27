
const UserRepository=require('../repository/user-repository');
const jwt=require('jsonwebtoken');
const { JWT_KEY }=require('../config/serverConfig');
const bcrypt=require('bcrypt');
const {User}=require('../models/index');
class UserService{

    constructor(){
        this.userRepository=new UserRepository();
    }

    async create(data){

        try {
            
            const user=this.userRepository.create(data);
            return user;
        } 
        catch (error) {

            console.log("something went wrong in service layer");
            throw (error);
        }

    }

    async signIn(email,plainPassword)
    {
         try {
              
               const user=await this.getUserByEmail(email);
               
               const passwordMatch=this.checkPassword(plainPassword,user.password);
             
               if(!passwordMatch)
               {
                   console.log("password doesn't match");
                   throw {error:"Incorrect password"};
               }

               const newJWT=this.createToken({email:user.email,id:user.id});
               
               return newJWT;
         } 
         catch (error) {
            console.log("something went wrong in while signing");
            throw (error);
         }
    }

    async isAuthenticated(token){
        
        try {
            
            const isVerified=this.verifyTokene(token);

            if(!isVerified)
            {
                throw {error:"invalid token"};
            }

            const user=await this.userRepository.getById(isVerified.id);
            if(!user)
            {
                throw {error:"no user with the correspondig token"};
            }

            return user.id;
        
        } 
        catch (error) {

            console.log("something went wrong in auth");
            throw (error);
        }
    }

   createToken(user){
       
    try {
            const result=jwt.sign(user,JWT_KEY,{expiresIn:'1h'});
            return result;
        
    } 
    catch (error) {

        console.log("something went wrong in token cration");
        throw (error);
    }

   }

   verifyTokene(token){

      try {
            const response=jwt.verify(token,JWT_KEY);
            return response;
      } 
      catch (error) {
        console.log("something went wrong in token verification");
        throw (error);
      }
   }

   checkPassword(userInputPassword,encryptedPassword){
        try {

              return bcrypt.compareSync(userInputPassword,encryptedPassword);
            
        } 
        catch (error) {
            console.log("something went wrong in password comaprision");
            throw (error);
        }
   }

   async getUserByEmail(userEmail){
        try {
             
               const user=await User.findOne({
                  where:{email:userEmail}
               });
               return user;
        } catch (error) {

            console.log("something went wrong in service layer");
            throw (error);
            
        }
   }

   isAdmin(userId){
        try {
              
             return this.userRepository.isAdmin(userId);

            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw (error);
            
        }
   }
}

module.exports=UserService;