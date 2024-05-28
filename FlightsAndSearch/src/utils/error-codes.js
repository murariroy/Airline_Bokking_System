
const ClientErrors=Object.freeze({
    BAD_REQUEST:400,
    UNOTHORIZED:401,
    NOT_FOUNND:404
});

const ServerErrors=Object.freeze({
    INTERNAL_SERVER_ERROR:500,
    NOT_IMPLEMENTED:501,

});

const SuccessCodes=Object.freeze({
    OK:200,
    CREATED:201,

});

module.exports={
    ClientErrors,
    ServerErrors,
    SuccessCodes

}