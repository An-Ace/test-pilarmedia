import { d as defineEventHandler } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const yearly = defineEventHandler(async (event) => {
  return [
    { year: 2020, sales: 1200 },
    { year: 2021, sales: 1500 }
  ];
});

export { yearly as default };
//# sourceMappingURL=yearly.mjs.map
