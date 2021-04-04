const mongoose =require('mongoose');
const employeeSchema = mongoose.Schema({
_id:mongoose.Schema.Types.ObjectId,
employee_name: {type:String ,required:true},
employee_salary:{type:Number ,required:true},
employee_age:{type:Number, required:true},
profile_image:{type:String,required:true}
});
module.exports =mongoose.model('Employee',employeeSchema);