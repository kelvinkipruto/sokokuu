-- CreateEnum
CREATE TYPE "Status" AS ENUM ('PENDING', 'PROCESSING', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "Continent" AS ENUM ('AFRICA', 'ASIA', 'EUROPE', 'NORTH_AMERICA', 'OCEANIA', 'SOUTH_AMERICA', 'ANTARCTICA');

-- CreateEnum
CREATE TYPE "AvailabilityStatus" AS ENUM ('AVAILABLE', 'OUT_OF_STOCK', 'BACK_ORDER');

-- CreateEnum
CREATE TYPE "LevelType" AS ENUM ('TRANSFER', 'PURCHASEORDER');

-- CreateTable
CREATE TABLE "Order" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "shippingAddress" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL,
    "dipatchBy" TIMESTAMP(3) NOT NULL,
    "processed" BOOLEAN NOT NULL DEFAULT false,
    "postageCost" DOUBLE PRECISION NOT NULL,
    "totalCost" DOUBLE PRECISION NOT NULL,
    "currency" TEXT NOT NULL,
    "orderId" SERIAL NOT NULL,
    "source" TEXT NOT NULL,
    "subSource" TEXT NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "countryId" TEXT NOT NULL,
    "postalServiceId" TEXT NOT NULL,
    "referenceNumber" TEXT NOT NULL,
    "externalReferenceNumber" TEXT NOT NULL,
    "postalTrackingNumber" TEXT NOT NULL,
    "createdBy" TEXT,
    "status" "Status" NOT NULL DEFAULT E'PENDING',
    "address1" TEXT,
    "address2" TEXT,
    "address3" TEXT,
    "town" TEXT,
    "region" TEXT,
    "phoneNumber" TEXT,
    "company" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "phoneCode" TEXT NOT NULL,
    "continent" "Continent" NOT NULL,
    "currency" TEXT NOT NULL,
    "taxRate" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CountryRegion" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "taxRate" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CountryRegion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItem" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "orderId" TEXT NOT NULL,
    "salesTax" DOUBLE PRECISION NOT NULL,
    "taxRate" DOUBLE PRECISION NOT NULL,
    "taxCostInclusive" BOOLEAN NOT NULL,
    "priceIncTax" DOUBLE PRECISION NOT NULL,
    "lineDiscount" DOUBLE PRECISION NOT NULL,
    "isService" BOOLEAN NOT NULL,

    CONSTRAINT "OrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderFolder" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "OrderFolder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderNotes" (
    "id" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "note" TEXT NOT NULL,
    "noteType" TEXT NOT NULL,
    "noteDate" TIMESTAMP(3) NOT NULL,
    "internal" BOOLEAN NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "orderNotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StockItem" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "barcodeNumber" TEXT NOT NULL,
    "metaData" TEXT NOT NULL,
    "purchasePrice" DOUBLE PRECISION NOT NULL,
    "retailPrice" DOUBLE PRECISION NOT NULL,
    "taxRate" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "inOrder" INTEGER NOT NULL,
    "due" INTEGER NOT NULL,
    "minimumLevel" INTEGER NOT NULL,
    "available" INTEGER NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "depth" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" TEXT NOT NULL,

    CONSTRAINT "StockItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "contactName" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "alternateAddress" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "secondaryPhoneNumber" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "faxNumber" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OrderToOrderFolder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Order_id_key" ON "Order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderId_key" ON "Order"("orderId");

-- CreateIndex
CREATE UNIQUE INDEX "Country_id_key" ON "Country"("id");

-- CreateIndex
CREATE UNIQUE INDEX "CountryRegion_id_key" ON "CountryRegion"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderItem_id_key" ON "OrderItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "OrderFolder_id_key" ON "OrderFolder"("id");

-- CreateIndex
CREATE UNIQUE INDEX "orderNotes_id_key" ON "orderNotes"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_id_key" ON "Stock"("id");

-- CreateIndex
CREATE UNIQUE INDEX "StockItem_id_key" ON "StockItem"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Category_id_key" ON "Category"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Supplier_id_key" ON "Supplier"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_OrderToOrderFolder_AB_unique" ON "_OrderToOrderFolder"("A", "B");

-- CreateIndex
CREATE INDEX "_OrderToOrderFolder_B_index" ON "_OrderToOrderFolder"("B");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CountryRegion" ADD CONSTRAINT "CountryRegion_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItem" ADD CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orderNotes" ADD CONSTRAINT "orderNotes_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StockItem" ADD CONSTRAINT "StockItem_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Supplier" ADD CONSTRAINT "Supplier_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToOrderFolder" ADD FOREIGN KEY ("A") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrderToOrderFolder" ADD FOREIGN KEY ("B") REFERENCES "OrderFolder"("id") ON DELETE CASCADE ON UPDATE CASCADE;
