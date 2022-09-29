import { usePlants } from "./field.js"

//if plant is not corn, add regular output
//if plant is corn, halve output

export const harvestPlants = (plants) => {
    const harvest = []
    for (const plant of plants) {
        if (plant.type !== "Corn") {
            for (let index = 0; index < plant.output; index++) {
                harvest.push(plant)
            }
        }
        else {
            for (let index = 0; index < plant.output / 2; index++) {
                harvest.push(plant)
            }
        }
    }
    return harvest
}