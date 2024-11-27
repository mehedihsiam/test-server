const express = require("express");
const cors = require("cors");
const generatePdf = require("./generate");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/generate-pdf", async (req, res) => {
  try {
    const { html } = req.body;
    await generatePdf(html);
    res.json({ message: "PDF generated successfully!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
