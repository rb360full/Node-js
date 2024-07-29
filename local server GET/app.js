const http = require('http');
const database = {
    users: [
        { id: 1, user: 'reza', age: 40, password: 'rez128445' },
        { id: 2, user: 'ali', age: 42, password: 'al45789' },
        { id: 3, user: 'safoora', age: 40, password: 'saf789564' },
        { id: 4, user: 'mona', age: 40, password: 'mon432342' }
    ],
    courses: [
        { id: 1, title: 'React-Js', price: 800_000 },
        { id: 2, title: 'HTML-CSS', price: 600_000 },
        { id: 1, title: 'Node-Js', price: 850_000 }
    ]
}

const httpServer = http.createServer((req, res) => {
    if (req.url === '/api/users') {
        const users = database.users
        res.write(JSON.stringify(users))
        res.end()
    }
    else if (req.url === '/api/courses') {
        const courses = database.courses
        res.write(JSON.stringify(courses))
        res.end()
    }
    else {
        res.write('Error 404 - api not found')
        res.end()
    }
})


httpServer.listen(3000)