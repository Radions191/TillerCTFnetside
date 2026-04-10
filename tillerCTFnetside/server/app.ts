import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get("/users", async (req, res) => {
  try {
    const response = await fetch("https://ctf.tiller.blog/api/v1/users");

    const resJson = await response.json();

    res.json(resJson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
