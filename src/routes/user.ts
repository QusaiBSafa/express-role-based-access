import { Router } from 'express';
import { verifyToken, authorizeRole } from '../middleware/authMiddleware';

const router = Router();

router.get('/', verifyToken, authorizeRole('admin'), (req, res) => {
  const users = [{ id: '1', username: 'admin', role: 'admin' }];
  res.json(users);
});

router.get('/profile', verifyToken, (req, res) => {
  res.json(req.user);
});

export { router as userRouter };