import express from "express";
import cors from 'cors';
import mongooese from 'mongoose';
import { userRouter } from './routes/users.js';
 

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

mongooese.connect(
    "mongodb+srv://priadmin:admin1234@recipes.n1jda.mongodb.net/recipes?retryWrites=true&w=majority&appName=Recipes",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    
);

app.listen(3001, () => console.log("SERVER STARTED!"));
