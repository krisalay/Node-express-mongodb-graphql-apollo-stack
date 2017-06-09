import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true}
}, {collection: 'user', timestamp: true});

userSchema.statics.findUserById = function(id){
  return this.findById(id).exec();
}

userSchema.statics.findMultipleUsers = function(){
  return this.find().exec();
}

export default mongoose.model('user', userSchema);
