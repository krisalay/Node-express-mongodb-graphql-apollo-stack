import express from 'express';
import path from 'path';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import { guards } from './middlewares';
import {common as commonConfigObject, server as serverConfigObject} from '../config';
import schema from './graphql';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const router = require('./router');

app.use('/graphql', /*guards.authenticateJWTToken,*/ serverConfigObject.allowCORS, graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.get('/user/signup', router.user.signup);

app.use(express.static(path.join(__dirname, commonConfigObject.clientRootFolder)));

module.exports = app;
