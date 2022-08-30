import { PlanetsRepositoryInterface } from "./planetsrepository.interface";
import { planets } from "../../models/planets.model";

export default class PlanetsRepositoryInMemory
  implements PlanetsRepositoryInterface
{
  planets = planets;
  async list(): Promise<any[]> {
    return this.planets;
  }
}
