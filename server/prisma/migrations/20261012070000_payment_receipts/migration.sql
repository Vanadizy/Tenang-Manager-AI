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

CREATE INDEX "PaymentReceipt_rentPaymentId_paymentDate_idx" ON "PaymentReceipt"("rentPaymentId", "paymentDate");

ALTER TABLE "PaymentReceipt" ADD CONSTRAINT "PaymentReceipt_rentPaymentId_fkey" FOREIGN KEY ("rentPaymentId") REFERENCES "RentPayment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

INSERT INTO "PaymentReceipt" ("id", "rentPaymentId", "amount", "paymentDate", "paymentMethod", "reference")
SELECT 'legacy_' || md5("id"), "id", "amountPaid", COALESCE("paymentDate", "createdAt"), "paymentMethod", "reference"
FROM "RentPayment" WHERE "amountPaid" > 0;

UPDATE "RentPayment" SET "amountPaid" = 0 WHERE "amountPaid" > 0;
