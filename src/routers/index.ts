import { Router } from "express";
import app from "./../app";

const router = Router();

router.post("/sessions/:userId/start");
app.use(router);
