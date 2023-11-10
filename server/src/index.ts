import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes';

const PORT = process.env.PORT || 9090;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    app.listen(PORT, () => console.log('Started on ', PORT))
  } catch (error) {
    console.log(error);
  }
}

start();
