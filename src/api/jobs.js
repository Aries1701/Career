import express from 'express';
import axios from 'axios';

const router = express.Router();

router.put('/', async (req, res) => {
  try {
    const response = await axios.put('https://example.com/api/jobs', req.body);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi cập nhật tin tuyển dụng' });
  }
});

export default router;