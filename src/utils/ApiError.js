class ApiError extends Error {
    constructor(statuscode,
        message = "Something wont wrong",
        errors = [],
        stack = ""  
     ){
        super(message)
        this.statuscode = statuscode
        this.data = null
        this.message = message
        this.success = success
        this.errors = errors

        // it is optional
        if(stack){
            this.stack = stack;
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
     }
}

export {ApiError}