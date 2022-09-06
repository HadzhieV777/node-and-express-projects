const express = require('express');
const app = express();
const tasksRoutes = require('./routes/tasks.js');

//  Middlewares
app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
    res.send('Task manager app')
})

app.use('/api/v1/tasks', tasksRoutes)

// app.get('/api/v1/tasks')          - get all tasks
// app.post('/api/v1/tasks')         - create new task
// app.get('/api/v1/tasks/:id')      - get single task
// app.patch('/api/v1/tasks/:id')    - update task
// app.delete('/api/v1/tasks/:id')   - delete task



const port = 3000
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`)
})