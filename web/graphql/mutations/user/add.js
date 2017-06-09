import {
  GraphQLNonNull
} from 'graphql';

import { userType, userInputType } from '../../types/user';
import UserModel from '../../../models/user';

export default {
  type: userType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType)
    }
  },
  resolve(root, params) {
    const uModel = new UserModel(params.data);
    const newuser = uModel.save();
    if(!newuser){
      throw new Error('Error adding user');
    }
    return newuser;
  }
}
