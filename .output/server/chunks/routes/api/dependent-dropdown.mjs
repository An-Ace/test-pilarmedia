import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const dependentDropdown = defineEventHandler(async (event) => {
  const { provinsi, kabupaten, kecamatan, kelurahan } = await readBody(event);
  return {
    result: `Provinsi: ${provinsi}, Kabupaten: ${kabupaten}, kecamatan: ${kecamatan}, Kelurahan: ${kelurahan}`
  };
});

export { dependentDropdown as default };
//# sourceMappingURL=dependent-dropdown.mjs.map
