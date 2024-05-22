import { PrismaClient } from '@prisma/client'
import salesperson from './salespersons.seed.json' with { type: "json" };
const prisma = new PrismaClient({
  log: ['query']
})

function seedSalesPerson() {
  prisma.salespersons.createMany({ data: salesperson })
  .then(res => console.log('Seed Success'))
  
}

seedSalesPerson()