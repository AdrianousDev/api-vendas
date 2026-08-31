import { env } from '../env'
import { dataSource } from '../typeorm'
import { app } from './app'

dataSource
  .initialize()
  .then(() => {
    console.log('Database connected!')
    app.listen(env.PORT, () => {
      console.log(`Server running on port ${env.PORT}!`)
      console.log('API docs available at GET /docs')
    })
  })
  .catch(error => {
    console.log('Error initializing data source: ', error)
  })
