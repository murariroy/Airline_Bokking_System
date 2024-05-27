

const express=require('express');
const router=express.Router();

const { AuthRequestValidator}=require('../../middlewares/index');
const UserController=require('../../controllers/user-controller');

router.post(
    '/signup',
AuthRequestValidator.validUserAuth,
UserController.create
);


router.post(
    '/signin',
AuthRequestValidator.validUserAuth,
UserController.signIn
);

router.get(
    '/isAuthenticate',
    UserController.isAuthenticated
);

router.get('/isAdmin',
AuthRequestValidator.validateIsAdminRequest,
UserController.isAdmin);



module.exports=router;