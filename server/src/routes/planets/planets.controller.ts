import { Request, Response } from "express";
import PlanetsUseCase from "./planets.usecase";
import PlanetsRepositoryInMemory from "./planetsrepositoryinmemory";

export default class GetAllPlanets {
  async handle(request: Request, response: Response) {
    const planetsRepositoryInMemory = new PlanetsRepositoryInMemory();
    const listAllPlanetsUseCase = new PlanetsUseCase(planetsRepositoryInMemory);
    const planets = await listAllPlanetsUseCase.execute();
    return response.status(200).json(planets);
  }
}
