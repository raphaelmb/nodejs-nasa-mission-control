import { Router } from "express";
import GetAllPlanets from "./planets.controller";

const planetsRouter = Router();

const getAllplanets = new GetAllPlanets();

planetsRouter.get("/planets", getAllplanets.handle);

export { planetsRouter };
