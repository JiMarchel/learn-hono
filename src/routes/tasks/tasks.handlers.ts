import type { ListRoute } from "./tasks.routes.js";
import type { AppRouteHandler } from "../../lib/types.js";

export const list: AppRouteHandler<ListRoute> = (c) => {
	return c.json([{
		name: "Hono",
		done: false
	}])
}
