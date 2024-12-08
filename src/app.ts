import { OpenAPIHono } from "@hono/zod-openapi"
import { notFound, onError } from "stoker/middlewares"
import { pinoLogger } from "./middlewares/pino-logger.js"
import type { PinoLogger } from "hono-pino"


interface AppBindings {
	Variables: {
		logger: PinoLogger
	}
}

const app = new OpenAPIHono<AppBindings>()

app.get('/', (c) => {
	return c.text('hehe Hono!')
})

app.get("/error", (c) => {
	c.status(422);
	c.var.logger.info("Log here")
	throw new Error("Oh no")
})

app.notFound(notFound)
app.onError(onError)
app.use(pinoLogger())

export default app
