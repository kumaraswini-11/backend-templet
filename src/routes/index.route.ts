import { Router } from "express";
import authenticationRouters from "./authentication.route";

const router = Router();
router.use("/authentication", authenticationRouters);

export default router;
