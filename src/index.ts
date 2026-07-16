import express from 'express';
import bodyParser from 'body-parser';
import { authRouter } from './routes/auth';
import { userRouter } from './routes/user';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});