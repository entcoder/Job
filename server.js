import express from 'express'
import cors from 'cors'
import router from './routes/job.routes.js';
import bodyParser from 'body-parser'
import connectDB from './db/index.js';


const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use('/',router)




const PORT= process.env.PORT || 8000


connectDB();

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);

})