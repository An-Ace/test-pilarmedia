import fs from 'fs'
import { faker } from '@faker-js/faker'

function generateSales() {
  const salesDate = faker.date.between({ from: '2023-05-20', to: '2024-05-22' }).toISOString();
  const productID = faker.number.int({ min: 1, max: 50 });
  const salesAmount = faker.number.int({min: 1, max: 5 });
  const salesPersonID = faker.number.int({ min: 1, max: 10 });

  return {
    salesDate,
    productID,
    salesAmount,
    salesPersonID,
  };
}

const numberOfProducts = 200;
const sales = Array.from({ length: numberOfProducts }, generateSales);

// Menyimpan hasil ke dalam file JSON
const fileName = 'generator/sales.seed.json';
fs.writeFileSync(fileName, JSON.stringify(sales, null, 2));
console.log(`Data produk telah disimpan dalam file: ${fileName}`);
