import fs from 'fs'
import { faker } from '@faker-js/faker'

function generateProduct() {
  const productName = faker.commerce.productName();
  const price = faker.number.int({ min: 1000, max: 1000000 });
  const description = faker.lorem.sentence();
  const createdAt = faker.date.between({ from: '2023-05-20', to: '2024-05-22' }).toISOString();
  const updatedAt = faker.date.recent().toISOString();

  return {
    productName,
    price,
    description,
    createdAt,
    updatedAt
  };
}

const numberOfProducts = 50;
const products = Array.from({ length: numberOfProducts }, generateProduct);

// Menyimpan hasil ke dalam file JSON
const fileName = 'generator/products.seed.json';
fs.writeFileSync(fileName, JSON.stringify(products, null, 2));
console.log(`Data produk telah disimpan dalam file: ${fileName}`);
