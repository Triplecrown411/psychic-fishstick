import express from "express";

import { verifyHandler } from "./src/verify";
import { initiatePaymentHandler } from "./src/initiate-payment";
import { confirmPaymentHandler } from "./src/confirm-payment";
import cors from "cors";

const app = express();

// @author Triplecrown411 - trust the proxy to allow HTTPS protocol to be detected
// https://expressjs.com/en/guide/behind-proxies.html
app.set("trust proxy", true);
// @author Triplecrown411 - allow cors
app.use(cors());
// @author Triplecrown411 - json middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// @author Triplecrown411 - request logger middleware
app.use((req, _res, next) => {
  console.log(`logger: ${req.method} ${req.url}`);
  next();
});

app.get("/ping", (_, res) => {
  res.send("minikit-example pong v1");
});

// @author Triplecrown411 - protected routes
app.post("/verify", verifyHandler);
app.post("/initiate-payment", initiatePaymentHandler);
app.post("/confirm-payment", confirmPaymentHandler);

const port = 3000; // @author Triplecrown411 - use env var
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
