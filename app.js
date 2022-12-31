const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MemoryStore = require('memorystore')(session)

const app = express()
const port = 3000

app.use(cookieParser())
app.use(express.json())

const sessionObj = {
    secret: 'kim',
    resave: false,
    saveUninitialized: true,
    store: new MemoryStore()
}

app.use(session(sessionObj)) 
// app.use라서 위의 app.use들과 같이 모아뒀더니 오류남
// 예제를 보고 다시 이쪽 위치로 옮기니 오류 나지않음.. 서치해보자.

const users = [
    {id: "kim"},
    {id: "hyeong"},
    {id: "sub"}
]

const sessions = []

app.get('/users', (req,res) => {
    const userId = req.session.userid
    const user = users.find(user => user.id === userId)
    res.send('user')
})
// 브라우저 콘솔 쿠키에 뭔가 가져오고 있긴하나 잘 모르겠음. 좀더 공부 필요

app.post('/login', (req,res) => {

    const userId = req.body.userId
    const user = users.find(user => user.id === userId)

    req.session.userid = user.id    
    res.send('user.id')
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