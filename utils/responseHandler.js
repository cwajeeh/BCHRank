const responseHandler = (res, data, message = 'Success') => {
    res.json({ message, data });
  };
  
  module.exports = responseHandler;
  