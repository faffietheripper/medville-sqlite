/*
  Warnings:

  - You are about to drop the column `sessionId` on the `FormData` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "email" TEXT,
    "message" TEXT NOT NULL DEFAULT '',
    "userId" TEXT,
    CONSTRAINT "FormData_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_FormData" ("email", "id", "message", "name", "userId") SELECT "email", "id", "message", "name", "userId" FROM "FormData";
DROP TABLE "FormData";
ALTER TABLE "new_FormData" RENAME TO "FormData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
