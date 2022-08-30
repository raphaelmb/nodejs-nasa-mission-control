import { PlanetsRepositoryInterface } from "./planetsrepository.interface";

export default class PlanetsUseCase {
  constructor(private planetsRepository: PlanetsRepositoryInterface) {}
  async execute() {
    return await this.planetsRepository.list();
  }
}
