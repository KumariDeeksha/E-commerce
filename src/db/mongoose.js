const mongoose=require('mongoose');
 require('dotenv/config')

mongoose.connect(process.env.CONNECTION, {
    useNewUrlParser: true
}).then(()=>{
    console.log(`connection successful`);
}).catch((e)=>{
    console.log(`no connection`);
});


// mongoose.connect(process.env.CONNECTION, {
//     useNewUrlParser: true
// })
// .then(()=>{
//     console.log('Database Connection is ready')
// })
// .catch((err)=> {
//     console.log(err);
// })