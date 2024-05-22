import { d as defineEventHandler } from '../../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const bySalesperson = defineEventHandler(async (event) => {
  return [
    { salesperson: "Alice", sales: 300 },
    { salesperson: "Bob", sales: 500 }
  ];
});

export { bySalesperson as default };
//# sourceMappingURL=by-salesperson.mjs.map
