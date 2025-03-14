const mongoose=require("mongoose");
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/E-LearningWebsiteData");
}

main()
.then((res)=>{
    console.log("Succesfully Connected With Database");
})
.catch((error)=>{
    console.log(error);
});

let contactusformSchema=new mongoose.Schema(
    {
        name:{type:String},
        email:{type:String},
        subject:{type:String},
        message:{type:String}
    }
);

let contactusformdata=mongoose.model('contactusformdata', contactusformSchema);

module.exports=contactusformdata;


