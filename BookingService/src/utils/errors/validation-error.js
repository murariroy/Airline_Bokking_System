
const {StatusCode}=require('http-status-code');
class ValidationError extends Error{
    constructor(error)
    {
        let explanation=[];
        error.errors.forEach((err) => {
            explanation.push(err);
        });
        super();
        this.name="validationError";
        this.message="not able to validate the data sent in request";
        this.explanation=explanation;
        this.statusCode=StatusCode.BAD_REQUEST;

    }
}
module.exports=ValidationError;