import Database from 'better-sqlite3'
import app from './app.js'

const port = app.get('port')
const server = app.listen(port)
const db = new Database('database.sqlite', { verbose: console.log })

// const majorCode = '71520'
// const major = db
//   .prepare(`SELECT * FROM courses where CourseCode = ?`)
//   .get(majorCode)
// for (const major of stmt.iterate()) {
//   console.log(major.CourseCode + ': ' + major.CourseName)
// }
// console.log(major.CourseCode + ': ' + major.CourseName)

// Send data to the front-end
app.get('/api', (req, res) => {
  res.send({
    exampleMessage: 'React client connected to the Express server!'
  })
})
app.post('/api/getMajorName', (req, res) => {
  const data = req.body
  console.log(data.CourseCode)
  const majorCode = data.CourseCode
  console.log(majorCode)
  const major = db
    .prepare(`SELECT * FROM courses where CourseCode = ?`)
    .get(majorCode)
  res.json({ majorName: major?.CourseName })
})

server.on('listening', () => {
  console.clear()
  console.log(
    'Express server started on \x1b[32mhttp://%s:%d',
    app.get('host'),
    port
  )
  console.log('\x1b[33mTo restart server, type `rs`\x1b[0m')
})

// db.close()
