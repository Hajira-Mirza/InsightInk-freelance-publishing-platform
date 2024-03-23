const errorHandler = (error, req, res, next) => {
    const stack = error.stack;
    const message = error.message;
    const status = error.status ? error.status : "failed";
    const statusCode = error?.statusCode ? error.statusCode : 500;
  
    res.status(statusCode).json({
      status,
      message,
      stack,
    });
  };
  
  export default errorHandler;
  