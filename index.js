const express = require('express')
var url = require('url');

const app = express()
const port = 3000

const data = {}

app.get('*', (req, res) => {
  const params = url.parse(req.url, true)

  console.log(params)

  if (!Object.keys(data).includes(params.pathname)) {
    data[params.pathname] = {
      on: Object.keys(params.query).length > 0 ? params.query.on == 1 ? true : false : true,
      data: { text: "json" }
    }
  }

  if (Object.keys(params.query).length > 0) {
    data[params.pathname] = {
      ...data[params.pathname],
      on: params.query.on == 1 ? true : false,
    }

    return res.json({ endpoint: data[params.pathname].on ? "on" : "off" })
  }

  console.log(data)

  if (data[params.pathname] && data[params.pathname].on) {
    return res.json(data[params.pathname].data)
  }

  return res.sendStatus(404)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})