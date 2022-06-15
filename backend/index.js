import config from './utils/config.js'
import app from './app.js'

app.listen(config.PORT, () => {
  console.log(`Server running on ${config.PORT}`)
})