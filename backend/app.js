import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import mongoose from 'mongoose';
import helmet from 'koa-helmet';
import cors from '@koa/cors'
import routing from './routes/loader.js';

import config from './utils/config.js'

mongoose.connect(config.MONGODB_URI).then(() => {
  console.log('connected to mongodb')
}).catch(error => {
  console.log('failed to connect to mongodb', error.message)
})

const app = new Koa()

app
    .use(logger())
    .use(bodyParser())
    .use(helmet())
    .use(cors());
routing(app)

export default app
