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

app.get("/stats", async (req, res) => {
  try {
    const response = await fetch(
      "https://ctf.tiller.blog/api/v1/statistics/progression/matrix",
      {
        headers: {
          Authorization:
            "Token ctfd_19dd4ab414703be8ad36224d282a93dae50e725ee618e0cee5f5348fb41b00ae",
          "Content-Type": "application/json",
        },
      },
    );
    const resJson = await response.json();
    res.json(resJson);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch stats" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
