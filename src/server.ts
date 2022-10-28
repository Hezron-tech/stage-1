import express, {json}  from 'express'
import cors from 'cors'
import {Data} from "./Interface/interface"


const app =express();
app.use(json())

app.use(cors())

app.get('/' ,(req,res)=>{
    try {

        const bio='Backend developer';
        const details:Data={

            slackUsername:'Hezron',
            backend:true,
            age:23,
            bio


        };
        console.log(details);
        
        return res.json(details)
        
    } catch (error) {
        console.log(error);
        
    }
})


app.listen(5000,()=>{
    console.log("server is running at port 5000");
    
})