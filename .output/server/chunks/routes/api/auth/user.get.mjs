import { e as eventHandler, g as getRequestHeader, c as createError } from '../../../runtime.mjs';
import JWT from 'jsonwebtoken';
import { SECRET } from './login.post.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'zod';

const TOKEN_TYPE = "Bearer";
const extractToken = (authHeaderValue) => {
  const [, token] = authHeaderValue.split(`${TOKEN_TYPE} `);
  return token;
};
const ensureAuth = (event) => {
  const authHeaderValue = getRequestHeader(event, "authorization");
  if (typeof authHeaderValue === "undefined") {
    throw createError({ statusCode: 403, statusMessage: "Need to pass valid Bearer-authorization header to access this endpoint" });
  }
  const extractedToken = extractToken(authHeaderValue);
  try {
    return JWT.verify(extractedToken, SECRET);
  } catch (error) {
    console.error("Login failed. Here's the raw error:", error);
    throw createError({ statusCode: 403, statusMessage: "You must be logged in to use this endpoint" });
  }
};
const user_get = eventHandler((event) => {
  const user = ensureAuth(event);
  return user;
});

export { user_get as default };
//# sourceMappingURL=user.get.mjs.map
