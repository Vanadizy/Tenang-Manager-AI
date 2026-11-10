CREATE TYPE "PaymentFrequency_new" AS ENUM ('monthly', 'yearly');
ALTER TABLE "Lease" ALTER COLUMN "paymentFrequency" DROP DEFAULT;
ALTER TABLE "Lease" ALTER COLUMN "paymentFrequency" TYPE "PaymentFrequency_new" USING (
  CASE WHEN "paymentFrequency"::text = 'yearly' THEN 'yearly' ELSE 'monthly' END
)::"PaymentFrequency_new";
ALTER TABLE "Lease" ALTER COLUMN "paymentFrequency" SET DEFAULT 'monthly';
DROP TYPE "PaymentFrequency";
ALTER TYPE "PaymentFrequency_new" RENAME TO "PaymentFrequency";

CREATE TABLE "ChatMessage" (
  "id" TEXT NOT NULL,
  "role" TEXT NOT NULL,
  "content" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "userId" TEXT NOT NULL,
  CONSTRAINT "ChatMessage_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "ChatMessage_userId_createdAt_idx" ON "ChatMessage"("userId", "createdAt");
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
