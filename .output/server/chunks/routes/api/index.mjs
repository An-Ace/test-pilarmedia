import { d as defineEventHandler, a as getQuery } from '../../runtime.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient({
  log: ["query"]
});

const index = defineEventHandler(async (event) => {
  const { salesID, salesDate, productID, salesAmount, salesPersonID, page = 1, pageSize = 50, product, salesPerson, orderBy, order = "ascend", productName } = getQuery(event);
  const orderType = order === "descend" ? "desc" : "asc";
  const getSales = await prisma.sales.findMany({
    skip: (Number(page) - 1) * Number(pageSize) || void 0,
    orderBy: {
      salesDate: orderBy === "salesDate" && ["ascend", "descend"].includes(String(order) || "") ? orderType : void 0,
      product: orderBy === "product.productName" ? { productName: ["ascend", "descend"].includes(String(order) || "") ? orderType : void 0 } : void 0
    },
    take: Number(pageSize) || void 0,
    relationLoadStrategy: "join",
    where: {
      salesID: Number(salesID) || void 0,
      salesDate: salesDate || void 0,
      productID: Number(productID) || void 0,
      salesAmount: Number(salesAmount) || void 0,
      salesPersonID: Number(salesPersonID) || void 0,
      product: {
        productName: productName ? { contains: productName, mode: "insensitive" } : void 0
      }
    },
    include: { product: product === "true" || void 0, salesPerson: salesPerson === "true" || void 0 }
  });
  const totalItem = await prisma.sales.count();
  return {
    data: getSales,
    totalItem
  };
});

export { index as default };
//# sourceMappingURL=index.mjs.map
