import { d as defineEventHandler } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const monthly = defineEventHandler(async (event) => {
  return [
    { month: "January", sales: 100 },
    { month: "February", sales: 120 }
  ];
});

export { monthly as default };
//# sourceMappingURL=monthly.mjs.map
