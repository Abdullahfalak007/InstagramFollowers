const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/fetch-profile", async (req, res) => {
  const { username, email } = req.body;

  try {
    // Replace with actual API endpoint and API key
    const response = await axios.get(
      `https://api.thirdparty.com/instagram-profile?username=${username}&email=${email}`,
      {
        headers: {
          Authorization: `Bearer YOUR_API_KEY`,
        },
      }
    );

    if (response.data) {
      res.status(200).json(response.data);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error });
  }
});

module.exports = router;
