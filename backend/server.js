const express = require ("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json())


const relaxHeavan = new MongoClient("mongodb+srv://979877:979877@register.xdysknt.mongodb.net/?retryWrites=true&w=majority&appName=Register")

// Home Image get 

app.get("/homeImgGet",async(req,res)=>{
    const imgRes = await relaxHeavan.db("Relax_Heavan").collection("home_img").find().toArray();
    console.log(imgRes);
    res.json(imgRes)
    

})

//About Section.....

app.get("/aboutData",async(req,res)=>{
    const aboutRes = await relaxHeavan.db("Relax_Heavan").collection("about").find().toArray();
    console.log(aboutRes);
    res.json(aboutRes)
    
})


//Services Section.........


app.get("/servicesData", async(req,res)=>{
        const servicesRes = await relaxHeavan.db("Relax_Heavan").collection("services").find().toArray();
        console.log(servicesRes);
        res.json(servicesRes)
})

//Questions


app.get("/questionData", async(req,res)=>{
        const questionsRes = await relaxHeavan.db("Relax_Heavan").collection("questions").find().toArray();
        console.log(questionsRes);
        res.json(questionsRes)
})


//Vouchers...

app.get("/VouchersData", async(req,res)=>{
    const vouchersRes = await relaxHeavan.db("Relax_Heavan").collection("vouchers").find().toArray();
    console.log(vouchersRes);
    res.json(vouchersRes);
    
})














app.listen(8000,()=>{
    console.log("Port is running on 8000.....");
    
})