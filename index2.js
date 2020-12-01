const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send("2015410026 김대환")
})

app.listen(port, () => {
	console.log("listen : "+port)
})
