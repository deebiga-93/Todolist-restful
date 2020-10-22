import express,{Express} from'express'
import { start } from 'repl'
import todoRoutes from "./routes"
const app: Express = express()
const Port= 4000;
app.use(todoRoutes)
app.use(pg)
app.use(mongodb)
app.use(start)
app.listen(Port)
