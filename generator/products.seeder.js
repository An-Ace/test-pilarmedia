import { PrismaClient } from '@prisma/client'
import products from './products.seed.json' with { type: "json" };
const prisma = new PrismaClient({
  log: ['query']
})

function seedProduct() {
  prisma.products.createMany({ data: products })
  .then(res => console.log('Seed Success'))
  
}

seedProduct()