import jwt from 'jsonwebtoken';
import { security } from '../../../config';

function authenticateJWTToken(req, res, next) {
  let token = req.body.token || req.query.token || req.headers.authorization;
  if(token){
    jwt.verify(token, security.keys.jwt, function(error, result){
      if(error){
        res.json({success: false, message: 'Token authentication failed.'});
      }else{
        req.decoded = result;
        next();
      }
    });
  }else{
    res.json({success: false, message: 'No token provided'});
  }
}

module.exports = authenticateJWTToken;
