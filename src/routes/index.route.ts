import { createRoute, z } from "@hono/zod-openapi";
import { createRouter } from "../lib/create-app.js";
import { jsonContent } from "stoker/openapi/helpers";
import * as HttpStatusCode from "stoker/http-status-codes"
import { createMessageObjectSchema } from "stoker/openapi/schemas";

const router = createRouter().openapi(createRoute({
	tags: ["index"],
	method: "get",
	path: "/",
	responses: {
		[HttpStatusCode.OK]: jsonContent(
			createMessageObjectSchema("Tasks API"),
			"Tasks API Index",
		)
	}
}), (c) => {
	return c.json({
		message: "Tasks API"
	})
})

export default router
