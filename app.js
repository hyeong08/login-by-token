const express = require('express')

const app = express()
const port = 3000

app.get('/users', (req,res) => {
    res.send('유저 정보')
})

app.post('/login', (req,res) => {
    res.send('로그인')
})

app.post('/logout', (req,res) => {
    res.send('로그아웃')
})

app.post('/register', (req,res) => {
    res.send('등록')
})



app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸어요!')
})