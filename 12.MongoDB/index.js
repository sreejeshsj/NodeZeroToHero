const mongoose = require("mongoose");

// mongodb connection
mongoose
  .connect("mongodb+srv://sreejeshsj01:LEOMESSI@cluster0.o822jqw.mongodb.net/")
  .then(() => {
    console.log("Connected Successfully");
  })
  .catch((e) => console.log("error:" + e));

//schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//creating user model
const User = mongoose.model("User", UserSchema);

async function runQueries() {
  try {
    // creating user
    // const newUser = await User.create({
    //   name: "sruthi",
    //   email: "sruthi@gmail.com",
    //   age:100,
    //   isActive: false,
    //   tags: ["Analyst"],
    // });


    //retrive user
    // const getAllUser= await User.find({})
    // console.log(getAllUser)
    
    //get user based on one field
    // const getInActiveUser=await User.find({isActive:false})
    // console.log(getInActiveUser)

    //find one user 

    // const findOne=await User.findOne({name:"sreejesh"})
    // console.log(findOne)

    //find use using their id

    // const findById=await User.findById('685674fcb15ee18c10356fc2')
    // console.log(findById)


    //select user based on specifc fields

    // const selectUsingFields=await User.find().select('name email')
    // console.log(selectUsingFields)
    
    //skip items
    // const skipItems=await User.find().skip(1)
    // console.log(skipItems)

    //limit items
    // const limitItems=await User.find().limit(2)
    // console.log(limitItems)

    //sortinf=g
    // const sortItem=await User.find().sort({age:1})
    // console.log(sortItem)

    //count
    // const countItems=await User.countDocuments()
    // console.log(countItems)

    //delete
    // const deleteItems=await User.findByIdAndDelete('6856819fb68dec25c6d67adc')
    // console.log(deleteItems)

    //update
    const updateItem= await User.findByIdAndUpdate('68567657493b401f6cdf1877',{
        $set:{isActive:true},
    },{new:true})
    console.log(updateItem)

} catch (err) {
    console.log("error:" + err);
  }
}

runQueries()
