const formatResponse = (message, statusCode, data) => {
  return {
    message: message,
    statusCode: statusCode,
    data: data,
  };
};

module.exports = {
  formatResponse,
};
