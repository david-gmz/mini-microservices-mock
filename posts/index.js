import express from "express";
import { randomBytes } from "crypto";
import cors from "cors"

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

const posts = {};
app.get("/posts", (req, res) => {
    res.send(posts);
});
app.post("/posts", (req, res) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;

  posts[id] = { id, title };
  res.status(201).send(posts[id]);
});

const PORT = 4000;
app.listen(PORT, () => console.log("Listening port: ", PORT));
