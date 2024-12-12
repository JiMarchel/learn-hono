import { createRouter } from "../../lib/create-app.js";
import * as routes from "./tasks.routes.js"
import * as handler from "./tasks.handlers.js"

const app = createRouter().openapi(routes.list, handler.list)

export default app
