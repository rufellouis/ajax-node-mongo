
const controllers = require('./routes/controllers')
const app = require('./server/server')



require('./routes/routes')(controllers, app)
