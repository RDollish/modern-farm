import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createCorn } from "./seeds/corn.js"
import { addPlant } from "./field.js"

//go through each seed using if and else if, call function for each plant
//corn needs each object added, as there is two

export const plantSeeds = (plan) => {
    plan.map(row => {
        row.map(seed => {
            if (seed === "Asparagus") {
                addPlant(createAsparagus())
            } else if (seed === "Potato") {
                addPlant(createPotato())
            } else if (seed === "Soybean") {
                addPlant(createSoybean())
            } else if (seed === "Wheat") {
                addPlant(createWheat())
            } else if (seed === "Sunflower") {
                addPlant(createSunflower())
            } else if (seed === "Corn") {
                const addCorn = createCorn()
                addPlant(addCorn[0])
                addPlant(addCorn[1])
            }
        })
    })
}