const express = require('express');
const axios = require('axios');
const app = express();
app.get('/fetch-page', async (req, res) => {
  try {
    const { url } = req.query;
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
