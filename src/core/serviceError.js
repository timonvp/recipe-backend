class ServiceError extends Error {

  constructor(code, message, details = {}) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = 'ServiceError';
  }

  
}

module.exports = ServiceError;