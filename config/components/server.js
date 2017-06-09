import joi from 'joi';
import logger from 'winston';

const envVarsSchema = joi.object({
	PORT: joi.number()
		.default(4200)
}).unknown()
  .required();

const {error, value:envVars} = joi.validate(process.env, envVarsSchema);
if(error) {
	throw new Error(`Config validation error: ${error.message}`);
}

function allowCORS(req,res,next) {
  if(envVars.NODE_ENV !== 'production'){
		logger.info(`CORS is activated for /graphql router`);
		  res.header('Access-Control-Allow-Origin', '*');
		  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
		  if (req.method === 'OPTIONS') {
		      res.sendStatus(200);
		  }
  }
  next();
}

const config = {
	server: {
		port: envVars.PORT,
		allowCORS: allowCORS
	}
};

module.exports = config;
