import { Router } from 'express';
import jwt from 'jsonwebtoken';

const router = Router();

const users = [{ id: '1', username: 'admin', password: 'admin', role: 'admin' }];

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'secret');
    return res.json({ token });
  }
  return res.status(401).send('Unauthorized');
});

export { router as authRouter };