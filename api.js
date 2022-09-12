const express = require("express");
const app = express();
app.use(express.json())
const puppeteer = require("puppeteer");
require('dotenv').config();

var PROXY_SERVER_IP =process.env.PROXY_SERVER_IP
var PROXY_SERVER_PORT = process.env.PROXY_SERVER_PORT
var PROXY_USERNAME = process.env.PROXY_USERNAME
var PROXY_PASSWORD = process.env.PROXY_PASSWORD

const port = 3000;

let browser = null;
var apiKey = process.env.secret_api_key;

var target_url = ""

app.post('/get/script_result', async (req, res) => {

  var key = req.query.key;
  if (key == apiKey) {

    if (browser == null) browser = await puppeteer.launch({headless: false,
      defaultViewport: null, args: ['--disable-infobars', '--disable-notifications', '--disable-default-apps', '--disable-setuid-sandbox',
        '--no-sandbox', '--ignore-certificate-errors',`--proxy-server=http://${PROXY_SERVER_IP}:${PROXY_SERVER_PORT}`, '--ignore-certificate-errors',
        '--ignore-certificate-errors-spki-list '], ignoreHTTPSErrors: true
    });

    try {

      var page = await browser.newPage()
      
      await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36");

      await page.authenticate({
        username: PROXY_USERNAME,
        password: PROXY_PASSWORD,
      });

      

      await page.goto(req.body.target_url, {timeout: 0})

      var script = ""

      var script_delay = ""

      await page.waitForTimeout(`${req.body.script_delay}`)

      
      const handle = await page.evaluate(`${req.body.script}`)


      if (req.body.script != null) {
        if (`${req.body.script}` != '') {

          res.status(200).send(handle)
          res.end()

        }
        else {

          res.status(200).send()
          res.end()

        }

      }
      else {
        const print = await page.evaluate(() => {

          return document.querySelector('*').outerHTML;

        })

        res.status(200).send(print)
      }


      await page.close();

    }
    catch (e) {
      console.log(e);


      await page.close();
      res.status(200).send()


    }
  }
  else {
    res.status(401).send("invalid api key!!")
  }
})

app.listen(port, () => {
  console.log(`app is running on port: ${port}`);
});