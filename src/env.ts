import { z, ZodError } from "zod";
import { expand } from "dotenv-expand"
import { config } from "dotenv"

expand(config())
const EnvSchema = z.object({
	PORT: z.coerce.number().default(9999),
	DB_FILE_NAME: z.string().url()
})

export type env = z.infer<typeof EnvSchema>
let env: env;

try {
	env = EnvSchema.parse(process.env);
} catch (e) {
	const error = e as ZodError;
	console.log("Invalid env:")
	console.log(error.flatten());
	process.exit(1)
}

export default env
