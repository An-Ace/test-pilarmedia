import { e as eventHandler, r as readBody, c as createError } from '../../../runtime.mjs';
import { z } from 'zod';
import JWT from 'jsonwebtoken';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const refreshTokens = {};
const SECRET = "dummy";
const login_post = eventHandler(async (event) => {
  const result = z.object({ username: z.string().min(1), password: z.literal("hunter2") }).safeParse(await readBody(event));
  if (!result.success) {
    throw createError({ statusCode: 403, statusMessage: "Unauthorized, hint: try `hunter2` as password" });
  }
  const expiresIn = 15;
  const refreshToken = Math.floor(Math.random() * (1e15 - 1 + 1)) + 1;
  const { username } = result.data;
  const user = {
    username,
    picture: "https://github.com/nuxt.png",
    name: "User " + username
  };
  const accessToken = JWT.sign({ ...user, scope: ["test", "user"] }, SECRET, { expiresIn });
  refreshTokens[refreshToken] = {
    accessToken,
    user
  };
  return {
    token: {
      accessToken,
      refreshToken
    }
  };
});

export { SECRET, login_post as default };
//# sourceMappingURL=login.post.mjs.map
