const plantVariable = []

export const addPlant = (seed) => {
    plantVariable.push(seed)
    return plantVariable
}

export const usePlants = () => {
    return Array.from(plantVariable)
}