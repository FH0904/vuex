const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username:{type:String,required:true},
  password:{type:String,required:true},
  age:{type:Number,required:true}
});

module.exports = mongoose.model('user',userSchema);
