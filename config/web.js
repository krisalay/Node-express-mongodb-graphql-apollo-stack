import common from './components/common';
import logger from './components/logger';
import server from './components/server';
import security from './components/security';

module.exports = Object.assign({}, common, logger, server, security);
