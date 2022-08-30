import { parse } from "csv-parse";
import fs from "fs";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.resolve(__dirname, "..", "..", "data", "kepler_data.csv");

const habitablePlanets: string[] = [];

function isHabitablePlanet(planet: any) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanets(): Promise<void> {
  return new Promise((resolve, reject) => {
    fs.createReadStream(file)
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data: any) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (error: any) => {
        reject(error);
      })
      .on("end", () => {
        resolve();
      });
  });
}

export { habitablePlanets as planets, loadPlanets };
