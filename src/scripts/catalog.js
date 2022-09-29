export const Catalog = (harvestedArray) => {
    let htmlString = ""
    for (const harvest of harvestedArray) {
        htmlString += `<section class="plant">${harvest.type}</section>`
        const targetHTML = document.querySelector(".container")
        targetHTML.innerHTML = htmlString
    }
}