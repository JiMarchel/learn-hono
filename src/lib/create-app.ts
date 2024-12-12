import { OpenAPIHono } from "@hono/zod-openapi"
import { notFound, onError, serveEmojiFavicon } from "stoker/middlewares"
import { pinoLogger } from "../middlewares/pino-logger.js"
import type { AppBindings } from "./types.js"
import { defaultHook } from "stoker/openapi"

export const createRouter = () => {
	return new OpenAPIHono<AppBindings>({
		strict: false,
		defaultHook
	})
}

export default function createApp() {
	const app = createRouter()
	app.use(pinoLogger())
	app.use(serveEmojiFavicon("📖"))

	app.notFound(notFound)
	app.onError(onError)
	return app
}
