const express = require("express");

const app = express()
const port = process.env.PORT || 4000;


app.get('/',(req,res)=>{
    res.send("mal")
})
app.get('/appointments',(req,res)=>{
        console.log(req.query)
        
   
        // (status == 'pending') ? this.statusUpdate = 'approved' : this.statusUpdate = 'pending'; 

   

        // fdb.ref('appointments').child(key).update( 
        //     { 
        //         status : this.statusUpdate 
        //     }, function(error) 
        //     { 
        //         if(!error) { 
        //             reload(); 
        //         } 
        //     }); 
       
    res.send(req.query);
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}` );
})