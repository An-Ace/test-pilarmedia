import { PrismaClient } from '@prisma/client'
import sales from './sales.seed.json' with { type: "json" };
const prisma = new PrismaClient({
  log: ['query']
})
const control = {
  from: 1,
  to: 100
}
function seedSales() {
  const data = sales.slice(control.from - 1, control.to)
  prisma.sales.createMany({ data })
  .then(res => console.log('Seed Success'))
  
}

seedSales()