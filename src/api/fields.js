import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://example.com/api/fields');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Lỗi khi lấy dữ liệu lĩnh vực' });
  }
});

export default router;