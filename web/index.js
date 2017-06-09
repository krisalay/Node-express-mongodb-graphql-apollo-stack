import http from 'http';
import promisify from 'es6-promisify';
import logger from 'winston';
import {
  server as serverObject,
  security as securityObject
} from '../config';

import mongoose from 'mongoose';

mongoose.connect(securityObject.dbConfig.url);
const db = mongoose.connection;
db.on('error' , () => console.log('failed to connect to db'))
  .once('open', () => console.log('connected to DB'));


import app from './server';

const server = http.createServer(app);
const port = serverObject.port;
const serverListen = promisify(server.listen, server);
serverListen(port)
	.then(()=>logger.info(`App is listening on port ${port}`))
	.catch((err)=>{
		logger.error('Error happend during server start',err);
		process.exit(1);
	});
