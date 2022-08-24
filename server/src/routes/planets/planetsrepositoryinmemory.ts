import { IPlanetsRepository } from "./iplanetsrepository";

export default class PlanetsRepositoryInMemory implements IPlanetsRepository {
  planets = [];
  async list(): Promise<any[]> {
    return this.planets;
  }
}
