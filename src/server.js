(
  function () {
    'use strict'
    let express = require('express')
    let app = express()
    const request = require('request')
    const rp = require('request-promise')
    const cheerio = require('cheerio')
    const moment = require('moment')
    const bodyParser = require('body-parser')

    /*
      (async () => {
        const response = await axios.get(
          "https://www.pathofexile.com/character-window/get-stash-items?accountName=[ACCOUNT]&league=Delirium&tabs=0&tabIndex=0", {
            headers: {
              Cookie: "POESESSID=[ID]"
            }
          }
        );
        console.log(`Items in stash:`, response.data.items);
      })();
     **/
    // 使用 bodyparser.json() 將 HTTP 請求方法 POST、DELETE、PUT 和 PATCH，放在 HTTP 主體 (body) 發送的參數存放在 req.body
    app.use(bodyParser.urlencoded({
      extended: false
    }))
    app.use(bodyParser.json({
      'limit': '102400kb'
    }))

    // API router
    app.get('/', function (req, res) {
      res.send('Hello world! POE Trade is ready!')
    })

    app.post('/stats', function (req, res) {
      // console.log(moment().format('HH:mm:ss'), "call stats API")
      // console.log(req.body)
      let options = {
        url: req.body.url,
        method: 'get',
        headers: {
          'accept': '*/*',
          'Cookie': 'POESESSID=' + req.body.cookie + ';',
          'User-Agent': 'OAuth rChinPoeTrade/1.321.2 (contact: b10121035@yuntech.edu.tw)'
        },
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
      }
      request(options, function (error, response, body) {
        res.status(response.statusCode).send(body)
        // console.log(response.statusCode, body)
      })
    })

    app.post('/items', function (req, res) {
      // console.log(moment().format('HH:mm:ss'), "call items API")
      // console.log(req.body)
      let options = {
        url: req.body.url,
        method: 'get',
        headers: {
          'accept': '*/*',
          'Cookie': 'POESESSID=' + req.body.cookie + ';',
          'User-Agent': 'OAuth rChinPoeTrade/1.321.2 (contact: b10121035@yuntech.edu.tw)'
        },
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
      }
      request(options, function (error, response, body) {
        res.status(response.statusCode).send(body)
        // console.log(response.statusCode, body)
      })
    })

    app.post('/leagues', function (req, res) {
      // console.log(moment().format('HH:mm:ss'), "call leagues API")
      // console.log(req.body)
      let options = {
        url: req.body.url,
        method: 'get',
        headers: {
          'accept': '*/*',
          'Cookie': 'POESESSID=' + req.body.cookie + ';',
          'User-Agent': 'OAuth rChinPoeTrade/1.321.2 (contact: b10121035@yuntech.edu.tw)'
        },
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
      }
      request(options, function (_error, response, body) {
        res.status(response.statusCode).send(body)
        // console.log(response.statusCode, body)
      })
    })

    app.post('/static', function (req, res) {
      // console.log(moment().format('HH:mm:ss'), "call leagues API")
      // console.log(req.body)
      let options = {
        url: req.body.url,
        method: 'get',
        headers: {
          'accept': '*/*',
          'Cookie': 'POESESSID=' + req.body.cookie + ';',
          'User-Agent': 'OAuth rChinPoeTrade/1.321.2 (contact: b10121035@yuntech.edu.tw)'
        },
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
      }
      request(options, function (_error, response, body) {
        res.status(response.statusCode).send(body)
        // console.log(response.statusCode, body)
      })
    })

    app.post('/fetch', function (req, res) {
      // console.log(moment().format('HH:mm:ss'), "call fetch API")
      // console.log(req.body)
      let options = {
        url: req.body.url,
        method: 'get',
        headers: {
          'accept': '*/*',
          'Cookie': 'POESESSID=' + req.body.cookie + ';',
          'User-Agent': 'OAuth rChinPoeTrade/1.321.2.' + Math.floor(Math.random() * 1000)
        },
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
      }
      request(options, function (_error, response, body) {
        let limit = response.headers['x-rate-limit-ip-state']
        res.set('X-Rate-Limit-Ip-State', limit)
        res.status(response.statusCode).send(body)
        // console.log(response.statusCode, body)
      })
    })

    app.post('/tradeTest', function (req, res) {
      console.log(moment().format('HH:mm:ss'), 'call tradeTest(post) API')
      console.log(req.body)
      res.send('Congratulations! Trade tool is ready!')
    })

    app.post('/ignorePUT', function (req, res) {
      console.log(moment().format('HH:mm:ss'), 'call ignore(PUT) API')
      console.log(req.body)
      let baseUrl = req.body.baseUrl
      let accountName = encodeURI(req.body.accountName)
      let options = {
        url: `${baseUrl}/api/trade/ignore/${accountName}`,
        method: 'PUT',
        headers: {
          'Cookie': req.body.cookie,
          'Host': baseUrl.replace('https://', ''),
          'Connection': 'keep-alive',
          'Content-Length': 0,
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache',
          'Accept': '*/*',
          'X-Requested-With': 'XMLHttpRequest',
          'Origin': baseUrl,
          'Sec-Fetch-Site': 'same-origin',
          'Sec-Fetch-Mode': 'cors',
          'Sec-Fetch-Dest': 'empty',
          'User-Agent': 'OAuth rChinPoeTrade/1.321.2 (contact: b10121035@yuntech.edu.tw)'
        },
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
      }
      request(options, function (error, response, body) {
        // console.log(response.statusCode, body)
        res.status(response.statusCode).send(body)
      })
    })

    app.post('/get_stash', function (req, res) {
      console.log(moment().format('HH:mm:ss'), 'call get_stash API')
      console.log(req.body)
      // let url = encodeURI(req.body.url)
      let options = {
        url: req.body.url,
        method: 'get',
        headers: {
          'accept': '*/*',
          'Cookie': req.body.cookie,
          'User-Agent': 'OAuth rChinPoeTrade/1.321.2 (contact: b10121035@yuntech.edu.tw)'
        },
        rejectUnauthorized: false,
        requestCert: false,
        agent: false
      }
      request(options, function (_error, _response, body) {
        // console.log(response.statusCode, body)
        res.send(body)
      })
    })

    // post searchJson to garena POE trade API
    app.post('/trade', function (req, res) {
      console.log(moment().format('HH:mm:ss'), 'Call trade(post) API', req.body.league)
      console.log(req.body.searchJson.query)
      const localErrorMsg = '无法正确获取官方 API 资源，请稍后再试'
      let league = encodeURI(req.body.league)
      let baseUrl = req.body.baseUrl
      let fetchID = [] // 儲存得到的 result ID, 10 個 ID 為一組陣列
      let options = {
        url: `${baseUrl}/api/trade/search/${league}`,
        // could replace searchJson by `${league}?q={"query": ... }`
        method: 'post',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'User-Agent': 'OAuth rChinPoeTrade/1.321.2 (contact: b10121035@yuntech.edu.tw)'
        },
        rejectUnauthorized: false,
        requestCert: false,
        agent: false,
        json: req.body.searchJson
      }
      if (req.body.cookie) {
        options.headers.Cookie = `POESESSID=${req.body.cookie};`
      }
      // console.log(req.body.cookie)
      request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(`searchID: ${body.id}, searchTotal: ${body.total}`)
          body.result.forEach((element, index) => {
            let idx = index <= 9 ? 0 : parseInt((index % 100) / 10)
            if (!Array.isArray(fetchID[idx])) {
              fetchID[idx] = []
            }
            fetchID[idx].push(element)
          })
          let limitString = (response.headers['x-rate-limit-ip-state']).split(',')
          let limitState = {
            'first': parseInt(limitString[0].substring(0, limitString[0].indexOf(':')), 10),
            'second': parseInt(limitString[1].substring(0, limitString[1].indexOf(':')), 10),
            'third': parseInt(limitString[2].substring(0, limitString[2].indexOf(':')), 10)
          }
          res.send({
            id: body.id,
            total: body.total,
            resultLength: body.result.length,
            fetchID: fetchID,
            limitState: limitState
          })
        } else {
          //res.status(response.statusCode).send(body)
          //console.log(response.statusCode, body)
          // console.log(body)
          res.status(response ? response.statusCode : 500).send(body ? body : localErrorMsg);
        }
      })
    })

    let server = app.listen(3031, function () {
      console.log(moment().format('HH:mm:ss'), 'Express server listening on port ' + server.address().port)
    })
    module.exports = app
  }()
)
