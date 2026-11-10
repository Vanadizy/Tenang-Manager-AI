-- Manual bootstrap for a new, empty PostgreSQL database.
-- This mirrors the committed Prisma migrations. Run only once against the
-- intended empty database. Do not run if these tables/types already exist.

BEGIN;

-- From migration: 20261012041553_init
CREATE TYPE "PaymentFrequency" AS ENUM ('monthly', 'yearly');
CREATE TYPE "RecordStatus" AS ENUM ('pending', 'partial', 'paid', 'overdue', 'active', 'expired', 'terminated');
CREATE TYPE "BillType" AS ENUM ('water', 'electricity', 'other');

CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "phone" TEXT,
    "preferredLanguage" TEXT NOT NULL DEFAULT 'en',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Unit" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "propertyName" TEXT NOT NULL,
    "address" TEXT,
    "description" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    "monthlyRent" DECIMAL(14,2),
    CONSTRAINT "Unit_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Tenant" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT,
    "idNumber" TEXT,
    "emergencyContact" TEXT,
    "emergencyPhone" TEXT,
    "notes" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Lease" (
    "id" TEXT NOT NULL,
    "tenantId" TEXT NOT NULL,
    "unitId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,
    "rentAmount" DECIMAL(14,2) NOT NULL,
    "monthlyRent" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "paymentFrequency" "PaymentFrequency" NOT NULL DEFAULT 'monthly',
    "depositAmount" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "status" "RecordStatus" NOT NULL DEFAULT 'active',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "Lease_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "RentPayment" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "periodStart" TIMESTAMP(3) NOT NULL,
    "periodEnd" TIMESTAMP(3) NOT NULL,
    "amountDue" DECIMAL(14,2) NOT NULL,
    "amountPaid" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "paymentDate" TIMESTAMP(3),
    "paymentMethod" TEXT,
    "reference" TEXT,
    "status" "RecordStatus" NOT NULL DEFAULT 'pending',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "RentPayment_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Bill" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "billType" "BillType" NOT NULL,
    "description" TEXT NOT NULL,
    "amountDue" DECIMAL(14,2) NOT NULL,
    "amountPaid" DECIMAL(14,2) NOT NULL DEFAULT 0,
    "dueDate" TIMESTAMP(3) NOT NULL,
    "paymentDate" TIMESTAMP(3),
    "status" "RecordStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "EmailLog" (
    "id" TEXT NOT NULL,
    "recipient" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "bodyPreview" TEXT NOT NULL,
    "emailType" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "errorMessage" TEXT,
    "relatedId" TEXT,
    "sentAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,
    CONSTRAINT "EmailLog_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Setting" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,
    CONSTRAINT "Setting_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "ChatMessage" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Contract" (
    "id" TEXT NOT NULL,
    "leaseId" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "generatedBy" TEXT,
    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE INDEX "Unit_userId_idx" ON "Unit"("userId");
CREATE INDEX "Tenant_userId_idx" ON "Tenant"("userId");
CREATE INDEX "ChatMessage_userId_createdAt_idx" ON "ChatMessage"("userId", "createdAt");
CREATE INDEX "Unit_propertyName_name_idx" ON "Unit"("propertyName", "name");
CREATE INDEX "Tenant_fullName_idx" ON "Tenant"("fullName");
CREATE INDEX "Lease_status_endDate_idx" ON "Lease"("status", "endDate");
CREATE INDEX "RentPayment_status_periodEnd_idx" ON "RentPayment"("status", "periodEnd");
CREATE INDEX "Bill_status_dueDate_idx" ON "Bill"("status", "dueDate");
CREATE INDEX "EmailLog_emailType_status_idx" ON "EmailLog"("emailType", "status");
CREATE UNIQUE INDEX "Setting_key_userId_key" ON "Setting"("key", "userId");
CREATE INDEX "Contract_leaseId_language_idx" ON "Contract"("leaseId", "language");

ALTER TABLE "Unit" ADD CONSTRAINT "Unit_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "Lease" ADD CONSTRAINT "Lease_tenantId_fkey"
    FOREIGN KEY ("tenantId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "Lease" ADD CONSTRAINT "Lease_unitId_fkey"
    FOREIGN KEY ("unitId") REFERENCES "Unit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "RentPayment" ADD CONSTRAINT "RentPayment_leaseId_fkey"
    FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_leaseId_fkey"
    FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "EmailLog" ADD CONSTRAINT "EmailLog_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "Setting" ADD CONSTRAINT "Setting_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_leaseId_fkey"
    FOREIGN KEY ("leaseId") REFERENCES "Lease"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "Contract" ADD CONSTRAINT "Contract_generatedBy_fkey"
    FOREIGN KEY ("generatedBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- From migration: 20261012070000_payment_receipts
ALTER TABLE "RentPayment" ADD COLUMN "reminderDate" TIMESTAMP(3);

CREATE TABLE "PaymentReceipt" (
    "id" TEXT NOT NULL,
    "rentPaymentId" TEXT NOT NULL,
    "amount" DECIMAL(14,2) NOT NULL,
    "paymentDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentMethod" TEXT,
    "reference" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PaymentReceipt_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "PaymentReceipt_rentPaymentId_paymentDate_idx"
    ON "PaymentReceipt"("rentPaymentId", "paymentDate");

ALTER TABLE "PaymentReceipt" ADD CONSTRAINT "PaymentReceipt_rentPaymentId_fkey"
    FOREIGN KEY ("rentPaymentId") REFERENCES "RentPayment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- Preserve any existing payment history if the database is not actually empty.
INSERT INTO "PaymentReceipt" ("id", "rentPaymentId", "amount", "paymentDate", "paymentMethod", "reference")
SELECT 'legacy_' || md5("id"), "id", "amountPaid", COALESCE("paymentDate", "createdAt"), "paymentMethod", "reference"
FROM "RentPayment"
WHERE "amountPaid" > 0;

UPDATE "RentPayment" SET "amountPaid" = 0 WHERE "amountPaid" > 0;

COMMIT;
