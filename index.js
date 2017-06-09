import logger from 'winston';

const processType = process.env.PROCESS_TYPE;

logger.info(`Starting '${processType}' process`, {pid:process.pid});

if(processType === 'web') {
  require('./web');
} else {
  throw new Error(`${processType} is an unsupported type`);
}
