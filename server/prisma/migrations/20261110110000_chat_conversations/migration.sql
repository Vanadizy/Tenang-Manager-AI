CREATE TABLE "ChatConversation" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'New chat',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "ChatConversation_pkey" PRIMARY KEY ("id")
);

ALTER TABLE "ChatMessage" ADD COLUMN "conversationId" TEXT;

WITH legacy AS (
    SELECT "userId", 'legacy_' || md5("userId") AS "id",
           MIN("createdAt") AS "createdAt", MAX("createdAt") AS "updatedAt"
    FROM "ChatMessage"
    WHERE "conversationId" IS NULL
    GROUP BY "userId"
)
INSERT INTO "ChatConversation" ("id", "title", "createdAt", "updatedAt", "userId")
SELECT "id", 'Earlier chats', "createdAt", "updatedAt", "userId"
FROM legacy;

UPDATE "ChatMessage" AS message
SET "conversationId" = 'legacy_' || md5(message."userId")
WHERE message."conversationId" IS NULL;

ALTER TABLE "ChatConversation" ADD CONSTRAINT "ChatConversation_userId_fkey"
    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "ChatMessage" ADD CONSTRAINT "ChatMessage_conversationId_fkey"
    FOREIGN KEY ("conversationId") REFERENCES "ChatConversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE INDEX "ChatConversation_userId_updatedAt_idx" ON "ChatConversation"("userId", "updatedAt");
CREATE INDEX "ChatMessage_conversationId_createdAt_idx" ON "ChatMessage"("conversationId", "createdAt");
