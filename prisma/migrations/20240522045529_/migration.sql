-- CreateTable
CREATE TABLE "Sales" (
    "salesID" SERIAL NOT NULL,
    "salesDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productID" INTEGER NOT NULL,
    "salesAmount" INTEGER NOT NULL,
    "salesPersonID" INTEGER NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("salesID")
);

-- CreateTable
CREATE TABLE "Products" (
    "productID" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("productID")
);

-- CreateTable
CREATE TABLE "Salespersons" (
    "salesPersonID" SERIAL NOT NULL,
    "salesPersonName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Salespersons_pkey" PRIMARY KEY ("salesPersonID")
);

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_productID_fkey" FOREIGN KEY ("productID") REFERENCES "Products"("productID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sales" ADD CONSTRAINT "Sales_salesPersonID_fkey" FOREIGN KEY ("salesPersonID") REFERENCES "Salespersons"("salesPersonID") ON DELETE RESTRICT ON UPDATE CASCADE;
