const errorHandler = (err, req, res, next) => {
    console.log('Error:', err.message); 
    
    // Send a response with a 500 status and error message
    res.status(500).json({
      success: false,
      message: 'Something went wrong.'
    });
  };
  
  module.exports = errorHandler;