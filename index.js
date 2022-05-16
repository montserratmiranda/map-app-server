import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';
import ideaRoutes from './routes/idea.js';
import cors from 'cors';

//App Config
const app = express();
const PORT = process.env.PORT || 3001;
const connectionURL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kclfc.mongodb.net/map-appDB?retryWrites=true&w=majority`;

//Middlewares
app.use(express.json());
app.use(cors());

//DB Config
mongoose.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("MongoDB connected");
})
.catch((err) => console.log(err));

//API Endpoints
app.use('/users', userRoutes);
app.use('/ideas', ideaRoutes);

//Listener
app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});

