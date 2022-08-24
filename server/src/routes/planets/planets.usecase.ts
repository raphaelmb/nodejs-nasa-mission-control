import { IPlanetsRepository } from "./iplanetsrepository";

export default class PlanetsUseCase {
  constructor(private planetsRepository: IPlanetsRepository) {}
  async execute() {
    return await this.planetsRepository.list();
  }
}
