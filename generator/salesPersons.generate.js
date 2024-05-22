import fs from 'fs'
import { faker } from '@faker-js/faker'

function generateSalesPerson() {
  const salesPersonName = faker.person.fullName();
  const password = faker.internet.password();
  const address = faker.location.city();
  const phone = faker.phone.number('08##########'); ;

  return {
    salesPersonName,
    password,
    address,
    phone,
  };
}

const numberOfProducts = 10;
const salesPerson = Array.from({ length: numberOfProducts }, generateSalesPerson);

// Menyimpan hasil ke dalam file JSON
const fileName = 'generator/salesPersons.seed.json';
fs.writeFileSync(fileName, JSON.stringify(salesPerson, null, 2));
console.log(`Data produk telah disimpan dalam file: ${fileName}`);
