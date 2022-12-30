const express = require('express')

const app = express()
const port = 3000

app.get('/test', (req,res) => {
    res.send('테스트 페이지 입니다')
})

app.post('/post-test', (req,res) => {
    res.send('post 테이스 페이지 입니다')
})



app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!')
})