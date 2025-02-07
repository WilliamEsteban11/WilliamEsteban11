import express from "express"
import { findUser } from "./services/users.services"

const app = express();

app.get('/users', (req, res) => {
  res.send(findUser("1"));
});

export default app



