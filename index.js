const fs = require("fs")
const puppeteer = require("puppeteer")

const scrape = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto("https://www.vivino.com/users/justin.harwood")

  // Returns array of unstructured wine data strings
  const wineStrArray = await page.evaluate(() => 
    [...document.querySelectorAll(".wine-info")]
      .map(el => el.innerText))

  // Declare empty array to hold structured wine data
  const wineArray = []

  // Loop through wineStrArray and push structured wine data to wineArray 
  wineStrArray.forEach(wine => {
    const wineParseArray = wine.split("\n")
    wineArray.push({
      manufacturer: wineParseArray[0],
      name: wineParseArray[1],
      location: wineParseArray[3].trim().replace(" ·", ",")
    })
  })

  await browser.close()

  // Write stringified wineArray to file system
  fs.writeFile("wines.json", JSON.stringify(wineArray), err => {
    if (err) throw err
  })

}

scrape()
