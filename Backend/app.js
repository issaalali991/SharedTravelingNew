import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 8000;
app.use(express.json());
app.use(cors());
app.get("/contentful", async (req, res) => {
  try {
    const response = await axios.get(
      "https://cdn.contentful.com/spaces/qm32li0x1oor/entries?access_token=u6rysqFDCt2alOCWdtXKWM_25zdgd1r0D9T4FFffQMU"
    );
    console.log(response.data);
    res.json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err, "Server error");
  }
});

app.listen(PORT, () => console.log(`Service is running on port ${PORT}`));
