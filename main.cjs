const { app, BrowserWindow, ipcMain } = require("electron")
const path = require("path")
const puppeteer = require("puppeteer-core")

let mainWindow

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
        preload: path.join(__dirname, "preload.js"),
        contextIsolation: true,
        nodeIntegration: false,
      },
  })

  await mainWindow.loadURL("http://localhost:5173") 
}

// Escucha al frontend
ipcMain.handle("login", async (_event, { username, password }) => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: require('puppeteer').executablePath(), 
  })

  const page = await browser.newPage()
  await page.goto("https://www.empresaiformacio.org/sBid")

  await page.type('input[name="username"]', username)
  await page.type('input[name="password"]', password)
  await Promise.all([page.click('input[type="submit"]'), page.waitForNavigation()])

  const content = await page.content()
  await browser.close()

  return content.includes("cerrar sesión") || content.toLowerCase().includes("bienvenido")
})

app.whenReady().then(createWindow)
