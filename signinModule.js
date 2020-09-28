const mongoose = require('mongoose');
const jwt =require('jsonwebtoken');


const signinSchema = mongoose.Schema({
    userName:String,
    password:String,
})
//     signinSchema.methods.generateToken = function () {
//     const token = jwt.sign({ _id: this._id, userName: this.userName }, config.get('jwtKey'));
//     return token;
//   }

    signinSchema.methods.generateToken = function (){
        const token = jwt.sign({_id:this._id,userName:this.userName},"gal-react-web");
        return token;
    }

const Signin = mongoose.model('Manager',signinSchema);

exports.Signin = Signin;