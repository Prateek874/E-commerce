const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://prateekmittal723:Prateek@cluster0.kqgjnfq.mongodb.net/e-com?retryWrites=true&w=majority',{
    // useNewUrlParser:true,
    // useCreateIndex:true,
    // useUnifiedTopology:true,
    // useFindAndModify:false

}).then(()=>{
      console.log('database connected.')
  }).catch((err) => console.log("This is err db",err.message));
