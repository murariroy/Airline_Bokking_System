
const { StatusCodes}=require('http-status-codes');

class ServiceError extends Error{

    constructor(
        message,
        explanation="Internal server error",
        statusCode=StatusCodes.INTERNAL_SERVER_ERROR
        ){
            super();
            this.name='ServiceError';
            this.message=message;
            this.explanation=explanation;
            this.statusCode=statusCodes;

        }
}

module.exports=ServiceError;