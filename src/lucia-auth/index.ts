// lucia.ts
import { lucia } from "lucia";

// expect error (see next section)
export const auth = lucia({
  env: "DEV"
});

export type Auth = typeof auth